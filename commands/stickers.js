const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "stickers",
  description: "stickers 4ever",
  execute(message, args) {
    let user = message.author
    let vipcheck = db.get(`vip_${user.id}`)
    let stickersglobal = db.get(`stickersglobal_${user.id}`)
    if(!stickersglobal) {
      stickersglobal = 0
    }
    if(!args[0]) {
      if(!vipcheck) {
      let sticker1check = db.get(`sticker1_${user.id}`)
      let sticker2check = db.get(`sticker2_${user.id}`)
      let sticker3check = db.get(`sticker3_${user.id}`)
      let sticker4check = db.get(`sticker4_${user.id}`)
      let sticker5check = db.get(`sticker5_${user.id}`)
      if(sticker1check === true) {
        sticker1check = "Owned"
      }
      else if(!sticker1check) {
        sticker1check = "Not owned yet"
      }
      if(sticker2check === true) {
        sticker2check = "Owned"
      }
      else if(!sticker2check) {
        sticker2check = "Not owned yet"
      }
      if(sticker3check === true) {
        sticker3check = "Owned"
      }
      else if(!sticker3check) {
        sticker3check = "Not owned yet"
      }
      if(sticker4check === true) {
        sticker4check = "Owned"
      }
      else if(!sticker4check) {
        sticker4check = "Not owned yet"
      }
      if(sticker5check === true) {
        sticker5check = "Owned"
      }
      else if(!sticker5check) {
        sticker5check = "Not owned yet"
      }
      let embed = new Discord.MessageEmbed()
      .setTitle(`Sticker Collection`)
      .setFooter(`b!info vip`)
      .setDescription(`You currently have ${stickersglobal} stickers! \nIf you want to get stickers in a easier way, you can get vip and use \`\`b!weekly\`\` c: \n\n**Your stickers:** \n<a:Bank_Sticker1_Winter:839587359405113354>  Sticker 1 - ${sticker1check} \n<:Bank_Sticker2_Developer:853725697133641760> Sticker 2 - ${sticker2check} \n<a:Bank_Sticker3_Yes:843125792833798156> Sticker 3 - ${sticker3check} \n<a:Bank_Sticker4_Music:834923158518759455> Sticker 4 - ${sticker4check}\n<a:Bank_Sticker5_Crown:847544258180153404> Sticker 5 - ${sticker5check}`)
      .setColor("GREY")
      .setTimestamp()
      message.lineReplyNoMention(embed)
      } 
      else if(vipcheck === true) {
      let sticker1check = db.get(`sticker1_${user.id}`)
      let sticker2check = db.get(`sticker2_${user.id}`)
      let sticker3check = db.get(`sticker3_${user.id}`)
      let sticker4check = db.get(`sticker4_${user.id}`)
      let sticker5check = db.get(`sticker5_${user.id}`)
      if(sticker1check === true) {
        sticker1check = "Owned"
      }
      else if(!sticker1check) {
        sticker1check = "Not owned yet"
      }
      if(sticker2check === true) {
        sticker2check = "Owned"
      }
      else if(!sticker2check) {
        sticker2check = "Not owned yet"
      }
      if(sticker3check === true) {
        sticker3check = "Owned"
      }
      else if(!sticker3check) {
        sticker3check = "Not owned yet"
      }
      if(sticker4check === true) {
        sticker4check = "Owned"
      }
      else if(!sticker4check) {
        sticker4check = "Not owned yet"
      }
      if(sticker5check === true) {
        sticker5check = "Owned"
      }
      else if(!sticker5check) {
        sticker5check = "Not owned yet"
      }
        let embed = new Discord.MessageEmbed()
      .setTitle(`Sticker Collection`)
      .setFooter(`b!info stickers`)
      .setDescription(`You currently have ${stickersglobal} stickers! If you want more stickers, wait for your next weekly kit! \`\`b!weekly\`\` \n\n**Your stickers:** \n<:Bank_sticker1_Die:858423544915165185> Sticker 1 - ${sticker1check} \n<:Bank_Sticker2_Developer:853725697133641760> Sticker 2 - ${sticker2check} \n<a:Bank_Sticker3_Yes:843125792833798156> Sticker 3 - ${sticker3check}\n<a:Bank_Sticker4_Music:834923158518759455> Sticker 4 - ${sticker4check} \n<a:Bank_Sticker5_Crown:847544258180153404> Sticker 5 - ${sticker5check}`)
      .setColor("GREEN")
      .setTimestamp()
      message.lineReplyNoMention(embed)
      }
    }
    else if(args[0] === "1") {
      let sticker1check = db.get(`sticker1_${user.id}`)
      if(sticker1check === true) {
        let messagee = args.slice(1).join(' ')
        if(!messagee) {
          let embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No message`)
    .setDescription(`If possible send a message you want to use with the sticker please`)
    message.channel.send(embed)
        }
        else {
          message.delete()
          let embed = new Discord.MessageEmbed()
          .setTitle(`${messagee}`)
          .setImage("https://cdn.discordapp.com/emojis/858423544915165185.png?v=1")
          .setColor("RED")
          message.channel.send(embed)
        }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No sticker`)
    .setDescription(`You don't have this sticker :c`)
    message.channel.send(embed)
      }
    }
     else if(args[0] === "2") {
      let sticker1check = db.get(`sticker2_${user.id}`)
      if(sticker1check === true) {
        let messagee = args.slice(1).join(' ')
        if(!messagee) {
          let embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No message`)
    .setDescription(`If possible send a message you want to use with the sticker please`)
    message.channel.send(embed)
        }
        else {
          message.delete()
          let embed = new Discord.MessageEmbed()
          .setTitle(`${messagee}`)
          .setImage("https://cdn.discordapp.com/emojis/853725697133641760.png?v=1")
          .setColor("GREY")
          message.channel.send(embed)
        }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No sticker`)
    .setDescription(`You don't have this sticker :c`)
    message.channel.send(embed)
      }
    }
     else if(args[0] === "3") {
      let sticker1check = db.get(`sticker3_${user.id}`)
      if(sticker1check === true) {
        let messagee = args.slice(1).join(' ')
        if(!messagee) {
          let embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No message`)
    .setDescription(`If possible send a message you want to use with the sticker please`)
    message.channel.send(embed)
        }
        else {
          message.delete()
          let embed = new Discord.MessageEmbed()
          .setTitle(`${messagee}`)
          .setImage("https://cdn.discordapp.com/emojis/843125792833798156.gif?v=1")
          .setColor("GREEN")
          message.channel.send(embed)
        }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No sticker`)
    .setDescription(`You don't have this sticker :c`)
    message.channel.send(embed)
      }
    }
     else if(args[0] === "4") {
      let sticker1check = db.get(`sticker4_${user.id}`)
      if(sticker1check === true) {
        let messagee = args.slice(1).join(' ')
        if(!messagee) {
          let embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No message`)
    .setDescription(`If possible send a message you want to use with the sticker please`)
    message.channel.send(embed)
        }
        else {
          message.delete()
          let embed = new Discord.MessageEmbed()
          .setTitle(`${messagee}`)
          .setImage("https://cdn.discordapp.com/emojis/834923158518759455.gif?v=1")
          .setColor("PURPLE")
          message.channel.send(embed)
        }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No sticker`)
    .setDescription(`You don't have this sticker :c`)
    message.channel.send(embed)
      }
    }
    else if(args[0] === "5") {
       let sticker1check = db.get(`sticker5_${user.id}`)
      if(sticker1check === true) {
        let messagee = args.slice(1).join(' ')
        if(!messagee) {
          let embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No message`)
    .setDescription(`If possible send a message you want to use with the sticker please`)
    message.channel.send(embed)
        }
        else {
          message.delete()
          let embed = new Discord.MessageEmbed()
          .setTitle(`${messagee}`)
          .setImage("https://cdn.discordapp.com/emojis/847544258180153404.gif?v=1")
          .setColor("YELLOW")
          message.channel.send(embed)
        }
      }
      else {
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
    .setTitle(`Error >:(`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`No sticker`)
    .setDescription(`You don't have this sticker :c`)
    message.channel.send(embed)
      }
    }
  }
}