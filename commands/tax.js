const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "tax",
  description: "Shows the tax and with a value as 1st args calculates the tax, value with tax, without tax and everything",
  async execute(message, args) {
    let taxcalc = args[0]
    if(!taxcalc) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Tax")
      .setColor("YELLOW")
      .setTimestamp()
      .setDescription("Hello there! The tax for ``bank bot`` is ``6%``")
      .setFooter(`No tax value? b!tax <amount> to calculate everything you need`)
      return message.channel.send(embed)
    }
    else if(isNaN(taxcalc)) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setTimestamp()
      .setDescription("That is not a number, tho.. ")
      .setFooter(`Error`)
      return message.channel.send(embed)      
    }
    else if (taxcalc) {
     let tax = Math.floor(taxcalc * 0.06);
     let amount = Math.floor(taxcalc - tax);
     let amountwithouttax = taxcalc;
     let amountforneeded = Math.floor(parseInt(args[0]) + parseInt(tax))
     let embed = new Discord.MessageEmbed()
     .setTitle("Tax calculator.")
     .setColor("GREEN")
     .setFooter("Tax calculator.")
     .setTimestamp()
     .setThumbnail("https://cdn.discordapp.com/attachments/834871386991624237/839531078461292624/0HLq7vTOtYlLAAAAAASUVORK5CYII_1_-removebg-preview.png")
     .setDescription(`Amount Without tax: \`\`${amountwithouttax}\`\` ₿ \n Tax: \`\`${tax}\`\` (6%) \n Amount with tax: \`\`${amount}\`\` ₿ \n Amount needed for ${args[0]}: \`\`${amountforneeded}\`\` ₿`)
     message.channel.send(embed)
    }
  }
}