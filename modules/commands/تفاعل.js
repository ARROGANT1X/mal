const fs = require("fs");
module.exports.config = {
	name: "autoreactv2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "",
	commandCategory: "خدمات",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase()
	if (event.body.indexOf("🐺")==0 || event.body.indexOf("😁")==0 || event.body.indexOf("😄")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("😉")==0 || event.body.indexOf("😊")==0 || event.body.indexOf("😋")==0 || event.body.indexOf("😎")==0 || event.body.indexOf("😍")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("🥰")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("😚")==0 || event.body.indexOf("😙")==0 || event.body.indexOf("🥲")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("🤗")==0 || event.body.indexOf("🤩")==0 || event.body.indexOf("🫢")==0 || event.body.indexOf("🫠")==0 || event.body.indexOf("🫡")==0 || event.body.indexOf("😏")==0 || event.body.indexOf("😌")==0 || event.body.indexOf("😛")==0 || event.body.indexOf("😜")==0 || event.body.indexOf("😝")==0 || event.body.indexOf("🤤")==0 || event.body.indexOf("😇")==0 || event.body.indexOf("🤠")==0 || event.body.indexOf("☺️")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("🥴")==0 || event.body.indexOf("🥳")==0 || event.body.indexOf("🤭")==0 || event.body.indexOf("🤓")==0 || event.body.indexOf("😈")==0 || event.body.indexOf("😽")==0 || event.body.indexOf("😻")==0 || event.body.indexOf("❤")==0 ||event.body.indexOf("💜")==0 || event.body.indexOf("❣️")==0 || event.body.indexOf("🧡")==0 || event.body.indexOf("🤍")==0 || event.body.indexOf("🤎")==0 || event.body.indexOf("💛")==0 || event.body.indexOf("💋")==0 || event.body.indexOf("👀")==0 || event.body.indexOf("🥷")==0 || event.body.indexOf("💞")==0 || event.body.indexOf("🖤")==0 || event.body.indexOf("💝")==0 || event.body.indexOf("🇩🇿")==0 || event.body.indexOf("🇵🇸")==0 || event.body.indexOf("🥇")==0 || event.body.indexOf("🏅")==0 || event.body.indexOf("💯")==0 || event.body.indexOf("بووت")==0 || event.body.indexOf("بوت")==0 || event.body.indexOf("bot")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("👑")==0|| event.body.indexOf("🍷")==0 || event.body.indexOf("عمر")==0 || event.body.indexOf("شامخ")==0 || event.body.indexOf("عمو عمر")==0 || event.body.indexOf("عمور")==0 || event.body.indexOf("عمو")==0 || event.body.indexOf("😈")==0 || event.body.indexOf("💀")==0 || event.body.indexOf("☠️")==0 || event.body.indexOf("👻")==0 || event.body.indexOf("💣")==0 || event.body.indexOf("💎")==0 || event.body.indexOf("يوتا")==0 || event.body.indexOf("ملاك")==0 || event.body.indexOf("ملاكي")==0 || event.body.indexOf("الملاك")==0 || event.body.indexOf("شامخن")==0 || event.body.indexOf("بوت يوتا")==0 || event.body.indexOf("رائع")==0 || event.body.indexOf("جميل")==0 || event.body.indexOf("مدهش")==0 || event.body.indexOf("جامد")==0 || event.body.indexOf("كفو")==0 || event.body.indexOf("اسطورة")==0 || event.body.indexOf("وحش")==0 || event.body.indexOf("فنان")==0 || event.body.indexOf("🎻")==0 || event.body.indexOf("🏆")==0 || event.body.indexOf("☣️")==0 || event.body.indexOf("⚠️")==0 || event.body.indexOf("🔱")==0 || event.body.indexOf("🕌")==0 || event.body.indexOf("🕋")==0 || event.body.indexOf("🗿")==0 || event.body.indexOf("🪐")==0 || event.body.indexOf("/")==0 || event.body.indexOf("!")==0 || event.body.indexOf("#")==0 ||event.body.indexOf("$")==0 || event.body.indexOf("@")==0 || event.body.indexOf("√")==0 || event.body.indexOf("|")==0 || event.body.indexOf("✓")==0 || event.body.indexOf("§")==0 || event.body.indexOf("£")==0 || event.body.indexOf("@ﻋۦۘۘۦۘﻤﹷ۬ﹷﹷ۬ﹷر ﻋﹷ۬ﹷﹷ۬ﹷﻤۦۘۘۦۘﻚ")==0 || event.body.indexOf("عمري")==0 || event.body.indexOf("حمد")==0 || event.body.indexOf("الفخم")==0 || event.body.indexOf("المتكبر")==0 || event.body.indexOf("✨")==0 || event.body.indexOf("🎁")==0 || event.body.indexOf("🎀")==0 || event.body.indexOf("🌟")==0 || event.body.indexOf("⭐")==0 || event.body.indexOf("🥃")==0 || event.body.indexOf("🍸")==0 || event.body.indexOf("🍺")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💯", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("😣")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("😫")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("😔")==0 || event.body.indexOf("😢")==0 || event.body.indexOf("😭")==0 || event.body.indexOf("😞")==0 || event.body.indexOf("😟")==0 || event.body.indexOf("😖")==0 || event.body.indexOf("🙁")==0 || event.body.indexOf("😧")==0 || event.body.indexOf("😩")==0 || event.body.indexOf("😰")==0 || event.body.indexOf("😵")==0 || event.body.indexOf("🤒")==0 || event.body.indexOf("😷")==0 || event.body.indexOf("🤧")==0 || event.body.indexOf("☹️")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("😿")==0 || event.body.indexOf("💔")==0 || event.body.indexOf("🤏")==0 || event.body.indexOf("👎")==0 || event.body.indexOf("🙍‍♂️")==0 || event.body.indexOf("🤷‍♂️")==0 || event.body.indexOf("🤦‍♂️")==0 || event.body.indexOf("🩹")==0 || event.body.indexOf("🩺")==0 || event.body.indexOf("sad")==0 || event.body.indexOf("حزين")==0 || event.body.indexOf("محزن")==0 || event.body.indexOf("احزنني")==0 || event.body.indexOf("احزنتني")==0 || event.body.indexOf("ابكي")==0 || event.body.indexOf("بكاء")==0 || event.body.indexOf("بكيت")==0 || event.body.indexOf("محرق")==0 || event.body.indexOf("مألم")==0 ||event.body.indexOf("الم")==0 || event.body.indexOf("وحيد")==0 || event.body.indexOf("انتحار")==0 || event.body.indexOf("موت")==0 || event.body.indexOf("فراق")==0 || event.body.indexOf("خيانة")==0 || event.body.indexOf("غدر")==0 || event.body.indexOf("معانات")==0 || event.body.indexOf("اشتقت")==0 || event.body.indexOf("الله يرحمه")==0 || event.body.indexOf("الله يسامحك")==0 || event.body.indexOf("سامحني")==0 || event.body.indexOf("اسف")==0 || event.body.indexOf("اعتذر")==0 || event.body.indexOf("مابدي")==0 || event.body.indexOf("اتركني")==0 || event.body.indexOf("انقلع")==0 || event.body.indexOf("شوبدك")==0 || event.body.indexOf("ماتت")==0 || event.body.indexOf("متت")==0 || event.body.indexOf("دموع")==0 || event.body.indexOf("دمعى")==0 || event.body.indexOf("دموعي")==0 || event.body.indexOf("غدار")==0 || event.body.indexOf("خذلتني")==0 || event.body.indexOf("وثقت بك")==0 || event.body.indexOf("لم تفي")==0 || event.body.indexOf("وعدك")==0 && !bot.includes(sad))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("حب")==0 || event.body.indexOf("ابوك")==0 || event.body.indexOf("ختك")==0 || event.body.indexOf("اختك")==0 || event.body.indexOf("امك")==0 || event.body.indexOf("كس")==0 || event.body.indexOf("booot")==0 || event.body.indexOf("بوووت")==0 || event.body.indexOf("نووو")==0 || event.body.indexOf("وعع")==0 || event.body.indexOf("مو")==0 || event.body.indexOf("ها")==0 || event.body.indexOf("ايش")==0 || event.body.indexOf("اي")==0 || event.body.indexOf("احا")==0 || event.body.indexOf("👀")==0 || event.body.indexOf("👌🏿")==0 || event.body.indexOf("👌")==0 || event.body.indexOf("💝")==0 || event.body.indexOf("❤")==0 || event.body.indexOf("😾")==0 || event.body.indexOf("😽")==0 || event.body.indexOf("😸")==0 || event.body.indexOf("😹")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("🫣")==0 || event.body.indexOf("🤑")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("🤯")==0 || event.body.indexOf("🤭")==0 || event.body.indexOf("😈")==0 || event.body.indexOf("👿")==0 || event.body.indexOf("😵‍💫")==0 || event.body.indexOf("🥸")==0 || event.body.indexOf("🥴")==0 || event.body.indexOf("🤡")==0 || event.body.indexOf("🥵")==0 || event.body.indexOf("🤬")==0 || event.body.indexOf("😡")==0 ||event.body.indexOf("😵")==0 || event.body.indexOf("😖")==0 || event.body.indexOf("😑")==0 || event.body.indexOf("🤨")==0 || event.body.indexOf("🫠")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("😆")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😂")==0 || event.body.indexOf("bts")==0 || event.body.indexOf("BTS")==0 || event.body.indexOf("Bts")==0 || event.body.indexOf("بابو")==0 || event.body.indexOf("بوبو")==0 || event.body.indexOf("اضحكتني")==0 || event.body.indexOf("اضحكني ")==0 || event.body.indexOf("ضحك")==0 || event.body.indexOf("مضحك")==0 || event.body.indexOf("tahar")==0 || event.body.indexOf("طاهر")==0 || event.body.indexOf("دابي")==0 || event.body.indexOf("موحا")==0 || event.body.indexOf("عميقة")==0 || event.body.indexOf("ايرين")==0 || event.body.indexOf("جعفر")==0 || event.body.indexOf("مارشال")==0 || event.body.indexOf("مهرج")==0 || event.body.indexOf("جوكر")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

				}
