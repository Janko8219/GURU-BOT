import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
ᴛʜᴇ ɢᴜʀᴜ ʙᴏᴛ ꜱᴄʀɪᴘᴛ
https://
ᴅᴏ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʀᴋ
`
let pp = 'AsliGuru' 
conn.sendButton(m.chat, m2, pp, [
  ['⏍ Info', `${usedPrefix}botinfo`],
  ['⌬ Groups', `${usedPrefix}menu`]
],m, rpyt)

}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['', '', ''] 

export default handler
