const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "resetdata",
  description: "resets data",
  execute(message, args) {
    let user = message.mentions.users.first()
    if(message.member.id === "773620575155388457") {
    if(!user) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Please specify an user`)
      .setColor("RED")
      message.lineReplyNoMention(embed)
    }
    else if(!args[1]) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Data reset`)
      .setColor("Yellow")
      .setFooter(`data reset`)
      .setTimestamp()
      .setDescription(`Data for ${user.username} reseted with success!`)
      message.lineReplyNoMention(embed)
      db.delete(`money_${user.id}`)
      db.delete(`bank_${user.id}`)
      db.delete(`vip_${user.id}`)
      db.delete(`bitcoin_${user.id}`)
    }
    else if(args[1].toLowerCase() === "book") {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Data reset`)
      .setColor("Yellow")
      .setFooter(`data reset`)
      .setTimestamp()
      .setDescription(`Book data for ${user.username}  was reseted with success!`)
      message.channel.send(embed)
      db.delete(`book_${user.id}`)
    }
    else if(args[1].toLowerCase() === "usedbooster" || args[1].toLowerCase() === "ub") {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Data reset`)
      .setColor("Yellow")
      .setFooter(`data reset`)
      .setTimestamp()
      .setDescription(`usedboost data for ${user.username}  was reseted with success!`)
      message.channel.send(embed)
      db.delete(`usedboost_${user.id}`)
    }
    else if(args[1].toLowerCase() === "bread") {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Data reset`)
      .setColor("Yellow")
      .setFooter(`data reset`)
      .setTimestamp()
      .setDescription(`Bread data for ${user.username}  was reseted with success!`)
      message.channel.send(embed)
      db.delete(`bread_${user.id}`)
    }
    else if(args[1].toLowerCase() === "usedfireliquid") {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Data reset`)
      .setColor("Yellow")
      .setFooter(`data reset`)
      .setTimestamp()
      .setDescription(`UFL data for ${user.username}  was reseted with success!`)
      message.channel.send(embed)
      db.delete(`usedfireliquid_${user.id}`)
    }
  }
  else {
    return
  }
}
}