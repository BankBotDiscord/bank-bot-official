const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "mailbox",
  description: "mailbox things",
  async execute(client, message, args) {
    let subcommand = args[0]
    let user = message.author
    if(!subcommand) {
      let mailbox = db.get(`mailbox_${user.id}`)
      if(mailbox === true) {
        let profilecolor = db.get(`profilecolor_${user.id}`)
        if(!profilecolor) {
          profilecolor = "FFA550"
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(`:mailbox: ${message.author.username}'s Mailbox`)
        .setColor(profilecolor)
        .setFooter(`Mail Box!`)
        .setThumbnail("https://cdn.discordapp.com/emojis/851084115229802507.gif?v=1")
        let newmail = db.get(`maill_${user.id}`)
        if(newmail >= 1) {
          let recentmail = db.get(`mail_${user.id}`)
          let usermail = db.get(`usermail_${user.id}`)
          embed.addField(`<a:Bank_NewMail:851084115229802507> You have (**${newmail}**) unread mails`, `Use b!open mail to view more mails!`)
          embed.addField(`Most recent:`, `\n\n${usermail}\n${recentmail}`)
        }
        else if(!newmail || newmail === 0) {
          embed.setDescription(`You do not have new mail!`)
        }
        message.channel.send(embed)
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setDescription(`You do not have a mail box! please create one with \`\`b!mailbox create\`\``)
        .setColor("RED")
        .setFooter(`no mailbox`)
        message.lineReplyNoMention(embed)
      }
    }
    else if(subcommand.toLowerCase() === "set" || subcommand.toLowerCase() === "create") {
      let user = message.author
      let mailbox = db.get(`mailbox_${user.id}`)
      if(!mailbox) { 
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/851084115229802507.gif?v=1")
        .setTitle(`Mailbox created!`)
        .setDescription(`Your mailbox was created!`)
        .setColor("GREEN")
        .setFooter(`Mailbox`)
        message.lineReplyNoMention(embed)
        db.set(`mailbox_${user.id}`, true)
        db.set(`mailboxx_${client.id}_${user.id}`, true)
      }
      else {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setDescription(`You already have a mailbox!`)
        .setColor("RED")
        .setFooter(`smh my head`)
        message.lineReplyNoMention(embed)
      }
    }
    else if(subcommand.toLowerCase() === "send") {
      let usertosend = message.mentions.users.first()
      let ma = message.author
      let mts = args.slice(2).join(' ')
      if(!usertosend) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setDescription(`Please specify an user to send the message to`)
        .setColor("RED")
        .setFooter(`smh my head`)
        message.lineReplyNoMention(embed)
      }
      else if(!mts) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setDescription(`if you want to send a message, you need a message... bruh`)
        .setColor("RED")
        .setFooter(`smh my head`)
        message.lineReplyNoMention(embed)
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/851084115229802507.gif?v=1")
        .setTitle(`Mail sent!`)
        .setDescription(`You sent ${usertosend.username}: \n${mts}`)
        .setColor("FF6969")
        .setFooter(`smh my head`)
        message.lineReplyNoMention(embed)
        db.add(`maill_${usertosend.id}`, 1)
        db.set(`mail_${usertosend.id}`, mts)
        db.set(`usermail_${usertosend.id}`, message.author.tag)
      }
    }
  }
}