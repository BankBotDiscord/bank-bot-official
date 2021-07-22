const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "set",
  description: "sets something",
  execute(message, args) {
    let subcommand = args[0]
    if(!subcommand) {
      return
    }
    else if(subcommand.toLowerCase() === "rankmessage" || args[0].toLowerCase() === "rank") {
      let messagee = args.slice(1).join(' ')
      if(args[1].toLowerCase() === "message") {
        messagee = args.slice(2).join(' ')
      }
      db.set(`xpmessage_${message.author.id}`, `${messagee}`)
      let embed = new Discord.MessageEmbed()
      .setTitle(`New level up message embed`)
      .setDescription(`${messagee}`)
      .setColor("ORANGE")
      message.lineReplyNoMention(embed)
    }
    else if(subcommand.toLowerCase() === "xprate" || subcommand.toLowerCase() === "xp") {
      let xprate = args.slice(1).join(' ')
      if(args[1].toLowerCase() === "rate") {
        xprate = args.slice(2).join(' ')
      }
    }
  }
}