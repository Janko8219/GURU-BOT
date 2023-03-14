let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`𒆜 Group : *${groupMetadata.subject}*\n𒆜 Members : *${participants.length}*${text ? `\n𒆜 Message : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` + users.map(v => '𒆜 @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ 𝐽𝑂-𝑗𝑜 ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
