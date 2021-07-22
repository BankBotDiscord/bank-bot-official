const DIG = require("discord-image-generation");
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "lisapresentation",
  description: "lisa presents",
  async execute(message, args) {
    let text = args.slice(0).join(' ')
    if(!text) {
      return message.lineReplyNoMention("Send something to lisa to present")
    }
    else {
        let img = await new DIG.LisaPresentation().getImage(`${text}`);
        let attach = new Discord.MessageAttachment(img, "LisaPresentation.png");
        message.channel.send(attach)
    }
  }
}