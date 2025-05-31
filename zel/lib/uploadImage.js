const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function up(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("uploader", fileStream);

  try {
    const response = await axios.post("https://merllerm.biz.id/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

module.exports = { up }