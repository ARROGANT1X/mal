module.exports.config = {
  name: "لينك",
  version: "1",
  hasPermssion: 0,
  credits: "عمر",
  description: "رابط صورة",
  usePrefix: false,
  commandCategory: "خدمات",
  usages: "[رد على صور]",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = global.nodemodule['axios'];
  let links = [];

  if (event.type === "message_reply" && event.messageReply.attachments.length > 0) {
    for (const attachment of event.messageReply.attachments) {
      links.push(attachment.url);
    }
  } else if (event.attachments.length > 0) {
    for (const attachment of event.attachments) {
      links.push(attachment.url);
    }
  } else {
    return api.sendMessage('قم بالرد على الصور التي تريد روابطها', event.threadID, event.messageID);
  }

  const shortenedLinks = [];

  for (const link of links) {
    const res = await axios.get(`https://imgur-724edf1d7f4b.herokuapp.com/api/caera/imgur?link=${encodeURIComponent(link)}`);
    shortenedLinks.push(res.data.uploaded.image);
  }

  const formattedLinks = shortenedLinks.map(link => ` "${link}",`).join('\n');
  return api.sendMessage(` ${formattedLinks}`, event.threadID, event.messageID);
};
