//created by @inrl
const { inrl, pass, animewifu, animenom, animefox, animesmug, hentaiWifu, hentaiNeko, hentaiTrap, animeawoo, animemegumin, animemehold, animehighfive, animecringe, animedance, animehappy, animeblush, animeglomp, animewave, animepoke, animewink, animebonk, animebully, animeyeet, animeneko, animecuddle, animeslap, animepat, animegood, animehug, animekiss, animewlp, animespank, animecry, animekill, animelick, animebite } = require('../lib');
const Config = require('../config');
let crtPass = pass.PASS;
const {getVar} = require('../lib/database/variable');

inrl({ pattern: ['animewifu'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animewifu();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animewifu', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animenom'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animenom();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animenom', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animefox'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animefox();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animefox', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animesmug'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animesmug();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animesmug', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['hentaiwifu'], desc: "thus send random anime imgs, maybe bad",sucReact: "😕",  category: ["anime","18+"],type:'18+'}, async (message, client) => {
let data = await getVar();
const { FOOTER, PREFIX, PASSWORD } =  data.data[0];
if(!message.client.isCreator) {
await message.reply('only for owner\nblocking you🤌');
return await client.updateBlockStatus(message.from, "block")
}
if(PASSWORD === crtPass){
let ttimg = await hentaiWifu();
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'hentaiwifu', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `are you bad!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
    }
})

inrl({ pattern: ['hentaineko'], desc: "thus send random anime imgs, maybe bad",sucReact: "😑",  category: ["anime","18+"],type:'18+'}, async (message, client) => {
if(!message.client.isCreator) {
await message.reply('only for owner\nblocking you🤌');
return await client.updateBlockStatus(message.from, "block")
}
if(PASSWORD === crtPass){
let ttimg = await hentaiNeko();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'hentaineko', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Are you bad!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
      }
 })
 inrl({ pattern: ['hentaitrap'], desc: "thus send random anime imgs, maybe bad",sucReact: "🤥",  category: ["anime","18+"],type:'18+'}, async (message, client) => {
let data = await getVar();
const { FOOTER, PREFIX, PASSWORD } =  data.data[0];
if(!message.client.isCreator) {
await message.reply('only for owner\nblocking you🤌');
return await client.updateBlockStatus(message.from, "block")
}
if(PASSWORD === crtPass){
let ttimg = await hentaiTrap();
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'hentaitrap', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Are you bad!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
    }
})

inrl({ pattern: ['animeawoo'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animeawoo();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animeawoo', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animemegumin'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animemegumin();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animemegumin', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animemehold'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animemehold();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animemehold', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animehighfive'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animehighfive();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animehighfive', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animecringe'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animecringe();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animecringe', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animedance'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animedance();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animedance', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animehappy'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animehappy();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animehappy', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animeblush'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animeblush();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animeblush', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animeglomp'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animeglomp();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animeglomp', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animewave'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animewave();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animewave', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animepoke'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animepoke();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animepoke', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animewink'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animewink();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animewink', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animebonk'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animebonk();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animebonk', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animebully'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animebully();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animebully', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animeyeet'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animeyeet();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animeyeet', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animeneko'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animeneko();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animeneko', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animecuddle'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animecuddle();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animecuddle', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animeslap'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animeslap();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animeslap', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animepat'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animepat();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animepat', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animegood'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animegood();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animegood', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animehug'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animehug();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animehug', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animekiss'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animekiss();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animekiss', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animewlp'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animewlp();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animewlp', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animespank'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animespank();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animespank', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animecry'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animecry();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animecry', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animekill'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animekill();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animekill', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animelick'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animelick();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animelick', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
 inrl({ pattern: ['animebite'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"], type : "fun"}, async (message, client) => {
let ttimg = await animebite();
let data = await getVar();
const { FOOTER, PREFIX } =  data.data[0];
let prefix = PREFIX== 'false'?'':PREFIX;
let buttons = [
        {buttonId:prefix+'animebite', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
})