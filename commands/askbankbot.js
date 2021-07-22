const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "askbankbot",
  description: "ask bank bot something",
  execute(message, args) {
    let question = args.slice(0).join(' ')
    if(!question) {
      message.lineReplyNoMention("Ask me something")
    }
    else {
      let reply = [
        "NEVER PLEASE NO NO NO",
        "Sure i guess",
        "YES 100%",
        "Yes please",
        "Yes sir",
        "no",
        "Never in 1 million years",
        "**p o t a t o**",
        "Stfu >:c",
        "Ok",
        "Idk",
        "I am not that stupid, so i will say no",
        "No, you",
        "Yes",
        "Have you ever heard of real life?",
        "that is awkward",
        "Lmao",
        "I can't answer that :eyes:",
        "Maybe",
        "perhaps",
        "Youtube kids, certainly",
        "Why tho? are you the fbi?",
        "I don't care",
        "Do you have are stupid?",
        "ok calm down, i think the answer is obvious here...",
        "Bruh",
        "I like flowers",
        "Are you that dumb?",
        "I think We’re dead meat... Real Dead meat.",
        "If that was true, it was not false",
        "Correct",
        "Not correct ;c",
        "You should quit after that tbh, jesus christ",
        "sus <:Amogus:841457470441259008>",
        "Nah",
        "You think that is funny? spoiler: **maybe**",
        "Watch out your back <:You_are_being_watched:843997615217049660>",
        "I feel uncomfortable",
        "Please help lol",
        "POG",
        "yes, here 1 million coins.... SIKE, no coins for you :sunglasses:",
        "That is my secret secret, how did you know?",
        "Bri'ish is the answer",
        "My final answer is: **eggplant**",
        "daddy discord :angry: :pleading_face:",
        "2",
        "1",
        "one of them",
        "yeah yeah cool",
        "mee6's source code",
        ":3",
        "i am not a furry, stop",
        "Ok, just... i am... i- don't have a answer for that",
        "I'm feeling sus about that question <:Amogus:841457470441259008>",
        "<@!801210597034426410> Angry Moment! LOL:angry:"
      ]
      let random = Math.floor(Math.random() * reply.length)
      let embedanswer = new Discord.MessageEmbed()
      .setTitle(`${question}`)
      .setDescription(`${reply[random]}`)
      .setFooter(`what a weird question`)
      .setTimestamp()
      .setColor("GREEN")
      message.lineReplyNoMention(embedanswer)
    }
  }
}