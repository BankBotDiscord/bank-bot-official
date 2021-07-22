const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
  name: "daily",
  description: "Daily. You can collect this. It gives a random amount of money between 200 and 500.",
  async execute(message, args) {
  
  let user = message.author;
  let luckycoinsee = await db.get(`usableluckycoin_${user.id}`) 
  if(!luckycoinsee) {

  let timeout = 86400000;
  let amount = Math.floor(Math.random() * 300) + 200;

  let daily = await db.fetch(`daily_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setDescription(`You've already collected your daily reward! Stop being greedy! -Shicho`)
    .setFooter(`Collect it again in ${time}`)
    message.lineReplyNoMention(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .setTitle("Success")
  .setDescription(`You've collected your daily reward of \`\`${amount}\`\` ₿!`);
  message.lineReplyNoMention(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`daily_${user.id}`, Date.now())
  }
  }
  else if(luckycoinsee >= 1) {
  let amount = Math.floor(Math.random() * 300) + 200;
  let amountt = Math.floor(luckycoinsee * 100)
  let amounttt = Math.floor(amount + amountt)
  let timeout = 86400000;

  let daily = await db.fetch(`daily_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setDescription(`You've already collected your daily reward!`)
    .setFooter(`Collect it again in ${time}`)
    message.lineReplyNoMention(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .setTitle("Success")
  .setDescription(`You've collected your daily reward of \`\`${amounttt}\`\` ₿!`);
  message.lineReplyNoMention(moneyEmbed)
  db.add(`money_${user.id}`, amounttt)
  db.set(`daily_${user.id}`, Date.now())
  }
  }  
  }
} 