/*
  `~-,-~'`~-,-~'`~-,-~' Information `~-,-~'`~-,-~'`~-,-~'
  Discord.js Docs: https://discord.js.org/#/docs/main/stable/general/welcome
*/

const Discord = require("discord.js"),
      bot = new Discord.Client({autorun: true});

const emoji = require("emoji.json");


bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", msg => {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (msg.content.substring(0, 1) == "!") {
    let args = msg.content.substring(1).split(" ");
    switch(args[0]) {
      case "vaq":
        msg.channel.send("Coders!");
        break;
      case "greet":
        msg.channel.send(`Hello, ${msg.author.username}!`);
        break;
      case "love":
        msg.channel.send(":heart:");
        break;
      case "bye":
        msg.channel.send("rip... :broken_heart:");
        break;
      case "wah":
        msg.channel.send("I'm sorry... :sad:");
        break;
      case "food":
        let gimmePossibleFoods = getEmoji("food");
        let gimmeFood = gimmePossibleFoods[Math.floor(Math.random() * gimmePossibleFoods.length)];
        msg.channel.send(`Here's some ${gimmeFood.name}, ${msg.author.username}. ${emoji[366].char} ${gimmeFood.char}`);
        break;
      // Just add any case commands if you want to..
    }
  }
});

// Helper Functions
const getEmoji = keyword => emoji.filter(item => item.keywords.includes(keyword));

// This must be this way!
bot.login(process.env.BOT_TOKEN);
