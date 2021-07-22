const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "start",
  description: "start pack",
  async execute(message, args) {
    let user = message.author
    db.add(`starttt_${user.id}`, 1)
    let b = await db.get(`starttt_${user.id}`)
    if(b < 2) {
      db.add(`bread_${user.id}`, 1)
      db.add(`money_${user.id}`, 300)
      db.set(`starterbadge_${user.id}`, true)
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Starter")
      .setTimestamp()
      .setDescription(`Starter pack redeemed! You got \`\`300\`\` ₿, \`\`1\`\` bread and a starter badge! `)
      message.lineReply(embed)
    }
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setFooter("Not a Starter")
      .setTimestamp()
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setDescription("You are not a starter, or you have already redeemed your starter kit!")
      return message.lineReplyNoMention(embed)
    }
  }
}