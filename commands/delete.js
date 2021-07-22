const DIG = require("discord-image-generation");
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "delete",
  description: "delete",
  async execute(message, args) {
    let user = message.mentions.users.first() || message.author
      let useravatar = user.displayAvatarURL({ dynamic: false, format: 'png' })
        let img = await new DIG.Delete().getImage(`${useravatar}`);
        let attach = new Discord.MessageAttachment(img, "Delete.png");
        message.channel.send(attach)
  }
}