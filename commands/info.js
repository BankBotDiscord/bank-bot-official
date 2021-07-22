const Discord = require("discord.js")

module.exports = {
  name: "info",
  description: "Shows some info of an item.",
  execute(message, args) {
    let iteminfo = args[0]
    if(!iteminfo) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Error >:(")
      .setColor("RED")
      .setFooter("Error")
      .setTimestamp()
      .setDescription(`Please choose an item to see info about it. \n **Example:** \`\`b!info cookie\`\``)
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "cookie" || iteminfo.toLowerCase() === "cookies") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Cookie")
    .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
    .setFooter("Item type: Buyable | Usable")
    .setColor("GREEN")
    .setDescription(`Cookies are bought for 69 ₿ in \`\`b!shop\`\`, and with cookies you can get a random amount of ₿. \n To use them, use the command \`\`b!use cookie <quantity>\`\`.`)
    message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "luckycoin" || iteminfo.toLowerCase() === "lc" || iteminfo.toLowerCase() === "luckycoins") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Lucky coin")
    .setThumbnail("https://cdn.discordapp.com/emojis/834914133336916038.png?v=1")
    .setFooter("Item type: Buyable | Usable")
    .setColor("GREEN")
    .setDescription("Lucky Coin is an item gotten from ``b!Shop``. With Lucky Coin Your Monthly, Stonks, Daily, gets Stonked up by 100 ₿ more. It's a great investment!")
    message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "shinycoal" || iteminfo.toLowerCase() === "shinycoals") {
      let embed = new Discord.MessageEmbed()
      .setTitle("Shiny coal")
      .setThumbnail("https://cdn.discordapp.com/emojis/834923136167575582.gif?v=1")
      .setFooter("Item type: Sellable \nItem rarety: Rare")
      .setColor("GREEN")
      .setDescription("Shiny coal is an item gotten from ``b!stonks``. You can sell it for 20k ₿.")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "bread") {
      let embed = new Discord.MessageEmbed()
      .setTitle("Bread")
      .setThumbnail("https://cdn.discordapp.com/emojis/835265475511582720.png?v=1")
      .setFooter("Item type: Usable \nItem rarety: Common")
      .setDescription("Bread is an item gotten from ``b!start``. When using bread it gives you a random item.")
      .setColor("GREEN")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "cookierifle" || iteminfo.toLowerCase() === "cookierifles") {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Cookie Rifle`)
      .setColor("GREEN")
      .setDescription("Cookie rifles can be gotten from ``b!beg`` or be bought on the shop for 10k each, when used, they can be usefull for ``b!hunt``, which gives a good amount of money.")
      .setFooter("Item type: Usable \nItem rarety: Rare")
      .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
      return message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "book" || iteminfo.toLowerCase() === "books") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/834885606396002394.gif?v=1")
      .setTitle("Book")
      .setFooter("Item type: Sellable \nItem rarety: Common")
      .setColor("GREEN")
      .setDescription("Books can be gotten from work, 50% chance to get so it is pretty common, also you can sell for 100 coins with ``b!sell book 1``")
      message.channel.send(embed)
    }
     else if(iteminfo.toLowerCase() === "sticker") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/834885591299784805.png?v=1")
      .setTitle("Sticker")
      .setFooter("Item type: Sellable \nItem rarety: Rare")
      .setColor("GREEN")
      .setDescription("Stickers can be gotten from monthlys, they are not rare but the time you have to wait is a lot so it is considered a little rare, althought if you get one you can sell it for 40k with ``b!sell sticker 1``")
      message.channel.send(embed)
    }
      else if(iteminfo.toLowerCase() === "goldensticker" || iteminfo.toLowerCase() === "goldenstickers") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/835346593556332574.png?v=1")
      .setTitle("Golden Sticker")
      .setFooter("Item type: Sellable  \nItem rarety: Super rare")
      .setColor("GREEN")
      .setDescription("Golden stickers are the rarest item, they can be gotten from ``b!beg`` but the chance is just too small, althought if you get one you can sell for 3M with ``b!sell goldensticker 1``")
      message.channel.send(embed)
    }
     else if(iteminfo.toLowerCase() === "pickaxe" || iteminfo.toLowerCase() === "pickaxes") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/835263253806186548.png?v=1")
      .setTitle("Pickaxe")
      .setFooter("Item type: Collectable \nItem rarety: Rare")
      .setColor("GREEN")
      .setDescription("Pickaxes can't be bought or sold, but they can be gotten from ``b!stonks``, pretty rare BUT they are collectable")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "apple" || iteminfo.toLowerCase() === "apples") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
      .setTitle("Apples")
      .setFooter("Item type: Usable \nItem rarety: Rare")
      .setColor("GREEN")
      .setDescription("Apples can give you a random item, it can be bread, cookies, a pickaxe or a cookie rifle")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "stick" || iteminfo.toLowerCase() === "sticks") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/836712560198811708.png?v=1")
      .setTitle("Sticks")
      .setFooter("Item type: Crafting \nItem rarety: Common")
      .setColor("GREEN")
      .setDescription("Sticks are gotten from ``b!beg`` and it is quite common")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "glass") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/836712108614877185.png?v=1")
      .setTitle("Glass")
      .setFooter("Item type: Crafting \nItem rarety: Quite rare")
      .setColor("GREEN")
      .setDescription("glass can only be crafted with 3 sticks on ``b!craft``, as the sticks are commun, glass is not rare but not commun too.")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "fireliquid") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/836693195369742386.png?v=1")
      .setTitle("Fire liquid")
      .setFooter("Item type: Usable \nItem rarety: Rare")
      .setColor("GREEN")
      .setDescription("Fire Liquids are Crafted And can be used to Throw At Players to make them Not use b!beg for 10 Minutes")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "badges") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/837301635642425355.gif?v=1")
      .setTitle(`Badges`)
      .setTimestamp()
      .setColor("GREEN")
      .setFooter(`Not an item!`)
      .setDescription("Badges are collectable awards you can get from different tasks, use ``b!profile`` to see each thing you need, some badges need luck others not")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "developer" || iteminfo.toLowerCase() === "dev") {
let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/837456205084622868.png?v=1")
      .setTitle(`Developer`)
      .setTimestamp()
      .setColor("GREEN")
      .setFooter(`Not an item!`)
      .setDescription(`Developers are the creators of this bot, the question a lot of people have is "how to be developer?" \nAnswer for that: 
      - Be good at discord.js
      - Be good with data bases
      - Be creative (with this, basically do not rob other people's ideias)
      - Be on our server
      And some other requirements
      more info on our server: https://discord.gg/QpMDzdzZH5`)
      message.channel.send(embed)      
    }
     else if(iteminfo.toLowerCase() === "vip") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/835308720665395262.png?v=1")
      .setTitle(`Vip`)
      .setTimestamp()
      .setColor("GREEN")
      .setFooter(`Not an item!`)
      .setDescription("Vip can be gotten from nitro boosting our server: https://discord.gg/QpMDzdzZH5 \nWhat are the perks? Have access to exclusive commands, be the first ones to test new commands, have access to a special chat and more!")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "bitcoin") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/846004035597369346.png?v=1")
      .setTitle(`Bit Coins`)
      .setTimestamp()
      .setColor("GREEN")
      .setFooter(`Not an item!`)
      .setDescription("Bit coins are a in **in** currency that is temporary on ``b!shop``, this means that, from time to time, bitcoins show on ``b!shop`` to buy for 10k for a short period of time and you can use it to buy random items on `b!bitshop`")
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "dust") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/836963652191780885.png?v=1")
      .setTitle("Dust")
      .setDescription("You can get dust by doing ``b!craft dust`` and it requires just 1 glass, this is not rare tho")
      .setColor("GREEN")
      .setFooter(`Item type: Craftable \nItem rarety: Quite rare`)
      .setTimestamp()
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "diamondblock") {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Diamond block`)
      .setThumbnail("https://cdn.discordapp.com/emojis/841831323094089749.png?v=1")
      .setColor("GREEN")
      .setFooter("Item type: Usable \nItem rarety: Rarest")
      .setTimestamp()
      .setDescription(`The rarest item **(member possible)** on bank bot, if you have this item you have power, if you want you have 2 options: \nFlex \nUse it to get some perks \nOn the making of this embed, just 2 people have this item...`)
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "booster" || iteminfo.toLowerCase() === "boost" || iteminfo.toLowerCase() === "boosters") {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Booster`)
      .setThumbnail("https://cdn.discordapp.com/emojis/848638950038044723.gif?v=1")
      .setColor("PURPLE")
      .setFooter("Item type: Usable \nItem rarety: Rare")
      .setTimestamp()
      .setDescription(`Boosts 2+ on \`\`b!hunt\`\`, \`\`b!fish\`\` and \`\`b!beg\`\` meaning that it will double the rewards!`)
      message.channel.send(embed)
    }
    else if(iteminfo.toLowerCase() === "stickers") {
      let embed = new Discord.MessageEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/853725697133641760.png?v=1")
      .setTitle(`Stickers  <:Bank_Item_StickerBox:843124611792371795>`)
      .setDescription(`Stickers are collected by the \`\`b!weekly\`\` kit, there are currently 5 stickers: \n**1-** <a:Bank_Sticker1_Winter:839587359405113354> \n**2-** <:Bank_Sticker2_Developer:853725697133641760> \n**3-** <a:Bank_Sticker3_Yes:843125792833798156> \n **4-** <a:Bank_Sticker4_Music:834923158518759455> \n **5-** <a:Bank_Sticker5_Crown:847544258180153404>`)
      .setColor("GREEN")
      .setFooter(`Vip perks`)
      .setTimestamp()
      message.channel.send(embed)
    }
  }
}