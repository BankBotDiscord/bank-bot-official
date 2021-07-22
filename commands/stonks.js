const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "stonks",
  description: "STONKS",
  async execute(message, args) {
    let user = message.author;
    let luckycoinsee = await db.get(`usableluckycoin_${user.id}`) 
    if(!luckycoinsee) {
    let cooldown = 800000;
    let amount = Math.floor(Math.random() * 241) + 9; 

    let cooldowntimecheck = await db.fetch(`stonkss_${user.id}`)

     if (cooldowntimecheck !== null && cooldown - (Date.now() - cooldowntimecheck) > 0) {
    let time = ms(cooldown - (Date.now() - cooldowntimecheck));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setDescription(`You've already collected your stonks reward!`)
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setFooter(`Collect it again in ${time}`)
    message.lineReplyNoMention(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("STONKS")
  .setThumbnail(`https://cdn.discordapp.com/attachments/833397975820009506/835214139311784007/stonks.jpg`)
  .setFooter(`Want a higher reward? use lucky coins!`)
  .setDescription(`You just won \`\`${amount}\`\` ₿`);
  message.lineReply(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`stonkss_${user.id}`, Date.now())
  db.add(`stonksuses_${user.id}`, 1)
  db.add(`stonksshinycoal_${user.id}`, 1)
  db.add(`stonkspickaxe_${user.id}`)
  db.add(`xp_${user.id}`, 8)
  }
  
  let stonksshinycoal = db.get(`stonksshinycoal_${user.id}`)
  let stonkspickaxe = db.get(`stonkspickaxe_${user.id}`)
  if(stonksshinycoal === 100) {
    db.set(`stonksshinycoal_${user.id}`, 0)
    db.add(`shinycoal_${user.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Congrats!")
    .setColor("GREEN")
    .setFooter("Rare item")
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/emojis/834923136167575582.gif?v=1")
    .setDescription(`You just got a \`\`shiny coal\`\`! Go to b!inv, or just sell it with b!sell!`)
    message.channel.send(embed)
  } 
  if(stonkspickaxe === 200) {
    db.set(`stonkspickaxe_${user.id}`, 0)
    db.add(`pickaxe_${user.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Congrats!")
    .setColor("GREEN")
    .setFooter("Collectable item")
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/emojis/835263253806186548.png?v=1")
    .setDescription(`You just got a \`\`pickaxe\`\`! Go to b!inv to see!`)
    message.channel.send(embed)
  } 
  }
   else if(luckycoinsee >= 1) {
  let amount = Math.floor(Math.random() * 241) + 9; ;
  let amountt = Math.floor(luckycoinsee * 100)
  let amounttt = Math.floor(amount + amountt)
  let cooldown = 1800000;

    let cooldowntimecheck = await db.fetch(`stonkss_${user.id}`)

     if (cooldowntimecheck !== null && cooldown - (Date.now() - cooldowntimecheck) > 0) {
    let time = ms(cooldown - (Date.now() - cooldowntimecheck));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setDescription(`You've already collected your stonks reward!`)
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setFooter(`Collect it again in ${time}.`)
    message.lineReplyNoMention(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("DARK_BLUE")
  .setTitle("STONKS")
    .setThumbnail(`https://cdn.discordapp.com/attachments/833397975820009506/835214139311784007/stonks.jpg`)
  .setDescription(`You just won \`\`${amounttt}\`\` ₿!`);
  message.lineReply(moneyEmbed)
  db.add(`money_${user.id}`, amounttt)
  db.set(`stonkss_${user.id}`, Date.now())
  db.add(`stonksuses_${user.id}`, 1)
  db.add(`stonksshinycoal_${user.id}`, 1)
  db.add(`stonkspickaxe_${user.id}`, 1)
  db.add(`xp_${user.id}`, 8)
  }
  
  let stonksshinycoal = db.get(`stonksshinycoal_${user.id}`)
  let stonkspickaxe = db.get(`stonkspickaxe_${user.id}`)
  if(stonksshinycoal === 50) {
    db.set(`stonksshinycoal_${user.id}`, 0)
    db.add(`shinycoal_${user.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Congrats!")
    .setColor("GREEN")
    .setFooter("Rare item")
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/emojis/834923136167575582.gif?v=1")
    .setDescription(`You just got a \`\`shiny coal\`\`! Go to b!inv, or just sell it with b!sell.`)
    message.channel.send(embed)
  } 
  if(stonkspickaxe === 200) {
    db.add(`pickaxe_${user.id}`)
    db.set(`stonkspickaxe_${user.id}`, 0)
    let embed = new Discord.MessageEmbed()
    .setTitle("Congrats!")
    .setColor("GREEN")
    .setFooter("Collectable item")
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/emojis/835263253806186548.png?v=1")
    .setDescription(`You just got a \`\`pickaxe\`\`! Go to b!inv to see!`)
    message.channel.send(embed)
  }  
  }
}
}