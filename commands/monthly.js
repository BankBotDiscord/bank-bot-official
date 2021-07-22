const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
  name: "monthly",
  description: "Each month you can collect this. It gives a random amount of money between 10,000 and 35,000.",
  async execute(message, args) {
  let user = message.author;
  let luckycoinsee = await db.get(`usableluckycoin_${user.id}`) 
  if(!luckycoinsee) {
  let timeout = 2592000000; 
  let amount = Math.floor(Math.random() * 25000) + 10000;

  let monthly = await db.fetch(`monthly_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setFooter(`Collect it again in ${time}`)
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setDescription(`You have already collected your monthly reward! You are hungry for more.`);
    message.lineReplyNoMention(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Success")
  .setFooter("Monthly")
  .setTimestamp()
  .setDescription(`You've collected your monthly reward of \`\`${amount}\`\` coins!`);
  message.lineReply(moneyEmbed);
  db.add(`money_${user.id}`, amount);
  db.set(`monthly_${user.id}`, Date.now());
  db.add(`monthlyuses_${user.id}`, 1)
  let monthlyuses = db.get(`monthlyuses_${user.id}`)
   if(monthlyuses === 3) {
  db.add(`sticker_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Rare item")
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/834885591299784805.png?v=1`)
  .setDescription(`Congrats, you just won a \`\`sticker\`\`! Go check out your \`\`b!inv\`\`.`)
  message.lineReplyNoMention(embed)
  }
  }
  }
  if(luckycoinsee >= 1) {
  let user = message.author;
  let timeout = 2592000000; 
  let amount = Math.floor(Math.random() * 25000) + 10000;
  let amountt = Math.floor(luckycoinsee * 100)
  const amounttt = Math.floor(amount + amountt)

  let monthly = await db.fetch(`monthly_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setFooter(`Collect it again in ${time}`)
    .setDescription(`You have already collected your monthly reward!`);
    message.lineReplyNoMention(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Success")
  .setFooter("Monthly")
  .setTimestamp()
  .setDescription(`You've collected your monthly reward of \`\`${amount}\`\` ₿!`);
  message.lineReply(moneyEmbed);
  db.add(`money_${user.id}`, amounttt);
  db.set(`monthly_${user.id}`, Date.now());
  db.add(`monthlyuses_${user.id}`, 1)
  let monthlyuses = db.get(`monthlyuses_${user.id}`)
   if(monthlyuses === 3) {
  db.add(`sticker_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Rare item")
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/834885591299784805.png?v=1`)
  .setDescription(`Congrats, you just won a \`\`sticker\`\`! Go check out your \`\`b!inv\`\`.`)
  message.lineReplyNoMention(embed)
  }
  else if(monthlyuses === 2) {  
    db.delete(`starterbadge_${user.id}`)
   db.set(`activebadge_${user.id}`, true)
    let embed1 = new Discord.MessageEmbed()
      .setTitle(`Thanks for using bank bot!`)
      .setColor("GREEN")
      .setTimestamp()
      .setDescription(`You just got an active badge! Do b!profile to see all your badges.`)
      .setFooter(`New badge`)
  message.lineReplyNoMention(embed1)
  }
  else if(monthlyuses === 4) {  
    db.delete(`starterbadge_${user.id}`)
   db.set(`superactivebadge_${user.id}`, true)
    let embed2 = new Discord.MessageEmbed()
      .setTitle(`Thanks for using bank bot for that long!`)
      .setColor("GREEN")
      .setTimestamp()
      .setDescription(`Wow 3 months of using this bot. You just earned the Super Active Badge! Do b!profile to see all of your badges.`)
      .setFooter(`New badge`)
      message.lineReplyNoMention(embed2)
  }
  else if(monthlyuses === 13) {
    db.delete(`starterbadge_${user.id}`)
    db.set(`bankerbadge_${user.id}`, true)
     let embed3 = new Discord.MessageEmbed()
      .setTitle(`Banker badge`)
      .setColor("GREEN")
      .setTimestamp()
      .setDescription(`1 year... thank you so much. That is historical. Thank you (from the entire team) for using this bot for so long. Also you just got the banker badge. You can do b!profile to see all of your badges.`)
      .setFooter(`New badge`)
     message.lineReplyNoMention(embed3)
  }
  }
  }
  }
  } 