const Discord = ('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
const prefix = ("/");

bot.on('ready', function () {
    console.log("I'm ready to send everybody in hell")
});

bot.login(token);
