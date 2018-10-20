/*
  `~-,-~'`~-,-~'`~-,-~' Information `~-,-~'`~-,-~'`~-,-~'
  Discord.js Docs: https://discord.js.org/#/docs/main/stable/general/welcome
*/

const Discord = require("discord.js");
const bot = new Discord.Client({autorun: true});

const emoji = require("emoji.json");
const math = require("mathjs");

// Functional Globals
let meme_phase = 0;
let meme_user = "";
let meme_top_text = "";

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", msg => {

  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (msg.content.substring(0, 1) == "!") {

    let args = msg.content.substring(1).split(" ");
    let game, expression, answer;

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

      case "food":
        let gimmePossibleFoods = getEmoji("food");
        let gimmeFood = gimmePossibleFoods[Math.floor(Math.random() * gimmePossibleFoods.length)];
        msg.channel.send(`Here's some ${gimmeFood.name}, ${msg.author.username}. ${emoji[366].char} ${gimmeFood.char}`);
        break;

      case "meme":
        meme_phase = 1;
        meme_user = msg.author.username;
        break;

      case "solve":
        expression = args.slice(1).join("");
        answer = math.compile(expression).eval();
        msg.channel.send(answer);
        break;

      case "derive":
        expression = args.slice(1).join("");
        answer = math.derivative(expression, "x");
        msg.channel.send(`Derivative of \`${expression}\` is\n\`${answer.toString()}\` or\n\`${answer.toTex()}\` in Desmos.`);
        break;

      // Just add any case commands if you want to..

      /* Never use this lol
      case "10printgoto10":
        msg.channel.send("!10printgoto10");
        break;
      */

    }
  }

  // Extra Conditionals
  if (meme_phase == 1 && meme_user == msg.author.username) {
    msg.channel.send(`@${msg.author.username}, what's the top text?`);
    meme_phase = 2;
  } else if (meme_phase == 2 && meme_user == msg.author.username) {
    meme_phase = 3, meme_top_text = msg.content;
    msg.channel.send(`@${msg.author.username}, what's the bottom text?`);
  } else if (meme_phase == 3 && meme_user == msg.author.username) {
    meme_phase = 0, meme_user = "";
    const gimmeMeme = `@${msg.author.username}, your meme:\n\n**${meme_top_text.toUpperCase()}**\n${emoji[2].char}\n**${msg.content.toUpperCase()}**`;
    msg.channel.send(gimmeMeme);
  }

});

// Helper Functions
const getEmoji = keyword => emoji.filter(item => item.keywords.includes(keyword));

const randSelect = arr => arr[Math.floor(Math.random() * arr.length)];

const rockpaperscissors = choice => {
  const response = randSelect([
    ["rock", ":punch:"],
    ["paper", ":hand_splayed:"],
    ["scissors", ":v:"]
  ]);
  if (choice == response[0]) {
    return {opt: response[1], status: "tied"};
  } else if (
    (choice == "rock" && response[0] == "scissors") ||
    (choice == "paper" && response[0] == "rock") ||
    (choice == "scissors" && response[0] == "paper")
  ) {
    return {opt: response[1], status: "won"};
  } else {
    return {opt: response[1], status: "lost"};
  }
};

const getPointsOfExpression = expr => {
  /*
  // provide a scope
const node2 = math.parse('x^a')
const code2 = node2.compile()
let scope = {
    x: 3,
    a: 2
}
code2.eval(scope)  // 9

// change a value in the scope and re-evaluate the node
scope.a = 3
code2.eval(scope)  // 27
*/
};

// This must be this way!
bot.login(process.env.BOT_TOKEN);
