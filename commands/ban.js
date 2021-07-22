const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "ban",
  description: "bans someone",
  execute(client, message, args) {
    let moderation = db.get(`moderation_${message.guild.id}`)
    if(moderation === true) {
    let user = message.mentions.members.first()
    let reason = args.slice(1).join(' ')
    if(!user) {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTitle(`Error >:(`)
      .setColor("RED")
      .setTimestamp()
      .setFooter(`No user`)
      .setDescription(`You have to define a user tho`)
      message.lineReplyNoMention(embed)
    }
    else if(!reason) {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTitle(`Error >:(`)
      .setColor("RED")
      .setTimestamp()
      .setFooter(`No reason`)
      .setDescription(`Please say a reason to ban this member. If you dont want a reason just write No Reason.`)
      message.lineReplyNoMention(embed)
    }
    else if(!message.member.hasPermission("BAN_MEMBERS")) {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTitle(`Error >:(`)
      .setColor("RED")
      .setTimestamp()
      .setFooter(`No perms`)
      .setDescription(`Ha! You don't have permissions to do this. Nice try.`)
      message.lineReplyNoMention(embed)
    } 
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Ban`)
      .setColor("RED")
      .setFooter(`Follow the rules next time!`)
      .setTimestamp()
      .setDescription(`${user.user.tag} was banned by ${message.author.tag} because \`\`${reason}\`\``)
      let embed1 = new Discord.MessageEmbed()
      .setTitle(`You were banned...`)
      .setDescription(`You have been banned on ${message.guild.name} by ${message.author.tag} because ${reason}`)
      .setColor("RED")
      .setFooter(`Follow the rules next time!`)
      .setTimestamp()
      user.send(embed1)
      message.delete()
      message.channel.send(embed)
      user.ban()
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