const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "o";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Only Games`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});








client.on("ready", () => {
  function blue() {
    client.guilds.get('514565152440451100').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(blue, 3000);
});















































client.login(process.env.BOT_TOKEN);
