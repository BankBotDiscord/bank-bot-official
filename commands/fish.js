const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")

module.exports = {
  name: "fish",
  description: "fish",
  async execute(client, message, args) {
    if(!args[0]) {
    let user = message.author
     let timeout = 300000;
     if(message.member.id === "773620575155388457") {
       timeout = 10000
     }
  let adventure = await db.fetch(`fishuse_${user.id}`);

  if (adventure !== null && timeout - (Date.now() - adventure) > 0) {
    let time = ms(timeout - (Date.now() - adventure));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR >:(")
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setDescription(`You've already went fishing`)
    .setFooter(`Fish again in ${time}`)
    message.lineReplyNoMention(timeEmbed)
  }
    else {
    //let fish = [ "tuna", "sardine", "whale", "shark", "sea bass", "codfish", "shoe (i don't know how you got this tho)", "mee6 source code", "jelly fish", "fish but went to war", "fishing rod", "discorditch moderator (discord, reddit, twitch)", "[[ **fish** ]]", "that one fish that is always alone", "sponge bob square pants", "100 MILLION COINS...\n\n**Sike** you just got this because yes", "sounddrout" ]
    let weather = db.get(`weather_${client.id}`)
    let randomfish = Math.floor(Math.random() * 4) + 1
    if(weather === "Rainy") {
      randomfish = Math.floor(Math.random() * 5) + 2
    }
    else if(weather === "Sunny") {
      randomfish = Math.floor(Math.random() * 3) + 1
    }
    else if(weather === "Winter") {
      randomfish = Math.floor(Math.random() * 4) + 2
    }
    let amount = Math.floor(Math.random() * 500) + 500;
    let biome = db.get(`fishingbiome_${user.id}`)
    if(!biome) {
      biome = "Blue Waters"
    }
    let levelfishingrod = db.get(`levelfishingrod_${user.id}`)
    if(!levelfishingrod) {
      levelfishingrod = 1
    }
    let boatlevel = db.get(`boatlevel_${user.id}`)
    if(!boatlevel) {
      boatlevel = 1
    }
     let booster = db.get(`usedboost_${user.id}`)
    let boostermessage = "!"
    if(booster === true) {
      amount = amount * 2 
      boostermessage = "\n\n<a:Bank_Item_Booster:848638950038044723> You have an active booster! so your reward is doubled"
    }
  else if(booster >= 1) {
    amount = amount * 2 * booster
    boostermessage = `\n\n<a:Bank_Item_Booster:848638950038044723> You have an active booster! so your reward is doubled`
  }
    let embed = new Discord.MessageEmbed()
    .setTitle(`:fishing_pole_and_fish: Fishing`)
    .setDescription(`**__You fished__** \n\n You just got \n\n \`\`${randomfish}\`\` <a:Bank_Item_Fish:843996638165860383> \n\`\`${amount}\`\` **₿**${boostermessage}`)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`Weather: ${weather} | Biome: ${biome} | Fishing rod level: ${levelfishingrod} | Boat level: ${boatlevel}`)
    let embedwait = new Discord.MessageEmbed()
    .setTitle(`:fishing_pole_and_fish: Fishing...`)
    .setColor("BLUE")
    message.lineReplyNoMention(embedwait).then(message => {
      setTimeout(function() {
        message.edit(embed)
      }, client.ws.ping * 50)
    })
    db.add(`money_${user.id}`, amount)
    db.add(`fish_${user.id}`, randomfish)
    db.set(`fishuse_${user.id}`, Date.now())
    db.add(`fishuses_${user.id}`, 1)
    let fishuses = db.get(`fishuses_${user.id}`)
    if(fishuses === 250) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Wow fisher`)
      .setDescription(`Congrats you just got the fisher badge!`)
      .setTimestamp()
      .setFooter(`b!profile`)
      .setThumbnail()
      message.channel.send(embed)
      db.set(`fisherbadge_${user.id}`, true)
    }
    }
  }
  else if(args[0].toLowerCase() === "upgrade" || args[0].toLowerCase() === "upgrades") {
    let user = message.author
    let fishlevel = db.get(`fishlevel_${user.id}`)
    if(!fishlevel) {
      fishlevel = 1
    }
    let levelfishingrod = db.get(`levelfishingrod_${user.id}`)
    if(!levelfishingrod) {
      levelfishingrod = 1
    }
    let boatlevel = db.get(`boatlevel_${user.id}`)
    if(!boatlevel) {
      boatlevel = 1
    }
    let fishxp = db.get(`fishxp_${user.id}`)
    if(!fishxp) {
      fishxp = 0
    }
    let necessarylevelboat = 3
    let necessarylevelfr = 5
    let levelnecessary = 2
    let biome = db.get(`fishingbiome_${user.id}`)
    if(!biome) {
      biome = "Blue Waters"
      necessarylevelboat = necessarylevelboat
      necessarylevelfr = necessarylevelfr
      levelnecessary = levelnecessary
    }
    if(!args[1]) {
let embed = new Discord.MessageEmbed()
    .setTitle(`Upgrade center`)
    .setDescription(`Hey there, if you want to see your upgrade infos do \`\`b!fish upgrade info\`\` else just say \`\`b!fish upgrade <something>\`\``)
    .setColor("ORANGE")
    .setFooter(`Yeah`)
    message.lineReplyNoMention(embed)
    }
  else if(args[1].toLowerCase() === "info") {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Your upgrades`)
    .setColor("#add8e6")
    .setTimestamp()
    .setDescription(`This is all of your fish upgrades, why is fish important? because you can get awards like items, money and if you are obsessed you can even get to it's leaderboard. \n\n**__Fishing rod__** \nYou fishing rod is level: \`\`${levelfishingrod}\`\` (b!fish upgrade fishingrod) \n\n**__Boat__** \nYour boat is level \`\`${boatlevel}\`\` (b!fish upgrade boat) \n\n**__Biome__** \nYou are currently on the \`\`${biome}\`\`. \nIf your fish level is ${levelnecessary}, your boat level is ${necessarylevelboat} and your fishing rod level is ${necessarylevelfr}, then you can go to the next biome with \`\`b!fish upgrade biome\`\` \n\n**__Fish Level__** \nYou are currently on level ${fishlevel} and have ${fishxp}`)
    .setFooter(`Your fish level: ${fishlevel}`)
    message.lineReplyNoMention(embed)
  }
  else if(args[1].toLowerCase() === "fishingrod") {
    let user = message.author
    let fishlevel = db.get(`fishlevel_${user.id}`)
    if(!fishlevel) {
      fishlevel = 1
    }
    let fishingrodlevel = db.get(`levelfishingrod_${user.id}`)
    if(!fishingrodlevel) {
      fishingrodlevel = 1
    }
    if(levelfishingrod < fishlevel * 5) {
      let fish = db.get(`fish_${user.id}`)
      let amountoffishneeded = fishingrodlevel * 100
      if(fish < amountoffishneeded) {
        let embed = new Discord.MessageEmbed()
     .setTitle(`Error >:(`)
    .setColor("RED")
    .setDescription(`You don't have enough fish tho :(`)
    .setFooter(`No fish`)
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
      }
      else {
        let randomxp = Math.floor(Math.random() * 50)
        let embed = new Discord.MessageEmbed()
        .setTitle("Confirmation")
        .setDescription(`Are you sure about this? \nThis will cost you ${amountoffishneeded} of fish and you have ${fish}`)
        .setFooter(`Y / N`)
        .setTimestamp()
        .setColor("ORANGE")
        let embedsuccess = new Discord.MessageEmbed()
        .setTitle(`Upgrade`)
        .setThumbnail("https://cdn.discordapp.com/emojis/844641431343333395.png?v=1")
        .setFooter(`You just got ${randomxp}`)
        .setColor("GREEN")
        .setDescription(`Your fishing rod upgraded from level ${levelfishingrod} to ${levelfishingrod + 1}`)
        let embedfail = new Discord.MessageEmbed()
        .setTitle(`Operation Canceled or Terminated`)
        .setColor("RED")
        let filter = m => m.author.id === message.author.id;
        message.lineReplyNoMention(embed).then(() => {
          message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            message.edit(embedsuccess)
            db.add(`fishxp_${user.id}`, randomxp)
            db.add(`levelfishingrod_${user.id}`, 1)
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.edit(embedfail)
          } else {
            message.edit(embedfail)
          }
        })
        .catch(collected => {
            console.log("Another upgrade ig, i don't quite know lmao")
        })
        })
      }
    }
    else {
     let embed = new Discord.MessageEmbed()
     .setTitle(`Yeah but no`)
    .setColor("RED")
    .setDescription(`Sorry but you can't upgrade the fishingrod untill your fish level increases`)
    .setFooter(`lol`)
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTimestamp()
    message.lineReplyNoMention(embed)
    }
  }
  }
  else if(args[0].toLowerCase() === "freezer" || args[0].toLowerCase() === "backpack" || args[0].toLowerCase() === "b" || args[0].toLowerCase() === "f") {
    let user = message.mentions.users.first()
    if(!user) {
      user = message.author
    }
  let embed = new Discord.MessageEmbed()
    .setTitle(`${user.username}'s freezer`)
    .setFooter(`b!fish upgrade`)
    .setColor("GREEN")
    .setThumbnail(user.displayAvatarURL({format: "png", dynamic: true, size: 1024, }))

    let fish = db.get(`fish_${user.id}`)
    if(fish >= 1) {
      embed.addField(`**__Common fish__**`, `${fish} <a:Bank_Item_Fish:843996638165860383>`)
    }
    message.channel.send(embed)
  }
  else if(args[0].toLowerCase() === "lb" || args[0].toLowerCase() === "leaderboard") {
    const difarr = [];
    client.users.cache.forEach(user => {
      difarr.push(user)
    })
    const allmemberlen = difarr.length;
    let people = 0;
    let peopleToShow = 10;

    let mes = [];
    for(let i = 0; i < allmemberlen; i++) {
      const amount = db.get(`fish_${difarr[i].id}`) 

      if(amount === null) {
        continue
      }
      mes.push({
        name: difarr[i].username,
        amount: amount
      });
    }


    const realArr = []
    mes.sort((a, b) => b.amount - a.amount);
    for(let k = 0; k < mes.length; k++) {
      people++
      if(people >= peopleToShow) {
        continue
      }
        realArr.push(`**${mes[k].name}** - ${mes[k].amount}`)
    }
    const finalLB = realArr.join('\n')

    let embed = new Discord.MessageEmbed()
    .setTitle(`**Top 10 Fishers**`)
    .setDescription(finalLB)
    .setFooter(`This leaderboard is only for fish!`)
    .setThumbnail("https://cdn.discordapp.com/emojis/843996638165860383.gif?v=1")
    .setColor("BLUE")

    message.channel.send(embed)
  }
  }
}