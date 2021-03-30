const { MESSAGES } = require("../../utils/functions/constantes/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
     const starRole = message.guild.roles.cache.get("821321122406334505");
     const moonRole = message.guild.roles.cache.get("821321129280536637");
     const starEmoji = "⭐";
     const moonEmoji = "🌙";

     const embed = new MessageEmbed()
     .setTitle("Rôles")
     .setDescription("Tu veux un rôles? Clique dessous!")
     .addField(
          "Les rôles disponible: ",
          `
          ${starEmoji} - ${starRole.toString()}
          ${moonEmoji} - ${moonRole.toString()}
          `
     );

     client.channels.cache.get(settings.welcomeChannel).send(embed).then(async msg => {
          await msg.react("⭐");
          await msg.react("🌙");
     });
};

module.exports.help = MESSAGES.COMMANDS.REACTIONS.ALLROLES;
