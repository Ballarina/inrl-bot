const { setAntiLink, removeAntiLink, getAntiLink, setAntiWord, removeAntiWord, getListOfWord, GetWords, removeWord, withValue, setpdm, removePdm, getPdm, setFakeNum, setFake, removeFake, getListofFake, GetFake, removeAFake } = require('../lib/database/groupdbs');
const {getVar} = require('../lib/database/variable');
const { inrl, quoted } = require('../lib')

inrl(
	{
		pattern: ['set'],
       desc: ' set pdm, antilink, fake number, badwords',
       sucReact: "🖕",
       category: ["all"],
       type :"group"
    },async (message, client, match)=>{
    let data = await getVar();
    let {PREFIX} =data.data[0];
    let prefix  = PREFIX == 'false' ? '' : PREFIX;
    if(!message.client.isCreator) return message.send('only for owner!');
    if(!message.isGroup) return message.reply('this plugin only work on group');
    if(!match) return message.reply('need text!');
if(match.includes('word')){
match = match.replaceAll('word','').replaceAll(' ','')
  if(!match) return message.reply('need word?!')
await setAntiWord(message.from, match);
return await message.reply('successfully set word!');
} else if(match.includes('pdm on')){
   await setpdm(message.from)
   return await message.reply('pdm activated!')
} else if(match.includes('antilink on')){
await setAntiLink(message.from)
return await message.reply('successfully set antilink on '+message.from)
} else if(match.includes('pdm')){
   let isPdmInDb = await getPdm(message.from),buttons=[];
   if(isPdmInDb == 'false'){
   await buttons.push({ buttonId: prefix+"set pdm on", buttonText: { displayText: "on pdm" }, type: 1, });
   const templateButtons = {
      text:"⚠️promote demote message⚠️",
      footer:'status : off',
      buttons: buttons,
    };
return await client.sendMessage(message.from,templateButtons, { quoted: await quoted(message).document });
} else if(isPdmInDb == 'true'){
await buttons.push({ buttonId: prefix+"remove pdm", buttonText: { displayText: "off pdm" }, type: 1, });
const templateButtons = {
      text:"⚠️promote demote message⚠️",
      footer:'status :on',
      buttons: buttons,
      headerType: 1
    };
return await client.sendMessage(message.from,templateButtons, { quoted: await quoted(message).contact });
  }
 } else if(match.includes('antilink')){
let isInDb = await getAntiLink(message.from), buttons = [];
if(isInDb == 'false'){
await buttons.push({ buttonId: prefix+"set antilink on", buttonText: { displayText: "on antilink" }, type: 1, });
const templateButtons = {
      text:"⚠️ᴀɴᴛɪʟɪɴᴋ⚠️",
      footer:'status : off',
      buttons: buttons,
    };
return await client.sendMessage(message.from,templateButtons, { quoted: await quoted(message).gift });
}else if(isInDb == 'true'){
await buttons.push({ buttonId: prefix+"remove antilink", buttonText: { displayText: "off antilink" }, type: 1, });
const templateButtons = {
      text:"⚠️ᴀɴᴛɪʟɪɴᴋ⚠️",
      footer:'status :on',
      buttons: buttons,
      headerType: 1
    };
return await client.sendMessage(message.from,templateButtons, { quoted: await quoted(message).status });
   }
} else if(match.includes('fake')){
   match = match.replaceAll('fake','').replaceAll(' ','')
   if(!match) return message.reply('need starting value  of fake number?!')
   await setFakeNum(message.from, match);
   return await message.reply('successfully set fake number!');
     } else{
    return await client.sendMessage(message.from, { text :'```'+ ` need text to set values \nexample :-${prefix}set word for seting badwords \n${prefix}set fake for setting fake number starting values \n${prefix}set pdm for setting promote emote msg\n${prefix}set antilink for setting antilink msg`+'```'});
    }
});

inrl(
	{
		pattern: ['remove'],
       desc: 'remove pdm, antilink, fake number, badwords',
       sucReact: "🤥",
       category: ["all"],
       type :"group"
    },async (message, client, match)=>{
    let data = await getVar();
    let {PREFIX} =data.data[0];
    let prefix  = PREFIX == 'false' ? '' : PREFIX;
    if(!message.client.isCreator) return message.send('only for owner!');
    if(!message.isGroup) return message.reply('this plugin only work on group');
    if(match.includes('word')){
match = match.replaceAll('word','').replaceAll(' ','').trim();
if(!match) return message.reply('need word?!')
await removeWord(message.from, match)
return message.reply('successfully removed');
    } else if(match.includes('fake')){
match = match.replaceAll('fake','').replaceAll(' ','')
if(!match) return message.reply('need starting value  of fake number?!')
await removeAnFake(message.from, match)
return await message.reply('successfully removed fake number from db');
   } else if(match.includes('pdm')){
    await removePdm(message.from)
    return await message.reply('pdm deactivated!')
   } else if(match.includes('antilink')){
    await removeAntiLink(message.from)
    return await message.reply('successfully remove antilink from '+message.from)
   }
})
inrl(
	{
		pattern: ['get'],
       desc: 'get datas of, fake number, badwords',
       sucReact: "🔥",
       category: ["all"],
       type :"group"
     },async (message, client, match)=>{
    let data = await getVar();
    let {PREFIX} =data.data[0];
    let prefix  = PREFIX == 'false' ? '' : PREFIX;
    if(!message.client.isCreator) return message.send('only for owner!');
    if(!message.isGroup) return message.reply('this plugin only work on group');
    if(!match) return await client.sendMessage(message.from, { text :'```'+ ` need text to get values \nexample :-${prefix}get words for get words \n${prefix}get fakes for get fake number values \n${prefix}get all words for get all words in your db\n${prefix}get all fakes for get all fake number in you db`+'```'});
    if(match.includes('words')){
    let data = await GetWords(message.from);
    return await message.reply(data);
    } else if(match.includes('fakes')){
    let data = await GetFake(message.from);
    return await message.reply(data);
    } else if(match.includes('all words')){
    let data = await getListOfWord();
    return await message.reply(data);
    } else if(match.includes('all fakes')){
    let data = await getListofFake();
    return await message.reply(data);
    }
});