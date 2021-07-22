const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "suggest",
  description: "suggests something",
  execute(client, message, args) {
       let user = message.author
    let suggest = db.get(`suggest_${user.id}`)
    if(!suggest || suggest === null) {
      suggest = 0
    }
      let suggestion = args.slice(0).join(' ')
      if(!suggestion) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`Nb`)
        .setTimestamp()
        .setDescription(`You forgot to add an actuall suggestion lol`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        message.lineReplyNoMention(embed)
      }
      else {
        db.set(`suggestion_${user.id}`, suggestion)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Suggestion sent!`)
        .setColor("GREEN")
        .setDescription(`Your suggestion was successfully sent! \`\`${suggestion}\`\``) 
        .setTimestamp()
        .setFooter(`Your suggestion tag: ${message.author.id}`)
        let embed1 = new Discord.MessageEmbed()
        .setTitle(`New suggestion by ${message.author.username}`)
        .setColor("YELLOW")
        .setFooter(`It's suggestion tag: ${message.author.id}`)
        .setDescription(`\`\`${suggestion}\`\``)
        .setTimestamp()
        message.lineReplyNoMention(embed)
        const channel = client.channels.cache.find(channel => channel.id === "843106370983034893")
        channel.send(embed1).then(message => {
          message.react("⬆️")
          message.react("⬇️")
        })
      }
    }
  }