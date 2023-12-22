const {Client, IntentsBitField} = require("discord.js");
const token = require("./Token.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

client.login(token);

client.on("ready", function(c) {
    console.log(`👍🏼 ${c.user.username} is active`);
})

client.on("messageCreate", function(msg) {
    console.log(`📶 ${msg.content}📶 sent`);
    if(msg.content == "you are gay") {
        msg.reply("No u");
    };
});

client.on("messageDelete", function(msg) {
    console.log(`❌ ${msg.content}❌ deleted`);
});