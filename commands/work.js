const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "work",
  description: "Work for money!",
  async execute(message, args) {
     let user = message.author;
    let author = await db.fetch(`work_${user.id}`)

    let timeout = 2200000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error >:(")
        .setFooter(`Try again in ${time}`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You have already worked recently!`);
        message.lineReplyNoMention(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic', "E-Girl", "Streamer", "Dog food taster"]

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 991) + 9;
        let embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Success")
        .setFooter("Work")
        .setTimestamp()
        .setDescription(`You worked as a \`\`${replies[result]}\`\` and earned \`\`${amount}\`\` ₿`);
        message.lineReply(embed1)
        
        db.add(`money_${user.id}`, amount)
        db.set(`work_${user.id}`, Date.now())
        db.add(`workuses_${user.id}`, 1)
        db.add(`xp_${user.id}`, 7)
   let chance = Math.random() * 100
  if (chance <= 50) {
    db.add(`book_${user.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Congrats")
    .setColor("GREEN")
    .setFooter("Book")
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/emojis/833394395184627752.gif?v=1")
    .setDescription(`You found a book! Do \`\`b!inv\`\` to see, or \`\`b!sell\`\` book to sell it!`)
    message.channel.send(embed)
  }
  else if(chance <= 7) {
    db.add(`epicbox_${user.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/emojis/856217663788548106.png?v=1")
    .setTitle(`Congrats`)
    .setColor("GREEN")
    .setFooter(`Epic Box`)
    .setDescription(`You found an epic box! do \`\`b!inv\`\` to see and \`\`b!use epicbox\`\` to use it!`)
    message.channel.send(embed)
  }
  }
}
}