const fetch = require('node-fetch')
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')
const moment = require('moment-timezone')

const productkeydigi = 'df06c663-a493-523d-a4c8-909961d0af71'
const usernamedigi = 'pudewuoQw75W'
const devkeydigi = 'df06c663-a493-523d-a4c8-909961d0af71'
const refIdsFilePath = path.join(__dirname, './scrape/dataBuyerDigi.json')

function shuffleString(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr.join('');
}

async function getNextRefId() {
    let refIdsData = { lastRefId: 0, transactions: [] };
    try {
        const data = fs.readFileSync(refIdsFilePath, 'utf8')
        refIdsData = JSON.parse(data)
    } catch (err) {
        console.error('Gagal membaca file, menggunakan default ref_id 0:', err)
    }
    refIdsData.lastRefId += 1;
    return refIdsData.lastRefId;
}

async function saveTransaction(customer_no, ref_id) {
    let refIdsData = { lastRefId: 0, transactions: [] };
    try {
        const data = fs.readFileSync(refIdsFilePath, 'utf8')
        refIdsData = JSON.parse(data)
    } catch (err) {
        console.error('Gagal membaca file:', err)
    }
    refIdsData.transactions.push({ customer_no, ref_id })
    fs.writeFileSync(refIdsFilePath, JSON.stringify(refIdsData, null, 2))
}

async function cekStatusAkunDigi() {
    // Menggunakan crypto untuk membuat MD5 hash
    let sign = crypto.createHash('md5').update(usernamedigi + productkeydigi + "depo").digest('hex')

    let url = 'https://api.digiflazz.com/v1/cek-saldo'

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cmd: "deposit",
                username: usernamedigi,
                sign: sign
            })
        })

        const data = await response.json()
		console.log(data)
        if (data) {
            return data;
        } else {
            return data;
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message)
        return null
    }
}

async function cekLayananDigiPrabayar() {
    let sign = crypto.createHash('md5').update(usernamedigi + productkeydigi + "pricelist").digest('hex');

    let url = 'https://api.digiflazz.com/v1/price-list';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cmd: "prepaid",
                username: usernamedigi,
                sign: sign
            })
        });

        const data = await response.json();

        if (data && data.data) {
            return data;
        } else {
            console.log('Data kosong');
            return null;
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        return null;
    }
}


async function isiSaldoDigi(amount, bank, owner_name) {
    const sign = crypto.createHash('md5').update(usernamedigi + productkeydigi + "deposit").digest('hex') // Hitung signature
  
    const url = 'https://api.digiflazz.com/v1/cek-saldo'
  
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernamedigi,
                amount: amount,
                bank: bank,
                owner_name: owner_name,
                sign: sign
            })
        })
  
        const data = await response.json()
        console.log(sign)
        if (data) {
            return data
        } else {
            throw new Error('Error: ' + JSON.stringify(data.data)) // Log yang lebih baik
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message) // Hanya log error message
        return null
    }
  }

async function orderDigi(buyerSkuCode, customerNo) {
  const date = moment.tz('Asia/Jakarta').format('DDMMMMYYYY')
  const randomString = Math.random().toString(36).substring(2, 9);
  const hashonya = crypto.createHash('md5').update(date + randomString).digest('hex');
  const shuffledHash = shuffleString(hashonya);
  const random5Digits = shuffledHash.substring(0, 5);
  const refId = `MAYLI${random5Digits}`; 
  const sign = crypto.createHash('md5').update(usernamedigi + productkeydigi + refId).digest('hex');
  const url = 'https://api.digiflazz.com/v1/transaction'

  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usernamedigi,
            buyer_sku_code: buyerSkuCode,
            customer_no: customerNo,
            ref_id: refId,
            sign: sign
        })
    })

    const data = await response.json()
    console.log(sign)
    if (data && data.data) {
        return data;
    } else {
        throw new Error('Error: ' + JSON.stringify(data.data))
    }
} catch (error) {
    console.error('Terjadi kesalahan:', error.message)
    return null
}
}

async function cekItemDigi(buyerSkuCode) {
  const sign = crypto.createHash('md5').update(usernamedigi + productkeydigi + "pricelist").digest('hex');
  const url = 'https://api.digiflazz.com/v1/price-list'
  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cmd: "prepaid",
            username: usernamedigi,
            code: buyerSkuCode,
            sign: sign
        })
    })

    const data = await response.json()
    console.log(sign)
    if (data && data.data) {
        return data;
    } else {
        throw new Error('Error: ' + JSON.stringify(data.data))
    }
} catch (error) {
    console.error('Terjadi kesalahan:', error.message)
    return null
}
}

async function cekOrderanDigi(refId, buyerSkuCode, customerNo) {
    const sign = crypto.createHash('md5').update(usernamedigi + productkeydigi + refId).digest('hex');
    const url = 'https://api.digiflazz.com/v1/transaction'
  
    try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: usernamedigi,
              buyer_sku_code: buyerSkuCode,
              customer_no: customerNo,
              ref_id: refId,
              sign: sign
          })
      })
  
      const data = await response.json()
      console.log(sign)
      if (data && data.data) {
          return data;
      } else {
          throw new Error('Error: ' + JSON.stringify(data.data))
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error.message)
      return null
  }
  }

module.exports = { cekStatusAkunDigi, cekLayananDigiPrabayar, isiSaldoDigi, orderDigi, cekItemDigi, cekOrderanDigi };
