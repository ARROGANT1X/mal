    module.exports.config = {
    name: "هدية",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "يعطيك هدية بمبلغ عشوائي",
    commandCategory: "الاموال",
    usages: "",
    cooldowns: 5
    };
    var array = [];
    module.exports.run = async function ({ api,event,Users,Currencies,args }) {
    var x = global.data.allCurrenciesID;var out = (msg) => api.sendMessage(msg,event.threadID,event.messageID);
        let ix = ["10000","20000","30000","40000","50000","60000","70009","80000","90000","100000"];
            let rxx = ix[Math.floor(Math.random() * ix.length)]; 
                let rxxi = global.data.allThreadID;var xs = false;
                    var mention = Object.keys(event.mentions);
                    switch (args[0]) {
                        case 'all': {
                            if (xs == true) return out("Red envelopes");
                            for (let ex of x) {
                                await Currencies.increaseMoney(ex, parseInt(rxx));
                                    array.push(ex);
                            }
                            for (let exs of rxxi) {
                                api.sendMessage(``,exs,(error,info) => {
                                    if (error) return;
                                });
                            }
                                xs = true;
                            return api.sendMessage("تم !",event.threadID);
                        }
                            break;
                        case "user": {
                            if (xs == true) return out("مغلفات حمراء");if(array.includes(args[1])) return out("  !");array.push(args[1]);
                            if (isNaN(args[1])) return api.sendMessage("الرجاء إدخال معرف المستخدم !",event.threadID,event.messageID);
                                await Currencies.increaseMoney(parseInt(args[1]), parseInt(rxx));
                                    out("تم الاسترداد بنجاح !");
                                        return api.sendMessage(" ، الف مبروك صرت غني(ة)=) ، اللهم لا حسد فلوسك هيا : " +  rxx,parseInt(args[1]));
                        }
                            break;
                        case "thread": {
                            if (isNaN(args[1])) return api.sendMessage("الرجاء إدخال معرف المجموعة !",event.threadID,event.messageID);
                                var xl = await api.getThreadInfo(args[1]);
                                    var sll = xl.participantIDs;var outlix = [];
                                        for (let cham of sll) {
                                                if(array.includes(cham)) return outlix.push(cham);
                                            await Currencies.increaseMoney(cham, parseInt(rxx)); 
                                        }
                                    out("نجاح! ، عدد الأشخاص الذين لم يحالفهم الحظ للمرة الثانية هو : " + outlix.join(", "));
                                return api.sendMessage(" =))",parseInt(args[1]));
                        }   
                            break;  
                        case  `${mention[0]}`: {    
                            if (isNaN(mention[0])) return out("حدث خطاء =))");array.push(mention[0]);
                            if(array.includes(mention[0])) return out("انت حصلت فلوس بعد ماكو عزلمه !");
                                else await Currencies.increaseMoney(mention[0], parseInt(rxx)); 
                                    return out ("UwU " + event.mentions[mention].replace("@", "") + "حصلت ع فلوس الهدية  🐧, الملبغ هوة :  " + rxx);
                        }
                    break;
                default: {
                        if(array.includes(event.senderID)) return out("انت محصل عـا الفلوس قمنقلع   !");array.push(event.senderID);
                    await Currencies.increaseMoney(event.senderID, parseInt(rxx)); 
                return out(" ‌: " + rxx);
            }
        }
    };
