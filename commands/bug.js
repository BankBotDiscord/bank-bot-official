const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "bug",
  description: "shows the bugs you reported and report a bug",
  execute(client, message, args) {
    let user = message.author
    let bugs = db.get(`bug_${user.id}`)
    if(!bugs || bugs === null) {
      bugs = 0
    }
    if(!args[0]) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Bug center`)
      .setColor("BLUE")
      .setDescription(`Hello there, want to report a bug? Use \`\`b!bug report <your bug analysis>\`\` \n to report a bug. If the bug was already reported (duplicated), then it will just be ignored. Otherwise, you will receive an award for your help. \n\nCurious about how many bugs you've helped with? you can see on your b!profile or just see the footer of this embed!`)
      .setTimestamp()
      .setFooter(`You helped with ${bugs} bugs!`)
      message.channel.send(embed)
    }
    else if(args[0].toLowerCase() === "report") {
      let bug = args.slice(1).join(' ')
      if(!bug) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`Nb`)
        .setTimestamp()
        .setDescription(`Please say the bug you want to report as, example: any type mistake on any embed, or a really weird bug, remember that if it is an duplicated bug (an already reported bug), we will just ignore it or deny it`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        message.channel.send(embed)
      }
      else {
        db.set(`bugreport_${user.id}`, bug)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Bug report sent!`)
        .setColor("GREEN")
        .setDescription(`Your bug report was successfully sent! \`\`${bug}\`\``) 
        .setTimestamp()
        .setFooter(`Your report tag: ${message.author.id}`)
        let embed1 = new Discord.MessageEmbed()
        .setTitle(`Bug report by ${message.author.username}`)
        .setColor("YELLOW")
        .setFooter(`It's report tag: ${message.author.id}`)
        .setDescription(`\`\`${bug}\`\``)
        .setTimestamp()
        message.channel.send(embed)
        const channel = client.channels.cache.find(channel => channel.id === "843106230636642314")
        channel.send(embed1).then(message => {
          message.react("⬆️")
          message.react("⬇️")
        })
      }
    }
  }
}