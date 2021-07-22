const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
  name: "deposit",
  description: "Sends money to your bank.",
  async execute(message, args) {

  let user = message.author;
  if(!args[0]) {
    message.channel.send("say a quantity or just say \"all\" to deposit")
  }

  let member = db.fetch(`money_${user.id}`)
  let member2 = db.fetch(`bank_${user.id}`)
   if (args[0].toLowerCase() === 'all' || args[0].toLowerCase() === 'max') {
    let money = await db.fetch(`money_${user.id}`)
    let bank = await db.fetch(`bank_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("ERROR >:(")
    .setFooter("Error")
    .setTimestamp() 
    .setDescription("You don't have any money to deposit!")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")

    if(money === 0) return message.lineReplyNoMention(embedbank)

    db.add(`bank_${user.id}`, money)
    db.subtract(`money_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Success")
    .setFooter("Deposit")
    .setTimestamp()
    .setDescription(`You have deposited all of your money into your bank!`);
 message.lineReplyNoMention(embed5)
  }
  else {
  let embed2 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("ERROR >:(")
    .setFooter("Error")
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setDescription(`Specify an amount to deposit.`);
  
  if (!args[0]) {
      return message.lineReplyNoMention(embed2)
      .catch(err => console.log(err))
  }
  if(args[0].includes(".")) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("Please use entire numbers")
        return message.lineReplyNoMention(embed)
    }
   let embed3 = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setTimestamp()
  .setDescription(`You can't deposit negative money!`);

  if (message.content.includes('-')) { 
      return message.lineReplyNoMention(embed3)
 }
    const embed4 = new Discord.MessageEmbed()
  .setColor('RED')
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setTimestamp()
  .setDescription(`You don't have that much money!`);

  if (member < args[0]) {
      return message.lineReplyNoMention(embed4)
  }
  if(isNaN(args[0])) {
    let embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setFooter("Error")
  .setTimestamp()
  .setDescription(`That is not a number, though...`);
    return message.lineReplyNoMention(embed)
  }
  else {
    const embed5 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Success")
    .setFooter("Deposit")
    .setTimestamp()
    .setDescription(`You have deposited ${args[0]} ₿ into your bank!`);

  message.lineReplyNoMention(embed5)
  db.add(`bank_${user.id}`, args[0])
  db.subtract(`money_${user.id}`, args[0])
  }
  }
  }
}