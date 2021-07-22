const Discord = require("discord.js")
const db = require("quick.db")
const fetch = require("node-fetch")

module.exports = {
  name: "captcha",
  description: "captcha",
    async execute(client, message, args) {
let username = args[0]
let url = args.slice(1).join(' ')
if(!url) {
  url = message.author.displayAvatarURL()
}
if(!username) {
  username = message.author.username
}
      try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&url=${url}&username=${username}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            await message.channel.send(attachment);
        } catch(e){
            message.lineReplyNoMention("Error, there is no user");
        }
    }
}