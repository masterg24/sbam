const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594089901054623754")
setInterval(function() {
channel.send(`**Shanks Shanks Shanks ShanksShanks Shanks Shanks Shanks Shanks Shanks Shanks Shanks**`);
}, 30)
})
client.on('message', message => {
    if(message.content.startsWith(';'+'say'))
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do this.");
  let botmsg = args.join(" ");
  message.channel.send(botmsg);
  message.delete(1);
})
client.login(process.env.BOT_TOKEN);
