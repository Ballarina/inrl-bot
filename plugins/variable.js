const { inrl } = require('../lib');
const {getVar,UpdateVariable} = require('../lib/database/variable')
let a = ["true", "false"], type = ["privet","public"],response  = ["unavailable","available","composing","recording","paused"], sb = ["SUDO","BLOCK_CHAT"];
//const {exec} = require('chile

function isTrue(a, obj) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
};

let arrayy = ["PASSWORD","REACT","WARNCOUND","ALIVE_DATA","U_STATUS","READ_CHAT","BOT_INFO","BGMBOT","WORKTYPE","PM_BLOCK","PREFIX","WELCOME_SET","EXIT_MSG","CALL_BLOCK","STATUS_VIEW","MENSION_TEXT","LANG","OWNER","PROFILE_STATUS","BLOCK_CHAT","AUTO_CHAT_PM","AUTO_CHAT_GRP","BOT_PRESENCE","AUDIO_DATA","STICKER_DATA","INSTAGRAM","GIT","CAPTION","SUDO", "FOOTER"];

function UpdateV(obj) {
 let bcU =obj.split(':')[0].toUpperCase();
  obj = obj.replace(obj.split(':')[0],"")
    for (let i = 0; i < arrayy.length; i++) {
        if(bcU.includes(arrayy[i])) {
            return obj.replace(':','').trim();
        }
    }
    return false;
};

inrl(
	{
       pattern: ['setvar'],
       desc: 'to change variables of bot',
       sucReact: "✨",
       category: ["all,system"],
       type : "database"
    },
	  async (message, client,match) => {
	  if(!message.client.isCreator) return message.reply('only for owner!!');
      message.reply('use restart cmd after updating variable!');
      if(!match) return message.reply('need id & value,example: setvar react:true');
      let keyID = match.split(':')[0].toUpperCase().trim() || match.toUpperCase().trim();
      let Update;
      if(isTrue(sb, keyID)){
      Update = message.quoted?message.quoted.sender.split('@')[0].trim() : UpdateV(match.trim());
      } else Update = UpdateV(match.trim());
      console.log(Update)
      if(Update ===undefined) return message.reply('need id & value,example: setvar react:true');
      let {SUDO,BLOCK_CHAT} = await getVar();
  if(keyID == "PASSWORD"){
  await UpdateVariable("PASSWORD",Update);
return await message.reply('successfull');
} else if(keyID == "REACT"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("REACT",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "WARNCOUND"){
  if(isNaN(Update)) return message.reply('enter a valid value for variable! need Number!');
  await UpdateVariable("WARNCOUND",Update);
  return await message.reply('successfull');
} else if(keyID == "ALIVE_DATA"){
  await UpdateVariable("ALIVE_DATA",Update);
  return await message.reply('successfull');
} else if(keyID == "FOOTER"){
    console.log(Update)
  await UpdateVariable("FOOTER",Update);
  return await message.reply('successfull');
} else if(keyID == "U_STATUS"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false');
  await UpdateVariable("U_STATUS",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "READ_CHAT"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("READ_CHAT",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "BOT_INFO"){
  if(!Update.includes(',')) return message.reply('enter a valid format! example :- inrl, inrl, https:example.png');
  let test = Update.split(',');
  if(test.length < 3) return message.reply('enter a valid format! example :- inrl, inrl, https:example.png');
  await UpdateVariable("BOT_INFO",Update);
  return await message.reply('successfull');
} else if(keyID == "BGMBOT"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("BGMBOT",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "WORKTYPE"){
  if(!isTrue(type, Update.toLowerCase())) return message.reply('need a valid variable for Update! public or privet')
  await UpdateVariable("WORKTYPE",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "PM_BLOCK"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("PM_BLOCK",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "PREFIX"){
  await UpdateVariable("PREFIX",Update);
  return await message.reply('successfull');
} else if(keyID == "WELCOME_SET"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("WELCOME_SET",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "EXIT_MSG"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("EXIT_MSG",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "CALL_BLOCK"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("CALL_BLOCK",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "STATUS_VIEW"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("STATUS_VIEW",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "MENSION_TEXT"){
  if(!Update.includes(',')) return message.reply('enter a valid format! example :- inrl, inrl, https:example.png');
  let test = Update.split(',');
  if(test.length < 3) return message.reply('enter a valid format! example :- inrl, inrl, https:example.png');
  await UpdateVariable("MENSION_TEXT",Update);
  return await message.reply('successfull');
} else if(keyID == "LANG"){
  await UpdateVariable("LANG",Update);
  return await message.reply('successfull');
} else if(keyID == "OWNER"){
  if(isNaN(Update)) return message.reply('enter a valid value for variable! need Number!');
  await UpdateVariable("OWNER",Update);
  return await message.reply('successfull');
} else if(keyID == "PROFILE_STATUS"){
  await UpdateVariable("PROFILE_STATUS",Update);
  return await message.reply('successfull');
} else if(keyID == "BLOCK_CHAT"){
  if(isNaN(Update)) return message.reply('enter a valid value for variable! need Number!');
  if(BLOCK_CHAT.includes(Update)) return message.reply('this User already existing in your SudoDB!');
  Update = BLOCK_CHAT+','+Update;
  await UpdateVariable("BLOCK_CHAT",Update);
  return await message.reply('successfull');
} else if(keyID == "AUTO_CHAT_PM"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("AUTO_CHAT_PM",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "AUTO_CHAT_GRP"){
  if(!isTrue(a, Update.toLowerCase())) return message.reply('need a valid variable for Update! true or false')
  await UpdateVariable("AUTO_CHAT_GRP",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "BOT_PRESENCE"){
  if(!isTrue(response, Update.toLowerCase())) return message.reply('need a valid variable for Update! example : - unavailable,available,composing,recording,paused')
  await UpdateVariable("BOT_PRESENCE",Update.toLowerCase());
  return await message.reply('successfull');
} else if(keyID == "AUDIO_DATA"){
  if(!Update.includes(',')) return message.reply('enter a valid format! example :- inrl, inrl, https:example.png');
  let test = Update.split(',');
  if(test.length < 3) return message.reply('enter a valid format! example :- inrl, inrl, https:example.png');
  await UpdateVariable("AUDIO_DATA",Update);
  return await message.reply('successfull');
} else if(keyID == "STICKER_DATA"){
  if(!Update.includes(',')) return message.reply('enter a valid format! example :- inrl, inrl, https:example.png');
  let test = Update.split(',');
  if(test.length < 3) return message.reply('enter a valid format! example :- inrl, inrl, https:example.png');
  await UpdateVariable("STICKER_DATA",Update);
  return await message.reply('successfull');
} else if(keyID == "INSTAGRAM"){
  if(!Update.startsWith('http')) return message.reply('enter a valid value for variable! example :- https://insta.com');
  await UpdateVariable("INSTAGRAM",Update);
  return await message.reply('successfull');
} else if(keyID == "GIT"){
  if(!Update.startsWith('http')) return message.reply('enter a valid value for variable! example :- https://github.com');
  await UpdateVariable("GIT",Update);
  return await message.reply('successfull');
} else if(keyID == "CAPTION"){
  await UpdateVariable("CAPTION",Update);
  return await message.reply('successfull');
} else if(keyID == "SUDO"){
  if(isNaN(Update)) return message.reply('enter a valid value for variable! need Number!');
  if(SUDO.includes(Update)) return message.reply('this User already existing in your SudoDB!');
  Update = SUDO+','+Update;
  await UpdateVariable("SUDO",Update);
  return await message.reply('successfull');
} else return message.reply('no such variable in yourDB,!if you need all variable;try : getvar');
})
// to get variables for changing
inrl(
	{
       pattern: ['getvar'],
       desc: 'to change variables of bot',
       sucReact: "👀",
       category: ["all,system"],
       type : "database"
    },
	   async (message, client, match) => {
	  if(!message.client.isCreator) return message.reply('only for owner!!');
      let {PASSWORD,REACT,WARNCOUND,ALIVE_DATA,U_STATUS,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PREFIX,WELCOME_SET,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,MENSION_TEXT,LANG,OWNER,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,INSTAGRAM,GIT,CAPTION,SUDO,data} = await getVar();
      let {FOOTER} = data[0];
      value = match.toUpperCase().trim();
      if(!match){
   let content = `  PASSWORD :  ${PASSWORD}
   REACT  :  ${REACT}
   FOOTER :${FOOTER}
   WARNCOUND :  ${WARNCOUND}
   ALIVE_DATA :  ${ALIVE_DATA}
   U_STATUS :  ${U_STATUS}
   READ_CHAT :  ${READ_CHAT}
   BOT_INFO :  ${BOT_INFO}
   BGMBOT :  ${BGMBOT}
   WORKTYPE :  ${WORKTYPE}
   PM_BLOCK :  ${PM_BLOCK} 
   PREFIX :  ${PREFIX}
   WELCOME_SET :  ${WELCOME_SET}
   EXIT_MSG :  ${EXIT_MSG}
   CALL_BLOCK :  ${CALL_BLOCK}
   STATUS_VIEW :  ${STATUS_VIEW}
   MENSION_TEXT :  ${MENSION_TEXT}
   LANG :  ${LANG}
   OWNER :  ${OWNER}
   PROFILE_STATUS :  ${PROFILE_STATUS}
   BLOCK_CHAT :  ${BLOCK_CHAT}
   AUTO_CHAT_PM :  ${AUTO_CHAT_PM}
   AUTO_CHAT_GRP :  ${AUTO_CHAT_GRP}
   BOT_PRESENCE :  ${BOT_PRESENCE}
   AUDIO_DATA :  ${AUDIO_DATA}
   STICKER_DATA :  ${STICKER_DATA}
   INSTAGRAM :  ${INSTAGRAM}
   GIT :  ${GIT}
   CAPTION :  ${CAPTION}
   SUDO :  ${SUDO}`
return message.reply(content);
} else if(value == "PASSWORD"){
return message.reply(`PASSWORD : ${PASSWORD}`);
} else if(value == "REACT"){
return message.reply(`REACT : ${REACT}`);
} else if(value == "WARNCOUND"){
return message.reply(`WARNCOUND : ${WARNCOUND}`);
} else if(value == "ALIVE_DATA"){
return message.reply(`ALIVE_DATA : ${ALIVE_DATA}`);
} else if(value == "U_STATUS"){
return message.reply(`U_STATUS : ${U_STATUS}`);
} else if(value == "READ_CHAT"){
return message.reply(`READ_CHAT : ${READ_CHAT}`);
} else if(value == "BOT_INFO"){
return message.reply(`BOT_INFO : ${BOT_INFO}`);
} else if(value == "BGMBOT"){
return message.reply(`BGMBOT : ${BGMBOT}`);
} else if(value == "WORKTYPE"){
return message.reply(`WORKTYPE : ${WORKTYPE}`);
} else if(value == "PM_BLOCK"){
return message.reply(`PM_BLOCK : ${PM_BLOCK}`);
} else if(value == "PREFIX"){
return message.reply(`PREFIX : ${PREFIX}`);
} else if(value == "WELCOME_SET"){
return message.reply(`WELCOME_SET : ${WELCOME_SET}`);
} else if(value == "EXIT_MSG"){
return message.reply(`EXIT_MSG : ${EXIT_MSG}`);
} else if(value == "CALL_BLOCK"){
return message.reply(`CALL_BLOCK : ${CALL_BLOCK}`);
} else if(value == "STATUS_VIEW"){
return message.reply(`STATUS_VIEW : ${STATUS_VIEW}`);
} else if(value == "MENSION_TEXT"){
return message.reply(`MENSION_TEXT : ${MENSION_TEXT}`);
} else if(value == "LANG"){
return message.reply(`LANG : ${LANG}`);
} else if(value == "OWNER"){
return message.reply(`OWNER : ${OWNER}`);
} else if(value == "PROFILE_STATUS"){
return message.reply(`PROFILE_STATUS : ${PROFILE_STATUS}`);
} else if(value == "BLOCK_CHAT"){
return message.reply(`BLOCK_CHAT : ${BLOCK_CHAT}`);
} else if(value == "AUTO_CHAT_PM"){
return message.reply(`AUTO_CHAT_PM : ${AUTO_CHAT_PM}`);
} else if(value == "AUTO_CHAT_GRP"){
return message.reply(`AUTO_CHAT_GRP : ${AUTO_CHAT_GRP}`);
} else if(value == "BOT_PRESENCE"){
return message.reply(`BOT_PRESENCE : ${BOT_PRESENCE}`);
} else if(value == "AUDIO_DATA"){
return message.reply(`AUDIO_DATA : ${AUDIO_DATA}`);
} else if(value == "STICKER_DATA"){
return message.reply(`STICKER_DATA : ${STICKER_DATA}`);
} else if(value == "INSTAGRAM"){
return message.reply(`INSTAGRAM : ${INSTAGRAM}`);
} else if(value == "GIT"){
return message.reply(`GIT : ${GIT}`);
} else if(value == "CAPTION"){
return message.reply(`CAPTION : ${CAPTION}`);
} else if(value == "SUDO"){
return message.reply(`SUDO : ${SUDO}`);
} else if(value == "FOOTER"){
return message.reply(`FOOTER : ${FOOTER}`);
} else return message.reply('no such variable in yourDB,!if you need all variable;try : getvar');
})
// to del variables as sudo  &&chat_block
inrl(
	{
       pattern: ['delvar'],
       desc: 'to change variables of bot',
       sucReact: "😶",
       category: ["all,system"],
       type : "database"
    },
	   async (message, client, match) => {
	   if(!message.client.isCreator) return message.reply('only for owner!!');
	   if(!match) return message.reply('need variable! values:- sudo,block_chat');
	   let KeyID = match.split(':')[0].toUpperCase().trim() || match.trim();
	   let value;
	   if(message.quoted){
	   value = message.quoted.sender.split('@')[0];
	   } else value = match.split(':')[1];
	   if(value ===undefined) return message.reply('need id & value,example: setvar sudo:91404044404044');
       let {SUDO,BLOCK_CHAT} = await getVar();
       if(isNaN(value)) return message.reply('enter a valid data! need Number!');
       if(KeyID == "SUDO"){
       if(!SUDO.includes(value)) return message.reply('this User not existing in your SudoDB!');
       value = SUDO.replaceAll(','+value,"")||SUDO.replaceAll(value+',',"")||SUDO.replaceAll(value,"");
       message.reply(value)
       await UpdateVariable("SUDO",value);
       return await message.reply('successfull');
       } else if(KeyID == "BLOCK_CHAT"){
       if(!BLOCK_CHAT.includes(value)) return message.reply('this User not existing in your SudoDB!');
       value = BLOCK_CHAT.replace(value);
       await UpdateVariable("BLOCK_CHAT",value);
       return await message.reply('successfull');
      }
});
