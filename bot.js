const Discord = require('discord.js');
const client = new Discord.Client();
const myid = ['454369890070167572'];
const prefix = ['-'];
console.log("Scrpit By DesTroyeR");

client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'ارسال'){
        message.channel.send("#credits"+"<@"+ mymid +">"+"2000")
    }
});

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#credits "+"<@" + myid + ">" 11469)
    }
});

client.on("ready", () => {
let channel =     client.channels.get("600487706660700170")
setInterval(function() {
channel.send(`#credits <@454369890070167572> 11469`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
