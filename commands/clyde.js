const Discord = require("discord.js")
const db = require("quick.db")
const fetch = require("node-fetch")

module.exports = {
  name: "clyde",
  description: "make clyde say shit",
    async execute(client, message, args) {

      let text = args.slice(0).join(' ')
      if(!text) {
        return message.channel.send("Make clyde say something c:")
      }

      else try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            await message.channel.send(attachment);
        } catch(e){
            message.lineReplyNoMention("Error, there is no user");
        }
    }
}