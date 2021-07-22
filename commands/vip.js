const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "vip",
  description: "gives or sees vip status",
  async execute(message, args) {
    let user = message.mentions.members.first()
    if(!user) {
      user = message.author
    }
    let vipstatus = db.get(`vip_${message.author.id}`)
    let vipstatuss = db.get(`vip_${user.id}`)
    let developer = db.get(`developer_${user.id}`)
  
    if(!args[0]) {
      if(vipstatus) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`VIP status`)
      .setColor("PURPLE")
      .setTimestamp()
      .setFooter(`VIP`)
      .setDescription(`You currently have VIP. You have a bunch of perks for supporting the bot! \n(Thank you -The Dev Team)`)
      message.lineReplyNoMention(embed)
      }
       else if(!vipstatus) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`VIP status`)
      .setColor("PURPLE")
      .setTimestamp()
      .setFooter(`VIP`)
      .setDescription(`You currently don't have VIP. If you want to know how to get do \`\`b!info vip\`\` or join our server, we do vip giveaways`)
      message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "give") {
    let developer = db.get(`developer_${message.author.id}`)
    let user1 = message.mentions.users.first()
      if(!developer || developer === null) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`No perm`)
        .setDescription(`You are not a developer. You cannot use this command.`)
        message.lineReplyNoMention(embed)
      }
      else if(!user1) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`No user`)
        .setDescription(`State a users name to give them VIP.`)
        message.lineReplyNoMention(embed)
      }
      else {
        let date = new Date()
        db.set(`vipdate_${user1.id}`, date)
        db.set(`vip_${user1.id}`, true)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Vip renew`)
        .setColor("PURPLE")
        .setFooter(`${date}`)
        .setTimestamp()
        .setDescription(`You just gave ${user1.username} VIP!`)
        message.lineReplyNoMention(embed)
      }
    }
     else if(args[0].toLowerCase() === "remove") {
        let user1 = message.mentions.users.first()
        
    let developer = db.get(`developer_${message.author.id}`)
      if(!developer) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`No perm`)
        .setDescription(`You are not a developer. You cannot use this command.`)
      message.lineReplyNoMention(embed)
      }
      else if(!user1) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`No user`)
        .setDescription(`Please state a username.`)
       message.lineReplyNoMention(embed)
      }
      else {
        db.delete(`vip_${user1.id}`)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Vip remove`)
        .setColor("BLACK")
        .setFooter(`-1 vip user`)
        .setTimestamp()
        .setDescription(`You just removed ${user1.username}'s VIP... F`)
        message.lineReplyNoMention(embed)
      }
    }
  }
}