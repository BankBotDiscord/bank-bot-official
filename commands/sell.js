const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "sell",
  description: "Sells an item.",
  async execute(message, args) {
    let user = message.author;
    
      let quantity = args[1]
    
  if(!args[0] || !quantity || !args[0] && !quantity) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("No item")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription("Choose any sellable item and quantity please c:")
        return message.lineReplyNoMention(embed)
    }

    else if(message.content.includes('.')) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("decimals")
        .setTimestamp()
        .setDescription("Please use entire numbers")
        return message.lineReplyNoMention(embed)
    }
     else if(args[1].includes("-")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("negative number")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription("You can't use negative numbers, smh.")
        return message.lineReplyNoMention(embed)
    }
    if(args[0].toLowerCase() === "sticker") {
      let sticker = await db.get(`sticker_${user.id}`)
      if(isNaN(quantity)) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`That is not a number!`)
        return message.lineReplyNoMention(embed)
      }
      if(quantity > sticker) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many stickers!`)
        return message.lineReplyNoMention(embed) 
      }
      if(sticker = 0) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't even have stickers...`)
        return message.lineReplyNoMention(embed)    
      }
      else {
      let amountofmoney = Math.floor(40000 * quantity)
      let diamondblock = db.get(`diamondblock_${user.id}`)
    if(!diamondblock) {
      let tax = amountofmoney * 0.06
  }
  else if(diamondblock >= 1) {
    let tax = amountofmoney * 0.04
  }
      let amountofmoney1 = Math.floor(amountofmoney - tax)
      db.subtract(`sticker_${user.id}`, quantity)
      db.add(`money_${user.id}`, amountofmoney1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Sell")
      .setTimestamp()
      .setDescription(`You sold \`\`${quantity}\`\` of stickers for \`\`${amountofmoney1}\`\` \n Tax: \`\`${tax}\`\` (6%)`)
      message.lineReplyNoMention(embed)
      }
    }
      if(args[0].toLowerCase() === "shinycoal") {
      let sticker = await db.get(`shinycoal_${user.id}`)
      if(isNaN(quantity)) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`That is not a number!`)
        return message.lineReplyNoMention(embed)
      }
      if(quantity > sticker) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many shiny coals!`)
        return message.lineReplyNoMention(embed) 
      }
      if(sticker = 0) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You don't even have shiny coals...`)
        return message.lineReplyNoMention(embed)    
      }
      else {
      let amountofmoney = Math.floor(25000 * quantity)
      let tax = Math.floor(amountofmoney * 0.06)
      let amountofmoney1 = Math.floor(amountofmoney - tax)
      db.subtract(`shinycoal_${user.id}`, quantity)
      db.add(`money_${user.id}`, amountofmoney1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Sell")
      .setTimestamp()
      .setDescription(`You sold \`\`${quantity}\`\` of shiny coals for \`\`${amountofmoney1}\`\` \n Tax: \`\`${tax}\`\` (6%)`)
      message.lineReplyNoMention(embed)
      }
    }
         if(args[0].toLowerCase() === "book" || args[0].toLowerCase() === "books") {
      let book = await db.get(`book_${user.id}`)
      if(isNaN(quantity)) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`That is not a number!`)
        return message.lineReplyNoMention(embed)
      }
      else if(quantity > book) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many books!`)
        return message.lineReplyNoMention(embed) 
      }
      else if(book = 0) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You don't even have books...`)
        return message.lineReplyNoMention(embed)    
      }
      else {
      let amountofmoney = Math.floor(100 * quantity)
      let tax = Math.floor(amountofmoney * 0.06)
      let amountofmoney1 = Math.floor(amountofmoney - tax)
      db.subtract(`book_${user.id}`, quantity)
      db.add(`money_${user.id}`, amountofmoney1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Sell")
      .setTimestamp()
      .setDescription(`You sold \`\`${quantity}\`\` of books for \`\`${amountofmoney1}\`\` \n Tax: \`\`${tax}\`\` (6%)`)
      message.lineReplyNoMention(embed)
      }
    }
       if(args[0].toLowerCase() === "goldensticker" || args[0].toLowerCase() === "gs") {
      let goldensticker = await db.get(`goldensticker_${user.id}`)
      if(isNaN(quantity)) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`That is not a number!`)
        return message.lineReplyNoMention(embed)
      }
      if(quantity > goldensticker) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You don't have that many stickers!`)
        return message.lineReplyNoMention(embed) 
      }
      if(goldensticker = 0) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't even have stickers...`)
        return message.lineReplyNoMention(embed)    
      }
      else {
      let random = Math.floor(Math.random() * 500000) + 500000;
      let amountofmoney = Math.floor(random * quantity)
      let tax = Math.floor(amountofmoney * 0.06)
      let amountofmoney1 = Math.floor(amountofmoney - tax)
      db.subtract(`goldensticker_${user.id}`, quantity)
      db.add(`money_${user.id}`, amountofmoney1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Sell")
      .setTimestamp()
      .setDescription(`You sold \`\`${quantity}\`\` of golden stickers for \`\`${amountofmoney1}\`\` \n Tax: \`\`${tax}\`\` (6%)`)
      message.lineReplyNoMention(embed)
      }
    }
    }
  }