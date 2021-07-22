const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "pst",
  description: "Sets the profile tag.",
  execute(message, args) {
    let user = message.author
  let vipcheck = db.get(`vip_${user.id}`)
  let developercheck = db.get(`developer_${user.id}`)
  let tagg = db.get(`tagprofile_${args[0]}`)
  if(vipcheck === true || developercheck === true) {
    if(!args[0]) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setFooter(`noarg`)
      .setColor(`RED`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTimestamp()
      .setDescription(`You have to say a tag, tho.. (example: 000001)`)
      message.lineReplyNoMention(embed)
    }
    else if(isNaN(args[0])) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setFooter(`isNaN`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setColor(`RED`)
      .setTimestamp()
      .setDescription(`That is not a number, tho..`)
      message.lineReplyNoMention(embed)
    }
    else if(args[0].length < 6 || args[0] > 1100000) {
    let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setFooter(`too short or long`)
      .setColor(`RED`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTimestamp()
      .setDescription(`This tag format is not valid. Make sure to use a 6 digit number or a number less then 1100000.`)
      message.lineReplyNoMention(embed)  
    }
    else if(!tagg) {
      db.set(`tagprofile_${user.id}`, args[0])
      let embed = new Discord.MessageEmbed()
      .setTitle(`Success`)
      .setColor(`GREEN`)
      .setFooter(`Tag profile`)
      .setTimestamp()
      .setDescription(`Your new profile tag is ${args[0]}!`)
     message.lineReplyNoMention(embed)
    }
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setFooter(`Tag exists!`)
      .setColor(`RED`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTimestamp()
      .setDescription(`This tag already exists!`)
      message.lineReplyNoMention(embed) 
    }
    }
  else {
    let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setTimestamp()
      .setDescription(`**This command is currently available to only VIPs.** \n**How can I get VIP? By boosting our server! Click the server link and then you will have access to the server. After that use a nitro boost and have access to this command!** \n**Bot's server link: https://discord.gg/QpMDzdzZH5**`)
      .setFooter(`Oops`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setColor("RED")
      message.lineReplyNoMention(embed)
  }
  }
}