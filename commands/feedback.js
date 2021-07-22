const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "feedback",
  description: "give feedback",
  execute(client, message, args) {
    let user = message.author
    let feedback = db.get(`feedback_${message.author.id}`)
    if(!feedback) {
    let user = message.author
    let avaliation = args[0]
    let feedback = args.slice(1).join(' ')

    if(!avaliation) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`Correct format (example): 9`)
        .setDescription("You did not put any avaliation tho :c (0 / 10)")
        .setColor("RED")
        message.channel.send(embed)
    }
    else if(avaliation > 10 || avaliation < 0) {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`Correct format (example): 9`)
        .setDescription("Not a valid format (0 / 10)")
        .setColor("RED")
        message.channel.send(embed)
    }
    else if(!feedback) {
    let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`Be honest! if you have a low avaliation do not be afraid to say the problem or something :)`)
        .setDescription("If possible say a comment about your feedback c: (if you don't have a comment to say, just say . or something)")
        .setColor("RED")
        message.channel.send(embed)
    }
    else {
      db.add(`avaliation_${client.id}`, avaliation)
      db.add(`avaliationamount_${client.id}`, 1)
      db.set(`avaliation1_${user.id}`, avaliation)
      db.set(`feedback_${user.id}`, feedback)
      db.set(`latestfeedback_${client.id}`, feedback)
      db.set(`latestavaliation_${client.id}`, avaliation)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Thanks for your feedback :)`)
      .setDescription(`Your avaliation: ${avaliation}/10 \nYour feedback: ${feedback}`)
      .setColor("GREEN")
      .setFooter(`Your feedback was sent to the bank bot's server!`)
      .setTimestamp()
      let embedfeedback = new Discord.MessageEmbed()
      .setTitle(`New feedback!`)
      .setDescription(`Avaliation: ${avaliation}/10 \nFeedback comment: ${feedback}`)
      .setFooter(`Almost anounymous: ${message.author.id}`)
      .setTimestamp()
      .setColor("ORANGE")
      message.lineReplyNoMention(embed)
      const channel = client.channels.cache.find(channel => channel.id === "845410361783746581")
      channel.send(embedfeedback)
    }
    }
    else if(!feedback) {
      if(args[0].toLowerCase() === "info") {
      let avaliation = db.get(`avaliation_${client.id}`)
      let avaliationquantity = db.get(`avaliationamount_${client.id}`)
      let finalavaliation = Math.floor(avaliation / avaliationquantity)
      let latestfeedback = db.get(`latestfeedback_${client.id}`)
      let latestavaliation = db.get(`latestavaliation_${client.id}`)
      if(!latestavaliation) {
        latestavaliation = "8"
      }
      let embed = new Discord.MessageEmbed()
      .setTitle(`Bank Bot's Rating And Rating History`)
      .setDescription(`**__Last Rating__** \n${latestavaliation}/10 \n\`\`${latestfeedback}\`\` \n\n**__All Ratings: ${finalavaliation}__** \nThanks for the avaliations! ${finalavaliation} must be a fair avaliation :) \n\n**__Rating Info__**\nRating is where you give your opinion about the bot and give your feedback about it! it really helps developers to see if they are doing great or not!`)
      .setFooter(`every avaliation is avaliated by 10`)
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/843097982815436820/845422668827066378/e1ec53c5d89c0291001989a36716aa9a.png")
      .setColor("PURPLE")
      message.lineReplyNoMention(embed)
    }
    }
    else {
      if(!args[0]) {
      let avaliation = db.get(`avaliation1_${user.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle(`You already sent feedback! :pencil:`)
      .setColor("ORANGE")
      .setDescription(`Your last avaliation: ${avaliation}/10 \nYour last feedback: ${feedback}`)
      .setFooter(`Want to change it? use b!feedback edit`)
      .setTimestamp()
      message.lineReplyNoMention(embed)
    }
    else if(args[0].toLowerCase() === "edit") {
      let user = message.author
    let avaliation = args[1]
    let feedback = args.slice(2).join(' ')

    if(!avaliation) {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`Correct format (example): 9`)
        .setDescription("You did not put any avaliation tho :c (0 / 10)")
        .setColor("RED")
        message.channel.send(embed)
    }
    else if(avaliation > 10 || avaliation < 0) {
      let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`Correct format (example): 9`)
        .setDescription("Not a valid format (0 / 10)")
        .setColor("RED")
        message.channel.send(embed)
    }
    else if(!feedback) {
    let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTitle(`Error >:(`)
        .setFooter(`Be honest! if you have a low avaliation do not be afraid to say the problem or something :)`)
        .setDescription("If possible say a comment about your feedback c: (if you don't have a comment to say, just say . or something)")
        .setColor("RED")
        message.channel.send(embed)
    }
    else {
      db.add(`avaliation_${client.id}`, avaliation)
      db.add(`avaliationamount_${client.id}`, 1)
      db.set(`avaliation1_${user.id}`, avaliation)
      db.set(`feedback_${user.id}`, feedback)
      db.set(`latestfeedback_${client.id}`, feedback)
      db.set(`latestavaliation_${client.id}`, avaliation)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Thanks for your feedback :)`)
      .setDescription(`Your avaliation: ${avaliation}/10 \nYour feedback: ${feedback}`)
      .setColor("GREEN")
      .setFooter(`Your feedback was sent to the bank bot's server!`)
      .setTimestamp()
      let embedfeedback = new Discord.MessageEmbed()
      .setTitle(`New feedback!`)
      .setDescription(`Avaliation: ${avaliation}/10 \nFeedback comment: ${feedback}`)
      .setFooter(`Almost anounymous: ${message.author.id}`)
      .setTimestamp()
      .setColor("ORANGE")
      message.lineReplyNoMention(embed)
      const channel = client.channels.cache.find(channel => channel.id === "845410361783746581")
      channel.send(embedfeedback)
    }
    }
    else if(args[0].toLowerCase() === "info") {
      let avaliation = db.get(`avaliation_${client.id}`)
      let avaliationquantity = db.get(`avaliationamount_${client.id}`)
      let finalavaliation = Math.floor(avaliation / avaliationquantity)
      let latestfeedback = db.get(`latestfeedback_${client.id}`)
      let latestavaliation = db.get(`latestavaliation_${client.id}`)
      if(!latestavaliation) {
        latestavaliation = "8"
      }
      let embed = new Discord.MessageEmbed()
      .setTitle(`Bank Bot's Rating And Rating History`)
      .setDescription(`**__Last Rating__** \n${latestavaliation}/10 \n\`\`${latestfeedback}\`\` \n\n**__All Ratings: ${finalavaliation}__** \nThanks for the avaliations! ${finalavaliation} must be a fair avaliation :) \n\n**__Rating Info__**\nRating is where you give your opinion about the bot and give your feedback about it! it really helps developers to see if they are doing great or not!`)
      .setFooter(`every avaliation is avaliated by 10`)
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/843097982815436820/845422668827066378/e1ec53c5d89c0291001989a36716aa9a.png")
      .setColor("PURPLE")
      message.lineReplyNoMention(embed)
    }
    }
  }
}