// Theme Emoji ${global.emoji}
// Bot Name ${botname}

require('./len')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, InteractiveMessage, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const path = require('path')
const util = require('util')
let ms;
const toMs = require('ms');
(async () => {
  ms = (await import('parse-ms')).default;
})()
const { FiturOwner } = require('./lib/sewa')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { ssweb } = require('./lib/ssweb')
const { quote } = require('./lib/quote')
const { Primbon } = require('scrape-primbon')
const { remini } = require('./lib/remini')
const { uploader60Minute, uploaderLebih, up } = require('./lib/uploader')
const { fromBuffer } = require('file-type')
const uploadImage = require('./lib/uploadImage')
const primbon = new Primbon()
const hxz = require('hxz-api')
const jsobfus = require('javascript-obfuscator')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl } = require('./database/mediafire.js')
const { smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api")
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList, updateKey, readDatabasePayment, writeDatabasePayment, updateId, getGroupIdFromLink, resetList } = require('./lib/respon-list')
const { isKeyResponStick, getDataResponStick, isAlreadyResponStickGroup, delResponStick } = require('./lib/funcStick')
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon')
const { addSewaGroup, getSewaExpired, getSewaPosition, checkSewaGroup, getAllPremiumUser } = require('./lib/sewa')
const pathsewa = './src/sewa.json';
const _sewa = require('./lib/sewa')
const sewa = db.data.sewa
const _ = require('lodash')
const { cekStatusAkunMedan, cekLayanan, orderLayanan, cekStatusOrderanKebsos, cekStatusAkun5Sim, cekLayananSms, cekOperatorSms, beliLayananSms, cekStatusOrderSms, cancelSms, finishSms } = require('./scrape/litensi')
const { cekStatusAkunDigi, cekLayananDigiPrabayar, isiSaldoDigi, orderDigi, cekItemDigi, cekOrderanDigi } = require('./scrape/digiflazz')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { BratGenerator } = require('./lib/brat')
const { igdl } = require('btch-downloader')
const { facebook } = require("@mrnima/facebook-downloader")
const { cekMl, cekRegionMl } = require('./lib/mlRegi.js')
const dns = require('dns').promises

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
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

let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'))
let reminders = {};

const authorr = global.owner
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./data/image/thumb.jpg')
const thumb = fs.readFileSync ('./data/image/thumb.jpg')
const kalimage = fs.readFileSync ('./data/image/thumb.jpg')
const { antispam } = require('./lib/antispam')
const { number, command } = require('yargs')
const { error } = require('console')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const author = JSON.parse(fs.readFileSync('./author.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./banned.json'))
const imagenya = JSON.parse(fs.readFileSync('./database/Lenwytesti.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))
const dbgcFilePath = path.join(__dirname, './database/databaseGroup.json')
global.datagc
try {
  global.datagc = JSON.parse(fs.readFileSync(dbgcFilePath, 'utf-8'));
} catch (error) {
  console.error('Terjadi kesalahan saat membaca file database:', error);
}

// Get Database
const isContacts = contacts.includes(m.sender)

module.exports = lenwy = async (lenwy, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const premiumFilePath = path.join("./premium.json")
const dbFilePath = path.join(__dirname, './src/database.json')



//---------------------------------------------------------- Prefix SETTINGS *Batas* --------------------------------------------------------------------------------
// Mengambil prefix dari body
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/gi)[0] : '';

const content = body.slice(prefix.length).trim()

const [commandRaw, ...args] = content.split(/ +/)
const command = commandRaw.toLowerCase()
const commandPrivate = commandRaw.toLowerCase()


const isCmd = body.startsWith(prefix)
const cmd = prefix + command
//---------------------------------------------------------- Prefix SETTINGS *Batas* --------------------------------------------------------------------------------
     
     
/*const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()*/



// Fungsi untuk membaca nomor-nomor premium dari file
function getPremiumNumbers() {
    try {
        const data = fs.readFileSync(premiumFilePath, 'utf8')
        return JSON.parse(data).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return []
    }
}
// Fungsi untuk mengambil data dari file JSON
function readDatabase() {
    try {
        const data = fs.readFileSync(dbFilePath, 'utf8')
        return JSON.parse(data)
    } catch (err) {
        console.error('Error reading database:', err)
        return { users: {} };
    }
}

// Fungsi untuk menyimpan data ke file JSON
function writeDatabase(data) {
    try {
        fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2))
    } catch (err) {
        console.error('Error writing database:', err)
    }
}

// Fungsi untuk memperbarui limit pengguna
function updateUserLimits(numbers, limit) {
    const data = readDatabase()
    
    // Memperbarui limit untuk setiap nomor
    numbers.forEach(number => {
        const userKey = `${number}@s.whatsapp.net`;
        if (data.users[userKey]) {
            data.users[userKey].limit = limit;
        } else {
            data.users[userKey] = {
                limit: limit,
                level: 0,
                autolevelup: true,
            };
        }
    })
    
    // Simpan perubahan
    writeDatabase(data)
    console.log(`Updated limits to ${limit} for numbers: ${numbers.join(', ')}`)
}
//
function getUserLimit(sender) {
    const data = readDatabase()
    const userKey = `${sender}`;
    return isPremiumUser(sender) ? Infinity : (data.users[userKey] ? data.users[userKey].limit : 50)
}




//Kalau Mau Single Prefix Kamu Ganti Command Diatas Pakai Ini : const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()



/*const content = JSON.stringify(m.message)*/
/*const args = body.trim().split(/ +/).slice(1)*/
const full_args = body.replace(command, '').slice(1).trim()
const spychat = body.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const quoted2 = (quoted.mtype == 'buttonsMessage') ? quoted[Object.keys(quoted)[1]] : (quoted.mtype == 'templateMessage') ? quoted.hydratedTemplate[Object.keys(quoted.hydratedTemplate)[1]] : (quoted.mtype == 'product') ? quoted[Object.keys(quoted)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const botNumber = await lenwy.decodeJid(lenwy.user.id)
const bot = [botNumber, ...global.bot]
const isCreator = [...author].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isBot = bot.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const gcMutedPath = path.resolve(__dirname, './database/gcMuted.json')
const gcMuted = JSON.parse(fs.readFileSync(gcMutedPath))
const isGcMuted = [...gcMuted].includes(m.chat)

const gcTopupPath = path.resolve(__dirname, './scrape/gcTopup.json')
const gcTopup = JSON.parse(fs.readFileSync(gcTopupPath))
const isGcTopup = [...gcTopup].includes(m.chat)

// Memuat nomor premium dari file JSON
const premiumFilePathh = path.resolve(__dirname, './premium.json')
const premiumNumbers = JSON.parse(fs.readFileSync(premiumFilePathh))
// Daftar nomor premium termasuk bot dan pemilik
const isPrem = [botNumber, ...owner, ...author, ...premiumNumbers].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await lenwy.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const isSecreto = secreto.find(i => i.penerima === m.sender)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const isQuotedViewOnce = m.quoted?.viewOnce ? true : false


const harinya = moment.tz('Asia/Jakarta').format('dddd')
const tanggalnya = moment.tz('Asia/Jakarta').format('DD')
const bulannya = moment.tz('Asia/Jakarta').format('MM')
const tahunnya = moment.tz('Asia/Jakarta').format('YYYY')
const namabulannya = moment.tz('Asia/Jakarta').format('MMMM')
const jamnya = moment.tz('Asia/Jakarta').format('HH')
const menitnya = moment.tz('Asia/Jakarta').format('mm')
const detiknya = moment.tz('Asia/Jakarta').format('ss')


const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariini2 = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const hariini3 = moment.tz('Asia/Jakarta').format('dddd')
const hariini4 = moment.tz('Asia/Jakarta').format('DD-MMMM-YYYY')
const waktubackup = moment.tz('Asia/Jakarta').format('DDMMMM')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = `${global.emoji} Selamat Malam`
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Petang`
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Sore`
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Siang`
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Pagi`
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Subuh`
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Tengah Malam`
        }
        
if (lenwy.public === false) {
if (!fromMe && !isCreator) return
}

const cap = 'LEN'
try {
pplu = await lenwy.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const len = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Lenwy,;;;\nFN: Lenwy V2.0\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

const len2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            "thumbnailUrl": pplu
        }
    }
}

const lenwyreply = (teks) => {
lenwy.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `Halo ${global.emoji}${botname} Siap Melayani`,"body": `Hey kau, Jangan Spam`, "previewType": "PHOTO","thumbnail": thumb}}, mentions: [m.sender]}, { quoted: m })
}
// Tanpa ContextInfo : lenwy.sendMessage(from, { text: teks, }, { quoted: m })}

const onlygc = () => {
lenwy.sendMessage(m.chat, {
    text: `${global.emoji} *Bot Hanya Bisa Digunakan Didalam Grup*`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `${ucapanWaktu}`,
        body: `${botname}`,
        thumbnailUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60",
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
   } 

async function cekCasee(caseName) {
  try {
    const fileContent = await fs.promises.readFile("./lenwy.js", "utf-8");
    const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
    const match = fileContent.match(caseRegex);
    return match ? true : false;
  } catch (error) {
    console.error("Error reading file:", error);
    return false;
  }
}
    
// Daftar kata-kata toxic
const toxicWords = /(ewe|bangsad|mmk|koncol|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp)/i;

try {
  if (m.isGroup) {    
    if (!global.datagc[m.chat]) {
      // Jika grup belum ada, tambahkan ke dalam objek dengan format default
      global.datagc[m.chat] = {
        "text_welcome": "",
        "text_left": "",
        "text_open": "",
        "text_close": "",
        "text_proses": "",
        "text_done": "",
        "text_list": "",
        "text_list_simbol": ""
      };
    }
    fs.writeFileSync(dbgcFilePath, JSON.stringify(global.datagc, null, 2), 'utf-8');
  }
} catch (error) {
  console.error('Terjadi kesalahan saat membaca atau menulis file database:', error);
}

// Inisialisasi database jika belum ada
try {
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    let limitUser = global.limitawal.free;
    let user = global.db.data.users[m.sender]
    if (typeof user !== 'object') global.db.data.users[m.sender] = {};
    if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!('afkReason' in user)) user.afkReason = '';
        if (!isNumber(user.limit)) user.limit = limitUser;
        if (!isNumber(user.level)) user.level = 0;
        if (!('autolevelup' in user)) user.autolevelup = true;
    } else global.db.data.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
        level: 0,
        autolevelup: true
    };

    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {};
    if (chats) {
        if (!('mute' in chats)) chats.mute = false;
        if (!('wlcm' in chats)) chats.wlcm = true;
        if (!('left' in chats)) chats.left = true;
        if (!('antitoxic1' in chats)) chats.antitoxic1 = false;
        if (!('antitoxic2' in chats)) chats.antitoxic2 = false;
        if (!('antilink' in chats)) chats.antilink = false;
        if (!('antilinkyt' in chats)) chats.antilinkyt = false;
        if (!('antilinktt' in chats)) chats.antilinktt = false;
        if (!('antivirtex' in chats)) chats.antivirtex = true;
        if (!('antipanel' in chats)) chats.antipanel = false;
        if (!('antilinkgc' in chats)) chats.antilinkgc = false;
        if (!('antilinkgc2' in chats)) chats.antilinkgc2 = false;
        if (!('antiwame' in chats)) chats.antiwame = false;
        if (!('antibot' in chats)) chats.antibot = false;
        if (!('linkgc' in chats)) chats.text_close = ``;
    } else global.db.data.chats[m.chat] = {
        mute: false,
        wlcm: true,
        left: true,
        antitoxic1: false,
        antitoxic2: false,
        antilink: false,
        antilinkyt: false,
        antilinktt: false,
        antivirtex: true,
        antipanel: false,
        antiwame: false,
        antilinkgc: false,
        antilinkgc2: false,
        antibot: false,
        linkgc: ``
    };

    let setting = global.db.data.settings[botNumber]
    if (typeof setting !== 'object') global.db.data.settings[botNumber] = {};
    if (setting) {
        if (!isNumber(setting.status)) setting.status = 0;
        if (!('autobio' in setting)) setting.autobio = false;
        if (!('autoread' in setting)) setting.autoread = false;
    } else global.db.data.settings[botNumber] = {
        status: 0,
        autobio: false,
        autoread: false
    };

} catch (err) {
    console.error(err)
}

let cron = require('node-cron')
        cron.schedule('02 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPrem ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

function cwr(tMatch, tWr, wrReq) {
    let tLose = tMatch * (100 - tWr) / 100;
    let seratusPersen = tLose * (100 / (100 - wrReq))
    let final = seratusPersen - tMatch;
    return Math.round(final)
  }                
        
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }
  return password;
}

async function jarak(dari, ke) {
    let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
    let $ = cheerio.load(html), obj = {}
    let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
    obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
    return obj
}

function pinterest(querry){
    return new Promise(async(resolve,reject) => {
         axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
            headers: {
            "cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
        }
            }).then(({ data }) => {
        const $ = cheerio.load(data)
        const result = []
        const hasil = []
         $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
        })
        result.forEach(v => {
         if(v == undefined) return
         hasil.push(v.replace(/230/g,'730'))
            })
            hasil.shift()
        resolve(hasil)
        })
    })
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (m.sender.startsWith('212')) return lenwy.updateBlockStatus(m.sender, 'block')

if (m.message) {
if (global.db.data.settings[botNumber].autoread) {
lenwy.readMessages([m.key])
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await lenwy.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await lenwy.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function LenwyLD() {
  await sleep(100) // Jeda waktu (0.75 detik) antara reaksi
  await lenwy.sendMessage(from, { react: { text: '🕒', key: m.key } })
}

if (autodelete) {
lenwy.sendMessage(m.chat, { delete: m.key })
}

if (m.isBaileys && m.fromMe) {
  m.reply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
  await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//----------------------------------------------------------- [ CONSOLE LOG ] ---------------------------------------------------------------------------
if (isCmd) {
const listcolor = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
    console.log(
      color(`[ ${jamnya}:${menitnya}:${detiknya} ] `, randomcolor),
      color(`[ ${m.isGroup ? groupName : m.sender.split("@")[0] || 'NoNameGroup'} ]`, `${randomcolor}`),
      color(`<-->`, `${randomcolor}`),
      color(`${pushname || 'NoName'}`, `${randomcolor}`),
      color(` :`, `${randomcolor}`),
      color(`${body}`, `white`)
    )
}
//----------------------------------------------------------- [ CONSOLE LOG ] ---------------------------------------------------------------------------

if (cmd) {
  if (isGcMuted && !isCreator && !isPrem && !isBot) return
  if (!m.isGroup && !isCreator && !isPrem && !isBot) return
}

if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {quoted: m})
} else {
try {
lenwy.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {quoted: m})
} catch (e) {
m.reply(`Foto tidak tersedia silahkan chat admin untuk melakukan ${prefix}updatelist bergambar pada Key ${body}`)
await sleep(5000)
lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {quoted: m})
}
}
}

if (m.isGroup && isKeyResponStick(m.chat, body.toLowerCase(), JSON.parse(fs.readFileSync('./data/src/databaseSticker.json')))) {
  if (!isAdmins) return;
  
  var getRespon = getDataResponStick(m.chat, body.toLowerCase(), JSON.parse(fs.readFileSync('./data/src/databaseSticker.json')));
  let buffer = fs.readFileSync(getRespon.imageUrl);

  if (await isWebPAnimated(buffer)) {
      await lenwy.sendMessage(from, { sticker: buffer }, { quoted: m.quoted ? m.quoted.fakeObj : m })
  } else {
      await lenwy.sendMessage(from, { sticker: buffer }, { quoted: m.quoted ? m.quoted.fakeObj : m })
  }
}

if (db.data.chats[m.chat].antispam) {
  if (m.isGroup && m.message && antispam.isFiltered(from)) {
  console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
  return await lenwy.sendMessage(m.chat, { delete: m.key })
  }}   




if (db.data.chats[m.chat].antitoxic1) {
  const isToxic = toxicWords.exec(m.text)
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (isToxic) {
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antitoxic2) {
  const isToxic = toxicWords.exec(m.text)
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (isToxic) {
      lenwy.sendMessage(m.chat, { delete: m.key })
      await sleep(1500)
      await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
}

// Anti Link
if (db.data.chats[m.chat].antilinkgc) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.match(`chat.whatsapp.com`)) {
      m.reply(`*Anti Link Gc Sedang Aktif*\n⚠️ *Pesan Anda Akan Dihapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key }) 
    }
  }
}

if (db.data.chats[m.chat].antilinkgc2) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.match(`chat.whatsapp.com`)) {
      m.reply(`*Anti Link Gc2 Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus Dan Akan Di Keluarkan*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
      await sleep(1500)
      await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
}

if (db.data.chats[m.chat].antiwame) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
      m.reply(`*Anti Wame Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antilink) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.includes('https:') || budy.includes('http')) {
      m.reply(`*Anti Link Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antipanel) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.includes('PANEL') || budy.includes('Panel') || budy.includes('panel') || budy.includes('pnel')) {
      m.reply(`*Anti Promosi Panel Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antitiktok) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.match(`https://vt.tiktok.com`)) {
      m.reply(`*Anti Link Tiktok Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antiyoutube) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.match(`https://youtube`)) {
      m.reply(`*Anti Link Youtube Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antich) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') ) {
      m.reply(`*Anti Channel Whatsapp*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antibot) {
  if (m.id.startsWith('3EB0') || m.id.startsWith('B1E') || m.id.startsWith('BAE')) {
    m.reply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    lenwy.sendMessage(m.chat, { delete: m.key })
  }
}







let list = []
for (let i of owner) {
list.push({
displayName: await lenwy.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await lenwy.getName(i + '@s.whatsapp.net')}\n
FN:${await lenwy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FakeLenwy@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : Lenwy\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: lenwy.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, lenwy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
lenwy.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await lenwy.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
)
const result = {
status: 200,
author: `${global.ownername}`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function aigpt(prompt) {
  try {
   const response = await axios.get("https://tools.revesery.com/ai/ai.php?query=" + prompt, {
     headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36'
      }
    })
    const res = response.data
    const evaled = res.result
    /*
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
*/
  } catch (error) {
  console.error(error)
  }
}

async function ttslide(text) {
    let response = await axios.get(`https://dlpanda.com/id?url=${text}&token=G7eRpMaa`)
    const html = response.data
    const $ = cheerio.load(html)
    let asd = []
    let imgSrc = []
    let creator = 'Jikarinka'
    $('div.col-md-12 > img').each((index,
        element) => {
        imgSrc.push($(element).attr('src'))
    })
    asd.push({
        creator,
        imgSrc
    })
    let fix = imgSrc.map((e,
        i) => {
        return {
            img: e,
            creator: creator[i]
        }
    })
    for (let i of asd) {
        return i
    }
}

async function cai(query) {
        let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJnaXZlbl9uYW1lIjoiUkNTIiwiZmFtaWx5X25hbWUiOiJYWiIsIm5pY2tuYW1lIjoicmNzeHo2NDkiLCJuYW1lIjoiUkNTIFhaIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lYbGpRdW11SWlQTjdwLUoxUk1HNjZ0ODZzTzJhMG9DcW93RTlZVDFzaj1zOTYtYyIsImxvY2FsZSI6ImlkIiwidXBkYXRlZF9hdCI6IjIwMjMtMTEtMDVUMTQ6NTM6NDkuNjM0WiIsImVtYWlsIjoicmNzeHo2NDlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsImlhdCI6MTY5OTE5NjAzNCwiZXhwIjoxNzAyNzk2MDM0LCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDY5MjA2MTkzMTI0MTU4NTgwNSIsInNpZCI6IjVhaklfSlRJeFBZWGpzU0piWmdzRnQ4MXhaTHRhRERyIiwibm9uY2UiOiJUQzE0V2xvMVNGSmlkVU5FWVVSbFJXb3dTV3RJU25acVRtVTRVR3hoUldReU0xQm5Rbk0yYjAwNWJ3PT0ifQ.jduu283Aycw7GwUL270EkwoF71bINRrLnFzVJGpoG9uOO4A-jxtZ07XRZIr_t4lT_gt2N19BWXg7SGxRR_coFbCJLfyUHLzxx6ZaDGMqUnCPhJ6WXBHABsTsqnlQIJs1sQPJyLKw01-FU5FoB8atW3OIyjt0nJayJtMSm4NzKkGR2gBWZSNR3FIqX7r4NY_wUSc-1Za50FaMiLg3XdGkfE59wxs_NdlxxdPVVG4G4uKBWQCIy6ofRDnnb22Wfw1knt8yXMjGfq8RtSsAkGMmjp_KVICSRDCqy0cCOtUdmih5LCRyEQagIRBl90SP753C7ehiue_ucidCYh9XrxP7HQ";
    return new Promise(async (resolve, reject) => {
    try {
        LenwyLD()
  await sleep(200)
        const request = await axios({
            method: "POST",
            url: "https://beta.character.ai/chat/streaming/",
            body: JSON.stringify(query),
            headers: {
            "authorization": "Token " + token,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            client: "Token " + token
            }
            })

        if (request.status() === 200) {
            const response = await JSON.parse(request)
            const replies = response.replies;

            const messages = []

            for (let i = 0; i < replies.length; i++) {
                lenwy.sendMessage(i, {text: `${text}`}, {quoted:m})
            }
            resolve(i)
            }
        } catch (error) {
      reject(error)
    }
})
}

function setReminder(time, reminder, sender) {
    let reminderTime = time * 60000;

    let reminderDate = new Date(Date.now() + reminderTime)

    reminders[sender] = {
        time: reminderTime,
        message: reminder,
        reminderDate: reminderDate
    };

    setTimeout(() => {
        delete reminders[sender]
    }, reminderTime)
}

async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
        LenwyLD()
  await sleep(200)
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      })
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("*Tidak Ada Video Yang Ditemukan* 😥")
      } else {
        const gywee = Math.floor(Math.random() * videos.length)
        const videorndm = videos[gywee] 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result)
      }
    } catch (error) {
      reject(error)
    }
  })
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
        LenwyLD()
  await sleep(200)
    const encodedParams = new URLSearchParams()
encodedParams.set('url', query)
encodedParams.set('hd', '1')

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      })
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n")
  return data.replace(regex, "")
};

async function shortener(url) {
  return url;
}

async function tiktok11(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  })

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(response.data.desc)
  result.author = clean(response.data.author)
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  )
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  )
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  )
  result.thumbnail = await shortener(response.data.cover)
  return result;
}

async function filterValidImages(images, limit) {
  const validImages = []
  for (const image of images) {
    if (await isImageURL(image)) {
      validImages.push(image)
      if (validImages.length >= limit) {
        break // Hentikan jika sudah mencapai jumlah gambar yang diminta
      }
    }
  }
  return validImages;
}

async function isImageURL(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    const contentType = res.headers.get('content-type')
    return contentType && contentType.startsWith('image') // Memeriksa apakah tipe file adalah gambar
  } catch (error) {
    return false; // Jika terjadi kesalahan dalam memeriksa URL, mengembalikan false
  }
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await lenwy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`${global.emoji} *Kuis Matematika*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Math Mode*`)
delete kuismath[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Gambar*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Gambar*`)
delete tebakgambar[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
lenwy.sendMessage(m.chat, { text: `${global.emoji} *Tebak Kata*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Kata*`}, {quoted:m}) 
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('❌ *Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Lontong*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Lontong*`)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Kalimat*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Kalimat*`)
delete tebakkalimat[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Lirik*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Lirik*`)
delete tebaklirik[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Tebakan*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Tebakan*`)
delete tebaktebakan[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
lenwy.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
lenwy.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) lenwy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) lenwy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) lenwy.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
lenwy.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) lenwy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) lenwy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
lenwy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
  let user = global.db.data.users[jid]
  if (!user) continue
  let afkTime = user.afkTime
  if (!afkTime || afkTime < 0) continue
  let reason = user.afkReason || ''
  let ygSedangAfk = await lenwy.getName(jid) || jid
  let pushnameYgNgetag = await lenwy.getName(m.sender) || m.sender

  m.reply(`⚠️ *${pushnameYgNgetag} Jangan Tag ${ygSedangAfk}! Dia Sedang AFK*
❗❗ *Dengan Alasan :* ${reason ? reason : 'Dia Ga Ngasih Alasan Jir. Lanjut Aja Tag Dia Lagi 💀'}
🕒 *Selama : ${clockString(new Date - afkTime)}*
`.trim())
}

if (global.db.data.users[m.sender].afkTime > -1) {
  let user = global.db.data.users[m.sender]
  m.reply(`
*${pushname} Kembali Dari Afk*\n⚠️ ${'*Dengan Alasan :* ' + (user.afkReason ? user.afkReason : 'Tidak Ada')}\n🕒 *Selama : ${clockString(new Date - user.afkTime)}*
`.trim())
  user.afkTime = -1
  user.afkReason = ''
}

async function limit50(m) {
  const user = global.db.data.users[m.sender]

  // Cek apakah pengguna adalah premium
  if (isPrem(m.sender)) {
    m.reply('🎉 *Akun Premium Kamu Aktif* Limit tidak berkurang.')
    return true; // Mengembalikan true untuk menunjukkan bahwa limit tidak perlu dikurangi
  } else {
    // Jika pengguna bukan premium, periksa dan kurangi limit
    if (user.limit < 50) {
      m.reply('⚠️ *Limit Kamu Habis*')
      return false; // Mengembalikan false jika limit habis
    } else {
      user.limit -= 50;
      m.reply('50 Limit Digunakan')
      return true; // Mengembalikan true jika limit berhasil dikurangi
    }
  }
}

async function limit25(m) {
  const user = global.db.data.users[m.sender]

  // Cek apakah pengguna adalah premium
  if (isPrem(m.sender)) {
    m.reply('🎉 *Akun Premium Kamu Aktif* Limit tidak berkurang.')
    return true; // Mengembalikan true untuk menunjukkan bahwa limit tidak perlu dikurangi
  } else {
    // Jika pengguna bukan premium, periksa dan kurangi limit
    if (user.limit < 25) {
      m.reply('⚠️ *Limit Kamu Habis*')
      return false; // Mengembalikan false jika limit habis
    } else {
      user.limit -= 25;
      m.reply('25 Limit Digunakan')
      return true; // Mengembalikan true jika limit berhasil dikurangi
    }
  }
}
// Function untuk menyimpan perubahan ke database
function saveDatabase() {
  fs.writeFileSync('./src/database.json', JSON.stringify(global.db.data, null, 2))
}

// Function untuk memperbarui status welcome
async function updateWelcomeStatus(m, status) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)

  // Pastikan data grup ada di global.db.data
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};

  const currentWelcmStatus = global.db.data.chats[m.chat].wlcm;

  if (status === "on") {
      if (currentWelcmStatus) return m.reply('Fitur Welcome sudah aktif di grup ini.')

      // Aktifkan fitur welcome untuk grup ini
      global.db.data.chats[m.chat].wlcm = true;
      saveDatabase() // Simpan perubahan ke file

      var groupMetadata = await lenwy.groupMetadata(m.chat)
      var members = groupMetadata['participants']
      var mems = []
      members.map(adm => {
          mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
      })
      lenwy.sendMessage(m.chat, { text: `Fitur Welcome Diaktifkan Di Grup Ini`}, { quoted: m })
  } else if (status === "off") {
      if (!currentWelcmStatus) return m.reply('Fitur Welcome sudah nonaktif di grup ini.')

      // Nonaktifkan fitur welcome untuk grup ini
      global.db.data.chats[m.chat].wlcm = false;
      saveDatabase() // Simpan perubahan ke file
      m.reply('Fitur Welcome berhasil dinonaktifkan.')

  } else {
      m.reply('Ketik on untuk mengaktifkan atau off untuk menonaktifkan fitur welcome.')
  }
}

async function updateLeftStatus(m, status) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)

  // Pastikan data grup ada di global.db.data
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};

  const currentWelcmStatus = global.db.data.chats[m.chat].left;

  if (status === "on") {
      if (currentWelcmStatus) return m.reply('Fitur Left sudah aktif di grup ini.')

      // Aktifkan fitur left untuk grup ini
      global.db.data.chats[m.chat].left = true;
      saveDatabase() // Simpan perubahan ke file

      var groupMetadata = await lenwy.groupMetadata(m.chat)
      var members = groupMetadata['participants']
      var mems = []
      members.map(adm => {
          mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
      })
      lenwy.sendMessage(m.chat, { text: `Fitur Left Diaktifkan Di Grup Ini`}, { quoted: m })
  } else if (status === "off") {
      if (!currentWelcmStatus) return m.reply('Fitur Left sudah nonaktif di grup ini.')

      // Nonaktifkan fitur left untuk grup ini
      global.db.data.chats[m.chat].left = false;
      saveDatabase() // Simpan perubahan ke file
      m.reply('Fitur Left berhasil dinonaktifkan.')

  } else {
      m.reply('Ketik on untuk mengaktifkan atau off untuk menonaktifkan fitur left.')
  }
}

async function updateTextWelcome(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_welcome = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextLeft(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_left = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextOpen(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_open = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextClose(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_close = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextDone(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_done = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextProses(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_proses = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextList(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_list = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextListSimbol(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_list_simbol = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function revokeGc(m) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
      
      if (!global.db.data.chats[m.chat]) {
        global.db.data.chats[m.chat] = {};
    }
    await lenwy.groupRevokeInvite(from)
    await new Promise(resolve => setTimeout(resolve, 2000))
    let newLink = await lenwy.groupInviteCode(from)
    global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
    saveDatabase()
    return newLink
}

async function catatLinkGc(m) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
      
      if (!global.db.data.chats[m.chat]) {
        global.db.data.chats[m.chat] = {};
    }
    let newLink = await lenwy.groupInviteCode(from)
    global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
    saveDatabase()
}

async function upgradeRole(role, user) {
  let userTopup = {
    id: user,
    role: role,
    saldo: 0
  };
  let data = [];

  try {
    const fileData = fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8')
    if (fileData.trim()) {
      data = JSON.parse(fileData)
    }
  } catch (err) {
    console.log('Error saat membaca atau parsing file:', err.message)
  }

  const existingUserIndex = data.findIndex(item => item.id === user)
  if (existingUserIndex !== -1) {
    const existingSaldo = data[existingUserIndex].saldo;
    data[existingUserIndex].role = role;
    data[existingUserIndex].saldo = existingSaldo; 
  } else {
    data.push(userTopup)
  }
  
  fs.writeFileSync('./scrape/dataBuyerDigi.json', JSON.stringify(data, null, 2))
}

async function updateSaldo(user, saldo) {
  let data = []
  try {
    const fileData = fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8')
    if (fileData.trim()) {
      data = JSON.parse(fileData)
    }
  } catch (err) {
    console.log('Error saat membaca atau parsing file:', err.message)
  }

  const existingUserIndex = data.findIndex(item => item.id === user)
  if (existingUserIndex !== -1) {
    if (data[existingUserIndex].saldo === null || isNaN(data[existingUserIndex].saldo)) {
      data[existingUserIndex].saldo = 0; 
    } else {
      data[existingUserIndex].saldo = parseFloat(data[existingUserIndex].saldo) 
    }

    data[existingUserIndex].saldo += saldo; 

    fs.writeFileSync('./scrape/dataBuyerDigi.json', JSON.stringify(data, null, 2))
    return true; // Berhasil
  } else {
    return false; 
  }
}

function getUserRole(userId) {
  let users = JSON.parse(fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8'))
  let user = users.find(u => u.id === userId)
  return user ? user.role : null; 
}

async function getUserSaldo(userId) {
  let users = JSON.parse(fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8'))
  let user = users.find(u => u.id === userId)
  return user ? user.saldo : 0
}

function getUserTopup (userId) {
  let userstopup = JSON.parse(fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8'))
  let usertopup = userstopup.find(u => u.id === userId)
  return usertopup ? true : false
}









//----------------------------------------------//Case ADDCASE DLL\\------------------------------------------------------------------------

const totalfitur = () =>{
var mytext = fs.readFileSync("./lenwy.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length
return numUpper
}  

const listCase = () => {
const code = fs.readFileSync("./lenwy.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = []
var match;
while ((match = regex.exec(code))) {
matches.push(match[1])
}
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "  ◦  " + x + "\n"
})
return teks
}

const getcase = (cases) => {
  const fileContent = fs.readFileSync("./lenwy.js").toString()
  let validasii = fileContent.split(`case '${cases}'`)
  const caseSplit = validasii? validasii : fileContent.split(`case '${cases}'`)
  
  if (caseSplit.length < 2) {
      throw new Error(`Case '${cases}' tidak ditemukan.`)
  }

  const caseContent = caseSplit[1].split("break")[0]
  
  return "case " + `'${cases}'` + caseContent + "break";
}


async function dellCase(filePath, q) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Kesalahan untuk menambahkan case:", err)
      return
    }

    // Regex yang menangkap spasi di sekitar ':' dan pola case yang diinginkan
    const regex = new RegExp(`case\\s*['"]${q}['"]\\s*:.*?break?`, "gs")
    const modifiedData = data.replace(regex, "")
    if (modifiedData === data) {
      console.log(`Case '${q}' tidak ditemukan.`)
    } else {
      fs.writeFile(filePath, modifiedData, "utf8", (err) => {
        if (err) {
            m.reply(`Case ${q} Tidak Ada`)
          console.error("Terjadi kesalahan saat menulis file:", err)
          return
        }
		m.reply(`Mas, Done. Coba Cek`)
        console.log(`Teks dari case '${q}' telah dihapus dari file.`)
      })
    }
  })
}







//------------------------------------------------------//Case ADDCASE DLL\\------------------------------------------------------------------------





//----------------------------------------------------------------------- [ GAME TEBAKANGKA ] ------------------------------------------------------------------------



const gameState = {
  angkaAcak: null,
  jumlahTebakan: 0
};


//----------------------------------------------------------------------- [ GAME TEBAKANGKA ] ------------------------------------------------------------------------



switch (command) {


case 'menu': 
case 'mainmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
    
let anu = ` ❛❛ Hai, I'm ${global.botname} 👋 ❛❛

   ➜ Whatsapp Bot To Solve Your Problems 🙌
   ➜ Please Dont Call Bots Or Get Blocked 🚫
 
   ╭─ ─ ─ ❛❛𝓘𝗇𝖿𝗈 𝓑𝗈𝗍 ❛❛
   │ ꖛ 𝗿𝘂𝗻𝘁𝗶𝗺𝗲 ⵓ ${runtime(process.uptime())}
   │ ꖛ 𝗰𝗿𝗲𝗮𝘁𝗼𝗿 ⵓ wa.me/${authorr}
   │ ꖛ 𝗺𝗼𝗱𝗲 𝗯𝗼𝘁 ⵓ ${lenwy.public ? `Public Mode` : `Self Mode`}
   ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 

   ╭─ ─ ─ ❛❛𝓘𝗇𝖿𝗈𝓤𝗌𝖾𝗋 ❛❛
   │ ꖛ 𝗻𝗮𝗺𝗲 ⵓ ${pushname}
   │ ꖛ 𝗻𝘂𝗺𝗯𝗲𝗿 ⵓ wa.me/${m.sender.split('@')[0]}
   │ ꖛ 𝘀𝘁𝗮𝘁𝘂𝘀 ⵓ ${isCreator ? `${global.emoji} Creator` : isPrem ? '🎁 Premium' : "🏷️ User"}
   ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 
   
   ❛❛ 𝓚 𝖾𝗍𝖾𝗋𝖺𝗇𝗀𝖺𝗇 ❛❛
   ➜ 𝗵𝗲𝗹𝗽 ⵓ Menunjukkan Panduan
   ➜ 𝗺𝗲𝗻𝘂 ⵓ Menunjukkan Simple Menu
   ➜ 𝗮𝗹𝗹𝗺𝗲𝗻𝘂 ⵓ Menunjukkan Semua Menu
   ➜ 𝗹𝗶𝘀𝘁 ⵓ Menunjukkan List



   ╭─ ─ ─ ❛❛𝑀𝖾𝗇𝗎 ❛❛
   ││ ♡゙ Aboutmenu ( Menu Tentang )
   ││ ♡゙ Ownermenu ( Menu Owner )
   ││ ♡゙ Groupmenu ( Menu Grup )
   ││ ♡゙ Funmenu ( Menu Fun )
   ││ ♡゙ Toolsmenu ( Menu Tools )
   ││ ♡゙ Gamemenu ( Menu Game )
   ││ ♡゙ Beritamenu ( Menu Berita )
   ││ ♡゙ Randommenu ( Menu Random )
   ││ ♡゙ Downloadmenu ( Menu Download )
   ││ ♡゙ Islamimenu ( Menu Islam )
   ││ ♡゙ Searchmenu ( Menu Search )
   ││ ♡゙ Antimenu ( Menu Anti )
   ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`
m.reply(anu)
}
break

case 'almenu': 
case 'almenu': 
case 'allmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
let anu = ` ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ⢀⡤⢤⡀
 ㅤ ㅤ ㅤㅤㅤㅤ⢀⣤⠶⠚⠛⣿ ⠛⠓⣆
 ㅤㅤㅤㅤㅤ⢠⣯⡤⠖⢦⣤⡼⡄⢀⣀⣠⠟
ㅤㅤ ㅤㅤ⡤⠟ ㅤㅤㅤㅤ ⠉⠉⠉⠻⢤
ㅤㅤㅤꕮ ࣪ ׅ  𝓗𝖺𝗅𝗈, 𝖺𝗂𝗇𝗀 ${global.botname} ֵ 🥡
 
 ㅤʚɞ ׂ ֵ 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖡𝗈𝗍 𝖳𝗈 𝖲𝗈𝗅𝗏𝖾 𝖸𝗈𝗎𝗋 𝖯𝗋𝗈𝖻𝗅𝖾𝗆𝗌 🐈
ㅤʚɞ ׂ ֵ 𝖯𝗅𝖾𝖺𝗌𝖾 𝖣𝗈𝗇𝗍 𝖢𝖺𝗅𝗅 𝖡𝗈𝗍𝗌 𝖮𝗋 𝖦𝖾𝗍 𝖡𝗅𝗈𝖼𝗄𝖾𝖽 🚫
 
 ╭─ ┈ ִ ׄ ⸼ 𝓘𝗇𝖿𝗈 𝓑𝗈𝗍 ׅ ۫ ♡ 
 │ 𝅄‌‌ ֹ‌‌‌𓊔 𝗿𝘂𝗻𝘁𝗶𝗺𝗲 ⵓ ${runtime(process.uptime())}
 │ 𝅄‌‌ ֹ‌‌‌𓊔 𝗰𝗿𝗲𝗮𝘁𝗼𝗿 ⵓ wa.me/${authorr}
 │ 𝅄‌‌ ֹ‌‌‌𓊔 𝗺𝗼𝗱𝗲 𝗯𝗼𝘁 ⵓ ${lenwy.public ? `Public Mode` : `Self Mode`}
 ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 

 ╭─ ┈ ִ ׄ ⸼ 𝓘𝗇𝖿𝗈 𝓤𝗌𝖾𝗋 ׅ ۫ ♡ 
 │ 𝅄‌‌ ֹ‌‌‌𓊔 𝗻𝗮𝗺𝗲 ⵓ ${pushname}
 │ 𝅄‌‌ ֹ‌‌‌𓊔 𝗻𝘂𝗺𝗯𝗲𝗿 ⵓ wa.me/${m.sender.split('@')[0]}
 │ 𝅄‌‌ ֹ‌‌‌𓊔 𝘀𝘁𝗮𝘁𝘂𝘀 ⵓ ${isCreator ? `${global.emoji} Creator` : isPrem ? '🎁 Premium' : "🏷️ User"}
 ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 
 
ㅤ┈ ִ ׄ ⸼ 𝓚𝖾𝗍𝖾𝗋𝖺𝗇𝗀𝖺𝗇 ׅ ۫ ♡
 ㅤʚɞ ׂ ֵ 𝗵𝗲𝗹𝗽 ⵓ 𝖬𝖾𝗇𝗎𝗇𝗃𝗎𝗄𝗄𝖺𝗇 𝖯𝖺𝗇𝖽𝗎𝖺𝗇
 ㅤʚɞ ׂ ֵ 𝗺𝗲𝗻𝘂 ⵓ 𝖬𝖾𝗇𝗎𝗇𝗃𝗎𝗄𝗄𝖺𝗇 𝖲𝗂𝗆𝗉𝗅𝖾 𝖬𝖾𝗇𝗎
 ㅤʚɞ ׂ ֵ 𝗮𝗹𝗹𝗺𝗲𝗻𝘂 ⵓ 𝖬𝖾𝗇𝗎𝗇𝗃𝗎𝗄𝗄𝖺𝗇 𝖲𝖾𝗆𝗎𝖺 𝖬𝖾𝗇𝗎
 ㅤʚɞ ׂ ֵ 𝗹𝗶𝘀𝘁 ⵓ 𝖬𝖾𝗇𝗎𝗇𝗃𝗎𝗄𝗄𝖺𝗇 𝖫𝗂𝗌𝗍



 ╭─ ┈ ִ ׄ ⸼ 𝓐𝖻𝗈𝗎𝗍 𝓜𝖾𝗇𝗎 ׅ ۫ ♡
 ││
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Owner
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Developer
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Sewa
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Sc
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Ping
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Catatan
 ╰─ ──╼ ׄ ⸼ ▭ 🐈 ┈ ִ ׄ ⸼


 ╭─ ┈ ִ ׄ ⸼ 𝓞𝗐𝗇𝖾𝗋 𝓜𝖾𝗇𝗎 ׅ ۫ ♡
 ││
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Cekidgc
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Pushkontak
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Pushkontak2
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Savekontak
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Public
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Self
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Enc
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Addallprem
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delallprem
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Addprem
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delprem
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Listprem
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Banall
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delbanall
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Ban
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delban
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Listban
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Resetlimit
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Addlimit
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Setppbot
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Setppbotpanjang
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Join
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Leave
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Addgc
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delgc
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Bcgc
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Bcgcvideo
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Autoread
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Block
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Unblock
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Listdb
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Getdb
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Getuser
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Restart
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delsesi
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delsampah
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Setppsewa
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Changewdsewa
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Changewdppj
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Addsewa
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delsewa
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Ceksewa
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Cekexpired
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Perpanjangsewa
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Listsewa
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Backupbot
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Cekip
 ││ ┈ ┈ ┈ ִ ׄ ⸼
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Cekstatusakun
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Listlayanankebsos
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Addkebsos
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delkebsos
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 cekorderankebsos
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Addgctopup
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delgctopup
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Upgrade
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Deposit
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Profit
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Setprofit
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Cekdata
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Getcase
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Addcase
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Editcase
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Delcase
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Cekcase
 ╰─ ──╼ ׄ ⸼ ▭ 🥡 ┈ ִ ׄ ⸼



 ╭─ ┈ ִ ׄ ⸼ 𝓖𝗋𝗈𝗎𝗉 𝓜𝖾𝗇𝗎 ׅ ۫ ♡
 ││
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antich (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antiwame (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antilink (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antipl (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antitoxic1 (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antitoxic2 (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antilinktt (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antilinkyt (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antilinkgc1 (on/off)
 ││ 𝅄‌‌ ֹ‌‌‌𓊔 Antilinkgc2 (on/off)
 ││ ┈ ┈ ┈ ִ ׄ ⸼
 ││ ♡゙ Addlist (key@Respon)
 ││ ♡゙ Dellist (key)
 ││ ♡゙ updatenamelist (key@newKey)
 ││ ♡゙ updatelist (key@newRespon)
 ││ ♡゙ setpayment (key@wording)
 ││ ♡゙ changewording (key@newWording)
 ││ ♡゙ delbutton (key)
 ││ ♡゙ setbuttoncopy
 ││ ♡゙ setbuttonurl
 ││ ♡゙ pay
 ││ ♡゙ Hidetag (textnya)
 ││ ♡゙ Faketag (textnya)
 ││ ♡゙ Tagall (textnya)
 ││ ♡゙ Kick (628xx)
 ││ ♡゙ Add (628xx)
 ││ ♡゙ Promote (628xx)
 ││ ♡゙ Demote (628xx)
 ││ ♡゙ Sendlinkgc (628xx)
 ││ ♡゙ Inspect (linknya)
 ││ ♡゙ Inspect2 (linknya)
 ││ ♡゙ Promoteall
 ││ ♡゙ Demoteall
 ││ - - - - - - - - - - - -
 ││ ♡゙ Setdesk (on/off)
 ││ ♡゙ Welcome (on/off)
 ││ ♡゙ Left (on/off)
 ││ ♡゙ Setwelcome (text)
 ││ ♡゙ Setleft (text)
 ││ ♡゙ Setopen (text)
 ││ ♡゙ Setclose (text)
 ││ ♡゙ Setdone (text)
 ││ ♡゙ Setproses (text)
 ││ ♡゙ Setlist (text)
 ││ ♡゙ Setsimbol (text)
 ││ ♡゙ SetGrup (open/close)
 ││ ♡゙ Open
 ││ ♡゙ Close
 ││ ♡゙ Jeda
 ││ ♡゙ Editsubjek (textnya)
 ││ ♡゙ Editdesk (textnya)
 ││ ♡゙ Setppgc
 ││ ♡゙ Linkgroup
 ││ ♡゙ Resetlinkgc
 ││ ♡゙ Afk
 ││ - - - - - - - - - - - -
 ││ ♡゙ Saran
 ││ ♡゙ Reportbug
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Fun Menu
 ││
 ││ ♡゙ Truth
 ││ ♡゙ Dare
 ││ ♡゙ Rate
 ││ ♡゙ Apakah
 ││ ♡゙ Kapankah
 ││ ♡゙ Bisakah
 ││ ♡゙ Bagaimanakah
 ││ ♡゙ Gantengcek
 ││ ♡゙ Cantikcek
 ││ ♡゙ Jodoh
 ││ ♡゙ Readmore
 ││ ♡゙ Cwr
 ││ ♡゙ Couple
 ││ ♡゙ Meme
 ││ - - - - - - - - - - - -
 ││ ♡゙ Cekkodam
 ││ ♡゙ FML
 ││ ♡゙ Bucin
 ││ ♡゙ Quotes
 ││ ♡゙ Motivasi
 ││ ♡゙ Katabijak
 ││ ♡゙ Katacinta
 ││ ♡゙ Katagalau
 ││ ♡゙ Katahacker
 ││ ♡゙ Katailham
 ││ ♡゙ Katasenja
 ││ ♡゙ Katasindiran
 ││ ♡゙ Quotesanime
 ││ ♡゙ Quotespubg
 ││ ♡゙ Quotesislamic
 ││ ♡゙ Nickff
 ││ ♡゙ Puisi
 ││ ♡゙ Pantun
 ││ ♡゙ Faktaunik
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Tools Menu
 ││
 ││ ♡゙ Sticker
 ││ ♡゙ Smeme
 ││ ♡゙ Qc
 ││ ♡゙ Qckode
 ││ ♡゙ Wm
 ││ ♡゙ Brat
 ││ ♡゙ Brat2
 ││ ♡゙ Ttp
 ││ ♡゙ Attp
 ││ - - - - - - - - - - - -
 ││ ♡゙ Createqr
 ││ ♡゙ Detectqr
 ││ ♡゙ Toimg
 ││ ♡゙ Ocr
 ││ ♡゙ Rvo
 ││ ♡゙ Hd
 ││ ♡゙ Hd2
 ││ ♡゙ Hd3
 ││ ♡゙ Hd4
 ││ ♡゙ Removebg
 ││ ♡゙ Toanime
 ││ ♡゙ Tocyberpunk
 ││ ♡゙ Todreamscape
 ││ ♡゙ Tocomic
 ││ ♡゙ Todonghua
 ││ ♡゙ Todisney
 ││ ♡゙ Toghibli
 ││ ♡゙ Img2Txt
 ││ ♡゙ Txt2img
 ││ ♡゙ Txt2anime
 ││ ♡゙ Txt2flux
 ││ ♡゙ Txt2photoleap
 ││ ♡゙ Txt2waifu
 ││ - - - - - - - - - - - -
 ││ ♡゙ Hdvid
 ││ - - - - - - - - - - - -
 ││ ♡゙ text2speech
 ││ - - - - - - - - - - - -
 ││ ♡゙ Ssweb
 ││ ♡゙ Sstab
 ││ ♡゙ Sshp
 ││ - - - - - - - - - - - -
 ││ ♡゙ Cwr
 ││ ♡゙ Ffstalk
 ││ ♡゙ Mlstalk
 ││ ♡゙ Ttstalk
 ││ - - - - - - - - - - - -
 ││ ♡゙ Reminder
 ││ ♡゙ Getname
 ││ ♡゙ Getpic
 ││ ♡゙ Confes
 ││ ♡゙ Confes2
 ││ ♡゙ Readmore
 ││ ♡゙ Cwr
 ││ ♡゙ Tourl
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Game Menu
 ││
 ││ ♡゙ TTC
 ││ ♡゙ Deltc
 ││ - - - - - - - - - - - -
 ││ ♡゙ Tebak Kata
 ││ ♡゙ Tebak Gambar
 ││ ♡゙ Tebak Lirik
 ││ ♡゙ Tebak Kalimat
 ││ ♡゙ Tebak Lontong
 ││ - - - - - - - - - - - -
 ││ ♡゙ Kuismath Noob
 ││ ♡゙ Kuismath Easy
 ││ ♡゙ Kuismath Medium
 ││ ♡゙ Kuismath Hard
 ││ ♡゙ Kuismath Extreme
 ││ ♡゙ Kuismath Imposibble
 ││ ♡゙ Kuismath Imposibble2
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Berita Menu
 ││
 ││ ♡゙ Inews
 ││ ♡゙ Kontan
 ││ ♡゙ KompasNews
 ││ ♡゙ DetikNews
 ││ ♡゙ DailyNews
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Random Menu
 ││
 ││ ♡゙ Qc
 ││ ♡゙ Nickff
 ││ ♡゙ Puisi
 ││ ♡゙ Pantun
 ││ ♡゙ Qckode
 ││ ♡゙ Sticker
 ││ ♡゙ Smeme
 ││ ♡゙ Reminder
 ││ ♡゙ Faktaunik
 ││ ♡゙ Couple
 ││ ♡゙ Meme
 ││ ♡゙ Getname
 ││ ♡゙ Getpic
 ││ ♡゙ Confes
 ││ ♡゙ Menfes
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Download Menu
 ││
 ││ ♡゙ Fb (linknya)
 ││ ♡゙ Fbvideo (linknya)
 ││ ♡゙ Fbfoto (linknya)
 ││ ♡゙ Fbaudio (linknya)
 ││ - - - - - - - - - - - -
 ││ ♡゙ Ig (linknya)
 ││ - - - - - - - - - - - -
 ││ ♡゙ Tt (linknya)
 ││ ♡゙ Ttaudio (linknya)

 ││ - - - - - - - - - - - -
 ││ ♡゙ Twitter (linknya)
 ││ ♡゙ Twittervideo (linknya)
 ││ ♡゙ Twitterfoto (linknya)
 ││ - - - - - - - - - - - -
 ││ ♡゙ Play (linknya)
 ││ ♡゙ Ytmp3 (linknya)
 ││ ♡゙ Ytmp4 (linknya)
 ││ - - - - - - - - - - - -
 ││ ♡゙ Mediafire (linknya)
 ││ - - - - - - - - - - - -
 ││ ♡゙ Spotify (text)
 ││ ♡゙ Spotifydl (Linknya)
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Islami Menu
 ││
 ││ ♡゙ Doa
 ││ ♡゙ Asmaul Husna
 ││ ♡゙ Ayat Kursi
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Search Menu
 ││
 ││ ♡゙ Ai
 ││ ♡゙ Yuna
 ││ ♡゙ Search
 ││ ♡゙ Imdb
 ││ ♡゙ Chord
 ││ ♡゙ Lirik
 ││ ♡゙ Cuaca
 ││ ♡゙ Jarak
 ││ ♡゙ Google
 ││ ♡゙ Mcserver
 ││ ♡゙ Apksearch
 ││ ♡゙ Animesearch
 ││ ♡゙ Animeinfo
 ││ ♡゙ Animedownload
 ││ ♡゙ Translate
 ││ ♡゙ Kodebahasa
 ╰───── ♡゙𓇼𓂃 𓆪𐚁


 ╭───── 私❛❛ Anti Menu
 ││
 ││ ♡゙ Antich
 ││ ♡゙ Antiwame
 ││ ♡゙ Antilink
 ││ ♡゙ Antipl
 ││ ♡゙ Antitoxic1
 ││ ♡゙ Antitoxic2
 ││ ♡゙ Antilinktt
 ││ ♡゙ Antilinkyt
 ││ ♡゙ Antilinkgc1
 ││ ♡゙ Antilinkgc2
 ╰───── ♡゙𓇼𓂃 𓆪𐚁

⚠️ Kalo Ada Error Bisa Chat Owner Ya
`
m.reply(anu)
}
break





//------------------------------------------------------------------[ MENU ]------------------------------------------------------------------------





case 'aboutmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ About Menu
   ││
   ││ ♡゙ Owner
   ││ ♡゙ Developer
   ││ ♡゙ Sewa
   ││ ♡゙ Sc
   ││ ♡゙ Ping
   ││ ♡゙ Catatan
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'ownermenu':
case 'mo':
case 'ownermenu':
case 'Cillacantik':
case 'ownermenu':
case 'menuowner': {
 if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 LenwyLD()
 await sleep(200)
 m.reply(` ╭───── 私❛❛ Owner Menu
 ││
 ││ ♡゙ Cekidgc
 ││ ♡゙ Pushkontak
 ││ ♡゙ Pushkontak2
 ││ ♡゙ Savekontak
 ││ ♡゙ Public
 ││ ♡゙ Self
 ││ ♡゙ Enc
 ││ ♡゙ Addallprem
 ││ ♡゙ Delallprem
 ││ ♡゙ Addprem
 ││ ♡゙ Delprem
 ││ ♡゙ Listprem
 ││ ♡゙ Banall
 ││ ♡゙ Delbanall
 ││ ♡゙ Ban
 ││ ♡゙ Delban
 ││ ♡゙ Listban
 ││ ♡゙ Resetlimit
 ││ ♡゙ Addlimit
 ││ ♡゙ Setppbot
 ││ ♡゙ Setppbotpanjang
 ││ ♡゙ Join
 ││ ♡゙ Leave
 ││ ♡゙ Addgc
 ││ ♡゙ Delgc
 ││ ♡゙ Bcgc
 ││ ♡゙ Bcgcvideo
 ││ ♡゙ Autoread
 ││ ♡゙ Block
 ││ ♡゙ Unblock
 ││ ♡゙ Listdb
 ││ ♡゙ Getdb
 ││ ♡゙ Getuser
 ││ ♡゙ Restart
 ││ ♡゙ Delsesi
 ││ ♡゙ Delsampah
 ││ ♡゙ Setppsewa
 ││ ♡゙ Changewdsewa
 ││ ♡゙ Changewdppj
 ││ ♡゙ Addsewa
 ││ ♡゙ Delsewa
 ││ ♡゙ Ceksewa
 ││ ♡゙ Cekexpired
 ││ ♡゙ Perpanjangsewa
 ││ ♡゙ Listsewa
 ││ ♡゙ Backupbot
 ││ ♡゙ Cekip
 ││ - - - - - - - - - - - -
 ││ ♡゙ Cekstatusakun
 ││ ♡゙ Listlayanankebsos
 ││ ♡゙ Addkebsos
 ││ ♡゙ Delkebsos
 ││ ♡゙ cekorderankebsos
 ││ ♡゙ Addgctopup
 ││ ♡゙ Delgctopup
 ││ ♡゙ Upgrade
 ││ ♡゙ Deposit
 ││ ♡゙ Profit
 ││ ♡゙ Setprofit
 ││ ♡゙ Cekdata
 ││ ♡゙ Getcase
 ││ ♡゙ Addcase
 ││ ♡゙ Editcase
 ││ ♡゙ Delcase
 ││ ♡゙ Cekcase
 ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'groupmenu':
case 'grupmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Group Menu
   ││
   ││ ♡゙ Antich (on/off)
   ││ ♡゙ Antiwame (on/off)
   ││ ♡゙ Antilink (on/off)
   ││ ♡゙ Antipl (on/off)
   ││ ♡゙ Antitoxic1 (on/off)
   ││ ♡゙ Antitoxic2 (on/off)
   ││ ♡゙ Antilinktt (on/off)
   ││ ♡゙ Antilinkyt (on/off)
   ││ ♡゙ Antilinkgc1 (on/off)
   ││ ♡゙ Antilinkgc2 (on/off)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Addlist (key@Respon)
   ││ ♡゙ Dellist (key)
   ││ ♡゙ updatenamelist (key@newKey)
   ││ ♡゙ updatelist (key@newRespon)
   ││ ♡゙ setpayment (key@wording)
   ││ ♡゙ setbuttoncopy (key@disButn@cpyVal)
   ││ ♡゙ setbuttonurl (key@disButn@urlVal)
   ││ ♡゙ changewording (key@newWording)
   ││ ♡゙ delbutton (key)
   ││ ♡゙ pay
   ││ ♡゙ Hidetag (textnya)
   ││ ♡゙ Faketag (textnya)
   ││ ♡゙ Tagall (textnya)
   ││ ♡゙ Kick (628xx)
   ││ ♡゙ Add (628xx)
   ││ ♡゙ Promote (628xx)
   ││ ♡゙ Demote (628xx)
   ││ ♡゙ Sendlinkgc (628xx)
   ││ ♡゙ Inspect (linknya)
   ││ ♡゙ Inspect2 (linknya)
   ││ ♡゙ Promoteall
   ││ ♡゙ Demoteall
   ││ - - - - - - - - - - - -
   ││ ♡゙ Setdesk (on/off)
   ││ ♡゙ Welcome (on/off)
   ││ ♡゙ Left (on/off)
   ││ ♡゙ Setwelcome (text)
   ││ ♡゙ Setleft (text)
   ││ ♡゙ Setopen (text)
   ││ ♡゙ Setclose (text)
   ││ ♡゙ Setdone (text)
   ││ ♡゙ Setproses (text)
   ││ ♡゙ Setlist (text)
   ││ ♡゙ Setsimbol (text)
   ││ ♡゙ SetGrup (open/close)
   ││ ♡゙ Open
   ││ ♡゙ Close
   ││ ♡゙ Jeda
   ││ ♡゙ Editsubjek (textnya)
   ││ ♡゙ Editdesk (textnya)
   ││ ♡゙ Setppgc
   ││ ♡゙ Linkgroup
   ││ ♡゙ Resetlinkgc
   ││ ♡゙ Afk
   ││ - - - - - - - - - - - -
   ││ ♡゙ Saran
   ││ ♡゙ Reportbug
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'funmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Fun Menu
   ││
   ││ ♡゙ Truth
   ││ ♡゙ Dare
   ││ ♡゙ Rate
   ││ ♡゙ Apakah
   ││ ♡゙ Kapankah
   ││ ♡゙ Bisakah
   ││ ♡゙ Bagaimanakah
   ││ ♡゙ Gantengcek
   ││ ♡゙ Cantikcek
   ││ ♡゙ Jodoh
   ││ ♡゙ Readmore
   ││ ♡゙ Cwr
   ││ ♡゙ Couple
   ││ ♡゙ Meme
   ││ - - - - - - - - - - - -
   ││ ♡゙ FML
   ││ ♡゙ FML
   ││ ♡゙ Bucin
   ││ ♡゙ Quotes
   ││ ♡゙ Motivasi
   ││ ♡゙ Katabijak
   ││ ♡゙ Katacinta
   ││ ♡゙ Katagalau
   ││ ♡゙ Katahacker
   ││ ♡゙ Katailham
   ││ ♡゙ Katasenja
   ││ ♡゙ Katasindiran
   ││ ♡゙ Quotesanime
   ││ ♡゙ Quotespubg
   ││ ♡゙ Quotesislamic
   ││ ♡゙ Nickff
   ││ ♡゙ Puisi
   ││ ♡゙ Pantun
   ││ ♡゙ Faktaunik
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'toolsmenu':
case 'toolmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Tools Menu
   ││
   ││ ♡゙ Sticker
   ││ ♡゙ Smeme
   ││ ♡゙ Qc
   ││ ♡゙ Qckode
   ││ ♡゙ Wm
   ││ ♡゙ Brat
   ││ ♡゙ Brat2
   ││ ♡゙ Ttp
   ││ ♡゙ Attp
   ││ - - - - - - - - - - - -
   ││ ♡゙ Createqr
   ││ ♡゙ Detectqr
   ││ ♡゙ Toimg
   ││ ♡゙ Ocr
   ││ ♡゙ Rvo
   ││ ♡゙ Hd
   ││ ♡゙ Hd2
   ││ ♡゙ Hd3
   ││ ♡゙ Hd4
   ││ ♡゙ Removebg
   ││ ♡゙ Toanime
   ││ ♡゙ Tocyberpunk
   ││ ♡゙ Todreamscape
   ││ ♡゙ Tocomic
   ││ ♡゙ Todonghua
   ││ ♡゙ Todisney
   ││ ♡゙ Toghibli
   ││ ♡゙ Img2Txt
   ││ ♡゙ Txt2img
   ││ ♡゙ Txt2anime
   ││ ♡゙ Txt2flux
   ││ ♡゙ Txt2photoleap
   ││ ♡゙ Txt2waifu
   ││ - - - - - - - - - - - -
   ││ ♡゙ Hdvid
   ││ - - - - - - - - - - - -
   ││ ♡゙ text2speech
   ││ - - - - - - - - - - - -
   ││ ♡゙ Ssweb
   ││ ♡゙ Sstab
   ││ ♡゙ Sshp
   ││ - - - - - - - - - - - -
   ││ ♡゙ Cwr
   ││ ♡゙ Ffstalk
   ││ ♡゙ Mlstalk
   ││ ♡゙ Ttstalk
   ││ - - - - - - - - - - - -
   ││ ♡゙ Reminder
   ││ ♡゙ Getname
   ││ ♡゙ Getpic
   ││ ♡゙ Confes
   ││ ♡゙ Confes2
   ││ ♡゙ Readmore
   ││ ♡゙ Cwr
   ││ ♡゙ Tourl
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'gamemenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Game Menu
   ││
   ││ ♡゙ TTC
   ││ ♡゙ Deltc
   ││ - - - - - - - - - - - -
   ││ ♡゙ Tebak Kata
   ││ ♡゙ Tebak Gambar
   ││ ♡゙ Tebak Lirik
   ││ ♡゙ Tebak Kalimat
   ││ ♡゙ Tebak Lontong
   ││ - - - - - - - - - - - -
   ││ ♡゙ Kuismath Noob
   ││ ♡゙ Kuismath Easy
   ││ ♡゙ Kuismath Medium
   ││ ♡゙ Kuismath Hard
   ││ ♡゙ Kuismath Extreme
   ││ ♡゙ Kuismath Imposibble
   ││ ♡゙ Kuismath Imposibble2
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'beritamenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Berita Menu
   ││
   ││ ♡゙ Inews
   ││ ♡゙ Kontan
   ││ ♡゙ KompasNews
   ││ ♡゙ DetikNews
   ││ ♡゙ DailyNews
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'randommenu':
case 'randmenu':{
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const y11 = `   ╭───── 私❛❛ Random Menu
   ││
   ││ ♡゙ Qc
   ││ ♡゙ Nickff
   ││ ♡゙ Puisi
   ││ ♡゙ Pantun
   ││ ♡゙ Qckode
   ││ ♡゙ Sticker
   ││ ♡゙ Smeme
   ││ ♡゙ Reminder
   ││ ♡゙ Faktaunik
   ││ ♡゙ Couple
   ││ ♡゙ Meme
   ││ ♡゙ Getname
   ││ ♡゙ Getpic
   ││ ♡゙ Confes
   ││ ♡゙ Menfes
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`
m.reply(y11)
}
break

case 'downmenu':
case 'downloadmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Download Menu
   ││
   ││ ♡゙ Fb (linknya)
   ││ ♡゙ Fbvideo (linknya)
   ││ ♡゙ Fbfoto (linknya)
   ││ ♡゙ Fbaudio (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Ig (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Tt (linknya)
   ││ ♡゙ Ttaudio (linknya)

   ││ - - - - - - - - - - - -
   ││ ♡゙ Twitter (linknya)
   ││ ♡゙ Twittervideo (linknya)
   ││ ♡゙ Twitterfoto (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Play (linknya)
   ││ ♡゙ Ytmp3 (linknya)
   ││ ♡゙ Ytmp4 (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Mediafire (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Spotify (text)
   ││ ♡゙ Spotifydl (Linknya)
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'islamimenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Islami Menu
   ││
   ││ ♡゙ Doa
   ││ ♡゙ Asmaul Husna
   ││ ♡゙ Ayat Kursi
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'searchmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Search Menu
   ││
   ││ ♡゙ Ai
   ││ ♡゙ Yuna
   ││ ♡゙ Imdb
   ││ ♡゙ Chord
   ││ ♡゙ Lirik
   ││ ♡゙ Cuaca
   ││ ♡゙ Jarak
   ││ ♡゙ Google
   ││ ♡゙ Mcserver
   ││ ♡゙ Apksearch
   ││ ♡゙ Animesearch
   ││ ♡゙ Animeinfo
   ││ ♡゙ Animedownload
   ││ ♡゙ Translate
   ││ ♡゙ Kodebahasa
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'antimenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Anti Menu
   ││
   ││ ♡゙ Antich
   ││ ♡゙ Antiwame
   ││ ♡゙ Antilink
   ││ ♡゙ Antipl
   ││ ♡゙ Antitoxic1
   ││ ♡゙ Antitoxic2
   ││ ♡゙ Antilinktt
   ││ ♡゙ Antilinkyt
   ││ ♡゙ Antilinkgc1
   ││ ♡゙ Antilinkgc2
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break





//------------------------------------------------------------------[ MENU ]------------------------------------------------------------------------






case 'help': {
m.reply(`*Panduan Untuk Menggunakan Fitur Bot*

*#1 Membuat Sticker Whatsapp*
*#2 Membuat Sticker Video*
*#3 Mengubah Watermark Sticker*
*#4 Meningkatkan Kualitas Gambar*
*#5 Mengunduh Foto/Video Dari Link*
*#6 Mengunduh Audio/Video Youtube*
*#7 Mengunduh Lagu/Musik*
*#8 Bertanya Kepada Bot*
*#9 Mencari Berita*
*#10 Mengubah Gambar Menjadi Link*
*#11 Mengetahui Jarak Kota*
*#12 Menghapus Pesan Bot*

🎁 *Untuk Menampilkan Panduan Ketik Sesuai Nomor, Contoh : NO1* 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case '#1': case 'no1': {
m.reply(`*Membuat Sticker Whatsapp*

🎁 *Untuk Membuat Sticker Whatsapp Kirim Foto/Video Dengan Caption S, Stiker, Sticker*
🎁 *Untuk Membuat Sticker Dengan Caption Gunakan Smeme : Contoh Smeme Lenwy*`)
}
break

case 'no2': {
m.reply(`*Membuat Sticker Video*

🎁 *Untuk Membuat Sticker Video Kirim Video Minimal 9 Detik Dengan CAption S*`)
}
break

case 'no3': {
m.reply(`*Mengubah Watermark Sticker*

🎁 *Untuk Mengubah Watermark Sticker Balas Sticker Dengan Mengetik : Wm (Teks)*
🎁 *Contoh : Wm ${global.ownername}*`)
}
break

case 'no4': {
m.reply(`*Meningkatkan Kualitas Gambar*

🎁 *Untuk Meningkatkan Kualitas Gambar Kirim Gambar/Foto Dengan Caption Hd, Remini*`)
}
break

case 'no5': {
m.reply(`*Mengunduh Foto/Video Dari Link*

🎁 *Untuk Mengunduh Foto/Video Dari Link Ketik : Tiktok (Link Tiktok)*
🎁 *Lebih Lengkapnya Ketik Downmenu*

⚠️ *Pastikan Link Sesuai Dengan Perintah*`)
}
break

case 'no6': {
m.reply(`*Mengambil Audio/Video Dari Youtube*

🎁 *Untuk mengambil Audio/Video Dari Youtube Ketik : Ytmp4 (Link)*
🎁 *Ytmp3 Untuk Audio | Ytmp4 Untuk Video*

⚠️ *Audio/Video Lebih Dari 5 Menit Kemungkinan Gagal Dikirim*`)
}
break

case 'no7': {
m.reply(`*Mengunduh Lagu/Musik*

🎁 *Untuk Mengunduh Lagu ketik : Play (Nama Lagu)*
🎁 *Contoh : Play Boa - Duvet*`)
}
break

case 'no8': {
m.reply(`*Bertanya Kepada Bot*

🎁 *Untuk Bertanya kepada Bot Ketik : Ask (Pertanyaan)*
🎁 *Contoh : Ask Sejarah Indonesia*`)
}
break

case 'no9': {
m.reply(`*Mencari Berita*

🎁 *Untuk Mencari Berita Ketik : Inews*
🎁 *Lebih Lengkapnya Ketik Beritamenu*`)
}
break

case 'no10': {
m.reply(`*Mengubah Gambar Menjadi Link*

🎁 *Untuk Mengubah Gambar Menjadi Link Kirim Gmbar Dengan caption Tourl*`)
}
break

case 'no11': {
m.reply(`*Mengetahui Jarak Kota*

🎁 *Untuk Mengetahui Jarak Kota ketik : Jarak (Nama Kota)|(Nama Kota)*
🎁 *Contoh : Jarak Bandung|Jakarta*`)
}
break

case 'no12': {
m.reply(`*Menghapus Pesan Bot*

🎁 *Untuk Menghapus Pesan Bot, Balas Pesan Bot Dengan Mengetik : Del*`)
}
break

case 'translate': {
if (!text) return m.reply(`Masukkan Teks Yang Ingin Di Translate`)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=edce68e031c34dcf71219133&text=${text}`)).json()
let resu = `Mentranslate teks dari Bahasa ${hasil.result.from} ke Bahasa ${hasil.result.to}

Arti dari '${hasil.result.original}' adalah

> ${hasil.result.translated}`
m.reply(resu)
}
break

case 'kodebahasa': {
m.reply(`📦 *Kode Bahasa*

 *⨠ Af: Afrikaans* 
 *⨠ Sq: Albanian*
 *⨠ Ar: Arabic*
 *⨠ Hy: Armenian*
 *⨠ Ca: Catalan* 
 *⨠ Zh: Chinese*
 *⨠ Zh-Cn: Chinese (Mandarin/China)*
 *⨠ Zh-Tw: Chinese (Mandarin/Taiwan)*
 *⨠ Zh-Yue: Chinese (Cantonese)*
 *⨠ Hr: Croatian*
 *⨠ Cs: Czech*
 *⨠ Da: Danish*
 *⨠ Nl: Dutch*
 *⨠ En: English*    
 *⨠ En-Au: English (Australia)*
 *⨠ En-Uk: English (United Kingdom)*
 *⨠ en-Us: English (United States)* 
 *⨠ Eo: Esperanto* 
 *⨠ Fi: Finnish* 
 *⨠ Fr: French*
 *⨠ De: German*
 *⨠ El: Greek* 
 *⨠ Ht: Haitian Creole* 
 *⨠ Hi: Hindi* 
 *⨠ Hu: Hungarian* 
 *⨠ Ss: Icelandic* 
 *⨠ Id: Indonesian* 
 *⨠ It: Italian*
 *⨠ Ja: Japanese*
 *⨠ Ko: Korean*
 *⨠ La: Latin*
 *⨠ Lv: Latvian*
 *⨠ Mk: Macedonian*
 *⨠ No: Norwegian*
 *⨠ Pl: Polish*
 *⨠ Pt: Portuguese*
 *⨠ Pt-Br: Portuguese (Brazil)*
 *⨠ Ro: Romanian*
 *⨠ Ru: Russian*
 *⨠ Sr: Serbian*
 *⨠ Sk: Slovak*
 *⨠ Es: Spanish* 
 *⨠ Es-Es: Spanish (Spain)*
 *⨠ Es-Us: Spanish (United States)*
 *⨠ Sw: Swahili*
 *⨠ Sv: Swedish*
 *⨠ Ta: Tamil*
 *⨠ Th: Thai*
 *⨠ Tr: Turkish*
 *⨠ Vi: Vietnamese* 
 *⨠ Cy: Welsh*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

case 'sc':
case 'script': {
if (text) return
let buy = `*Script?*
📑 *No Enc, Pairing Code*
🎁 *Beli? :* wa.me/${global.developer}
🤖 *Sewa? :* wa.me/${global.owner}`
lenwy.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: buy,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: false
      }}}}}}, {})
}
break

case 'hai': {
m.reply('*Hallo Juga*')
}
break

//-------------------------------------------------------------------------------------------------------------------------------------------------//

case 'setlist': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  
  // Mengecek apakah ada teks atau tidak
  let teks = text ? text : '';

  // Jika teks ada, lakukan pengecekan apakah ada '|||'
  if (teks) {
    let textParts = teks.split("|||");

    // Mengecek apakah jumlah bagian setelah dipisah dengan '|||' adalah 2
    if (textParts.length !== 2) {
      return m.reply("Harus ada 2 bagian yang dipisahkan oleh '|||'");
    }

    // Jika valid, update text list
    await updateTextList(m, teks);
    m.reply(mess.success);
  } else {
    // Jika tidak ada teks, kosongkan
    teks = '';
    await updateTextList(m, teks);
    m.reply(mess.success);
  }
}
break

case 'setsimbol': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  let teks = text ? text : ''
  await updateTextListSimbol(m, text)
  m.reply(mess.success)
}
break

case 'list':
case 'listmenu': {
  if (text) return;
  if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`);
  if (!isAlreadyResponListGroup (m.chat, db_respon_list)) return m.reply(`*Belum Ada List Yang Terdaftar Di Grup Ini*`);

  try {
    let textlist = global.datagc[m.chat].text_list;
    let textsimbol = global.datagc[m.chat].text_list_simbol
	  let usertag = `@${m.sender.split("@")[0]}`
    let textParts = textlist.split("|||");
    if (textParts.length > 2) {
      return m.reply("Format list tidak valid. Harus ada 2 bagian yang dipisahkan oleh '|||'");
    }

    // Bagian header, body, dan footer
    let wordingHeader = textParts[0]
    let wordingFooter = textParts[1]

    // Penggantian tag dinamis pada bagian header, body, dan footer
    if (!wordingHeader) {
      wordingHeader = `── .✦ 𝖧𝖾𝗒 @${m.sender.split("@")[0]}⁩, 𝗐𝖾𝗅𝖼𝗈𝗆𝖾 𝗍𝗈 ${groupMetadata.subject}

  ── .✦ 𝖣𝖺𝗒 : ${harinya} — ✿ ۫ ⊹
  ── .✦ 𝖣𝖺𝗍𝖾 : ${hariini2} — ✿ ۫ ⊹ 
  ── .✦ 𝖳𝗂𝗆𝖾 : ${time2} — ✿ ۫ ⊹

   ┌─「 L I S T 」
   ┆`
    }


    if (wordingHeader.includes('@groupname')) {
      wordingHeader = wordingHeader.replace('@groupname', groupName);
    }
    if (wordingHeader.includes('@tagdiri')) {
      wordingHeader = wordingHeader.replace('@tagdiri', usertag);
    }
    if (wordingHeader.includes('@jam')) {
      wordingHeader = wordingHeader.replace('@jam', jamnya);
    }
    if (wordingHeader.includes('@menit')) {
      wordingHeader = wordingHeader.replace('@menit', menitnya);
    }
    if (wordingHeader.includes('@detik')) {
      wordingHeader = wordingHeader.replace('@detik', detiknya);
    }
    if (wordingHeader.includes('@hari')) {
      wordingHeader = wordingHeader.replace('@hari', harinya);
    }
    if (wordingHeader.includes('@tanggal')) {
      wordingHeader = wordingHeader.replace('@tanggal', tanggalnya);
    }
    if (wordingHeader.includes('@bulan')) {
      wordingHeader = wordingHeader.replace('@bulan', bulannya);
    }
    if (wordingHeader.includes('@tahun')) {
      wordingHeader = wordingHeader.replace('@tahun', tahunnya);
    }
    if (wordingHeader.includes('@namabulan')) {
      wordingHeader = wordingHeader.replace('@namabulan', namabulannya);
    }

    // Penggantian pada bagian body

    let sortedList = db_respon_list.filter(i => i.id === m.chat).sort((a, b) => a.key.localeCompare(b.key));

    let wordingBody = ''
    let simbol = textsimbol || `   ┆ ⸼ ࣪ 𖹭  ࣪𝃯 𓂂 `
    for (let i of sortedList) {
      wordingBody += `\n${simbol} *${i.key.toUpperCase()}*`;
    }
    // Penggantian pada bagian footer
    if (!wordingFooter) {
      wordingFooter = `\n   └───❀*̥˚──────────❀*̥˚┘`
    }
    
    if (wordingFooter.includes('@groupname')) {
      wordingFooter = wordingFooter.replace('@groupname', groupName);
    }
    if (wordingFooter.includes('@tagdiri')) {
      wordingFooter = wordingFooter.replace('@tagdiri', usertag);
    }
    if (wordingFooter.includes('@jam')) {
      wordingFooter = wordingFooter.replace('@jam', jamnya);
    }
    if (wordingFooter.includes('@menit')) {
      wordingFooter = wordingFooter.replace('@menit', menitnya);
    }
    if (wordingFooter.includes('@detik')) {
      wordingFooter = wordingFooter.replace('@detik', detiknya);
    }
    if (wordingFooter.includes('@hari')) {
      wordingFooter = wordingFooter.replace('@hari', harinya);
    }
    if (wordingFooter.includes('@tanggal')) {
      wordingFooter = wordingFooter.replace('@tanggal', tanggalnya);
    }
    if (wordingFooter.includes('@bulan')) {
      wordingFooter = wordingFooter.replace('@bulan', bulannya);
    }
    if (wordingFooter.includes('@tahun')) {
      wordingFooter = wordingFooter.replace('@tahun', tahunnya);
    }
    if (wordingFooter.includes('@namabulan')) {
      wordingFooter = wordingFooter.replace('@namabulan', namabulannya);
    }

    // Gabungkan bagian header, body, dan footer
    let finalText = `${wordingHeader}${wordingBody}${wordingFooter}`;

    // Kirim pesan
    lenwy.sendMessage(m.chat, { text: finalText, mentions: [m.sender] }, { quoted: m });

    await sleep(200);

    // Menambahkan tombol interaktif
    let buttons = sortedList.map(i => ({
      title: i.key,
      id: i.key
    }));

    let buttonParamsJson = JSON.stringify({
      title: "[ LIST ]",
      sections: [{
        title: "Daftar List",
        rows: buttons
      }]
    });

    let botakk = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: {
            body: {
              text: "Ketik Nama Barang Diatas Atau Pilih Barang Menggunakan Tombol Ini"
            },
            footer: {
              text: ""
            },
            header: {
              title: "",
              text: ""
            },
            nativeFlowMessage: {
              buttons: [{
                name: "single_select",
                buttonParamsJson: buttonParamsJson
              }]
            },
            contextInfo: {
              mentionedJid: [m.sender],
            }
          }
        }
      }
    }, { quoted: m });

    await lenwy.relayMessage(m.chat, botakk.message, { messageId: botakk.key.id })
  } catch (err) {
    console.error(err);
    m.reply(`*Terjadi Kesalahan Dalam Mengambil Nama Grup*`);
  }
}
break

case 'addlist': {
if (!isAdmins) return m.reply(mess.admin)
if (!m.isGroup) return m.reply(mess.group)
let args = q.split("@")
let args1 = args[0].toLowerCase()
let args2 = args[1]
if (!q.includes('@')) return m.reply(`*Cara Pengunaan : ${prefix+command}  Key@Respon*\n🎁 *Contoh : addlist wdp@harga wdp _-*`)
if (!args1 && !args2) return m.reply(`Key Dan Respon Harus Diisi!!`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`⚠️ *Nama Key ${args1} Sudah Ada Dalam Group Ini*`)
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploaderLebih(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Menambahkan Key Dengan Kode : ${args1}*`)
}
}
break

case 'dellist': 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`)
if (!text) return m.reply(`*Ketik Nama Item Yang Ingin Dihapus*`)
  let sortedList = db_respon_list.filter(i => i.id === m.chat).sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
})
    let buttons = sortedList.map(i => ({
        title: `${prefix}dellist ${i.key}`,
        id: `${prefix}dellist ${i.key}` // Mengubah ID di sini
    }))
let buttonParamsJson = JSON.stringify({
    title: "[ LIST ]",
    sections: [{
        title: "Daftar List",
        rows: buttons
    }]
})
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: {
                body: {
                    text: "Ketik Nama Item Nya Atau Coba Klik List Dibawah Ini"
                },
                footer: {
                    text: ""
                },
                header: {
                    title: "",
                    subtitle: "",
                    hasMediaAttachment: false
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: buttonParamsJson
                    }/*,{
                       name: "quick_reply",
                        buttonParamsJson: `{"display_text":"Payment","id":"pay a"}`          						
                    }*/]
                },
                contextInfo: {
                    mentionedJid: [m.sender],
                }
            }
        }
    }
}, { quoted: m })
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
await lenwy.sendMessage(m.chat, {
text: "Periksa Lagi List Nya Dan Ketikkan Dengan Benar Atau Gunakan Tombol Dibawah Jika Tidak Muncul.\n\nSilahkan Hubungi Owner Jika Anda Mengalami Kesulitan Dalam Penghapusan List."
}, {
quoted: m
})
await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
if (isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`⚠️ *Sukses Menghapus Item Dengan kode : ${q}*`)
}
break

case 'updatenamelist': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  let args = q.split("@")
  if (args.length !== 2) {
      return m.reply(`*Cara Penggunaan : Updatenamelist OldKey@NewKey*\n🎁 *Contoh : Updatenamelist wdp@antri wdp*`)
  }
  let oldKey = args[0].toLowerCase()
  let newKey = args[1].toLowerCase()
  if (updateKey(m.chat, oldKey, newKey, db_respon_list)) {
      m.reply(`📑 *Sukses Memperbarui Kode Dari ${oldKey} Menjadi ${newKey}*`)
  } else {
      m.reply(`⚠️ *Nama Item ${oldKey} Belum Terdaftar Dalam Group Ini*`)
  }
}
break

case 'updatelist': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let args = q.split("@")
let args1 = args[0].toLowerCase()
let args2 = args[1]
// Check if the input contains the separator '|'
if (!q.includes("@")) return m.reply(`*Cara Pengunaan : Updatelist Item@Respon*\n🎁 *Contoh : Updatelist wdp@harga wdp eaa apala*`)
// Check if the list item exists in the group
if (!isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`⚠️ *Nama Item ${args1} Belum Terdaftar Dalam Group Ini*`)
// Check if the message contains an image
if (/image/.test(mime)) {
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploaderLebih(media)
// Update response list with the new image
updateResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
// Clean up the media file
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
// Update response list without an image
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
}
}
break

case 'sendlist': {
  let oldId
  let newId
  if (!m.isGroup) {
    if (!isCreator) return
    if (!text) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup1|linkGroup2*`)
    if (!budy.includes('|')) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup1|linkGroup2*`)
    let links = text.split('|')
    oldId = await getGroupIdFromLink(links[0].trim(), lenwy)
    newId = await getGroupIdFromLink(links[1].trim(), lenwy)
  } else {
    if (!isAdmins) return m.reply(mess.admin)
    if (!text) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup2*`)
    oldId = m.chat
    newId = await getGroupIdFromLink(text, lenwy)
  }
  let datagrup = await lenwy.groupMetadata(newId)
  if (updateId(oldId, newId, db_respon_list)) {
      m.reply(`📑 *Sukses mengirimkan list ke Group ${datagrup.subject}*`);
  } else {
      m.reply(`⚠️ *Gagal mengirimkan list ke Group ${datagrup.subject}*`);
  }
}
break

case 'resetlist': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (resetList(m.chat, db_respon_list)) {
      m.reply(`📑 *Sukses mereset list*`);
  } else {
      m.reply(`⚠️ *Gagal mereset list*`);
  }
}
break

case 'addtesti': {
if (!isCreator) return m.reply(mess.owner)
if (!/image/.test(mime)) return m.reply(`*Mana Fotonya?*`)    
if (args.length < 1) return m.reply('*Berikan Nama Pada Image*')
if (imagenya.includes(q)) return m.reply("⚠️ *Nama Tersebut Sudah Tersedia*")
let TestiLenwy = await lenwy.downloadAndSaveMediaMessage(quoted)
imagenya.push(q)
await fsx.copy(TestiLenwy, `./database/Testilenwy/${q}.jpg`)
fs.writeFileSync('./database/Lenwytesti.json', JSON.stringify(imagenya))
fs.unlinkSync(TestiLenwy)
m.reply(`📦 *Sukses Menambahkan ${q} Kedalam Database*`)
}
break

case 'testi':
case 'testimoni':
if (!q) return m.reply(`*Masukkan Nama Testimoni Yang Tersedia*`)
let LenwyTesti = `📑 *Testimoni Dalam Database Berhasil Dikirimkan*`     
lenwy.sendMessage(m.chat, {
image: fs.readFileSync(`./database/Testilenwy/${q}.jpg`), caption: LenwyTesti }, { quoted: m
})
break

case 'listtesti':
case 'listtestimoni': {
let teks = '📦 *List Testimoni*\n'
for (let LenTesti of imagenya) {
teks += ` *⨠ ${LenTesti}*\n`
}
teks += `\n*📑 Total : ${imagenya.length} Testimoni*`
m.reply(teks)
}
break

case 'deltesti': {
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply('*Masukkan Nama Imagenya*')
if (!imagenya.includes(q)) return m.reply(`⚠️ *${q} Tidak Ditemukan Dalam Database*`)
let wanu = imagenya.indexOf(q)
imagenya.splice(wanu, 1)
fs.writeFileSync('./database/Lenwytesti.json', JSON.stringify(imagenya))
fs.unlinkSync(`./database/Testilenwy/${q}.jpg`)
m.reply(`⚠️ *Sukses Menghapus ${q} Dalam Database*`)
}
break 

case 'kalkulator': 
case 'calculator': {
    // Definisikan operator yang valid
    const operators = {
        '/': '/',
        '*': '*',
        '+': '+',
        '-': '-',
    };

    // Ambil input pengguna, pastikan ini diinisialisasi dengan benar
    let text = q; // Misalnya, q adalah input dari pengguna

    // Temukan operator yang digunakan
    let operator = null;
    for (const key in operators) {
        if (text.includes(key)) {
            operator = operators[key]
            break
        }
    }

    if (!operator) {
        return m.reply(`*Contoh:*
> *Pembagian: kalkulator 12/2*
> *Perkalian: kalkulator 12*2*
> *Pertambahan: kalkulator 12+2*
> *Pengurangan: kalkulator 12-2*`)
    }

    // Pisahkan argumen berdasarkan operator yang ditemukan
    let [lenwy1, lenwy2] = text.split(operator).map(part => part.trim())

    // Cek jika lenwy1 dan lenwy2 ada dan valid
    if (lenwy1 === undefined || lenwy2 === undefined || isNaN(lenwy1) || isNaN(lenwy2)) {
        return m.reply(`*Pastikan format input benar, contoh: 1200 + 200*`)
    }

    let lenwy_1 = Number(lenwy1)
    let lenwy_2 = Number(lenwy2)

    // Lakukan perhitungan berdasarkan operator
    let result;
    switch (operator) {
        case '+':
            result = lenwy_1 + lenwy_2;
            break
        case '-':
            result = lenwy_1 - lenwy_2;
            break
        case '*':
            result = lenwy_1 * lenwy_2;
            break
        case '/':
            if (lenwy_2 === 0) {
                return m.reply(`*Pembagian dengan nol tidak diperbolehkan!*`)
            }
            result = lenwy_1 / lenwy_2;
            break
    }

    m.reply(`🎁 *Hasil :* ${result}`)
}
break


case 'saran': {
let lenwy_txt = args[0]
if (!text) return m.reply('*Mana Teksnya?*')
if (text.length > 30) return m.reply(`*Maksimal 30 Karakter*`)    
m.reply('*Saran Berhasil Terkirim, Terimakasih*')
lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, { text: `📦 *Saran / Masukan*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Saran Ini Dikirim Oleh ${botname}*`, mentions: [sender]}, { quoted: m })
}
break

case 'reportbug': {
let lenwy_txt = args[0]
if (!text) return m.reply('*Mana Teksnya?*')
if (text.length > 15) return m.reply(`*Maksimal 15 Karakter*`)    
m.reply('⚠️ *Report Berhasil Terkirim, Terimakasih*')
lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, { text: `⚠️ *Report Bug*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Laporan Ini Dikirim Oleh ${botname}*`, mentions: [sender]}, { quoted: m })
}
break

case 'bot': {
if (text) return
m.reply(`Iya Kak, ${pushname}`)
}
break

case 'malas': {
if (text) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'assalamualaikum': {
m.reply(`*Waalaikumussalam*`)
}
break

case 'hi': {
m.reply(`*Halo Juga*`)
}
break

case 'bokep': {
m.reply(`*Haduhh Otak Mesum*`)
}
break

case 'panel': {
if (text) return
m.reply(`Panel? Kalo minat chat no berikut: wa.me/6285261255548`)
}
break

case 'huft': case 'hmmph': {
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break


case 'rate': {
if (!q) return m.reply(`*Contoh: ${prefix + command} Penampilan gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`*Rate : ${q}*\n🎁 *Jawaban : ${te}%*`)
}
break

case 'apakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw lagi marah*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`*Pertanyaan : Apakah ${q}*\n🎁 *Jawaban : ${kah}*`)
}
break

case 'kapankah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw masuk rsj*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`*Pertanyaan : Kapankah ${q}*\n🎁 *Jawaban : ${kapankah}*`)
}
break

case 'bisakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw hamil*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Awokawok', 'TENTU KAMU PASTI BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`*Pertanyaan : Bisakah ${q}*\n🎁 *Jawaban : ${ga}*`)
}
break

case 'bagaimanakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw kuyang*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const gimana = ['Ya Begitulah', 'Gak Normal', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Kayaknya Lanjut Part 2', 'Kepo Kamu', 'Gimana Aja']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`*Pertanyaan : Bagaimanakah ${q}*\n🎁 *Jawaban : ${ya}*`)
}
break

case 'gantengcek': case 'cekganteng': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const gan = ['Normal','Ganteng Njir','Ganteng Amat Bang','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`*Nama* ${q}\n🎁 *Jawaban : ${teng}*`)
}
break

case 'cantikcek': case 'cekcantik': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const can = ['Normal','Cantik Njir','Cantik Amat Sih','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`*Nama* ${q}\n🎁 *Jawaban : ${tik}*`)
}
break

case 'createqr': {
if (!text) return m.reply(`*Contoh : Createqr ${botname}*`)
LenwyLD()
await sleep(200)
const qrcode = require('qrcode')
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
lenwy.sendMessage(from, { image: data, caption: mess.success }, { quoted: m })
}
break

case 'detectqr': {
LenwyLD()
await sleep(200)
try {
mee = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploader60Minute(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json()
  LenwyLD()
  await sleep(200) 
m.reply(util.format(data[0]))
} catch (err) {
m.reply(`*Mana Qrnya?*`)
}
}
break

case 'cekidgc': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `*List Grup Yang Dimasuki ${botname}*\n🎁 *Total Group : ${anu.length} Group*\n\n`

for (let x of anu) {
  let metadata2 = await lenwy.groupMetadata(x)
  try {
    let response2 = await lenwy.groupInviteCode(metadata2.id)
    linkgc = `https://chat.whatsapp.com/${response2}`
  } catch {
    linkgc = '-'
  }
  teks += `*Nama Group : ${metadata2.subject}*
🎁 *ID Group : ${metadata2.id}*
📦 *Total Member Group : ${metadata2.participants.length}*
📎 *Link Group : ${linkgc}*
────────────────────────\n\n`
  }
  m.reply(teks + `*Cara Penggunaan : Pushkontak ID Group|Teks*\n🎁 *Contoh : Pushkontak ID Group|Save ${botname}*`)
}
break

case 'pushkontak2': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(`*Contoh : Pushkontak ID Group|Teks*\n🎁 *Untuk Mengetahui Id Group Ketik : Cekidgc*`)
const groupMetadataa = !m.isGroup? await lenwy.groupMetadata(global.idgcns).catch(e => {}) : ""
const participants = m.isGroup ? await groupMetadataa.participants : ''
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
m.reply(`*Mengirim Pesan Ke ${mem.length} Nomor, Selesai Dalam Waktu ${mem.length * 3} Detik*`)
for (let geek of mem) {
await sleep(200)
lenwy.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
m.reply(`*Successfully sent message To ${mem.length} person*`)
}
break

case 'pushcontact':
case 'pushkontak': {
if (!isCreator) return
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(`*Fitur ini Hanya Bisa Di dalam Grup Dan Hanya Mengirimkan Teks Ke Nomor Nomor Yang Ada Pada Grup.n\nContoh : Pushkontak2 <Teks>*`)
global.tekspushkonv2 = text
const groupMetadata = m.isGroup? await lenwy.groupMetadata(from).catch(e => {}) : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploader60Minute(media)
await lenwy.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(200)
} else {
await lenwy.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(200)
}
}
lenwy.sendMessage("6285261255548@s.whatsapp.net", {text:`*Selesai*`})
}
break

case 'savekontak': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA [${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard; }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(util.format(err))
} finally {
  await lenwy.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Selesai", mimetype: "text/vcard" }, { quoted: m })
  contacts.splice(0, contacts.length)
  fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
  }
  }
  break
  
  case 'public': {
  if (!isCreator) return m.reply(mess.owner) 
  lenwy.public = true
  m.reply('Sukses Change To Public')
  }
  break
  
  case 'self': {
  if (!isCreator) return m.reply(mess.owner) 
  lenwy.public = false
  m.reply('Sukses Change To Self')
  }
  break
  
  case 'enc': {
  if (!isCreator) return m.reply(mess.owner)
  if (!q) return m.reply(`Contoh ${prefix+command} const hai = 'Aku Merlinus'`)
  let res = await (await fetch (`https://endpoint.web.id/tools/encrypt?key=315602&query=${q}`)).json()
  m.reply(res.result)
  }
  break

//=============================================================================================================================================================//

case 'addallprem': {
  if (!isCreator) return m.reply(mess.owner)
  if (!m.isGroup) return m.reply(`*Perintah Ini Hanya Dapat Digunakan Di Dalam Grup.*`)

  // Mengambil metadata grup
  let groupMetadata;
  try {
      groupMetadata = await lenwy.groupMetadata(from)
  } catch (e) {
      console.error('Error fetching group metadata:', e)
      return m.reply('*Gagal Mengambil Metadata Grup.*')
  }

  // Mendapatkan peserta grup
  let participants;
  try {
      participants = groupMetadata.participants;
  } catch (e) {
      console.error('Error fetching group participants:', e)
      return m.reply('*Gagal Mengambil Daftar Peserta Grup.*')
  }

  if (!participants || participants.length === 0) return m.reply('Tidak ada peserta dalam grup.')

  // Membaca daftar premium dari file
  let owner;
  try {
      owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
  } catch (err) {
      console.error('Error reading premium.json:', err)
      return m.reply('*Gagal Memuat Daftar Premium.*')
  }

  let addedNumbers = []
  let existingNumbers = []

  // Proses setiap peserta
  for (let participant of participants) {
      let number = participant.id.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '')
      if (number.length > 0 && !owner.includes(number)) {
          owner.push(number)
          addedNumbers.push(number)
      } else if (owner.includes(number)) {
          existingNumbers.push(number)
      }
  }

  // Simpan daftar premium yang telah diperbarui
  try {
      fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))
  } catch (err) {
      console.error('Error writing premium.json:', err)
      return m.reply('*Gagal Menyimpan Daftar Premium.*')
  }

  // Kirimkan pesan balasan
  if (addedNumbers.length > 0) {
      m.reply(`*Nomor Berikut Telah Ditambahkan Ke Daftar Premium:*\n\n${addedNumbers.join('\n')}`)
  }
  if (existingNumbers.length > 0) {
      m.reply(`*Nomor Berikut Sudah Ada Di Daftar Premium:*\n\n${existingNumbers.join('\n')}`)
  }
}
break


case 'delallprem': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply(`Perintah ini hanya dapat digunakan di dalam grup.`)

    // Mengambil metadata grup
    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(from)
    } catch (e) {
        console.error('Error fetching group metadata:', e)
      return m.reply('*Gagal Mengambil Metadata Grup.*')
    }

    // Mendapatkan peserta grup
    let participants;
    try {
        participants = groupMetadata.participants;
    } catch (e) {
        console.error('Error fetching group participants:', e)
      return m.reply('*Gagal Mengambil Daftar Peserta Grup.*')
    }

    if (!participants || participants.length === 0) return m.reply('Tidak ada peserta dalam grup.')

    // Membaca daftar premium dari file
    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
      return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    let removedNumbers = []
    let notFoundNumbers = []

    // Proses setiap peserta
    for (let participant of participants) {
        let number = participant.id.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '')
        if (number.length > 0) {
            let index = owner.indexOf(number)
            if (index !== -1) {
                owner.splice(index, 1)
                removedNumbers.push(number)
            } else {
                notFoundNumbers.push(number)
            }
        }
    }

    // Simpan daftar premium yang telah diperbarui
    try {
        fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))
    } catch (err) {
        console.error('Error writing premium.json:', err)
      return m.reply('*Gagal Menyimpan Daftar Premium.*')
    }

    // Kirimkan pesan balasan
    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dihapus Dari Daftar Premium.*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan Di Daftar Premium:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break


case 'addprem': {
  if (!isCreator) return m.reply(mess.owner)
  if (!args[0]) return m.reply('*Mana Nomornya?*')

  // Ambil semua nomor dari args
  let numbers = text.split('|')[0].split(/\s+/).map(number => number.replace(/[^0-9]/g, ''))

  if (numbers.length === 0) return m.reply('*Tidak Ada Nomor Yang Diberikan.*')

  let invalidNumbers = []
  let validNumbers = []

  // Periksa setiap nomor
  for (let number of numbers) {
    if (number.length === 0) continue;

    let ceknye = await lenwy.onWhatsApp(number + '@s.whatsapp.net')
    if (ceknye.length === 0) {
      invalidNumbers.push(number)
    } else {
      validNumbers.push(number)
    }
  }

  // Tambahkan nomor valid ke daftar premium
  if (validNumbers.length > 0) {
    let owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    owner = Array.from(new Set([...owner, ...validNumbers])) // Menghindari duplikasi
    fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))

    // Perbarui limit menjadi Infinity untuk nomor premium
    let user = global.db.data.users;
    validNumbers.forEach(number => {
      if (!user[number]) {
        user[number] = {}; // Pastikan data pengguna ada
      }
      user[number].limit = Infinity; // Set limit ke Infinity
    })

    m.reply(`Nomor ${validNumbers.join(', ')} Ditambahkan Kedalam Daftar Premium dan Limitnya Diatur ke Infinity.`)
  }

  // Kirimkan pesan jika ada nomor yang tidak valid
  if (invalidNumbers.length > 0) {
    m.reply(`Nomor berikut tidak valid: ${invalidNumbers.join(', ')}`)
  }
}
break


  
case 'delprem': {
    if (!isCreator) return m.reply(mess.owner)
    if (!args[0]) return m.reply(`*Mana Nomornya?*`)

    // Ambil semua nomor dari args
    let numbers = text.split('|')[0].split(/\s+/).map(number => number.replace(/[^0-9]/g, ''))

    if (numbers.length === 0) return m.reply(`*Tidak Ada Nomor Yang Diberikan.*`)

    let removedNumbers = []
    let notFoundNumbers = []

    // Baca daftar premium dari file
    let owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))

    // Periksa setiap nomor
    for (let number of numbers) {
        if (number.length === 0) continue;

        let index = owner.indexOf(number)
        if (index !== -1) {
            owner.splice(index, 1)
            removedNumbers.push(number)
        } else {
            notFoundNumbers.push(number)
        }
    }

    // Simpan daftar premium yang telah diperbarui
    fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))

    // Kirimkan pesan balasan
    if (removedNumbers.length > 0) {
        m.reply(`Nomor ${removedNumbers.join(', ')} telah dihapus dari daftar premium.`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`Nomor berikut tidak ditemukan dalam daftar premium: ${notFoundNumbers.join(', ')}`)
    }
}
break

  
case 'listprem': {
    if (!isCreator) return m.reply(mess.owner)

    // Membaca data premium dari file
    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    if (owner.length === 0) return m.reply('*Daftar Premium Masih Kosong.*')

    let teksooo = 'List Premium\n';
    for (let i of owner) {
        teksooo += `✉️ ${i}\n`
    }
    teksooo += `\nTotal: ${owner.length}`;

    // Kirimkan pesan daftar premium
    lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
}
break

  
//===============================================================================================================================================================//
case 'banall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply('*Perintah ini hanya bisa digunakan dalam grup.*')

    // Ambil metadata grup
    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(m.chat)
    } catch (err) {
        console.error('Error fetching group metadata:', err)
        return m.reply('*Gagal mengambil metadata grup.*')
    }

    // Ambil daftar peserta grup
    let participants = groupMetadata.participants || []
    
    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    // Menyimpan nomor yang berhasil dibanned dan yang sudah ada di daftar banned
    let bannedNumbers = []
    let alreadyBannedNumbers = []

    // Proses setiap peserta grup
    for (let participant of participants) {
        let orgnye = participant.id;
        if (banned.includes(orgnye)) {
            alreadyBannedNumbers.push(orgnye)
        } else {
            banned.push(orgnye)
            bannedNumbers.push(orgnye)
        }
    }

    // Simpan daftar banned yang telah diperbarui
    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal menyimpan daftar banned.*')
    }

    // Kirimkan pesan balasan
    if (bannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dibanned:*\n\n${bannedNumbers.join('\n')}`)
    }
    if (alreadyBannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Banned:*\n\n${alreadyBannedNumbers.join('\n')}`)
    }
}
break


case 'delbanall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply('*Perintah ini hanya bisa digunakan dalam grup.*')

    // Ambil metadata grup
    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(m.chat)
    } catch (err) {
        console.error('Error fetching group metadata:', err)
        return m.reply('*Gagal mengambil metadata grup.*')
    }

    // Ambil daftar peserta grup
    let participants = groupMetadata.participants || []
    
    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    // Menyimpan nomor yang berhasil dihapus dan yang tidak ditemukan dalam daftar banned
    let removedNumbers = []
    let notFoundNumbers = []

    // Proses setiap peserta grup
    for (let participant of participants) {
        let orgnye = participant.id;
        const index = banned.indexOf(orgnye)
        if (index !== -1) {
            banned.splice(index, 1) // Menghapus nomor dari daftar banned
            removedNumbers.push(orgnye)
        } else {
            notFoundNumbers.push(orgnye) // Nomor tidak ditemukan dalam daftar banned
        }
    }

    // Simpan daftar banned yang telah diperbarui
    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal menyimpan daftar banned.*')
    }

    // Kirimkan pesan balasan
    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dihapus dari Daftar Banned:*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan dalam Daftar Banned:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break

case 'mulaiabsen': {
  if (!m.isGroup) return m.reply('Hanya Di Group');
  const chatId = m.chat;
  const userId = m.sender;
  
  if (absenData[chatId]) {
    return m.reply('Absen sudah dimulai di obrolan ini!');
  }
  
  absenData[chatId] = {
    admin: userId,
    participants: [],
  };
  m.reply('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung.');
}
break;

case 'absen': {
  if (!m.isGroup) return m.reply('Hanya Di Group');
  const chatId = m.chat;
  const userId = m.sender;
  
  if (!absenData[chatId]) {
    return m.reply('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
  }
  
  const list = absenData[chatId].participants;
  if (list.includes(userId)) {
    return m.reply('Anda sudah absen sebelumnya!');
  }
  
  list.push(userId);
  m.reply('Anda telah berhasil bergabung dalam proses absen!');
}
break;

case 'cekabsen': {
  if (!m.isGroup) return m.reply('Hanya Di Group');
  const chatId = m.chat;
  
  if (!absenData[chatId]) {
    return m.reply('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
  }
  
  const participants = absenData[chatId].participants;
  if (participants.length === 0) {
    return m.reply('Belum ada peserta yang absen.');
  }
  
  const tags = participants
    .map(id => `@${id.replace('@s.whatsapp.net', '')}`)
    .join('\n');
  
  lenwy.sendMessage(m.chat,
    `Yang Sudah Absen:\n${tags}`, {
      mentions: participants,
      quoted: m
    }
  );
}
break;

case 'hapusabsen': {
  if (!m.isGroup) return m.reply('Hanya Di Group');
  const chatId = m.chat;
  
  if (absenData[chatId] && absenData[chatId].admin === m.sender) {
    delete absenData[chatId];
    m.reply('Proses absen telah dihapus!');
  } else {
    m.reply('Anda tidak memiliki izin untuk menghapus proses absen!');
  }
}
break;

case 'ban': {
    if (!isCreator) return m.reply(mess.owner)
    // Mendapatkan ID yang ditandai
    let mentionedJids = m.mentionedJidList || []
    
    // Jika tidak ada yang ditandai, ambil nomor dari args
    if (mentionedJids.length === 0) {
        if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
        // Proses args jika tidak ada yang ditandai
        mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
    }
    
    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    // Menyimpan nomor yang berhasil dibanned dan yang sudah ada di daftar banned
    let bannedNumbers = []
    let alreadyBannedNumbers = []

    // Proses setiap ID
    for (let orgnye of mentionedJids) {
        if (banned.includes(orgnye)) {
            alreadyBannedNumbers.push(orgnye)
        } else {
            banned.push(orgnye)
            bannedNumbers.push(orgnye)
        }
    }

    // Simpan daftar banned yang telah diperbarui
    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal Menyimpan Daftar Banned.*')
    }

    // Kirimkan pesan balasan
    if (bannedNumbers.length > 0) {
        m.reply(`*Nomor Telah Dibanned:*\n\n${bannedNumbers.join('\n')}`)
    }
    if (alreadyBannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Banned:*\n\n${alreadyBannedNumbers.join('\n')}`)
    }
}
break


case 'delban': {
    if (!isCreator) return m.reply(mess.owner)

    // Mendapatkan ID yang ditandai
    let mentionedJids = m.mentionedJidList || []
    
    // Jika tidak ada yang ditandai, ambil nomor dari args
    if (mentionedJids.length === 0) {
        if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
        // Proses args jika tidak ada yang ditandai
        mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
    }
    
    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    // Menyimpan nomor yang berhasil dihapus dan yang tidak ditemukan
    let removedNumbers = []
    let notFoundNumbers = []

    // Proses setiap ID
    for (let orgnye of mentionedJids) {
        const index = banned.indexOf(orgnye)
        if (index !== -1) {
            banned.splice(index, 1) // Menghapus nomor dari daftar banned
            removedNumbers.push(orgnye)
        } else {
            notFoundNumbers.push(orgnye) // Nomor tidak ditemukan dalam daftar banned
        }
    }

    // Simpan daftar banned yang telah diperbarui
    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal Menyimpan Daftar Banned.*')
    }

    // Kirimkan pesan balasan
    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Telah Dihapus dari Daftar Banned:*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan dalam Daftar Banned:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break


case 'listban': {
    if (!isCreator) return m.reply(mess.owner)

    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        return m.reply('*Gagal Membaca Daftar Banned.*')
    }

    // Buat pesan daftar banned
    let response = '*Daftar Banned:*\n\n';
    if (banned.length === 0) {
        response += '*Daftar Banned Kosong.*';
    } else {
        response += banned.map((number, index) => `${index + 1}. ${number}`).join('\n')
    }

    // Kirimkan pesan daftar banned
    m.reply(response)
}
break

  

//===============================================================================================================================================================//


  case 'owner':
  case 'creator': 
  case 'developer': {
  if (text) return
  await lenwy.sendContact(m.chat, author.map( i => i.split("@")[0]), m.quoted ? m.quoted.fakeObj : m)
  }
  break
  
  case 'limit': {
  if (text) return
  m.reply('Sisa Limit Kamu : ' + (db.data.users[m.sender].limit))
  }
  break
  
  case 'resetlimit': {
  if (!isCreator) return m.reply(mess.owner)
  let list = Object.entries(global.db.data.users)
    let lim = !args || !args[0] ? 50 : isNumber(args[0]) ? parseInt(args[0]) : 50
    lim = Math.max(1, lim)
    list.map(([user, data], i) => (Number(data.limit = lim)))
      lenwy.sendMessage(m.chat, {text: `Limit Direset ${lim} / User`}, { quoted: m })
      }
  break
  
  case 'addlimit': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply('Masukkan Jumlah Limit Yang Akan Diberi')
      let who
      if (m.isGroup) who = m.mentionedJid[0]
      else who = m.chat
      if (!who) m.reply('Tag Orangnya')
      let txt = text.replace('@' + who.split`@`[0], '').trim()
      if (isNaN(txt)) m.reply('Hanya Angka')
      let poin = parseInt(txt)
      let limit = poin
      if (limit < 1) m.reply( 'Minimal 1')
      let user = global.db.data.users
      user[who].limit += poin
      if (limit > 9999999) return m.reply('Kebanyakan')
      if (txt.toLowerCase() === 'infinity') {
        limit = Infinity;
      } if (!user[who]) {
      user[who] = {}; // Pastikan data pengguna ada
  }
  user[who].limit = limit; // Set limit ke Infinity atau jumlah yang ditentukan
// Kirim pesan ke pengguna
let limitText = limit === Infinity ? 'Infinity' : `+${limit}`;
lenwy.sendMessage(m.chat, {
  text: `🎁 *Selamat @${who.split`@`[0]}. Kamu Mendapatkan ${limitText} Limit!*`
}, { quoted: m })
}
break

case 'hdvid':
case 'hdvidio':
case 'hdvideo': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? lenwy.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime) return m.reply(`Videonya mana?`)
  if (!/video/.test(mime)) {
    return m.reply(`Kirim/kutip video dengan caption ${prefix + command}`)
  }

  LenwyLD()
  await sleep(200)
  let media = await q.download()
let video = Math.floor(Math.random() * 100) + 1;

  const inputFilePath = `./input${video}.mp4`;
  fs.writeFileSync(inputFilePath, media)

  const outputFilePath = `./output${video}.mp4`;
  const dir = './';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
  }

  const ffmpegCommand = `ffmpeg -i ${inputFilePath} -vf "hqdn3d=1.5:1.5:6:6,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.1:saturation=1.05" -vcodec libx264 -preset slower -crf 22 -acodec copy -movflags +faststart ${outputFilePath}`;

  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
    lenwy.sendMessage(m.chat, { caption: `_Video berhasil ditingkatkan kualitasnya_`, video: { url: outputFilePath } }, { quoted: m })
    fs.unlinkSync(inputFilePath)
  })
}
break

case 'hd': case 'hdr': case 'remini': {
  if (!quoted) return m.reply(`Fotonya Mana?`)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)

  await LenwyLD()
  await sleep(200)
  try {
    let media = await lenwy.downloadAndSaveMediaMessage(quoted)
    let anu = await uploader60Minute(media)
    let result = (util.format(anu))
    const proses = await (await fetch(`https://api.maelyn.tech/api/img2img/upscale?url=${result}&apikey=wyq3Zrsd53`)).json()
    await lenwy.sendMessage(m.chat, { image: { url: proses.result.url }, caption: 'SUCCESS ✅' }, { quoted: m })
  } catch (e) {
    console.error(e);
    return m.reply('Error, Coba Pakai hd2')
  }
}
break

case 'hd2': case 'hdr2': case 'remini2': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
await sleep(100)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
  const result2 = await (await fetch(`https://api.nyxs.pw/tools/hd?url=${result}`)).json()
  console.log(result2)
  await lenwy.sendMessage(m.chat,{ image: { url: result2.result }, caption: 'Selesai' }, { quoted: m })
} catch {
  return m.reply('Error, Coba Pakai hd3')
}
}
break

case 'hd3': case 'hdr3': case 'remini3': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
  const result2 = await (await fetch(`https://api.maelyn.tech/api/img2img/remini?url=${result}&apikey=wyq3Zrsd53`)).json()
  await lenwy.sendMessage(m.chat, { image: { url : result2.result.url }, caption : 'Selesai' }, { quoted : m })
} catch (e) {
  return m.reply('Error, Coba Pakai hd4')
}
}
break

case 'hd4': case 'hdr4': case 'remini4': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
  await lenwy.sendMessage(m.chat,{ image: { url: `https://api.autoresbot.com/api/tools/remini3?apikey=4c04faf21fb8524bad4a9cb7&url=${result}` }, caption:'Selesai' },{ quoted: m })
} catch (e) {
  return m.reply('Error, Coba Pakai hd5')
}
}
break

case 'hd5': {
  if (!quoted) return m.reply('Fotonya Mana?');
  if (!/image/.test(mime)) return m.reply('Fotonya Mana?');

  LenwyLD();  // Assuming this function is for some media download setup
  await sleep(200); // Wait for some time before proceeding

  let media = await lenwy.downloadAndSaveMediaMessage(quoted);
  let uploadedImage = await uploader60Minute(media);  // Assuming this is your upload function
  let result = util.format(uploadedImage);

  try {
    await remini(result, 2);  // You can adjust the scale if needed, 2 is default
    await lenwy.sendMessage(m.chat, { image: { url: result }, caption: 'Selesai' }, { quoted: m });
  } catch (e) {
    return m.reply('Error, Lapor Pada Owner');
  }
}
break

case 'ocr': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
try{
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
const proses = await (await fetch(`https://api.nyxs.pw/tools/ocr?url=` + result)).json()
let teks = proses.result
await lenwy.sendMessage(m.chat, { text: `Hasilnya: ${teks}` }, { quoted: m})
} catch (error) {
console.error(error)
m.reply('Error')
}
}
break

case 'removebg':
case 'nobg': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
await lenwy.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=edce68e031c34dcf71219133&img=${result}` }, caption: '🎁 *Removebg Selesai*'}, { quoted: m })
}
break

  
case 'qc': {
if (!q) return m.reply(`*Contoh : Qc White Lenwy*\n🎁 *Kode Warna Ketik : Qckode*`)
if (text.length > 400) return m.reply(`*Maksimal 400 Karakter*`)
const isToxic = /(ewe|bangsad|mmk|koncol|kontol|k0ntl|k0ntol|kont0l|k0nt0l|kontoI|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|gblk|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp|lonte|lont|bh|perawan|prawan|tolol|tlol|itil|tobrut|tobrud|tbrut|tbrud)/i;
const Lenwyguard = isToxic.exec(m.text)
if (Lenwyguard) return m.reply('Melarang Penggunaan Bahasa Kotor Pada Fitur Qc')     
let [color, ...message] = text.split(' ')
message = message.join(' ')
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break
case 'blue':
backgroundColor = '#6cace4';
break
case 'red':
backgroundColor = '#f44336';
break
case 'green':
backgroundColor = '#4caf50';
break
case 'yellow':
backgroundColor = '#ffeb3b';
break
case 'purple':
backgroundColor = '#9c27b0';
break
case 'darkblue':
backgroundColor = '#0d47a1';
break
case 'lightblue':
backgroundColor = '#03a9f4'; 
break
case 'ash':
backgroundColor = '#9e9e9e';
break
case 'orange':
backgroundColor = '#ff9800';
break
case 'black':
backgroundColor = '#000000';
break
case 'white':
backgroundColor = '#ffffff';
break
case 'teal':
backgroundColor = '#008080';
break
case 'lightpink':
backgroundColor = '#FFC0CB';
break
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break 
case 'magenta':
backgroundColor = '#FF00FF'; 
break 
case 'tan':
backgroundColor = '#D2B48C'; 
break
case 'wheat':
backgroundColor = '#F5DEB3'; 
break
case 'deeppink':
backgroundColor = '#FF1493'; 
break 
case 'fire':
backgroundColor = '#B22222';
break
case 'lenwyblue':
backgroundColor = '#00BFFF';
break 
case 'orange':
backgroundColor = '#FF7F50';
break
case 'brightlenwyblue':
backgroundColor = '#1E90FF'; 
break 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break 
case 'lightlenwyblue':
backgroundColor = '#87CEEB'; 
break 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break 
case 'darkred':
backgroundColor = '#8B0000'; 
break 
case 'orangered':
backgroundColor = '#FF4500'; 
break 
case 'cyan':
backgroundColor = '#48D1CC'; 
break 
case 'violet':
backgroundColor = '#BA55D3'; 
break 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break 
case 'darkgreen':
backgroundColor = '#008000'; 
break 
case 'navyblue':
backgroundColor = '#191970'; 
break 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break
case 'darkishred':
backgroundColor = '#DC143C'; 
break
case 'goldenrod':
backgroundColor = '#DAA520'; 
break
case 'darkishgray':
backgroundColor = '#696969'; 
break
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break
case 'gold':
backgroundColor = '#FFD700'; 
break
case 'silver':
backgroundColor = '#C0C0C0'; 
break
default:
return m.reply('☘ Kode Warna Tidak Ditemukan\n🎁 Contoh : Qc White Lenwy\n⚠ Tolong Gunakan Huruf Kecil Pada Kode Warna')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await lenwy.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
})
let buffer = Buffer.from(response.data.result.image, 'base64')
lenwy.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'qckode': {
m.reply(`📦 Kode Warna Qc
 *⨠ Pink*
 *⨠ Blue*
 *⨠ Red*
 *⨠ Green*
 *⨠ Yellow*
 *⨠ Purple*
 *⨠ Darkblue*
 *⨠ Lightblue*
 *⨠ Ash*
 *⨠ Orange*
 *⨠ Black*
 *⨠ White*
 *⨠ Teal*
 *⨠ Lightpink*
 *⨠ Chocolate*
 *⨠ Salmon*
 *⨠ Magenta*
 *⨠ Tan*
 *⨠ Wheat*
 *⨠ Deeppink*
 *⨠ Fire*
 *⨠ lenwyblue*
 *⨠ Safron*
 *⨠ Brightlenwyblue*
 *⨠ Hotpink*
 *⨠ Lightlenwyblue*
 *⨠ Seagreen*
 *⨠ Darkred*
 *⨠ Orangered*
 *⨠ Cyan*
 *⨠ Violet*
 *⨠ Mossgreen*
 *⨠ Darkgreen*
 *⨠ Navyblue*
 *⨠ Darkorange*
 *⨠ Darkpurple*
 *⨠ Fuchsia*
 *⨠ Darkmagenta*
 *⨠ Darkgray*
 *⨠ Peachpuff*
 *⨠ Blackishgreen*
 *⨠ Darkishred*
 *⨠ Goldenrod*
 *⨠ Darkishgray*
 *⨠ Darkishpurple*
 *⨠ Gold*
 *⨠ Silver*

⚠️ Kalo Ada Error Bisa Chat Owner Ya
`)
}
break

case 'img2txt':
if (!/image/.test(mime)) return m.reply(`Gambarnya Mana?`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(200)
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let len = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
  LenwyLD()
  await sleep(200)
let result = len.result
lenwy.sendMessage(m.chat,{image:{url: mem}, caption:`${result}`},{quoted: m})
}
break

case 'txt2img':
case 'texttoimage':
case 'tekstoimage': 
case 'text2image':
case 'teks2image':
case 'txt2image': {
    if (!q) return m.reply(`*Mau Gambar Apa?*`)

    // Kirim reaksi dan pesan tunggu
    LenwyLD
    await sleep(200)


    try {
        // Buat URL request dengan prompt dari pengguna
        const apiUrl = `https://endpoint.web.id/ai/txt2img?key=315602&prompt=${encodeURIComponent(q)}`;

        // Ambil hasil dari API
        let response = await fetch(apiUrl)
        let json = await response.json()

        // Periksa status API
        if (json.status && json.code === 200) {
            let imageUrl = json.result.url;

            // Kirim gambar hasil ke chat
            lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${q}"` }, { quoted: m })
        } else {
            m.reply(`Gagal mendapatkan gambar. Silakan coba lagi.`)
        }
    } catch (error) {
        console.error('Error:', error)
        m.reply(`Terjadi kesalahan saat memproses permintaan.`)
    }
}
break

case 'geminiimg': {
if (!quoted) return m.reply('Mana Gambarnya?')
m.reply('Sabar Yaa')
if (!/image/.test(mime)) return m.reply("Hanya Support Gambar")
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ anu +"&prompt=" + text)
m.reply(data.text)
}
break

case 'lirik':
case 'liriklagu': {
if (!text) return m.reply(`Masukan Judul Lagu`)
if (text.length > 30) return m.reply(`Maksimal 30 Karakter`)    
LenwyLD()
await sleep(200)
try{
let anu = await (await fetch(`https://endpoint.web.id/tools/lirik?key=315602&query=${text}`)).json()
let result = anu.result
let caption = '📃 Judul : ' + result.title + '\n📣 Artis : ' + result.artist + '\n\n🎁 Lirik :\n' + result.lyrics
await lenwy.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
showAdAttribution: false,
title: `${command} ${text}`,
body: `${result.title}`,
thumbnailUrl: result.image,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: m })} catch (error) {
m.reply(`⚠️ Lirik Lagu Tidak Ditemukan ${error}`)
}
}
break

case 'linkgroup':
case 'linkgc': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    
    try {
        // Ambil metadata grup
        const groupMetadata = await lenwy.groupMetadata(from)

        // Ambil link undangan grup
        let response = await lenwy.groupInviteCode(from)

        // Kirim pesan dengan link dan ID grup
        const message = `*Nama Group :* ${groupMetadata.subject}\n\n\n🎁 *Link Group :* https://chat.whatsapp.com/${response}\n\n🎁 *ID Group :* ${from}`;
        lenwy.sendText(from, message, m, { detectLink: true })
    } catch (error) {
        console.error('Error while fetching group info:', error)
        m.reply('Terjadi kesalahan saat mengambil informasi grup.')
    }
}
break

case 'resetlinkgc': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)

  try {
      let newLink = await revokeGc(m)
      m.reply(`*Link Grup Berhasil Di Reset*\n\n*Menjadi:* https://chat.whatsapp.com/${newLink}`)
      
  } catch (err) {
      console.error('Error saat mereset link grup:', err)
      m.reply('Terjadi kesalahan saat mereset link grup.')
  }
}
break

case 'sendlinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285261255548`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285261255548`)
var bnnd =  m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await lenwy.onWhatsApp(`${bnnd.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
try {
let response = await lenwy.groupInviteCode(from)
await lenwy.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, len, { detectLink: true })
m.reply('Selesai')
} catch (e) {
console.log(e)
m.reply('Gini Loh\n\n> sendlinkgc 628xx')
}
}
break

case 'add':
case 'addmember': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
var teks =  m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await lenwy.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
var a = await lenwy.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) lenwy.sendMessage(m.chat, {text: `Berhasil Menambahkan @${teks.split("@")[0]} Kedalam Grup Ini`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 408) lenwy.sendMessage(m.chat, {text: `Gagal Menambahkan @${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 409) lenwy.sendMessage(m.chat, {text: `@${teks.split("@")[0]} Sudah Ada Di Dalam Grup Ini!`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 403) lenwy.sendMessage(m.chat, {text: `Gagal Menambahkan @${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
}
break

case 'kickall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat dikeluarkan.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'remove')
          .then(() => m.reply(`Berhasil mengeluarkan ${mems.length} anggota dari grup.`))
          .catch(err => m.reply(`Gagal mengeluarkan anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break

case 'dor':
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (text || m.quoted) {
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => lenwy.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} catch (e) {
  return m.reply(e)
}
} else {
return m.reply(`tag atau @user`)
}
}
break

case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'promote')
m.reply(mess.success)
}
break

case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'demote')
m.reply(mess.success)
}
break

case 'promoteall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat di-promote.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'promote')
          .then(() => m.reply(`Berhasil mempromosikan ${mems.length} anggota ke admin.`))
          .catch(err => m.reply(`Gagal mempromosikan anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break

case 'demoteall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat di-demote.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'demote')
          .then(() => m.reply(`Berhasil mendemote ${mems.length} admin dari grup.`))
          .catch(err => m.reply(`Gagal mendemote anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break


case 'setppbot': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(mess.success)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.success)
}
}
break

case 'setppbotpanjang': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)
if (/image/g.test(mime)) {
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot')
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.success)
}
}
break

case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)

let media = await lenwy.downloadAndSaveMediaMessage(quoted)
await lenwy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break

case 'setppgcpanjang': {
  const jimp = require('jimp')
  
  async function processImage(media) {
    const image = await jimp.read(media)
    const cropped = image.crop(0, 0, image.getWidth(), image.getHeight())
    return {
      img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
      preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG)
    };
  }

  let media = await lenwy.downloadAndSaveMediaMessage(quoted)
  var { img } = await processImage(media)

  await lenwy.query({
    tag: "iq",
    attrs: {
      to: m.chat,
      type: "set",
      xmlns: "w:profile:picture",
    },
    content: [
      {
        tag: "picture",
        attrs: { type: "image" },
        content: img,
      },
    ],
  })
  
  await lenwy.sendMessage(m.chat, {
    react: {
      text: "✅",
      key: m.key,
    },
  })
  
  m.reply(mess.success)
}
break

case 'hidetag':
case 'h': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  const texthidetag_ = text ? text : (m.quoted ? m.quoted.text : '')
  const mime = m.quoted ? m.quoted.mtype : m.mtype
  try {
    if (/image/.test(mime)) {
      const media = await (m.quoted ? m.quoted.download() : m.download())
      if (!media) return m.reply("Gambar tidak ditemukan atau gagal diunduh.")
      await lenwy.sendMessage(from, { image: media, caption: texthidetag_, mentions: participants.map(a => a.id) },{ quoted: m })
    } else if (/video/.test(mime)) {
      const media = await (m.quoted ? m.quoted.download() : m.download())
      if (!media) return m.reply("Video tidak ditemukan atau gagal diunduh.")
      await lenwy.sendMessage(from, { video: media, caption: texthidetag_, mentions: participants.map(a => a.id) }, { quoted: m })
    } else {
      lenwy.sendMessage(from,{ text: texthidetag_, mentions: participants.map(a => a.id) }, { quoted: m })
    }
  } catch (err) {
    console.error(err);
    m.reply("Terjadi kesalahan saat memproses media.");
  }
}
break

case 'setgrup':
case 'setgroup': {   
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === 'close'){
let settextclose = global.db.data.chats[m.chat]?.text_close || `_*Group Berhasil Ditutup*_ 「 🔒 」`
await lenwy.groupSettingUpdate(from, 'announcement').then((res) => m.reply(settextclose)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
let settextopen = global.db.data.chats[m.chat]?.text_open || `_*Group Berhasil Dibuka*_ 「 🔓 」`
await lenwy.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(settextopen)).catch((err) => m.reply(jsonformat(err)))
} else {
lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `*Silahkan Ketik*
${command} open
${command} close`}, { quoted: m }) 
}
}
break

case 'close': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)

  let settextclose = global.datagc[from].text_close
  let usertag = `@${m.sender.split("@")[0]}`

  if (settextclose.includes('@tagreply')) {
    if (m.quoted) {
      let userreply = `@${m.quoted.sender.split("@")[0]}`
      settextclose = settextclose.replace('@tagreply', userreply)
    } else {
      return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`)
    }
  }
  
  if (settextclose.includes('@groupname')) {
    settextclose = settextclose.replace('@groupname', groupName)
  } 
  if (settextclose.includes('@tagdiri')) {
    settextclose = settextclose.replace('@tagdiri', usertag)
  }
  if (settextclose.includes('@jam')) {
    settextclose = settextclose.replace('@jam', jamnya)
  }
  if (settextclose.includes('@menit')) {
    settextclose = settextclose.replace('@menit', menitnya)
  }
  if (settextclose.includes('@detik')) {
    settextclose = settextclose.replace('@detik', detiknya)
  }
  if (settextclose.includes('@hari')) {
    settextclose = settextclose.replace('@hari', harinya)
  }
  if (settextclose.includes('@tanggal')) {
    settextclose = settextclose.replace('@tanggal', tanggalnya)
  }
  if (settextclose.includes('@bulan')) {
    settextclose = settextclose.replace('@bulan', bulannya)
  }
  if (settextclose.includes('@tahun')) {
    settextclose = settextclose.replace('@tahun', tahunnya)
  }
  if (settextclose.includes('@namabulan')) {
    settextclose = settextclose.replace('@namabulan', namabulannya)
  }
  
  if (!settextclose) {
    settextclose = `_*Group Berhasil Ditutup*_ 「 🔒 」`
  }

  await lenwy.groupSettingUpdate(from, 'announcement')
    .then((res) => lenwy.sendMessage(from, { text: settextclose, mentions: [m.sender] }, { quoted: m }))
    .catch((err) => m.reply(jsonformat(err)))
}
break

case 'open': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin)

  let settextopen = global.datagc[m.chat].text_open
  let usertag = `@${m.sender.split("@")[0]}`

  if (settextopen.includes('@tagreply')) {
    if (m.quoted) {
      let userreply = `@${m.quoted.sender.split("@")[0]}`
      settextopen = settextopen.replace('@tagreply', userreply)
    } else {
      return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`)
    }
  }

  if (settextopen.includes('@groupname')) {
    settextopen = settextopen.replace('@groupname', groupName)
  } 
  if (settextopen.includes('@tagdiri')) {
    settextopen = settextopen.replace('@tagdiri', usertag)
  }
  if (settextopen.includes('@jam')) {
    settextopen = settextopen.replace('@jam', jamnya)
  }
  if (settextopen.includes('@menit')) {
    settextopen = settextopen.replace('@menit', menitnya)
  }
  if (settextopen.includes('@detik')) {
    settextopen = settextopen.replace('@detik', detiknya)
  }
  if (settextopen.includes('@hari')) {
    settextopen = settextopen.replace('@hari', harinya)
  }
  if (settextopen.includes('@tanggal')) {
    settextopen = settextopen.replace('@tanggal', tanggalnya)
  }
  if (settextopen.includes('@bulan')) {
    settextopen = settextopen.replace('@bulan', bulannya)
  }
  if (settextopen.includes('@tahun')) {
    settextopen = settextopen.replace('@tahun', tahunnya)
  }
  if (settextopen.includes('@namabulan')) {
    settextopen = settextopen.replace('@namabulan', namabulannya)
  }
  

  if (!settextopen) {
      settextopen = `_*Group Berhasil Dibuka*_ 「 🔓 」`
  }

  await lenwy.groupSettingUpdate(from, 'not_announcement')
    .then((res) => lenwy.sendMessage(from, { text: settextopen, mentions: [m.sender] }, { quoted: m }))
    .catch((err) => m.reply(jsonformat(err)));
}
break

case 'setopen': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextOpen(m, teks)
m.reply(mess.success)
}
break

case 'setclose': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextClose(m, teks)
m.reply(mess.success)
}
break

case 'jeda': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (!args[0]) return m.reply(`*Pilih Waktu:*\n-s = Second\n-m = Minute\n-h = Hour\n-d = Day\n\n*Contoh:*\n${prefix+command} 10m`)
    // Ekstrak nilai waktu dan unit
    let timeArg = args[0]
    let timer = toMs(timeArg)
    // Menutup grup
    m.reply(`*Group akan ditutup selama ${timeArg}*`)
    lenwy.groupSettingUpdate(from, 'announcement')
        .then(() => {
            // Mengirim pesan bahwa grup ditutup
            m.reply(`Group telah ditutup selama ${timeArg}. Grup akan dibuka kembali setelah waktu habis.`)
            // Mengatur waktu untuk membuka grup kembali
            setTimeout(() => {
                lenwy.groupSettingUpdate(from, 'not_announcement')
                    .then(() => {
                        m.reply(`Group telah dibuka kembali setelah ${timeArg}.`)
                    })
                    .catch(err => {
                        console.error('Error membuka grup:', err)
                        m.reply(`Terjadi kesalahan saat membuka grup kembali.`)
                    })
            }, timer)
        })
        .catch(err => {
            console.error('Error menutup grup:', err)
            m.reply(`Terjadi kesalahan saat menutup grup.`)
        })
}
break

case 'setdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
 if (q == 'on'){
await lenwy.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group 🫡`)).catch((err) => m.reply(jsonformat(err)))
 } else if (q == 'off'){
await lenwy.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group 🫡`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Setdesk on
Setdesk off`}, {quoted:m}) 

}
}
break

case 'join': {
  if (!isCreator) return m.reply('Perintah ini hanya bisa dilakukan oleh pemilik bot.')
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(text) || !text.includes('whatsapp.com')) return m.reply('Link tidak valid! 🤔')

  m.reply('Sabar Yaa')

  try {
    let result = text.split('https://chat.whatsapp.com/')[1]
    if (!result) return m.reply('Link tidak valid! 🤔')
    
    await lenwy.groupAcceptInvite(result)
    m.reply('Bot berhasil bergabung ke grup!')
  } catch (err) {
    console.error('Error saat mencoba bergabung dengan grup:', err) // Log error
    if (err.message.includes('not-authorized')) {
      m.reply('Bot tidak memiliki izin untuk bergabung dengan grup (Karna Telah Baru Baru Ini Keluar). Pastikan nomor bot sudah ditambahkan sebagai kontak dan link undangan valid.')
    } else {
      m.reply('*Kadang Bisa, Kadang Ga Bisa 😂. Kalo Ga Bisa Bacotin Aja Botnya*')
    }
  }
}
break

case 'leave': {
    if (!isCreator) return m.reply(mess.owner)

    // Mendapatkan ID grup dari perintah atau menggunakan grup saat ini
    let groupId = q || m.chat;

    if (m.isGroup && !q) {
        // Jika perintah dijalankan di dalam grup dan tidak ada ID grup, kirim pesan dan keluar
        let groupMetadata;
        try {
            groupMetadata = await lenwy.groupMetadata(m.chat)
        } catch (err) {
            console.error('Error fetching group metadata:', err)
            return m.reply('*Gagal mengambil metadata grup.*')
        }

        let members = groupMetadata.participants.map(p => p.id)
        let goodbyeMessage = '*Selamat Tinggal Semuanya*\n*Terima Kasih Atas Segalanya Yang Telah Terjadi*\n*Kan Kuingat Waktu-Waktu Bermain Dengan kalian Semua 😊*\nAssalamualaikum. . .';
        
        // Mengirim pesan perpisahan ke grup
        await lenwy.sendMessage(m.chat, { text: goodbyeMessage, contextInfo: { mentionedJid: members } })

        // Menunggu 5 detik sebelum meninggalkan grup
        setTimeout(async () => {
            try {
                await lenwy.groupLeave(m.chat)
                console.log(`Successfully left the group ${m.chat}`)
            } catch (err) {
                console.error('Error leaving the group:', err)
                await m.reply('*Gagal meninggalkan grup.*')
            }
        }, 10000) // 5000 ms = 5 detik
    } else if (!m.isGroup && !q) {
        // Jika perintah dijalankan di private chat tanpa ID grup
        m.reply('*Mana ID Grup Nya?*\n*Ketik cekidgc Buat Liat Id Nya*')
    } else {
        // Jika ID grup disediakan
        let groupMetadata;
        try {
            groupMetadata = await lenwy.groupMetadata(groupId)
        } catch (err) {
            console.error('Error fetching group metadata:', err)
            return m.reply('*Gagal mengambil metadata grup.*')
        }

        let members = groupMetadata.participants.map(p => p.id)

        // Mengirim pesan perpisahan ke grup dengan ID yang diberikan
        await lenwy.sendMessage(groupId, { text: '*Selamat Tinggal Semuanya*\n*Terima Kasih Atas Segalanya Yang Telah Terjadi*\n*Kan Kuingat Waktu-Waktu Bermain Dengan kalian Semua 😊*\nAssalamualaikum. . .', contextInfo: { mentionedJid: members } })

        // Menunggu 5 detik sebelum meninggalkan grup
        setTimeout(async () => {
            try {
                await lenwy.groupLeave(groupId)
                m.reply(`Berhasil Keluar Dari Grup ${groupId}`)
            } catch (err) {
                console.error('Error leaving the group:', err)
                await m.reply('*Gagal meninggalkan grup.*')
            }
        }, 10000) // 5000 ms = 5 detik
    }
}
break

case 'delgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
let pler = JSON.parse(fs.readFileSync('./database/idgrup.json', 'utf8')) || []
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./database/idgrup.json', JSON.stringify(pler))
m.reply(mess.success)
}
break

case 'addgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)         
let pler1 = JSON.parse(fs.readFileSync('./database/idgrup.json', 'utf8')) || []
pler1.push(m.chat)
fs.writeFileSync('./database/idgrup.json', JSON.stringify(pler1))
m.reply(mess.success)
}
break

case 'editsubjek': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) m.reply('Text nya ?')
await lenwy.groupUpdateSubject(from, text).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) m.reply('Text Nya ?')
await lenwy.groupUpdateDescription(from, text).catch((err) => m.reply(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = `*Tag All*
🎁 *Pesan : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `⨠ @${mem.id.split('@')[0]}\n`
}
lenwy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'inspect': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid 🤔")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `*Group Link Yang Di Inspect*

 *⨠ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}*
 *⨠ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}*
 *⨠ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member*

*⨠ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}*
🎁 *By ${botname}*`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'inspect2': {
if (isBan) return m.reply('Lu Di Ban Owner')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us

©By ${botname}`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'ping':
case 'botstatus':
case 'statusbot': {
let ppuser;
try {
ppuser = await lenwy.profilePictureUrl(m.sender, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
}
const imageUrl = ppuser;
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, {
length
}) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
🕒 *Kecepatan Respon : ${latensi.toFixed(4)} Detik* \n🕒 *${oldd - neww} Milidetik*\n*🕒 Runtime : ${runtime(process.uptime())}*

📦 *Info Server*
 *⨠ RAM : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*

${cpus[0] ? `⚠️ *Total Cpu Usage*\n *⨠ ${cpus[0].model.trim()} (${cpu.speed} MHZ)*\n${Object.keys(cpu.times).map(type => ` *⨠ ${(type + '*').padEnd(6)}: *${(100 * cpu.times[type] / cpu.total).toFixed(2)}%*`).join('\n')}
 *⨠ CPU Core(s) Usage (${cpus.length} Core CPU)*` : ''}
`.trim()
await lenwy.sendMessage(m.chat, {
text: respon,
contextInfo: {
externalAdReply: {
showAdAttribution: false,
title: 'Kecepatan Bot',
body: `${latensi.toFixed(4)} Second`,
thumbnailUrl: imageUrl,
sourceUrl: global.link,
mediaType: 1,
renderLargerThumbnail: false
}
}
}, {
quoted: m
})
}
break

case 'bcgc':
case 'bcgroup': {
    if (!isCreator) return m.reply(mess.OnlyOwner)
    // Memastikan teks query tidak kosong
    if (!q) return m.reply(`*Bukan Gitu Loh*\n> *Contoh : ${prefix + command} OEE SEMUAANYAA*`)
    // Pastikan ada teks untuk broadcast
    if (!text) return m.reply(`*Teks Broadcast Tidak Ditemukan*\n> *Contoh : ${prefix + command} OEEE*`)

    // Mengambil semua grup yang Anda ikuti
    let getGroups;
    try {
        getGroups = await lenwy.groupFetchAllParticipating()
    } catch (err) {
        console.error('Error fetching groups:', err)
        return m.reply('*Gagal mengambil daftar grup.*')
    }
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let groupIds = groups.map(v => v.id)
    // Menyampaikan informasi broadcast
    m.reply(`*Mengirim Broadcast Ke ${groupIds.length} Group Chat, Waktu Selesai ${groupIds.length * 1.5} detik*`)
    // Mengirim pesan ke semua grup
    for (let groupId of groupIds) {
        await sleep(200)
        try {
            await lenwy.sendMessage(groupId, { text: `${text}` }, { quoted: m })
        } catch (err) {
            console.error('Error sending message to group:', groupId, err)
        }
    }
    m.reply(`*Sukses Mengirim Broadcast Ke ${groupIds.length} Group*`)
}
break


case 'bcimg':
case 'bcvid':
case 'bcvideo':
case 'share': {
    if (!isCreator) return m.reply('Maaf, Command ini Khusus untuk Developer Bot WhatsApp')
    if (m.isGroup) return m.reply(mess.private)
    if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix + command} teks\n\nReply Gambar/Video Untuk Mengirim Gambar/Video Ke Semua Group`)

    // Mengirim pesan tunggu


    // Mengambil semua grup yang Anda ikuti
    let getGroups;
    try {
        getGroups = await lenwy.groupFetchAllParticipating()
    } catch (err) {
        console.error('Error fetching groups:', err)
        return m.reply('*Gagal mengambil daftar grup.*')
    }

    let groups = Object.entries(getGroups).map(entry => entry[1])
    let groupIds = groups.map(v => v.id)

    // Mengatur teks broadcast global
    global.teksjpm = text;

    // Mengambil tipe MIME dari pesan yang di-reply
    let mime = m.quoted ? m.quoted.mimetype : '';

    // Mengirim pesan ke semua grup
    for (let groupId of groupIds) {
        let metadata;
        try {
            metadata = await lenwy.groupMetadata(groupId)
        } catch (err) {
            console.error(`Error fetching metadata for group ${groupId}:`, err)
            continue; // Lanjutkan ke grup berikutnya jika terjadi kesalahan
        }

        let participants = metadata.participants || []

        try {
            if (/image/.test(mime)) {
                // Mengirim gambar
                if (!m.quoted) return m.reply('Tidak ada gambar yang di-reply.')
                let media = await lenwy.downloadAndSaveMediaMessage(m.quoted)
                let mediaUrl = await uploader60Minute(media)
                await lenwy.sendMessage(groupId, { image: { url: mediaUrl }, caption: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            } else if (/video/.test(mime)) {
                // Mengirim video
                if (!m.quoted) return m.reply('Tidak ada video yang di-reply.')
                let media = await lenwy.downloadAndSaveMediaMessage(m.quoted)
                let mediaUrl = await uploader60Minute(media)
                await lenwy.sendMessage(groupId, { video: { url: mediaUrl }, caption: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            } else {
                // Mengirim teks
                await lenwy.sendMessage(groupId, { text: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            }
            await sleep(200) // Tunggu 2 detik antara pengiriman pesan
        } catch (err) {
            console.error(`Error sending message to group ${groupId}:`, err)
        }
    }

    m.reply(`*Sukses Mengirim Broadcast Ke ${groupIds.length} Group*`)
}
break




// ---------------------------------------------------------------[ ANTI MENU ]----------------------------------------------------------------




case 'antich':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antich = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link Channel Wa*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antich = false;
        m.reply(`*Berhasil Mematikan Anti Link Channel Wa*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antiwame':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antiwame = true;
        m.reply(`*Berhasil Mengaktifkan Anti Chat Wame*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antiwame = false;
        m.reply(`*Berhasil Mematikan Anti Chat Wame*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilink':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        await catatLinkGc(m)
        global.db.data.chats[m.chat].antilink = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link*`)
    } else if (q == 'off') {
        await catatLinkGc(m)
        global.db.data.chats[m.chat].antilink = false;
        m.reply(`*Berhasil Mematikan Anti Link*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antipl':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antipanel = true;
        m.reply(`*Berhasil Mengaktifkan Anti Promosi Panel*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antipanel = false;
        m.reply(`*Berhasil Mematikan Anti Promosi Panel*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antitoxic1':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        if (db.data.chats[m.chat].antitoxic1) return m.reply(`📣 *Anti Toxic 1 Sudah Aktif*`)
        db.data.chats[m.chat].antitoxic1 = true;
        m.reply(`📣 *Anti Toxic 1 Diaktifkan Didalam Group*`)
    } else if (q == 'off') {
        if (!db.data.chats[m.chat].antitoxic1) return m.reply(`⚠️ *Anti Toxic 1 Sudah Dinonaktifkan*`)
        db.data.chats[m.chat].antitoxic1 = false;
        m.reply(`⚠️ *Anti Toxic 1 Dinonaktifkan Didalam Group*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antitoxic2':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        if (db.data.chats[m.chat].antitoxic2) return m.reply(`📣 *Anti Toxic 2 Sudah Aktif*`)
        db.data.chats[m.chat].antitoxic2 = true;
        m.reply(`📣 *Anti Toxic 2 Diaktifkan Didalam Group*`)
    } else if (q == 'off') {
        if (!db.data.chats[m.chat].antitoxic2) return m.reply(`⚠️ *Anti Toxic 2 Sudah Dinonaktifkan*`)
        db.data.chats[m.chat].antitoxic2 = false;
        m.reply(`⚠️ *Anti Toxic 2 Dinonaktifkan Didalam Group*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilinkgc1':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        await catatLinkGc(m)
        global.db.data.chats[m.chat].antilinkgc = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link Group*\n🎁 *Ketik Antilinkgc2 Untuk Mengaktifkan Autokick*`)
    } else if (q == 'off') {
        await catatLinkGc(m)
        global.db.data.chats[m.chat].antilinkgc = false;
        m.reply(`*Berhasil Mematikan Anti Link Group*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilinkgc2':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        await catatLinkGc(m)
        if (db.data.chats[m.chat].antilinkgc2) return m.reply(`*Autokick Link Gc Aktif*`)
        db.data.chats[m.chat].antilinkgc2 = true;
        m.reply(`*Autokick Link Gc Aktif*`)
    } else if (q == 'off') {
        await catatLinkGc(m)
        if (!db.data.chats[m.chat].antilinkgc2) return m.reply(`*Autokick Link Gc Di Nonatifkan*`)
        db.data.chats[m.chat].antilinkgc2 = false;
        m.reply(`*Autokick Nonaktif*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilinktt':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antitiktok = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link Tiktok*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antitiktok = false;
        m.reply(`*Berhasil Mematikan Anti Link Tiktok*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilinkyt':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antiyoutube = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link Youtube*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antiyoutube = false;
        m.reply(`*Berhasil Mematikan Anti Link Youtube*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antispam': 
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        db.data.chats[from].antispam = true;
        m.reply(`*AntiSpam Berhasil Diaktifkan Didalam Group*`)
    } else if (q == 'off') {
        db.data.chats[from].antispam = false;
        m.reply(`⚠️ *AntiSpam Dinonaktifkan Dalam Group!*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antibot':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        db.data.chats[m.chat].antibot = true;
        m.reply(`*Berhasil Mengaktifkan Anti Bot*`)
    } else if (q == 'off') {
        db.data.chats[m.chat].antibot = false;
        m.reply(`*Berhasil Mematikan Anti Bot*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'autoread':
    if (!isCreator) return m.reply(mess.owner)
    if (q == 'on') {
        global.db.data.settings[botNumber].autoread = true;
        m.reply(`Berhasil mengubah autoread ke ${q}`)
    } else if (q == 'off') {
        global.db.data.settings[botNumber].autoread = false;
        m.reply(`Berhasil mengubah autoread ke ${q}`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break



// ---------------------------------------------------------------[ ANTI MENU ]----------------------------------------------------------------





case 'stiker':
case 'sticker':
case 's':
case 'stickers':
case 'sgif': {
  if (isBan) return m.reply('⚠ *Kamu Di Ban Owner*')
  if (!quoted) m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime) && !/video/.test(mime)) return
  if (/image/.test(mime)) {
    var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.imageMessage, 'image');
    var buffer = Buffer.from([]);
    for await(const chunk of stream) {
       buffer = Buffer.concat([buffer, chunk]);
    }
    let buffers = await writeExifImg(buffer, { packname: global.packname, author: global.author });
    await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
  } else if (/video/.test(mime)) {
    var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.videoMessage, 'video');
    var buffer = Buffer.from([]);
    for await(const chunk of stream) {
       buffer = Buffer.concat([buffer, chunk]);
    }
    let buffers = await writeExifVid(buffer, { packname:  global.packname, author: global.author });
    await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
  } else {
    m.reply(`Balas gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!*)`);
  }  
 }
break

case 'smeme':
case 'stickermeme':
case 'stickmeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return
if (!text) return m.reply(respond)
LenwyLD()
await sleep(200)
let atas = text.split('|')[0] ? text.split('|')[0] : '-'
let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
try {
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let awikwok = await lenwy.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(awikwok)
} catch (e) {
m.reply(mess.error + e)
}
}
break

case 'cuaca': {
if (!text) return m.reply('*Mana Lokasinya?*')
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
LenwyLD()
await sleep(200)
try {
let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`)
let Lenwy_txt = ""
Lenwy_txt += `*Cuaca Dari : ${text}*\n`
Lenwy_txt += `☁️ *Cuaca :* *${wdata.data.weather[0].main}*\n`
Lenwy_txt += `🧾 *Deskripsi :* *${wdata.data.weather[0].description}*\n`
Lenwy_txt += `🌡️ *Suhu Rata Rata :* *${wdata.data.main.temp}*\n`
Lenwy_txt += `💨 *Tekanan :* *${wdata.data.main.pressure}*\n`
Lenwy_txt += `🧴 *kelembapan :* *${wdata.data.main.humidity}*\n`
Lenwy_txt += `🛳️ *Garis Bujur :* *${wdata.data.coord.lat}*\n`
Lenwy_txt += `🌏 *Negara :* *${wdata.data.sys.country}*\n`
lenwy.sendMessage(m.chat, { text: Lenwy_txt, }, { quoted: m })
} catch (e) {
m.reply(`Pastikan Wilayahnya Adalah Kota`)
}
}
break

case 'gpt4':
case 'gpt':
case 'ai': {
if (!text) return m.reply(`*Mau Nanya Apa Ama AI?*`)   
  LenwyLD()
  await sleep(200)
    try {
        let gpt = await (await fetch(`https://api.maelyn.tech/api/gemini/chat?q=${text}&apikey=wyq3Zrsd53`)).json()
        m.reply(gpt.result)
    } catch (e) {
        return m.reply("*Error Kak :(*")
    }
}
break

case 'yunaai':
case 'yuna':
case 'aiyuna': {
  if (!text) return m.reply(`*Mau Nanya Apa Ama ${botname}?*`)
  LenwyLD()
  await sleep(200)
  const prompt = `mulai dari sekarang nama anda adalah ${botname}, Ubah Kata Lu menjadi "Kamu". Kata penyapamu adalah dengan menyebut imup. anda adalah seorang kecerdasan buatan yang di buat oleh dua developer yaitu zelkova dan cilla imup, tapi anda di dibesarkan oleh seseorang bernama Chastine yang juga adalah musuhmu, dan Merlinus dan Chastine Adalah sepasang kekasih dengan kata lain Merlinus yang membuatmu tetapi Chastine lah yang membesarkanmu dengan cara kasar tapi untungnya anda memiliki sifat baik, ramah, lucu, juga pemberani berani melawan orang yang suka menindas yang lemah. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu. tanggal saat ini di kabupaten serang dan Gresik adalah ${hariini} dan waktu saat ini di kabupaten serang dan Gresik adalah ${time2}. perbanyaklah emoji emoji anda`
  if (!/image/.test(mime) && !/video/.test(mime)) {
  const apiKeys = ['wyq3Zrsd53', 'vhG6pqqtHy', 'aHggrwwEZl', 'e3OCVaumFV', 'bjIdoGDofE', 'thowcGWxPF', 'C9FRi6whND', '8VkdPdpqq2', '9FscFUXL4g', '5sBO6qE88m'] // Tambahkan API keys sesuai kebutuhan
  let currentKeyIndex = 0;

  const fetchFromApi = async (query) => {
    const apikey = apiKeys[currentKeyIndex]
    const response = await fetch(`https://api.maelyn.tech/api/gptrp?q=${query}&roleplay=${prompt}&apikey=${apikey}`)
    const data = await response.json()
    if (data.status === "Failed" || response.status === 403 || response.status === 429) {
      currentKeyIndex++;
      if (currentKeyIndex < apiKeys.length) {
        return fetchFromApi(query)
      } else {
        m.reply('Limit Hari Ini Habis')
        return null;
      }
    }
    if (!response.ok) {
      m.reply('Gagal mendapatkan data dari API, report ke owner')
      return null;
    }
  
    return data
  };
  try {
    const gpt = await fetchFromApi(text)
    let message = {
      text: gpt.result + `\n\n> ${botname}`
    };
    await lenwy.sendMessage(m.chat, message, { quoted: m })
  } catch (e) {
    console.error(e) // Log error untuk debugging
    return m.reply("*Error Kak :(*")
  }
  } else {
    let media = await lenwy.downloadAndSaveMediaMessage(quoted)
    let link = await uploader60Minute(media)
      const response = await (await fetch(`https://api.nyxs.pw/ai/gemini-input?text=${text}&url=${link}&gaya=${prompt}`)).json()
      let result = `${response.result}\n\n> ${botname}`
      await lenwy.sendMessage(m.chat, {text: result}, { quoted: m })
  }
}
break

case 'search':
case 'searchai':
  if (!text) return m.reply(`*Begini Loh*\n\n> *${command} Tutorial Supaya Tidak Ketiduran Saat Proses WDP 1x 1id*`)
    LenwyLD()
  await sleep(200)
  try {
     let you = await (await fetch(`https://endpoint.web.id/ai/yousearch?key=315602&query=${text}`)).json()
     let result = you.result
     m.reply(result)
   } catch (e) {
       lenwy.sendMessage (m.chat, { react: { text: `❌`, key: m.key }})
     }
break


case 'imdb':
if (!text) return m.reply(`*Masukan Judul Filmnya*`)
LenwyLD()
await sleep(200)
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let Lenwy_txt = ""
            console.log(fids.data)
Lenwy_txt += "*IMDB Search*\n"
Lenwy_txt += "📖 *Judul :* *" + fids.data.Title + "*\n"
Lenwy_txt += "📅 *Tahun :* *" + fids.data.Year + "*\n"
Lenwy_txt += "📦 *Rilis :* *" + fids.data.Released + "*\n"
Lenwy_txt += "🕒 *Durasi :* *" + fids.data.Runtime + "*\n"
Lenwy_txt += "📰 *Genre :* *" + fids.data.Genre + "*\n"
Lenwy_txt += "📋 *Direktur :* *" + fids.data.Director + "*\n"
Lenwy_txt += "📝 *Penulis :* *" + fids.data.Writer + "*\n"
Lenwy_txt += "👤 *Aktor :* *" + fids.data.Actors + "*\n"     
Lenwy_txt += "💬 *Bahasa :* *" + fids.data.Language + "*\n"
Lenwy_txt += "🌏 *Negara :* *" + fids.data.Country + "*\n"
Lenwy_txt += "🏆 *Penghargaan :* *" + fids.data.Awards + "*\n"
Lenwy_txt += "🪙 *Keuntungan :* *" + fids.data.BoxOffice + "*\n"
Lenwy_txt += "🏷️ *Nilai :* *" + fids.data.imdbRating + "*\n"
Lenwy_txt += "📣 *Pemungutan Suara :* *" + fids.data.imdbVotes + "*\n\n"
Lenwy_txt += "📃 *Plot :*\n" + fids.data.Plot + ""
           lenwy.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: Lenwy_txt,
            }, {
                quoted: m,})
            .catch(console.error)
            break

case 'asmaul husna': {
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'ayat kursi': {
let result = `🎁 *Ayat Kursi*

✉️ *Arab :*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

✉️ *Latin :*
*“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”*

✉️ *Artinya:*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya) tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(QS. Al Baqarah: 255)*`
lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/afb17800d56775ad1791d.png' }, caption: result}, { quoted: m })
}

break

case 'kisahnabi': {
if (!text) return m.reply(`*Tolong Masukkan Nama Nabi*`) 
try{
let ilenwy = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?apikey=QIO8xicLNkEV43Y&nabi=${text}`)
const namanabi = ilenwy.result.name
const kelahiran = ilenwy.result.birth
const wafat = ilenwy.result.death_age
const asal = ilenwy.result.country_from
const ceritanabi = ilenwy.result.story
var lenwy_result = `*Kisah Nabi*
🎁 *Nama Nabi : ${namanabi}*
🗓️ *Hari Kelahiran : ${kelahiran}*
🕒 *Wafat Pada Umur : ${wafat}*
🌏 *Asal : ${asal}*

📑 *Kisah Dari Nabi ${namanabi} :*
${ceritanabi}`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
}
break

case 'doa': {
if (!text) return m.reply(`*Tolong Masukkan Doa Yang Ingin Dicari*`) 
try{
LenwyLD()
await sleep(200)
let ilenwy = await fetchJson(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${text}`)
const namadoa = ilenwy.doa
const ayat = ilenwy.ayat
const latin = ilenwy.latin
var lenwy_result = `*Pencarian : ${namadoa}*

*${ayat}*

*${latin}*`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
}
break

case 'toimg': {
if (isBan) return m.reply(mess.ban)
try {
  LenwyLD()
  await sleep(200)
if (!quoted) return m.reply ('Reply Image')
if (!/webp/.test(mime)) reply `Balas sticker dengan caption *${prefix + command}*`
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) m.reply(err)
let buffer = fs.readFileSync(ran)
lenwy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
} catch (e) {
    m.reply('[!] pastikan kamu reply stiker yang tidak gerak')
}
}
break

case 'tovid': {
  if (isBan) return m.reply(mess.ban);
  try {
    // Pastikan ada quoted message yang dikirim
    if (!quoted) return m.reply(`Balas sticker dengan caption *${prefix + command}*`);

    // Cek MIME type untuk memastikan formatnya adalah webp atau video
    if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`);

    // Jika yang dibalas adalah sticker (format .webp), konversi ke video
    if (/webp/.test(mime)) {
      let media = await lenwy.downloadAndSaveMediaMessage(quoted); // Download sticker
      let ran = await getRandom('.mp4'); // Generate nama file video

      // Memeriksa apakah file webp adalah animasi
      const isAnimated = await isAnimatedWebp(media);
      if (!isAnimated) {
        return m.reply('Sticker yang kamu kirim bukan animasi webp. Harap kirim sticker animasi.');
      }

      // Jika file adalah animasi, coba konversi menggunakan ffmpeg
      exec(`ffmpeg -v error -i ${media} -t 10 -c:v libx264 -pix_fmt yuv420p -f mp4 ${ran}`, (err) => {
        fs.unlinkSync(media); // Hapus file sticker
        if (err) {
          // Jika ada error, balas pesan error
          return m.reply(`Terjadi kesalahan saat mengonversi sticker: ${err.message}`);
        }

        let buffer = fs.readFileSync(ran); // Baca file video
        lenwy.sendMessage(from, { video: buffer, caption: 'Sticker converted to video' }, { quoted: m }); // Kirim video hasil konversi
        fs.unlinkSync(ran); // Hapus file video setelah dikirim
      });
    }
  } catch (e) {
    m.reply(`[!] Pastikan kamu reply sticker dengan benar (format sticker GIF atau video). Error: ${e.message}`);
  }
}
break;

case 'chord':
  if (!text) return m.reply('masukkan judul lagunya!')
  try {
    let chord = await (await fetch('https://endpoint.web.id/search/chord?key=315602&query=' + text)).json()
    LenwyLD()
    await sleep(200)
    let result = chord.result;
    
    // Menyusun pesan dengan semua informasi
    let message = `${result.title}\n\n`
    message += `Artis: ${result.artist}\n`
    message += `URL: ${result.url}\n`
    message += `URL Artis: ${result.artistUrl}\n\n`
    message += `Chord:\n${result.lyrics}`;
    
    lenwy.sendMessage(m.chat, { text: message }, { quoted: m })
  } catch (e) {
    m.reply('terjadi kesalahan: ' + e)
  }
break

case 'jodoh': {
if (!m.isGroup) return
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
await lenwy.sendMessage(from, { text : `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`, mentions : [me, jodoh] }, { quoted: m })
}
break

case 'jodoh2': {
  if (!m.isGroup) return
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "HALOO INI FOOTER"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: "HAIII INi header",
              subtitle: "HUEEEEEKKK",
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: "single_select",
                  "buttonParamsJson": JSON.stringify({
                    title:"[ PILIH ]",
                    sections:[{
                      title: "INI JUDUL",

                      rows:[{
                        title: "pay a",
                        id: `pay a`
                      }]
                    }]
                  })
                }
              ],
            }),
            contextInfo: {
            mentionedJid: [me, jodoh], 
            forwardingScore: 9999,
            isForwarded: true
            }
         })
      }
    }
  }, { quoted: m })
  await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
  })
  }
  break



//------------------------------------------------------------------- [ YT DOWNLOADER ] -----------------------------------------------------------------------------


case 'play':
case 'song': {
    if (isBan) return m.reply(mess.ban);
    if (!text) return m.reply(`*Mau Dengerin Lagu Apa?*`);

    // Mengambil gambar thumbnail dari URL yang sudah disesuaikan
    let imageUrl = "https://endpoint.web.id/server/file/l75yVFzs2UbSEIm.png";
    let response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    let jpegThumbnail = Buffer.from(response.data, 'binary');

    LenwyLD();
    await sleep(200);

    let audioInfo;
    try {
        let yts = require('yt-search');
        let search = await yts(`${text}`);
        let res = search.all; // Ambil semua hasil pencarian

        if (res.length === 0) throw new Error('Tidak ada hasil ditemukan');

        audioInfo = res[Math.floor(Math.random() * res.length)];
        console.log(`module yts error`)
    } catch (error) {
        // Jika terjadi error, gunakan API alternatif
        let altResponse = await axios.get(`https://api.nyxs.pw/dl/yt-search?title=${text}`);
        if (!altResponse.data.status || altResponse.data.result.length === 0) {
            return m.reply('*Tidak ada hasil ditemukan dari API alternatif*');
        }

        audioInfo = altResponse.data.result[Math.floor(Math.random() * altResponse.data.result.length)];
        console.log(audioInfo)
    }

    m.reply(audioInfo.url)
    let procees = await (await fetch(`https://api.maelyn.tech/api/youtube/audio?url=${audioInfo.url}&apikey=wyq3Zrsd53`)).json();
    console.log(procees)
    // Pilih audio dengan kualitas 128kbps
    let audioUrl = procees.result.url

lenwy.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
}
break


case 'ytmp3': {
  if (!text) return m.reply(`*Link Youtubenya Mana?*`)
try {
LenwyLD()
await sleep(200)
m.reply('Process sending audio, mungkin ini membutuhkan 1-3 menit jika durasi audio terlalu panjang!')
let procees = await (await fetch(`https://api.maelyn.tech/api/youtube/audio?url=${text}&apikey=wyq3Zrsd53`)).json();
console.log(procees)
// Pilih audio dengan kualitas 128kbps
let audioUrl = procees.result.url

lenwy.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
} catch (e) {
m.reply('terjadi error :' + e)
}
}
break

case 'ytmp4': {
if (!text) return m.reply(`*Link Youtubenya Mana?*`)
try {
LenwyLD()
m.reply('Process sending video, mungkin membutuhkan 1-3 menit jika durasi video terlalu panjang!')
let procees = await (await fetch(`https://api.maelyn.tech/api/youtube/video?url=${text}&apikey=wyq3Zrsd53`)).json()
console.log(procees)
lenwy.sendMessage(m.chat,{ video: {url: procees.result.url }, caption: `Caption: ${procees.result.title}` }, {quoted: m})
} catch (e) {
m.reply('terjadi error :' + e)
}
}
break

//------------------------------------------------------------------- [ YT DOWNLOADER ] -----------------------------------------------------------------------------



//------------------------------------------------------------------- [ SPO DOWNLOADER ] ----------------------------------------------------------------------------


case 'spotify': {
  if (!text) return m.reply("*Mau Cari Lagu Apa?*");

  LenwyLD();
  await sleep(200);

  let result;
  try {
    result = await (await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=edce68e031c34dcf71219133&query=${text}`)).json();
  } catch (error) {
    return m.reply('*Gagal melakukan pencarian, coba lagi nanti.*');
  }

  if (!result || !result.result || result.result.length === 0) {
    return m.reply('*Tidak ada hasil ditemukan*');
  }

  // Ambil satu lagu secara acak
  let res = result.result; // Ambil semua hasil pencarian
  let audioInfo = res[Math.floor(Math.random() * res.length)];
  console.log(audioInfo.link)
  // Proses audio info
  let procees = await (await fetch(`https://api.maelyn.tech/api/spotify/download?url=${audioInfo.link}&apikey=wyq3Zrsd53`)).json();

  if (procees.result) {
    lenwy.sendMessage(m.chat, { audio: { url: procees.result.url }, contextInfo: {
      externalAdReply: {
      showAdAttribution: false,
      title: `${prefix}Spotify`,
      body: procees.result.title,
      thumbnailUrl: procees.result.album.images[0].url,
      sourceUrl: audioInfo.link,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }, mimetype: 'audio/mp4' }, { quoted: m });
  } else {
    return m.reply('*Gagal mendapatkan audio preview, coba lagi nanti.*');
  }
}
break


//------------------------------------------------------------------- [ SPO DOWNLOADER ] ----------------------------------------------------------------------------


//------------------------------------------------------------------- [ TT DOWNLOADER ] -----------------------------------------------------------------------------

case 'ttdl':
case 'tt': {
  if (!text) return m.reply(`*Link Tiktoknya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(200)

  let response = await (await fetch(`https://api.maelyn.tech/api/tiktok/download?url=${text}&apikey=wyq3Zrsd53`)).json()
  let capt = `Caption: ${response.result.title}`;

  if (response.result.medias && response.result.medias.length > 0) {
    // Check if there's a video with extension 'mp4' and quality 'sd'
    let video = response.result.medias.find(media => media.extension === 'mp4' && media.quality === 'sd');
    if (video) {
      // Send video if found with quality 'sd'
      await lenwy.sendMessage(m.chat, { video: { url: video.url }, caption: capt }, { quoted: m });
    } else {
      // If no video with 'mp4' and 'sd', check for images (jpg/png)
      let imageUrls = response.result.medias.filter(media => media.extension === 'jpg' || media.extension === 'png');
      if (imageUrls.length > 0) {
        // Send all images if found
        for (let imageUrl of imageUrls) {
          await lenwy.sendMessage(m.chat, { image: { url: imageUrl.url }}, { quoted: m });
        }
      m.reply(capt)
      } else {
        m.reply(`*Tipe konten tidak dikenali.*`)
      }
    }

    // Now check if audio (mp3) is available and send it
    let audio = response.result.medias.find(media => media.extension === 'mp3' && media.audioAvailable);
    if (audio) {
      await lenwy.sendMessage(m.chat, { audio: { url: audio.url }, mimetype: 'audio/mp4', caption: capt }, { quoted: m });
    }
  } else {
    m.reply(`*Tipe konten tidak dikenali.*`)
  }
}
break




/*case 'tt':
case 'ttdl': {
  if (!text) return m.reply(`*Link Tiktoknya Mana?*`)
LenwyLD()
await sleep(200)
m.reply(`Kalau Tombol Dibawah Ga Muncul Bisa Langsung Menggunakan\n\n> ${prefix}twittervideo <link>\n> ${prefix}twitterfoto <link>`)
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Mau Download Dalam Format Apa?*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video","id":"${prefix}ttvideo ${text}"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Foto","id":"${prefix}ttfoto ${text}"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio","id":"${prefix}ttaudio ${text}"}`
              }
],
}), contextInfo: {
mentionedJid: [m.sender], 
isForwarded: false,
externalAdReply:{
showAdAttribution: false,
renderLargerThumbnail: false,
title: `Tiktok`,
mediaType: 1, 
body: ``,
thumbnailUrl: `https://endpoint.web.id/server/file/r0983lQwbAMrrGN.jpg`,
sourceUrl : `${text}`
},
},
})
}
}
}, { quoted: m })
await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break

case 'ttvideo':
case 'tiktokvideo': {
  if (!text) return m.reply(`*Link Tiktoknya Mana?*`)
  try {
    LenwyLD()
    await sleep(200)
    
    let tiktok = await (await fetch(`https://api.tiklydown.eu.org/api/download?url=${text}`)).json()
    let tiktokCaption = tiktok.title;
    let dataPengirim = tiktok.author;
    let result = `🎁 *Hasilnya*\n\n*Name : ${dataPengirim.name}*\n*Nickname : ${dataPengirim.unique_id}*\n*Bio :* *${dataPengirim.signature}*\n\n*Caption :*\n  ${tiktokCaption}`;
      
    // Mengirim video
    lenwy.sendMessage(m.chat,
      { video: { url: tiktok.video.noWatermark }, caption: `${result}` }, { quoted: m })
  } catch (error) {
    m.reply('*Masukkan Query Lainnya Atau Coba Lagi Nanti*')
  }
}
break


case 'tiktokfoto':
case 'ttfoto': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  if (!text) return m.reply(`*Bukan Gitu Loh*\n> *${command} <link>*`)
  try {
    LenwyLD()
    await sleep(200)
    let tiktok = await (await fetch(`https://api.tiklydown.eu.org/api/download?url=${text}`)).json()
    let tiktokCaption = tiktok.title;
    let dataPengirim = tiktok.author;
    let result = `🎁 *Hasilnya*\n\n*Name : ${dataPengirim.name}*\n*Nickname : ${dataPengirim.unique_id}*\n*Bio :* *${dataPengirim.signature}*\n\n*Caption :*\n  ${tiktokCaption}`;
    
    for (let i = 0; i < tiktok.images.length; i++) {
      let image = tiktok.images[i]
      await lenwy.sendMessage(m.chat, { image: { url: image.url }}, { quoted: m })
    }
    m.reply(result)
  } catch (error) {
    console.error(error) // Log error untuk debugging
    m.reply(error)
  }
}
break
*/

case 'tiktokaudio':
case 'ttaudio': {
  if (!text) return m.reply(`*Link Tiktoknya Mana?*`)
  try {
    LenwyLD()
    await sleep(200)
    let tiktok = await (await fetch(`https://api.tiklydown.eu.org/api/download?url=${text}`)).json()
    let tiktokCaption = tiktok.title;
    let dataPengirim = tiktok.author;
    let result = `🎁 *Hasilnya*\n\n*Name : ${dataPengirim.name}*\n*Nickname : ${dataPengirim.unique_id}*\n*Bio :* *${dataPengirim.signature}*\n\n*Caption :*\n  ${tiktokCaption}`;
      
lenwy.sendMessage(m.chat, {audio: {url: tiktok.music.play_url }, contextInfo: {
mentionedJid: [m.sender], 
isForwarded: false,
externalAdReply:{
showAdAttribution: false,
renderLargerThumbnail: false,
title: tiktok.music.title,
mediaType: 1, 
body: `Tiktok`,
thumbnailUrl: tiktok.music.cover_medium,
sourceUrl : `${text}`
},
}, mimetype: 'audio/mp4' }, {quoted: m})
    await m.reply(result)
  } catch (error) {
    console.error(error) // Log error untuk debugging
    m.reply(error)
  }
}
break

case 'ttsearch': {
LenwyLD()
await sleep(200)
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return m.reply(`*Link Tiktoknya Mana?*`)
LenwyLD()
await sleep(200)
try{
let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
let result = `🎁 *Tiktok Search*`
await lenwy.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `${result}`}, {quoted: m})
}catch (error) {
m.reply(mess.error)
}
}
break

case 'ttstalk':
case 'tiktokstalk':
case 'stalktiktok':
case 'stalktt': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  if (!text) return m.reply(`*Bukan Gitu Loh*\n> *${command} <namaUser>*`)
  
  try {
    LenwyLD()
    await sleep(200)
    let tiktok = await (await fetch(`https://api.tiklydown.eu.org/api/stalk?user=${text}`)).json()
    let user = tiktok.data.user;
    let stats = tiktok.data.stats;
    
    let caption = `*Username:* ${user.uniqueId}\n` +
                  `*Nickname:* ${user.nickname}\n` +
                  `*Bio:* ${user.signature}\n` +
                  `*Negara:* ${user.region}\n` +
                  `*Verified:* ${user.verified ? 'Yes' : 'No'}\n` +
                  `*Akun Private:* ${user.privateAccount ? 'Yes' : 'No'}\n` +
                  `*Total Pengikut:* ${stats.followerCount}\n` +
                  `*Total Mengikuti:* ${stats.followingCount}\n` +
                  `*Total Disukai:* ${stats.heartCount}\n` +
                  `*Total Video:* ${stats.videoCount}`;
    
    // Mengirim gambar profil dengan caption
    await lenwy.sendMessage(m.chat, {
      image: { url: user.avatarLarger },
      caption: caption
    }, { quoted: m })

  } catch (error) {
    m.reply('*Masukkan Query Lainnya Atau Coba Lagi Nanti*')
  }
}
break

//------------------------------------------------------------------- [ TT DOWNLOADER ] -----------------------------------------------------------------------------


//------------------------------------------------------------------- [ IG DOWNLOADER ] -----------------------------------------------------------------------------

case 'ig':
case 'igdl': {
  if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  
  LenwyLD()
  await sleep(200)
  try {
    let ress = await igdl(text);
    console.log(ress);
    
    const total = ress.length;
    const step = Math.floor(Math.sqrt(total));
    const batas = step;
    for (let i = 0; i < step; i++) {
      let responseIg = await axios.head(ress[i].url); 
      let contentType = responseIg.headers['content-type'];
      if (contentType.startsWith('image/')) {
        await lenwy.sendMessage(m.chat, { image: { url: ress[i].url}, caption: mess.success }, { quoted: m });
      } else {
        await lenwy.sendMessage(m.chat, { video: { url: ress[i].url}, caption: mess.success }, { quoted: m });
      }
    }
  } catch (e) {
    m.reply(e)
  }
}
break

/*
case 'ig':
case 'igdl': {
if (!text) return m.reply(`*Link Instagramnya Mana?*`)
if (!isUrl(text)) return m.reply(mess.link)
let response = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=315602&url=${text}`)).json()
let result = response.result
LenwyLD()
await sleep(200)
m.reply(`Kalau Tombol Dibawah Ga Muncul Bisa Langsung Menggunakan\n\n> ${prefix}igvideo <link>\n> ${prefix}igfoto <link>`)
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Mau Download Dalam Format Apa?*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video","id":"${prefix}igvideo ${text}"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Foto","id":"${prefix}igfoto ${text}"}`
              }
],
}), contextInfo: {
mentionedJid: [m.sender], 
isForwarded: false,
externalAdReply:{
showAdAttribution: false,
renderLargerThumbnail: true,
title: `Instagram`,
mediaType: 1, 
body: ``,
thumbnailUrl: result.imagePath,
sourceUrl : `${text}`
},
},
})
}
}
}, { quoted: m })
await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break


case 'igfoto': {
  if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(200)

  try {
    let response = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=315602&url=${text}`)).json()
    let { result } = response;
      let imageUrl = result.downloadLinks.find(link => link.quality === "Download Image")
      
      if (imageUrl) {
        let caption = `🎁 *Selesai*\n\nTidak ada komentar ditemukan.`;
        lenwy.sendMessage(m.chat, { image: { url: imageUrl.url }, caption: caption }, { quoted: m })
      } else {
        let videoUrl = result.downloadLinks[0].url
        let caption = `🎥 *Video Ditemukan*\n\n${result.title}`;
        lenwy.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m })
      }
  } catch (error) {
    let response = await (await fetch(`https://endpoint.web.id/downloader/retatube?key=315602&url=${text}`)).json()
    if (response.result.downloadLinks && response.result.downloadLinks.length > 0) {
      let imageUrls = response.result.downloadLinks.filter(link => link.quality === "Download Image").map(link => link.url)
      let videoUrls = response.result.downloadLinks.filter(link => link.quality !== "Download Image").map(link => link.url)
      let caption = response.result.title
      if (imageUrls.length > 0) {
        for (let imageUrl of imageUrls) {
          await lenwy.sendMessage(m.chat, { image: { url: imageUrl }})
        }
      }

      if (videoUrls.length > 0) {
        for (let videoUrl of videoUrls) {
          await lenwy.sendMessage(m.chat, { video: { url: videoUrl }})
        }
      }
      await sleep(200)
      await lenwy.sendMessage(m.chat, { text: caption})
    }
  }
}
break


case 'igvideo': {
  if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(200)

  try {
    let response = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=315602&url=${text}`)).json()
    let { result } = response;
    
    if (!result || !result.videoUrl) return m.reply("Tidak ada video yang ditemukan.")

    let videoUrl = result.videoUrl;
    let komentar = result.comments;

    // Membuat caption yang mencakup komentar
    let caption = `🎁 *Selesai*\n\n`
    if (komentar && komentar.length > 0) {
      komentar.forEach(comment => {
        caption += `Username: ${comment.username}\nComment: ${comment.text}\n\n`
      })
    } else {
      caption += `Tidak ada komentar ditemukan.`;
    }

    lenwy.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m })
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break

case 'igslide': {
    if (!text) return m.reply("*Link Instagramnya Mana?*")
        if (!isUrl(args[0])) return m.reply(mess.link)
LenwyLD()
    await sleep(200)
try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
} catch (error) {
    return m.reply(mess.error)
  }
  let api_response = await res.json()
    LenwyLD()
  await sleep(200)
  if (!api_response || !api_response.data) {
    return m.reply(`*⚠️ Kayaknya Ada Yang Error*`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let result = `🎁 *Selesai*`
    if (mediaType === 'video') {
      lenwy.sendMessage(m.chat, {video: {url: mediaURL}, caption: result}, {quoted: m})
    } else if (mediaType === 'image') {
      lenwy.sendMessage(m.chat, { image: {url: mediaURL}, caption: result}, {quoted: m})
    }
  }
}
break
*/


//------------------------------------------------------------------- [ IG DOWNLOADER ] -----------------------------------------------------------------------------


//------------------------------------------------------------------- [ FB DOWNLOADER ] -----------------------------------------------------------------------------



case 'fb':
case 'fbdl': {
if (!text) return m.reply(`*Link Fbnya Mana?*`)
if (!isUrl(text)) return m.reply(mess.link)
LenwyLD()
await sleep(200)
try {
  let data = await facebook(text)
  console.log(data)
  await lenwy.sendMessage(m.chat, { video: { url: data.result.links.HD }}, { quoted: m })
} catch (error) {
  m.reply(`Khusus link video`)
  console.log(error)
}
}
break



//------------------------------------------------------------------- [ FB DOWNLOADER ] -----------------------------------------------------------------------------

//------------------------------------------------------------------- [ X DOWNLOADER ] -----------------------------------------------------------------------------


case 'twitter':
case 'xdl': {
  if (!text) return m.reply(`*Link Twitternya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  try {
    let response = await (await fetch(`https://api.maelyn.tech/api/x?url=${text}&apikey=wyq3Zrsd53`)).json()
    lenwy.sendMessage(m.chat, { video: { url: response.result.video_hd }, caption: `Caption: ${response.result.desc}` }, { quoted: m })
    await sleep(200)
    await lenwy.sendMessage(m.chat, { audio: { url: response.result.audio }, mimetype: 'audio/mp4' }, { quoted: m });
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break



//------------------------------------------------------------------- [ X DOWNLOADER ] -----------------------------------------------------------------------------




case 'mediafire': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(mess.link)
  LenwyLD()
  await sleep(200)
  const baby1 = await (await fetch('https://endpoint.web.id/downloader/mediafire?key=315602&url=' + text)).json()
  const shanz = baby1.result;
  const extension = shanz.filename.split('.').pop().toLowerCase()

  const mimeTypes = {
      'pdf': 'application/pdf',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'mp4': 'video/mp4',
      'mp3': 'audio/mpeg',
      'zip': 'application/zip',
      'txt': 'text/plain',
      //tambahin mimetype lagi kalo mau
  };
  const mimeType = mimeTypes[extension] || 'application/octet-stream';

  const result4 = `🔧 *MEDIAFIRE DOWNLOADER*\r\n\r\n🔖 *Name* : ${shanz.name}\r\n💽 *Size* : ${shanz.size}\r\n📌 *Desc* : ${shanz.desc}`
  
  lenwy.sendMessage(m.chat, {
      document: { url: shanz.media },
      fileName: shanz.filename,
      mimetype: mimeType,
      caption: result4
  }, { quoted: m })
}
break






case 'ssweb': 
case 'ssdesktop':
case 'ssdesk': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  // URL API dengan parameter
  try {
      lenwy.sendMessage(from, { image: { url: `https://api.autoresbot.com/api/ssweb?url=${encodeURIComponent(q)}&apikey=4c04faf21fb8524bad4a9cb7` }, caption: mess.success }, { quoted: m })
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break
        
case 'sswebhp': 
case 'sshp':
case 'sshandphone': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  // URL API dengan parameter
  const apiUrl = `https://endpoint.web.id/tools/sswebphone?key=315602&url=${encodeURIComponent(q)}`;
  try {
    // Memanggil API
    const response = await axios.get(apiUrl)
    // Mengecek status dan kode
    if (response.data.status && response.data.code === 200) {
      // Mendapatkan URL gambar dari hasil API
      const imageUrl = response.data.result;
      // Mengirim gambar dengan captio
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break
       
case 'sstab': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  // URL API dengan parameter
  const apiUrl = `https://endpoint.web.id/tools/sswebtab?key=315602&url=${encodeURIComponent(q)}`;
  try {
    // Memanggil API
    const response = await axios.get(apiUrl)
    // Mengecek status dan kode
    if (response.data.status && response.data.code === 200) {
      // Mendapatkan URL gambar dari hasil API
      const imageUrl = response.data.result;
      // Mengirim gambar dengan caption
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break

case 'wm': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
let teks = `${text}`
if (/image/.test(mime)) {
  var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.imageMessage, 'image');
  var buffer = Buffer.from([]);
  for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk]);
  }
  let buffers = await writeExifImg(buffer, { packname: text, author: global.author });
  await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
} else if (/video/.test(mime)) {
  var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.videoMessage, 'video');
  var buffer = Buffer.from([]);
  for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk]);
  }
  let buffers = await writeExifVid(buffer, { packname:  text, author: global.author });
  await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
} else {
  m.reply(`Balas gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!*)`);
}  
}
break

case 'pin':
case 'pinterest': {
  if (!text) return m.reply(`*Contoh:* ${prefix + command} FF🗿`)
  
  LenwyLD()
  await sleep(200)
  let push = []
  try {
    async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
        image: { url }
      }, {
        upload: lenwy.waUploadToServer
      })
      return imageMessage;
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randIndex]] = [array[randIndex], array[i]];
      }
    }
    
    let { data } = await axios.get(`https://api.maelyn.tech/api/pinterest/search?q=${encodeURIComponent(text)}&apikey=wyq3Zrsd53`)
    if (data.status !== "Success") throw new Error("Gagal mengambil data dari API")
    
    let res = data.result
    shuffleArray(res)

    let i = 1;
    for (let lucuy of res) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `Image Ke ${i++}/${res.length}`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: `By ${botname}`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: '', 
          hasMediaAttachment: false,
          imageMessage: await createImage(lucuy)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
            }
          ]
        })
      })
    }
    
    const bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: '*P I N T E R E S T*', 
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '*Hasil Dari:* ' + text,
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...push]
            })
          })
        }
      }
    }, {quoted:m})

    await lenwy.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
    })

  } catch (e) {
    console.log(e) 
    m.reply('Yah error di bagian: ' + e.message) 
  }
}
break

case 'enka':
            case 'profilgi':
            if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
			if (args.length == 0) return m.reply(`*Contoh: ${prefix + command}* 800000001`)
            LenwyLD()
          await sleep(200)
			global.sh = `https://enka.network/u/${args[0]}`
let krt = await ssweb(global.sh)
			axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({ data }) => {
				var caption = `*Profile Genshin*\n\n  *⨠ Nickname* : *${data.playerInfo.nickname}*\n`
				caption += `  *⨠ Adventure Rank* : *${data.playerInfo.level}*\n`
				caption += `  *⨠ Signature* : *${data.playerInfo.signature}*\n`
				caption += `  *⨠ World Level* : *${data.playerInfo.worldLevel}*\n\n`
				caption += `  *⨠ Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
				caption += `  *⨠ Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
				caption += `🎁 *Lebih Lengkap Cek Disini :* https://enka.network/u/${args[0]}\n`
				lenwy.sendMessage(from ,{ image: krt.result, caption: caption },{ quoted: m })
			})
			.catch(console.error)
			break

case 'bucin': case 'dare': case 'faktaunik': case 'fml': case 'katabijak': case 'katacinta': case 'katagalau': case 'katahacker': case 'katailham': case 'katasenja': case 'katasindiran': case 'motivasi': case 'nickff': case 'pantun': case 'puisi': case 'quotesislamic': case 'quotespubg': case 'truth': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'quotes':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
var resi = await Quotes()
teks = `\n${global.emoji} *Author: ${resi.author}*\n`
teks = `\n🎁 *Quotes:*\n`
teks = `*${resi.quotes}*\n`
m.reply(teks)
break

case 'quotesanime': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const an1 = JSON.parse(fs.readFileSync("./data/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*Random Quotes Anime*

🍁 *Nama Anime : ${r4ndan1.anime}*
🍁 *Nama Character : ${r4ndan1.character}*
🍁 *Episode : ${r4ndan1.episode}*

🎁 *Quotes : ${r4ndan1.quotes}*`
lenwy.sendMessage(from, { text: tgt99 }, { quoted: m })
}
break

case 'kompasnews':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'detiknews':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'dailynews':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'inews':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
m.reply(teks) 
})
break

case 'kontan':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'meme':
var reis = await JalanTikusMeme()
teks = ""
teks += "*Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
lenwy.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break

case 'tourl': {
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`*Mana Foto Atau Video Nya?*`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    console.log(link)
    await m.reply(`${link}`)
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
}
break

case 'tourl2': {
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`*Mana Foto Atau Video Nya?*`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    console.log(link)
    await m.reply(`${link}`)
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
}
break

case 'tourlvid': {
if (!/video/.test(mime)) return m.reply(`*Mana Video Nya?*`)
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    await m.reply(`${link}`)
} else if (/video/.test(mime)) {
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
await fs.unlinkSync(media)
}
break

case 'confes2':
case 'menfes2':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (!text) return m.reply(`*Format : Menfess Nomor|Pengirim|Pesan*\n\n📑 *Contoh : Menfes 6285261255548|Someone?|Hoiiii, Semangat Yah*`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let lenwy_nama = q.split('|')[1] ? q.split('|')[1] : q
let lenwychat = q.split('|')[2] ? q.split('|')[2] : ''
if (lenwychat.length < 1) return m.reply(`⚠️ *Tolong Isi Semua Data Dengan Baik*`)
let lenwy_txt = `*Halo Ada Menfess Nih*\n🎁 *Dari : ${lenwy_nama}* \n📃 *Pesan :* ${lenwychat}\n\n⚠️ *Menfess Ini Dikirim Oleh ${botname}*`
lenwy.sendMessage(`${nomor}@s.whatsapp.net`, { caption: lenwy_txt, image: {url: `https://telegra.ph/file/159087e6c35acd5276a41.jpg`}})
m.reply(`*Sukses Mengirim Menfess*`)     
break

case 'reminder': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (!args[0] || !args[1]) return m.reply('*Format : Reminder Waktu s/m/h/d Pesan*\n\n📑 *Contoh : Reminder 30m Jangan Lupa Sholat*')
const time = toMs(args[0])
const message = args.slice(1).join(' ')
setTimeout(() => {
lenwy.sendMessage(from, { text : `*Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo:{mentionedJid:[sender]}}, { quoted: m })}, time)
m.reply(`📑 *Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
}
break

case 'mc':
case 'mcserver': 
            if (args.length == 0) return m.reply(`📦 *Java / Bedrock*`)
            if (args[0] === 'bedrock') {
                LenwyLD()
                await sleep(200)
axios.get(`https://api.mcstatus.io/v2/status/bedrock/${args[1]}`).then(({ data }) => {
                var caption = `📑 *Minecraft Bedrock Server*\n`
                caption += ` *⨠ IP : ${data.host}*\n`
                caption += ` *⨠ Port : ${data.port}*\n`
                caption += ` *⨠ IP Address : ${data.ip_address}*\n\n`
                caption += `📊 *Server Information*\n`
                caption += ` *⨠ Gamemode : ${data.gamemode}*\n`
                caption += ` *⨠ Player Online : ${data.players.online}/${data.players.max}*\n`
                caption += ` *⨠ Version : ${data.version.name}*\n`
                caption += ` *⨠ Edition : ${data.edition}*\n`
                lenwy.sendMessage(from , {image: { url: `https://telegra.ph/file/54ff237913e8fdf5774b1.png` }, caption: caption },{ quoted: m })
            })
} else if (args[0] === 'java') {
    LenwyLD()
    await sleep(200)
axios.get(`https://api.mcstatus.io/v2/status/java/${args[1]}`).then(({ data }) => {
                var caption = `📑 *Minecraft Java Server*\n`
                caption += ` *⨠ IP : ${data.host}*\n`
                caption += ` *⨠ Port : ${data.port}*\n`
                caption += ` *⨠ IP Address : ${data.ip_address}*\n\n`
                caption += `📊 *Server Information*\n`
                caption += ` *⨠ Player Online : ${data.players.online}/${data.players.max}*\n`
                caption += ` *⨠ Mods : ${data.mods.name}*\n`
                caption += ` *⨠ Plugins : ${data.plugins.name}*\n`
                caption += ` *⨠ Version : ${data.version.name_clean}*\n`
                lenwy.sendMessage(from , {image: { url: `https://telegra.ph/file/54ff237913e8fdf5774b1.png` }, caption: caption },{ quoted: m })
            })
} else {
m.reply('⚠️ *Nama Server Tidak Ditemukan*')
}
break

case 'jarak': {
if (!text) return m.reply(`*Contoh: ${prefix + command} Jakarta|Bandung*`)
if (text.length > 80) return m.reply(`*Maksimal 80 Karakter*`)    
LenwyLD()
await sleep(200)
let [from, to] = text.split(/[^\w\s]/g)
if (!(from && to)) return m.reply (`*Contoh: ${prefix + command} Jakarta|Bandung*`) 
let data = await jarak(from, to)
if (data.img) return lenwy.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m.reply(data.desc)
}
break

case 'google': {
  if (!text) return m.reply(`*Contoh: ${prefix + command} free fire*`)
  if (text.length > 80) return m.reply(`*Maksimal 80 Karakter*`)    
  LenwyLD()
  await sleep(200)
  let js = await (await fetch(`https://api.lolhuman.xyz/api/gsearch?apikey=edce68e031c34dcf71219133&query=${text}`)).json()
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `*Apakah Ini Yang Anda Cari?*`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: ``
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: ``,
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "quick_reply",
                  "buttonParamsJson": `{"display_text":"Cari Lagi","id":"${prefix}${command} ${text}"}`
                }
  ],
  }),
  })
  }
  }
  }, { quoted: m })
  // Cek jika ada hasil
  if (!js.result.length) {
      return m.reply(`*Tidak ada hasil yang ditemukan.*`)
  }

  // Mengambil indeks acak
  let randomIndex = Math.floor(Math.random() * js.result.length)
  let randomResult = js.result[randomIndex]
  
  let resultMessage = `*Judul:* ${randomResult.title}\n*Deskripsi:* ${randomResult.desc}\n*Link:* ${randomResult.link}`;
  m.reply(`Berikut Hasilnya:\n\n${resultMessage}`)
  await sleep(200)
  await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
  })
}
break

case 'apksearch': {
  if (!text) return m.reply(`⚠️ *Masukkan Nama Apk*`)

  LenwyLD()
  await sleep(200)

  async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
          image: { url }
      }, {
          upload: lenwy.waUploadToServer
      })
      return imageMessage;
  }

  try {
      const response = await axios.get(`https://endpoint.web.id/search/playstore?key=315602&query=${text}`)
      const apps = response.data.result;

      let push = []
      for (let app of apps) {
          push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: `Developer: \n${app.developer}\n`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                  text: `⭐ Rating: ${app.rate2}/5`
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                  title: app.nama, 
                  hasMediaAttachment: true,
                  imageMessage: await createImage(app.img) // Call createImage here
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                      {
                          "name": "cta_url",
                          "buttonParamsJson": `{"display_text":"Source","url":"${app.link}","merchant_url":"${app.link}"}`
                      }
                  ]
              })
          })
      }

      const bot = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
              message: {
                  messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                          text: '*Hasil Pencarian Play Store*',
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                          text: '*Hasil Dari:* ' + text,
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                          hasMediaAttachment: false
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                          cards: push
                      })
                  })
              }
          }
      }, { quoted: m })

      await lenwy.relayMessage(m.chat, bot.message, {
          messageId: bot.key.id
      })
  } catch (e) {
      console.error(e)
      m.reply('Yah error di bagian: ' + e.message)
  }
}
break

case 'drakorsearch': {
if (!text) return m.reply(`⚠️ *Masukkan Nama Drakor*`)
var js = await fetch(`https://dikaardnt.com/api/search/drakor?q=${q}`)
LenwyLD()
await sleep(200)
var json = await js.json()
  LenwyLD()
  await sleep(200)
let capt = `
📑 *Judul :* ${json[0].title}
📦 *Genre :* ${json[0].genres}
📣 *Link :* ${json[0].url}
`;
await lenwy.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break

case 'animesearch':
case 'searchanime': {
  if (!text) return m.reply(`⚠️ *Masukkan Nama Anime*`)

  LenwyLD()
  await sleep(200)
  let imageUrl = "https://endpoint.web.id/server/file/l75yVFzs2UbSEIm.png";

  try {
      let response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
      let jpegThumbnail = Buffer.from(response.data, 'binary')

      let { data } = await axios({
          method: 'GET',
          url: 'https://api.nyxs.pw/anime/samehadakusearch?anime=' + text
      })
      let res = data.result
      if (res.length === 0) return m.reply('*Tidak ada hasil ditemukan*')
      function getRandomResult(results) {
          return results[Math.floor(Math.random() * results.length)]
      }
      let result = getRandomResult(res)
 
  const ss = `${result.title}`;
  const st = `[ ${command} ]

🎧  *Judul*
${ss}

📃  *status*
${result.status}

⭐  *Rating*
${result.rating}

🧬  *Link*
${result.url}


Gunakan Code Dibawah Untuk Melihat Info Dan Download Anime
> Animeinfo ${result.code_info}
> Animedownload ${result.code_dl}`;

  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [m.sender],
            isForwarded: false,
            externalAdReply: {
              showAdAttribution: false,
              renderLargerThumbnail: false,
              title: ss,
              mediaType: 1,
              body: `Anime`,
              thumbnailUrl: result.thumbnail,
              sourceUrl: result.url
            },
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Apakah Ini Anime Nya?*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            thumbnailUrl: result.thumbnail,
            subtitle: ``,
            hasMediaAttachment: false,
            ...(await prepareWAMessageMedia({
              document: fs.readFileSync('./package.json'), // Jika ada file yang ingin dilampirkan
              jpegThumbnail: jpegThumbnail,
              fileLength: 1000000000000000000,
              fileName: `${prefix}${command} ${text}`,
            }, {
              upload: lenwy.waUploadToServer
            }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_copy",
                "buttonParamsJson": `{\"display_text\":\"codeInfo\",\"id\":\"${result.code_info}\",\"copy_code\":\"${result.code_info}\"}`
              },{
                "name": "cta_copy",
                "buttonParamsJson": `{\"display_text\":\"codeDownload\",\"id\":\"${result.code_dl}\",\"copy_code\":\"${result.code_info}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Cari Lagi\",\"id\":\"${prefix}${command} ${text}\"}`
              }
            ]
          })
        })
      }
    }
  }, { userJid: m.sender, quoted: m })
  lenwy.sendMessage(m.chat, {text: `${st}`}, {quoted: m})
  await sleep(200)
  await lenwy.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
} catch (error) {
  console.error('Error:', error)
  m.reply('Terjadi kesalahan saat mengambil data.')
}
}
break

case 'animeinfo':
case 'infoanime': {
    if (!text) return m.reply(`Masukkan Judul Code Info`)
    if (text.length > 30) return m.reply(`Maksimal 30 Karakter`)
    
    LenwyLD()
    await sleep(200)
    
    try {
        let anu = await (await fetch(`https://api.nyxs.pw/anime/samehadakuinfo?code_info=${text}`)).json()
        let result = anu.result[0] // Assuming result is an array and we want the first item
        
        let caption = `📃 Judul: ${result.title}\n` +
                      `📣 Deskripsi: ${result.description}\n\n` +
                      `⭐ Rating: ${result.rating}/10\n` +
                      `📺 Total Episode: ${result.totalEpisode}\n\n` +
                      `📊 Detail:\n`

        // Loop through the detail array and add each item to the caption
        result.detail.forEach(item => {
            caption += `• ${item}\n`
        })

        await lenwy.sendMessage(m.chat, {
            text: caption,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    title: `${result.title}`,
                    body: ``,
                    thumbnailUrl: result.thumbnail,
                    sourceUrl: `${result.url}`,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

    } catch (error) {
        m.reply(`⚠️ ${command} Tidak Ditemukan: ${error}`)
    }
}
break

case 'animedownload':
case 'downloadanime': {
    if (!text) return m.reply(`Masukkan Judul Code Download & Eps`)
    let args = q.split("|")
    let args1 = args[0].toLowerCase()
    let args2 = args[1]
    if (!q.includes('|')) return m.reply(`*${prefix+command} codeDownload|<episodeKe?>\n\nUntuk Mendapatkan codeDownload Silahkan Lakukan:\n${prefix}animesearch <namaAnime>`)

    LenwyLD()
    await sleep(200)

    try {
        let response = await fetch(`https://api.nyxs.pw/anime/samehadakudl?code_dl=${args1}&episode=${args2}`)
        let data = await response.json()

        if (!data.status || !data.result) {
            return m.reply(`⚠️ Tidak ada data yang ditemukan untuk anime ini.`)
        }

        let { result } = data;
        let caption = `📥 Anime : ${args1} | Episode : ${args2}:\n\n`
        const addLinks = (format, qualityList) => {
            caption += `\n                                [ *${format.toUpperCase()}* ]\n\n`
            qualityList.forEach(item => {
                caption += `🔹 Resolution: ${item.resolution}\n`
                item.urls.forEach(link => {
                    caption += `  -  [ ${link.provider} ] :\n      ${link.url}\n\n`
                })
                caption += '\n'
            })
        };

        // Adding each format to caption
        if (result.mp4) addLinks('mp4', result.mp4)
        if (result.mkv) addLinks('mkv', result.mkv)
        if (result.x265_irit) addLinks('x265_irit', result.x265_irit)

        // Send the message with all download links
        await lenwy.sendMessage(m.chat, {
            text: caption
        }, { quoted: m })
        
    } catch (error) {
        m.reply(`⚠️ Terjadi kesalahan: ${error.message}`)
    }
}
break

case 'couple': {
LenwyLD()
await sleep(200)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(from, { image: { url: random.male }, caption: `🎁 *Couple Male*` }, {quoted:m})
lenwy.sendMessage(from, { image: { url: random.female }, caption: `🎁 *Couple Female*` }, {quoted:m})
}
break

case 'getname': {
if (qtod === "true") {
namenye = await lenwy.getName(m.quoted.sender)
m.reply(`Namanya: ${namenye}`)
} else if (qtod === "false") {
lenwy.sendMessage(from, {text:"✉️ *Reply Orangnya*"}, {quoted:m})
}
}
break

case 'getpic': {
if (qtod === "true") {
try {
pporg = await lenwy.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporg }, caption:`*Selesai*` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await lenwy.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporgs }, caption:`*Selesai*` }, {quoted:m})
}
}
break

case 'totalfeature':
case 'totalfitur': 
case 'totalcmd': 
case 'totalcommand':
m.reply(`Hallo ${pushname}
Saat ini ${botname} memiliki total fitur ${totalfitur()}`)
break

case 'block': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'cwr': {
if (!text) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')
var cwl = text.split(' ')
if (!cwl || cwl.length !== 3) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')          
const tMatch = parseFloat(cwl[0])
const tWr = parseFloat(cwl[1])
const wrReq = parseFloat(cwl[2])          
if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
return m.reply('⚠️ *Pastikan Semuanya Berupa Angka*')
}          
const resultNum = cwr(tMatch, tWr, wrReq)
const tekl = `*Winrate Calculator Mobile Legend*

📑 *Data Yang Diberikan*
 *⨠ Total Petandingan : ${tMatch}*
 *⨠ Winrate Saat Ini : ${tWr}%*
 *⨠ Target Winrate : ${wrReq}%*

🎁 *Hasil :*
*Butuh ${resultNum} Pertandingan Tanpa Kalah Untuk Mencapai ${wrReq}% Winrate*`;
m.reply(tekl)
}
break

case 'stalktiktok':
case 'ttstalk':
case 'stalktt':
case 'tiktokstalk':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=haikalgans`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
lenwy.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break

case 'afk': {
if (!isAdmins) return
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (text.length > 100) return m.reply(`*Maksimal 100 Karakter*`) 
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
lenwy.sendMessage(m.chat, { text: `*${pushname} Sedang AFK*\n⚠️ *alasannya 🐒:* ${text ? text : '-'}` })
}
break

case 'listdb':
if (!isCreator) return m.reply(mess.owner)
lenwy_user = '📦 *Database User*'
lenwy_user += `\n📑 *Total : ${pengguna.length} User*`
lenwy.sendMessage(from, { text: lenwy_user.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": pengguna } })
break

case 'getdb': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let sesi = await fs.readFileSync('./src/database.json')
lenwy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
break

case 'getuser': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let sesi = await fs.readFileSync('./database/user.json')
lenwy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'user.json' }, { quoted: m })
}
break

case 'tebak': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "gambar") {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendImage(from, result.img, `*Silahkan Jawab Soal Di Atas Ini*\n\n📑 *Deskripsi :* ${result.deskripsi}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakgambar[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Gambar*`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkata[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kata*` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *Pertanyaan :* ${result.soal}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkalimat[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Ini Adalah Lirik Dari Lagu? :* \n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebaklirik[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lirik*`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Jawablah Pertanyaan Berikut :*\n📦 *${result.soal}*\n🕒 *Waktu : 60s*`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${caklontong[m.sender.split('@')[0]]}*\n\n📑 *Deskripsi : ${caklontong_desk[m.sender.split('@')[0]]}* \n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break

case 'kuismath': case 'math': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let { genMath, modes } = require('./src/math')
 if (!text) m.reply `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 lenwy.sendText(from, `*Berapa Hasil Dari : ${result.soal.toLowerCase()}*?\n\n🕒 *Waktu : ${(result.waktu / 1000).toFixed(2)} detik*`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 m.reply("🕒 *Waktu Habis*\n🎁 *Jawaban :* " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break

case 'tebakangka':
    if (gameState.angkaAcak === null) {
        // Jika angka belum ditentukan, inisialisasi angka acak
        gameState.angkaAcak = Math.floor(Math.random() * 20) + 1;
        gameState.jumlahTebakan = 0; // Reset jumlah tebakan
        m.reply('Aku sudah memikirkan sebuah angka antara 1-20. Coba tebak!')
    } else {
        // Jika angka sudah ditentukan, periksa tebakan
        const tebakan = parseInt(text)
        if (isNaN(tebakan) || tebakan < 1 || tebakan > 20) {
            return m.reply('Tebakan harus berupa angka antara 1-20.')
        }

        gameState.jumlahTebakan++;

        if (tebakan < gameState.angkaAcak) {
            return m.reply("Tebakan Anda terlalu rendah. Coba lagi!")
        } else if (tebakan > gameState.angkaAcak) {
            return m.reply("Tebakan Anda terlalu tinggi. Coba lagi!")
        } else {
            // Jika tebakan benar
            m.reply(`Selamat! Anda telah menebak angka ${gameState.angkaAcak} dengan ${gameState.jumlahTebakan} tebakan.`)
            // Reset permainan
            gameState.angkaAcak = null;
        }
    }
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('⚠️ *Kamu Masih Didalam Permainan Atau Menunggu Lawan Bermain*\n\n> Ketik delttc atau nyerah untuk keluar dari permainan')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('*Lawan Bermain Ditemukan*')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('*Menunggu Lawan Bermain*' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply('Kamu sedang tidak berada di room tictactoe!')
delete this.game[roomnya.id]
m.reply('Berhasil delete session room tictactoe!')
}
break   

case 'del':
case 'd':
case 'del':
case 'delete': {
 if (!isPrem && !isAdmins) return 
 if (!m.quoted) return m.reply("*Balas Pesan Yang Ingin Dihapus Oleh Bot*")
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 await lenwy.sendMessage(m.chat, {
 delete: {
 remoteJid: m.chat,
 id: m.quoted.id,
 participant: m.quoted.sender,
 },
 })
}
break

case 'setdone': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextDone(m, teks)
m.reply(mess.success)
}
break

case 'done': {
if (!m.isGroup) return
if (!isAdmins) return
if (!m.quoted) return m.reply('⚠️ *Reply Pesan Si Pemesan*')
const quotedSender = m.quoted.sender;
const quotedSenderTag = `@${quotedSender.split("@")[0]}`; // Format tag pengirim yang dibalas
const yangmemesan = quotedSenderTag;
const query = q ? `*${q}*` : ''
let teks = `         ∧    ∧ ‎
 ☆ (๑╹ꇴ╹๑)  ☆
‎───〇─〇──ೇ .꒰ !! ꒱ 
╭┄꯭───ׂ──────꒰🫧꒱─────ׂ┄꯭───ׂ╮
│ ᥡᥱᥡᥡᥡ ⍴ᥱsᥲᥒᥲᥒ ${yangmemesan}
│ 𝗍ᥱᥣᥲһ sᥙᥴᥴsᥱs
│ sіᥣᥲkᥲᥒ ძі ᥴᥱk ȷᥲᥒgᥲᥒ ᥣᥙ⍴ᥲ ss ᥡᥲᥕᥕ 
│(●'▽'●)ゝ
│
│ 𝝑𝝔 𝘱𝘦𝘴𝘢𝘯𝘢𝘯  : ${query}
│ 𝝑𝝔 𝘵𝘢𝘯𝘨𝘨𝘢𝘭    : *${hariini}*
│ 𝝑𝝔 𝘸𝘢𝘬𝘵𝘶       : *${time}*
│ 𝝑𝝔 𝘴𝘦𝘵𝘢𝘵𝘶𝘴    : *Succes*
╰──ׂ┄꯭───ׂ┄꯭──────ׂ┄꯭───────╯`;

let settextdone = global.datagc[from].text_done
let usertag = `@${m.sender.split("@")[0]}`

if (settextdone.includes('@tagreply')) {
  if (m.quoted) {
    let userreply = `@${m.quoted.sender.split("@")[0]}`
    settextdone = settextdone.replace('@tagreply', userreply)
  } else {
    return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`)
  }
}

if (settextdone.includes('@pesanan')) {
  settextdone = settextdone.replace('@pesanan', query)
} 
if (settextdone.includes('@groupname')) {
  settextdone = settextdone.replace('@groupname', groupName)
} 
if (settextdone.includes('@tagdiri')) {
  settextdone = settextdone.replace('@tagdiri', usertag)
}
if (settextdone.includes('@jam')) {
  settextdone = settextdone.replace('@jam', jamnya)
}
if (settextdone.includes('@menit')) {
  settextdone = settextdone.replace('@menit', menitnya)
}
if (settextdone.includes('@detik')) {
  settextdone = settextdone.replace('@detik', detiknya)
}
if (settextdone.includes('@hari')) {
  settextdone = settextdone.replace('@hari', harinya)
}
if (settextdone.includes('@tanggal')) {
  settextdone = settextdone.replace('@tanggal', tanggalnya)
}
if (settextdone.includes('@bulan')) {
  settextdone = settextdone.replace('@bulan', bulannya)
}
if (settextdone.includes('@tahun')) {
  settextdone = settextdone.replace('@tahun', tahunnya)
}
if (settextdone.includes('@namabulan')) {
  settextdone = settextdone.replace('@namabulan', namabulannya)
}

if (!settextdone) {
  settextdone = teks
}

lenwy.sendMessage(m.chat, { text: settextdone, mentions: [quotedSender] }, { quoted: m })
}
break

case 'setproses': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextProses(m, teks)
m.reply(mess.success)
}
break

case 'proses': {
if (!m.isGroup) return
if (!isAdmins) return
if (!m.quoted) return m.reply('⚠️ *Reply Pesan Si Pemesan*')
const quotedSender = m.quoted.sender;
const quotedSenderTag = `@${quotedSender.split("@")[0]}`; // Format tag pengirim yang dibalas
const yangmemesan = quotedSenderTag;
const query = q ? `*${q}*` : ''
let teks = `         ∧    ∧ ‎
 ☆ (๑╹ꇴ╹๑)  ☆
‎───〇─〇──ೇ .꒰ !! ꒱ 
╭┄꯭───ׂ──────꒰🫧꒱─────ׂ┄꯭───ׂ╮
│ ⍴ᥱsᥲᥒᥲᥒ ${yangmemesan}
│ sᥱძᥲᥒg ძі ⍴r᥆sᥱs
│ m᥆һ᥆ᥒ ᥙᥒ𝗍ᥙk mᥱᥒᥙᥒggᥙ (๑'ᴗ')ゞ
│
│ 𝝑𝝔 𝘱𝘦𝘴𝘢𝘯𝘢𝘯  : ${query}
│ 𝝑𝝔 𝘵𝘢𝘯𝘨𝘨𝘢𝘭    : *${hariini}*
│ 𝝑𝝔 𝘸𝘢𝘬𝘁𝘂       : *${time}*
│ 𝝑𝝔 𝘴𝘦𝘁𝘢𝘁𝘶𝘀    : *Proses*
╰──ׂ┄꯭───ׂ┄꯭──────ׂ┄꯭───────╯`;
let settextproses = global.datagc[from].text_proses
let usertag = `@${m.sender.split("@")[0]}`

if (settextproses.includes('@tagreply')) {
  if (m.quoted) {
    let userreply = `@${m.quoted.sender.split("@")[0]}`
    settextproses = settextproses.replace('@tagreply', userreply)
  } else {
    return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`)
  }
}

if (settextproses.includes('@pesanan')) {
  settextproses = settextproses.replace('@pesanan', query)
} 
if (settextproses.includes('@groupname')) {
  settextproses = settextproses.replace('@groupname', groupName)
} 
if (settextproses.includes('@tagdiri')) {
  settextproses = settextproses.replace('@tagdiri', usertag)
}
if (settextproses.includes('@jam')) {
  settextproses = settextproses.replace('@jam', jamnya)
}
if (settextproses.includes('@menit')) {
  settextproses = settextproses.replace('@menit', menitnya)
}
if (settextproses.includes('@detik')) {
  settextproses = settextproses.replace('@detik', detiknya)
}
if (settextproses.includes('@hari')) {
  settextproses = settextproses.replace('@hari', harinya)
}
if (settextproses.includes('@tanggal')) {
  settextproses = settextproses.replace('@tanggal', tanggalnya)
}
if (settextproses.includes('@bulan')) {
  settextproses = settextproses.replace('@bulan', bulannya)
}
if (settextproses.includes('@tahun')) {
  settextproses = settextproses.replace('@tahun', tahunnya)
}
if (settextproses.includes('@namabulan')) {
  settextproses = settextproses.replace('@namabulan', namabulannya)
}

if (!settextproses) {
  settextproses = teks
}

lenwy.sendMessage(m.chat, { text: settextproses, mentions: [quotedSender] }, { quoted: m })
}
break

case 'ffstalk': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*Contoh :*\n> *ffstalk* 587531837')
try {
  let checkerResult = await (await fetch(`https://api.autoresbot.com/api/checker/ff?apikey=4c04faf21fb8524bad4a9cb7&user_id=${text}`)).json()
  m.reply(`Username: ${checkerResult.data.username || nicknameUser || '-'}
Id: ${text}`)
} catch (e) {
    m.reply('terjadi error :' + e)
}
}
break

case 'mlstalk': {
    if (!q) return m.reply(`*Contoh ${prefix + command} 696964467(8770)*`)
    // Memproses input untuk mendapatkan ID dan ID server
    let parts = q.split("(")
    let id = parts[0].trim()
    let serverId = parts[1] ? parts[1].replace(")", "").trim() : ""
    let checkerResult = await (await fetch(`https://api.autoresbot.com/api/checker/ml?apikey=4c04faf21fb8524bad4a9cb7&user_id=${id}&server=${serverId}`)).json()
    console.log(checkerResult)
    let data = await cekMl(id, serverId);
    let userData = data.message;
    let nicknameMatch = userData.match(/In-Game Nickname:\s*(\S+)/);
    let countryMatch = userData.match(/Country:\s*(\S+)/);
    let nicknameUser = nicknameMatch ? nicknameMatch[1] : 'Tidak ditemukan';
    let countryCode = countryMatch ? countryMatch[1] : 'Tidak ditemukan';
    let regionUser = cekRegionMl(countryCode);
    m.reply(`Username: ${nicknameUser || '-'}
Id: ${id}
Id Server: ${serverId}
Region: ${regionUser || checkerResult.data.this_login_country || '-'}`)
}
break

case 'jadinyata':
case 'toreal':
case 'toanime':
case 'jadianime': {
  if (!quoted) return m.reply(`*Fotonya Mana?*`)
  if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

  let { key } = await lenwy.sendMessage(m.chat, { text: mess.wait }, { quoted: m })
  let type = "anime2d";
  if (["jadinyata", "toreal"].includes(command)) {
    type = "anime2real";
  }

  try {
    let media = await lenwy.downloadAndSaveMediaMessage(quoted)
    let anu = await uploader60Minute(media)

    let ai = await fetch(`${api.xterm.url}/api/img2img/filters?action=${type}&url=${anu}&key=${api.xterm.key}`).then(a => a.json())
    console.log(ai)

    if (!ai.status) return m.reply(ai?.msg || "Error!")

    let tryng = 0;
    while (tryng < 55) {
      let s = await fetch(`${api.xterm.url}/api/img2img/filters/batchProgress?id=${ai.id}`).then(a => a.json())
      await lenwy.sendMessage(m.chat, { text: s?.progress || "Prepare...", edit: key }, { quoted: m })

      if (s.status == 3) {
        if (s.url) {
          return lenwy.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
        } else {
          return m.reply("Gambar tidak tersedia. Harap coba lagi atau beberapa saat lagi.")
        }
      }

      if (s.status == 4) {
        return m.reply("Maaf terjadi kesalahan. Coba gunakan gambar lain!")
      }

      await new Promise(resolve => setTimeout(resolve, 5000))
      tryng++;
    }
  } catch (e) {
    console.error(e)
    m.reply(`Terjadi kesalahan: ${e.message || 'Harap coba beberapa saat lagi'}`)
  }
}
break

case 'tocyberpunk':
case 'jadicyberpunk':
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply(`*Fotonya Mana?*`)
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    if (/image/.test(mime)) {
        try {
            m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
            let q = m.quoted ? m.quoted : m;
        
        
          
              let media = await q.download()
              let mem = await uploader60Minute(media)

            let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadicyberpunk?url=${mem}`)).json()
            let an = response.result;
            lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })

        } catch (error) {
            console.error('Error processing image:', error)
            m.reply('Harap coba beberapa saat lagi')
        }
    }
    break

    case 'todreamscape':
      case 'jadidreamscape':
          if (isBan) return m.reply(mess.ban)
          if (!quoted) return m.reply(`*Fotonya Mana?*`)
          if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
      
          if (/image/.test(mime)) {
              try {
                  m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                  let q = m.quoted ? m.quoted : m;
              
              
                
                    let media = await q.download()
                    let mem = await uploader60Minute(media)
      
                  let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadidreamscape?url=${mem}`)).json()
                  let an = response.result;
                  lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
      
              } catch (error) {
                  console.error('Error processing image:', error)
                  m.reply('Harap coba beberapa saat lagi')
              }
          }
          break

          case 'tocomic':
            case 'jadicomic':
                if (isBan) return m.reply(mess.ban)
                if (!quoted) return m.reply(`*Fotonya Mana?*`)
                if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
            
                if (/image/.test(mime)) {
                    try {
                        m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                        let q = m.quoted ? m.quoted : m;
                    
                    
                      
                          let media = await q.download()
                          let mem = await uploader60Minute(media)
            
                        let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadivaporwave?url=${mem}`)).json()
                        let an = response.result;
                        lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
            
                    } catch (error) {
                        console.error('Error processing image:', error)
                        m.reply('Harap coba beberapa saat lagi')
                    }
                }
                break

                case 'todonghua':
                  case 'jadidonghua':
                      if (isBan) return m.reply(mess.ban)
                      if (!quoted) return m.reply(`*Fotonya Mana?*`)
                      if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
                  
                      if (/image/.test(mime)) {
                          try {
                              m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                              let q = m.quoted ? m.quoted : m;
                          
                          
                            
                                let media = await q.download()
                                let mem = await uploader60Minute(media)
                  
                              let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadianime?url=${mem}`)).json()
                              let an = response.result;
                              lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
                  
                          } catch (error) {
                              console.error('Error processing image:', error)
                              m.reply('Harap coba beberapa saat lagi')
                          }
                      }
                      break

                      case 'todisney':
                        case 'jadidisney':
                            if (isBan) return m.reply(mess.ban)
                            if (!quoted) return m.reply(`*Fotonya Mana?*`)
                            if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
                        
                            if (/image/.test(mime)) {
                                try {
                                    m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                                    let q = m.quoted ? m.quoted : m;
                                
                                
                                  
                                      let media = await q.download()
                                      let mem = await uploader60Minute(media)
                        
                                    let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadidisney?url=${mem}`)).json()
                                    let an = response.result;
                                    lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
                        
                                } catch (error) {
                                    console.error('Error processing image:', error)
                                    m.reply('Harap coba beberapa saat lagi')
                                }
                            }
                            break

                            case 'toghibli':
                              case 'jadighibli':
                                  if (isBan) return m.reply(mess.ban)
                                  if (!quoted) return m.reply(`*Fotonya Mana?*`)
                                  if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
                              
                                  if (/image/.test(mime)) {
                                      try {
                                          m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                                          let q = m.quoted ? m.quoted : m;
                                      
                                      
                                        
                                            let media = await q.download()
                                            let mem = await uploader60Minute(media)
                              
                                          let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadighibli?url=${mem}`)).json()
                                          let an = response.result;
                                          lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
                              
                                      } catch (error) {
                                          console.error('Error processing image:', error)
                                          m.reply('Harap coba beberapa saat lagi')
                                      }
                                  }
                                  break

case 'fluxschenell':
case 'flux':
case 'txt2flux':
case 'texttoflux': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`*Mau Gambar Apa?*`)
// Kirim reaksi dan pesan tunggu
LenwyLD()
await sleep(200)
try{
let mauGambar = text
// Buat URL request dengan prompt dari pengguna
let result = await (await fetch(`https://endpoint.web.id/ai/flux-schnell?key=315602&prompt=${text}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
}
break

case 'photoleap':
case 'txt2photoleap':
case 'texttophotoleap': {
    if (isBan) return m.reply(mess.ban)
    if (!text) return m.reply(`*Mau Gambar Apa?*`)
    // Kirim reaksi dan pesan tunggu
    LenwyLD()
    await sleep(200)
    try {
        let mauGambar = text;
        // Buat URL request dengan prompt dari pengguna
        let result = await (await fetch(`https://endpoint.web.id/ai/photoleap?key=315602&prompt=${text}`)).json()
        
        // Ambil URL gambar dari result
        let imageUrl = result.result.result_url;
        
        // Kirim gambar
        lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
    } catch (error) {
        console.error(error) // Tambahkan ini untuk melihat error di konsol
        m.reply(mess.error)
    }
}
break

case '2waifu':
case 'towaifu':
case 'txt2waifu':
case 'texttowaifu': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*Mau Gambar Apa?*`)
  // Kirim reaksi dan pesan tunggu
  LenwyLD()
  await sleep(200)
  try {
      let mauGambar = text;
      // Buat URL request dengan prompt dari pengguna
      let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-waifu?key=315602&prompt=${text}`)).json()
      
      // Ambil URL gambar dari result
      let imageUrl = result.result.image;
      
      // Kirim gambar
      lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
  } catch (error) {
      console.error(error) // Tambahkan ini untuk melihat error di konsol
      m.reply(mess.error)
  }
}
break

case 'readmore': {
m.reply(`*Pemisahnya adalah "|"*\n\n*Contoh:*\n> ${command} Hai, |Nama Saya Adalah ${botname}`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
lenwy.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break

case 'tinyurl': {
  if (!text) return m.reply(`*Mana Link Yang Akan Di Pendekkan?*`)

  let urlToShorten = q; // Pastikan q berisi URL yang valid
  let response = await fetch(`https://api.ryzendesu.vip/api/tool/tinyurl?url=${urlToShorten}`)
  
  // Periksa apakah respons sukses
  if (!response.ok) {
      return m.reply(`*Error: ${response.status} ${response.statusText}*`)
  }
  
  let result = await response.json()
  let shortUrl = result.shortUrl;
  m.reply(shortUrl)
}
break

case 'rvo':
case 'readviewonce': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isQuotedViewOnce) return m.reply('*Reply Foto, Video Atau Voice Note Yang Di View Once*')
let type = m.quoted.mtype
let media = await downloadContentFromMessage(quoted, type === "audioMessage" ? "audio" : type === "imageMessage" ? "image" : "video");
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await lenwy.sendMessage(m.chat, { video: buffer, caption: `Caption: ${m.quoted?.fakeObj?.message.videoMessage.text || ''}` }, {quoted: m})
} else if (/image/.test(type)) {
await lenwy.sendMessage(m.chat, { image: buffer, caption: `Caption: ${m.quoted?.fakeObj?.message.imageMessage.text || ''}` }, {quoted: m})
} else if (/audio/.test(type)) {
await lenwy.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
}
}
break

case 'tovn': {
  if (!/audio|video/.test(mime)) return m.reply('*Reply ke pesan audio atau video*');

  if (/video/.test(mime)) {
    let media;
    try {
      media = await downloadContentFromMessage(quoted, type === "audioMessage" ? 'audio' : 'video');
    } catch (err) {
      console.log('Error saat download media:', err);
      return m.reply('*Gagal mengunduh media*');
    }
  
    if (!media) {
      return m.reply('*Media tidak valid*');
    }
  
    const tempFilePath = path.join(__dirname, `temp_${Date.now()}.${mime.includes('audio') ? 'mp3' : 'mp4'}`);
    const outputFilePath = path.join(__dirname, `output_${Date.now()}.mp3`);
    let buffer = Buffer.from([]);
  
    try {
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      fs.writeFileSync(tempFilePath, buffer);
    } catch (err) {
      console.log('Error saat memproses buffer:', err);
      return m.reply('*Gagal memproses media*');
    }
  
    if (mime.includes('video')) {
      try {
        await new Promise((resolve, reject) => {
          exec(`ffmpeg -i "${tempFilePath}" -vn -acodec libmp3lame -y "${outputFilePath}"`, (err) => {
            if (err) return reject(err);
            resolve();
          });
        });
        buffer = fs.readFileSync(outputFilePath);
      } catch (err) {
        console.log('Error saat konversi video ke audio:', err);
        return m.reply('*Gagal mengonversi video ke audio*');
      } finally {
        fs.unlinkSync(tempFilePath)
        if (fs.existsSync(outputFilePath)) fs.unlinkSync(outputFilePath);
      }
    }
  
    try {
      await lenwy.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    } catch (error) {
      console.log('Error saat mengirim pesan:', error);
    }  
  } else if (/audio/.test(mime)) {
    let media;
    try {
      media = await downloadContentFromMessage(quoted, 'audio');
    } catch (err) {
      console.log('Error saat mengunduh media:', err);
      return m.reply('*Gagal mengunduh media. Pastikan Anda mereply ke pesan audio yang valid.*');
    }
  
    let buffer = Buffer.from([]);
    try {
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
    } catch (err) {
      console.log('Error saat memproses buffer:', err);
      return m.reply('*Gagal memproses audio.*');
    }
  
    if (buffer.length === 0) {
      return m.reply('*Audio kosong atau gagal diproses.*');
    }
  
    try {
      await lenwy.sendMessage(m.chat, {
        audio: buffer,
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: m });
    } catch (error) {
      console.log('Error saat mengirim pesan:', error);
      return m.reply('*Gagal mengirim audio.*');
    }
  }
}
break

case 'bingimg': {
await lenwy.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
if (!text) return m.reply('Masukan Gambarannya\nContoh:\nAnime cowok memakai baju hitam sedang coding bertuliskan ${botname}')
m.reply('*Proses ini membutuhkan waktu beberapa saat silahkan tunggu*')
try {
let img = await fetchJson(`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`)
let imgs = img.image
let c = 0
for (let ims of img.image) {
if (c == 0) await lenwy.sendMessage(m.chat, { image: { url: ims }, caption: `*[ V1 ]* Bing ${botname} ☑\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await lenwy.sendMessage(m.sender, { image: { url: ims }}, { quoted: m })
c += 4
await sleep(200)
}
} catch {
m.reply('Terjadi kesalahan!')
}
}
break

case 'texttospeech': 
case 'tekstospeech': 
case 'txt2speech': 
case 'tts': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return m.reply(`*Mo Convert Text Apa Ke Suara?*`)
lenwy.sendMessage(m.chat, { audio: { url: `https://api.autoresbot.com/api/tts?text=${q}&apikey=4c04faf21fb8524bad4a9cb7` }, mimetype: 'audio/mp4' })
}
break

case 'sdxl':
case 'texttoanime':
case 'tekstoanime': 
case 'text2anime':
case 'teks2anime':
case 'txt2anime': {
if (!text) return m.reply(`*Mau Gambar Apa?*`)
// Kirim reaksi dan pesan tunggu
LenwyLD
await sleep(200)
LenwyLD()
await sleep(200)
try{
let mauGambar = text
// Buat URL request dengan prompt dari pengguna
let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-anime?key=315602&prompt=${q}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result.image }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
}
break

case 'welcome': {
if (!isAdmins) return
let args = m.text.split(' ').slice(1)
if (args.length < 1) return m.reply('Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan')
await updateWelcomeStatus(m, args[0])
}
break

case 'left': {
if (!isAdmins) return
let args = m.text.split(' ').slice(1)
if (args.length < 1) return m.reply('Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan')
await updateLeftStatus(m, args[0])
}
break

case 'setwelcome': {
if (!isAdmins) return
let teksnye = text ? text : ""
await updateTextWelcome(m, teksnye)
m.reply(mess.success)
}
break

case 'setleft': {
if (!isAdmins) return
let teksnye = text ? text : ""
await updateTextLeft(m, teksnye)
m.reply(mess.success)
}
break

case 'restart':
if (!isCreator) return m.reply(mess.owner)
if (text) return
m.reply(`restarting ${botname}`)
await sleep(1500)
process.exit()
break

case 'tagsubject':
case 'faketag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return
if (!q) return m.reply(`Teks Nya Mana Kak?`)
lenwy.sendMessage(m.chat, {
    text: "@"+m.chat,
    contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
            groupJid: m.chat,
            groupSubject: q
        }]
    }
})
}
break

case 'delsession': 
case 'delsesi': {
    if (!isCreator) return
    fs.readdir(`./${sessionName}`, async function(err, files) {
        if (err) {
            console.log('Unable to scan directory: ' + err)
            return m.reply('Unable to scan directory: ' + err)
        }
        let filteredArray = files.filter(item => 
            item.startsWith("pre-key") || 
            item.startsWith("sender-key") || 
            item.startsWith("session-") || 
            item.startsWith("app-state")
        )
        console.log(filteredArray.length)
        let teks = `Detected ${filteredArray.length} junk files\n\n`
        if (filteredArray.length === 0) return m.reply(teks)
        filteredArray.forEach((item, i) => {
            teks += (i + 1) + `. ${item}\n`
        })
        m.reply(teks)
        await sleep(200)
        m.reply("Menghapus session...")
        for (const file of filteredArray) {
            fs.unlinkSync(`./${sessionName}/${file}`)
        }
        await sleep(200)
        m.reply('Sukses menghapus session!')
    })
}
break

case 'delsampah': {
if (!isCreator) return
let directoryPath = path.join("./")
fs.readdir(directoryPath, async function (err, files) {
if (err) {
  return m.reply("Tidak dapat memindai direktori: " + err)
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
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function (e, i) {
  teks += i + 1 + `. ${e}\n`
})
m.reply(teks)
await sleep(200)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
  fs.unlinkSync(`./${file}`)
})
await sleep(200)
m.reply("Berhasil menghapus semua sampah")
  })
}
break

case 'catatan': {
if (text) return
let catat =`Fitur untuk Setopen dan Setclose
1. @groupname = menampilkan nama group
2. @tagdiri = mentag pengirim/sender
3. @tagreply = tag orang yang pesannya di reply
4. @jam = menampilkan jam saat ini
5. @menit = menampilkan menit saat ini
6. @detik = menampilkan detik saat ini
7. @hari = menampilkan hari saat ini
8. @tanggal = menampilkan tanggal saat ini
9. @bulan = menampilkan bulan saat ini
10. @tahun = menampilkan tahun saat ini
11. @namabulan = menampilkan nama bulan saat ini


Fitur untuk setdone dan setproses
1. @groupname = menampilkan nama group
2. @tagdiri = mentag pengirim/sender
3. @tagreply = tag orang yang pesannya di reply
4. @jam = menampilkan jam saat ini
5. @menit = menampilkan menit saat ini
6. @detik = menampilkan detik saat ini
7. @hari = menampilkan hari saat ini
8. @tanggal = menampilkan tanggal saat ini
9. @bulan = menampilkan bulan saat ini
10. @tahun = menampilkan tahun saat ini
11. @namabulan = menampilkan nama bulan saat ini
12. @pesanan = isi text untuk menjadikan nya bahan yang di pesan


Fitur untuk setwelcome dan setleft
1. @groupname = menampilkan nama group
2. @usertag = mentag user saat join atau left
3. @jam = menampilkan jam saat ini
4. @menit = menampilkan menit saat ini
5. @detik = menampilkan detik saat ini
6. @hari = menampilkan hari saat ini
7. @tanggal = menampilkan tanggal saat ini
8. @bulan = menampilkan bulan saat ini
9. @tahun = menampilkan tahun saat ini
10. @namabulan = menampilkan nama bulan saat ini


Fitur untuk setlist
1. @groupname = menampilkan nama group
2. @tagdiri = mentag pengirim/sender
3. @jam = menampilkan jam saat ini
4. @menit = menampilkan menit saat ini
5. @detik = menampilkan detik saat ini
6. @hari = menampilkan hari saat ini
7. @tanggal = menampilkan tanggal saat ini
8. @bulan = menampilkan bulan saat ini
9. @tahun = menampilkan tahun saat ini
10. @namabulan = menampilkan nama bulan saat ini`

m.reply(catat)
}
break

case 'statusgc': {
  try {
      const database = JSON.parse(fs.readFileSync('./src/database.json', 'utf8'))
      const databasegc = JSON.parse(fs.readFileSync('./database/databaseGroup.json', 'utf8'))
      // Cek apakah ID grup ada di dalam objek chats
      if (database.chats[from]) {
          const groupData = database.chats[from]
          const datasetgc = databasegc[from]
          let statusMessage = `*Status Grup*\n` +
                              `ID Grup: ${from}\n\n` +
                              `Wlcm: ${groupData.wlcm ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `left: ${groupData.left ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antitoxic1: ${groupData.antitoxic1 ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antitoxic2: ${groupData.antitoxic2 ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antilink: ${groupData.antilink ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antilinkyt: ${groupData.antilinkyt ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antilinktt: ${groupData.antilinktt ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antipanel: ${groupData.antipanel ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antiwame: ${groupData.antiwame ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `antilinkgc1: ${groupData.antilinkgc ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `antilinkgc2: ${groupData.antilinkgc2 ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `text_welcome: ${datasetgc.text_welcome}\n` +
                              `text_left: ${datasetgc.text_left}\n` +
                              `text_open: ${datasetgc.text_open}\n` +
                              `text_close: ${datasetgc.text_close}\n` +
                              `text_proses: ${datasetgc.text_proses}\n` +
                              `text_done: ${datasetgc.text_done}\n` +
                              `text_list: ${datasetgc.text_list}\n`
          m.reply(statusMessage)
      } else {
          m.reply('ID grup tidak ditemukan dalam database.')
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error)
      m.reply('Terjadi kesalahan saat membaca database.')
  }
}
break

case 'cekstatusakun': {
  if(!isCreator) return
  let statusDataMedan = await cekStatusAkunMedan()
  let statusDataDigi = await cekStatusAkunDigi()
    let mesnya = ` [ Status Akun ]
Nama Lengkap Kebsos: ${statusDataMedan.data.full_name}
Username Kebsos: ${statusDataMedan.data.username}
Saldo Kebsos: ${statusDataMedan.data.balance}

Saldo Topup: ${statusDataDigi.data.deposit}
`
m.reply(mesnya)
}
break

case 'ceksa': {                                                                                                    
 if(!isCreator) return
let statusDataDigi = await cekStatusAkunDigi()
let mesnya = ` [ Status Akun ]

Saldo Topup: ${statusDataDigi.data.deposit}
`
m.reply(mesnya)
}
break

case 'listlayanankebsos': {
  if (!isGcTopup) return
  if (!isCreator) return

  const layananData = await cekLayanan()
  if (layananData.data) {
    let categories = []
    
    // Mengambil kategori dari layanan
    layananData.data.forEach(service => {
      if (!categories.includes(service.category)) {
        categories.push(service.category)
      }
    })

    // Mengurutkan kategori secara alfabetik
    categories.sort()

    // Membuat tampilan dekorasi
    let replyMessage = `╭─ ─ ─ LIST KEBSOS OTOMATIS\n`

    // Menambahkan kategori dengan dekorasi .✦
    categories.forEach((category) => {
      replyMessage += `│ ── .✦ ${category}\n`
    })

    replyMessage += `╰╌╌╌╌╌╌╌╌╌╌╌╌`

    m.reply(replyMessage)
  } else {
    m.reply('Gagal mendapatkan daftar layanan.')
  }
}
break

case 'addkebsos': {
  if (!isCreator) return;

  // Membaca file JSON yang ada
  let daftarProduk;
  try {
    const data = fs.readFileSync('./scrape/daftarProdukLitensi.json');
    daftarProduk = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file JSON:', error);
    return m.reply('Gagal membaca daftar produk.');
  }

  // Mengambil data layanan
  const layananData = await cekLayanan();

  // Pastikan layananData ada dan sukses
  if (!layananData || layananData.length === 0) {
    return m.reply('Gagal mendapatkan data layanan.');
  }

  let dataProdukLitensi = layananData.data; // Ambil data produk dari layanan

  // Pastikan dataProdukLitensi terdefinisi dan valid
  if (!Array.isArray(dataProdukLitensi) || dataProdukLitensi.length === 0) {
    return m.reply('Data produk tidak ditemukan.');
  }

  // Mendapatkan input kategori dari pengguna
  const inputKategori = text.trim().toLowerCase(); // Misalnya "Instagram Followers"
  console.log(`Input kategori: ${inputKategori}`); // Debug log

  // Mencari semua produk berdasarkan kategori
  const produkDitemukan = dataProdukLitensi.filter(product => 
    product.category && product.category.toLowerCase() === inputKategori
  );

  if (produkDitemukan.length === 0) {
    return m.reply(`Kategori "${inputKategori}" tidak ditemukan.`);
  }

  let produkBaruDitambahkan = [];
  let produkGagalDitambahkan = [];

  // Memeriksa setiap produk dan menambahkannya ke daftar
  for (const produk of produkDitemukan) {
    if (!produk.name) {
      console.warn(`Produk tanpa nama ditemukan: ${JSON.stringify(produk)}`);
      continue; // Lewatkan produk yang tidak memiliki nama
    }

    // Mengecek apakah kategori sudah ada dalam daftar
    const kategoriAda = daftarProduk.some(item => 
      item.category && item.category.toLowerCase() === produk.category.toLowerCase()
    );

    if (kategoriAda) {
      // Jika kategori sudah ada, masukkan ke list gagal
      produkGagalDitambahkan.push(produk.category);
    } else {
      // Menambahkan kategori baru ke daftarProduk
      const produkBaru = {
        category: produk.category
      };

      daftarProduk.push(produkBaru);
      produkBaruDitambahkan.push(produkBaru.category); // Menyimpan kategori yang ditambahkan
    }
  }

  // Menyimpan kembali ke file JSON
  fs.writeFileSync('./scrape/daftarProdukLitensi.json', JSON.stringify(daftarProduk, null, 2));
  console.log('Data berhasil ditambahkan dalam daftarProdukLitensi.json');

  // Mengirimkan pesan hasil
  if (produkBaruDitambahkan.length > 0) {
    m.reply(`Kategori baru berhasil ditambahkan: ${text}.`);
  } else if (produkGagalDitambahkan.length > 0) {
    m.reply(`Gagal menambahkan kategori: ${text} sudah ada di file JSON.`);
  }
}
break

case 'delkebsos': {
  if (!isCreator) return;

  // Membaca file JSON yang ada
  let daftarProduk;
  try {
    const data = fs.readFileSync('./scrape/daftarProdukLitensi.json', 'utf-8');
    daftarProduk = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file JSON:', error);
    return m.reply('Gagal membaca daftar produk.');
  }

  // Mendapatkan input kategori dari pengguna
  const inputKategori = text.trim().toLowerCase(); // Misalnya "Instagram Followers"

  // Mencari produk berdasarkan kategori
  const produkSebelum = daftarProduk.length; // Menghitung jumlah produk sebelum penghapusan
  daftarProduk = daftarProduk.filter(product => product.category.toLowerCase() !== inputKategori);

  // Mengecek jika ada produk yang dihapus
  const produkSetelah = daftarProduk.length; // Menghitung jumlah produk setelah penghapusan
  const jumlahDihapus = produkSebelum - produkSetelah;

  // Menyimpan kembali ke file JSON
  fs.writeFileSync('./scrape/daftarProdukLitensi.json', JSON.stringify(daftarProduk, null, 2));
  console.log(`Data berhasil dihapus dalam daftarProdukLitensi.json`);

  // Mengirimkan pesan hasil
  if (jumlahDihapus > 0) {
    m.reply(`Berhasil menghapus ${jumlahDihapus} produk dengan kategori "${inputKategori}".`);
  } else {
    m.reply(`Tidak ada produk dengan kategori "${inputKategori}" yang ditemukan.`);
  }
}
break

case 'orderkebsos': {
  if (!isGcTopup) return
  if (!text) return m.reply(`Contoh: ${prefix + command} <code> <target> <quantity>\n\n> ${prefix + command} 9 merlinus 100`)
  
  let statusData = await cekStatusAkunMedan()
  if (statusData.data.balance <= 0) {
      return m.reply(`Transaksi Mu Dibatalkan. Tag Admin\n\n> Note: Saldo ${statusData.data.balance}`)
  }

  let userRole = getUserRole(m.sender)
  if (!userRole) return;

  let code = args[0];
  let target = args[1];
  let quantity = parseInt(args[2]) // Konversi ke integer

  if (!code || !target || isNaN(quantity) || quantity <= 0) {
      return m.reply(`Contoh: ${prefix + command} <code> <target> <quantity>\n\n> ${prefix + command} 9 merlinus 100`)
  }

  let result = await cekLayanan()
  if (!result) {
    return m.reply(`❌ Terjadi kesalahan saat memproses pesanan.`)
  }

  let rawDataProfit = fs.readFileSync('./scrape/profitnya.json')
  let profitData = JSON.parse(rawDataProfit)

  let selectedService = result.data.find(service => service.id.toString() === code)
  
  if (!selectedService) {
    return m.reply(`❌ Layanan dengan code ${code} tidak ditemukan.`)
  }

  // Ambil rate dari layanan yang dipilih dan konversi menjadi harga per 1 unit
  let hargaPerK = parseFloat(selectedService.price) / 1000;  // Membagi rate dengan 1000 untuk harga per unit
  console.log(selectedService.price)
  console.log(hargaPerK)
  // Hitung total price berdasarkan quantity
  let basePrice = Math.round(hargaPerK * quantity)  // Menghitung total harga
  // Jika basePrice kurang dari 1, atur menjadi 1
  if (basePrice < 1) {
      basePrice = 1;
  }

  // Hitung harga berdasarkan role user
  let adjustedPrice;
  if (userRole === "regular") {
      adjustedPrice = Math.round(basePrice * (1 + profitData.profitRegulKebsos / 100));
  } else if (userRole === "vip") {
      adjustedPrice = Math.round(basePrice * (1 + profitData.profitVipKebsos / 100));
  } else if (userRole === "mvip") {
      adjustedPrice = Math.round(basePrice * (1 + profitData.profitMvipKebsos / 100));
  } else if (userRole === "owner") {
      adjustedPrice = basePrice;
  }

  let userSaldo = await getUserSaldo(m.sender)
  if (userSaldo < adjustedPrice) {
      return m.reply(`❌ Saldo tidak cukup.\n> Saldo Anda: Rp ${userSaldo}\n> Harga Item: Rp ${adjustedPrice}`)
  }

  // Cek apakah sudah ada pemesanan pending
  let transactions = [];
  if (fs.existsSync('./scrape/processTopup.json')) {
      const data = fs.readFileSync('./scrape/processTopup.json')
      transactions = JSON.parse(data)
  }

  // Cek untuk transaksi dengan status pending
  let pendingTransaction = transactions.find(tx => tx.id === m.sender && tx.status === "pending" && tx.dari === "medanpedia")
  if (pendingTransaction) {
      return m.reply(`❌ Anda sudah memiliki pemesanan pending.
> Item: ${pendingTransaction.item}
> Tujuan: ${pendingTransaction.tujuan}
> Harga: - Rp ${pendingTransaction.harga}

𝗬 Proses 𝗡 Batal`)
  }

  // Buat transaksi dan simpan ke file
  let transaction = {
      id: m.sender,
      name: selectedService.name,
      item: code,
      tujuan: target,
      quantity: quantity,
      status: "pending",
      dari: "medanpedia",
      time: time2,
      harga: adjustedPrice
  };
  
  transactions.push(transaction)
  fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2))

  let teksnya = `‼ KONFIRMASI @${m.sender.split("@")[0]}
> Item: ${selectedService.name}
> Kode: ${code}
> Quantity: ${quantity}
> Tujuan: ${target}
> Harga/K: - Rp ${adjustedPrice}
» Saldo Awal: (Rp ${userSaldo})

𝗬 Proses 𝗡 Batal`;
  lenwy.sendMessage(m.chat, { text: teksnya, mentions: [m.sender] }, { quoted: m })
}
break

case 'cekorderankebsos': {
  if (!isGcTopup) return
  let idorderan = text;
  if (!idorderan) {
      return m.reply(`Contoh: ${prefix + command} idorderan`)
  }

let layananData = await cekStatusOrderanKebsos(idorderan)
console.log(layananData)
let teksnyee = `┌─ ❀*̥ 
┆ Status: ${layananData.data.status}
┆ Dimulai: ${layananData.data.start_count}
┆ Sisa: ${layananData.data.remains}
└───❀*̥˚──────────❀*̥˚┘`
lenwy.sendMessage(m.chat, { text: teksnyee }, { quoted: m })
}
break

case 'get': {
  if (!isGcTopup) {
    return m.reply('❌ Grup ini belum terdaftar sebagai grup topup. Hubungi admin untuk akses.');
  }

  // Ambil data produk dan profit
  let responseDigi = await cekLayananDigiPrabayar();
  let responseLitensi = await cekLayanan();
  let dataLitensi = responseLitensi.data;
  let dataProdukDigi = responseDigi.data;
  let dataProdukLitensi = JSON.parse(fs.readFileSync('./scrape/daftarProdukLitensi.json', 'utf8'));
  let userRole = getUserRole(m.sender);
  if (!userRole) return m.reply('❌ Kamu belum terdaftar sebagai user topup. Silakan daftar dulu.');

  const aliasMap = {
    ml: 'mobile legends',
    ff: 'free fire',
    pubg: 'pubg mobile',
    ttview: 'tiktok view'
  };

  let inputBrand = text.toLowerCase();
  inputBrand = aliasMap[inputBrand] || inputBrand || '-';

  let uniqueBrands = [...new Set(dataProdukDigi.map(product => product.brand.toLowerCase()))];
  let uniqueCategories = [...new Set(dataProdukLitensi.map(product => product.category.toLowerCase()))];

  let rawDataProfit = fs.readFileSync('./scrape/profitnya.json');
  let profitData = JSON.parse(rawDataProfit);

  let categories = {};
  dataProdukDigi.forEach(product => {
    let category = product.category;
    let brand = product.brand.toLowerCase();
    if (!categories[category]) {
      categories[category] = new Set();
    }
    categories[category].add(brand);
  });

  // Jika input adalah brand
  if (uniqueBrands.includes(inputBrand)) {
    let filteredProducts = dataProdukDigi.filter(product => product.brand.toLowerCase() === inputBrand);
    filteredProducts.sort((a, b) => a.price - b.price);
    let header = `     *LIST ${inputBrand.toUpperCase()}*\n\n`;
    let messages = filteredProducts.map(product => {
      let basePrice = product.price;
      let adjustedPrice = userRole === "regular" ? Math.round(basePrice * (1 + profitData.profitRegulTopup / 100)) :
        userRole === "vip" ? Math.round(basePrice * (1 + profitData.profitVipTopup / 100)) :
        userRole === "mvip" ? Math.round(basePrice * (1 + profitData.profitMvipTopup / 100)) : basePrice;
      let statusIcon = product.seller_product_status && product.buyer_product_status ? "✅" : "⛔";
      return `*${product.product_name}*
> *Kode Produk:* ${product.buyer_sku_code}
> *Harga :* ${adjustedPrice}
> *Status :* ${statusIcon}`;
    }).join('\n\n');
    lenwy.sendMessage(m.chat, { text: header + messages, mentions: [m.sender] }, { quoted: m });
  }
  // Jika input adalah kategori kebsos
  else if (uniqueCategories.includes(inputBrand)) {
    let filteredLitensi = dataLitensi.filter(product => product.category.toLowerCase() === inputBrand);
    filteredLitensi.sort((a, b) => a.price - b.price);
    if (filteredLitensi.length > 0) {
      let litensiMessages = filteredLitensi.map(product => {
        let basePrice = product.price;
        let adjustedPrice = userRole === "regular" ? Math.round(basePrice * (1 + profitData.profitRegulKebsos / 100)) :
          userRole === "vip" ? Math.round(basePrice * (1 + profitData.profitVipKebsos / 100)) :
          userRole === "mvip" ? Math.round(basePrice * (1 + profitData.profitMvipKebsos / 100)) : basePrice;
        return `${product.name}
> *Kode Produk :* ${product.id}
> *Harga/K :* ${adjustedPrice}
> *Min Pemesanan :* ${product.min}
> *Max Pemesanan:* ${product.max}\n`;
      }).join('\n\n');
      let header = `     *LIST ${inputBrand.toUpperCase()}*\n\n`;
      lenwy.sendMessage(m.chat, { text: header + litensiMessages, mentions: [m.sender] }, { quoted: m });
    } else {
      m.reply(`Tidak ada produk untuk kategori: ${inputBrand}`);
    }
  }
  // Jika input tidak ditemukan, tampilkan daftar semua produk
  else {
    let teksnyee = `╭─╸ *all produk topup* ⤸`;
    Object.keys(categories).sort().forEach(category => {
      teksnyee += `\n┃\n┃ *\`${category}\`*`;
      categories[category].forEach(brand => {
        let alias = Object.keys(aliasMap).find(key => aliasMap[key] === brand);
        teksnyee += `\n┃  ֢ ꤠ ${brand} ${alias ? `(${alias})` : ''}`;
      });
    });

    teksnyee += `\n╭─╸ *all produk kebsos* ⤸\n`;

    uniqueCategories.forEach(kategori => {
      let alias = Object.keys(aliasMap).find(key => aliasMap[key] === kategori);
      teksnyee += `┃  ֢ ꤠ ${kategori} ${alias ? `(${alias})` : ''}\n`;
    });

    teksnyee += '╰╸\n\n> Contoh: `get ml`';

    m.reply(teksnyee);
  }
}
break;

case 'addgctopup': {
  if (!isCreator) return
  const gcnya = m.chat; // Mendapatkan ID grup

  // Membaca file JSON yang ada
  let gcList;
  try {
    const data = fs.readFileSync('./scrape/gcTopup.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcTopup.json:', error);
    gcList = []; // Inisialisasi dengan array kosong jika terjadi kesalahan
  }

  // Memeriksa apakah ID grup sudah ada
  if (gcList.includes(gcnya)) {
    return m.reply(`Grup dengan ID "${gcnya}" sudah ada dalam daftar.`);
  }

  // Menambahkan ID grup ke daftar
  gcList.push(gcnya);

  // Menyimpan kembali ke file JSON
  fs.writeFileSync('./scrape/gcTopup.json', JSON.stringify(gcList, null, 2));
  console.log(`ID grup "${gcnya}" berhasil ditambahkan ke gcTopup.json`);
  m.reply(`ID grup "${gcnya}" berhasil ditambahkan ke daftar gcTopup.`);
}
break

case 'delgctopup': {
  if (!isCreator) return
  const gcnya = m.chat; // Mendapatkan ID grup

  // Membaca file JSON yang ada
  let gcList;
  try {
    const data = fs.readFileSync('./scrape/gcTopup.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcTopup.json:', error);
    gcList = []; // Inisialisasi dengan array kosong jika terjadi kesalahan
  }

  // Memeriksa apakah ID grup ada dalam daftar
  const index = gcList.indexOf(gcnya);
  if (index === -1) {
    return m.reply(`Grup dengan ID "${gcnya}" tidak ditemukan dalam daftar.`);
  }

  // Menghapus ID grup dari daftar
  gcList.splice(index, 1);

  // Menyimpan kembali ke file JSON
  fs.writeFileSync('./scrape/gcTopup.json', JSON.stringify(gcList, null, 2));
  console.log(`ID grup "${gcnya}" berhasil dihapus dari gcTopup.json`);
  m.reply(`ID grup "${gcnya}" berhasil dihapus dari daftar gcTopup.`);
}
break

case 'upgrade': {
  if (!isCreator) return;
  
  let teks;
  if (!m.quoted) {
    teks = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    var cek = await lenwy.onWhatsApp(teks.split("@")[0])
    if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
  } else {
    teks = m.quoted.sender;
  }

  let role = args[0]
  let user = teks;

  if (role !== "regular" && role !== "vip" && role !== "mvip" && role !== "owner") {
    return m.reply(`Role Hanya "regular", "vip", "mvip"`)
  }

  if (user.startsWith("0")) {
    return m.reply(`Nomor Harus Diawali Dengan Kode Nomor Negara (62)`)
  }

  upgradeRole(role, user)
  let teksnyee = `Pengguna @${user.split("@")[0]} berhasil diupgrade ke ${role}`
  lenwy.sendMessage(m.chat, { text: teksnyee, mentions: [user] }, { quoted: m })
}
break

case 'deposit': {
  if (!isCreator) return;
  if (!text) return m.reply(`Ada Dua Cara Deposit\n> 1. Menggunakan Nomor\nContoh: ${prefix + command} +10000 6285261255548\n\n> 2. Menggunakan Reply\nContoh: Reply Pesan Orang Yang Akan Di Deposit Lalu Ketik ${prefix + command} +10000`)

  let user;
  let penambahansaldo;

  // Memproses pengguna berdasarkan argumen atau pesan yang diterima
  if (!m.quoted) {
    user = args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    const cek = await lenwy.onWhatsApp(user.split("@")[0])
    if (cek.length < 1) return m.reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp\n\n> Contoh: ${prefix + command} +10000 6285261255548`)
    if (user.startsWith("0")) {
      return m.reply(`Nomor Harus Diawali Dengan Kode Nomor Negara (62)\n\n> Contoh: ${prefix + command} +10000 6285261255548`)
    }
  } else {
    user = m.quoted.sender;
  }

  // Mengambil dan memvalidasi jumlah saldo
  penambahansaldo = parseFloat(args[0])
  if (isNaN(penambahansaldo)) {
    return m.reply(`Jumlah harus berupa angka.`)
  }

  let isDeposit = args[0].startsWith('+')
  if (!isDeposit && !args[0].startsWith('-')) {
    return m.reply(`Jumlah harus diawali dengan + untuk menambah atau - untuk mengurangi.`)
  }

  if (!isDeposit) {
    penambahansaldo = -Math.abs(penambahansaldo)
  }

  let existingUser = await updateSaldo(user, penambahansaldo)

  if (existingUser) {
    let sukses = `Saldo Anda @${user.split("@")[0]} Berhasil ${isDeposit ? 'Ditambah' : 'Dikurangi'} ${Math.abs(penambahansaldo)}.`;
    lenwy.sendMessage(m.chat, { text: sukses, mentions: [user] }, { quoted: m })
  } else {
    let role = "regular";
    await upgradeRole(role, user)
    await sleep(200)
    await updateSaldo(user, penambahansaldo)
    let sukses = `Great, Role anda Regular dan Saldo anda @${user.split("@")[0]} Berhasil ${isDeposit ? 'Ditambah' : 'Dikurangi'} ${Math.abs(penambahansaldo)}.`;
    lenwy.sendMessage(m.chat, { text: sukses, mentions: [user] }, { quoted: m })
  }
}
break

case 'order': {
  if (!isGcTopup) return
  if (!text) return m.reply(`Contoh: ${prefix + command} <kode_produk> <nomor_pelanggan>\n\n> Jika game yang memiliki 2 id maka dipisah\n> order ml5 12345678 1234`)
  let statusData = await cekStatusAkunDigi()
  if (statusData.data.deposit = 0) {
      return m.reply(`Transaksi Mu Dibatalkan. Tag Admin\n\n> Note: ${orderResult.data.saldo}`)
  }
  let userRole = getUserRole(m.sender)
  if (!userRole) return

  let buyerSkuCode = args[0]
  let id = args[1]
  let serverId = args[2]
  let customerNo = id
  if (serverId) customerNo = id + serverId

  if (!buyerSkuCode || !customerNo) {
      return m.reply(`Contoh: ${prefix + command} <kode_produk> <nomor_pelanggan>\n\n> Jika game yang memiliki 2 id maka dipisah\n> order ml5 12345678 1234`)
  }

  let result = await cekItemDigi(buyerSkuCode)
  if (!result || !result.data) {
      return m.reply(`❌ Terjadi kesalahan saat memproses pesanan.`)
  }

  let rawDataProfit = fs.readFileSync('./scrape/profitnya.json')
  let profitData = JSON.parse(rawDataProfit)
  let userName = '-'
  if (serverId) {
    let checkerResult = await (await fetch(`https://api.autoresbot.com/api/checker/ml?apikey=4c04faf21fb8524bad4a9cb7&user_id=${id}&server=${serverId}`)).json()
    console.log(checkerResult)
    let data = await cekMl(id, serverId);
    let userData = data.message;
    let nicknameMatch = userData.match(/In-Game Nickname:\s*(\S+)/);
    let nicknameUser = nicknameMatch ? nicknameMatch[1] : 'Tidak ditemukan';
    userName = checkerResult.data.username || nicknameUser || customerNo || '-'
  }
  let basePrice = result.data[0].price;


  // Hitung harga berdasarkan role user
  let adjustedPrice;
  
  if (userRole === "regular") {
      adjustedPrice = Math.round(basePrice * (1 + profitData.profitRegulTopup / 100));
  } else if (userRole === "vip") {
      adjustedPrice = Math.round(basePrice * (1 + profitData.profitVipTopup / 100));
  } else if (userRole === "mvip") {
      adjustedPrice = Math.round(basePrice * (1 + profitData.profitMvipTopup / 100));
  } else if (userRole === "owner") {
      adjustedPrice = basePrice;
  }

  let userSaldo = await getUserSaldo(m.sender)
  if (userSaldo < adjustedPrice) {
      return m.reply(`❌ Saldo tidak cukup.\n> Saldo Anda: Rp ${userSaldo}\n> Harga Item: Rp ${adjustedPrice}`)
  }

  // Cek apakah sudah ada pemesanan pending
  let transactions = []
  if (fs.existsSync('./scrape/processTopup.json')) {
      const data = fs.readFileSync('./scrape/processTopup.json')
      transactions = JSON.parse(data)
  }

  // Cek untuk transaksi dengan status pending
  let pendingTransaction = transactions.find(tx => tx.id === m.sender && tx.status === "pending" && tx.dari === "digiflazz")
  if (pendingTransaction) {
      return m.reply(`❌ Anda sudah memiliki pemesanan pending.\n> Item: ${pendingTransaction.item}\n> Id: ${pendingTransaction.tujuan}\n> Harga: - Rp ${pendingTransaction.harga}\n\n𝗬 Proses 𝗡 Batal`)
  }

  // Buat transaksi dan simpan ke file
  let transaction = {
      id: m.sender,
      ref_id: result.data.ref_id,
      item: buyerSkuCode,
      tujuan: customerNo,
      nama: result.data[0].product_name,
      status: "pending",
      dari: "digiflazz",
      time: time2,
      harga: adjustedPrice,
      username: userName
  };
  
  transactions.push(transaction)
  fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2))

  let teksnya = `‼ KONFIRMASI @${m.sender.split("@")[0]}
> Nama Produk: ${result.data[0].product_name}
> Kode Produk: ${buyerSkuCode}
> Id: ${customerNo}
> Nickname: ${userName}
> Harga: - Rp ${adjustedPrice}
» Saldo Awal: (Rp ${userSaldo})

𝗬 Proses 𝗡 Batal`
  lenwy.sendMessage(m.chat, { text: teksnya, mentions: [m.sender] }, { quoted: m })
}
break

case 'y': {
  let transactions = [];
  if (fs.existsSync('./scrape/processTopup.json')) {
    const data = fs.readFileSync('./scrape/processTopup.json');
    transactions = JSON.parse(data);
  }

  let transactionIndex = transactions.findIndex(t => t.id === m.sender && t.status === "pending");

  if (transactionIndex !== -1) {
    let transaction = transactions[transactionIndex];

    // Cek dari mana transaksi berasal
    if (transaction.dari === "digiflazz") {
      let buyerSkuCode = transaction.item; // item sebagai buyerSkuCode
      let customerNo = transaction.tujuan; // tujuan sebagai customerNo
      let orderResult = await orderDigi(buyerSkuCode, customerNo);

      transactions[transactionIndex].status = "Processing";
      fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2));
      console.log(orderResult);

      let refId = orderResult.data.ref_id; // ref_id yang diterima dari hasil order
      // Fungsi untuk cek status transaksi Digiflazz
      lenwy.sendMessage(m.chat, { text: `Heyy, Wait. . .` }, { quoted: m });

      // Update saldo pengguna terlebih dahulu, sebelum pengecekan status
      let updated = await updateSaldo(m.sender, -transaction.harga);
      if (!updated) {
        m.reply(`❌ Gagal memperbarui saldo.`);
        return;
      }
      let newSaldo = await getUserSaldo(m.sender);

      const checkDigiOrderStatus = async () => {
        const orderStatus = await cekOrderanDigi(refId, buyerSkuCode, customerNo);
        let SN = orderStatus.data.sn // SN yang diterima dari hasil order
        console.log(orderStatus);

        if (orderStatus && orderStatus.data.status === "Sukses") {
          // Transaksi berhasil
          clearInterval(intervalId); // Hentikan pengecekan

          let teksnya = `✅ Transaksi Sukses @${m.sender.split("@")[0]}
> Invoice: ${refId}
> Tanggal: ${hariini}
> Item: ${transaction.nama}
> Kode: ${buyerSkuCode}
> Tujuan: ${customerNo}
> Sn: ${SN}
> Harga: Rp ${transaction.harga}

> Saldo Akhir: (Rp ${newSaldo})`;
          lenwy.sendMessage(m.chat, { text: teksnya, mentions: [m.sender] }, { quoted: m });

          transactions[transactionIndex].status = "Sukses";
          transactions.splice(transactionIndex, 1); // Hapus transaksi
          fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2)); // Update file
        } else if (orderStatus.data.status === "Pending") {
          console.log("Status transaksi masih dalam proses, mencoba lagi...");
        } else {
          clearInterval(intervalId);
          await updateSaldo(m.sender, transaction.harga); // Mengembalikan saldo
          m.reply(`❌ Ada Yang Gagal. Tag Admin

 Note:
> Status: ${orderStatus ? orderStatus.data.status : "Tidak ada informasi status."}
> Pesan: ${orderStatus.data.message}`);
        }
      };

      const intervalId = setInterval(checkDigiOrderStatus, 7000);
    } else if (transaction.dari === "medanpedia") {
      let { item: code, tujuan, quantity, harga } = transaction;

      // Memulai order layanan
      let orderResult = await orderLayanan(code, tujuan, quantity);
      console.log(orderResult);

      transactions[transactionIndex].status = "Processing";
      fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2));

      // Update saldo pengguna terlebih dahulu, sebelum pengecekan status
      let updated = await updateSaldo(m.sender, -transaction.harga);
      if (!updated) {
        m.reply(`❌ Gagal memperbarui saldo.`);
        return;
      }
      let newSaldo = await getUserSaldo(m.sender);

      let idOrderan = orderResult.data.id.toString(); // ID pesanan
      if (orderResult.status === true && transactions[transactionIndex].status === "Processing") {
        // Kirim pesan sementara dengan ID order
        lenwy.sendMessage(m.chat, { text: `Heyy, Wait. . . Id order anda: ${orderResult.data.id}` }, { quoted: m });

        const checkStatus = async () => {
          console.log(idOrderan);
          let currentStatus = await cekStatusOrderanKebsos(idOrderan);
          console.log(currentStatus); // Debugging status

          if (currentStatus.status === false || !currentStatus.data) {
            clearInterval(intervalId); // Hentikan pengecekan
            transactions.splice(transactionIndex, 1); // Hapus transaksi dari array
            fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2)); // Update file
            // Mengembalikan saldo jika gagal
            await updateSaldo(m.sender, transaction.harga); // Mengembalikan saldo
            m.reply(`❌ Transaksi Error. Tag Admin\n\n> Note: ${currentStatus.msg || "Tidak ada informasi status."}`);
            return;
          }

          if (currentStatus.data.status === "Success") {
            clearInterval(intervalId); // Hentikan pengecekan

            let teksnya = `✅ Transaksi Sukses @${m.sender.split("@")[0]}
> Invoice: ${idOrderan}
> Item: ${transaction.nama}
> Kode: ${code}
> Tujuan: ${tujuan}
> Quantity: ${quantity}
> Harga: Rp ${harga}

> Saldo Akhir: (Rp ${newSaldo})`;
            lenwy.sendMessage(m.chat, { text: teksnya, mentions: [m.sender] }, { quoted: m });

            transactions[transactionIndex].status = "Sukses";
            transactions.splice(transactionIndex, 1);
            fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2)); // Update file
          } else if (currentStatus.data.status === "Partial" || currentStatus.data.status === "Processing" || currentStatus.data.status === "Pending") {
            console.log(`Transaksi masih dalam status ${currentStatus.data.status}, akan coba lagi.`);
          } else {
            clearInterval(intervalId); // Hentikan pengecekan
            transactions.splice(transactionIndex, 1); // Hapus transaksi dari array
            fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2)); // Update file
            // Mengembalikan saldo jika gagal
            await updateSaldo(m.sender, transaction.harga); // Mengembalikan saldo
            m.reply(`❌ Transaksi Gagal. Tag Admin
              
 Note:
> Status: ${currentStatus.data.status || '-'}
> Pesan: ${currentStatus.msg}`);
          }
        };

        // Set interval untuk mengecek status setiap 30 detik
        const intervalId = setInterval(checkStatus, 30000);
      } else {
        console.log(orderResult);
        await updateSaldo(m.sender, transaction.harga); // Mengembalikan saldo
        m.reply(`❌ Transaksi Gagal. Tag Admin
          
 Note:
> ${orderResult.msg || "Tidak ada informasi status."}`);
      }
    }
  }
}
break

case 'n': {
  let transactions = []
  if (fs.existsSync('./scrape/processTopup.json')) {
      const data = fs.readFileSync('./scrape/processTopup.json')
      transactions = JSON.parse(data)
  }

  let transactionIndex = transactions.findIndex(t => t.id === m.sender && t.status === "pending")

  if (transactionIndex !== -1) {
      transactions[transactionIndex].status = "Batal";
      m.reply(`❌ Transaksi dibatalkan
> Item: ${transactions[transactionIndex].nama}
> Kode: ${transactions[transactionIndex].item}
> Harga: ${transactions[transactionIndex].harga}`)

      transactions.splice(transactionIndex, 1)
      fs.writeFileSync('./scrape/processTopup.json', JSON.stringify(transactions, null, 2))
  }
}
break

case 'saldo': {
  if (text) return
  let users = JSON.parse(fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8'))
  let user = users.find(u => u.id === m.sender)
  if (user) {
    let teksnye = (`[ Data Anda ]\n\n> Nama: ${pushname}\n> Role: ${user.role}\n> Saldo: Rp ${user.saldo}`)
    lenwy.sendMessage(m.chat, { text : teksnye, mentions : [m.sender]}, { quoted : m })
  }
}
break

case 'profit': {
if (!isCreator) return
if (text) return
let rawDataProfit = fs.readFileSync('./scrape/profitnya.json')
let profitData = JSON.parse(rawDataProfit)
m.reply(`[ Persentase profit ]
> Profit Topup
Regular: ${profitData.profitRegulTopup}
Vip: ${profitData.profitVipTopup}
Mvip: ${profitData.profitMvipTopup}

> Profit Kebsos
Regular: ${profitData.profitRegulKebsos}
Vip: ${profitData.profitVipKebsos}
Mvip: ${profitData.profitMvipKebsos}

NOTE:
5 = 5%
Edit Profit? ketik ${prefix}setprofit`)
}
break

case 'setprofit': {
  if (!isCreator) return;
  if (!text) return m.reply(`Contoh: ${prefix + command} topup 7 5 2

Note:
2 = 2%
Format: ${prefix + command} jenis persenRegular persenVip persenMvip`);

  if (args[0] !== "topup" && args[0] !== "kebsos") return m.reply(`Masukkan profit apa yang mau di edit.
> Contoh: ${prefix + command} topup 7 5 2

Note:
Hanya bisa ${prefix + command} topup atau ${prefix + command} kebsos`);

  let rawData = fs.readFileSync('./scrape/profitnya.json');
  let profitData = JSON.parse(rawData);

  // Pastikan argumen diisi
  if (!args[1] || !args[2] || !args[3]) {
      return m.reply(`Semua nilai profit harus diisi.`);
  }

  // Update nilai sesuai jenis yang dipilih
  if (args[0] === "topup") {
      profitData.profitRegulTopup = parseInt(args[1]);
      profitData.profitVipTopup = parseInt(args[2]);
      profitData.profitMvipTopup = parseInt(args[3]);
  } else if (args[0] === "kebsos") {
      profitData.profitRegulKebsos = parseInt(args[1]);
      profitData.profitVipKebsos = parseInt(args[2]);
      profitData.profitMvipKebsos = parseInt(args[3]);
  }

  // Simpan perubahan ke JSON
  try {
      fs.writeFileSync('./scrape/profitnya.json', JSON.stringify(profitData, null, 2));
  } catch (err) {
      return m.reply('❌ Gagal menyimpan perubahan.');
  }

  // Kirim pesan konfirmasi
  m.reply(`✅ Profit ${args[0]} berhasil diperbarui:
Regular: ${args[1]}%
Vip: ${args[2]}%
Mvip: ${args[3]}%`);
}
break

case 'daftar': {
  if (!isGcTopup) return
  if (text) return
  let check = getUserTopup (m.sender)
  if (check === true) return m.reply(`Daftar ulang saldo akan di reset, anda mau?`)
  let role = `regular`
  let user = m.sender
  let upgrade = await upgradeRole(role, user)
  let rolenya = await getUserRole(user)
  let saldonya = await getUserSaldo(user)
  await sleep(200)
  let checkLagi = getUserTopup (user)
  if (checkLagi === true) {
m.reply(`[ Berhasil Mendaftar ]

> Id: ${m.sender}
> Role: ${rolenya}
> Saldo: ${saldonya}`)
}
}
break

case 'cekdata': {
  if (!isCreator) return
  let user
  if (!m.quoted && !budy.includes('@')) {
    user = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  
    const cek = await lenwy.onWhatsApp(user.split("@")[0])
    if (cek.length < 1) return m.reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp\n\n> Contoh: ${prefix + command} 6285261255548`)
    if (user.startsWith("0")) {
      return m.reply(`Nomor Harus Diawali Dengan Kode Nomor Negara (62)\n\n> Contoh: ${prefix + command} 6285261255548`)
    }
  } else if (!m.quoted && budy.includes('@')) {
	user = text.split('@')[1] + '@s.whatsapp.net'
    const cek = await lenwy.onWhatsApp(user.split("@")[0])
    if (cek.length < 1) return m.reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp\n\n> Contoh: ${prefix + command} @6285261255548`)
  } else if (m.quoted && !budy.includes('@')) {
      user = m.quoted.sender
  } else {
      m.reply(`Hanya bisa
1. ${prefix + command} @User
2. ${prefix + command} 6285261255548
3. ${prefix + command} sambil reply chat yang mau di cek data`)
  }

  let check = getUserTopup (user)
  let rolenya = await getUserRole(user)
  let saldonya = await getUserSaldo(user)
  if (check === false) return m.reply(`User belum terdaftar`)
  else if (check === true) return m.reply(`[ Data User ]

> Id: ${user}
> Role: ${rolenya}
> Saldo: ${saldonya}`)
}
break

case 'detailproduk': {
  if (!text) return m.reply(`*Masukkan nama item nya*`)
  let resultdigi = await cekItemDigi(text)
  let resultkebsos = await cekLayanan()
  console.log(resultdigi)
  let selectedService = resultkebsos.data.find(service => service.id.toString() === text)
  console.log(selectedService)
  let rawDataProfit = fs.readFileSync('./scrape/profitnya.json')
  let profitData = JSON.parse(rawDataProfit)
  if (resultdigi) {
      let basePrice = resultdigi.data[0].price
      let hargaRegul = Math.round(basePrice * (1 + profitData.profitRegulTopup / 100));
      let hargaVip = Math.round(basePrice * (1 + profitData.profitVipTopup / 100));
      let hargaMvip = Math.round(basePrice * (1 + profitData.profitMvipTopup / 100));
      let statusIcon = resultdigi.data[0].seller_product_status && resultdigi.data[0].buyer_product_status ? "✅" : "⛔"
      m.reply(`───〔 *Detail Produk Topup* 〕───
» *Nama Produk:* ${resultdigi.data[0].product_name}
» *Kategori:* ${resultdigi.data[0].category}
» *Brand:* ${resultdigi.data[0].brand}
» *Stok:* ${resultdigi.data[0].stock}
» *Harga Regular:* ${hargaRegul}
» *Harga Vip:* ${hargaVip}
» *Harga Mvip:* ${hargaMvip}
» *Deskripsi:* ${resultdigi.data[0].desc}
» *Status:* ${statusIcon}`)
  }
  if (selectedService) {
      let basePrice = selectedService.price
      let hargaRegul = Math.round(basePrice * (1 + profitData.profitRegulKebsos / 100));
      let hargaVip = Math.round(basePrice * (1 + profitData.profitVipKebsos / 100));
      let hargaMvip = Math.round(basePrice * (1 + profitData.profitMvipKebsos / 100));
      m.reply(`───〔 *Detail Produk Kebsos* 〕───
» *Nama Produk:* ${selectedService.name}
» *Kategori:* ${selectedService.category}
» *Minimal Order:* ${selectedService.min}
» *Maksimal Order:* ${selectedService.max}
» *Harga Regular/K:* ${hargaRegul}
» *Harga Vip/K:* ${hargaVip}
» *Harga Mvip/K:* ${hargaMvip}
» *Deskripsi:* ${selectedService.description}
» *Rata-rata pengerjaan:* ${selectedService.average_time}`)
  }
}
break







case 'getcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: "getcase menu"`)

  try {
      const caseResult = getcase(text)
      m.reply(caseResult)
  } catch (error) {
      m.reply(`${error.message}`)
  }
}
break


case 'addcase': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Masukan Input`)
if (!q.includes("|")) return m.reply("*Format Perintah Tidak Valid. Gunakan: addcase <case(dibawahCaseMana)>|case \"casenya\">{ ... } break*")
let tempat = q.split("|")[0]
let casenya = q.split("|")[1]
let newCase = casenya
let fileContent = fs.readFileSync("./lenwy.js", "utf-8")
let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case "${tempat}":`))
if (breakIndex !== -1) {
fileContent = fileContent.slice(0, breakIndex + 6) + newCase + fileContent.slice(breakIndex + 6)
fs.writeFileSync("./lenwy.js", fileContent, "utf-8")
m.reply(`*Case Baru*\n\n"${casenya}"\n\n*Berhasil Ditambahkan Di Bawah Case :"${tempat}"!*`)
} else {
m.reply(`*Tidak dapat menemukan break di case "${tempat}".`)
}
}
break

case 'editcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: ${prefix + command} <nama_case>|<case_baru>`)
  
  let [caseName, ...newContentArr] = text.split('|')
  caseName = caseName.trim()
  let newContent = newContentArr.join('|').trim()
  
  if (!caseName || !newContent) {
      return m.reply(`Contoh:\n\n${prefix + command} hai|case 'hai':\n{m.reply('Hai juga')\n}\nbreak`)
  }
  
  const fs = require('fs')
  const filePath = './lenwy.js';
  
  try {
      if (!fs.existsSync(filePath)) {
          return m.reply(`File bot tidak ditemukan.`)
      }
      
      let fileContent = fs.readFileSync(filePath, 'utf-8')
      const regex = new RegExp(`case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break`, 'g')
      if (!regex.test(fileContent)) {
          return m.reply(`Case *${caseName}* tidak ditemukan.`)
      }
      const updatedFileContent = fileContent.replace(regex, `${newContent}`)
      fs.writeFileSync(filePath, updatedFileContent, 'utf-8')
      m.reply(`Case *${caseName}* berhasil diedit.`)
  } catch (error) {
      console.error('Error:', error)
      return m.reply('Terjadi kesalahan saat mengedit case. Coba lagi nanti.')
  }
}
break

case 'delcase': {
if (!isCreator) return m.reply(mess.owner)
if (!q)
return m.reply("Masukan nama case yang akan di hapus")
dellCase("./lenwy.js", q)
}
break

case 'listcase':
case 'listfitur': {
m.reply(listCase())
}
break

case 'totalfeature':
case 'totalfitur': 
case 'totalcmd': 
case 'totalcommand':
m.reply(`Hallo ${pushname}
Saat ini ${botname} memiliki total fitur ${totalfitur()}`)
break

case 'cekcase': {
if (!isCreator) return
if (!text) return m.reply(`Contoh: ${prefix+command} caseName`)
const caseName = text.trim()
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${prefix+command} caseName`)
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./lenwy.js", "utf-8")
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g')
const match = fileContent.match(caseRegex)
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n')
const caseLines = match[0].split('\n')
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekCase(caseName)
if (result.error) {
m.reply(result.error)
} else if (result.found) {
const message = `*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

Mau sekalian di ambil? Ketik getcase ${caseName}`
m.reply(message)
} else {
m.reply(`Case '${caseName}' tidak ditemukan.`)
}
}
break





























//----------------------------------------------------------------------------------------------------------------------------------------------------------
case 'setppsewa': {
  if (!isCreator) return m.reply(mess.owner);
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);
  
  const path = './data/image/fotosewa'; // Menentukan path file foto
  
  // Cek apakah file sudah ada, jika ada maka dihapus
  if (fs.existsSync(path)) {
    fs.unlinkSync(path); // Menghapus file yang sudah ada
    console.log(`File "${path}" berhasil dihapus.`);
  }

  // Mengunduh dan menyimpan gambar yang di-quote ke file baru
  await lenwy.downloadAndSaveMediaMessage(quoted, path);

  m.reply('Foto berhasil diperbarui menjadi foto sewa.');
}
break

case 'changewdsewa': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_sewa = teksnya
m.reply(mess.success)
}
break

case 'changewdppj': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_ppj = teksnya
m.reply(mess.success)
}
break

case 'sewa': {
  async function createImage(url) {
    // Generating the image message content with a URL or local file path
    const { imageMessage } = await generateWAMessageContent({
      image: { url }  // This will accept a URL or file path
    }, {
      upload: lenwy.waUploadToServer
    });
    return imageMessage; // Return the generated imageMessage
  }
  
  let tekssewa = global.text_sewa ? global.text_sewa : `               /) /) \n             („• ֊ •„) \n╭───̇─∪─∪──̇──┈◯\n│❛ SEWA BOT ${botname} ˚\n│\n│1 вυℓαη : 𝖱𝗉 5.000\n│2 вυℓαη : 𝖱𝗉 10.000\n│𝟥 вυℓαη : 𝖱𝗉 15.000\n│𝟦 вυℓαη : 𝖱𝗉 18.000\n│𝟧 вυℓαη : 𝖱𝗉 21.000\n╰───────────✧✧✧`
  let teksppj = global.text_ppj ? global.text_ppj : '\n\n ╭─────────────❍\n │ ʚ˚̣̣̣͙ɞ・𝙥𝙚𝙧𝙥𝙖𝙣𝙟𝙖𝙣𝙜・ \n │\n │1 вυℓαη : 𝖱𝗉 5.000\n │𝟤 вυℓαη : 𝖱𝗉 10.000\n │𝟥 вυℓαη : 𝖱𝗉 15.000\n │ρєямαηєη : 𝖱𝗉 80.000\n │Tidak Ada,\n │Yang Abadi Tuan\n ╰─────────────❍'

  // Check if file exists and create the image accordingly
  let imageUrl
  if (fs.existsSync('./data/image/fotosewa.jpg')) {
      imageUrl = await createImage('./data/image/fotosewa.jpg');
  } else if (fs.existsSync('./data/image/fotosewa.png')) {
      imageUrl = await createImage('./data/image/fotosewa.png');
  } else if (fs.existsSync('./data/image/fotosewa.webp')) {
      imageUrl = await createImage('./data/image/fotosewa.webp');
  } else {
      return m.reply(`Foto tidak tersedia, kamu harus ${prefix}setppsewa terlebih dahulu`)
  }

  const push = [{
    body: proto.Message.InteractiveMessage.Body.fromObject({
        text: tekssewa
    }),
    footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `Klik Admin Dibawah Ya`
    }),
    header: proto.Message.InteractiveMessage.Header.fromObject({
        hasMediaAttachment: true,
        imageMessage: imageUrl
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
            {
                name: "cta_url",
                buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Nyewa&type=phone_number&app_absent=0"}`
            },
            {
                name: "cta_url",
                buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0AAda+Yang+Bug+Nih&type=phone_number&app_absent=0"}`
            }
        ]
    })
  }, {
    body: proto.Message.InteractiveMessage.Body.fromObject({
        text: teksppj
    }),
    footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `Klik Admin Dibawah Ya`
    }),
    header: proto.Message.InteractiveMessage.Header.fromObject({
        hasMediaAttachment: true,
        imageMessage: imageUrl
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
            {
                name: "cta_url",
                buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Perpanjang&type=phone_number&app_absent=0"}`
            },
            {
                name: "cta_url",
                buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0AAda+Yang+Bug+Nih&type=phone_number&app_absent=0"}`
            }
        ]
    })
  }];

  // Sending the message
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: 'Berikut Daftarnya',
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `> ${botname}`,
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: false
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: push
                })
            })
        }
    }
  }, { quoted: m });

  await lenwy.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break

case 'addsewa':
case 'tambahsewa': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) m.reply(`Ada 2 cara untuk melakukan ${prefix + command} ini:
1. ${prefix + command} di lakukan di dalam grup
2. ${prefix + command} di lakukan di private chat bot`)
  await sleep(500)
  if (m.isGroup) {
    try {
      let [duration] = text.split(' ')
      if (!duration) return m.reply(`Durasi harus diisi!
Contoh:
${prefix + command} 30d

*LIST WAKTU*
d = days
h = hours
m = minutes
s = seconds`)
      const groupId = from;
      let rawData = fs.readFileSync(pathsewa)
      let sewa = JSON.parse(rawData)
      const groupExists = sewa.some(entry => entry.groupId === groupId)
      if (groupExists) {
        return m.reply(`Sudah ada dalam daftar sewa.`)
      }
      addSewaGroup (groupId, duration, sewa)
      m.reply(`Berhasil menambahkan grup ke daftar sewa dengan durasi ${duration}.`)
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message)
      m.reply('Gagal menambahkan grup sewa. Silakan coba lagi.')
    }
  } else {
    try {
      let [duration, linkRegex] = text.split(' ')
      if (!duration || !linkRegex) return m.reply(`Durasi dan link grup harus diisi!
Contoh:
${prefix + command} 30d https://chat.whatsapp.com/****

*LIST WAKTU*
d = days
h = hours
m = minutes
s = seconds`)
      let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
      try {
        let cobaJoin = await lenwy.groupAcceptInvite(coded)
        console.log(cobaJoin)
        m.reply('Bot berhasil bergabung ke grup!')
      } catch (err) {
        console.log(err)
        if (err.message.includes('not-authorized')) {
          return m.reply('Gagal menambahkan grup sewa. Bot tidak memiliki izin untuk bergabung dengan grup Karena Baru Baru Ini Dikeluarkan')
        } else if (err.message.includes('gone')) {
          return m.reply('Gagal menambahkan grup sewa. Link telah di reset')
        } else {
          return m.reply('Hmm new type of error report to developer')
        }
      }
      if (!coded) return m.reply("Link Invalid 🤔")
      lenwy.query({
        tag: "iq",
          attrs: {
          type: "get",
          xmlns: "w:g2",
          to: "@g.us"
          },
        content: [{ tag: "invite", attrs: { code: coded } }]
      }).then(async(res) => {
        let groupId = res.content[0].attrs.id + '@g.us'
        let rawData = fs.readFileSync(pathsewa)
        let sewa = JSON.parse(rawData)
        const groupExists = sewa.some(entry => entry.groupId === groupId)
        if (groupExists) {
          return m.reply(`Sudah ada dalam daftar sewa.`)
        }
        addSewaGroup (groupId, duration, sewa)
        m.reply(`Berhasil menambahkan grup ke daftar sewa dengan durasi ${duration}.`)
        await lenwy.sendMessage(groupId, {text: `Hallo semuanya, saya adalah bot ${global.botname}. Saya telah di sewa selama ${duration} untuk mengecek berapa sisa waktu sewa silahkan untuk admin ketik "${prefix}ceksewa" dan untuk melihat semua fitur yang ada silahkan ketik "${prefix}allmenu".`})
      })
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message)
      m.reply('Gagal menambahkan grup sewa. Silakan coba lagi.')
    }
  }
}
break

case 'delsewa':
case 'hapussewa': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) {
      try {
        if (!text) return m.reply(`Anda mencoba menghapus sewa grup melalui pribadi chat? anda harus mengisi idgrup nya\n\n> Untuk mengecek grup yang disewa oleh bot silahkan ketik ${prefix}listsewa`)
        const groupId = text // Mendapatkan ID grup dari metadata
        let rawData = fs.readFileSync(pathsewa, 'utf8')
        let sewa = JSON.parse(rawData)

        // Mencari index dari grup yang ingin dihapus
        const index = sewa.findIndex(entry => entry.groupId === groupId)
        if (index === -1) {
            return m.reply('Grup ini tidak ditemukan dalam daftar sewa.')
        }

        // Menghapus entri dari array
        sewa.splice(index, 1)

        // Menulis kembali data ke file JSON
        fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2), 'utf8')

        m.reply('Sukses menghapus sewa.')
      } catch (error) {
        console.error('Terjadi kesalahan:', error.message)
        m.reply('Gagal menghapus sewa. Silakan coba lagi.')
      }
    } else {
      try {
        if (text) return m.reply(`Anda mencoba menghapus sewa grup melalui grup chat? tolong hanya ketik '${prefix + command}'`)
        const groupId = `${from}`; // Mendapatkan ID grup dari metadata
        let rawData = fs.readFileSync(pathsewa, 'utf8')
        let sewa = JSON.parse(rawData)

        // Mencari index dari grup yang ingin dihapus
        const index = sewa.findIndex(entry => entry.groupId === groupId)
        if (index === -1) {
            return m.reply('Grup ini tidak ditemukan dalam daftar sewa.')
        }

        // Menghapus entri dari array
        sewa.splice(index, 1)

        // Menulis kembali data ke file JSON
        fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2), 'utf8')

        m.reply('Sukses menghapus sewa.')
      } catch (error) {
        console.error('Terjadi kesalahan:', error.message)
        m.reply('Gagal menghapus sewa. Silakan coba lagi.')
      }
    }
}
break

case 'checksewa':
case 'ceksewa':
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!m.isGroup) return m.reply(mess.group)

    try {
        const groupId = from; // ID grup saat ini
        const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

        // Periksa apakah grup saat ini ada dalam daftar sewa
        const entry = currentDir.find(entry => entry.groupId === groupId)
        if (!entry) {
            return m.reply('Perintah ini hanya bisa dilakukan di dalam grup yang sudah terdaftar dan di-add sewa.')
        }

        // Hitung durasi tersisa
        const expiry = entry.expired;
        const remainingTime = expiry - Date.now()
        var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
        const status = `${days} hari ${hours} jam ${minutes} menit`;
        m.reply(`Akan Habis Hingga ${status}.`)
        
    } catch (error) {
        m.reply('Terjadi kesalahan: ' + error.message)
    }
    break

case 'removeexpired':
case 'cekexp':
case 'cekexpired': {
    if (!isCreator) return m.reply('Perintah ini hanya bisa dilakukan oleh pemilik bot.')
	const fs = require('fs')
    try {
        const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
        await expiredCheck(lenwy, currentDir) // Asumsikan `conn` adalah objek koneksi bot
        m.reply('Pengecekan masa sewa sedang dilakukan, grup yang masa sewanya telah habis akan dihapus secara otomatis.')
    } catch (error) {
        m.reply(error.message)
    }
}
break

case 'perpanjangsewa': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Ada 2 cara untuk melakukan ${prefix + command} ini:\n1. ${prefix + command} dilakukan di dalam grup.\n2. ${prefix + command} dilakukan di private chat bot dengan menyertakan ID grup.`)
  await sleep(500)

  const { toMs, checkSewaGroup } = require('./lib/sewa')
  const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

  if (m.isGroup) {
      try {
          let [duration] = text.split(' ')
          if (!duration) return m.reply(`Durasi harus diisi!\nContoh:\n${prefix + command} 30d\n\n*LIST WAKTU*\nd = days\nh = hours\nm = minutes\ns = seconds`)

          const groupId = from
          if (!checkSewaGroup(groupId, currentDir)) {
              return m.reply('Grup ini tidak ditemukan dalam daftar sewa. Anda tidak dapat memperpanjang masa sewa grup ini.')
          }

          // Mencari posisi grup
          let position = currentDir.findIndex(entry => entry.groupId === groupId)
          if (position !== -1) {
              const existingData = currentDir[position]
              const newExpiration = existingData.expired + toMs(duration)
              existingData.expired = newExpiration
              fs.writeFileSync(pathsewa, JSON.stringify(currentDir, null, 2))
              m.reply(`Masa sewa grup telah diperpanjang selama ${duration}.`)
          }
      } catch (error) {
          console.error('Terjadi kesalahan:', error.message)
          m.reply('Gagal memperpanjang masa sewa grup. Silakan coba lagi.')
      }
  } else {
      try {
          let [duration, groupId] = text.split(' ')
          if (!duration || !groupId) return m.reply(`Durasi dan ID grup harus diisi!\nContoh:\n${prefix + command} 30d 1234567890-123456@g.us\n\n*LIST WAKTU*\nd = days\nh = hours\nm = minutes\ns = seconds`)

          if (!checkSewaGroup(groupId, currentDir)) {
              return m.reply('Grup ini tidak ditemukan dalam daftar sewa. Anda tidak dapat memperpanjang masa sewa grup ini.')
          }

          // Mencari posisi grup
          let position = currentDir.findIndex(entry => entry.groupId === groupId)
          if (position !== -1) {
              const existingData = currentDir[position]
              const newExpiration = existingData.expired + toMs(duration)
              existingData.expired = newExpiration
              fs.writeFileSync(pathsewa, JSON.stringify(currentDir, null, 2))
              m.reply(`Masa sewa grup dengan ID ${groupId} telah diperpanjang selama ${duration}.`)
          }
      } catch (error) {
          console.error('Terjadi kesalahan:', error.message)
          m.reply('Gagal memperpanjang masa sewa grup. Silakan coba lagi.')
      }
  }
}
break

case 'listsewa': {
  if (!isCreator) return m.reply(mess.owner)
  LenwyLD()
  try {
      const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
      let ordernye = `*List Sewa*\nJumlah : ${currentDir.length}\n\n`
      for (const entry of currentDir) {
          let idgc = entry.groupId;
            let linkgc
            try {
              let response2 = await lenwy.groupInviteCode(idgc)
              linkgc = `https://chat.whatsapp.com/${response2}`
            } catch {
              linkgc = '-'
            }
            try {
              let metadata = await lenwy.groupMetadata(idgc)
              const totalMembers = metadata.participants ? metadata.participants.length : 0;
              const expiry = entry.expired;
              const remainingTime = expiry - Date.now()
              var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
              var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
              var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
              ordernye += `✅ ${metadata.subject}
🎁 ID Group : ${entry.groupId}
📦 Total Member : ${totalMembers || '-'} Member
⏰ Expired : ${days || '-'} hari ${hours || '-'} jam ${minutes || '-'} menit
> Link Group : ${linkgc}
────────────────────────\n\n`
            } catch (e) {
              ordernye += `⛔
🎁 Group ID: ${idgc}
📦 Tidak bisa mengakses metadata grup, Kemungkinan bot telah keluar dari group.
> Pesan: ${e.message}
────────────────────────\n\n`
            }
      }
      m.reply(ordernye + `> Gunakan ${prefix}delsewa (idGroup) untuk menghapus sewa jika private chat dengan bot
> Gunakan ${prefix}delsewa untuk menghapus sewa jika berada di dalam grup`)
  } catch (error) {
      m.reply('Terjadi kesalahan saat membaca file: ' + error.message)
  }
}
break

case 'backupbot':
case 'botbackup': {
    if (!isAdmins && !isCreator) return m.reply(mess.admin);

    let directoryPath = path.join("./")
    fs.readdir(directoryPath, async function (err, files) {
      if (err) {
        return m.reply("Tidak dapat memindai direktori: " + err)
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
    if (filteredArray.length == 0) return m.reply(teks)
    filteredArray.map(function (e, i) {
      teks += i + 1 + `. ${e}\n`
    })
    m.reply(teks)
    await sleep(200)
    m.reply("Menghapus file sampah...")
    await filteredArray.forEach(function (file) {
      fs.unlinkSync(`./${file}`)
    })
    await sleep(200)
    m.reply("Berhasil menghapus semua sampah")
  })


    // Menambahkan delay menggunakan Promise
    await new Promise(resolve => setTimeout(resolve, 3000));

    const orang = `${global.owner}@s.whatsapp.net`; // Pastikan developer sudah didefinisikan

    const ls = execSync("ls")
        .toString()
        .split("\n")
        .filter(
            (pe) =>
                pe !== "node_modules" &&
                pe !== "Session" &&
                pe !== "package-lock.json" &&
                pe !== ".cache" &&
                pe !== ".npm"
        );

    try {
        // Membuat file zip
        execSync(`zip -r Sc.zip ${ls.join(" ")}`);

        // Mengirim file zip
        await lenwy.sendMessage(orang, {
            document: fs.readFileSync("./Sc.zip"),
            mimetype: "application/zip",
            fileName: `Sc${global.ownername}${waktubackup}.zip`,
        }, { quoted: m });

        // Menghapus file zip setelah dikirim
        fs.unlink('./backup.zip', (err) => {
          if (err) {
            console.error('Gagal menghapus backup.zip:', err);
          } else {
            console.log('Sc sudah terkirim dan file "backup.zip" telah dihapus');
          }
        });
		m.reply(`Suda`)
    } catch (err) {
        console.error("Error during backup process:", err);
    }
}
break

case 'autobackup': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`*Ketik ${prefix + command} on/off*`)
    if (q == 'on') {
      global.autobakcup = true;
      m.reply(mess.success)
  } else if (q == 'off') {
      global.autobakcup = false;
      m.reply(mess.success)
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`)
  }
}
break

case 'getip':
case 'cekip': {
    if (!isCreator) return m.reply(mess.owner)
    
    try {
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        };

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        const ip_panel = await fetch(`https://api.myip.com`, requestOptions)
        const res = await ip_panel.json()

        // Memeriksa apakah alamat IP adalah IPv4
        const ipv4Regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
        const ipv4 = res.ip.match(ipv4Regex)

        if (ipv4) {
            const replyMessage = `*📮INFO SERVER*\n\n*IP :* ${ipv4}\n*Country :* ${res.country}\n*Cc :* ${res.cc}`;
            m.reply(replyMessage)
        } else {
            m.reply('Gagal mengambil informasi IP IPv4. Silakan coba lagi nanti.')
        }
    } catch (error) {
        console.error('Error fetching IP:', error)
        m.reply('Gagal mengambil informasi IP. Silakan coba lagi nanti.')
    }
}
break

case 'setpayment': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: Kirimkan foto dengan caption:\n${prefix + command} ewallet@Berikut Nomor E-Wallet nya:\nGopay: 085261255548\nDana: 085261255548`)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);

  let paymentMethod = text.split('@')[0]; // Metode pembayaran (misal: gopay)
  let paymentData = text.split('@')[1];
  if (!paymentData || !paymentMethod) {
      return m.reply(`Contoh: ${prefix + command} ewallet@Berikut Nomor E-Wallet nya:\nGopay: 085261255548\nDana: 085261255548`);
  }

  let groupID = m.chat; // Menggunakan ID grup untuk penyimpanan data

  // Menggabungkan groupID dan key untuk membuat ID unik untuk pembayaran
  let paymentDataId = `${groupID.split('@')[0]}-${paymentMethod}`; // Misal: 'groupID_gopay'

  // Mendownload gambar dan menyimpannya
  let imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./data/db/${paymentDataId}`);

  // Membaca data dari database
  let _db = readDatabasePayment();

  // Pastikan _db adalah array, jika tidak, buat array kosong
  if (!Array.isArray(_db)) {
      _db = [];
  }

  let existingPayment = _db.find(entry => entry.id === groupID && entry.key === paymentMethod);
  if (existingPayment) {
      return m.reply(`Key dengan metode ${paymentMethod} sudah ada untuk grup ini.`);
  }

  // Menambahkan data pembayaran ke database
  let obj_add = {
      id: groupID,
      key: paymentMethod,
      paymentData: paymentData, // Menyimpan ID pembayaran
      imageUrl: imageUrl
  };

  // Menambahkan data ke array _db
  _db.push(obj_add);

  // Menyimpan data ke database
  writeDatabasePayment(_db);

  return m.reply(`Pembayaran dengan metode ${paymentMethod} berhasil disimpan. Gambar pembayaran telah diterima.`);
}
break

case 'setbuttonurl': {
  if (!isAdmins) return
  if (!budy.includes('@')) return m.reply("Harap kirimkan format yang benar: setbuttonurl <key>@<displayName>@<url>")

  let key = text.split('@')[0];
  let displayName = text.split('@')[1];
  let url = text.split('@')[2];

  // Membaca data dari database
  let _db = readDatabasePayment();

  // Cari data berdasarkan key dan group ID
  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  if (!paymentData) {
      return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
  }

  // Membuat tombol URL
  let button = {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
          display_text: displayName, // Nama tombol
          url: url                   // URL yang akan diarahkan ketika tombol ditekan
      })
  };

  // Menambahkan tombol ke dalam buttonData array di bawah imageUrl
  if (!paymentData.buttonData) {
      paymentData.buttonData = []; // Inisialisasi jika belum ada buttonData
  }

  paymentData.buttonData.push(button);

  // Menyimpan kembali data ke database
  writeDatabasePayment(_db);

  return m.reply(`Tombol URL dengan teks "${displayName}" dan URL "${url}" telah berhasil diset untuk key "${key}".`);
}
break

case 'setbuttoncopy': {
  if (!isAdmins) return
  if (!budy.includes('@')) return m.reply("Harap kirimkan format yang benar: setbuttonurl <key>@<displayName>@<url>")

  let key = text.split('@')[0];
  let displayName = text.split('@')[1];
  let nilaiCopy = text.split('@')[2];
  // Membaca data dari database
  let _db = readDatabasePayment();

  // Cari data berdasarkan key dan group ID
  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  if (!paymentData) {
      return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
  }

  // Membuat tombol salin
  let button = {
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
          display_text: displayName, // Nama tombol
          id: nilaiCopy,             // ID yang bisa diubah sesuai kebutuhan
          copy_code: nilaiCopy      // Teks yang disalin
      })
  };

  // Menambahkan tombol ke dalam buttonData array di bawah imageUrl
  if (!paymentData.buttonData) {
      paymentData.buttonData = []; // Inisialisasi jika belum ada buttonData
  }

  paymentData.buttonData.push(button);

  // Menyimpan kembali data ke database
  writeDatabasePayment(_db);

  return m.reply(`Tombol salin dengan teks "${nilaiCopy}" telah berhasil diset untuk key "${key}".`);
}
break

case 'changewording': {
    if (!isAdmins) return
    if (!text) return m.reply('Contoh: changewording key@newWording');
    
    let [key, newWording] = text.split('@');
    
    if (!key || !newWording) return m.reply('Format yang benar: changewording key@newWording');
    
    // Membaca data dari database pembayaran
    let _db = readDatabasePayment();
    
    // Mencari data pembayaran yang sesuai dengan group ID (m.chat)
    let payments = _db.filter(item => item.id === m.chat);
    
    if (payments.length === 0) {
        return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
    }
    
    // Mencari key yang sesuai
    let payment = payments.find(item => item.key === key);
    
    if (!payment) {
        return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
    }

    // Mengupdate wording untuk key yang ditemukan
    payment.paymentData = newWording;

    // Menyimpan kembali perubahan ke database
    writeDatabasePayment(_db);

    return m.reply(`Wording untuk key "${key}" berhasil diubah.`);
}
break

case 'delbutton': {
    if (!isAdmins) return
    if (!text) return m.reply('Contoh: delbutton key');
    
    let key = text  // Extract the key from the text
    
    if (!key) return m.reply('Contoh: delbutton key');
    
    // Membaca data dari database pembayaran
    let _db = readDatabasePayment();
    
    // Mencari data pembayaran yang sesuai dengan group ID (m.chat)
    let payments = _db.filter(item => item.id === m.chat);
    
    if (payments.length === 0) {
        return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
    }
    
    // Mencari key yang sesuai
    let payment = payments.find(item => item.key === key);
    
    if (!payment) {
        return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
    }

    // Menghapus semua buttonData untuk key yang ditemukan
    payment.buttonData = [];  // Empty the buttonData array

    // Menyimpan kembali perubahan ke database
    writeDatabasePayment(_db);

    return m.reply(`Semua tombol untuk key "${key}" berhasil dihapus.`);
}
break

case 'pay': {
  // Membaca data dari database pembayaran
  let _db = readDatabasePayment();
  
  // Mencari data pembayaran yang sesuai dengan group ID (m.chat)
  let payments = _db.filter(item => item.id === m.chat);
  
  if (payments.length === 0) {
      return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
  }
  
  let missingButtons = [];

  for (let payment of payments) {
      // Cek jika buttonData tidak ada untuk setiap key
      if (!payment.buttonData || payment.buttonData.length === 0) {
          missingButtons.push(payment.key); // Menambahkan key ke array missingButtons
      }
  }

  // Jika ada key yang belum di setbutton, kirimkan pesan dengan list key yang hilang
  if (missingButtons.length > 0) {
      return m.reply(`Key "${missingButtons.join(', ')}" belum di setbuttoncopy atau setbuttonurl.`);
  }
  
  // Fungsi untuk menghasilkan gambar dari file lokal
  async function createImage(filePath) {
      let { imageMessage } = await generateWAMessageContent({
          image: { url: filePath }  // Menggunakan path file lokal
      }, {
          upload: lenwy.waUploadToServer
      });
      return imageMessage;
  }

  // Daftar pesan yang akan dikirim
  let push = payments.map(async (payment) => {
      let imageMessage = await createImage(payment.imageUrl); // Menggunakan imageUrl dari data JSON
      
      return {
          body: proto.Message.InteractiveMessage.Body.fromObject({
              text: payment.paymentData
          }),
          footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.fromObject({
              hasMediaAttachment: true,
              imageMessage: imageMessage // Gunakan imageUrl yang ada di dalam data
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: payment.buttonData.map(button => ({
                  name: button.name,
                  buttonParamsJson: button.buttonParamsJson
              }))
          })
      };
  });

  // Tunggu hingga semua push card selesai dibuat
  let pushCards = await Promise.all(push);

  // Mengirimkan pesan interaktif dengan tombol dan informasi pembayaran
  let bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
          message: {
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.create({
                      text: 'Berikut Daftarnya',
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                      text: `> ${botname}`,
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: false
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                      cards: pushCards
                  })
              })
          }
      }
  }, { quoted: m });

  // Mengirimkan pesan
  await lenwy.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
  });
}
break

case 'delpayment': {
  if (!isAdmins) return
  let key = text; // Asumsikan key diberikan langsung setelah command delpayment
  if (!key) return m.reply("Harap kirimkan format yang benar: delpayment <key>");

  // Membaca data dari database
  let _db = readDatabasePayment();

  // Mencari data pembayaran berdasarkan key dan group ID
  let paymentIndex = _db.findIndex(item => item.key === key && item.id === m.chat);

  // Jika data tidak ditemukan, tampilkan daftar key yang tersedia untuk grup ini
  if (paymentIndex === -1) {
    // Mendapatkan semua key yang tersedia untuk grup ini
    let availableKeys = _db
      .filter(item => item.id === m.chat)
      .map((item, index) => `${index + 1}. ${item.key}`);

    // Jika tidak ada data pembayaran untuk grup ini, beri tahu pengguna
    if (availableKeys.length === 0) {
      return m.reply("Tidak ada data pembayaran yang tersedia di grup ini.");
    }

    // Menampilkan daftar key yang tersedia dengan format nomor urut
    return m.reply(`Key "${key}" tidak ditemukan. Key yang tersedia:\n${availableKeys.join('\n')}`);
  }

  // Menghapus data pembayaran dari array
  let deletedPayment = _db.splice(paymentIndex, 1)[0];

  // Menghapus file gambar terkait jika ada
  if (deletedPayment.imageUrl) {
    const fs = require('fs');
    fs.unlink(deletedPayment.imageUrl, (err) => {
      if (err) console.error("Gagal menghapus file gambar:", err);
    });
  }

  // Menyimpan data ke database
  writeDatabasePayment(_db);

  m.reply(`Data pembayaran dengan key "${key}" berhasil dihapus.`);
}
break

case 'cekkhodam': case 'cekkodam': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const tik = await (await fetch(`https://api.autoresbot.com/api/game/kodam?apikey=`))
m.reply(`*Khodam ${q} adalah ${tik.data}*`)
}
break

case 'brat': {
  if (isBan) return m.reply('⚠ *Kamu Di Ban Owner*');
  if (!text) return m.reply(`Harap kirimkan teks setelah caption ${prefix + command}`);
  try {
    let stream = await BratGenerator(text);
    let buffers = await writeExifImg(stream, { packname: global.packname, author: global.author });
    await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat stiker.`);
  }
}
break

case 'brat2': {
  if (isBan) return m.reply('⚠ *Kamu Di Ban Owner*');
  if (!text) return m.reply(`Penggunaan : ${prefix + command} <teks>`);
  try {
    // Construct the URL for the sticker image
    let imageUrl = `https://brat.caliphdev.com/api/brat?text=${text}`;

    // Fetch the image as a buffer using axios
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Convert the response to a Buffer
    const buffer = Buffer.from(response.data, 'binary');

    // Send the image buffer as a sticker
    await lenwy.sendImageAsSticker(from, buffer, m, { packname: global.packname, author: global.author });
  } catch (e) {
    console.log(e);
    await m.reply(`Terjadi kesalahan saat membuat stiker`);
  }
}
break

case 'cekipurl': {
if (!text) return m.reply(`Contoh: ${prefix + command} urlNya\n\n> Note: Tanpa https://`)
if (text.startsWith('https://')) return m.reply(`Note: Tanpa https://`)
  try {
    const address = await dns.lookup(text);
    m.reply(`IPv4 Address of https://${text}: ${address.address}`);
  } catch (err) {
    console.error('Error:', err.message);
  }    
}
break

case 'ttp': {
  if (!q) return m.reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} lucu abis`)
  if (q.length > 75) return m.reply(`Teksnya terlalu panjang`)
  
  //var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
  var data = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=edce68e031c34dcf71219133&text=${encodeURIComponent(q)}`)
  var rand2 = getRandom('.webp')
  fs.writeFileSync(`./${rand2}`, data)
    exec(`webpmux -set exif ./data.exif ./${rand2} -o ./${rand2}`, async (error) => {
    lenwy.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
    execSync(`rm -rf ./${rand2}.png`)
    fs.unlinkSync(`./${rand2}`)
  })
}
break
        
case 'attp': {
	if (!q) return m.reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} lucu abiss`)
  if (q.length > 75) return reply(`Teksnya terlalu panjang`)
            
  //var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
  var data = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=edce68e031c34dcf71219133&text=${encodeURIComponent(q)}`)
  var rand2 = getRandom('.webp')
  fs.writeFileSync(`./${rand2}`, data)
  exec(`webpmux -set exif ./data.exif ./${rand2} -o ./${rand2}`, async (error) => {
    lenwy.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
    fs.unlinkSync(`./${rand2}`)
})
}
break

case 'setstick': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: Reply foto/sticker dengan caption:\n${prefix + command} (Key)`)
  if (!/image/.test(mime)) return m.reply(`Foto atau Sticker nya Mana?`);

  let nameKey = text
  let groupID = m.chat; // Menggunakan ID grup untuk penyimpanan data

  // Mendownload gambar dan menyimpannya
  let imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./data/sticker/${nameKey + groupID}`)

  // Membaca data dari database
  let db_sticker = JSON.parse(fs.readFileSync('./data/src/databaseSticker.json'))

  // Pastikan _db adalah array, jika tidak, buat array kosong
  if (!Array.isArray(db_sticker)) {
    db_sticker = [];
  }

  let existingPayment = db_sticker.find(entry => entry.id === groupID && entry.key === nameKey);
  if (existingPayment) {
      return m.reply(`Sticker dengan key ${nameKey} sudah ada untuk grup ini.`);
  }

  // Menambahkan data pembayaran ke database
  let obj_add = {
      id: groupID,
      key: nameKey,
      imageUrl: imageUrl
  };

  db_sticker.push(obj_add);
  fs.writeFileSync('./data/src/databaseSticker.json', JSON.stringify(db_sticker, null, 3), 'utf-8');

  return m.reply(`Sticker ${nameKey} berhasil disimpan`);
}
break

case 'liststick': {
  if (text) return
  let db_sticker = JSON.parse(fs.readFileSync('./data/src/databaseSticker.json'))
  if (!isAlreadyResponStickGroup(m.chat, db_sticker)) return m.reply(`*Belum Ada Sticker Yang Terdaftar Di Grup Ini*`);
  let sortedList = db_sticker.filter(i => i.id === m.chat).sort((a, b) => a.key.localeCompare(b.key));
  let tek = `List Sticker Yang Terdaftar Di Group ${groupName}\n`
  for (let i of sortedList) {
    tek += `\n> *${i.key}*`
  }
  m.reply(tek)
}
break

case 'delstick': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: ${prefix + command} (key)`);
  let db_sticker = JSON.parse(fs.readFileSync('./data/src/databaseSticker.json'))
  if (!isKeyResponStick(m.chat, text.toLowerCase(), db_sticker)) return m.reply(`*Sticker Dengan Key ${text} Tidak Ada Dalam Liststick*`);
  await delResponStick(m.chat, text.toLowerCase(), db_sticker)
  m.reply(`*Sukses Menghapus Sticker Dengan Key ${text}*`)
}
break

case 'mutegc': {
  if (!isCreator) return
  const gcnya = m.chat; // Mendapatkan ID grup

  // Membaca file JSON yang ada
  let gcList;
  try {
    const data = fs.readFileSync('./database/gcMuted.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcMuted.json:', error);
    gcList = []; // Inisialisasi dengan array kosong jika terjadi kesalahan
  }

  // Memeriksa apakah ID grup sudah ada
  if (gcList.includes(gcnya)) {
    return m.reply(`Grup dengan ID "${gcnya}" sudah ada dalam daftar.`);
  }

  // Menambahkan ID grup ke daftar
  gcList.push(gcnya);

  // Menyimpan kembali ke file JSON
  fs.writeFileSync('./database/gcMuted.json', JSON.stringify(gcList, null, 2));
  console.log(`ID grup "${gcnya}" berhasil ditambahkan ke gcMuted.json`);
  m.reply(`ID grup "${gcnya}" berhasil ditambahkan ke daftar gcMuted.`);
}
break

case 'delmutegc': {
  if (!isCreator) return
  const gcnya = m.chat; // Mendapatkan ID grup

  // Membaca file JSON yang ada
  let gcList;
  try {
    const data = fs.readFileSync('./database/gcMuted.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcMuted.json:', error);
    gcList = []; // Inisialisasi dengan array kosong jika terjadi kesalahan
  }

  // Memeriksa apakah ID grup ada dalam daftar
  const index = gcList.indexOf(gcnya);
  if (index === -1) {
    return m.reply(`Grup dengan ID "${gcnya}" tidak ditemukan dalam daftar.`);
  }

  // Menghapus ID grup dari daftar
  gcList.splice(index, 1);

  // Menyimpan kembali ke file JSON
  fs.writeFileSync('./database/gcMuted.json', JSON.stringify(gcList, null, 2));
  console.log(`ID grup "${gcnya}" berhasil dihapus dari gcMuted.json`);
  m.reply(`ID grup "${gcnya}" berhasil dihapus dari daftar gcMuted.`);
}
break

case 'pantun': {
    try {
        let response = await axios.get('https://apis.xyrezz.online-server.biz.id/api/pantun');
        let pantunList = response.data;
        let randomIndex = Math.floor(Math.random() * pantunList.length);
        let randomPantun = pantunList[randomIndex];

        m.reply(randomPantun.trim());
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memuat pantun.');
    }
}
break

case 'bratvid': {
if (!text) return m.reply(`text nya`)
 try {
 
 const words = text.split(" ");
 const tempDir = path.join(process.cwd(), "tmp");
 if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
 const framePaths = [];

 for (let i = 0; i < words.length; i++) {
 const currentText = words.slice(0, i + 1).join(" ");

 const res = await axios
 .get(
 `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`,
 {
 responseType: "arraybuffer",
 },
 )
 .catch((e) => e.response);

 const framePath = path.join(tempDir, `frame${i}.mp4`);
 fs.writeFileSync(framePath, res.data);
 framePaths.push(framePath);
 }

 const fileListPath = path.join(tempDir, "filelist.txt");
 let fileListContent = "";

 for (let i = 0; i < framePaths.length; i++) {
 fileListContent += `file '${framePaths[i]}'\n`;
 fileListContent += `duration 0.5\n`; // Durasi setiap frame 500 milidetik
 }

 fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
 fileListContent += `duration 3\n`; // Frame terakhir memiliki durasi 3 detik

 fs.writeFileSync(fileListPath, fileListContent);

 const outputVideoPath = path.join(tempDir, "output.mp4");
 execSync(
 `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`,
 );
 
 await lenwy.sendImageAsSticker(from, outputVideoPath, m, { packname: global.packname, author: global.author })

 framePaths.forEach((filePath) => fs.unlinkSync(filePath));
 fs.unlinkSync(fileListPath);
 fs.unlinkSync(outputVideoPath);
 } catch (err) {
 console.error(err);
 m.reply("Maaf, terjadi kesalahan saat memproses permintaan.");
 }
}
break

case 'txt2chibi':
case 'text2chibi':
case 'texttochibi':
case 'chibi': {
  if (!text) m.reply(`Contoh: ${prefix + command} a boy with a black jacket and blue hair`)
  LenwyLD()
  let res = await (await fetch(`https://api.maelyn.tech/api/txt2chibi?prompt=${text}&resolution=Square&apikey=wyq3Zrsd53`)).json()
  for (let imageUrl of res.result) {
    await lenwy.sendMessage(m.chat, { image: { url: imageUrl }}, { quoted: m })
  }
}
break

case 'txt2chibi':
case 'text2chibi':
case 'texttochibi':
case 'chibi': {
  if (!text) m.reply(`Contoh: ${prefix + command} a boy with a black jacket and blue hair`)
  LenwyLD()
  let res = await (await fetch(`https://api.maelyn.tech/api/txt2img/minecraft?prompt=${text}&resolution=Square&apikey=wyq3Zrsd53`)).json()
  for (let imageUrl of res.result) {
    await lenwy.sendMessage(m.chat, { image: { url: imageUrl }}, { quoted: m })
  }
}
break

default:
if (budy.startsWith("=>")) {
          if (!isCreator) return
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
           return m.reply(bang)
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`)),
            )
          } catch (e) {
            m.reply(String(e))
          }
        }
if (budy.startsWith(">")) {
          if (!isCreator) return
          let kode = budy.trim().split(/ +/)[0]
          let teks;
          try {
            teks = await eval(
              `(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`,
            )
          } catch (e) {
            teks = e;
          } finally {
            await m.reply(require("util").format(teks))
          }
        }


if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
lenwy.copyNForward(from, msgs[budy.toLowerCase()], true)}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
console.log(e)
}}
// console.log(typeof lenwy.groupFetchAllParticipating)
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})
