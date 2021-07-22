const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "hunt",
  description: "hunt",
  async execute(client, message, args) {
    if(!args[0]) {
    let user = message.author
    let amount = Math.floor(Math.random() * 1000) + 1000;
    let usablecookierifle = await db.get(`usablecookierifle_${user.id}`)
   let chance = Math.random() * 100
   let timeout = 180000;

     let hunt = await db.fetch(`hunt_${user.id}`);

  if (hunt !== null && timeout - (Date.now() - hunt) > 0) {
    let time = ms(timeout - (Date.now() - hunt));
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setDescription(`You've already went hunting!`)
    .setFooter(`Hunt again in ${time}`)
    message.lineReplyNoMention(timeEmbed)
  }
    else if(!usablecookierifle) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error")
      .setColor("RED")
      .setFooter("Error")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setDescription(`You don't have usable cookie rifles. If you have a cookie rifle in your inventory use \`\`b!use cookierifle\`\` and use this command again. :)`)
     message.lineReplyNoMention(embed)
    }
   else if(chance < 30) {
    db.subtract(`usablecookierifle_${user.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Oops :(")
    .setColor("RED")
    .setFooter("Oops")
    .setTimestamp()
    .setDescription("You just lost your cookie rifle. Oopsie. Now you need another cookie rifle to continue hunting! :(")
    message.lineReplyNoMention(embed)
  } 
  else if(usablecookierifle) {
    let weather = db.get(`weather_${client.id}`)
    let randomdeer = Math.floor(Math.random() * 5) + 1
    if(weather === "Sunny") {
      randomdeer = randomdeer
    }
    else if(weather === "Rainy") {
      randomdeer = Math.floor(Math.random() * 3) + 1
    }
    else if(weather === "Winter") {
      randomdeer = Math.floor(Math.random() * 6) + 2
    }
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
    db.add(`money_${user.id}`, amount)
    db.add(`deer_${user.id}`, randomdeer)
    db.set(`hunt_${user.id}`, Date.now())
    let embed = new Discord.MessageEmbed()
    .setFooter(`Weather: ${weather}`)
    .setTitle(":deer: Hunting")
    .setColor("GREEN")
    .setTimestamp()
    .setDescription(`**__You Hunted__** \n\n\`\`${randomdeer}\`\` Deer :deer: \n**${amount}** ₿${boostermessage}`)
    message.lineReplyNoMention(embed);
  }
  }
  else if(args[0].toLowerCase() === "lb" || args[0].toLowerCase() === "leaderboard") {
    const difarr = [];
    client.users.cache.forEach(user => {
      difarr.push(user)
    })
    const allmemberlen = difarr.length;
    let people = 0;
    let peopleToShow = 10;

    let mes = [];
    for(let i = 0; i < allmemberlen; i++) {
      const amount = db.get(`deer_${difarr[i].id}`) 

      if(amount === null) {
        continue
      }
      mes.push({
        name: difarr[i].username,
        amount: amount
      });
    }


    const realArr = []
    mes.sort((a, b) => b.amount - a.amount);
    for(let k = 0; k < mes.length; k++) {
      people++
      if(people >= peopleToShow) {
        continue
      }
        realArr.push(`**${mes[k].name}** - ${mes[k].amount}`)
    }
    const finalLB = realArr.join('\n')

    let embed = new Discord.MessageEmbed()
    .setTitle(`**Top 10 Hunters**`)
    .setDescription(finalLB)
    .setFooter(`This leaderboard is mostly use for only events`)
    .setThumbnail("https://cdn.discordapp.com/attachments/843097982815436820/846477580164136980/1f98c.png")
    .setColor("#964B00")

    message.channel.send(embed)
  }
  }
}