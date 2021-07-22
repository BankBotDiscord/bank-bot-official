const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "mute",
  description: "mute",
  execute(message, args) {
    
const { guild } = message
    let moderation = db.get(`moderation_${message.guild.id}`)
    if(moderation === true) {
      if(message.member.hasPermission("MANAGE_ROLES")) {
       let user = message.mentions.members.first()
       let reason = args.slice(2).join(' ')
       let role = message.guild.roles.cache.find(role => role.name.toLowerCase() === "muted")
       let time = args[1]
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
       
       else if(!time) {
         let embed = new Discord.MessageEmbed()
         .setTitle(`Error >:(`)
         .setColor("RED")
         .setDescription(`Please specify a time`)
         .setFooter(`NT`)
         .setTimestamp()
         .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1") 
         message.lineReplyNoMention(embed)
       }
       else if(!reason) {
         let embed = new Discord.MessageEmbed()
         .setTitle(`Error >:(`)
         .setColor("RED")
         .setDescription(`If possible, please say a reason for this mute`)
         .setFooter(`NRE`)
         .setTimestamp()
         .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1") 
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
       else if(user.hasPermission("MANAGE_ROLES")) {
         let embed = new Discord.MessageEmbed()
         .setTitle(`Error >:(`)
         .setColor("RED")
         .setDescription(`You can't mute an admin bro...`)
         .setFooter(`ADMIN`)
         .setTimestamp()
         .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1") 
         message.lineReplyNoMention(embed)
       }
       else if(!client.hasPermission("MANAGE_ROLES")) {
       let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTitle(`Error >:(`)
      .setColor("RED")
      .setTimestamp()
      .setFooter(`i don't have perms :c`)
      .setDescription(`I don't have perms to do this, can you give me some please? :c`)
      message.lineReplyNoMention(embed)
      }
       else {
         let embed = new Discord.MessageEmbed()
         .setTitle(`Muted`)
         .setDescription(`The user ${user.user.username} was muted for \`\`${reason}\`\` and for ${time} by the moderator ${message.author.username}`)
         .setColor("GREEN")
         .setFooter(`Lol`)
         .setTimestamp()
         message.channel.send(embed)
         let embed1 = new Discord.MessageEmbed()
         .setTitle(`Muted`)
         .setDescription(`You were mute on ${message.guild.name} for \`\`${reason}\`\` for ${time}`)
         .setFooter(`Lol`)
         .setTimestamp()
         .setColor("RED")
         user.send(embed1)
         user.roles.add(role).then(message => {
           setTimeout(function() {
             user.roles.remove(role)
           }, ms(time))
         })
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