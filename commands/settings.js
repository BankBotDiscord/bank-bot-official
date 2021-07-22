const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "settings",
  description: "settings",
  execute(message, args) {
    let user = message.author
    if(!args[0]) {
      let notifications = db.get(`notstatus_${user.id}`)
      let moderation = db.get(`moderation_${message.guild.id}`)
      let helpping = db.get(`helpping_${message.author.id}`)
      let fun = db.get(`fun_${message.guild.id}`)
      let ls = db.get(`levelsystem_${message.guild.id}`)
    let emoji = ":green_square:"
      if(moderation === true) {
        emoji = emoji
      }
      else if(!moderation) {
        emoji = ":red_square:"
      }
      let emoji1 = ":green_square:"
      if(fun === true) {
        emoji1 = emoji1
      }
      else if(!fun) {
        emoji1 = ":red_square:"
      }
      let emoji2 = ":green_square:"
      if(helpping === true) {
        emoji2 = emoji2
      }
      else if(!helpping) {
        emoji2 = ":red_square:"
      }
      let emoji3 = ":green_square:"
       if(ls === true) {
        emoji3 = emoji3
      }
      else if(!ls) {
        emoji3 = ":red_square:"
      }
    let embed = new Discord.MessageEmbed()
    .setTitle(":gear: Settings")
    .setColor("39363F")
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/emojis/828699692757024768.png?v=1")
    .setDescription(`\`\`Settings will Help You a lot with Bank Bot!\`\` \n\n**__Server Settings__** \n\n ${emoji} \`\`b!Settings Enable Moderation\`\` + \`\`b!Settings Disable Moderation\`\`\n__This is Only for Administrators of Servers, this enables or disables the moderation commands for bank bot!__ \n\n ${emoji1} \`\`b!Settings Enable Fun\`\` + \`\`b!Settings Disable Fun\`\` \n__This is only for Administrators of Servers, enabling or disabling then the fun commands__\n\n ${emoji3} \`\`B!settings enable level\`\` + \`\`b!settings disable level\`\` \n__This is only for Administrators of Servers, enabling or disabling the level system__\n\n**__Personal Settings__** \n\n${emoji2} \`\`b!Settings Enable HelpPing\`\` + \`\`b!Settings Disable HelpPing\`\` \nAre you tired of bank bot always send the help embed when you ping him? disable this or enable as you want or not that.`)
    message.channel.send(embed)
    }
    else if(args[0].toLowerCase() === "enable") {
      if(!args[1]) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`N.a`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`what do you want to enable tho? if you want to know what exactly just do the same command but without the \`enable\` on it`)
        .setTimestamp()
        message.lineReplyNoMention(embed)
      }
      else if(args[1].toLowerCase() === "helpping") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Enabled`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You enabled help ping! Now everytime bank bot is pinged, it will send you a help embed`)
        .setFooter(`Settings`)
        message.lineReplyNoMention(embed)
        db.set(`helpping_${message.author.id}`, true)
      }
      else if(message.member.hasPermission("ADMINISTRATOR")) {
       if(args[1].toLowerCase() === "moderation") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Enabled`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You enabled moderation! now you can use the typical moderation commands \`\`b!help moderation\`\``)
        .setFooter(`Settings`)
        message.channel.send(embed)
        db.set(`moderation_${message.guild.id}`, true)
      }
      else if(args[1].toLowerCase() === "fun") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Enabled`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You enabled fun commands! now you can use them again \`\`b!help fun\`\``)
        .setFooter(`Settings`)
        message.channel.send(embed)
        db.set(`fun_${message.guild.id}`, true)
      }
      else if(args[1].toLowerCase() === "level") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Enabled`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You enabled the level system!`)
        .setFooter(`Settings`)
        message.channel.send(embed)
        db.set(`levelsystem_${message.guild.id}`, true)
      }
      } else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You do not have permissions to use this command! just administrators of this server can use it`)
        .setTimestamp()
        .setFooter(`NP`)
        .setColor("RED")
        message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "disable") {
      if(!args[1]) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter(`N.a`)
        .setDescription(`what do you want to disable tho? if you want to know what exactly just do the same command but without the \`disable\` on it`)
        .setTimestamp()
        message.channel.send(embed)
      }
      else if(args[1].toLowerCase() === "helpping") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Enabled`)
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`You disabled help ping! now you can ping bank bot as many times as you want, althought it will not send a help embed!`)
        .setFooter(`Settings`)
        message.lineReplyNoMention(embed)
        db.delete(`helpping_${message.author.id}`)
      }
      else if(message.member.hasPermission("ADMINISTRATOR")) {
      if(args[1].toLowerCase() === "moderation" || args[1].toLowerCase() === "moderation") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Disabled`)
        .setColor("RED")
        .setTimestamp()
        .setDescription(`You disabled moderation commands! now you cannot ban, mute, warn,... someone`)
        .setFooter(`Settings`)
        message.channel.send(embed)
        db.delete(`moderation_${message.guild.id}`)
      }
      else if(args[1].toLowerCase() === "fun") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Disabled`)
        .setColor("RED")
        .setTimestamp()
        .setDescription(`You disabled fun commands! now this is not as fun as before lol`)
        .setFooter(`Settings`)
        message.channel.send(embed)
        db.delete(`fun_${message.guild.id}`)
      }
       else if(args[1].toLowerCase() === "level") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Disabled`)
        .setColor("RED")
        .setTimestamp()
        .setDescription(`You disabled the level system`)
        .setFooter(`Settings`)
        message.channel.send(embed)
        db.delete(`levelsystem_${message.guild.id}`)
      }
      } else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You do not have permissions to use this command! just administrators of this server can use it`)
        .setTimestamp()
        .setFooter(`NP`)
        .setColor("RED")
        message.lineReplyNoMention(embed)
      }
    }
  }
}