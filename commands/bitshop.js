const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "bitshop",
  description: "Shop with bitcoins for items",
  execute(message, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Bit shop`)
    .setColor("#add8e6")
    .setFooter("Bitcoin")
    .setDescription(`All of the items displayed require **__bitcoins__**, what are bitcoins? \`\`b!info bitcoin\`\``)
    .addFields(
      { name: "Temporary vip (1 hour)", value: "``10 Bitcoins`` \n-------------------------"},
    )
    message.channel.send(embed)
  }
}