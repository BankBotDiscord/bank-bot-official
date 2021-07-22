const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "use",
  description: "Uses an item that validates as usable.",
  async execute(message, args) {
    let user = message.author
      if(message.content.includes('.')) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("Please use entire numbers")
        return message.lineReplyNoMention(embed)
    }
      if(!args[0]) {
let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("no item")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription("Choose an item to use tho (``b!info <item>``)")
        return message.lineReplyNoMention(embed)
      }
    else if(args[0].toLowerCase() === "cookie" || args[0].toLowerCase() === "cookies") {
      let cookiequantity = await db.get(`cookie_${user.id}`)
      let quantity = args[1];
      if(!quantity) {
        quantity = 1
      }
      else if(args[1].includes("-")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription("You can't use negative numbers, smh")
        return message.lineReplyNoMention(embed)
      }
      let random = Math.floor(Math.random() * 81) + 4
      let money = Math.floor(random * quantity)
      if(quantity > cookiequantity) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many cookies to use!`)
        message.lineReplyNoMention(embed)
      }
      else {
        db.add(`money_${user.id}`, money)
        db.subtract(`cookie_${user.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setFooter("use")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
        .setDescription(`You just used \`\`${quantity}\`\` of cookies and won \`\`${money}\`\` of ₿`)
        message.lineReplyNoMention(embed)
      }
    }
       if(args[0].toLowerCase() === "luckycoin" || args[0].toLowerCase() === "luckycoins") {
      let cookiequantity = await db.get(`luckycoin_${user.id}`)
      let quantity = args[1];
      if(!quantity) {
        quantity = 1
      }
      else if(args[1].includes("-")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription("You can't use negative numbers, smh")
        return message.lineReplyNoMention(embed)
      }
      if(quantity > cookiequantity) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many cookies to use, smh.`)
        message.lineReplyNoMention(embed)
      }
      else {
        db.add(`usableluckycoin_${user.id}`, quantity)
        db.subtract(`luckycoin_${user.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setFooter("use")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/834914133336916038.png?v=1")
        .setDescription(`You just used \`\`${quantity}\`\` of lucky coin. Now your daily, monthly, and stonks rewards are 100 ₿ better!`)
        message.lineReplyNoMention(embed)
      }
    }
       if(args[0].toLowerCase() === "cookierifle") {
      let cookiequantity = await db.get(`cookierifle_${user.id}`)
      let quantityy = 1
      if(quantityy > cookiequantity) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription(`You don't even have cookie rifles! Go get something to hunt, son! -Shicho`)
        message.lineReplyNoMention(embed)
      }
      else if(quantityy > 1 || quantityy < 0) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription(`You can only use 1 cookie rifles at a time`)
        message.lineReplyNoMention(embed)
      }
      else {
        db.subtract(`cookierifle_${user.id}`, 1)
        db.add(`usablecookierifle_${user.id}`, 1)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setFooter("use")
        .setTimestamp()
        .setDescription(`You just used a cookie rifle! Now you can go to b!hunt and have 70% chance of getting some money`)
        .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
        message.lineReplyNoMention(embed)
      }
    }
       if(args[0].toLowerCase() === "bread") {
      let breadquantity = await db.get(`bread_${user.id}`)
      let quantity = args[1];
      if(!quantity) {
        quantity = 1
      }
      else if(args[1].includes("-")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription("You can't use negative numbers, smh")
        return message.lineReplyNoMention(embed)
      }
      if(quantity > breadquantity) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that much bread, smh.`)
        message.lineReplyNoMention(embed)
      }
      else {
        let random = [
        `cookie_${user.id}`,
        `book_${user.id}`,
        `cookierifle_${user.id}`,
        `luckycoin_${user.id}`
        ]
        db.add(random[Math.floor(Math.random() * random.length)], Math.floor(1 * quantity));
        db.subtract(`bread_${user.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setFooter("use")
        .setTimestamp()
        .setDescription(`You just used \`\`${quantity}\`\` of bread and won a special random award, look at your \`\`b!inv\`\`!`)
        .setThumbnail("https://cdn.discordapp.com/emojis/835265475511582720.png?v=1")
        message.lineReplyNoMention(embed)
      }
    }
           if(args[0].toLowerCase() === "apple" || args[0].toLowerCase() === "apples") {
      let applequantity = await db.get(`apple_${user.id}`)
      let quantity = args[1];
      if(!quantity) {
        quantity = 1
      }
      else if(args[1].includes("-")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription("You can't use negative numbers, smh")
        return message.lineReplyNoMention(embed)
      }
      if(quantity > applequantity) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You don't have that many apples to use!`)
        message.lineReplyNoMention(embed)
      }
      else {
        let random = [
        `cookie_${user.id}`,
        `bread_${user.id}`,
        `cookierifle_${user.id}`,
        `luckycoin_${user.id}`
        ]
        db.add(random[Math.floor(Math.random() * random.length)], Math.floor(1 * quantity));
        db.subtract(`apple_${user.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setFooter("use")
        .setTimestamp()
        .setDescription(`You just used \`\`${quantity}\`\` apples and won a special random award, look at your \`\`b!inv\`\`!`)
        .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
        message.lineReplyNoMention(embed)
      }
    }
    if(args[0].toLowerCase() === "fireliquid" || args[0].toLowerCase() === "fireliquids") {
      let quantity = args[1]
      if(!quantity) {
        quantity = 1
      }
      else if(args[1].includes("-")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription("You can't use negative numbers, smh")
        return message.lineReplyNoMention(embed)
      }
      let victim = message.mentions.users.first()
      let fireliquid = db.get(`fireliquid_${user.id}`)
      if(quantity > fireliquid) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`Error`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many Fire Liquids!`)
       message.lineReplyNoMention(embed)
      }
      else if(!victim) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setFooter(`Error`)
        .setTimestamp()
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You must mention a user if you want to use this against someone...`)
        message.lineReplyNoMention(embed)
      }
      else if(quantity > 10) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setFooter(`Error`)
        .setTimestamp()
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription(`You can't use more than 10 fire liquids at a time`)
        message.lineReplyNoMention(embed)
      }
      else {
        db.add(`usedfireliquid_${victim.id}`, quantity)
        db.subtract(`fireliquid_${message.author.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setFooter(`used`)
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/836693195369742386.png?v=1")
        .setDescription(`You used ${quantity} fireliquids on ${victim.username}...`)
        message.lineReplyNoMention(embed).then(message => {
          setTimeout(function() {
            db.delete(`usedfireliquid_${victim.id}`)
            victim.send("You can now use b!beg again!")
          }, quantity * 300000)
        })
      }
    }
    if(args[0].toLowerCase() === "diamondblock") {
          let quantity = args[1]
      if(!quantity) {
        quantity = 1
      }
      else if(args[1].includes("-")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setDescription("You can't use negative numbers, smh")
        return message.lineReplyNoMention(embed)
      }
      let diamondblock = db.get(`diamondblock_${user.id}`)
      if(quantity > diamondblock) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`Error`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many Diamond blocks!`)
        message.channel.send(embed)
      }
      else {
        db.add(`useddb_${message.author.id}`, quantity)
        db.subtract(`diamondblock_${message.author.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setFooter(`used`)
        .setTimestamp()
        .setDescription(`You used ${quantity} of diamond blocks!`)
        .setThumbnail("https://cdn.discordapp.com/emojis/841831323094089749.png?v=1")
        message.channel.send(embed)
    }
    }
    if(args[0].toLowerCase() === "booster" || args[0].toLowerCase() === "boosters" || args[0].toLowerCase() === "boost") {
      let user = message.author
      let quantity = args[1] 
      if(!quantity) {
        quantity = 1
      }
      let booster = db.get(`booster_${user.id}`)
      if(booster < quantity) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`no booster`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many boosters!`)
        message.lineReplyNoMention(embed)
      }
      else {
        db.add(`usedboost_${message.author.id}`, quantity)
        db.subtract(`booster_${message.author.id}`, quantity)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setColor("GREEN")
        .setFooter(`used`)
        .setTimestamp()
        .setDescription(`You used \`\`${quantity}\`\` of boosters! \n\n**__Boosted commands__** \n\`\`b!beg\`\`, \`\`b!fish\`\`, \`\`b!hunt\`\` **Ends in 1 day** \n\n\`\`Note: You can stack boosters\`\``)
        .setThumbnail("https://cdn.discordapp.com/emojis/848638950038044723.gif?v=1")
        message.lineReplyNoMention(embed)
    }
      }
      else if(args[0].toLowerCase() === "epicbox") {
        let quantity = 1
        let user = message.author
        let epicbox = db.get(`epicbox_${user.id}`)
        if(!epicbox) {
         let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setFooter(`no epic box`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setTimestamp()
        .setDescription(`You don't have that many epic boxes!`)
        message.lineReplyNoMention(embed)
        }
        else {
          let money = Math.floor(Math.random() * 5000) + 500;
          let random = Math.floor(Math.random() * 3) + 1;
          let randomitem = [
            "<:Bank_Item_Cookie:835208438539223090>",
            "<:Bank_Item_Bread:835265475511582720>",
            "<:Bank_Item_Sticker:834885591299784805>"
          ]
          message.lineReplyNoMention(`**__Box Loot For ${message.author.username}__** \n**${money}**\n**${random}** ${randomitem}`)
          db.add(`money_${user.id}`, money)
          if(randomitem === "<:Bank_Item_Cookie:835208438539223090>") {
            db.add(`cookie_${user.id}`, random)
          }
          else if(randomitem === "<:Bank_Item_Bread:835265475511582720>") {
            db.add(`bread_${user.id}`, random)
          }
          else if(randomitem === "<:Bank_Item_Sticker:834885591299784805>") {
            db.add(`sticker_${user.id}`, random)
          }
          db.subtract(`epicbox_${user.id}`, 1)
        } //<:Bank_Item_EpicBox:856217663788548106>
      }
  }
}