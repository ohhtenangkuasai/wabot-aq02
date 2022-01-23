function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '1(507)4485743', 'SixxTenz(Owner Bot).', m)
  this.sendContact(m.chat, '6281244706456', 'Kimiko(Admin Bot).', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
