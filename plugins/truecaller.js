//created by @inrl
const { inrl, truecaller, stickersearch } = require('../lib/');
const got = require('got');
const {getVar} = require('../lib/database/variable');

inrl(
	   {
		pattern: ['git'],
		desc: 'To get script of the bot',
    sucReact: "💯",
    category: ["system", "all"],
    type : "general"
	   },
	async (message, client) => {
    let data = await getVar();
    let {GIT} = data.data[0];
		return await client.sendMessage( message.from, { text: GIT }, { quoted: message })
                }
);
inrl(
	   {
		pattern: ['true'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
                type : "search"
	   },
	async (message, client, match) => {
if(match || message.quoted){
let sender;
if(message.quoted) sender = message.quoted.sender.split("@s.whatsapp.net")[0];
let True = match.includes('@') ? match.split('@')[1] : match;
let search = sender || True;
let rslt = await got(`https://inrl-web.vercel.app/api/truecaller?number=${search}`);
let msg = await truecaller(rslt);
		return await client.sendMessage( message.from, { text: msg }, { quoted: message })
                }
        }
);
inrl(
  {
    pattern: ["search"],
    desc: "to serch  datas as you want",
    sucReact: "🥰",
    category: ["system", "all"],
    type : "search"
  },
  async (message, client, match) => {
    let data = await getVar();
    let {FOOTER} = data.data[0];
if(match){
if(match.match("photo")){
let data = await stickersearch(match.replace("photo",""))
let img = data.sticker_url;
console.log(data);
let GetRandom = img[Math.floor(Math.random(), img.length)]
 let buttons = [
        {buttonId:`.search ${match}`, buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image : {url: GetRandom },
      caption:`${data.title}`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
    }
  }
});
