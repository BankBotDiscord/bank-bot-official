const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'balance',
    description: "Shows your balance.",
    async execute(message, args){

  let user = message.mentions.users.first() || message.author;

  let bal = db.fetch(`money_${user.id}`)

  if (bal === null) {
    bal = 0;
  }

  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) {
    bank = 0;
  }

  let networth = bank + bal;
  
  let bitcoin = db.get(`bitcoin_${user.id}`)
  if(bitcoin === null) {
    bitcoin = 0
  }

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle(`${user.username}'s Net Worth <:Bank_Emoji_BankChest:839615043615850527>`)
  .setDescription(`For more info about Net Worths visit the Bank Bot Support Server ➜ https://discord.gg/dy7RrUCNRP \n\n**Wallet**: \`\`${bal}\`\` of ₿ \n\n**Bank**: \`\`${bank}\`\` of ₿ \n\n**Net Worth**: \`\`${networth}\`\` of ₿ \n\n**Bit Coins**: \`\`${bitcoin}\`\` ₿+`)
  .setFooter(`Net Worth`)
  .setTimestamp()
  .setThumbnail(user.displayAvatarURL())
  message.channel.send(moneyEmbed)
    }
}