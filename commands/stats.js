const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "stats",
  description: "shows the bot status",
  execute(client, message, args) {
    let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
let version = db.get(`version_${client.id}`)
let embed = new Discord.MessageEmbed()
.setTitle(`Bank Bot's status`)
.setDescription(`**__General Status__** \n\nUptime: ${uptime} \nVersion: ${version} \n\n**__Historical Status__** \n\nDeveloper Team: \nCookie#5729 \nBruh Moment#6969 \nReece_#0001 \nMasterDude2000#6969 \n<Fr0zT>#9999 \n\nCreation: the first ever version of bank bot was created on 17/04 and the support server on 18/04, however because of some api issues the bot had to be deleted and this is the new version.`)
.setColor("#5e60d1")
message.channel.send(embed)
  }
}