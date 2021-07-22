const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "beg",
  description: "begs",
  async execute(message, args) {
    let ufl = db.get(`usedfireliquid_${message.author.id}`)
    if(!ufl) {
    let timeout = 45000;
    let user = message.author;
let amount = Math.floor(Math.random() * 14) + 9;

  let beg = await db.fetch(`beggg_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setDescription(`You've already begged recently!`)
    .setFooter(`Beg again in ${time}`)
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    message.lineReplyNoMention(timeEmbed)
  } else {
      const replies = ['Programmer','Builder','Waiter','Busboy','Chef','Mechanic', "E-Girl", "Streamer", "Dog food taster"]

  db.add(`beguses_${user.id}`, 1)
  let booster = db.get(`usedboost_${user.id}`)
    let boostermessage = "!"
    if(booster === true) {
      amount = amount * 2
      boostermessage = "\n\n<a:Bank_Item_Booster:848638950038044723> You have an active booster! so your reward is doubled"
    }
  else if(booster >= 1) {
    amount = amount * 2 * booster
    boostermessage = `\n\n<a:Bank_Item_Booster:848638950038044723> You have an active booster! so your reward is doubled`
  }

    const result1 = Math.floor((Math.random() * replies.length));
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .setTitle("STONKS")
  .setThumbnail(`https://cdn.discordapp.com/attachments/834871386991624237/835290269180100619/unknown.png`)
  .setTitle(`Cool, a \`\`${replies[result1]}\`\` just gave you money!`)
  .setDescription(`You just got \`\`${amount}\`\` ₿${boostermessage}`);
  message.lineReply(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.add(`xp_${user.id}`, 1)
  db.set(`beggg_${user.id}`, Date.now())
  let beguses = db.get(`beguses_${user.id}`)
  db.add(`begstick_${user.id}`, 1)
  let begstick = db.get(`begstick_${user.id}`)
  db.add(`begcr_${user.id}`, 1)
  let begcr = db.get(`begcr_${user.id}`)
  db.add(`beggs_${user.id}`, 1)
  let beggs = db.get(`beggs_${user.id}`)

if(begcr === 50) {
  db.delete(`begcr_${user.id}`)
  db.add(`cookierifle_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Rare item")
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
  .setDescription(`You just got a rare \`\`Cookie rifle\`\`!`)
  message.channel.send(embed) 
  }
  else if(begstick === 15) {
  db.delete(`begstick_${user.id}`)
  db.add(`stick_${user.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Commun item")
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/emojis/836712560198811708.png?v=1")
  .setDescription(`You just got a commun \`\`stick\`\`!`)
  message.channel.send(embed)
  }
  else if(beggs === 2500) {
    db.delete(`beggs_${user.id}`)
  db.add(`goldensticker_${user.id}`, 1) 
  let embed = new Discord.MessageEmbed()
  .setTitle("Congrats!")
  .setColor("GREEN")
  .setFooter("Really rare item")
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/emojis/835346593556332574.png?v=1")
  .setDescription(`You just got a really rare \`\`Golden sticker\`\`!`)
  message.channel.send(embed)
  }
  else if(beguses === 5000) {
    db.set(`begbadge_${user.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Congrats!`)
    .setColor("GREEN")
    .setFooter(`New Badge`)
    .setTimestamp()
    .setDescription(`You just got the beg badge! (used this command 10k times). \nIf you already had this badge then no, you will not have two of the same badges, although it will mark this historical moment cause 10k times of uses is a lot!`)
    message.channel.send(embed)
  }
  }
  
}
else {
  let embed = new Discord.MessageEmbed()
  .setTitle(`You can't use this command for a couple of minutes..`)
  .setColor("RED")
  message.lineReplyNoMention(embed)
}
  }
}