const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "mine",
  description: "mine",
  async execute(message, args) {
    let user = message.author
    let pickaxe = db.get(`pickaxe_${user.id}`)
    if(!args[0]) {
     let timeout = 300000;
  let amount = Math.floor(Math.random() * 800) + 200;

  let mine = await db.fetch(`mine_${user.id}`);

  if (mine !== null && timeout - (Date.now() - mine) > 0) {
    let time = ms(timeout - (Date.now() - mine));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setDescription(`You've already mined`)
    .setFooter(`Mine again in ${time}`)
    message.lineReplyNoMention(timeEmbed)
  } 
  else {
    let chance = Math.random(Math.floor() * 100) + 1;
    let stone = "<:Bank_Item_Stone:848581410981806092>"
    if(chance >= 50) {
      stone = "<:Bank_Item_RubyOre:848581579462803499>"
      db.add(`rubyore_${user.id}`, amount).then(message => {
        setTimeout(function() {
          let rubyore = db.get(`rubyore_${user.id}`)
          db.add(`ruby_${user.id}`, rubyore)
          db.subtract(`rubyore_${user.id}`, rubyore)
        }, 3600000)
      })
    }
    let embed = new Discord.MessageEmbed()
    .setTitle(`MINING AWAY`)
    .setThumbnail("https://cdn.discordapp.com/attachments/843097982815436820/848577544487567400/2Q.png")
    .setDescription(`**__You have mined__** \n\n**${amount}** ₿ \n**${Math.floor(Math.random() * 5) + 1}** ${stone}`)
    .setFooter(`lol`)
    .setTimestamp()
    .setColor("ORANGE")
    message.lineReplyNoMention(embed)
    db.add(`money_${user.id}`, amount)
    if(chance < 70) {
    db.add(`stone_${user.id}`, Math.floor(Math.random() * 5) + 1)
    }
    db.set(`mine_${user.id}`, Date.now())
  }
  }
  }
}