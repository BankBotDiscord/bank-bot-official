const Discord = require("discord.js")

module.exports = {
  name: "shop",
  description: "shop",
  execute(message, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setDescription("<:Bank_Dev_Added:834885636593811496> **New** - New limited items added! see them with \`\`b!shop limited\`\`")
    .setFooter("Shop - Page 1/2")
    // add // to this when even is over, 1 - 3 day event
    //.addField(`**SPECIAL BUY EVENT** \n ----------------------------------------------- \n<:Bank_Emoji_Bitcoin:834562720678412318> Bitcoin - 10000₿`, `This item is precious to win temporary vip, buy as much as you can while it is on the shop! \n**-----------------------------------------------** `)
    .addField(`<:Bank_Item_Cookie:835208438539223090>  Cookie - 69₿`, `Yeah, this is a cookie. Use this to obtain a random amount of money.`)
    .addField(`<:Bank_Item_Apple:835506553401638962> Apple - 3,000 ₿`, `Apples can give you a random item. It can be bread, cookies, a pickaxe, or even a cookie rifle!`)
    .addField(`<:Bank_Item_LuckyCoin:834914133336916038> Lucky Coin - 5,000 ₿`, ` The Lucky Coin is a usable item which can boost your Monthly, Daily and Stonks by 100 - 700 Coins!`)
    .addField(`<:Bank_Item_CookieGun:835246894480490516> Cookie rifle - 10,000 ₿`, `Cookie rifles can be used for b!hunt, winning random amounts of money. Attention tho, cause it might break after a few tries`)
    .addField(`<:Bank_Item_CookieFishRod1:844584706438856744> Cookie Fishing Rod - 15,000 ₿`, `Get more money and loot from this! also you have more chances of getting more things and treasures as long as you upgrade your fishing rod, your boat and your biome`)
    .setColor("ORANGE")
    .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))

     // embed 1
    let embed1 = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setDescription("<:Bank_Dev_Added:834885636593811496> **New** - New limited items added! see them with \`\`b!shop limited\`\`")
    .setFooter("Shop - Page 2/2")
    // add // to this when even is over, 1 - 3 day event
    //.addField(`**SPECIAL BUY EVENT** \n ----------------------------------------------- \n<:Bank_Emoji_Bitcoin:834562720678412318> Bitcoin - 10000₿`, `This item is precious to win temporary vip, buy as much as you can while it is on the shop! \n**-----------------------------------------------**`)
    .addField(`<a:Bank_Item_Booster:848638950038044723> Booster - 100,000 ₿`, `Boost \`\`b!hunt\`\`, \`\`b!fish\`\` and \`\`b!beg\`\` for 1 day!`)
    .addField(`<:Bank_Block_DiamondBlock:841831323094089749> Diamond Block - 10M₿`, `Diamond blocks are the most expensive items on existence, flex this item, also you can use it to various things`)
    .setColor("ORANGE")
    .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))

    //embed 2
     let embed2 = new Discord.MessageEmbed()
    .setTitle("Shop (Limited Items)")
    .setDescription("<:Bank_Dev_Added:834885636593811496> **New** - Hello, welcome to the new shop section! here you can find limited items! choose what you want! go ahead")
    .setFooter("Shop - limited")
    // add // to this when even is over, 1 - 3 day event
    //.addField(`**SPECIAL BUY EVENT** \n ----------------------------------------------- \n<:Bank_Emoji_Bitcoin:834562720678412318> Bitcoin - 10000₿`, `This item is precious to win temporary vip, buy as much as you can while it is on the shop! \n**-----------------------------------------------**`)
    .addField(`<:Bank_Item_GiftBox:848754747339177985> Gift Box - 15000₿`, `Gift a random item to your friend! \`\`Limited!\`\``)
    .addField(`:watermelon: Water Melon - 10000₿`, `You are hungry aren't you? :/ \`\`EXTREME LIMITED!\`\``) 
    .setColor("ORANGE")
    .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))
if(!args[0] || args[0] === "1") {
    message.channel.send(embed)
}
else if(args[0] === "2") {
  message.channel.send(embed1)
}
else if(args[0].toLowerCase() === "limited" || args[0].toLowerCase() === "limited's" || args[0].toLowerCase() === "limiteds" || args[0].toLowerCase() === "l" || args[0].toLowerCase() === "l's" || args[0].toLowerCase() === "ls") {
  message.channel.send(embed2)
}
  }
}