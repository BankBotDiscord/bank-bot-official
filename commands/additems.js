const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "additems",
  description: "Adds items, only for devs.",
  async execute(message, args) {
    if(message.author.id === "773620575155388457" || message.author.id === "801210597034426410") {
    let user = message.mentions.users.first() || message.author;
    let amount = args[1]
    if(!amount) {
      amount = 1
    }
    if(args[0].toLowerCase() === "cookie" || args[0].toLowerCase() === "cookies") {
      db.add(`cookie_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of cookies!`)
      message.channel.send(embed)
    } 
       if(args[0].toLowerCase() === "shinycoal") {
      db.add(`shinycoal_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of shinycoals!`)
      message.channel.send(embed)
    } 
       if(args[0].toLowerCase() === "sticker" || args[0].toLowerCase() === "stickers") {
      db.add(`sticker_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of stickers!`)
      message.channel.send(embed)
    } 
       if(args[0].toLowerCase() === "cookierifle") {
      db.add(`cookierifle_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of cookie rifles!`)
      message.channel.send(embed)
    } 
        if(args[0].toLowerCase() === "luckycoin") {
      db.add(`luckycoin_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of luckycoins!`)
      message.channel.send(embed)
    } 
      if(args[0].toLowerCase() === "book" || args[0].toLowerCase() === "books") {
      db.add(`book_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of books!`)
      message.channel.send(embed)
    } 
      if(args[0].toLowerCase() === "goldensticker" || args[0].toLowerCase() === "goldenstickers") {
      db.add(`goldensticker_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of golden stickers!`)
      message.channel.send(embed)
    } 
      if(args[0].toLowerCase() === "bread") {
      db.add(`bread_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of bread!`)
      message.channel.send(embed)
    } 
        if(args[0].toLowerCase() === "pickaxe" || args[0].toLowerCase() === "pickaxes") {
      db.add(`pickaxe_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of pickaxes!`)
      message.channel.send(embed)
    } 
      if(args[0].toLowerCase() === "apple" || args[0].toLowerCase() === "apples") {
      db.add(`apple_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of apples!`)
      message.channel.send(embed)
    } 
     if(args[0].toLowerCase() === "glass" || args[0].toLowerCase() === "glass") {
      db.add(`glass_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of glass!`)
      message.channel.send(embed)
    } 
     if(args[0].toLowerCase() === "sticks" || args[0].toLowerCase() === "stick") {
      db.add(`stick_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of sticks!`)
      message.channel.send(embed)
    } 
    if(args[0].toLowerCase() === "fireliquid") {
      db.add(`fireliquid_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of Fire Liquid!`)
      message.channel.send(embed)
    } 
    if(args[0].toLowerCase() === "diamondblock") {
      db.add(`diamondblock_${user.id}`, amount)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given \`\`${amount}\`\` of diamond blocks`)
      message.channel.send(embed)
    } 
    if(args[0].toLowerCase() === "sticker1") {
      db.set(`sticker1_${user.id}`, true)
      db.add(`stickersglobal_${user.id}`, 1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given sticker 1 to ${user.username}`)
      message.channel.send(embed)
    } 
    if(args[0].toLowerCase() === "sticker2") {
      db.set(`sticker2_${user.id}`, true)
      db.add(`stickersglobal_${user.id}`, 1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given sticker 2 to ${user.username}`)
      message.channel.send(embed)
    } 
    if(args[0].toLowerCase() === "sticker3") {
      db.set(`sticker3_${user.id}`, true)
      db.add(`stickersglobal_${user.id}`, 1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given sticker 3 to ${user.username}`)
      message.channel.send(embed)
    } 
    if(args[0].toLowerCase() === "sticker4") {
      db.set(`sticker4_${user.id}`, true)
      db.add(`stickersglobal_${user.id}`, 1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given sticker 4 to ${user.username}`)
      message.channel.send(embed)
    } 
    if(args[0].toLowerCase() === "sticker5") {
      db.set(`sticker5_${user.id}`, true)
      db.add(`stickersglobal_${user.id}`, 1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given sticker 5 to ${user.username}`)
      message.channel.send(embed)
    } 
    if(args[0].toLowerCase() === "beta") {
      db.set(`betabadge_${user.id}`, true)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setFooter("Added")
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given the beta badge to ${user.username}`)
      message.channel.send(embed)
    }
    if(args[0].toLowerCase() === "es") {
      db.set(`earlysupporter_${user.id}`, true)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Success`)
      .setFooter(`Added`)
      .setTimestamp()
      .setColor("GREEN")
      .setDescription(`Given early supporter badge to ${user.username}`)
      message.channel.send(embed)
    }
  }
  else return
  }
}