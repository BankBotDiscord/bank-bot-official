const Canvas = require("canvas");
const Discord = require("discord.js");
const db = require("quick.db")

module.exports = {
    name: "facepalm",
    description: "facepalm",
    async execute(client, message, args) {
      let fun = db.get(`fun_${message.guild.id}`)
      if(fun === true) {
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member,
        m = await message.channel.send("Loading..."),
        canvas = Canvas.createCanvas(632, 357),
        ctx = canvas.getContext("2d");
        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 632, 357);

        let avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: "png", size: 512 }));
        ctx.drawImage(avatar, 199, 112, 235, 235);
        
        let layer = await Canvas.loadImage('https://raw.githubusercontent.com/Androz2091/AtlantaBot/master/assets/img/facepalm.png');
        ctx.drawImage(layer, 0, 0, 632, 357);

        let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "facepalm.png");

        m.delete();
        message.channel.send(attachment);
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