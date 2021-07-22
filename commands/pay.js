const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client()

module.exports = {
  name: "pay",
  description: "Pays another user an amount of money you choose.",
  execute(message, args) {
    
  let user = message.mentions.members.first()
  let tax = args[1] * 0.06
  let amount = Math.floor(args[1] - tax)
    let diamondblock = db.get(`diamondblock_${message.author.id}`)
    if(!diamondblock) {
      tax = tax
  }
  else if(diamondblock >= 1) {
    tax = amount * 0.04
  }
  let member = db.get(`money_${message.author.id}`)
  if(user === message.author.id) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTimestamp()
    .setFooter(`MA`)
    .setDescription(`Idiot. You can't pay yourself your money. This isn't Monopoly.`)
    message.lineReplyNoMention(embed)
  }
  
  else if (!args[1]) {
    let embed2 = new Discord.MessageEmbed()
   .setColor('RED')
    .setTitle("ERROR >:(")
    .setFooter("Error")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTimestamp() 
  .setDescription(`Specify an amount to pay!`);
      return message.lineReplyNoMention(embed2)
  }
  else if(args[1].includes('.') || args[0].includes('.')) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`MA`)
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setDescription(`Please use an entire amount`)
    message.lineReplyNoMention(embed)
  }

  else if (!user) {
      let embed1 = new Discord.MessageEmbed()
   .setColor('RED')
    .setTitle("ERROR >:(")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setFooter("Error")
    .setTimestamp() 
  .setDescription(`You need to mention someone to pay!`);
      return message.lineReplyNoMention(embed1)
  }
  else if (message.content.includes('-')) { 
      let embed3 = new Discord.MessageEmbed()
   .setColor('RED')
    .setTitle("ERROR >:(")
    .setFooter("Error")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTimestamp() 
  .setDescription(`Error! You can't pay someone negative money!`);
      return message.lineReplyNoMention(embed3)
  }

 else if (member < args[1]) {
  let embed4 = new Discord.MessageEmbed()
     .setColor('RED')
    .setTitle("ERROR >:(")
    .setFooter("Error")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTimestamp() 
  .setDescription(`You don't have that much money! Sadly, you are too poor.`);
      return message.lineReplyNoMention(embed4)
  }
   else if(isNaN(args[1])) {
    let embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setDescription(`That is not a number, tho...`);
    return message.lineReplyNoMention(embed)
  }
  else {

  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Success")
  .setFooter("Pay")
  .setTimestamp()
  .setDescription(`You have payed \`\`${user.user.username}\`\` \`\`${amount}\`\` ₿! 
  The tax was of \`\`${tax}\`\` ₿ (6%).`);

  message.lineReplyNoMention(embed5)
  db.add(`money_${user.id}`, amount)
  db.subtract(`money_${message.author.id}`, args[1])
  }
  }
}