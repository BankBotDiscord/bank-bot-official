const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "level",
  description: "level",
  async execute(client, message, args) {
    if(!args[0]) {
    
    let user = message.mentions.users.first()
    if(!user) {
      user = message.author
    }
    let level = db.get(`levell_${message.guild.id}_${user.id}`)
    if(!level) {
      level = 1
    }

    let requiredxp = 250 * level

    let xp = db.get(`xpp_${message.guild.id}_${user.id}`)
    if(!xp) {
      xp = 0
    }
    if(!args[0]) {
    let profilecolor = db.get(`profilecolor_${user.id}`)
    if(!profilecolor) {
      profilecolor = "FFA550"
    }
    let xpneeded = Math.floor(requiredxp - xp)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Your level`)
    .setColor(profilecolor)
    .setDescription(`:chart_with_upwards_trend: Level - \`\`${level}\`\` \n\n<:Bank_xp:853738638626127893> Xp - \`\`${xp}\`\` \n\n<:Bank_Level_Levelxp:841090289127915530> Xp for the next level - \`\`${xpneeded}\`\``)
    .setFooter(`noob`)
    .setThumbnail(user.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))
    .setTimestamp()
    message.lineReplyNoMention(embed)
    }
  }
  else if(args[0].toLowerCase() === "lb" || args[0].toLowerCase() === "leaderboard") {
  }
  } 
}