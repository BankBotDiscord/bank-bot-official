const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "inventory",
  description: "Shows you the items you have in your inventory.",
  async execute(message, args) {
    let user = message.mentions.users.first() 
    if(!user) {
      user = message.author
    }
    //page 1 inventory
    let embed = new Discord.MessageEmbed()
    .setTitle(`<a:Bank_Bal_Pack:834565186597289995> ${user.username}'s inventory`)
    .setColor("ORANGE")
    .setFooter(`Page - 1 || b!info <item>`)
    .setTimestamp()
    .setThumbnail(user.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))
    //page 2 inventory
    let embed1 = new Discord.MessageEmbed()
    .setTitle(`<a:Bank_Bal_Pack:834565186597289995> ${user.username}'s inventory`)
    .setColor("ORANGE")
    .setFooter(`Page - 2 || b!info <item>`)
    .setTimestamp()
    .setThumbnail(user.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))
    //page 3 inventory
    let embed2 = new Discord.MessageEmbed()
    .setTitle(`<a:Bank_Bal_Pack:834565186597289995> ${user.username}'s inventory`)
    .setColor("ORANGE")
    .setFooter(`Page - 3 || b!info <item>`)
    .setTimestamp()
    .setThumbnail(user.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))

    //page 1
    let cookiequantity = await db.get(`cookie_${user.id}`)
    if(cookiequantity >= 1) {
      embed.addField(`<:Bank_Item_Cookie:835208438539223090> Cookie - \`\`${cookiequantity}\`\``, `***ID:*** \`\`cookie\`\``)
    }
    let bookquantity = await db.get(`book_${user.id}`)
    if(bookquantity >= 1) {
      embed.addField(`<a:Bank_Item_Book:834885606396002394> Books - \`\`${bookquantity}\`\``, `***ID:*** \`\`book\`\``)
    }
    let breadquantity = await db.get(`bread_${user.id}`)
    if(breadquantity >= 1) {
      embed.addField(` <:Bank_Item_Bread:835265475511582720> Bread - \`\`${breadquantity}\`\``, `***ID:*** \`\`bread\`\``)
    }
    let stickquantity = await db.get(`stick_${user.id}`)
    if(stickquantity >= 1) {
     embed.addField(`<:Bank_Item_Stick:836712560198811708>  Sticks - \`\`${stickquantity}\`\``, `***ID:*** \`\`stick\`\``)
    }
    let glassquantity = await db.get(`glass_${user.id}`)
    if(glassquantity >= 1) {
      embed.addField(`<:Bank_Item_Glass:836712108614877185> Glass - \`\`${glassquantity}\`\``, `***ID:*** \`\`glass\`\``)
    }
    let dustquantity = await db.get(`dust_${user.id}`)
    if(dustquantity >= 1) {
      embed.addField(` <:Bank_Item_Dust:836963652191780885>  Dust - \`\`${dustquantity}\`\``, `***ID:*** \`\`dust\`\``)
    }
    // page 2
    let applequantity = await db.get(`apple_${user.id}`)
    if(applequantity >= 1) {
      embed1.addField(`<:Bank_Item_Apple:835506553401638962> Apples - \`\`${applequantity}\`\``, `***ID:*** \`\`apple\`\``)
    }
     let luckycoinquantity = await db.get(`luckycoin_${user.id}`) 
    if(luckycoinquantity >= 1) {
      embed1.addField(`<:Bank_Item_LuckyCoin:834914133336916038> Lucky coins - \`\`${luckycoinquantity}\`\``, `***ID:*** \`\`luckycoin\`\``)
    }
    let fireliquidquantity = await db.get(`fireliquid_${user.id}`)
    if(fireliquidquantity >= 1) {
      embed1.addField(`<:Bank_Item_FireLiquid:836693195369742386> Fire liquid - \`\`${fireliquidquantity}\`\``, `***ID:*** \`\`fireliquid\`\``)
    }
    let cookieriflequantity = await db.get(`cookierifle_${user.id}`) 
    if(cookieriflequantity >= 1) {
      embed1.addField(`<:Bank_Item_CookieGun:835246894480490516> Cookie rifles - \`\`${cookieriflequantity}\`\``, `***ID:*** \`\`cookierifle\`\``)
    }
    let watermelon = await db.get(`watermelon_${user.id}`) 
    if(watermelon >= 1) {
      embed1.addField(`:watermelon: Watermelons - \`\`${watermelon}\`\``, `***ID:*** \`\`watermelon\`\``)
    }
    let epicbox = await db.get(`epicbox_${user.id}`)
    if(epicbox >= 1) {
      embed1.addField(`<:Bank_Item_EpicBox:856217663788548106> Epic Boxes - \`\`${epicbox}\`\``, `***ID:*** \`epicbox\``)
    }
    let giftboxes = await db.get(`giftbox_${user.id}`) 
    if(giftboxes >= 1) {
      embed1.addField(`<:Bank_Item_GiftBox:848754747339177985> Gift boxes - \`\`${giftboxes}\`\``, `***ID:*** \`\`giftboxes\`\``)
    }
    //page 3
    let shinycoalquantity = await db.get(`shinycoal_${user.id}`)
    if(shinycoalquantity >= 1) {
      embed2.addField(`<a:Bank_Item_ShinyCoal:834923136167575582> Shiny coal - \`\`${shinycoalquantity}\`\``, `***ID:*** \`\`shinycoal\`\``)
    } 
    let stickerquantity = await db.get(`sticker_${user.id}`) 
    if(stickerquantity >= 1) {
      embed2.addField(`<:Bank_Item_Sticker:834885591299784805> Stickers - \`\`${stickerquantity}\`\``, `***ID:*** \`\`sticker\`\``)
    }
    let booster = await db.get(`booster_${user.id}`)
    if(booster >= 1) {
      embed2.addField(`<a:Bank_Item_Booster:848638950038044723> Boosters - ${booster}`, `***ID:*** \`\`booster\`\``)
    }
    let pickaxequantity = await db.get(`pickaxe_${user.id}`)
    if(pickaxequantity >= 1) {
      embed2.addField(`<:Bank_Collectable_Pickaxe:835263253806186548> Pickaxes - \`\`${pickaxequantity}\`\``, `***ID:*** \`\`pickaxe\`\``)
    }
    let goldenstickerquantity = await db.get(`goldensticker_${user.id}`)
    if(goldenstickerquantity >= 1) {
      embed2.addField(`<:Bank_Item_GoldenSticker:835346593556332574> Golden Stickers - \`\`${goldenstickerquantity}\`\``, `***ID:*** \`\`goldensticker\`\``)
    }
    let diamondblock = await db.get(`diamondblock_${user.id}`)
    if(diamondblock >= 1) {
      embed2.addField(`<:Bank_Block_DiamondBlock:841831323094089749> Diamond Block - \`\`${diamondblock}\`\``, `***ID:*** \`\`diamondblock\`\``)
    }
    let inventory = Math.floor(fireliquidquantity + stickquantity + glassquantity + cookiequantity + cookieriflequantity + applequantity + pickaxequantity + goldenstickerquantity + stickerquantity + luckycoinquantity + bookquantity + breadquantity + shinycoalquantity + dustquantity + diamondblock + watermelon + giftboxes)
    if(!inventory) {
      embed.setDescription(`No items here`)
      embed1.setDescription(`No items here`)
      embed2.setDescription(`No items here`)
    }
    let firstinventory = Math.floor(glassquantity + stickquantity + dustquantity  + bookquantity + breadquantity + cookiequantity)
    if(!firstinventory) {
      embed.setDescription("No items here")
    }
    let secondinventory = Math.floor(applequantity + giftboxes + watermelon + cookieriflequantity + luckycoinquantity + fireliquidquantity)
    if(!secondinventory) {
      embed1.setDescription("No items here")
    }
    let thirdinventory = Math.floor(pickaxequantity + goldenstickerquantity + booster + diamondblock + stickerquantity + shinycoalquantity)
    if(!secondinventory) {
      embed2.setDescription("No items here")
    }
    if(!args[0] || args[0] === "1") {
    message.channel.send(embed)
    }
    else if(args[0] === "2") {
      message.channel.send(embed1)
    }
    else if(args[0] === "3") {
      message.channel.send(embed2)
    }
  }
}
