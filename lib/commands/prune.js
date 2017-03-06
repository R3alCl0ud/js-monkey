module.exports = prune = {
    name: "prune",
    usage: "prune <i>",
    desc: "Removes <i> messages from a channel.",
    exe: (bot, msg, params) => {
        let msgCount = parseInt(params[0]);
        if (!msgCount)
            return msg.reply("invalid parameters, usage: `" + prune.usage + "`.");
        msg.channel.fetchMessages({limit: msgCount})
            .then(msgs => msg.channel.bulkDelete(msgs))
            .catch(console.error);
    }
}
