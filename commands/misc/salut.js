const { MESSAGES } = require("../../utils/constantes/constants");

module.exports.run = (client, message, args) => {
     message.channel.send("Salut!");
};

module.exports.help = MESSAGES.COMMANDS.MISC.SALUT;
