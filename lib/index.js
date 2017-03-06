const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("../config.json");

const commands = {
    prune: require("./commands/user/prune.js")
};

bot.once("ready", () => {
    console.info(`${bot.user.username} is ready!`);
});

bot.on("message", (msg) => {
    if (!msg.content.startsWith(config.prefix)) return;
    let cmd = msg.content.substr(config.prefix.length).split(" ")[0];
    if (!commands[cmd] && !alias[cmd]) return;
    let params = msg.content.substr(config.prefix.length + cmd.length + 1).split(" ");
    try {
        commands[cmd].exe(bot, msg, params);
    } catch (e) {
        console.error(e);
    }
});

bot.login(config.token);
