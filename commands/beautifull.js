const DIG = require("discord-image-generation");
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "beautifull",
  description: "beautifull",
  async execute(client, message, args) {
    let user = message.mentions.users.first()
    if(!user) {
      user = message.author
    }
    let userfinal = user.displayAvatarURL({ dynamic: false, format: 'png' })
    let lol = await new DIG.Beautiful().getImage(`${userfinal}`);
    let attachment = new Discord.MessageAttachment(lol, "beautifull.png")
    message.channel.send(attachment)
  }
}