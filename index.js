const { Player } = require('discord-player');
const { Client, IntentsBitField, Collection } = require('discord.js');
const bot = new Client({ intents: new IntentsBitField(3276799) });

bot.commands = new Collection();
bot.config = require('./config');

bot.player = new Player(bot, bot.config.opt.discordPlayer);

require('./src/Structure/Music/Events')(bot);
require('./src/Structure/Handler/Command')(bot);
require('./src/Structure/Handler/Event')(bot);

bot.login(bot.config.clients.token);


// Anti Crash
process.on('uncaughtException', (error, origin) => {
  console.log('----- Uncaught exception -----');
  console.log(error);
  console.log('----- Exception origin -----');
  console.log(origin);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('----- Unhandled Rejection at -----');
  console.log(promise);
  console.log('----- Reason -----');
  console.log(reason);
});

process.on('warning', (name, message, stack) => {
  console.log('----- Warning -----');
  console.log(name);
  console.log('----- Message -----');
  console.log(message);
  console.log('----- Stack -----');
  console.log(stack);
});