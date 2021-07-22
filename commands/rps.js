const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rps",
  description: "rock paper or scissors",
  execute(message, args) {
    let funny = db.get(`fun_${message.guild.id}`)
    if(funny === true) {
    let user = message.author
    if(!args[0]) {
      let user = message.author
      let rpswon = db.get(`rpswon_${user.id}`)
      if(!rpswon) {
        rpswon = 0
      }
    let embed = new Discord.MessageEmbed()
    .setTitle(`Rps`)
    .setDescription(`Choose, rock paper or scissors?`)
    .setColor("ORANGE")
    .setFooter(`want to see who won the most on rps? do b!leaderboard rps \nYou currently have: ${rpswon} wins!`)
    message.lineReplyNoMention(embed)
    }
    else if(args[0].toLowerCase() === "rock" || args[0].toLowerCase() === "r") {
      let randomanswer = [
        "rock",
        "paper",
        "scissors"
      ]
      let random = randomanswer[Math.floor(Math.random() * randomanswer.length)]
      if(random === "rock") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Draw :/`)
        .setColor("YELLOW")
        .setDescription("As both chose rock, this is a draw")
        db.delete(`winstreak_${user.id}`)
        message.lineReplyNoMention(embed)
      }
      else if(random === "paper") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Lost :(`)
        .setColor("RED")
        .setDescription("You lost! as you chose rock and i chose paper, you lost!")
        db.delete(`winstreak_${user.id}`)
        message.lineReplyNoMention(embed)
      }
      else if(random === "scissors") {
        let winstreak = db.get(`winstreak_${user.id}`)
        if(winstreak === null) {
          winstreak = 1
          db.add(`winstreak_${user.id}`, 1)
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(`Won :)`)
        .setColor("GREEN")
        .setDescription("You won, you chose rock but i chose scissors so congrats!")
        .setFooter(`Winstreak: ${winstreak} wins`)
        db.add(`rpswon_${user.id}`, 1)
        db.add(`winstreak_${user.id}`, 1)
        message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "paper" || args[0].toLowerCase() === "p") {
      let randomanswer = [
        "rock",
        "paper",
        "scissors"
      ]
      let random = randomanswer[Math.floor(Math.random() * randomanswer.length)]
      if(random === "rock") {
        let winstreak = db.get(`winstreak_${user.id}`)
        if(winstreak === null) {
          winstreak = 1
          db.add(`winstreak_${user.id}`, 1)
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(`Won :)`)
        .setColor("GREEN")
        .setDescription("You won! i chose rock and you paper! congrats")
        .setFooter(`Winstreak: ${winstreak} wins`)
        db.add(`rpswon_${user.id}`, 1)
        message.lineReplyNoMention(embed)
        db.add(`winstreak_${user.id}`, 1)
      }
      else if(random === "paper") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Draw :/`)
        .setColor("YELLOW")
        .setDescription("As we both chose paper, this is a draw :/")
        db.delete(`winstreak_${user.id}`)
        message.lineReplyNoMention(embed)
      }
      else if(random === "scissors") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Lost :(`)
        .setColor("RED")
        .setDescription("You lost, i chose scissors and you chose paper, sorry :(")
        db.delete(`winstreak_${user.id}`)
        message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "scissors" || args[0].toLowerCase() === "s") {
      let randomanswer = [
        "rock",
        "paper",
        "scissors"
      ]
      let random = randomanswer[Math.floor(Math.random() * randomanswer.length)]
      if(random === "rock") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Lost :(`)
        .setColor("RED")
        .setDescription("I chose rock and you scissors, so you lost, sorry")
        message.lineReplyNoMention(embed)
        db.delete(`winstreak_${user.id}`)
      }
      else if(random === "paper") {
        let winstreak = db.get(`winstreak_${user.id}`)
        if(winstreak === null) {
          winstreak = 1
          db.add(`winstreak_${user.id}`, 1)
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(`Won :)`)
        .setColor("GREEN")
        .setDescription("You won! i chose paper and you chose scissors, so congrats")
        .setFooter(`Winstreak: ${winstreak} wins`)
        db.add(`rpswon_${user.id}`, 1)
        message.lineReplyNoMention(embed)
        db.add(`winstreak_${user.id}`, 1)
      }
      else if(random === "scissors") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Draw :/`)
        .setColor("YELLOW")
        .setDescription("As we both chose scissors, this is a draw :/")
        message.lineReplyNoMention(embed)
        db.delete(`winstreak_${user.id}`)
      }
    }
  }
  else if(!funny) {
      let embed = new Discord.MessageEmbed()
  .setTitle(`Error >:(`)
  .setColor("RED")
  .setDescription("This server disabled fun commands, so you can't use them, to enable them again just ask admins to do b!settings enable fun")
  .setTimestamp()
  .setFooter(`b!settings enable fun`)
  message.lineReplyNoMention(embed)
  }
  }
}