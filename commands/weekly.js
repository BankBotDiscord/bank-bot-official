const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
  name: "weekly",
  description: "Each week, you can collect this. It gives a random amount of money between 5000 and 15000",
  async execute(message, args) {
    
  let user = message.author;
    let vipcheck = db.get(`vip_${user.id}`)
    let developercheck = db.get(`developer_${user.id}`)
    if(vipcheck === true || developercheck === true) {
  let timeout = 604800000; 
      if(message.member.id === "773620575155388457") {
        timeout = 1999
      }
  let amount = Math.floor(Math.random() * 10000) + 5000;

  let monthly = await db.fetch(`weekly_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setFooter(`Collect it again in ${time}`)
    .setDescription(`You have already collected your weekly reward`);
    message.lineReplyNoMention(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Success")
  .setFooter("Weekly")
  .setTimestamp()
  .setDescription(`You've collected your weekly reward of \`\`${amount}\`\` coins!`);
  message.lineReply(moneyEmbed);
  db.add(`money_${user.id}`, amount);
  db.set(`weekly_${user.id}`, Date.now());
  
  let chance = Math.random() * 100
  if(chance <= 25) {
  db.add(`sticker_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Rare item")
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/834885591299784805.png?v=1`)
  .setDescription(`Congrats, you have just won a \`\`sticker\`\` (item), go check out your \`\`b!inv\`\`!`)
  message.channel.send(embed)
  }
  else if(chance <= 15) {
  let sticker1check = db.get(`sticker1_${user.id}`)
  if(!sticker1check) {
  db.set(`sticker1_${user.id}`, true)
  db.add(`stickersglobal_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Sticker!")
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/858423544915165185.png?v=1`)
  .setDescription(`Congrats, you just got a usable sticker!`)
  message.channel.send(embed)
  }
}
  else if(chance <= 10) {
    let sticker2check = db.get(`sticker2_${user.id}`)
  if(!sticker2check) {
  db.set(`sticker2_${user.id}`, true)
  db.add(`stickersglobal_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Sticker!")
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/853725697133641760.png?v=1`)
  .setDescription(`Congrats, you just got a usable sticker!`)
  message.channel.send(embed)
  }
}
  else if(chance <= 10) {
let sticker3check = db.get(`sticker3_${user.id}`)
  if(!sticker3check) {
  db.set(`sticker3_${user.id}`, true)
  db.add(`stickersglobal_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Sticker!")
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/843125792833798156.gif?v=1`)
  .setDescription(`Congrats, you just got a usable sticker!`)
  message.channel.send(embed)
  }
}
 else if(chance <= 5) {
   let sticker4check = db.get(`sticker4_${user.id}`)
  if(!sticker4check) {
  db.set(`sticker4_${user.id}`, true)
  db.add(`stickersglobal_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Sticker!")
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/834923158518759455.gif?v=1`)
  .setDescription(`Congrats, you just got a usable sticker!`)
  message.channel.send(embed)
  }
}
else if(chance <= 5) {
  let sticker5check = db.get(`sticker5_${user.id}`)
  if(!sticker5check) {
  db.set(`sticker5_${user.id}`, true)
  db.add(`stickersglobal_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Sticker!")
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/847544258180153404.gif?v=1`)
  .setDescription(`Congrats, you just got a usable sticker!`)
  message.channel.send(embed)
  }
}
  }
    }
     else {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Error >:(`)
      .setTimestamp()
      .setDescription(`**This command is currently available to only VIPs.** \n**How can I obtain vip? By boosting our server, of course! \nClick the server link, and then you will be invited to the server. After that, use a nitro boost and have access to this command!** \n**Bot's server link: https://discord.gg/QpMDzdzZH5**`)
      .setFooter(`Oops`)
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setColor("RED")
      message.lineReplyNoMention(embed)
  }
} 
}