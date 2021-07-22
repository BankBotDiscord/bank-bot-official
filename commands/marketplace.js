const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "marketplace",
  description: "market places",
  async execute(client, message, args) {
    let marketplace = db.get(`marketplacee_${message.guild.id}`)
    
      let marketplaceitems = db.get(`marketplaceitems_${message.guild.id}`)
      let marketplacepartner = db.get(`marketplacepartner_${message.guild.id}`)
      let marketplacesellables = db.get(`marketplacesellables_${message.guild.id}`)
    let cookiestock = db.get(`cstock_${message.guild.id}`)
      if(!cookiestock || cookiestock === null) {
        if(marketplacepartner === true) {
        db.set(`cstock_${message.guild.id}`, 69420)
        }
        else {
        db.set(`cstock_${message.guild.id}`, 500)
        }
      }
      let applestock = db.get(`astock_${message.guild.id}`)
      if(!applestock || applestock === null) {
        if(marketplacepartner === true) {
        db.set(`astock_${message.guild.id}`, 69420)
        }
        else {
        db.set(`astock_${message.guild.id}`, 500)
        }
      }
      let crstock = db.get(`crstock_${message.guild.id}`)
      if(!crstock || crstock === null) {
        if(marketplacepartner === true) {
        db.set(`crstock_${message.guild.id}`, 69420)
        }
        else {
        db.set(`crstock_${message.guild.id}`, 500)
        }
      }
      let lcstock = db.get(`lcstock_${message.guild.id}`)
      if(!lcstock || lcstock === null) {
        if(marketplacepartner === true) {
        db.set(`lcstock_${message.guild.id}`, 69420)
        }
        else {
        db.set(`lcstock_${message.guild.id}`, 500)
        }
      }
      let cookieprice = db.get(`cookieprice_${client.id}`)
      if(!cookieprice) {
        db.set(`cookieprice_${client.id}`, 50)
      }
      let appleprice = db.get(`appleprice_${client.id}`)
      if(!appleprice) {
        db.set(`appleprice_${client.id}`, 2950)
      }
      let lcprice = db.get(`lcprice_${client.id}`)
      if(!lcprice) {
        db.set(`lcprice_${client.id}`, 4950)
      }
      let marketplacecookie = db.get(`marketplacecookie_${message.guild.id}`)
      let marketplacelc = db.get(`marketplacelc_${message.guild.id}`)
    if(!args[0]) {
    if(!marketplace) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`No Marketplace here!`)
      .setDescription(`Hey there! if you want to create a marketplace for this server you need to do \`\`b!marketplace create\`\` to start! then you can just do \`\`b!help marketplace\`\` to know more about this!`)
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.channel.send(embed)
    }
    else if(marketplace === true) {
      let partnered = db.get(`marketplacepartner_${message.guild.id}`)
      if(!partnered) {
        partnered = "This marketplace is not a bank bot partnered marketplace! so there will be less items on sell! (if the server admin wants, they can submit this server to be a bank bot partnered server with \`\`b!marketplace submit\`\`)"
      }
      else if(partnered === true) {
        partnered = "<a:Bank_Badge_MarketPartner:846480900149477406> This marketplace is a bank bot partnered marketplace! enjoy all of the items there are on sell!"
      }
      let embed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name}'s Marketplace! <:Bank_Item_VendingMachine:845436005712658442>`)
      .setDescription(`${partnered} \n\n**__Items on Sell__** \n`)
      .setThumbnail(message.guild.iconURL())
      .setColor("GREEN")
      let marketplacecookie = db.get(`marketplacecookie_${message.guild.id}`)
      let cookieprice = db.get(`cookieprice_${client.id}`)
      if(!cookieprice) {
        cookieprice = "50"
      }
      let marketplacecr = db.get(`marketplacecr_${message.guild.id}`)
      let crprice = db.get(`crprice_${client.id}`)
      if(!crprice) {
        db.set(`crprice_${client.id}`, 9950)
      }
      let marketplaceapple = db.get(`marketplaceapple_${message.guild.id}`)
      let appleprice = db.get(`appleprice_${client.id}`)
      if(!appleprice) {
        appleprice = "2950"
      }
      if(marketplacecookie === 1) {
        embed.addField(`<:Bank_Item_Cookie:835208438539223090> Cookie - ${cookieprice}₿  |  **Stock** - \`\`${cookiestock}\`\``, `This price can go up and down depending on global boosts`)
      }
      if(marketplaceapple === 1) {
      embed.addField(`<:Bank_Item_Apple:835506553401638962> Apples - ${appleprice}₿  |  **Stock** - \`\`${applestock}\`\``, `This price can go up and down depending on global boosts`)
      }
      if(marketplacelc === 1) {
        embed.addField(`<:Bank_Item_LuckyCoin:834914133336916038> Lucky Coin - ${lcprice}₿  |  **Stock** - \`\`${lcstock}\`\``, `This price can go up and down depending on global boosts`)
      }
      if(marketplacecr === 1) {
      embed.addField(`<:Bank_Item_CookieGun:835246894480490516> Cookie Rifles - ${crprice}₿  |  **Stock** - \`\`${crstock}\`\``, `This price can go up and down depending on global boosts`)
      }
      message.channel.send(embed)

    }
    }
    else if(args[0].toLowerCase() === "create") {
      if(!marketplace) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Marketplace created!`)
          .setDescription(`Your server's marketplace was created! do b!help marketplace to know more about marketplace and how to set items for sell,...`)
          .setColor("GREEN")
          .setFooter(`Want to submit your marketplace on the future? b!marketplace submit`)
          message.channel.send(embed)
          db.set(`marketplacee_${message.guild.id}`, true)
        }
        else {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Marketplace`)
          .setDescription(`You do not have perms to do that! just server admins can create a marketplace`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
        }
      }
      else {
let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Marketplace`)
          .setDescription(`This server already has a marketplace`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "submit") {
      if(message.member.hasPermission("ADMINISTRATOR")) {
        if(marketplace === true) {
          let alreadysubmited = db.get(`alreadysubmited_${message.guild.id}`)
          if(!alreadysubmited) {
            let marketplacepartner = db.get(`marketplacepartner_${message.guild.id}`)
            if(!marketplacepartner) {
          let invite = await message.channel.createInvite({ unique: true, temporary: false });
          let embed = new Discord.MessageEmbed()
          .setTitle(`Are you sure you want to submit!`)
          .setDescription(`Y / N`)
          .setColor("ORANGE")
          let embed1 = new Discord.MessageEmbed()
          .setTitle(`Submited!`)
          .setDescription(`You submited your marketplace for bank bot's marketplace partner! wait for a couple hours or even days for a bank bot's reply!`)
          .setColor("GREEN")
          let embed2 = new Discord.MessageEmbed()
          .setTitle(`New Submition!`)
          .setDescription(`${message.guild.id}'s marketplace submited their marketplace for partner! do you think we should accept it?`)
          .setColor("GREEN")
          let embed3 = new Discord.MessageEmbed()
          .setTitle(`New Submition!`)
          .setDescription(`${message.guild.id}'s marketplace submited their marketplace for partner! do you think we should accept it?`)
          .setColor("GREEN")
          const channel = client.channels.cache.find(channel => channel.id === "846484225770389584")
          const channel1 = client.channels.cache.find(channel => channel.id === "837066918590545990")
          let filter = m => m.author.id === message.author.id
          message.channel.send(embed).then(() => {
          message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            message.channel.send(embed1)
            channel.send(embed2)
            channel1.send(`${invite}`)
            channel1.send(embed3)
            db.set(`alreadysubmited_${message.guild.id}`, true)
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.lineReplyNoMention(`Submition canceled!`)
          }
        })
        .catch(collected => {
            message.lineReplyNoMention('Submition Canceled!: Invalid Response');
        });
    })
        }
        else {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Marketplace`)
          .setDescription(`This server's marketplace is already partnered!`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
        }
          }
        else {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Marketplace`)
          .setDescription(`Your marketplace already submited for partner!`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
        }
        }
        else {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Marketplace`)
          .setDescription(`This server does not have a marketplace! to create one you can use b!marketplace create`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
        }
      }
      else {
        let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Marketplace`)
          .setDescription(`You do not have perms to do that! just server admins can create a marketplace`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "partner") {
      let developer = db.get(`developer_${message.author.id}`)
      if(developer === true) {
        let marketplacetosearch = args[1]
        let marketplacee = db.get(`marketplacee_${args[1]}`)
        if(!marketplacetosearch) {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Marketplace`)
          .setDescription(`Please mention a marketplace to partner with!`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
        }
        else if(!marketplacee) {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`No marketplace`)
          .setDescription(`No marketplace found!`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
        }
          else {
            let embed = new Discord.MessageEmbed()
            .setTitle(`New bank bot partner!`)
            .setDescription("GG")
            .setColor("GREEN")
            .setFooter(`${args[1]}`)
            message.delete()
            message.channel.send(embed)
            db.set(`marketplacepartner_${args[1]}`, true)
            db.delete(`alreadysubmited_${args[1]}`)
          }
      }
      else {
        return
      }
    }
    else if(args[0].toLowerCase() === "delete") {
      if(message.member.hasPermission("ADMINISTRATOR")) {
       let embed = new Discord.MessageEmbed()
          .setTitle(`Are you sure you want to delete your marketplace?`)
          .setDescription(`Y / N`)
          .setColor("ORANGE") 
          let embed1 = new Discord.MessageEmbed()
          .setTitle(`Oh ok :c deleted`)
          .setColor("RED")
              let filter = m => m.author.id === message.author.id
    message.lineReplyNoMention(embed).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            message.lineReplyNoMention(embed1)
            db.delete(`marketplacee_${message.guild.id}`)
            db.delete(`marketplacepartner_${message.guild.id}`)
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.lineReplyNoMention(`Marketplace deletion request canceled!`)
          }
        })
        .catch(collected => {
            message.lineReplyNoMention('Submition Canceled!: Invalid Response');
        });
    })
      }
      else {
        let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Marketplace`)
          .setDescription(`You do not have perms to do that! just server admins can create a marketplace`)
          .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      message.lineReplyNoMention(embed)
      }
    }
    else if(args[0].toLowerCase() === "add") {
      let item = args[1]
      if(!marketplacepartner) {
        if(marketplaceitems <= 5) {
      if(!item) {
        let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`No item`)
          .setDescription(`You have to specify an item to put on sell to your marketplace!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      else if(item.toLowerCase() === "cookie" || item.toLowerCase() === "cookies") {
      if(message.member.hasPermission("ADMINISTRATOR")) {
        let marketplacecookie = db.get(`marketplacecookie_${message.guild.id}`)
        if(!marketplacecookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`New item added to the marketplace!`)
        .setColor("GREEN")
        .setDescription(`Cookies are now added to your marketplace!`)
        .setFooter(`Cookie`)
    .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
    db.add(`marketplaceitems_${message.guild.id}`, 1)
    db.add(`marketplacecookie_${message.guild.id}`, 1)
    if(marketplacepartner === true) {
      db.set(`cstock_${message.guild.id}`, 69420)
    }
    else if(!marketplacepartner) {
      db.set(`cstock_${message.guild.id}`, 500)
    }

      }
      else {
             let embed = new Discord.MessageEmbed()
             .setTitle(`Error >:(`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          .setFooter(`Item added already`)
          .setDescription(`This item was already added to your marketplace!`)
          message.lineReplyNoMention(embed)
           }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have perms to add items to your marketplace! just admins can do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      }
      else if(item.toLowerCase() === "cookierifle" || item.toLowerCase() === "cr") {
         if(message.member.hasPermission("ADMINISTRATOR")) {
           let marketplacecr = db.get(`marketplacecr_${message.guild.id}`)
           if(!marketplacecr) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`New item added to the marketplace!`)
        .setColor("GREEN")
        .setDescription(`Cookie rifles are now on your marketplace!`)
        .setFooter(`Cookie rifles`)
    .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
    db.add(`marketplacecr_${message.guild.id}`, 1)
    db.add(`marketplaceitems_${message.guild.id}`, 1)
    if(marketplacepartner === true) {
      db.set(`crstock_${message.guild.id}`, 69420)
    }
    else {
      db.set(`crstock_${message.guild.id}`, 500)
    }
           }
           else {
             let embed = new Discord.MessageEmbed()
             .setTitle(`Error >:(`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          .setFooter(`Item added already`)
          .setDescription(`This item was already added to your marketplace!`)
          message.lineReplyNoMention(embed)
           }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have perms to add items to your marketplace! just admins can do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      }
      else if(item.toLowerCase() === "luckycoin" || item.toLowerCase() === "lc") {
         if(message.member.hasPermission("ADMINISTRATOR")) {
           let marketplacelc = db.get(`marketplacelc_${message.guild.id}`)
           if(!marketplacelc) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`New item added to the marketplace!`)
        .setColor("GREEN")
        .setDescription(`Lucky coins are now on your marketplace!`)
        .setFooter(`Lucky coins`)
    .setThumbnail("https://cdn.discordapp.com/emojis/834914133336916038.png?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
    db.add(`marketplacelc_${message.guild.id}`, 1)
    db.add(`marketplaceitems_${message.guild.id}`, 1)
    if(marketplacepartner === true) {
      db.set(`lcstock_${message.guild.id}`, 69420)
    }
    else {
      db.set(`lcstock_${message.guild.id}`, 500)
    }
           }
           else {
             let embed = new Discord.MessageEmbed()
             .setTitle(`Error >:(`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          .setFooter(`Item added already`)
          .setDescription(`This item was already added to your marketplace!`)
          message.lineReplyNoMention(embed)
           }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have perms to add items to your marketplace! just admins can do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      }
           else if(item.toLowerCase() === "apple" || item.toLowerCase() === "apples") {
      if(message.member.hasPermission("ADMINISTRATOR")) {
        let marketplaceapple = db.get(`marketplaceapple_${message.guild.id}`)
        if(!marketplaceapple) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`New item added to the marketplace!`)
        .setColor("GREEN")
        .setDescription(`Apples are now added to your marketplace!`)
        .setFooter(`Apple`)
    .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
    db.add(`marketplaceitems_${message.guild.id}`, 1)
    db.add(`marketplaceapple_${message.guild.id}`, 1)
    if(marketplacepartner === true) {
      db.set(`astock_${message.guild.id}`, 69420)
    }
    else if(!marketplacepartner) {
      db.set(`astock_${message.guild.id}`, 500)
    }
      }
      else {
             let embed = new Discord.MessageEmbed()
             .setTitle(`Error >:(`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          .setFooter(`Item added already`)
          .setDescription(`This item was already added to your marketplace!`)
          message.lineReplyNoMention(embed)
           }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have perms to add items to your marketplace! just admins can do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      }
        }
        else if(marketplaceitems > 5 && !marketplacepartner) {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`No space left`)
          .setDescription(`You exceeded your item limit for your marketplace! submit your marketplace for more scapes for items!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
        }
      }
      else {
        let item = args[1]
         if(!item) {
        let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`No item`)
          .setDescription(`You have to specify an item to put on sell to your marketplace!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      else if(item.toLowerCase() === "cookie" || item.toLowerCase() === "cookies") {
      if(message.member.hasPermission("ADMINISTRATOR")) {
        let marketplacecookie = db.get(`marketplacecookie_${message.guild.id}`)
        if(!marketplacecookie) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`New item added to the marketplace!`)
        .setColor("GREEN")
        .setDescription(`Cookies are now added to your marketplace!`)
        .setFooter(`Cookie`)
    .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
    db.add(`marketplaceitems_${message.guild.id}`, 1)
    db.add(`marketplacecookie_${message.guild.id}`, 1)
        }
        else {
             let embed = new Discord.MessageEmbed()
             .setTitle(`Error >:(`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          .setFooter(`Item added already`)
          .setDescription(`This item was already added to your marketplace!`)
          message.lineReplyNoMention(embed)
           }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have perms to add items to your marketplace! just admins can do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      }
            else if(item.toLowerCase() === "cookierifle") {
         if(message.member.hasPermission("ADMINISTRATOR")) {
           let marketplacecr = db.get(`marketplacecr_${message.guild.id}`)
           if(!marketplacecr) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`New item added to the marketplace!`)
        .setColor("GREEN")
        .setDescription(`Cookie rifles are now on your marketplace!`)
        .setFooter(`Cookie rifles`)
    .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
    db.add(`marketplacecr_${message.guild.id}`, 1)
    db.add(`marketplaceitems_${message.guild.id}`, 1)
           }
           else {
             let embed = new Discord.MessageEmbed()
             .setTitle(`Error >:(`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          .setFooter(`Item added already`)
          .setDescription(`This item was already added to your marketplace!`)
          message.lineReplyNoMention(embed)
           }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have perms to add items to your marketplace! just admins can do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      }
                else if(item.toLowerCase() === "apple" || item.toLowerCase() === "apples") {
      if(message.member.hasPermission("ADMINISTRATOR")) {
        let marketplaceapple = db.get(`marketplaceapple_${message.guild.id}`)
        if(!marketplaceapple) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`New item added to the marketplace!`)
        .setColor("GREEN")
        .setDescription(`Apples are now added to your marketplace!`)
        .setFooter(`Apple`)
    .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
    db.add(`marketplaceitems_${message.guild.id}`, 1)
    db.add(`marketplaceapple_${message.guild.id}`, 1)

      }
      else {
             let embed = new Discord.MessageEmbed()
             .setTitle(`Error >:(`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          .setFooter(`Item added already`)
          .setDescription(`This item was already added to your marketplace!`)
          message.lineReplyNoMention(embed)
           }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have perms to add items to your marketplace! just admins can do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
      }
    }
  }
  else if(args[0].toLowerCase() === "buy") {
    let item = args[1]
    if(marketplace === true) {
      if(item.toLowerCase() === "cookie" || item.toLowerCase() === "cookies") {
        if(marketplacecookie === 1) {
          let quantity = args[2]
          if(!quantity) {
            quantity = 1
          }
          let money = db.get(`money_${message.author.id}`)
          if(money < quantity * cookieprice) {
            let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No money`)
          .setDescription(`You do not have enough money to buy this many cookies!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
          }
          else if(quantity > cookiestock) {
let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No cookies`)
          .setDescription(`The cookie stock does not have that much cookies!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
          }
          else {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Purchase`)
            .setColor("GREEN")
            .setDescription(`You bought \`\`${quantity}\`\` of cookies for ${quantity * cookieprice}₿ !`)
            .setFooter(`Lol`)
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
            message.lineReplyNoMention(embed)
            db.subtract(`money_${message.author.id}`, quantity * cookieprice)
            db.subtract(`cstock_${message.guild.id}`, quantity)
            db.add(`cookie_${message.author.id}`, quantity)
          }
        }
        else {
          let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No money`)
          .setDescription(`This marketplace does not have cookies on sell!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
        }
      }
           else if(item.toLowerCase() === "apple" || item.toLowerCase() === "apples") {
        if(marketplacecookie === 1) {
          let quantity = args[2]
          if(!quantity) {
            quantity = 1
          }
          let money = db.get(`money_${message.author.id}`)
          if(money < quantity * appleprice) {
            let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No money`)
          .setDescription(`You do not have enough money to buy this many apples!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
          }
          else if(quantity > applestock) {
let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No apples`)
          .setDescription(`The apple stock does not have that many apples!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
          }
          else {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Purchase`)
            .setColor("GREEN")
            .setDescription(`You bought \`\`${quantity}\`\` of apples for ${quantity * appleprice}₿ !`)
            .setFooter(`Lol`)
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
            message.lineReplyNoMention(embed)
            db.subtract(`money_${message.author.id}`, quantity * appleprice)
            db.subtract(`astock_${message.guild.id}`, quantity)
            db.add(`apple_${message.author.id}`, quantity)
          }
        }
        else {
          let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No money`)
          .setDescription(`This marketplace does not have apples on sell!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
        }
      }
    }
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No marketplace`)
          .setDescription(`There is not marketplace in this server tho`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
  }
  else if(args[0].toLowerCase() === "recharge" || args[0].toLowerCase() === "charge") {
    if(marketplace === true) {
  let item = args[1]
  if(!item) {
    let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No item specified`)
          .setDescription(`You have to specify an item`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
  }
  else if(message.member.hasPermission("ADMINISTRATOR")) {
  if(item.toLowerCase() === "cookies" || item.toLowerCase() === "cookie") {
    let cstock = db.get(`cstock_${message.guild.id}`)
    let cookiecheck = db.get(`marketplacecookie_${message.guild.id}`)
    if(!cookiecheck || cookiecheck === null) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`This marketplace does not have cookies on sell`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
    else if(cstock === 0) {
      if(marketplacepartner === true) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Recharged`)
          .setFooter(`Lol`)
          .setDescription(`Your cookie stock was successfully restored!`)
          .setColor("GREEN")
          .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
          message.lineReplyNoMention(embed)
          db.set(`cstock_${message.guild.id}`, 69420)
    }
    else if(!marketplacepartner) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Recharged`)
          .setFooter(`Lol`)
          .setDescription(`Your cookie stock was successfully restored!`)
          .setColor("GREEN")
          .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
          message.lineReplyNoMention(embed)
          db.set(`cstock_${message.guild.id}`, 500)
    }
    }
    else if(cstock >= 1){
       let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Stock`)
          .setDescription(`You still have stock!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
  }
  else if(item.toLowerCase() === "apples") {
  let astock = db.get(`astock_${message.guild.id}`)
    let applecheck = db.get(`marketplaceapple_${message.guild.id}`)
    if(!applecheck || applecheck === null) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`This marketplace does not have apples on sell`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
    else if(astock === 0) {
      if(marketplacepartner === true) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Recharged`)
          .setFooter(`Lol`)
          .setDescription(`Your apple stock was successfully restored!`)
          .setColor("GREEN")
          .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
          message.lineReplyNoMention(embed)
          db.set(`astock_${message.guild.id}`, 69420)
    }
    else if(!marketplacepartner) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Recharged`)
          .setFooter(`Lol`)
          .setDescription(`Your apple stock was successfully restored!`)
          .setColor("GREEN")
          .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
          message.lineReplyNoMention(embed)
          db.set(`astock_${message.guild.id}`, 500)
    }
    }
    else if(astock >= 1) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`Stock`)
          .setDescription(`You still have stock!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
  }
  else if(item.toLowerCase() === "cookierifle" || item.toLowerCase() === "cr" || item.toLowerCase() === "cookierifles") {
  let crstock = db.get(`crstock_${message.guild.id}`)
    let cookieriflecheck = db.get(`marketplacecr_${message.guild.id}`)
    if(!cookieriflecheck || cookieriflecheck === null) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`This marketplace does not have cookie rifles on sell`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
    else if(crstock === 0) {
      if(marketplacepartner === true) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Recharged`)
          .setFooter(`Lol`)
          .setDescription(`Your cookie rifle stock was successfully restored!`)
          .setColor("GREEN")
          .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
          message.lineReplyNoMention(embed)
          db.set(`crstock_${message.guild.id}`, 69420)
    }
    else if(!marketplacepartner) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Recharged`)
          .setFooter(`Lol`)
          .setDescription(`Your cookie rifle stock was successfully restored!`)
          .setColor("GREEN")
          .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
          message.lineReplyNoMention(embed)
          db.set(`crstock_${message.guild.id}`, 500)
    }
    }
    else if(crstock >= 1) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`Stock`)
          .setDescription(`You still have stock!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
  }
  else if(item.toLowerCase() === "luckycoin" || item.toLowerCase() === "lc" || item.toLowerCase() === "luckycoins") {
    let lcstock = db.get(`lcstock_${message.guild.id}`)
    let lccheck = db.get(`marketplacelc_${message.guild.id}`)
    if(!lccheck || lccheck === null) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`This marketplace does not have lucky coins on sell`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
    else if(lcstock === 0) {
      if(marketplacepartner === true) {
       let embed = new Discord.MessageEmbed()
        .setTitle(`Recharged`)
          .setFooter(`Lol`)
          .setDescription(`Your lucky coin stock was successfully restored!`)
          .setColor("GREEN")
          .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
          message.lineReplyNoMention(embed)
          db.set(`lcstock_${message.guild.id}`, 69420)
    }
    else if(!marketplacepartner) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Recharged`)
          .setFooter(`Lol`)
          .setDescription(`Your lucky coin stock was successfully restored!`)
          .setColor("GREEN")
          .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
          message.lineReplyNoMention(embed)
          db.set(`lcstock_${message.guild.id}`, 500)
    }
    }
    else if(lcstock >= 1){
       let embed = new Discord.MessageEmbed()
          .setTitle(`Error >:(`)
          .setFooter(`Stock`)
          .setDescription(`You still have stock!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
  }
  }
  else {
    let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have permission to do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
  }
  }
  else {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No marketplace`)
          .setDescription(`There is not marketplace in this server tho`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
    }
    }
    else if(args[0].toLowerCase() === "remove") {
      let item = args[1]
      if(marketplace === true) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
      if(item.toLowerCase() === "cookie" || item.toLowerCase() === "cookies") {
        let marketplacecookie = db.get(`marketplacecookie_${message.guild.id}`)
        if(marketplacecookie === 1) {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Removed item!`)
          .setColor("ORANGE")
          .setDescription(`You removed cookie from the marketplace!`)
          .setFooter(`Remove`)
          .setThumbnail("https://cdn.discordapp.com/emojis/835208438539223090.png?v=1")
          .setTimestamp()
          message.lineReplyNoMention(embed)
          db.delete(`marketplacecookie_${message.guild.id}`)
          db.delete(`cstock_${message.guild.id}`)
        }
        else {
          let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No item`)
          .setDescription(`You do not have this item on sell!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
        }
      }
      else if(item.toLowerCase() === "apple" || item.toLowerCase() === "apples") {
        let marketplaceapple = db.get(`marketplaceapple_${message.guild.id}`)
        if(marketplaceapple === 1) {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Removed item!`)
          .setColor("ORANGE")
          .setDescription(`You removed apple from the marketplace!`)
          .setFooter(`Remove`)
          .setThumbnail("https://cdn.discordapp.com/emojis/835506553401638962.png?v=1")
          .setTimestamp()
          message.lineReplyNoMention(embed)
          db.delete(`marketplaceapple_${message.guild.id}`)
          db.delete(`astock_${message.guild.id}`)
        }
        else {
          let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No item`)
          .setDescription(`You do not have this item on sell!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
        }
      }
      else if(item.toLowerCase() === "cookierifle" || item.toLowerCase() === "cookierifles" || item.toLowerCase() === "cr") {
        let marketplacecr = db.get(`marketplacecr_${message.guild.id}`)
        if(marketplacecr === 1) {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Removed item!`)
          .setColor("ORANGE")
          .setDescription(`You removed cookie rifle from the marketplace!`)
          .setFooter(`Remove`)
          .setThumbnail("https://cdn.discordapp.com/emojis/835246894480490516.png?v=1")
          .setTimestamp()
          message.lineReplyNoMention(embed)
          db.delete(`marketplacecr_${message.guild.id}`)
          db.delete(`crstock_${message.guild.id}`)
        }
        else {
          let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No item`)
          .setDescription(`You do not have this item on sell!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
        }
      }
      else if(item.toLowerCase() === "luckycoin" || item.toLowerCase() === "lc" || item.toLowerCase() === "luckycoins") {
        let marketplacelc = db.get(`marketplacelc_${message.guild.id}`)
        if(marketplacelc === 1) {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Removed item!`)
          .setColor("ORANGE")
          .setDescription(`You removed lucky coins from the marketplace!`)
          .setFooter(`Remove`)
          .setThumbnail("https://cdn.discordapp.com/emojis/834914133336916038.png?v=1")
          .setTimestamp()
          message.lineReplyNoMention(embed)
          db.delete(`marketplacelc_${message.guild.id}`)
          db.delete(`lcstock_${message.guild.id}`)
        }
        else {
          let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No item`)
          .setDescription(`You do not have this item on sell!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
        }
      }
        }
        else {
          let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No perms`)
          .setDescription(`You do not have permission to do this!`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
        }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Error >:(`)
          .setFooter(`No marketplace`)
          .setDescription(`There is not marketplace in this server tho`)
          .setColor("RED")
          .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
          message.lineReplyNoMention(embed)
      }
    }
  }
}