const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "profilecolorset",
  description: "Sets a color for your profile.",
  execute(message, args) {
    let user = message.author
    let profilecolor = db.get(`profilecolor_${user.id}`)
    if(!profilecolor) {
      profilecolor = "FFA500"
    }
    let color = args[0]
    if(!color) {
      let embed = new Discord.MessageEmbed()
      .setTitle(":arrow_backward: This is your current profile's color.")
      .setColor(`#${profilecolor}`)
      message.lineReplyNoMention(embed)
    }
    else if(!args[0]) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setDescription("Make sure this is a hex color. Example: ff6969")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setColor("RED")
      .setTimestamp()
      message.lineReplyNoMention(embed)
    }
    else if(args[0]) {
      let newprofilecolor = color
      let embed = new Discord.MessageEmbed()
      .setTitle(":arrow_backward: Success. Now your new profile color was set to the color you selected.")
      .setColor(`#${newprofilecolor}`)
      message.lineReplyNoMention(embed)
      db.set(`profilecolor_${user.id}`, color)
    }
  }
}