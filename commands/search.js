const google = require('google');
const Discord = require(`discord.js`);

module.exports = {
  name: "search",
  description: "search something on google",
  execute(client, message) {
    let args = message.content.split(/[ ]+/);
    let suffix = args.slice(1).join(' ')
    if (!suffix) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setTimestamp()
        .setDescription(`Say something to me to search tho`)
        .setFooter(`No args`)
        message.lineReplyNoMention(embed);
    } else {
             let embed = new Discord.MessageEmbed()
                    .setColor(`GREEN`)
                    .setTitle(`Result for "${suffix}"`)
                    .setDescription(`https://google.com/search?q=${args.slice(1).join('+')}`)
                    .setTimestamp()
                    .setThumbnail("https://cdn.discordapp.com/emojis/350385023289131008.png?v=1")
                    .setFooter(`Noice`);
                    let embed1 = new Discord.MessageEmbed()
                    .setTitle(`Searching...`)
                    .setThumbnail("https://cdn.discordapp.com/emojis/843973121312030800.gif?v=1")
                    .setColor("BLUE")
                message.lineReplyNoMention(embed1).then(message => {
                  setTimeout(function() {
                    message.edit(embed)
                  }, client.ws.ping)
                })
    }
  }
}