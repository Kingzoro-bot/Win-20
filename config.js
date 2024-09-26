//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "263717426751";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5KNENDaWhneGY3WU9PNUNtSkxXOUtBVlNFQ3IzeFlUQjR6WXFMTFZWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3hXZjhjVG83dTB5UHc0eVlUVWVhVyt4cjcycjJHL3FrSVhIYlFSNmpERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRHl0KzFsRDkrelIrTzVMTTBYMHU1V3RMcWlTZzBqd2JsYmZXYTRQZld3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJscTZrRFNod3BqUE9xbjdJWWtXR1g3S3RBVXJUR1l6LzhEcUthdVR4RlhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFRTVNdVpEaVhITWMvTHd2TGZlNzJ5b1VMUHBzZjB0d1lSc3lyVjcrbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhoWDZBeEtvRE02b2FpcDNoL1Y2QUd3Y1RERlVKeWdCZzhqemZTcWVWeHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FrQk9zWG90MTJVMDVEVS9PT2pIOEFCdURjWEg0bEJLYSttOEMvcS9XZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVc5RnpkNmZCOHBJZ293ajVQd1lyMExkZHBadHZYRTdrRW1majBhQmhTRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLSURVOHkvOUV0TVhyYkZXRFI1ODNSakxaU25tK1R1ZDdJTUV4UTNpUEhoMGtOSURURUJyS2xNcHRlZnFYckN5YVNPeHRycENyMFZ0NTBDUlF4OUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJuR0VTT3lVbGo4SnJPTForamNpaitZK2dKK05tYkc3RW1ZTkpLd3VGSmIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNzQyNjc1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5OUZEMURBN0YwQUZEMzBFREFDOEZGODJDMTQ2MTYwRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MzgyODgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTc0MjY3NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0IzNDQ0QUYwREUyMzdENzgyNTcxMzQ0MjQzRjgxMzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzM4Mjg4MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiekR0NFM5Y1JTRENFN1BIYlcybmFsQSIsInBob25lSWQiOiIyOTRlOThmNi0zZjVmLTQ0NmUtOTlhNC1kMGY3NjUyYTgxM2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NLTVVWbUNLem1LME9jQ1BBSHY0VDlMQ3BrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJJc0JOaDBjNm5PZCt2OHZ6UE1MTVQ5TjhtYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3NlJHTDI4NiIsIm1lIjp7ImlkIjoiMjYzNzE3NDI2NzUxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQmhlcm9uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMei9uZElHRU5HSzE3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvRmRzZjZxRHIraXFSYy9UNmM2MTZpN0lVUncxR1hEaTBMdjFIaE1rU244PSIsImFjY291bnRTaWduYXR1cmUiOiJlWlBKRUJRUWRlZFNWSm9RVVhMaC9Ka2xwQk5JODRQTG9sKzhkbmVQTjJKT2JTZDhSQkdndmZJRG1SWTRaa0NCSzBVNlhQRk0weUhSQmNFbk12VW9EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYzJmU2t2RkI4UVZGYkNaMngvR2RVTzRPY0NpV0VRaVVWS2ZjYWxrMHBhUytCZUFlcWRSM3FxYk42bFd4TkQxcWhQWHV6MlJUcnpoempSa1ZBaU1XQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTc0MjY3NTE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmeFhiSCtxZzYvb3FrWFAwK25PdGVvdXlGRWNOUmx3NHRDNzlSNFRKRXAvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MzgyODc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1XcSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
