const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("599325169391239210")
setInterval(function() {
channel.send(` Shanks Shanks Shanks Shanks`);
}, 30)
})

client.login(process.env.BOT_TOKEN);