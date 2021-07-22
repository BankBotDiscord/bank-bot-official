const Discord = require("discord.js")
const db = require('quick.db')

module.exports  = {
  name: "demote",
  description: "Demotes someone.",
  execute(message, args) {
    if(message.member.id === "773620575155388457") {
      
    let user = message.mentions.users.first()
    if(!user) {
      user = message.author
    }
     db.set(`developer_${user.id}`, false)
    let embed = new Discord.MessageEmbed()
    .setTitle("F")
    .setColor("000001")
    .setTimestamp()
    .setFooter("Demotion")
    .setDescription(`Demotion of a developer from the team, ${user.username}, good bye!`)
    message.channel.send(embed)   
      } 
      else return
  }
}