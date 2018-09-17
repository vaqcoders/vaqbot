/*
  `~-,-~'`~-,-~'`~-,-~' Information `~-,-~'`~-,-~'`~-,-~'
  Docs: https://discordapp.com/developers/docs/intro
  VaqBot: https://discordapp.com/developers/applications/491092896490061836/bots
*/

const Discord = require("discord.js"),
      bot = new Discord.Client({autorun: true});

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
        msg.channel.send(`Hello, ${event.author.username}!`);
        break;
      // Just add any case commands if you want to..
    }
  }
});

// This must be this way!
bot.login(process.env.BOT_TOKEN);
