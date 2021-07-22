const Discord = require("discord.js")
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'
const https = require('https');
const db = require("quick.db")

module.exports = {
  name: "meme",
  description: "meme",
  execute(message, args) {
let funnny = db.get(`fun_${message.guild.id}`)
if(funnny === true) {

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    var text = index.selftext
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }
                console.log(image);
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
}
else if(!funnny) {
      let embed = new Discord.MessageEmbed()
  .setTitle(`Error >:(`)
  .setColor("RED")
  .setDescription("This server disabled fun commands, so you can't use them, to enable them again just ask admins to do b!settings enable fun")
  .setTimestamp()
  .setFooter(`b!settings enable fun`)
  message.channel.send(embed)
    }
  }
}