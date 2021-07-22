const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "promote",
  description: "Promotes someone to developer.",
  execute(message, args) {
    if(message.member.id === "773620575155388457", "801210597034426410") {
      if(!args[1]) {
    let user = message.mentions.users.first()
    if(!user) {
      user = message.author
    }
    db.set(`developer_${user.id}`, true)
    let embed = new Discord.MessageEmbed()
    .setTitle("GG")
    .setColor("FFF774")
    .setTimestamp()
    .setFooter("New developer")
    .setDescription(`New developer added to the team! ${user.username}!`)
    message.channel.send(embed);
      }
      else if(args[1].toLowerCase() === "moderator") {
        let user = message.mentions.users.first()
    if(!user) {
      user = message.author
    }
    db.set(`moderator_${user.id}`, true)
    let embed = new Discord.MessageEmbed()
    .setTitle("GG")
    .setColor("FFF774")
    .setTimestamp()
    .setFooter("New bank bot moderator")
    .setDescription(`New moderator added to the team! ${user.username}!`)
    message.channel.send(embed);
      }
    }
      else return
  }
}