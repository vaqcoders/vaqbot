/*
  `~-,-~'`~-,-~'`~-,-~' Information `~-,-~'`~-,-~'`~-,-~'
  Docs: https://discordapp.com/developers/docs/intro
  VaqBot: https://discordapp.com/developers/applications/491092896490061836/bots
*/

const Discord = require("discord.io"),
      logger = require("winston"),
      auth = require("./auth.json");

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {colorize: true});
logger.level = "debug";

// Initialize Discord Bot
const bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

bot.on("ready", event => {
  logger.info("Connected");
  logger.info(`Logged in as: ${bot.username} (${bot.id})`);
});

bot.on("message", (user, userID, channelID, message, event) => {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == "!") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];
    args = args.splice(1);
    switch(cmd) {
      // !ping
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
