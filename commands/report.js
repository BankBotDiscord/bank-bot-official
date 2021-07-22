const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "report",
  description: "reports a user",
  execute(client, message, args) {
    let user = message.mentions.members.first()
    let reason = args.slice(1).join(' ')
    if(!reason) {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle("Error >:(")
        .setColor("RED")
        .setTimestamp()
        .setFooter(`NO REPORT P-P`)
        .setDescription("You didn't even add a reason to report the guy, what the heck man...")
        message.lineReplyNoMention(embed)
    }
    else if(!user) {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle("Error >:(")
        .setColor("RED")
        .setTimestamp()
        .setFooter(`No user`)
        .setDescription("Please specify a user")
        message.lineReplyNoMention(embed)
    }
    else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`${user.user.tag} reported by ${message.author.tag}!`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter(`ID: ${user.user.id}`)
        .setDescription(`user reported for: \`\`${reason}\`\``)
      let embed1 = new Discord.MessageEmbed()
        .setTitle(`${user.user.tag} reported!`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter(`If this is an error, contact a developer asap!`)
        .setDescription(`user reported for: \`\`${reason}\`\``)
        message.lineReplyNoMention(embed1)
      const channel = client.channels.cache.find(channel => channel.id === "843106230636642314")
        channel.send(embed).then(message => {
          message.react("⬆️")
          message.react("⬇️")
        })
    }
  }
}