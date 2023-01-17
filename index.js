const Discord = require("discord.js");

const bot = new Discord.Cliente();

bot.on("ready", () => {
	console.log("O bot ficou on-line!");
})

bot.login("#");