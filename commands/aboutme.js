const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "aboutme",
  description: "Sets the about me for your profile.",
  execute(message, args) {
    let user = message.author
    let aboutme = db.get(`aboutme_${user.id}`)
    if(!aboutme) {
      aboutme = "You currently don't have an about me! Why don't you make one?"
    }
    let aboutmeset = args.join(' ');

    if(!args[0]) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Your about me")
      .setFooter("About me")
      .setTimestamp()
      .setColor("ORANGE")
      .setDescription(`${aboutme}`)
      message.lineReplyNoMention(embed)
    }
    else if(aboutmeset) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Success!")
      .setColor("GREEN")
      .setTimestamp()
      .setFooter("Profile updated!")
      .setDescription(`Your about me was set to: ${aboutmeset}`)
      message.lineReplyNoMention(embed)
      db.set(`aboutme_${user.id}`, aboutmeset)
    }
  }
}