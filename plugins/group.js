const { inrl, errorMessage, getString, quoted, infoMessage, config } = require('../lib/');
const axios = require("axios");
const fs = require('fs');

const isBotAdmins = async (message, client, match) => {
	const groupMetadata = await client.groupMetadata(message.key.remoteJid)
	const admins = await groupMetadata.participants.filter(v => v.admin !== null).map(v => v.id)
	return admins.includes(client.user.id)
};
const isAdmin = async (message, client, match) => {
	const groupMetadata = await client.groupMetadata(message.key.remoteJid)
	const admins = await groupMetadata.participants.filter(v => v.admin !== null).map(v => v.id)
	return admins.includes(message.from)
}

inrl({ pattern: ["promote"], usage: '<mentions|reply>', sucReact: "😎", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
    if(!message.client.isCreator && !Isadmin ) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        if(!message.quoted) return mesage.reply('reply to a user');
        await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "promote" );
        return await client.sendMessage(message.from, { text : '_'+message.quoted.sender.split('@')[0] +' promoted_'}, { quoted :text})
} catch (e){
message.reply(JSON.stringify(e))
     }
});
inrl({ pattern: ["demote"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
   if(!message.client.isCreator && !Isadmin) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        if(!message.quoted) return mesage.reply('reply to a user');
        await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "demote" );
        return await client.sendMessage(message.from, { text : '_'+message.quoted.sender.split('@')[0]+' demoted from admin_'}, { quoted :document})
} catch (e){
message.reply(JSON.stringify(e))
     }
});
inrl({ pattern: ["kick"], usage: '<mentions|reply>', sucReact: "😤", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
if(!match){
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
   if(!message.client.isCreator && !Isadmin) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        if(!message.quoted) return mesage.reply('reply to a user');
            await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "remove" );
            return await client.sendMessage(message.from, { text : '_'+message.quoted.sender.split('@')[0] +' kiked fromthe group_'}, { quoted :audio})
            } else if(match.toLowerCase() == 'all'){
              if(!message.client.isCreator) return message.send('only for owner!');
   if(!message.isGroup) return message.reply('this cmd only work on group');
   const groupMetadata = message.isGroup ? await client.groupMetadata(message.from).catch(e => {}) : ''
	       const participants = message.isGroup ? await groupMetadata.participants : ''
           let admins = message.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
if(!admins.includes(message.sender)) return message.reply('make me admin i can do this');
participants
				.filter((U) => !U.admin == true)
				.map(({ id }) => id)
                .forEach(async(k)=>{
             await client.groupParticipantsUpdate( message.from, [k], "remove" );
        });
       return message.reply('all group Participants will been kicked!')
           }
} catch (e){
message.reply(JSON.stringify(e))
     }
});
inrl({ pattern: ["add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], type :'group'},
async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
  match = match.replaceAll(' ','');
   if(!message.client.isCreator && !Isadmin) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        if(match){
        let users = match.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        const su = await client.groupParticipantsUpdate(message.from, [users], "add" );
        if(su == 403) {
		message.reply(`Couldn't Add Invite Send`);
		const code = await client.groupInviteCode(message.from);
		return await client.sendMessage(users, { text : `https://chat.whatsapp.com/${code}`}, { quoted : text })
	    } else if (su == 408) {
		message.reply(`Couldn't add @${users.split('@')[0]} because they left the group recently. Try again later.`);
		const code = await client.groupInviteCode(message.from);
		return await client.sendMessage(users, { text : `https://chat.whatsapp.com/${code}`}, { quoted : video })
	    } else if (su == 401) {
		 return message.reply(`Couldn't add @${users.split('@')[0]} because they blocked the bot number.`);
	    } else if (su == 200) {
		return await client.sendMessage(message.from, { text : '_'+message.quoted.sender.split('@')[0] +' added to the group_'}, { quoted : gclink })
	    } else if (su == 409) {
		return message.reply(`@${users.split('@')[0]}, Already in Group`);
	    } else {
		return await message.reply(JSON.stringify(su));
	       }
        }else if(message.quoted){
        let users = message.quoted.sender;
        const su = await client.groupParticipantsUpdate( message.from, [users], "add" );
        if(su == 403) {
		message.reply(`Couldn't Add Invite Send`);
		const code = await client.groupInviteCode(message.from);
		return await client.sendMessage(users, { text : `https://chat.whatsapp.com/${code}`}, { quoted : text })
	    } else if (su == 408) {
		message.reply(`Couldn't add @${users.split('@')[0]} because they left the group recently. Try again later.`);
		const code = await client.groupInviteCode(message.from);
		return await client.sendMessage(users, { text : `https://chat.whatsapp.com/${code}`}, { quoted : video })
	    } else if (su == 401) {
		 return message.reply(`Couldn't add @${users.split('@')[0]} because they blocked the bot number.`);
	    } else if (su == 200) {
		return await client.sendMessage(message.from, { text : '_'+message.quoted.sender.split('@')[0] +' added to the group_'}, { quoted : gclink })
	    } else if (su == 409) {
		return message.reply(`@${users.split('@')[0]}, Already in Group`);
	    } else {
		return await message.reply(JSON.stringify(su));
	        }
       }
} catch (e){
message.reply(JSON.stringify(e))
     }
});
inrl({ pattern: ["gpp"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"],type : 'group'},
	async (message, client, match) => {
try {
    const BotAdmin = await isBotAdmins(message,client);
    const Isadmin = await isAdmin(message, client);
    if(!message.client.isCreator && !Isadmin) return message.reply(`your are not owner and group admin so cant'tposble to take actuon`);
    if(!message.quoted) return messag.reply('reply to an image!');
    let _message = message.quoted.imageMessage;
	let download = await client.downloadMediaMessage(_message);
    await client.updateProfilePicture(message.from, download );
	return message.reply ('group icon updated!');
  } catch (e){
message.reply(JSON.stringify(e))
}
})
inrl({ pattern: ["fullgpp"],desc: 'set  profile picture of group with any resolution', sucReact: "🔥",  category: ["all", "create"],type : 'group'},
	async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
        if (!message.quoted) return messag.reply('reply to an image!');
		let download = await message.quoted.download();
		await message.updateProfilePicture(message.from,download );
		return message.reply ('group icon updated!');
} catch (e){
message.reply(JSON.stringify(e))
     }
});inrl({ pattern: ["gname"], usage: '<name>', sucReact: "🙃", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
    if (!message.client.isCreator && !Isadmin) return message.reply(`your are not owner and group admin so cant'tposble to take actuon`);
    if(!message.isGroup) return message.reply('only work in group chats');
    if (message.client.text > 25)  return await client.sendMessage( message.from, { text: errorMessage('Text is too long') }, { quoted: message })
        await client.sendMessage( message.from, { text: infoMessage("🙃 Changing group name.") }, { quoted: message })
        let txt = message.client.text || " ";
        await client.groupUpdateSubject(message.from, txt);
        return await client.sendMessage(message.from, { text : '_group name changed successfully!_'}, { quoted : video })
} catch (e){
message.reply(JSON.stringify(e))
     }
});
inrl({ pattern: ["gdesc"], usage: '<desc>', sucReact: "🙂", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
  if(!message.client.isCreator && !Isadmin) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        if(message.client.text > 100)  return await client.sendMessage( message.from, { text: errorMessage('Text is too long') }, { quoted: contact })
        await client.sendMessage(message.from, { text: infoMessage("🙂 Changing group description.") }, { quoted: local })
        let txt = match || " ";
        await client.groupUpdateDescription(message.from, txt);
        return await client.sendMessage(message.from, { text : '_group name changed successfully!_'}, { quoted : local })
} catch (e){
message.reply(JSON.stringify(e))
     }
});inrl({pattern: ["mute", "unmute", "lock", "unlock"], sucReact: "🤙", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
    if(!message.client.isCreator && !Isadmin) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        if (message.client.command == "unmute") {
            await client.groupSettingUpdate(message.from, "not_announcement");
            return await client.sendMessage( message.from, { text: '_Group Opened!_' }, { quoted: contact } );
        } else if (message.client.command == "mute") {
            await client.groupSettingUpdate(message.from, "announcement");
            return await client.sendMessage( message.from, { text: '_Group Closed_' }, { quoted: status } );
        } else if (message.client.command == "unlock") {
            await client.groupSettingUpdate(message.from, "unlocked");
            return await client.sendMessage( message.from, { text: '_Group Unlocked!_' }, { quoted: document } );
        } else if (message.client.command == "lock") {
            await client.groupSettingUpdate(message.from, "locked");
            return await client.sendMessage( message.from, { text: '_Group Locked!_' }, { quoted: contact } );
        }
} catch (e){
message.reply(JSON.stringify(e))
     }
});inrl({ pattern: ["left"], sucReact: "👋", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
    if(!message.client.isCreator) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        await client.groupLeave(message.from)
        return await client.sendMessage( message.from, { text: `Good Bye My Friends. I'M left From This Group` }, { quoted: audio } );
} catch (e){
message.reply(JSON.stringify(e))
     }
});
inrl({ pattern: ["link","invite"], sucReact: "💖", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
    if(!message.client.isCreator && !Isadmin) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        const code = await client.groupInviteCode(message.from);
        return await client.sendMessage( message.from, { text: `🔗 Group Link: https://chat.whatsapp.com/${code}` }, { quoted: status } );
} catch (e){
message.reply(JSON.stringify(e))
     }
});
inrl({ pattern: ["revoke"], sucReact: "👌", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
        if(!message.client.isCreator && !Isadmin) return message.send('only for owner!');
        if(!message.isGroup) return message.reply('this cmd only work on group');
        await client.groupRevokeInvite(message.from);
        return await client.sendMessage( message.from, { text: `🔗 Group link revoked.` }, { quoted: gclink } );
} catch (e){
message.reply(JSON.stringify(e))
     }
});inrl({ pattern: ["acpt"], sucReact: "🆗", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
    if(!match) return message.reply('need url!');
    if(!message.client.isCreator && !Isadmin) return message.reply('only for owner!');
        let urlArray = (match).trim().split("/");
        if (!urlArray[2] == 'chat.whatsapp.com')return await client.sendMessage( message.from, { text: 'Enter valid link'}, { quoted: local } );
        const response = await client.groupAcceptInvite(urlArray[3]);
        return await client.sendMessage( message.from, { text: `Joined: ${response}` }, { quoted: local } );
} catch (e){
message.reply(JSON.stringify(e))
     }
});
inrl({ pattern: ["getinfo"], sucReact: "🆗", category: ["group", "all"], type :'group'},
  async (message, client, match) => {
try {
  const BotAdmin = await isBotAdmins(message,client);
  const Isadmin = await isAdmin(message, client);
  const {text, document, audio, gift, gclink, video, local, contact, status }= await quoted(message);
    if(!message.client.isCreator && !Isadmin) return message.reply('only for owner!');
        let urlArray = (match).trim().split("/")[3]; 
        let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await client.groupGetInviteInfo(urlArray);
        await client.sendMessage( message.from, { text: `💗 Joined: ${id}\n ${owner} \n${subject} \n${subjectOwner} \n${subjectTime} \n${creation} \n${desc} \n${descOwner} \n${descId} \n${restrict} \n${announce} \n${size} \n${ephemeralDuration}` }, { quoted: status } );      
} catch (e){
message.reply(JSON.stringify(e))
     }
});// this actul not a grp function but me😹

inrl({ pattern: ["pp"],desc: 'set  profile picture of bot', sucReact: "😁",  category: ["all", "create"] , type :'user'},
	async (message, client, match) => {
try {
	if(!message.client.isCreator) return message.reply('cant possible to update your profile picture');
    if(!message.quoted) return messag.reply('reply to an image!');
	let _message = message.quoted.imageMessage;
	let download = await client.downloadMediaMessage(_message);
    await client.updateProfilePicture(message.client.botNumber,download ).catch((err) => fs.unlinkSync(download))
    return message.reply ('profile picture updated!');
} catch (e){
message.reply(JSON.stringify(e))
     }
});inrl({ pattern: ["fullpp"],desc: 'set  profile picture of bot with any resolution', sucReact: "🔥",  category: ["all", "create"] , type :'user'},
	    async (message, client, match) => {
try {
	    if(!message.client.isCreator) return message.reply('cant possible to update your profile picture');
        if (!message.quoted) return messag.reply('reply to an image!');
		let download = await message.quoted.download();
		await message.updateProfilePicture(message.client.botNumber,download );
		return message.reply ('profile picture updated!');
} catch (e){
message.reply(JSON.stringify(e))
     }
});
