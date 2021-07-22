const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "addmoney",
  description: "addes money",
  execute(message, args) {
    if(message.member.id === "773620575155388457", "801210597034426410") {
    let user = message.mentions.users.first()
    if(!user) {
      user = message.author
    }
    if(!args[1] || isNaN(args[1]) || args[1].includes(".") || args[1].includes('-')) {
      return message.lineReplyNoMention("Error")
    }
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`You added ${args[1]} of money on ${user.tag}'s balance`)
      .setColor("GREEN")
      .setFooter(`cool`)
      message.channel.send(embed)
      db.add(`money_${user.id}`, args[1])
    }
    }
    else {
      return
    }
  }
}