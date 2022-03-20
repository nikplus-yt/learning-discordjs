const Discord = require("discord.js")
require('dotenv').config()
const prefix = "!!"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.on("messageCreate", (message) => {
    if (message.content == `${prefix}hi`){
        message.reply("Hello World!")
    }
})


client.login(process.env.TOKEN)