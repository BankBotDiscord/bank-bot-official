const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "craft",
  description: "Crafts an item.",
  async execute(message, args) {
   let item = args[0]
   let user = message.author
   let amount = args[1]
   if(!amount) {
     amount = 1
   }
    let sticks = db.get(`stick_${user.id}`)
    let glass = db.get(`glass_${user.id}`)
    let shinycoal = db.get(`shinycoal_${user.id}`)
   if(!item) {
     let embed = new Discord.MessageEmbed()
     .setTitle("Crating table center")
     .setColor("ORANGE")
     .setFooter("bruh")
     .setDescription("What item do you want to craft, though?  \n (example: `b!craft fireliquid`)")
     .setTimestamp()
     .setImage("https://cdn.discordapp.com/attachments/834564034300608512/837075425192312882/41Xkzz3PsDL.png")
    message.lineReplyNoMention(embed)
    }
    
   else if(message.content.includes("-")) {
     return
   }
   else if(message.content.includes('.')) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("Please use entire numbers")
        return message.lineReplyNoMention(embed)
    }
    else if(item.toLowerCase() === "glass") {
      if(!sticks || sticks < 3) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setDescription(`You don't have enough sticks! :(`)
        .setTimestamp()
        message.lineReplyNoMention(embed)
      }
      else if(amount > sticks) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setDescription("You don't even have enough sticks to craft that much glass!")
        .setTimestamp()
        message.lineReplyNoMention(embed)
      }
      else if(sticks >= 3) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
        .setFooter("Craft")
        .setTimestamp()
        .setDescription(`You just crafted \`\`${amount}\`\` glass!`)
        .setColor("GREEN")
        message.lineReplyNoMention(embed)
        db.add(`glass_${user.id}`, amount)
        db.subtract(`stick_${user.id}`, Math.floor(amount * 3))
        db.add(`xp_${user.id}`, 5)
      }
    }
    else if(item.toLowerCase() === "fireliquid") {
      if(!sticks || sticks < 5) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setDescription(`You don't have enough sticks! :(`)
        .setTimestamp()
        message.lineReplyNoMention(embed)
      }
      else if(!glass || glass < 3) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setDescription(`You don't have enough glass! :(`)
        .setTimestamp()
        message.lineReplyNoMention(embed)        
      }
      else if(!shinycoal || shinycoal < 1) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setDescription(`You don't have enough shinycoal! :(`)
        .setTimestamp()
        message.lineReplyNoMention(embed)        
      }
      else if(amount > shinycoal) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription("You don't even have enough material to craft that many fire liquids!")
        .setTimestamp()
        message.lineReplyNoMention(embed)
      }
      else if(sticks >= 5 && glass >= 3 && shinycoal >= 1) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
        .setFooter("Craft")
        .setTimestamp()
        .setDescription(`You just crafted \`\`${amount}\`\` of fire liquids!`)
        .setColor("GREEN")
       message.lineReplyNoMention(embed)
        db.add(`fireliquid_${user.id}`, amount)
        db.subtract(`stick_${user.id}`, Math.floor(amount * 5))
        db.subtract(`glass_${user.id}`, Math.floor(amount * 3))
        db.subtract(`shinycoal_${user.id}`, amount)
        
        db.add(`xp_${user.id}`, 5)
      }
    }
    else if(item.toLowerCase() === "dust") {
      let amount = args[1]
      if(!amount) {
        amount = 1
      }
      let glass = db.get(`glass_${user.id}`)
      if(!glass) {
        let embed = new Discord.MessageEmbed()
       .setTitle("Error >:(")
      .setColor("RED")
     .setDescription("You don't even have glass!")
    .setFooter("no glass")
   .setTimestamp()
   .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  message.lineReplyNoMention(embed)
      }
      else if(isNaN(amount)) {
        let embed = new Discord.MessageEmbed()
       .setTitle("Error >:(")
      .setDescription("It's not a number, though... what did you expect?")
     .setColor("RED")
    .setFooter("isNaN")
   .setTimestamp()
   .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
   message.lineReplyNoMention(embed)
      }
      else if(amount > glass) {
        let embed = new Discord.MessageEmbed()
     .setTitle("Error >:(")
      .setDescription("You don't have enough glass!")
     .setFooter("no glass")
    .setColor("RED")
   .setTimestamp()
   .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
      }
      else {
        db.subtract(`glass_${user.id}`, amount)
db.add(`dust_${user.id}`, amount)
let embed = new Discord.MessageEmbed()
.setTitle("Craft")
.setColor("GREEN")
.setDescription(`You crafted ${amount} of dust!`)
.setFooter("k r a f t e d")
.setTimestamp()
message.lineReplyNoMention(embed)
db.add(`xp_${user.id}`, 5)
      }
    }
  }
}