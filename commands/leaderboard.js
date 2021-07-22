const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "leaderboard",
  description: "leaderboard for money",
  async execute(client, message, args) {
    if(!args[0]) {
    const difarr = [];
    client.users.cache.forEach(user => {
      difarr.push(user)
    })
    const allmemberlen = difarr.length;
    let people = 0;
    let peopleToShow = 10;

    let mes = [];
    for(let i = 0; i < allmemberlen; i++) {
      const amount = db.get(`money_${difarr[i].id}`) 

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
        realArr.push(`**${mes[k].name}** - ${mes[k].amount}₿`)
    }
    const finalLB = realArr.join('\n')

    let embed = new Discord.MessageEmbed()
    .setTitle(`**Top 10 Richest users **`)
    .setDescription(finalLB)
    .setFooter(`This leaderboard is just for the wallet balance!`)
    .setThumbnail("https://cdn.discordapp.com/attachments/837066918590545990/841736170971201566/0a00e865c445d42dfb9f64bedfab8cf8.png")
    .setColor("ORANGE")

    message.channel.send(embed)
    }
    else if(args[0].toLowerCase() === "rps") {
      const difarr = [];
    client.users.cache.forEach(user => {
      difarr.push(user)
    })
    const allmemberlen = difarr.length;
    let people = 0;
    let peopleToShow = 5;

    let mes = [];
    for(let i = 0; i < allmemberlen; i++) {
      const amount = db.get(`rpswon_${difarr[i].id}`) 

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
        realArr.push(`**${mes[k].name}** - ${mes[k].amount} Wins`)
    }
    const finalLB = realArr.join('\n\n')

    let embed = new Discord.MessageEmbed()
    .setTitle(`**Leaderboard for the most rps Wins**`)
    .setDescription(finalLB)
    .setFooter(`This leaderboard is just for rps wins!`)
    .setThumbnail("https://discord.com/assets/3dcc54fffb253571d6eab25020e424f5.svg")
    .setColor("ORANGE")

    message.channel.send(embed)
    }
  }
}