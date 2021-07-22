const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "buy",
  description: "Buys a item from the shop.",
  async execute(message, args) {
    let user = message.author;
    let money = await db.fetch(`money_${user.id}`)
    if(!args[0]) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("Specify an item to buy, if you want to buy air, its -69 B")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        return message.lineReplyNoMention(embed)
    }
    else if(message.content.includes("-")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("You can't use negative numbers, smh")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        return message.lineReplyNoMention(embed)
    }
   else if(message.content.includes('.')) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Error >:(")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        .setFooter("Error")
        .setTimestamp()
        .setDescription("Please use entire numbers")
        return message.lineReplyNoMention(embed)
    }
    if(args[0].toLowerCase() === "cookie" || args[0].toLowerCase() === "cookies") {
      let amountofcookie = args[1]
      if(!amountofcookie) {
      amountofcookie = 1
      }
      let amount = Math.floor(69 * amountofcookie);
      let tax1 = Math.floor(amount * 0.06);
      let price1 = Math.floor(amount + tax1);
      if(price1 > money) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setFooter("Error")
      .setDescription("You do not have enough money! You're poor. -Shicho")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTimestamp()
      return message.lineReplyNoMention(embed)
      }
      if(isNaN(args[1])) {
    let embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setTimestamp()
  .setDescription(`That is not a number, though!`);
    return message.lineReplyNoMention(embed)
      }
      else {
      await db.add(`cookie_${user.id}`, amountofcookie)
      db.subtract(`money_${user.id}`, price1);
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
      .setDescription(`Purchased \`\`${amountofcookie}\`\` of cookies \n Price:\`\`${amount}\`\` ₿ \nTax: \`\`${tax1}\`\` \`\`6%\`\` \n Price paid: \`\`${price1}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
      else if(args[0].toLowerCase() === "luckycoin" || args[0].toLowerCase() === "lc") {
      let amountoflc = args[1]
      if(!amountoflc) {
      amountoflc = 1
      }
      let amount = Math.floor(5000 * amountoflc);
      let tax1 = Math.floor(amount * 0.06);
      let price1 = Math.floor(amount + tax1);
      if(price1 > money) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      return message.lineReplyNoMention(embed)
      }
      if(isNaN(args[1])) {
    let embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setDescription(`That is not a number, though!`);
    return message.lineReplyNoMention(embed)
      }
      else {
      await db.add(`luckycoin_${user.id}`, amountoflc)
      db.subtract(`money_${user.id}`, price1);
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/834914133336916038.png?v=1")
      .setDescription(`Purchased \`\`${amountoflc}\`\` of lucky coins \n Price:\`\`${amount}\`\` ₿ \nTax: \`\`${tax1}\`\` \`\`6%\`\` \n Price paid: \`\`${price1}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
    else if(args[0].toLowerCase() === "apple" || args[0].toLowerCase() === "apples") {
      let amountofapple = args[1]
      if(!amountofapple) {
      amountofapple = 1
      }
      let amount = Math.floor(3000 * amountofapple);
      let tax1 = Math.floor(amount * 0.06);
      let price1 = Math.floor(amount + tax1);
      if(price1 > money) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      return message.lineReplyNoMention(embed)
      }
      if(isNaN(args[1])) {
    let embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setFooter("Error")
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setDescription(`That is not a number, though!`);
    return message.lineReplyNoMention(embed)
      }
      else {
      await db.add(`apple_${user.id}`, amountofapple)
      db.subtract(`money_${user.id}`, price1);
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
      .setDescription(`Purchased \`\`${amountofapple}\`\` of apples \n Price:\`\`${amount}\`\` ₿ \nTax: \`\`${tax1}\`\` \`\`6%\`\` \n Price paid: \`\`${price1}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
       else if(args[0].toLowerCase() === "temporaryvip" || args[0].toLowerCase() === "vip") {
      let vip = db.get(`vip_${user.id}`)
      let amount = 10
      let bitcoin = db.get(`bitcoin_${user.id}`)
      if(amount > bitcoin) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Nm")
      .setDescription("You do not have enough bitcoins!")
      .setTimestamp()
      message.lineReplyNoMention(embed)
      }
      else if(vip === true) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`vip`)
        .setDescription(`You already have VIP, if you already bought temporary VIP recently please wait until it finishes to buy again.`)
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
        message.lineReplyNoMention(embed)
      }
      else {
        db.subtract(`bitcoin_${user.id}`, amount)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Vip Renew!`)
        .setColor("PURPLE")
        .setFooter(`vip`)
        .setTimestamp()
        .setDescription(`you just bought temporary vip! collect your weekly rewards and do as much things as you can!`)
        message.lineReplyNoMention(embed)
      db.set(`vip_${user.id}`, true).then(timeout => setTimeout(function() {
        db.delete(`vip_${user.id}`)
        message.author.send("Uh oh, your temporary vip ended, sorry. :(")
      }, 3600000))
      }
      }
      else if(args[0].toLowerCase() === "diamondblock" || args[0].toLowerCase() === "db") {
      let amountofdb = args[1]
      if(!amountofdb) {
      amountofdb = 1
      }
      let amount = Math.floor(10000000 * amountofdb);
      let tax1 = Math.floor(amount * 0.06);
      let price1 = Math.floor(amount + tax1);
      if(price1 > money) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      return message.lineReplyNoMention(embed)
      }
      if(isNaN(args[1])) {
    let embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setFooter("Error")
  .setTimestamp()
  .setDescription(`That is not a number, though!`);
    return message.lineReplyNoMention(embed)
      }
      else {
      await db.add(`diamondblock_${user.id}`, amountofdb)
      db.subtract(`money_${user.id}`, price1);
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/841831323094089749.png?v=1")
      .setDescription(`Purchased \`\`${amountofdb}\`\` of cookie rifles \n Price:\`\`${amount}\`\` ₿ \nTax: \`\`${tax1}\`\` \`\`6%\`\` \n Price paid: \`\`${price1}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
      else if(args[0].toLowerCase() === "cookierifle") {
      let amountofcr = args[1]
      if(!amountofcr) {
      amountofdb = 1
      }
      let amount = Math.floor(10000 * amountofcr);
      let tax1 = Math.floor(amount * 0.06);
      let price1 = Math.floor(amount + tax1);
      if(price1 > money) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      return message.lineReplyNoMention(embed)
      }
      if(isNaN(args[1])) {
    let embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle("ERROR >:(")
  .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
  .setFooter("Error")
  .setTimestamp()
  .setDescription(`That is not a number, though!`);
    return message.lineReplyNoMention(embed)
      }
      else {
      await db.add(`cookierifle_${user.id}`, amountofcr)
      db.subtract(`money_${user.id}`, price1);
      let embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
      .setDescription(`Purchased \`\`${amountofcr}\`\` of cookie rifles \n Price:\`\`${amount}\`\` ₿ \nTax: \`\`${tax1}\`\` \`\`6%\`\` \n Price paid: \`\`${price1}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
      else if(args[0].toLowerCase() === "cookiefishingrod" || args[0].toLowerCase() === "fishingrod") {
        let price = 15000
        let user = message.author
        let money = db.get(`money_${user.id}`)
        let fishingrod = db.get(`fishingrod1_${user.id}`)
        if(money < price) {
          let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      return message.lineReplyNoMention(embed)
      }
      else if(fishingrod === true) {
        let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setDescription("You already have a fishing rod \nIf you are trying to upgrade tho, just use `b!fish upgrade fishingrod`")
      .setTimestamp() 
      return message.lineReplyNoMention(embed)
      }
      else {
        db.set(`fishingrod1_${user.id}`, true)
        db.subtract(`money_${user.id}`, price)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/844584706438856744.png?v=1")
      .setDescription(`You just bought your cookie fishing rod, relax there is no tax. \nAlso now yuo will earn more things with b!fish and you can upgrade with b!fish upgrade`)
      message.lineReplyNoMention(embed)
      }
      }
      else if(args[0].toLowerCase() === "booster" || args[0].toLowerCase() === "boosters") {
        let quantity = args[1]
        if(!quantity) {
          quantity = 1
        }
        let priceperquantity = 100000
        let price = priceperquantity * quantity
        let tax = price * 0.06
        let pricefinal = price + tax
        let user = message.author
        let money = db.get(`money_${user.id}`)
        let booster = db.get(`booster_${user.id}`)
        if(money < pricefinal) {
          let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      return message.lineReplyNoMention(embed)
      }
      else {
        db.add(`booster_${user.id}`, quantity)
        db.subtract(`money_${user.id}`, price)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/848638950038044723.gif?v=1")
      .setDescription(`Purchased \`\`${quantity}\`\` of boosters \n Price:\`\`${price}\`\` ₿ \nTax: \`\`${tax}\`\` \`\`6%\`\` \n Price paid: \`\`${pricefinal}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
      
      else if(args[0].toLowerCase() === "booster" || args[0].toLowerCase() === "boosters") {
        let quantity = args[1]
        if(!quantity) {
          quantity = 1
        }
        let priceperquantity = 100000
        let price = priceperquantity * quantity
        let tax = price * 0.06
        let pricefinal = price + tax
        let user = message.author
        let money = db.get(`money_${user.id}`)
        if(money < pricefinal) {
          let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      return message.lineReplyNoMention(embed)
      }
      else {
        db.add(`booster_${user.id}`, quantity)
        db.subtract(`money_${user.id}`, price)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/848638950038044723.gif?v=1")
      .setDescription(`Purchased \`\`${quantity}\`\` of boosters \n Price:\`\`${price}\`\` ₿ \nTax: \`\`${tax}\`\` \`\`6%\`\` \n Price paid: \`\`${pricefinal}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
        else if(args[0].toLowerCase() === "giftbox" || args[0].toLowerCase() === "giftboxes" || args[0].toLowerCase() === "gb") {
        let quantity = args[1]
        if(!quantity) {
          quantity = 1
        }
        let priceperquantity = 15000
        let price = priceperquantity * quantity
        let tax = price * 0.06
        let pricefinal = price + tax
        let user = message.author
        let money = db.get(`money_${user.id}`)
        if(money < pricefinal) {
          let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      return message.lineReplyNoMention(embed)
      }
      else {
        db.add(`giftbox_${user.id}`, quantity)
        db.subtract(`money_${user.id}`, price)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/emojis/848754747339177985.png?v=1")
      .setDescription(`Purchased \`\`${quantity}\`\` gift boxes \n Price:\`\`${price}\`\` ₿ \nTax: \`\`${tax}\`\` \`\`6%\`\` \n Price paid: \`\`${pricefinal}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
      else if(args[0].toLowerCase() === "watermelon" || args[0].toLowerCase() === "watermelons" || args[0].toLowerCase() === "wm") {
        let quantity = args[1]
        if(!quantity) {
          quantity = 1
        }
        let priceperquantity = 10000
        let price = priceperquantity * quantity
        let tax = price * 0.06
        let pricefinal = price + tax
        let user = message.author
        let money = db.get(`money_${user.id}`)
        if(money < pricefinal) {
          let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setFooter("Error")
      .setDescription("You do not have enough money!")
      .setTimestamp()
      return message.lineReplyNoMention(embed)
      }
      else {
        db.add(`watermelon_${user.id}`, quantity)
        db.subtract(`money_${user.id}`, price)
        let embed = new Discord.MessageEmbed()
        .setTitle("Success")
      .setColor("GREEN")
      .setFooter("Purchase")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/843097982815436820/850013831887323166/imagem_2021-06-03_151055.png")
      .setDescription(`Purchased \`\`${quantity}\`\` watermelons \n Price:\`\`${price}\`\` ₿ \nTax: \`\`${tax}\`\` \`\`6%\`\` \n Price paid: \`\`${pricefinal}\`\` ₿`)
      message.lineReplyNoMention(embed)
      }
      }
  }
}