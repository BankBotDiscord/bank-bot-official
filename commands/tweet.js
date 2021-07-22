const Discord = require("discord.js")
const fetch = require("node-fetch");
const db = require("quick.db")

module.exports = {
  name: "tweet",
  description: "tweet",
    async execute(client, message, args) {
let fun = db.get(`fun_${message.guild.id}`)
if(fun === true) {
        let user = args[0];
        let text = args.slice(1).join(" ");
        let embedwaiting = new Discord.MessageEmbed()
        .setTitle(`Tweeting...`)
        .setColor("BLUE")

        let m = await message.channel.send(embedwaiting);

        if(!user){
            return m.edit("Enter a nickname");
        }

        if(!text){
            return m.edit("Send a tweet");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            m.delete()
            await message.channel.send(attachment);
        } catch(e){
            m.edit("Error, Try Again! Mention Someone");
        }
}
else {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Error >:(`)
  .setColor("RED")
  .setDescription("This server disabled fun commands, so you can't use them, to enable them again just ask admins to do b!settings enable fun")
  .setTimestamp()
  .setFooter(`b!settings enable fun`)
  message.channel.send(embed)
}
    }
};