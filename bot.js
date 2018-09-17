/*
  `~-,-~'`~-,-~'`~-,-~' Information `~-,-~'`~-,-~'`~-,-~'
  Docs: https://discordapp.com/developers/docs/intro
  VaqBot: https://discordapp.com/developers/applications/491092896490061836/bots
*/

const Discord = require("discord.js"),
      bot = new Discord.Client();

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", (user, userID, channelID, message, event) => {
  bot.sendMessage({
    to: channelID,
    message: "Hi!"
  });
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message[0] == "!") {
    let args = message.substring(1).split(" ");
    switch(args[0]) {
      case "vaq":
        bot.sendMessage({
          to: channelID,
          message: "Coders!"
        });
        break;
      case "greet":
        bot.sendMessage({
          to: channelID,
          message: `Hello, ${user}!`
        });
        break;
      // Just add any case commands if you want to..
    }
  }
});

// This must be this way!
bot.login(process.env.BOT_TOKEN);
