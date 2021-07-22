const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "withdraw",
  description: "Withdraws your bank's balance to your pocket.",
  async execute(message, args) {

  let user = message.author;

  let member = db.fetch(`money_${user.id}`)
  let member2 = db.fetch(`bank_${user.id}`)

  if (args[0].toLowerCase() == 'all' || args[0].toLowerCase() === "max") {
    let money = await db.fetch(`bank_${user.id}`)
    
    db.subtract(`bank_${user.id}`, money)
    db.add(`money_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Success")
  .setFooter("Withdraw")
  .setTimestamp()
  .setDescription(`You have withdrawn all your coins from your bank!`);
  message.lineReplyNoMention(embed5)
  
  } else {

if(message.content.includes('.')) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("Please use entire numbers")
        return message.lineReplyNoMention(embed)
    }

  let embed2 = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setTimestamp()
  .setDescription(`Specify an amount of money to withdraw!`);
  
  if (!args[0]) {
      return message.lineReplyNoMention(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setTimestamp()
  .setDescription(`«You can't withdraw negative money!`);

  if (message.content.includes('-')) { 
      return message.lineReplyNoMention(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setTimestamp()
  .setDescription(`You don't have that much money in the bank!`);

  if (member2 < args[0]) {
      return message.lineReplyNoMention(embed4)
  }
 if(isNaN(args[0])) {
    let embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setTimestamp()
  .setDescription(`That is not a number, tho...`);
    return message.lineReplyNoMention(embed)
  }
  else {
  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Success")
  .setFooter("Withdraw")
  .setTimestamp()
  .setDescription(`You have withdrawn \`\`${args[0]}\`\` ₿ from your bank!`);

  message.lineReplyNoMention(embed5)
  db.subtract(`bank_${user.id}`, args[0])
  db.add(`money_${user.id}`, args[0])
  }
  }
}
}