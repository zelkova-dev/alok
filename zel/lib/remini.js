const axios = require('axios');
const FormData = require('form-data');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const KEY = Buffer.from('KgACJju0JScxBvlP', 'latin1');
const IV = Buffer.from('wmozBgboU9HRzWG6', 'latin1');

const tokenSign = (data, timestamp) => {
  const input = data + timestamp;
  const cipher = crypto.createCipheriv('aes-128-cbc', KEY, IV);
  const encrypted = cipher.update(input, 'utf8', 'hex') + cipher.final('hex');
  const hash = crypto.createHash('sha256').update(input).digest('hex');
  return `${encrypted}.${hash}`;
};

const request = async (endpoint, data, headers = {}) => {
  try {
    const response = await axios.post(`https://ai-api.free-videoconverter.net/v4/sr/${endpoint}`, data, {
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Postify/1.0.0'
      },
      timeout: 60000,
      retryDelay: 5000,
      retryCount: 3
    });
    return response.data;
  } catch (error) {
    console.error(`${endpoint}:`, error.message);
    throw error;
  }
};

const imgData = async (imgPath) => {
  if (typeof imgPath === 'string' && fs.existsSync(imgPath)) {
    return await fs.promises.readFile(imgPath);
  } else {
    throw new Error('Invalid file path or file not found.');
  }
};

const remini = async (imgPath, scale = 2) => {
  try {
    const fileData = await imgData(imgPath);
    const imgmd5 = crypto.createHash('md5').update(fileData).digest('hex');
    const formData = new FormData();
    formData.append('img', fileData, { filename: `${uuidv4()}.jpg` });
    formData.append('name', `${uuidv4()}.jpg`);
    const timestamp = (new Date()).getTime();
    formData.append('sign', '');
    
    // Upload the image
    const uploadRes = await request('upload', formData, formData.getHeaders());
    await checkProgress(uploadRes.token);
    await startProcessing(uploadRes.token, imgmd5, scale);
  } catch (error) {
    console.error('Error during conversion:', error.message);
  }
};

const checkProgress = async (token) => {
  try {
    const sRes = await request('status', { code: token });
    console.log(`Progress for token: ${token}`);
    if (sRes.status === '201') {
      // Wait before checking again
      await new Promise(resolve => setTimeout(resolve, 5000));
      await checkProgress(token);
    } else {
      await handleResult(sRes.key);
    }
  } catch (error) {
    console.error('Error checking progress:', error.message);
  }
};

const startProcessing = async (token, imgmd5, scale) => {
  try {
    const s2Res = await request('sr', { imgmd5, scale, sign: tokenSign(imgmd5 + scale, (new Date()).getTime()) });
    console.log('Processing result:', s2Res);
    await handleResult(s2Res.key);
  } catch (error) {
    console.error('Error starting processing:', error.message);
  }
};

const handleResult = async (key) => {
  try {
    const sRes = await request('status', { code: key });
    console.log('Final result:', sRes);
    if (sRes.status === '201') {
      // Wait and retry if still processing
      await new Promise(resolve => setTimeout(resolve, 5000));
      await handleResult(key);
    } else {
      console.log('Image processing completed.');
      // Here you can implement code to return or save the processed image URL
    }
  } catch (error) {
    console.error('Error handling result:', error.message);
  }
};

// Export the remini function
module.exports = { remini };
