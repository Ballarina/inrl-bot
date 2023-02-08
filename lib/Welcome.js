let doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let doc4 = 'application/zip'
let doc5 = 'application/pdf'
let doc6 = 'application/vnd.android.package-archive';

const fs = require("fs");
const { getBuffer } = require('./cloud');
const {WELCOME_SET,EXIT_MSG,FOOTER,BOT_INFO,INSTAGRAM} = require('../config');

module.exports = async (conn, m) => {
	try {
	    let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await conn.groupMetadata(m.id)
		let gParticipants = m.participants
		for (let num of gParticipants){
			try {
                  ppuser = await conn.profilePictureUrl(num, 'image')
            } 
			catch {
                       ppuser = 'https://i.ibb.co/gdp7HrS/8390ad4fefbd.jpg'
            }
                    	if (m.action == 'add') {
                        if(WELCOME_SET!== "true") return;
                        let Wlcm = await getBuffer(ppuser);
                        let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
                        let docs = documents[Math.floor(documents.length * Math.random())]
                        let mension = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "120363048656140352@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: Wlcm, surface: 200, message: `${subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
let capctiOn = `╭──『  welcome 』──◆
┃
┃⤳⤳〔 ℎ𝑒𝑦 𝑏𝑟𝑜 〕⬿⬿
┃
┃─「${num.split("@")[0]} 」
┃
┃➸  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
┃➦  ${subject}
┃➔  𝗠𝗲𝗺𝗯𝗲𝗿 : 
┃➳ ${(participants.length + 0).toString()}th
┃ ʀᴇᴀᴅ ᴛʜᴇ ᴅɪꜱᴄʀɪᴩᴛɪᴏɴ
╰━━━━━━━━━━━──⊷
  ${desc}`                                     
let buttons = [
{buttonId: `.inrl`, buttonText: {displayText: 'Thankyou'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/test.xlsx'),
mimetype: docs,
jpegThumbnail:Wlcm,
mentions: [num],
fileName: `${subject}`,
fileLength: 99999999999999,
caption: capctiOn,
footer: `${FOOTER}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${BOT_INFO.split(',')[0]}`,
body: `Don't forget to read group description`,
mediaType:2,
thumbnail: Wlcm,
sourceUrl: `${INSTAGRAM}`,
mediaUrl: `${INSTAGRAM}`
}}}
				return await conn.sendMessage(m.id, buttonMessage,{quoted:mension});
} else if (m.action == 'remove') {
           if(EXIT_MSG!== "true" ) return;
           let ExtImg = await getBuffer(ppuser);
           let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
           let docs = documents[Math.floor(documents.length * Math.random())]
           let mension = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "120363048656140352@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: ExtImg, surface: 200, message: `${subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

let capctiOn = `╭──『 Good bye 』──◆
┃
┃─「${num.split("@")[0]} 」
┃
┃➸  𝗟𝗲𝗳𝘁 From
┃➦  ${subject}
┃➔  𝗠𝗲𝗺𝗯𝗲𝗿 : 
┃➳ ${(participants.length + 0).toString()}th
┃ 
╰━━━━━━━━━━━──⊷`
let buttons = [
{buttonId: `.🥲`, buttonText: {displayText: '𝗚𝗼𝗼𝗱𝗯𝘆𝗲'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/test.xlsx'),
mimetype: docs,
jpegThumbnail:ExtImg,
mentions: [num],
fileName: `${subject}`,
fileLength: 99999999999999,
caption: capctiOn,
footer: `${FOOTER}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${BOT_INFO.split(',')[0]}`,
body: `Don't forget to read group description`,
mediaType:2,
thumbnail: ExtImg,
sourceUrl: `${INSTAGRAM}`,
mediaUrl: `${INSTAGRAM}`
}}}
  return await conn.sendMessage(m.id, buttonMessage, {quoted:mension})
     }
  }
} catch (err) {
	console.log(err)
     }
}
