const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  description: "warns someone",
  execute(message, args) {
    let moderation = db.get(`moderation_${message.guild.id}`)
    if(moderation === true) {
    let user = message.mentions.members.first()
    let reason = args.slice(1).join(' ')
    if(!user) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setColor("RED")
      .setTimestamp()
      .setDescription(`You have to mention someone tho`)
      .setFooter(`No user`)
      message.lineReplyNoMention(embed)
    }
    else if(!message.member.hasPermission("MANAGE_ROLES")) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setColor("RED")
      .setTimestamp()
      .setDescription(`You don't have perms to do that tho`)
      .setFooter(`No perms`)
      message.lineReplyNoMention(embed)
    }
    else if(user.hasPermission("MANAGE_ROLES")) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setColor("RED")
      .setTimestamp()
      .setDescription(`You can't warn a person with the same perms as you`)
      .setFooter(`moderator`)
      message.lineReplyNoMention(embed)
    }
    else if(!reason) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setColor("RED")
      .setTimestamp()
      .setDescription(`if possible please put a reason to warn this user`)
      .setFooter(`No reason`)
      message.lineReplyNoMention(embed)
    }
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`${user.user.username} was warned by ${message.author.username}`)
      .setColor("GREEN")
      .setFooter(`Follow the freaking rules!`)
      .setTimestamp()
      .setDescription(`User was warned for: ${reason}`)
      let embed1 = new Discord.MessageEmbed()
      .setTitle(`You were warned!`)
      .setColor("RED")
      .setFooter(`Follow the freaking rules!`)
      .setTimestamp()
      .setDescription(`You were warned on ${message.guild.name} for: ${reason}`)
      user.send(embed1)
      message.channel.send(embed)
      db.add(`warn_${user.id}`, 1)
    }
  }
  else {
    let embed = new Discord.MessageEmbed()
    .setTitle(`No Moderation!`)
    .setColor("RED")
    .setDescription(`This server is not protected right now! if you want moderation enabled again on this server, please use b!settings enable moderation`)
    .setFooter(`b!settings `)
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1") 
    .setTimestamp()
    message.lineReplyNoMention(embed)
  }
  }
}