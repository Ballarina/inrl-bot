
const os = require("os");
const got = require('got')
const speed = require("performance-now");
const { inrl , tiny, config, inrlQuita, insult , getBuffer, randomStyle, styletext, send_alive, send_menu } = require('../lib/')
const Config = require("../config");
const {getVar}=require('../lib/database/variable');

inrl(
	   {
	pattern: ['list'],
	desc: 'To viwe list of categories',
        sucReact: "💯",
        category: ["system", "all"],
        type :'info'
	   },
	async (message, client, match) => {

    let data = await getVar();
    let {FOOTER,BOT_INFO,PREFIX}=data.data[0];
    let perfix  = PREFIX == 'false' ? '' : PREFIX;

const categories = ["search", "all", "downloade", "chat", "system", 'fun', '18+', 'apk','ff','owner', 'create', 'group', "logo","photo","sticker","anime" ];
let rows =[];
for(i=0;i<categories.length;i++){
  if([i]) rows.push({title: `${categories[i]}-menu`, rowId:`${perfix}${categories[i]}-menu`,description: `${FOOTER}`})
}
const sections = [{title: `${BOT_INFO.split(',')[0]} list menu`, rows: rows}]
const button = {
        text: `╭─❒「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」
│⬡ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${perfix}*  ⌟
│⬡ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${BOT_INFO.split(',')[0]}
│⬡ 𝙐𝙨𝙚𝙧 : ${message.client.pushName}
│⬡ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─❒`,
        footer: FOOTER,
        buttonText: "list ⎙",
        sections,
}
return await client.sendMessage( message.from, button, { quoted: message});
});
inrl(
	   {
		pattern: ['ping'],
		desc: 'To check ping',
        sucReact: "💯",
        category: ["system", "all"],
        type : 'info'
	   },
	async (message, client) => {
             const start = new Date().getTime()
		     await message.reply('Ping!')
		     const end = new Date().getTime()
		     return await message.reply('Pong! ' + (end - start) + ' ms');
	 }
);
inrl({ pattern: ['del'], desc: "to delete unwanted grp msg sended by bot",sucReact: "⚒️",  category: ["all"], type: 'whatsapp'}, async (message, client) => {
try {
if (!message.client.isCreator) return message.reply('only for owner!');
if(!message.isGroup) return message.reply('this plugin only works in group!');
                if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a group content"},{ quoted: message })
                let { chat, fromMe, id } = message.quoted
                return client.sendMessage(message.from, { delete: { remoteJid: message.chat, fromMe: message.quoted.fromMe, id: message.quoted.id, participant: message.quoted.sender }})
} catch (e){
message.reply(JSON.stringify(e))
        }
    }
);
inrl(
	   {
		pattern: ['dlt'],
		desc: 'To dlt unwanted msg by admin from group content',
        sucReact: "🤌",
        category: ["system", "all"],
        type: 'whatsapp'
	   },
	async (message, client, match) => {
    if(match) return;
try {
        const groupMetadata = message.isGroup ? await client.groupMetadata(message.from).catch(e => {}) : ''
	const participants = message.isGroup ? await groupMetadata.participants : ''
        let admins = message.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
if(!message.quoted) return message.reply('reply to a group content');
if(!message.isGroup) return message.reply('only works in group');
if(!admins.includes(message.sender)) return message.reply('only for admins');
return await client.sendMessage(message.from, {
		delete: {
			remoteJid: message.key.remoteJid,
			fromMe: message.quoted.fromMe,
			id: message.quoted.id,
			participant: message.quoted.sender
		}
	})
} catch (e){
   message.reply(JSON.stringify(e))
  }
})
inrl(
  {
    pattern: ["alive"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
    type : 'info'
  },
  async (message, client) => {
return await send_alive(message, client)
});
inrl(
  {
    pattern: ["script"],
    desc: "to get the bot script",
    sucReact: "🥵",
    category: ["system", "all"],
    type : 'system'
  },
  async (message, client) => {
    let {FOOTER,BOT_INFO,PREFIX,GIT}=await getVar();
    let perfix  = PREFIX == 'false' ? '' : PREFIX;
      const response = await got("https://api.github.com/repos/inrl-official/inrl-bot-md")
      const json = JSON.parse(response.body);
      let captIon = `╭═══〘${BOT_INFO.split(",")[0]}〙═══⊷❍
┃☯︎╭──────────────
┃☯︎│
┃☯︎│ ᴜꜱᴇʀ : _${message.client.pushName}_
┃☯︎│ ᴠᴇʀꜱɪᴏɴ : ${tiny(Config.VERSION)}
┃☯︎│ ɢɪᴛʜᴜʙ : _${GIT}_
┃☯︎│ ᴛᴜʀᴛᴏʀɪᴀʟ : _${Config.VIDEO}_
┃☯︎│ ᴛᴏᴛᴇʟ ꜱᴛᴀʀᴇꜱ : ${json.stargazers_count} stars
┃☯︎│ ꜰᴏʀᴋꜱ: ${json.forks_count} forks
┃☯︎│
┃☯︎╰───────────────
╰═════════════════⊷`
 
let buttonMessage = {
            image: { url: json.owner.avatar_url },
            caption: captIon,
            footer: FOOTER,
            headerType: 1,
            contextInfo: {
                externalAdReply: {
                    title: json.name,
                    body: json.description ,
                    thumbnail: await getBuffer(BOT_INFO.split(',')[2]),
                    mediaType: 2,
                    mediaUrl: GIT,
                    sourceUrl: GIT,
                },
            },
        };
    return await client.sendMessage(message.from, buttonMessage, { quoted: message });
});
const bots = require("../lib/perfix");
const Lang = bots.getString("_whats");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat","inrl":"Inrl","ibot":"Ibot", "system": "System", 'fun': "Fun", '18+': "18+","ff:":"Ff", 'owner': "Owner", 'create': "Create", 'group': "Group", "logo": "Logo","photo": "Photo","sticker": "Sticker","anime": "Anime" }

inrl({ pattern: ["menu"], desc: Lang.DESCC, sucReact: "📰", category: ["all", "system"], type: 'whatsapp'}, async (message, client) => {
 return await send_menu(message, client);
});
bots.categories.map(category => {
  if (category == 'all') return;
inrl({ pattern: [`${category}-menu`], sucReact: "📰", category: ["all", "system"], type :'get'}, async (message, client) => {
  let data = await getVar();
  let {FOOTER,BOT_INFO,PREFIX,GIT}=data.data[0];
  let prefix  = PREFIX == 'false' ? '' : PREFIX;
    let CMD_HELP = `╭─❒「  ${category}-menu  」 \n`
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes(category)) { command.pattern.map((cmd) => CMD_HELP +=  "│ •  "+cmd+"\n")}
    }); 
   CMD_HELP += "│ \n│    "+FOOTER+"\n╰─❒";
    return await message.reply(CMD_HELP)
    })
})

inrl({ pattern: [`cmds-count`], sucReact: "🆗", category: ["all", "system"], type : 'info'}, async (message, client) => {
let countcmdOfCmd =0;
bots.commands.map((command) => {
    countcmdOfCmd += command.pattern.length
  });
    return await client.sendMessage(message.from, {text: countcmdOfCmd.toString()}, { quoted: message });
});
 inrl({pattern: ['owner'], desc: "to check whether", sucReact: "🥺", category: ['all'],type : 'utility' },   async (message, client) => {
  let data = await getVar();
  let {FOOTER,BOT_INFO,PREFIX,GIT,OWNER}=data.data[0];
  let prefix  = PREFIX == 'false' ? '' : PREFIX;
  const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:'+BOT_INFO.split(",")[0]+'\n' // full name
            + 'ORG:'+FOOTER+';\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid='+OWNER+':'+OWNER+'\n' // WhatsApp ID + phone number
            + 'END:VCARD'
return await client.sendMessage( message.from, { contacts:{ displayName:`${BOT_INFO.split(",")[0]}`, contacts: [{ vcard }],}})
});
const GDM = "it sends good morning message";
const GDN = "it sends Night message";

inrl(
  { pattern: ["gm","GoodMornig","gdmornig"], desc: GDM, sucReact: "💖", category: ["chat"], type :'chat' },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "❀🍃Good❀ ❀morning❀🥰❀ ";
    r_text[1] = "☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐 ";
    r_text[2] = "🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰 ";
    r_text[3] = "🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸 ";
    r_text[4] = "🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞 ";
    r_text[5] = "🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶 ";
    r_text[6] = "🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰 ";
    const i = Math.floor(7 * Math.random());
let returNtxt = await r_text[i] 
    return await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message } );
  }
);

inrl(
  { pattern: ["ge", "good evening", "evening"], desc: "good evening", sucReact: "💖", category: ["chat"], type :'chat'  },
  async (message, client) => {
    var r_text = new Array();
r_text[0] = "😻ɢᴏᴏᴅ 💗ᴇᴠᴇɴɪɴɢ",
r_text[1] = "❣️𝐺𝛩𝛩𝐷 💓𝛯𝛻𝛯𝛮𝛪𝛮𝐺",
r_text[2] = "🥰ｇｏｏｄ 💞ｅｖｅｎｉｎｇ",
r_text[3] = "🥳𝓰𝓸𝓸𝓭 💝𝓮𝓿𝓮𝓷𝓲𝓷𝓰",
r_text[4] = "😍ムののり 💘乇√乇刀ﾉ刀ム",
r_text[5] = "🤩ᎶᎧᎧᎴ 💕ᏋᏉᏋᏁᎥᏁᎶ",
r_text[6] = "😛 ɠơơɖ 💔ɛ۷ɛŋıŋɠ"
const i = Math.floor(7 * Math.random());
let returNtxt = await r_text[i] 
return await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message } );

  }
);

inrl(
  { pattern: ["gn", "gdnight", "goodnight","gd8","gdn8"], desc: GDN, sucReact: "💖", category: ["chat"], type :'chat'  },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";
    r_text[1] = "🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";
    r_text[1] = "🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";
    r_text[3] = "😘ցօօժ ⭐️ղíցհԵ 💝";
    r_text[4] = "🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";
    const i = Math.floor(5 * Math.random());
let returNtxt = await r_text[i] 
return await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message, adReply: true } );
  }
);
inrl(
  { pattern: ["ga", "gdafternoon", "goodafternoon","gda",], desc: GDN, sucReact: "💖", category: ["chat"], type :'chat'  },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "😘Ꮆㄖㄖᗪ 🥵卂千ㄒ乇尺几ㄖㄖ几💫✨";
    r_text[1] = "🤗𝙂𝙤𝙤𝙙 💖𝙖𝙛𝙩𝙚𝙧𝙣𝙤𝙤𝙣❄️✨";
    r_text[1] = "♢♞  𝐆Ⓞ𝐨๔ 𝐀ƒт𝔢𝓇Ňｏ𝐎ภ  💲🎀";
    r_text[3] = "😘ɢᴏᴏᴅ ⭐️ᴀꜰᴛᴇʀɴᴏᴏɴ 💝";
    r_text[4] = "🌃₲ØØĐ  🙈₳₣₮ɆⱤ₦ØØ₦💫✨";
    const i = Math.floor(5 * Math.random());
let returNtxt = await r_text[i] 
return await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message, adReply: true } );
  }
);
inrl(
	   {
		pattern: ['fancy'],
		desc: 'To convert text to random style as you want',
         sucReact: "🙀",
         category: ["system", "all"],
         type : 'converter'
	   },
	async (message, client, match) => {
	try {
const text = message.client.text;
if(!text){
let NewText =`
Enter A Text Quary
_ex_ : Enter a text like this *fancy 55,hi*
1 Fᴀɴᴄʏ
2 ʎɔuɐℲ
4 fancy
5 ʏɔᴎɒꟻ
6 F̸̧̥̠͔̯̻̱̋̏̾͗̈́͝a̵̟̠̯̐n̷̡̤̪͓͖̹̯̙͂̊͋̊̈́̐͑̋̏c̴̯̒͆́y̶͖̘̹̦͆̎̑͗͝
7 Ⓕⓐⓝⓒⓨ
8 F̶a̶n̶c̶y̶
9 F̴a̴n̴c̴y̴
10 F̷a̷n̷c̷y̷
11 F̲a̲n̲c̲y̲
12 F̳a̳n̳c̳y̳
13 defult
14 F͎a͎n͎c͎y͎
15 F͓̽a͓̽n͓̽c͓̽y͓̽
16 ☞︎♋︎■︎♍︎⍓︎
17 Fａncｙ
18 ҒΔΠCΨ
19 千卂几匚ㄚ
20 ꎇꍏꈤꏳꌩ
21 ቻልክርሃ
22 𝐅𝐚𝐧𝐜𝐲
23 𝑭𝒂𝒏𝒄𝒚
24 𝐹𝑎𝑛𝑐𝑦
25 ᠻꪖꪀᥴꪗ
26 𝙵𝚊𝚗𝚌𝚢
27 fคຖ¢ฯ
28 ʄąŋƈყ
29 ｷﾑ刀ᄃﾘ
30 千卂几匚ㄚ
31 🄵🄰🄽🄲🅈
32 ᎦᏗᏁፈᎩ
33 ᖴᗩᑎᑕY
34 ʄǟռƈʏ
35 𝙵𝚊𝚗𝚌𝚢
36 𝙁𝙖𝙣𝙘𝙮
37 𝗙𝗮𝗻𝗰𝘆
38 𝐅𝐚𝐧𝐜𝐲
39 𝘍𝘢𝘯𝘤𝘺
40 Fαɳƈყ
41 ₣₳₦₵Ɏ
42 £åñ¢¥
43 ƒαη¢у
44 FΛПᄃY
45 Ƒąղçվ
46 Fₐₙcy
47 ᶠᵃⁿᶜʸ
48 Ŧคภςץ
49 𝔽𝕒𝕟𝕔𝕪
50 𝕱𝖆𝖓𝖈𝖞
51 🅵🅰🅽🅲🆈
52 𝓕𝓪𝓷𝓬𝔂
53 𝔉𝔞𝔫𝔠𝔶
54 Ｆａｎｃｙ
55 𝑭𝒂𝒏𝒄𝒚
56 𝐹𝛥𝛮𝐶𝑌
57 𝙁𝞓𝞜𝘾𝙔
58 𝐅𝚫𝚴𝐂𝐘
59 ᖴᗩᑎᑕᎩ
_ex_ : Enter a text like this *fancy 55,hi*`
return await client.sendMessage(message.from, { text : NewText });
    }
         var split = text.split(',');
         Num = split[0] || match || "55";
         Text = message.quoted.text || split[1] || "enter A text with number ex 31,text";
let ThenText = await styletext(Text, Num)
return await client.sendMessage(message.from, { text : ThenText });
 } catch (e){
 return message.reply(JSON.stringify(e))
        }
    }
);
