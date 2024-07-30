const fs = require("fs-extra");
const path = require("path");
const moment = require("moment-timezone");

module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "𝐊𝐈𝐓𝐄 凧", // Mod by H.Thanh
  description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = fs;

  const leaveGifPath = path.join(__dirname, "cache", "leaveGif");
  if (!existsSync(leaveGifPath)) mkdirSync(leaveGifPath, { recursive: true });

  const randomGifPath = path.join(__dirname, "cache", "leaveGif", "randomgif");
  if (!existsSync(randomGifPath)) mkdirSync(randomGifPath, { recursive: true });

  return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

  const { createReadStream, existsSync, readdirSync } = fs;
  const { threadID } = event;
  const time = moment.tz("africa/morocco").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("africa/morocco").format("HH");
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "ّ" : "ُ";
  const leaveGifPath = path.join(__dirname, "cache", "leaveGif");
  const pathGif = path.join(leaveGifPath, `${threadID}.gif`);
  let msg, formPush;

  (typeof data.customLeave == "undefined") ? msg = "(ˉ﹃ˉ)" : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name)
           .replace(/\{type}/g, type)
           .replace(/\{session}/g, hours <= 10 ? "صباح الخير للاعضاء المتبقين" : 
    hours > 10 && hours <= 12 ? "مساء الخير للاعضاء المتبقين" :
    hours > 12 && hours <= 18 ? "ليلة سعيدة للاعضاء المتبقين" : "ليلة سعيدة للاعضاء المتبقين")
           .replace(/\{time}/g, time);  

  if (event.logMessageData.leftParticipantFbId == '100094409873389') {
    msg = 'عمر حب قلبي خرج اااع😭😭😭😭😭';
  }

  const randomPath = readdirSync(path.join(__dirname, "cache", "leaveGif", "randomgif"));

  if (existsSync(pathGif)) {
    formPush = { body: msg, attachment: createReadStream(pathGif) };
  } else if (randomPath.length != 0) {
    const pathRandom = path.join(__dirname, "cache", "leaveGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
    formPush = { body: msg, attachment: createReadStream(pathRandom) };
  } else {
    formPush = { body: msg };
  }

  return api.sendMessage(formPush, threadID);
}
