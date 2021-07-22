const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "version",
  description: "sees the bot's version",
  execute(client, message, args) {
    
    let developer = db.get(`developer_${message.author.id}`)
    if(!args[0]) {
      let version = db.get(`version_${client.id}`)
      if(!version) {
        version = "0.5.1 (Beta)"
      }
      let latestupdate = db.get(`latestupdate_${client.id}`)
      if(!latestupdate) {
        latestupdate = "there were no recent updates."
      }
      let embed = new Discord.MessageEmbed()
      .setTitle(`Bank Bot's version`)
      .setColor("PURPLE")
      .setTimestamp()
      .setDescription(`Bank bot is currently on version ${version}. \n\n**How do versions work?** \nBank bot's version system works as commands, things, easter eggs... are being added and depending on how important and how many they are, bank bot's version will get updated, if you see that the version is bigger then 1, that means the bot is public, otherwise it is on beta or alpha phase \n\n**Latest update** \n${latestupdate}`)
      .setFooter(`${version}`)
      message.channel.send(embed)
    }
     else if(args[0].toLowerCase() === "update") {
       if(developer === true) {
        let version = args[1]
        let whatchange = args.slice(2).join(' ')
        let version1 = db.get(`version_${client.id}`)
        if(!version) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setColor("RED")
        .setFooter(`No version`)
        .setDescription(`Specify the new version tho`)
        message.channel.send(embed)
        }
        else if(!whatchange) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setColor("RED")
        .setFooter(`bruh`)
        .setDescription(`What the hell changed???`)
        message.channel.send(embed)
        }
        else if(version === version1) {
          let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setColor("RED")
        .setFooter(`Same version`)
        .setDescription(`You said the exact same version`)
        message.channel.send(embed)
        }
        else {
          let embed = new Discord.MessageEmbed()
          .setTitle(`<:Bank_Dev_Added:834885636593811496> Update!`)
          .setDescription(`${whatchange}`)
          .setFooter(`New version: ${version}`)
          .setColor("GREEN")
          .setTimestamp()
        const channel = client.channels.cache.find(channel => channel.id === "843104419871457302")
        channel.send(embed).then(message => {
          message.react("⬆️")
          message.react("⬇️")
        })
        db.set(`version_${client.id}`, version)
        db.set(`latestupdate_${client.id}`, whatchange)
        }
      }
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setColor("RED")
        .setFooter(`No dev`)
        .setDescription(`You are not a dev to use this command :c`)
        message.channel.send(embed)
    }
    }
  }
}