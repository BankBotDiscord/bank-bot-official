const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "blacklist",
  description: "Blacklists someone from the bot.",
  execute(message, args) {

    let user = message.mentions.users.first()
    let developer = db.get(`developer_${message.author.id}`)
    if(developer === true) {
    let reason = args.slice(1).join(' ')
    if(!reason) {
      reason = "No reason given"
    }
    else {
      if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`Error`)
        .setTimestamp()
        .setDescription(`Please give a user to blacklist!`)
        message.channel.send(embed)
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Blacklist`)
        .setColor("GREEN")
        .setFooter(`Blacklisted`)
        .setTimestamp()
        .setDescription(`The user ${user.user.username} was blacklisted by the developer ${message.author.username} for \`\`${reason}\`\``)
        message.channel.send(embed)
        db.set(`blacklist_${user.id}`, true)
      }
    }
    }
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setColor("RED")
      .setDescription(`You are not a developer or don't have permission to use this command, if you believe this is an error, please contact an official bank bot developer!`)
      .setFooter(`ND`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTimestamp()
      message.channel.send(embed)
    }
  }
}