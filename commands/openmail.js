const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "openmail",
  description: "opens the mail",
  execute(message, args) {
    let user = message.author
    if(!args[0]) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`what`)
      .setColor("RED")
      .setDescription(`What you want to open tho?`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
    }
    else if(args[0].toLowerCase() === "mail" || args[0].toLowerCase() === "mailbox" || args[0].toLowerCase() === "mb") {
      let profilecolor = db.get(`profilecolor_${user.id}`)
      if(!profilecolor) {
          profilecolor = "FFA550"
      }
      let mail = new Discord.MessageEmbed()
      .setTitle(`Your last mail`)
      .setColor(profilecolor)
      .setThumbnail("https://cdn.discordapp.com/emojis/851084115229802507.gif?v=1")
       let newmail = db.get(`maill_${user.id}`)
        if(newmail >= 1) {
          let recentmail = db.get(`mail_${user.id}`)
          let usermail = db.get(`usermail_${user.id}`)
          mail.setDescription(`${usermail}\n${recentmail}`)
        }
        else if(!newmail || newmail === 0) {
          mail.setDescription(`You do not have new mail!`)
        }
      message.lineReplyNoMention(mail)
      db.delete(`maill_${user.id}`)
    }
  }
}