let handler = async (m, {conn, usedPrefix}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[m.sender]
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    conn.reply(m.chat, `
    HII ${taguser}
    I _*Bot*_
    Declare  *Neel* is gay `, m, { mentions: [who] })
}
handler.customPrefix = /^(neel|neelesh)$/i
handler.command = new RegExp

export default handler
