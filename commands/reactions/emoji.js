const { MESSAGES } = require("../../utils/functions/constantes/constants");


module.exports.run = async (client, message, args, settings) => {
     // 🌹
     //message.react('🌹');
     // 🟥 🟦 🟩
     await message.react('🟥');
     await message.react('🟦');
     await message.react('🟩');
};


module.exports.help = MESSAGES.COMMANDS.REACTIONS.EMOJI;