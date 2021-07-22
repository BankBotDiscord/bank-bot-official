const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "unmute",
  description: "unmutes someone",
  execute(message, args) {
    let moderation = db.get(`moderation_${message.guild.id}`)
    if(moderation === true) {
      if(message.member.hasPermission("MANAGE_ROLES")) {
       let user = message.mentions.members.first()
       let role = message.guild.roles.cache.find(role => role.name.toLowerCase() === "muted")
       if(!user) {
         let embed = new Discord.MessageEmbed()
         .setTitle(`Error >:(`)
         .setColor("RED")
         .setDescription(`Please specify an user to mute`)
         .setFooter(`NU`)
         .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
         .setTimestamp()
         message.lineReplyNoMention(embed)
       }
       else if(!role) {
         let embed = new Discord.MessageEmbed()
         .setTitle(`Error >:(`)
         .setColor("RED")
         .setDescription(`There is no role for mute, please create a role called 'muted' or do \`\`b!settings moderation set muterole rolename\`\``)
         .setFooter(`NR`)
         .setTimestamp()
         .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1") 
         message.lineReplyNoMention(embed)
       }
       else {
         let embed = new Discord.MessageEmbed()
         .setTitle(`Unmuted`)
         .setDescription(`The user ${user.user.username} was unmuted by the moderator ${message.author.username}`)
         .setColor("GREEN")
         .setFooter(`Lol`)
         .setTimestamp()
         message.channel.send(embed)
         let embed1 = new Discord.MessageEmbed()
         .setTitle(`Unmuted`)
         .setDescription(`You were unmuted on ${message.guild.name}`)
         .setFooter(`Lol`)
         .setTimestamp()
         .setColor("RED")
         user.send(embed1)
             user.roles.remove(role)
       }
      }
      else {
        let embed = new Discord.MessageEmbed()
         .setTitle(`Error >:(`)
         .setColor("RED")
         .setDescription(`You don't have permissions to do that tho lol`)
         .setFooter(`NP`)
         .setTimestamp()
         .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1") 
         message.lineReplyNoMention(embed)
      }
    }
    else {
      let embed = new Discord.MessageEmbed()
    .setTitle(`No Moderation!`)
    .setColor("RED")
    .setDescription(`This server is not protected right now! if you want moderation enabled again on this server, please use b!settings enable moderation`)
    .setFooter(`b!settings `)
    .setTimestamp()
         .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1") 
         message.lineReplyNoMention(embed)
    }
  }
}