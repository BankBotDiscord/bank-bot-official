const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "removemoney",
  description: "removes money",
  execute(message, args) {
    let developer = db.get(`developer_${message.author.id}`)
    if(developer === true) {
    let user = message.mentions.users.first()
    if(!user) {
      return
    }
    if(!args[1] || isNaN(args[1]) || args[1].includes(".") || args[1].includes('-')) {
      return
    }
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`You removed ${args[1]} from ${user.tag}`)
      .setColor("RED")
      .setFooter(`If ${user.tag} considers this perms abuse, he has all of the rights to report this, just make sure it has the message link or some kind of proof, otherwise it will be hard for us to know it was real`)
      message.channel.send(embed)
      db.subtract(`money_${user.id}`, args[1])
    }
    }
    else {
      return
    }
  }
}