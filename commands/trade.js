const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "trade",
  description: "trade",
  execute(message, args) {
    let firstitem = args[0]
    if(!firstitem) {
    let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`No first item`)
        .setDescription(`Choose the item you want to give to the user `)
        .setColor("RED")
        message.lineReplyNoMention(embed)
    }
    else {
    let firstquantity = args[1]
      if(!firstquantity) {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`No amount`)
        .setDescription(`Choose an amount of that item to trade`)
        .setColor("RED")
        message.lineReplyNoMention(embed)
    }
    else {
      
    let user = message.mentions.members.first()
if(!args[2] && !user) {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`No user`)
        .setDescription(`if you want to trade, at least ping the person who you want to trade with`)
        .setColor("RED")
        message.lineReplyNoMention(embed)
    }
    else {
      if(args[3] ==! "for") {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`No user`)
        .setDescription(`Wrong connector! use "for" to not be confusing! \`\`b!trade <youritem> <yourquantity> <user> for <user's item> <user's item quantity>`)
        .setColor("RED")
        message.lineReplyNoMention(embed)
    }
    else {
let secondquantity = args[4]
  if(!args[4]) {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`No second item`)
        .setDescription(`Choose the user's item you want`)
        .setColor("RED")
        message.lineReplyNoMention(embed)
    }
    else {
      
    let secondquantityy = args[5]
    if(!args[5]) {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`No second quantity`)
        .setDescription(`Choose the quantity of the user's items you want`)
        .setColor("RED")
        message.lineReplyNoMention(embed)
    }
    else {
      let embedrequest = new Discord.MessageEmbed()
      .setTitle(`New Trade Request!`)
      .setColor("GREEN")
      .setTimestamp()
      .setDescription(`${message.author.username} Wants to trade with you. \nYou receive: ${args[1]} of ${args[0]} \nYou give: ${args[5]} of ${args[4]}`)
      let embedsent = new Discord.MessageEmbed()
      .setTitle(`Your trade request was sent!`)
      .setColor("GREEN")
      message.lineReplyNoMention(embedsent)
      user.send(embedrequest)

      if(args[0].toLowerCase() === "cookie") {
        let cookie = db.get(`cookie_${user.id}`)
        let cookie1 = db.get(`cookie_${message.author.id}`)
        if(cookie < args[1]) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`Not enough items`)
        .setDescription(`You don't even have that many cookies`)
        .setColor("RED")
        message.lineReplyNoMention(embed)
        }
      }
    }
    }
    }
    }
    }
    }
  }
}