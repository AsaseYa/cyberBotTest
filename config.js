require("dotenv").config();

module.exports = {
     DBCONNECTION: process.env.DBCONNECTION,
     DEFAULTSETTINGS: {
          prefix: "!",
          logChannel: "bot-logs",
          welcomeChannel: "welcomeChannel",
     },
};
