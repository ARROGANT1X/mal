module.exports.config = {
  name: "مستوى",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "همر",
  description: "المستوى مالتك",
  commandCategory: "العاب",
  cooldowns: 10,
  dependencies: {
    "fs-extra": "",
    "path": "",
    "jimp": "",
    "node-superfetch": "",
    "canvas": ""
  }
};
//random colorr
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

module.exports.makeRankCard = async (data) => {
  /*
  * 
  * Remake from Canvacord
  * 
  */

  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const Canvas = global.nodemodule["canvas"];
  const request = global.nodemodule["node-superfetch"];
  const __root = path.resolve(__dirname, "cache/rankcard");
  const PI = Math.PI;
  var TOKEN = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";

  const { id, name, rank, level, expCurrent, expNextLevel } = data;

  Canvas.registerFont(__root + "/regular-font.ttf", {
    family: "Manrope",
    weight: "regular",
    style: "normal"
  });
  Canvas.registerFont(__root + "/bold-font.ttf", {
    family: "Manrope",
    weight: "bold",
    style: "normal"
  });
  //random rankcard by Siêu Đáng Yêu(xin vui lòng giữ credit)
  const pathCustom = path.resolve(__dirname, "cache/rankcard", "customrank");
  var customDir = fs.readdirSync(pathCustom);
  let random = Math.floor(Math.random() * 24) + 1;
  var dirImage = __root + "/rankcard" + random + ".png";


  customDir = customDir.map(item => item.replace(/\.png/g, ""));

  for (singleLimit of customDir) {
    var limitRate = false;
    const split = singleLimit.split(/-/g);
    var min = parseInt(split[0]), max = parseInt((split[1]) ? split[1] : min);

    for (; min <= max; min++) {
      if (level == min) {
        limitRate = true;
        break;
      }
    }

    if (limitRate == true) {
      dirImage = pathCustom + `/${singleLimit}.png`;
      break;
    }
  }

  let rankCard = await Canvas.loadImage(dirImage);
  const pathImg = __root + `/rank_${id}.png`;

  var expWidth = (expCurrent * 615) / expNextLevel;
  if (expWidth > 615 - 18.5) expWidth = 615 - 18.5;

  let avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=${TOKEN}`);

  avatar = await this.circle(avatar.body);

  const canvas = Canvas.createCanvas(934, 282);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(rankCard, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(await Canvas.loadImage(avatar), 45, 50, 180, 180);

  ctx.font = `bold 36px Manrope`;
  ctx.fillStyle = getRandomColor();
  ctx.textAlign = "start";
  ctx.fillText(name, 270, 164);
  ctx.font = `36px Manrope`;
  ctx.fillStyle = getRandomColor();
  ctx.textAlign = "center";

  ctx.font = `bold 32px Manrope`;
  ctx.fillStyle = getRandomColor();
  ctx.textAlign = "end";
  ctx.fillText(level, 934 - 55, 82);
  ctx.fillStyle = getRandomColor();
  ctx.fillText("Lv.", 934 - 55 - ctx.measureText(level).width - 10, 82);

  ctx.font = `bold 32px Manrope`;
  ctx.fillStyle = getRandomColor();
  ctx.textAlign = "end";
  ctx.fillText(rank, 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 25, 82);
  ctx.fillStyle = getRandomColor();
  ctx.fillText("#", 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 16 - ctx.measureText(rank).width - 16, 82);

  ctx.font = `bold 26px Manrope`;
  ctx.fillStyle = getRandomColor();
  ctx.textAlign = "start";
  ctx.fillText("/ " + expNextLevel, 710 + ctx.measureText(expCurrent).width + 10, 164);
  ctx.fillStyle = getRandomColor();
  ctx.fillText(expCurrent, 710, 164);

  ctx.beginPath();
  ctx.fillStyle = getRandomColor();
  ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * PI, 0.5 * PI, true);
  ctx.fill();
  ctx.fillRect(257 + 18.5, 147.5 + 36.25, expWidth, 37.5);
  ctx.arc(257 + 18.5 + expWidth, 147.5 + 18.5 + 36.25, 18.75, 1.5 * PI, 0.5 * PI, false);
  ctx.fill();

  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return pathImg;
}

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.expToLevel = (point) => {
  if (point < 0) return 0;
  return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
}

module.exports.levelToExp = (level) => {
  if (level <= 0) return 0;
  return 3 * level * (level - 1);
}

module.exports.getInfo = async (uid, Currencies) => {
  let point = (await Currencies.getData(uid)).exp;
  const level = this.expToLevel(point);
  const expCurrent = point - this.levelToExp(level);
  const expNextLevel = this.levelToExp(level + 1) - this.levelToExp(level);
  return { level, expCurrent, expNextLevel };
}

module.exports.onLoad = async function () {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const path = resolve(__dirname, "cache/rankcard", "customrank");
  if (!existsSync(path)) mkdirSync(path, { recursive: true });
  //hàm dowload file có sẵn bao gồm font chữ hoặc pang rankcard (có thể thay)
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'regular-font.ttf'))) await downloadFile("https://manhkhac.github.io/data/font/regular-font.ttf", resolve(__dirname, 'cache/rankcard', 'regular-font.ttf'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'bold-font.ttf'))) await downloadFile("https://manhkhac.github.io/data/font/bold-font.ttf", resolve(__dirname, 'cache/rankcard', 'bold-font.ttf'));
  
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard1.png'))) await downloadFile("https://i.postimg.cc/J4fG78WJ/rankcard1.png", resolve(__dirname, 'cache/rankcard', 'rankcard1.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard2.png'))) await downloadFile("https://i.postimg.cc/ZK2y936W/rankcard2.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard2.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard3.png'))) await downloadFile("https://i.postimg.cc/Rh0ntLPH/rankcard3.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard3.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard4.png'))) await downloadFile("https://i.postimg.cc/SxYCVVmL/rankcard4.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard4.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard5.png'))) await downloadFile("https://i.postimg.cc/L50g3g70/rankcard5.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard5.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard6.png'))) await downloadFile("https://i.postimg.cc/bJgtdBRP/rankcard6.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard6.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard7.png'))) await downloadFile("https://i.postimg.cc/KcQPYR9T/rankcard7.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard7.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard8.png'))) await downloadFile("https://i.postimg.cc/4NSpzjRN/rankcard8.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard8.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard9.png'))) await downloadFile("https://i.postimg.cc/FsRjkNqB/rankcard9.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard9.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard10.png'))) await downloadFile("https://i.postimg.cc/wBVvksRc/rankcard10.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard10.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard11.png'))) await downloadFile("https://i.postimg.cc/GprtYjtm/rankcard11.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard11.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard12.png'))) await downloadFile("https://i.postimg.cc/Dw1m8N2N/rankcard12.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard12.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard13.png'))) await downloadFile("https://i.postimg.cc/tCZsHT8p/rankcard13.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard13.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard14.png'))) await downloadFile("https://i.postimg.cc/7PQ5c7sK/rankcard14.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard14.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard15.png'))) await downloadFile("https://i.postimg.cc/6qTyq53V/rankcard15.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard15.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard16.png'))) await downloadFile("https://i.postimg.cc/rsbzrX0B/rankcard16.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard16.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard17.png'))) await downloadFile("https://i.postimg.cc/3R8yMZQc/rankcard17.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard17.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard18.png'))) await downloadFile("https://i.postimg.cc/mDmPTFb2/rankcard18.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard18.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard19.png'))) await downloadFile("https://i.postimg.cc/N0w9DcJY/rankcard19.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard19.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard20.png'))) await downloadFile("https://i.postimg.cc/zGhHTBk0/rankcard20.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard20.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard21.png'))) await downloadFile("https://i.postimg.cc/hPfdPMQF/rankcard21.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard21.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard22.png'))) await downloadFile("https://i.postimg.cc/HWSMgFx4/rankcard22.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard22.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard23.png'))) await downloadFile("https://i.postimg.cc/MGyRJTMv/rankcard23.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard23.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard24.png'))) await downloadFile("https://i.postimg.cc/TP8msmPz/rankcard24.jpg", resolve(__dirname, 'cache/rankcard', 'rankcard24.png'));
  if (!existsSync(resolve(__dirname, 'cache/rankcard', 'rankcard24.png'))) await downloadFile("https://i.postimg.cc/jqvTqNYn/rankcard25.png", resolve(__dirname, 'cache/rankcard', 'rankcard25.png'));
}
module.exports.run = async ({ event, api, args, Currencies, Users }) => {
  const fs = global.nodemodule["fs-extra"];

  let dataAll = (await Currencies.getAll(["userID", "exp"]));
  const mention = Object.keys(event.mentions);

  dataAll.sort((a, b) => {
    if (a.exp > b.exp) return -1;
    if (a.exp < b.exp) return 1;
  });

  if (args.length == 0) {
    const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(event.senderID)) + 1;
    const name = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);
    if (rank == 0) return api.sendMessage("يرجى لانتضار قليلا .", event.threadID, event.messageID);
    const point = await this.getInfo(event.senderID, Currencies);
    const timeStart = Date.now();
    let pathRankCard = await this.makeRankCard({ id: event.senderID, name, rank, ...point })
    return api.sendMessage({ body: ` `, attachment: fs.createReadStream(pathRankCard, { 'highWaterMark': 128 * 1024 }) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
  }
  if (mention.length == 1) {
    const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(mention[0])) + 1;
    const name = global.data.userName.get(mention[0]) || await Users.getNameUser(mention[0]);
    if (rank == 0) return api.sendMessage("يرجى لانتضار قليلا .", event.threadID, event.messageID);
    let point = await this.getInfo(mention[0], Currencies);
    let pathRankCard = await this.makeRankCard({ id: mention[0], name, rank, ...point })
    return api.sendMessage({ attachment: fs.createReadStream(pathRankCard) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
  }
  if (mention.length > 1) {
    for (const userID of mention) {
      const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(userID)) + 1;
      const name = global.data.userName.get(userID) || await Users.getNameUser(userID);
      if (rank == 0) return api.sendMessage("يرجى لانتضار قليلا .", event.threadID, event.messageID);
      let point = await this.getInfo(userID, Currencies);
      let pathRankCard = await this.makeRankCard({ id: userID, name, rank, ...point })
      return api.sendMessage({ attachment: fs.createReadStream(pathRankCard) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
    }
  }
}
