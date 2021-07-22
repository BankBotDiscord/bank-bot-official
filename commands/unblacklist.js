const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "unblacklist",
  description: "unblacklists someone",
  execute(message, args) {
    let user = message.mentions.users.first()
    let developer = db.get(`developer_${message.author.id}`)
    if(developer === true) {
      if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`Error`)
        .setTimestamp()
        .setDescription(`Please give a user to blacklist!`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        message.channel.send(embed)
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`UnBlacklist`)
        .setColor("GREEN")
        .setFooter(`Unblacklisted`)
        .setTimestamp()
        .setDescription(`The user ${user.username} was unblacklisted by the developer ${message.author.username}`)
        message.channel.send(embed)
        db.delete(`blacklist_${user.id}`)
      }
    }
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setDescription(`You are not a developer, or don't have permission to use this command. If you believe this is an error,contact an official bank bot dev`)
      .setFooter(`Error`)
      .setTimestamp()
      message.channel.send(embed)
    } 
  }
}