
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["@918593074023", "Jojo", "", "", ""])}.mp3`

conn.sendButton(m.chat, `Heyy👋 *${name}* \n \nNeed help? \n`, igfg, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬ Groups', '/gpdylux']
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|jojo|@918593074023)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
