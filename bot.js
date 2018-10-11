/*
  `~-,-~'`~-,-~'`~-,-~' Information `~-,-~'`~-,-~'`~-,-~'
  Discord.js Docs: https://discord.js.org/#/docs/main/stable/general/welcome
*/

const Discord = require("discord.js");
const bot = new Discord.Client({autorun: true});

const emoji = require("emoji.json");

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", msg => {

  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (msg.content.substring(0, 1) == "!") {

    let args = msg.content.substring(1).split(" ");
    let game;

    switch (args[0]) {

      case "vaq":
        msg.channel.send("Coders!");
        break;

      case "greet":
        msg.channel.send(`Hello, ${msg.author.username}!`);
        break;

      case "compliment":
        msg.channel.send(`${msg.author.username} is the hottest person alive! :heart:`);
        break;

      case "goodnight":
        let rndFarwell = randSelect([
          "Sweet dreams",
          "Good night",
          "\*goodnight kiss\*",
          "Sleep tight",
          "Don´t let the vaq bugs bite you"
        ]);
        msg.channel.send(`${rndFarwell}, ${msg.author.username}! :sleeping:`);
        break;
        
      case "goodmorning":
        let rndSalutation = randSelect([
          "Good morning",
          "Praise the sun",
          "Don't be late to school",
          ":rooster: Cockadoodledoo",
          "I am woke"
        ]);
        msg.channel.send(`${rndSalutation}, ${msg.author.username}! :sunny:`);
        break;

      case "love":
        msg.channel.send(":heart:");
        break;

      case "bye":
        msg.channel.send("rip... :broken_heart:");
        break;

      case "wah":
        msg.channel.send("I'm sorry... :cry:");
        break;
      
      case "firstdiscord":
        msg.channel.send("It wasn't my fault :pensive:");
        break;

      case "iwannabetheverybest":
        msg.channel.send("LIKE NO ONE EVER WAS!!! :smiley:");
        break;

      case "rock":
        game = rockpaperscissors(args[0]);
        msg.channel.send(`VaqBot chose ${game.opt}. ${msg.author.username} ${game.status}.`)
        break;

      case "paper":
        game = rockpaperscissors(args[0]);
        msg.channel.send(`VaqBot chose ${game.opt}. ${msg.author.username} ${game.status}.`)
        break;

      case "scissors":
        game = rockpaperscissors(args[0]);
        msg.channel.send(`VaqBot chose ${game.opt}. ${msg.author.username} ${game.status}.`)
        break;
      
      case "owo":
        msg.channel.send("uwu");
        break;

      /* Never use this lol
      case "10printgoto10":
        msg.channel.send("!10printgoto10");
        break;
      */

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

const randSelect = arr => arr[Math.floor(Math.random() * arr.length)];

const rockpaperscissors = choice => {
  const response = randSelect([
    "rock",
    "paper",
    "scissors"
  ]);
  const dict = {
    rock: ":punch:",
    paper: ":hand_splayed:",
    scissors: ":v:"
  };
  if (choice == response) {
    return {opt: dict[response], status: "tied"};
  } else if (
    (choice == "rock" && response == "scissors") ||
    (choice == "paper" && response == "rock") ||
    (choice == "scissors" && response == "paper")
  ) {
    return {opt: dict[response], status: "won"};
  } else {
    return {opt: dict[response], status: "lost"};
  }
};

// This must be this way!
bot.login(process.env.BOT_TOKEN);
