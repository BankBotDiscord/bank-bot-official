const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "adventure",
  description: "adventures",
  async execute(message, args) {
    let user = message.author
    let developer = db.get(`developer_${user.id}`)
    let timeout = 3600000;
  let adventure = await db.fetch(`adventure_${user.id}`);

  if (adventure !== null && timeout - (Date.now() - adventure) > 0) {
    let time = ms(timeout - (Date.now() - adventure));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setDescription(`You've already adventured`)
    .setFooter(`Collect it again in ${time}`)
    message.lineReplyNoMention(timeEmbed)
  }
  else {
    let events = [
      "you slipped in a rock and lost 500 coins",
      "you just died by a venenous animal and lost 750 coins",
      "you were bitten by a bear and barely survived, althought he stole your wallet and you lost 200 coins",
      "You adventured but found nothing, neither you lost anything",
      "You found a rich person in danger and saved him, as a thanks he gave you 2500 coins",
      "You found a gold cave and won 5000 coins",
      "You found diamonds on a lost truck on the woods, you just won 10k coins",
      "You just found a treasure and got 25k coins",
      "You adventured and some Dog bit you and you lost 150 Coins",
    ]
    let eventresult = Math.floor(Math.random() * events.length)
    db.set(`adventure_${user.id}`, Date.now())
    let event = events[eventresult];
    if(event === "you slipped in a rock and lost 500 coins") {
    db.subtract(`money_${user.id}`, 500)
    }
    if(event === "you just died by a venenous animal and lost 750 coins") {
    db.subtract(`money_${user.id}`, 750)
    }
    if(event === "you were bited by a bear and barely survived, althought he stole your wallet and you lost 200 coins") {
    db.subtract(`money_${user.id}`, 200)
    }
    if(event === "You found a rich person in danger and saved him, as a thanks he gave you 2500 coins") {
    db.add(`money_${user.id}`, 2500)
    }
    if(event === "You found a gold mine and won 5000 coins") {
    db.add(`money_${user.id}`, 5000)
    }
    if(event === "You found diamonds on a lost truck on the woods, you just won 10k coins") {
    db.add(`money_${user.id}`, 10000)
    }
    if(event === "You just found a treasure and got 25k coins") {
    db.add(`money_${user.id}`, 25000)
    }
    if(event === "You adventured and some Dog bit you and you lost 150 Coins") {
    db.subtract(`money_${user.id}`, 150)
    }
    let embed = new Discord.MessageEmbed()
    .setTitle(`Adventure`)
    .setColor("ORANGE")
    .setTimestamp()
    .setFooter(`Lol`)
    .setDescription(`${events[eventresult]}`)
    message.lineReply(embed)
    db.add(`xp_${user.id}`, 3)
  }
  }
}