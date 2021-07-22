const Discord = require('discord.js'); 
const db = require("quick.db")

module.exports = {
    name: 'help',
    description: 'Lists available commands',
    async execute (message, args) {
let funny = db.get(`fun_${message.guild.id}`)
      let moderation = db.get(`moderation_${message.guild.id}`)
  let embed1 = new Discord.MessageEmbed()
  .setTitle("Balance commands")
  .setDescription(`Here is a list of all of the balance and bank related commands.`)
  .setColor("GREEN")
  .setFooter(`Help - Page 1/5`)
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
  .addFields(
    { name: "**b!balance**", value: "Shows your balance/networth." },
    { name: "**b!start**", value: "Gives you a starter pack with 300 coins and 1 bread, which you can use to win other items." },
    { name: "**b!deposit**", value: "Deposits an amount of your pocket's balance to the bank. \nCommand usage:  ``b!deposit <amount>``" },
    { name: "**b!withdraw**", value: "Withdraws an amount out of the bank to your pocket. \nCommand usage: ``b!withdraw <amount>``" },
    { name: "**b!pay**", value: "Pays another user an amount of money. \nCommand usage: ``b!pay <amount> <usermention>``" },
    { name: "**b!tax**", value: "Calculates the / shows the current tax. \nCommand usage:  ``b!tax`` / ``b!tax <amount>``" },
    { name: "**b!lb**", value: "Shows the top 10 users with most money"}
  )
  let embed2 = new Discord.MessageEmbed()
  .setTitle(`Profile Commands`)
  .setDescription(`Here is the list of all of the profile commands 
  * Some commands require vip`)
  .setColor("GREEN")
  .setThumbnail(message.guild.iconURL())
  .setFooter(`Help - Page 2/5`)
  .addFields(
    { name: "**b!profile**", value: "Shows your profile or other people's profile." },
    { name: "**b!aboutme**", value: "Changes your about me or shows your about me. \nCommand usage: b!aboutme <newaboutme>" },
    { name: "**b!setprofilecolor**", value: "Changes your profile color (use hex color if possible). \nCommand usage: ``b!setprofilecolor <hexcolor>``" },
    { name: "* **b!setprofiletag**", value: "Sets your profile tag to any tag you choose. \nCommand usage: ``b!setprofiletag <tag>``" }
  )
  let embed3 = new Discord.MessageEmbed()
  .setTitle(`Item commands`)
  .setDescription(`This is a list of all of the item related commands.`)
  .setColor("GREEN")
  .setThumbnail(message.guild.iconURL())
  .setFooter(`Help - Page 3/5`)
  .setTimestamp()
  .addFields(
    { name: "**b!shop**", value: "Shows the shop." },
    { name: "**b!bitshop**", value: "Shows the bit coin shop. (items that can only be bought with bitcoins)"},
    { name: "**b!buy**", value: "Buys anything you choose from the shop. \nCommand usage: ``b!buy <item> <amount>``" },
    { name: "**b!sell**", value: "Sells anything that validates as sellable. \nCommand usage:``b!sell <item> <amount>``" },
    { name: "**b!inv**", value: "Shows your inventory or someone elses inventory. \nCommand usage: \`\`b!inv <user> (optional)\`\`" },
    { name: "**b!gift**", value: "Gifts a item to a user. \nCommand usage: ``b!gift <item> <amount> <usermention>``"},
    { name: "**b!use**", value: "Uses a item on your inventory (items that validate as usable). \nCommand usage: ``b!use <item> <amount>``" },
    { name: "**b!info**", value: "Shows the info for an item of your choice. \nCommand Usage: ``b!info <item>``"},
    { name: "**b!craft**", value: "Crafts the item of your choice! \nCommand Usage: ``b!craft <item>``"}
  )
  let embed4 = new Discord.MessageEmbed()
  .setTitle(`Reward commands`)
  .setColor("GREEN")
  .setThumbnail(message.guild.iconURL())
  .setFooter(`Help - Page 4/5`)
  .setTimestamp()
  .setDescription(`Here is a list of all of the reward related commands.
  (Some commands require VIP.)`)
  .addFields(
    { name: "**b!start**", value: "Gives you a starter pack. You must have less then 500 ₿ in your pocket and bank balance and you must not have 1 cookie. \n What it gives? 300 ₿ and 1 bread " },
    { name: "**b!stonks**", value: "STONKS" },
    { name: "**b!beg**", value: "Begs other people for money." },
    { name: "**b!hunt**", value: "Go hunting with your cookie rifle, and win some money!" },
    { name: "**b!work**", value: "Work for money!" },
    { name: "**b!daily**", value: "You can collect this reward daily, the reward is random." },
    { name: "* **b!weekly**", value: "You can collect this reward weekly, the reward is random." },
    { name: "**b!monthly**", value: "You can collect this reward monthly, the reward is random." },
    { name: "**b!adventure**", value: "Go on a adventure and actually get something (or lose, we don't know c;)"},
    { name: "**b!fish**", value: "Go fishing and get some rewards c: (there is rare items you can get)" }
  )
  let embed5 = new Discord.MessageEmbed()
  .setTitle(`Others`)
  .setColor("GREEN")
  .setThumbnail(message.guild.iconURL())
  .setFooter(`Help - Page 5/5`)
  .setTimestamp()
  .setDescription(`Here is a list of other commands`)
  .addFields(
    { name: "**b!settings**", value: "Shows the bot settings and more" },
    { name: "**b!bug**", value: "reports a bug or just shows your bugs \nCommand Usage: \`\`b!bug report <bug>\`\`" },
    { name: "**b!level**", value: "shows your level, also you can do \`\`b!level info\`\` to see more info about this"},
    { name: "**b!suggest**", value: "Suggest something to the bot's devs! with this it will send your suggestion to the suggestions channel on the support server"},
    { name: "**b!version**", value: "see the bot's version according to the last developer's updates!"},
    { name: "**b!feedback**", value: "send your thoughts over bank bot with feedbacks!"},
    { name: "**b!weather**", value: "see the weather on bank bot!"}
  )
  let embedfun = new Discord.MessageEmbed()
  .setTitle(`Fun commands`)
  .setColor("GREEN")
  .setDescription(`\`\`b!meme\`\`, \`\`b!rps\`\`, \`\`b!search\`\`, \`\`b!stickers\`\`, \`\`b!tweet\`\`, \`\`b!facepalm\`\`, \`\`b!askbankbot\`\`, \`\`b!clyde\`\`, \`\`b!beautifull\`\`, \`\`b!delete\`\`, \`\`b!lp\`\``)
  .setTimestamp()
  .setFooter(`Help - fun`)
  .setThumbnail(message.guild.iconURL())
  let embedmoderation = new Discord.MessageEmbed()
  .setTitle(`Moderation commands`)
  .setColor("GREEN")
  .setDescription(`Here is a list of the moderation commands`)
  .setTimestamp()
  .setFooter(`Help - Moderation`)
  .setThumbnail(message.guild.iconURL())
  .addFields(
    { name: "**b!mute**", value: "Mute someone for a specific period of time \nCommand Usage: b!mute <user> <time s/m/d/M> <reason>" },
    { name: "**b!unmute**", value: "Unmutes a muted user"},
    { name: "**b!warn**", value: "Warns someone for a reason" },
  )

let embed = new Discord.MessageEmbed()
.setTitle(`Need help?`)
.setFooter(`help - no page`)
.setColor("ORANGE")
.setTimestamp() 
.setURL("https://discord.gg/GBKtzjuWnr")
.setDescription(`<:Bank_Bal_Bitcoin:846004035597369346> Economy - \`\`b!help <page>\`\` \n\n<:Bank_Sticker2_Developer:853725697133641760> Moderation - \`\`b!help moderation\`\` \n\n<:Bank_Level_Levelxp:841090289127915530> Level - \`\`b!help level\`\`   (**BETA**)\n\n<:Bank_Item_CookieGun:835246894480490516> Bank bot TOS - \`\`b!help tos\`\``)
let embedtos = new Discord.MessageEmbed()
.setTitle(`Bank Bot's TOS`)
.setDescription(`**1-** Do not beg for items \n**2-** Do not spam the bot's commands \n **3-** Do not abuse any of the commands \n **4-** You can't trade nitro for coins, items or vip, it will get you blacklisted \n**5-** No scams, this includes traides where the other user didn't give you something it was promised and the same with the other side \n**6-** Do not trade DMC (dank memer coins) or other bot's currencys with bank bot's currency, we do not like that... \n**7-**Do not start fake rumors about the devs or the bot \n**8-** Using alts for vantages on bank bot will get you blacklist on **ALL** of the accounts you used, including alts and main \n**9-** Do not use auto text or something to execute commands automatically \n**10-** Don't make bank bot say racial slurs, political opinions or anything too bad or insulting\n**11-** Discord TOS break + bot tos break will get you perm ban on support server, blacklist and a report`)
.setThumbnail("https://cdn.discordapp.com/attachments/833397975820009506/842475957205860442/5f8aee4f266854e41de9778beaf7abca.png")
.setColor("GREEN")
.setFooter(`TOS || Attention - If you see someone break any of this rules, please use b!report <user>`)
.setTimestamp()
let embedlevel = new Discord.MessageEmbed()
.setTitle(`Level Commands`)
.setDescription("**Message Leveling**! \nUse \`\`b!settings enable level\`\` if your server has them disabled * \n\n")
let embedmarketplace = new Discord.MessageEmbed()
.setTitle(`Marketplace commands`)
.setColor("GREEN")
.setDescription(`* Some commands might require administrator perms`)
.addFields(
  { name: "**b!marketplace**", value: "sees your server's marketplace" },
  { name: "**b!marketplace create** *", value: "if your server does not have a marketplace, this is the command to create one" },
  { name: "**b!marketplace submit** *", value: "If you want your marketplace partnered, submit your marketplace / server! we will join there to see some things but then leave, relax c:" },
  { name: "**b!marketplace delete** *", value: "If you are tired of your marketplace, just delete it, i will be ok ;c"},
  { name: "**b!marketplace add** *", value: "Add any item to sell on your marketplace!"},
  { name: "**b!marketplace buy**", value: "Buy something from the markeplace"},
  { name: "**b!marketplace recharge** *", value: "recharge the stock"},
  { name: "**b!marketplace remove** *", value: "remove any item from the marketplace"}
)
if(!args[0]) {
message.channel.send(embed)
}
else if(args[0] === "1" || args[0].toLowerCase() === "balance" || args[0].toLowerCase() === "bal") {
  message.channel.send(embed1)
}
else if(args[0] === "2" || args[0].toLowerCase() === "p" || args[0].toLowerCase() === "profile") {
  message.channel.send(embed2)
}
else if(args[0] === "3" || args[1] === "3" || args[2] === "3" || args[0].toLowerCase() === "i" || args[0].toLowerCase() === "items") {
  message.channel.send(embed3)
}
else if(args[0] === "4" || args[0].toLowerCase() === "reward" || args[0].toLowerCase() === "rewards") {
  message.channel.send(embed4)
}
else if(args[0] === "5" || args[0].toLowerCase() === "other" || args[0].toLowerCase() === "others") {
  message.channel.send(embed5)
}
else if(args[0].toLowerCase() === "tos") {
  message.author.send(embedtos)
}
else if(args[0].toLowerCase() === "moderation") {
message.channel.send(embedmoderation)
}
else if(args[0].toLowerCase() === "marketplace" || args[0].toLowerCase() === "mp") {
  message.channel.send(embedmarketplace)
}
else if(args[0].toLowerCase() === "level") {
  message.channel.send(embedlevel)
}
else if(funny === true) {
  if(args[0].toLowerCase() === "fun") {
    if(!args[1] || args[1] === "1") {
    message.channel.send(embedfun)
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
  message.channel.send(embed)
}
else if(moderation === true) {
  if(args[0].toLowerCase() === "moderation") {
    message.channel.send(embedmoderation)
  }
}
else if(!moderation) {
    let embed = new Discord.MessageEmbed()
  .setTitle(`Error >:(`)
  .setColor("RED")
  .setDescription("This server is not protected! this means that moderation is not enabled, if you want to enable moderation do b!settings enable moderation (ask admins tho)")
  .setTimestamp()
  .setFooter(`b!settings enable moderation`)
  message.channel.send(embed)
}
    }
}