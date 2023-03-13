import fetch from 'node-fetch'
import fs from 'fs'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
    let user = global.db.data.users[m.sender] 
    let name = await conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender]
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850)   
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let m2 = `
${botname}
`
let pp = './Guru.jpg' 
    conn.sendButton(m.chat, m2, `╭═══〘 ̶J̶̶o̶̶j̶̶o̶ ̶w̶̶h̶̶a̶̶t̶̶s̶̶a̶̶p̶̶p̶ ̶b̶̶o̶̶t̶ 〙══╮
║    *${botname}* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║✩ *𝗛ii, ${taguser}* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║✩ *ᴄʀᴇᴀᴛᴇʀ:* 𝐽𝑂-𝑗𝑜
║✩ *ᴏᴡɴᴇʀ:* wa.me/918593074023
║✩ *ʙᴏᴛ:* wa.me/18064968331
║✩ *ɪɴsᴛᴀ:* _munavir._
║✩ *ᴛᴏᴛᴀʟ ᴜsᴇʀs:* ${rtotalreg}
╰═════════════════❐
┏━────────────────❐
┃ *< USER INFO />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *𒆜️ level:* ${level}
┣ *𒆜 Experience:* ${exp}
┣ *𒆜 Rank:* ${role}
┣ *𒆜 Diamonds:* ${diamond}
┣ *𒆜️ Premium:* ${user.premium = 'true' ? '❌' : '✅'}
┗━━━━━━━━━━━━━━━━➤`, pp, 
      ['𒆜 MENU LIST', `${usedPrefix}list`]
    ,m, rpyt)
    //await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu', 'help', 'h'] 

export default handler
