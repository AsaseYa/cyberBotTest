const { MESSAGES } = require("../../utils/functions/constantes/constants");

module.exports.run = (client, message, args) => {
     const filter = (msg) => msg.content.includes(args[0]);
     //const collector = message.channel.createMessageCollector(filter, { time: 10000 });

     message.channel.send(`Tapez ${args[0]} pour rentrer dans le jeu.`).then(() => {
          message.channel.awaitMessages( filter, { time:10000 })
               .then((collected) => { message.channel.send(`${collected.size} messages collectés.`)});
     })

     //collector.on("end", (collected) => {
     //     message.channel.send(`${collected.size -1} messages collectés.`);
     //});
};

module.exports.help = MESSAGES.COMMANDS.COLLECTORS.MSGCOLLECTOR;
