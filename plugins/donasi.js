let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085742344873] (usahakan pulsa)
│ • Gopay, Dana [085742344873]
│ • https://saweria.co/JulianKastara09
╰────○
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
