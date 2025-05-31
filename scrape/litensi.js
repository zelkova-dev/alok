const fetch = require('node-fetch');
const fs = require('fs');

const apiid = '';
const apiKey = '';

async function cekStatusAkunMedan() {
  const url = 'https://api.medanpedia.co.id/profile';

  try {
      const response = await fetch(url, {
          method: 'POST', // Menggunakan metode POST
          headers: {
              'Content-Type': 'application/json' // Menyatakan format data yang dikirim
          },
          body: JSON.stringify({
            api_id: apiid,
            api_key: apiKey
          })
      });

      const data = await response.json(); // Mengonversi respons ke JSON

      if (data) {
          return data // Mengembalikan data jika berhasil
      } else {
          throw new Error('Error: ' + data.data); // Menangani error dari API
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return null; // Mengembalikan null jika terjadi kesalahan
  }
}

async function cekLayanan() {
  const url = 'https://api.medanpedia.co.id/services';

    try {
      const response = await fetch(url, {
        method: 'POST', // Menggunakan metode POST
        headers: {
            'Content-Type': 'application/json' // Menyatakan format data yang dikirim
        },
        body: JSON.stringify({
            api_id: apiid,
            api_key: apiKey
        })
      });

      const data = await response.json(); // Mengonversi respons ke JSON

      if (data.success = true) {
        return data
      } else {
        throw new Error('Error: \n' + data); 
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return null; // Mengembalikan null jika terjadi kesalahan
  }
}

async function orderLayanan(id, target, quantity) {
  const url = 'https://api.medanpedia.co.id/order';

    try {
      const response = await fetch(url, {
        method: 'POST', // Menggunakan metode POST
        headers: {
            'Content-Type': 'application/json' // Menyatakan format data yang dikirim
        },
        body: JSON.stringify({
            api_id: apiid,
            api_key: apiKey,
            service: id,
            target: target,
            quantity: quantity
        })
      });


      const data = await response.json(); // Mengonversi respons ke JSON

      if (data.success = true) {
          return data; // Mengembalikan data jika berhasil
      } else {
          throw new Error('Error: ' + data.data); // Menangani error dari API
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return null; // Mengembalikan null jika terjadi kesalahan
  }
}

async function cekStatusOrderanKebsos(id) {
    const url = 'https://api.medanpedia.co.id/status';
  
      try {
        const response = await fetch(url, {
          method: 'POST', // Menggunakan metode POST
          headers: {
              'Content-Type': 'application/json' // Menyatakan format data yang dikirim
          },
          body: JSON.stringify({
              api_id: apiid,
              api_key: apiKey,
              id: id
          })
        });
  
  
        const data = await response.json(); // Mengonversi respons ke JSON
  
        if (data.success = true) {
            return data // Mengembalikan data jika berhasil
        } else {
            throw new Error('Error: ' + data.data); // Menangani error dari API
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return null; // Mengembalikan null jika terjadi kesalahan
    }
  }





// ------------------------------------------------------------------------------------------------------------------------------------------------- \\



const token5Sim = "";

async function cekStatusAkun5Sim() {
  const url = 'https://5sim.net/v1/user/profile';
  
  try {
    const response = await fetch(url, {
      method: 'GET', // Changed to GET method
      headers: {
        'Authorization': 'Bearer ' + token5Sim,
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json(); // Convert response to JSON
    
    if (data) {
      return data
    } else {
      throw new Error('Error: \n' + data); 
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null; // Return null if there is an error
  }
}

async function cekLayananSms(negara, layanan) {
  const url = `https://5sim.net/v1/guest/prices?country=${negara}&product=${layanan}`;
  console.log(`Fetching data from: ${url}`)
  try {
    // Fetch data from the first URL
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token5Sim,
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json(); // Convert response to JSON

    return data; // Return the combined data if successful
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null; // Return null if there is an error
  }
}

  async function cekOperatorSms() {
    const url = 'https://litensi.id/api/sms/operators';
  
      try {
        const response = await fetch(url, {
          method: 'POST', // Menggunakan metode POST
          headers: {
              'Content-Type': 'application/json' // Menyatakan format data yang dikirim
          },
          body: JSON.stringify({
              api_id: apiid,
              api_key: apiKey
          })
        });
  
  
        const data = await response.json(); // Mengonversi respons ke JSON
  
        if (data.success = true) {
            return data.data; // Mengembalikan data jika berhasil
        } else {
            throw new Error('Error: ' + data.data); // Menangani error dari API
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return null; // Mengembalikan null jika terjadi kesalahan
    }
  }
  
async function beliLayananSms(country, item, layanan) {
  const url = `https://5sim.net/v1/user/buy/activation/${country}/${item}/${layanan}`
  console.log(`Fetching data from: ${url}`)
  try {
    // Fetch data from the first URL
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token5Sim,
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json(); // Convert response to JSON

    return data; // Return the combined data if successful
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null; // Return null if there is an error
  }
}

async function cekStatusOrderSms(order_id) {
    const url = `https://5sim.net/v1/user/check/${order_id}`;

  try {
    // Fetch data from the first URL
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token5Sim,
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json(); // Convert response to JSON

    return data; // Return the combined data if successful
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null; // Return null if there is an error
  }
}

async function cancelSms(order_id) {
  const url = `https://5sim.net/v1/user/cancel/${order_id}`;

  try {
    // Fetch data from the first URL
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token5Sim,
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json(); // Convert response to JSON

    return data; // Return the combined data if successful
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null; // Return null if there is an error
  }
}

async function finishSms(order_id) {
    const url = `  https://5sim.net/v1/user/finish/${order_id}`;

    try {
      // Fetch data from the first URL
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token5Sim,
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json(); // Convert response to JSON
  
      return data; // Return the combined data if successful
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return null; // Return null if there is an error
    }
  }


module.exports = { cekStatusAkunMedan, cekLayanan, orderLayanan, cekStatusOrderanKebsos, cekStatusAkun5Sim, cekLayananSms, cekOperatorSms, beliLayananSms, cekStatusOrderSms, cancelSms, finishSms }