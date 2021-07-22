const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")

module.exports = {
  name: "profile",
  description: "Shows a user's profile.",
  async execute(message, args) {
    if(!args[0] || message.mentions.users.first()) {
    let user = message.mentions.users.first() 
    if(!user) {
      user = message.author
    }
    let money = await db.get(`money_${user.id}`)
    if(!money) {
      money = 0
    }
    let bank = await db.get(`bank_${user.id}`)
    if(!bank) {
      bank = 0
    }
    let aboutme = await db.get(`aboutme_${user.id}`)
    if(!aboutme) {
      aboutme = "This user doesn't have an about me. :("
    }
    let cookiequantity = await db.get(`cookie_${user.id}`)
    if(!cookiequantity) {
      cookiequantity = 0
    }
    let stickerquantity = await db.get(`sticker_${user.id}`) 
    if(!stickerquantity) {
      stickerquantity = 0
    }
    let diamondblock = await db.get(`diamondblock_${user.id}`)
    if(!diamondblock) {
      diamondblock = 0
    }
    let cookieriflequantity = await db.get(`cookierifle_${user.id}`) 
    if(!cookieriflequantity) {
      cookieriflequantity = 0
    }
     let boosters = await db.get(`booster_${user.id}`) 
    if(!boosters) {
      boosters = 0
    }
    let shinycoalquantity = await db.get(`shinycoal_${user.id}`)
    if(!shinycoalquantity) {
      shinycoalquantity = 0
    } 
    let breadquantity = await db.get(`bread_${user.id}`)
    if(!breadquantity) {
      breadquantity = 0
    }
       let bookquantity = await db.get(`book_${user.id}`)
    if(!bookquantity) {
      bookquantity = 0
    }
     let luckycoinquantity = await db.get(`luckycoin_${user.id}`) 
    if(!luckycoinquantity) {
      luckycoinquantity = 0
    }
    let stickersglobal = db.get(`stickersglobal_${user.id}`)
    if(!stickersglobal) {
      stickersglobal = 0
    }
    let goldenstickerquantity = await db.get(`goldensticker_${user.id}`)
    if(!goldenstickerquantity) {
      goldenstickerquantity = 0
    }
    let pickaxequantity = await db.get(`pickaxe_${user.id}`)
    if(!pickaxequantity) {
      pickaxequantity = 0
    }
    let applequantity = await db.get(`apple_${user.id}`)
    if(!applequantity) {
      applequantity = 0
    }
    let glassquantity = await db.get(`glass_${user.id}`)
    if(!glassquantity) {
      glassquantity = 0
    }
    let stickquantity = await db.get(`stick_${user.id}`)
    if(!stickquantity) {
      stickquantity = 0
    }
    let fireliquidquantity = await db.get(`fireliquid_${user.id}`)
    if(!fireliquidquantity) {
      fireliquidquantity = 0
    }
    let tagprofile = await db.get(`tagprofile_${user.id}`)
    if(!tagprofile || tagprofile === null) {
      tagprofile = Math.floor(Math.random() * 1000000) + 100000
      db.set(`tagprofile_${user.id}`, tagprofile)
    }
    let vip = db.get(`vip_${user.id}`)
    let vipdate = db.get(`vipdate_${user.id}`)
    let vipdatem = moment(vipdate).format("MM/YYYY")
    let vipyear = moment(vipdate).format("YYYY")
    let newdate = new Date()
    let newdatem = moment(newdate).format("YYYY")
    if(newdatem - vipyear >= 1) {
      vip = `VIP member \n(**for 1+ year <:Bank_Badge_Vip1y:856272896359399446>**)`
    }
    if(!vipdate || vipdate === null) {
      if(vip === true) {
      vip = `VIP member (since **unknown**)`
      }
      if(vip === null) {
      vip = `No VIP`
      }
    }
    else {
    if(vip === true) {
      vip = `VIP member \n(since ${vipdatem})`
    }
    if(vip === null) {
      vip = "No VIP"
    }
    }
    let dustquantity = db.get(`dust_${user.id}`)
    if(!dustquantity) {
      dustquantity = 0
    }
    let inventory = Math.floor(fireliquidquantity + stickquantity + glassquantity + cookiequantity + cookieriflequantity + applequantity + pickaxequantity + goldenstickerquantity + stickerquantity + luckycoinquantity + bookquantity + breadquantity + shinycoalquantity + dustquantity + diamondblock + boosters)
    let profilecolor = db.get(`profilecolor_${user.id}`)
    if(!profilecolor) {
      profilecolor = "FFA500"
    }

    let developer = db.get(`developer_${user.id}`)
    if(developer === true) {
      developer = "Confirmed developer."
    }
  if(developer === false || developer === null) {
    let moderator = db.get(`moderator_${user.id}`)
    if(moderator === true) {
      developer = "Confirmed Moderator <:Bank_Badge_Moderator:848306762129997834>"
    }
    else {
      developer = "Not a developer."
    }
    }
    let beguses = db.get(`beguses_${user.id}`)
    if(!beguses) {
      beguses = 0
    }
    let levelfishingrod = db.get(`levelfishingrod_${user.id}`)
    if(!levelfishingrod) {
      levelfishingrod = 1
    }
    let fishingrod = db.get(`fishingrod1_${user.id}`)
    if(!fishingrod) {
      fishingrod = "This user has no fishing rod, they can buy on the shop tho"
    }
    else if(fishingrod === true) {
      fishingrod = `This user has the fishing rod level ${levelfishingrod}`
    }
    let biome = db.get(`fishingbiome_${user.id}`)
    if(!biome) {
      biome = "Blue Waters"
    }
    let fishlevel = db.get(`fishlevel_${user.id}`)
    if(!fishlevel) {
      fishlevel = 1
    }
    let embed = new Discord.MessageEmbed()
    .setThumbnail(user.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))
    .setTitle(`${user.username}'s profile`)
    .setColor(`${profilecolor}`)
    .addField(`About me`, `${aboutme}`)
    .addFields(
      { name: `Wallet:`, value: `\`\`${money}\`\` ₿`, inline: true },
      { name: `Bank:`, value: `\`\`${bank}\`\` ₿`, inline: true },
      { name: `Inventory`, value: `\`\`${inventory}\`\` items`, inline: true },
      )
    .addFields(
      { name: `Vip Status <:Bank_Item_BoosterGlove:835308720665395262>`, value: `${vip}`, inline: true },
      { name: `Developer Status <:Bank_Sticker2_Developer:853725697133641760>`, value: `${developer}`, inline: true },
      { name: `Sticker Collection <a:Bank_Item_Book:834885606396002394>`, value: `\`\`${stickersglobal}\`\` Stickers`, inline: true },
    )
    .setFooter(`Profile #${tagprofile}`)
    message.channel.send(embed)
    }

    else if(args[0].toLowerCase() === "badge" || args[0].toLowerCase() === "badges") {
      let user = message.mentions.users.first()
      if(!user) {
        user = message.author
      }
      let profilecolor = db.get(`profilecolor_${user.id}`)
    if(!profilecolor) {
      profilecolor = "FFA500"
    }
    let embed = new Discord.MessageEmbed()
    .setColor(profilecolor)
    .setTitle(`${user.username}'s Badges <a:Bank_Badge_AllBadges:837301635642425355>`)
    .setThumbnail(user.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))
    //badges
    let begbadge = db.get(`begbadge_${user.id}`)
    let starterbadge = db.get(`starterbadge_${user.id}`)
    let activebadge = db.get(`activebadge_${user.id}`)
    let superactivebadge = db.get(`superactivebadge_${user.id}`)
    let bankerbadge = db.get(`bankerbadge_${user.id}`)
    let betabadge = db.get(`betabadge_${user.id}`)
    let earlysupport = db.get(`earlysupporter_${user.id}`)
    //conditions
    if(begbadge === 1) {
      embed.addField(`Beg Badge`, `This user has this badge for using the beg command 5000+ times`)
    }
    if(starterbadge === true) {
      embed.addField(`<:Bank_Badge_Starter:839581646017134642> Starter Badge`, `This user has the \`\`starter badge\`\` for using the bot less than a month.`)
    }
    if(activebadge === true) {
      embed.addField(`<:Bank_Badge_Active:840211807657656330> Active Badge`, `This user has this badge for using the bot for more then 1 month`)
    }
    if(superactivebadge === true) {
      embed.addField(`<:Bank_Badge_SuperActive:840211808832978994> Super Active Badge`, `This user has this badge for using the bot for more then 3 months`)
    }
   if(bankerbadge === true) {
      embed.addField(`<:Bank_Badge_Banker:840321671781154867> Bank Badge`, `This user has this badge for using the bot for more then 1 year`)
    }
    if(betabadge === true) {
      embed.addField(`<:Bank_Badge_Beta:856298091686658048> Beta Badge`, `This user has this badge for being a beta tester!`)
    }
    if(earlysupport === true) {
      embed.addField(`<:Bank_Badge_EarlySupporter:854073116903997460> Early Supporter Badge`, `This user has this badge for being one of the first 15 vip users / boosters!`)
    }
    message.channel.send(embed)
    }
  }
} 
