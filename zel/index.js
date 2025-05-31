require('./len')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const CFonts = require('cfonts')
const path = require('path')
const readline = require("readline");
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const figlet = require("figlet")
const archiver = require('archiver')
const { exec, spawn, execSync } = require("child_process")
const usePairingCode = true
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

const harinya = moment.tz('Asia/Jakarta').format('dddd')
const tanggalnya = moment.tz('Asia/Jakarta').format('DD')
const bulannya = moment.tz('Asia/Jakarta').format('MM')
const tahunnya = moment.tz('Asia/Jakarta').format('YYYY')
const namabulannya = moment.tz('Asia/Jakarta').format('MMMM')
const jamnya = moment.tz('Asia/Jakarta').format('HH')
const menitnya = moment.tz('Asia/Jakarta').format('mm')
const detiknya = moment.tz('Asia/Jakarta').format('ss')
const waktubackup = moment.tz('Asia/Jakarta').format('DDMMMM')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)


console.log(color(figlet.textSync(`${global.botname}`, {
font: 'DOS Rebel',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 100,
whitespaceBreak: false
}), 'blue'))

console.log(chalk.white.bold(`${chalk.green.bold(`Halo own ${global.ownername}`)}         
- - - - - - - - - - - - - - - - - - - -
${chalk.green.bold("Good Luck")}\n`));

async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const lenwy = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: [ 'Ubuntu' , 'Chrome' , '20.0.04']
});
if(usePairingCode && !lenwy.authState.creds.registered) {
    const phoneNumber = await question('Masukan Nomor Yang Diawali Dengan 62 :\n');
    const code = await lenwy.requestPairingCode(phoneNumber.trim(), 'ZELKOVA0')
    console.log(`🎁  Pairing Code : ${code}`)

  }

lenwy.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

lenwy.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!lenwy.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(lenwy, mek, store)
require("./lenwy")(lenwy, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

lenwy.ev.on('call', async (celled) => {
let botNumber = await lenwy.decodeJid(lenwy.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await lenwy.sendTextWithMentions(kopel.from, `*${lenwy.user.name}* Tidak Menerima Panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} Kamu Diblokir. Silahkan Hubungi Owner !`)
lenwy.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await lenwy.updateBlockStatus(kopel.from, "block")
}
}
}
})

lenwy.ev.on('group-participants.update', async (anu) => {
    try {
        let databasegc = JSON.parse(fs.readFileSync('./database/databaseGroup.json', 'utf8'))
        let settextwel = databasegc[anu.id].text_welcome
        let settextleft = databasegc[anu.id].text_left
        let metadata = await lenwy.groupMetadata(anu.id);
        let groupName = metadata.subject
        let participants = anu.participants;
        for (let num of participants) {
            let check = anu.author !== num && anu.author.length > 1;
            let tag = check ? [anu.author, num] : [num];
            const getProfilePicture = async (jid) => {
              try {
                  return await lenwy.profilePictureUrl(jid, 'image');
              } catch (error) {
                  return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"; // URL default
              }
            };
            let ppuser = await getProfilePicture(num, 'image');
            let ppgroup = await getProfilePicture(anu.id, 'image');
			      let thumbnailUrl = ppuser ? (ppuser !== 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' ? ppuser : ppgroup) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';

			      let ppgede = false

            let isWelcomeEnabled = global.db.data.chats[anu.id]?.wlcm;
            let isLeftEnabled = global.db.data.chats[anu.id]?.left;

            let usertag = `@${num.split("@")[0]}`

  if (settextwel.includes('@groupname')) {
    settextwel = settextwel.replace('@groupname', groupName)
  } 
  if (settextwel.includes('@usertag')) {
    settextwel = settextwel.replace('@usertag', usertag)
  }
  if (settextwel.includes('@jam')) {
    settextwel = settextwel.replace('@jam', jamnya)
  }
  if (settextwel.includes('@menit')) {
    settextwel = settextwel.replace('@menit', menitnya)
  }
  if (settextwel.includes('@detik')) {
    settextwel = settextwel.replace('@detik', detiknya)
  }
  if (settextwel.includes('@hari')) {
    settextwel = settextwel.replace('@hari', harinya)
  }
  if (settextwel.includes('@tanggal')) {
    settextwel = settextwel.replace('@tanggal', tanggalnya)
  }
  if (settextwel.includes('@bulan')) {
    settextwel = settextwel.replace('@bulan', bulannya)
  }
  if (settextwel.includes('@tahun')) {
    settextwel = settextwel.replace('@tahun', tahunnya)
  }
  if (settextwel.includes('@namabulan')) {
    settextwel = settextwel.replace('@namabulan', namabulannya)
  }

  if (!settextwel) {
    settextwel = `*Halo @${num.split("@")[0]}*\n📣 *Selamat Datang Di Group :* ${metadata.subject}`
  }

                if (isWelcomeEnabled && anu.action === 'add') {
                    let a = `${settextwel}`;
                    lenwy.sendMessage(anu.id, {
                        text: a,
                        contextInfo: {
                            mentionedJid: [...tag],
                            externalAdReply: {
                                title: `Selamat Datang`,
                                body: `${num.split("@")[0]}`,
                                thumbnailUrl: thumbnailUrl,
                                sourceUrl: "",
                                mediaType: 1,
                                renderLargerThumbnail: ppgede
                            }
                        }
                    });
                    await sleep(100);
                }
              
  if (settextleft.includes('@groupname')) {
    settextleft = settextleft.replace('@groupname', groupName)
  } 
  if (settextleft.includes('@usertag')) {
    settextleft = settextleft.replace('@usertag', usertag)
  }
  if (settextleft.includes('@jam')) {
    settextleft = settextleft.replace('@jam', jamnya)
  }
  if (settextleft.includes('@menit')) {
    settextleft = settextleft.replace('@menit', menitnya)
  }
  if (settextleft.includes('@detik')) {
    settextleft = settextleft.replace('@detik', detiknya)
  }
  if (settextleft.includes('@hari')) {
    settextleft = settextleft.replace('@hari', harinya)
  }
  if (settextleft.includes('@tanggal')) {
    settextleft = settextleft.replace('@tanggal', tanggalnya)
  }
  if (settextleft.includes('@bulan')) {
    settextleft = settextleft.replace('@bulan', bulannya)
  }
  if (settextleft.includes('@tahun')) {
    settextleft = settextleft.replace('@tahun', tahunnya)
  }
  if (settextleft.includes('@namabulan')) {
    settextleft = settextleft.replace('@namabulan', namabulannya)
  }
  
  if (!settextleft) {
    settextleft  =   `✉️ *Sampai Jumpa, @${num.split("@")[0]} Telah Meninggalkan Group*`
  }
                
                  if (isLeftEnabled && anu.action === 'remove') {
                    let b = `${settextleft}`;
                    lenwy.sendMessage(anu.id, {
                        text: b,
                        contextInfo: {
                            mentionedJid: [...tag],
                            externalAdReply: {
                                title: `Selamat Tinggal`,
                                body: `${num.split("@")[0]}`,
                                thumbnailUrl: thumbnailUrl,
                                sourceUrl: "",
                                mediaType: 1,
                                renderLargerThumbnail: ppgede
                            }
                        }
                    });
                    await sleep(100);
                  }

            }
        } catch (err) {
        console.log(err);
    }
});

function saveDatabase() {
  fs.writeFileSync('./src/database.json', JSON.stringify(global.db.data, null, 2))
}

async function compressSc(sourceDir, outputZip, selectedFiles = [
  'data', 'database', 'lib', 'scrape', 'src', 'Session',
  'author.json', 'banned.json', 'index.js', 
  'len.js', 'lenwy.js', 'package-lock.json', 'package.json', 'premium.json'
]) {
  return new Promise((resolve, reject) => {
    console.log(
      `${chalk.greenBright(`[ ${tanggalnya}/${bulannya}/${tahunnya} ]`)} ${chalk.greenBright(
        `Membuat Backup Files ...`
      )}`
    );
	
    let directoryPath = path.join("./")
      fs.readdir(directoryPath, async function (err, files) {
        if (err) {
          return console.log("Tidak dapat memindai direktori: " + err)
        }
      let filteredArray = await files.filter(
        (item) =>
          item.endsWith("gif") ||
          item.endsWith("png") ||
          item.endsWith("mp3") ||
          item.endsWith("mp4") ||
          item.endsWith("jpg") ||
          item.endsWith("jpeg") ||
          item.endsWith("webp") ||
          item.endsWith("webm"),
      )
      var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
      if (filteredArray.length == 0) return console.log(teks)
      filteredArray.map(function (e, i) {
        teks += i + 1 + `. ${e}\n`
      })
      console.log(teks)
      await sleep(200)
      console.log("Menghapus file sampah...")
      await filteredArray.forEach(function (file) {
        fs.unlinkSync(`./${file}`)
      })
      await sleep(200)
      console.log("Berhasil menghapus semua sampah")
    })
    
    // Create output stream for zip file
    const output = fs.createWriteStream(outputZip);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Compression level
    });

    output.on('close', () => {
      const totalBytes = archive.pointer();
      const totalMB = (totalBytes / (1024 * 1024)).toFixed(2);
      console.log(
        `${chalk.greenBright(`[ ${tanggalnya}/${bulannya}/${tahunnya} ]`)} ${chalk.greenBright(
          `File Backup Telah dibuat : ${totalMB} MB`
        )}`
      );
      resolve();
    });

    archive.on('error', err => {
      reject(err);
    });

    archive.pipe(output);

    // Menentukan file atau folder yang ingin dimasukkan dalam zip
    selectedFiles.forEach(item => {
      const itemPath = path.join(sourceDir, item); // Gabungkan dengan sourceDir
      if (fs.existsSync(itemPath)) {
        // Cek apakah file/folder ada
        if (fs.lstatSync(itemPath).isDirectory()) {
          archive.directory(itemPath, item); // Tambahkan direktori ke zip
        } else {
          archive.file(itemPath, { name: item }); // Tambahkan file ke zip
        }
      }
    });

    // Finalisasi archive untuk mengompres
    archive.finalize();
  });
}

async function startBackupProcess() {
  if (global.autobakcup) {
    await compressSc('.', 'backup.zip');
    try {
      await lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, {
        document: fs.readFileSync('./backup.zip'),
        fileName: `Sc${global.ownername}${waktubackup}.zip`,
        mimetype: 'application/zip'
      }).catch((err) => console.log('Failed Send Backup To Whatsapp'));

      // Hapus file backup.zip setelah dikirim
      fs.unlink('./backup.zip', (err) => {
        if (err) {
          console.error('Gagal menghapus backup.zip:', err);
        } else {
          console.log('Sc sudah terkirim dan file "backup.zip" telah dihapus');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

// Setiap 1 jam (1 * 60 * 60 * 1000 ms), jalankan backup
setInterval(startBackupProcess, 2 * 60 * 60 * 1000);

const expiredCheck = async (lenwy) => {
  try {
      let pathsewa = './src/sewa.json';
      let rawData = fs.readFileSync(pathsewa, 'utf8');
      let sewa = JSON.parse(rawData);

      for (let index = sewa.length - 1; index >= 0; index--) {
          const item = sewa[index];

          if (Date.now() >= item.expired) {
              console.log(`Sewa expired: ${item.id}`);

              // HAPUS DATA DARI ARRAY SEBELUM MELAKUKAN PROSES LAINNYA
              sewa.splice(index, 1);
              try {
                  fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2), 'utf8');
              } catch (error) {
                  console.error('Failed to write to file:', error.message);
                  continue
              }

              const getGroups = await lenwy.groupFetchAllParticipating();
              const groupIds = Object.values(getGroups).map(v => v.id);
              let metadata = await lenwy.groupMetadata(item.groupId);
              let linkgc;
              try {
                  let response2 = await lenwy.groupInviteCode(item.groupId);
                  linkgc = `https://chat.whatsapp.com/${response2}`;
              } catch {
                  linkgc = '-';
              }
              let authorrr = JSON.parse(fs.readFileSync('./author.json'));

              if (groupIds.includes(item.groupId)) {
                  const teks = `Waktu sewa di grup ini sudah habis, bot akan keluar otomatis.
Jika ingin sewa lagi silahkan chat ke https://wa.me/${global.owner}`;
                  await lenwy.sendMessage(item.groupId, { text: teks });
                  await lenwy.sendContact(item.groupId, authorrr.map(i => i.split("@")[0]));
                  await lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, { 
                      text: `Waktu sewa di grup *${metadata.subject}* sudah habis.
                    
> ID GROUP : ${item.groupId}
> NAMA GROUP : ${metadata.subject || ''}
> LINK GROUP : ${linkgc}` 
                  });
                  await sleep(2000);
                  try {
                      await lenwy.groupLeave(item.groupId);
                  } catch (error) {
                      console.error(`Gagal keluar dari grup ${item.groupId}: ${error.message}`);
                  }
              }
          }
      }
  } catch (error) {
      console.error('Terjadi kesalahan saat memeriksa entri kedaluwarsa:', error.message);
  }
};

setInterval(() => {
  expiredCheck(lenwy);
}, 10000)

lenwy.ev.on('groupUpdate', async (update) => {
  const botNumber = await lenwy.decodeJid(lenwy.user.id);
  const isBotAdmins = groupAdmins.includes(botNumber);
  let from = m.key.remoteJid
  if (isBotAdmins) {
      try {
        let newLink = await lenwy.groupInviteCode(from);
        global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
        saveDatabase()
        console.log(`Berhasil Update Link Gc`)
      } catch (err) {
          console.log('Error saat memanggil catatLinkGc:', err);
      }
  }
});

lenwy.ev.on('contacts.update', update => {
for (let contact of update) {
let id = lenwy.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})

lenwy.getName = (jid, withoutContact  = false) => {
id = lenwy.decodeJid(jid)
withoutContact = lenwy.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = lenwy.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === lenwy.decodeJid(lenwy.user.id) ?
lenwy.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}

lenwy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    if (Array.isArray(kon) && kon.length > 0) {
        let contacts = [];
        let displayName = ''; // Nama tampilan untuk kontak

        // Proses nomor pertama
        const firstNumber = kon[0];
        const firstContact = {
            displayName: await lenwy.getName(firstNumber + '@s.whatsapp.net'),
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await lenwy.getName(firstNumber + '@s.whatsapp.net')}\nFN:${await lenwy.getName(firstNumber + '@s.whatsapp.net')}\nitem1.TEL;waid=${firstNumber}:${firstNumber}\nitem1.X-ABLabel:Owner - ${global.ownername}\nitem2.EMAIL;type=INTERNET:owner@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:Owner Bot ${botname}\nitem3.X-ABLabel:Grade\nitem4.ADR:;;Bumi\nEND:VCARD`
        };
        contacts.push(firstContact);
        displayName = 'Kontak Utama';

        // Kirim pesan kontak
        await lenwy.sendMessage(jid, { contacts: { displayName: `${contacts.length} Kontak`, contacts: contacts }, ...opts }, { quoted });
    } else {
        console.log('Array kon kosong atau bukan array.');
    }
};

//Kalau Mau Self Lu Buat Jadi false
lenwy.public = true


lenwy.ev.on('creds.update', saveCreds)
 
 lenwy.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 
 lenwy.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await lenwy.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}

lenwy.sendText = (jid, text, quoted = '', options) => lenwy.sendMessage(jid, { text: text, ...options }, { quoted })

lenwy.sendTextWithMentions = async (jid, text, quoted, options = {}) => lenwy.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 
lenwy.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await lenwy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 
lenwy.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await lenwy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 
lenwy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 lenwy.cMod = (jid, copy, text = '', sender = lenwy.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === lenwy.user.id
return proto.WebMessageInfo.fromObject(copy)}
lenwy.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await lenwy.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await lenwy.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
lenwy.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}

lenwy.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await lenwy.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}

lenwy.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
lenwy.serializeM = (m) => smsg(lenwy, m, store)
lenwy.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
execSync(`rm -rf ./${global.sessionName}`)
console.log(`Device Logged Out, Please Delete Folder Session and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === "open") {
  console.log(`Connected bang\n${global.botname} Activated`)
}
// console.log('Connected...', update)
});
return lenwy
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})
