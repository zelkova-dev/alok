const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = ''
global.ig = ''
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = ''
global.region = 'indonesia'

global.owner = ['6283821982705']
global.developer = ['6283821982705']
global.bot = ['6281390772002']
global.ownername = 'tes'
global.developername = 'tes'
global.botname = "tes"
global.emoji = '🐈'
global.packname = 'tes'
global.author = `sequoia`

// ------------------------------- [ DIGIFLAZZ ] -------------------------------------//
global.priceRegular = 5; // 5%
global.priceVip = 3;      // 3%
global.priceMvip = 1;     // 1%
// ------------------------------- [ KEBSOS ] -------------------------------------//
global.priceRegularKebsos = 20; // 20%
global.priceVipKebsos = 10;      // 10%
global.priceMvipKebsos = 8;     // 8%

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.api = {
    xterm: {
      url: "https://ai.xterm.codes",
      key: "Bell409"
    }
  }

global.xprefix = '.'

global.domain1 = '-'
global.plta1 = '-' // Plta
global.pltc1 = '-' // Pltc
global.domain2 = '-'
global.plta2 = '-' // Plta
global.pltc2 = '-' // Pltc
global.domain3 = '-'
global.plta3 = '-' // Plta
global.pltc3 = '-' // Pltc
global.eggsnya = '15'
global.location = '1'

global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Session'
global.anticall = true
global.autobakcup = true

global.mess = {
    success: '*Selesai*',
    admin: '𓏴  ֗   ִ 📔 *fitur khusus admin!* ⑅ ₊   ִ  ْ  ᕱᕱ*',
    botAdmin: '‼️ ୭౿ ° ִ *fitur ini digunakan ketika bot jadi admin group!* ֗  𝅄 𐔌  𔖭𔖰',
    owner: '⁉️𓏵  ׂ ˳ ˚ *yahaha fiturnya khusus owner wle !* ᥴ⃘ᦱ ִ  ْ  𓏼  ⑅',
    creator: '⁉️୭౿ °  ִ   ֗ *yahaha ini fiturnya khusus creator wle !*  𝅄 𐔌  𔖭𔖰',
    prem: '🚫 ⑅.⁺ ♡ *woi ini khusus prem !!*｡𓈈 ',
    group: '🚫 ⑅.⁺ ♡ *harus ada di dalam gc dulu woi !!*｡𓈈 ',
    wait: '🔍 .. 𐑺ִ 𝄈𝄈 .. *oh wait..*⸂  ݂  ',
    error: '🚫 .. 𐑺ִ 𝄈𝄈 .. *yahahaha eror, coba lagi nanti*⸂  ݂',
    link: '🔍 .. 𐑺ִ 𝄈𝄈 .. *salah link woi, ganti lain*⸂  ݂',
}

global.limitawal = {
    premium: 100000 ,
    free: 50
}

global.multiplier = 1000

global.text_sewa = ''
global.text_ppj = ''

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})
