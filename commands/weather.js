const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "weather",
  description: "shows bank bot's weather",
  execute(client, message, args) {
    let weather = db.get(`weather_${client.id}`)
    if(!weather) {
      weather = "Sunny"
    }
    if(!args[0]) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`:cloud_rain: Weather`)
    .setDescription(`**__Types of Weather__** \n> Sunny \n> Rainy \n> Winter \n\n**__Weather Info__** \n**Rainy :cloud_rain: | Lowers the chance of getting animals** \n**Sunny :sunny: | Normal animal loot** \n**Winter :cloud_snow: | Able to get snow** \n\nToday's weather on bank bot: ${weather}`)
    .setFooter(`Weather changes every 6 hours bot`)

    if(weather === "Sunny") {
      embed.setColor("YELLOW")
    }
    else if(weather === "Rainy") {
      embed.setColor("#0b03fc")
    }
    else if(weather === "Winter") {
      embed.setColor("#FFFFFF")
    }

    message.channel.send(embed)

    }
  }
}