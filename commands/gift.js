const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "gift",
  description: "Gifts an item to a user.",
  async execute(message, args) {
    let user = message.mentions.users.first()
    let userr = message.author
    let quantity = args[1]
    if(!quantity) {
      quantity = 1
    }
    if(!args[0]) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("Specify an item tho")
        return message.lineReplyNoMention(embed)
    }
     if(args[1].includes(".")) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("Please use entire numbers")
        return message.lineReplyNoMention(embed)
    }
    if(args[1].includes("-")) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("You can't use negative numbers, smh.")
        return message.lineReplyNoMention(embed)
    }
    if(args[0].toLowerCase() === "cookie" || args[0].toLowerCase() === "cookies") {
      let cookie = await db.get(`cookie_${userr.id}`)
      if(quantity > cookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setColor("RED")
        .setTimestamp()
        .setDescription(`You do not have that many cookies!`)
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`Please mention someone!`)
       message.lineReplyNoMention(embed)        
      }
      else {
        db.add(`cookie_${user.id}`, quantity)
        db.subtract(`cookie_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` cookies to \`\`${user.username}\`\`!`)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "cookierifle" || args[0].toLowerCase() === "cr" || args[0].toLowerCase() === "cookierifles") {
      let cookie = await db.get(`cookierifle_${userr.id}`)
      if(quantity > cookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You do not have that many cookie rifles!`)
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`Please mention someone!`)
        message.lineReplyNoMention(embed)        
      }
      else {
        db.add(`cookierifle_${user.id}`, quantity)
        db.subtract(`cookierifle_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` cookie rifles to \`\`${user.username}\`\`!`)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
      else if(args[0].toLowerCase() === "bread") {
      let bread = db.get(`bread_${userr.id}`)
      if(quantity > bread) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You do not have that much bread! What is happening, a famine? -Shicho`)
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`Please mention someone`)
        message.lineReplyNoMention(embed)        
      }
      else {
        db.add(`bread_${user.id}`, quantity)
        db.subtract(`bread_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` of bread to \`\`${user.username}\`\``)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "luckycoin" || args[0].toLowerCase() === "lc" || args[0].toLowerCase() === "luckycoins") {
      let cookie = await db.get(`luckycoin_${userr.id}`)
      if(quantity > cookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You do not have that many lucky coins`)
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setDescription(`Please mention someone`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        message.lineReplyNoMention(embed)        
      }
      else {
        db.add(`luckycoin_${user.id}`, quantity)
        db.subtract(`luckycoin_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` lucky coins to \`\`${user.username}\`\``)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "sticker" || args[0].toLowerCase() === "stickers") {
      let cookie = await db.get(`sticker_${userr.id}`)
      if(quantity > cookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setDescription(`You do not have that many stickers`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setDescription(`Please mention someone`)
       message.lineReplyNoMention(embed)       
      }
      else {
        db.add(`cookie_${user.id}`, quantity)
        db.subtract(`cookie_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` stickers to \`\`${user.username}\`\``)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "shinycoal" || args[0].toLowerCase() === "shinycoals") {
      let cookie = await db.get(`shinycoal_${userr.id}`)
      if(quantity > cookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setColor("RED")
        .setTimestamp()
        .setDescription(`You do not have that many shiny coals`)
       message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`Please mention someone`)
        message.lineReplyNoMention(embed)       
      }
      else {
        db.add(`shinycoal_${user.id}`, quantity)
        db.subtract(`shinycoal_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` shiny coals to \`\`${user.username}\`\``)
        .setFooter("Gift")
       message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "book" || args[0].toLowerCase() === "books") {
      let cookie = await db.get(`book_${userr.id}`)
      if(quantity > cookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You do not have that many books`)
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`Please mention someone`)
        message.lineReplyNoMention(embed)       
      }
      else {
        db.add(`book_${user.id}`, quantity)
        db.subtract(`book_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` books to \`\`${user.username}\`\``)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "goldensticker" || args[0].toLowerCase() === "goldenstickers") {
      let cookie = await db.get(`goldensticker_${userr.id}`)
      if(quantity > cookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You do not have that many golden sticker`)
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`Please mention someone`)
        message.lineReplyNoMention(embed)       
      }
      else {
        db.add(`goldensticker_${user.id}`, quantity)
        db.subtract(`goldensticker_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` golden stickers to \`\`${user.username}\`\``)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
       else if(args[0].toLowerCase() === "pickaxe" || args[0].toLowerCase() === "pickaxes") {
      let cookie = await db.get(`pickaxe_${userr.id}`)
      if(quantity > cookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You do not have that many pickaxes`)
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`Please mention someone`)
        message.lineReplyNoMention(embed)        
      }
      else {
        db.add(`pickaxe_${user.id}`, quantity)
        db.subtract(`pickaxe_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` pickaxes to \`\`${user.username}\`\``)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
      else if(args[0].toLowerCase() === "booster" || args[0].toLowerCase() === "boost" || args[0].toLowerCase() === "boosters") {
      let booster = await db.get(`booster_${userr.id}`)
      if(quantity > booster) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You do not have that many boosters`)
        message.lineReplyNoMention(embed)
      }
      else if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setFooter("Error")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`Please mention someone`)
        message.lineReplyNoMention(embed)        
      }
      else {
        db.add(`booster_${user.id}`, quantity)
        db.subtract(`booster_${userr.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You successfully gifted \`\`${quantity}\`\` booster to \`\`${user.username}\`\``)
        .setFooter("Gift")
        message.lineReplyNoMention(embed)
      }
    }
  }
}