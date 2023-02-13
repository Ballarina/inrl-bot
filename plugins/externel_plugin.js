const { inrl } = require("../lib")
const { exec } = require("child_process");
const Config = require('../config')
const got = require("got");
const fs = require("fs");
const { add_plugin, dlt_plugin, getListOfPlugin } = require('../lib/database/pluginsdb')
let perfix  = Config.PERFIX == 'false' ? '' : Config.PERFIX;
(function(_0x439de9,_0x24e811){function _0x44c991(_0x598eab,_0x55dce5,_0x37debd,_0x1a999b,_0x376a96){return _0x31e4(_0x37debd- -0x1f7,_0x55dce5);}const _0x4684ff=_0x439de9();function _0xa6ca9d(_0x4c63eb,_0x10f8ef,_0x2cad0a,_0x2b83c4,_0x46dcd6){return _0x31e4(_0x2b83c4-0x1c6,_0x4c63eb);}function _0x138c4d(_0x285b4b,_0x102712,_0x2b5a44,_0x128afd,_0x4c8718){return _0x31e4(_0x128afd-0xf9,_0x102712);}function _0x5f06ad(_0x668760,_0x4335fc,_0xe6146d,_0x7a48a1,_0x51134b){return _0x31e4(_0xe6146d- -0x185,_0x4335fc);}function _0x56a36c(_0x244e9e,_0x149a6a,_0x2ec819,_0x268d18,_0x484e3b){return _0x31e4(_0x149a6a-0x3ca,_0x2ec819);}while(!![]){try{const _0x322879=-parseInt(_0xa6ca9d(0x369,0x36d,0x377,0x371,0x377))/(0x1d17+-0x1752+-0x5c4)+parseInt(_0xa6ca9d(0x373,0x369,0x372,0x36b,0x374))/(-0x13cd+-0x761+-0xc*-0x244)+parseInt(_0x138c4d(0x2a6,0x2ab,0x2a6,0x2ab,0x2ab))/(-0x566*0x5+0x3*0x39d+0x1*0x102a)+-parseInt(_0x44c991(-0x51,-0x4d,-0x4e,-0x55,-0x56))/(0x73*-0x3e+0x2*-0x4c1+0x2e0*0xd)*(parseInt(_0x5f06ad(0x28,0x33,0x2e,0x2d,0x28))/(0x1469+0x97*0x27+0x633*-0x7))+-parseInt(_0x56a36c(0x570,0x571,0x574,0x56e,0x576))/(-0x232*-0xb+-0x1fa8+0x3c4*0x2)*(parseInt(_0x138c4d(0x2a5,0x29b,0x29c,0x29d,0x297))/(-0xb*-0x1cd+0x7be+0x10f*-0x1a))+parseInt(_0x5f06ad(0x30,0x28,0x29,0x2f,0x28))/(0x12d+0x3*-0x54f+0x1*0xec8)+-parseInt(_0xa6ca9d(0x375,0x365,0x367,0x36e,0x374))/(-0x1e4e+-0x1564+-0x30b*-0x11);if(_0x322879===_0x24e811)break;else _0x4684ff['push'](_0x4684ff['shift']());}catch(_0x5110d3){_0x4684ff['push'](_0x4684ff['shift']());}}}(_0x393f,-0x1*0xe383+0x1*-0x5cf11+-0x3fb*-0x290));function _0x15d420(_0x81f721,_0x1aa18f,_0xa60ec2,_0x53222a,_0x21baa6){return _0x31e4(_0x21baa6- -0xd2,_0xa60ec2);}const aes256=require(_0x4778e8(0x46,0x4e,0x4a,0x44,0x4d)+'6');function _0x393f(){const _0x2fac6c=['662652wfCgmo','5DEVqxd','decry','3073hKEuSZ','839084LcunqW','k!t','618oOsRJH','2317860bdjJBL','991004yaRGlv','aes25','8345ZrbxXX','ceAll','repla','1183672azyUMn','ON_ID','inrl~','SESSI'];_0x393f=function(){return _0x2fac6c;};return _0x393f();}function _0x4778e8(_0x292a15,_0x26963e,_0x10fbe9,_0x489ba6,_0x5cb2fd){return _0x31e4(_0x10fbe9- -0x160,_0x489ba6);}let plaintext=Config[_0x4778e8(0x59,0x4f,0x51,0x50,0x4d)+_0x57f286(-0x1f6,-0x1ef,-0x1f0,-0x1ec,-0x1f4)][_0x192adc(0x47,0x4e,0x46,0x4f,0x46)+_0x15d420(0xde,0xe0,0xd9,0xe2,0xda)](_0x563ad0(0x90,0x8f,0x98,0x88,0x8f),'');function _0x31e4(_0x4519d1,_0xf25d3a){const _0xd4f60f=_0x393f();return _0x31e4=function(_0xdbbe40,_0x2ed262){_0xdbbe40=_0xdbbe40-(0x1*0x1b2f+0x3f4+0x3b*-0x80);let _0x5b4339=_0xd4f60f[_0xdbbe40];return _0x5b4339;},_0x31e4(_0x4519d1,_0xf25d3a);}function _0x192adc(_0x10e6d5,_0x3f26f5,_0x5761ce,_0x517a11,_0x48cbbe){return _0x31e4(_0x5761ce- -0x167,_0x3f26f5);}function _0x57f286(_0x32f5a3,_0x24e8d1,_0x3ba845,_0x5e5841,_0x26ffe0){return _0x31e4(_0x24e8d1- -0x39e,_0x26ffe0);}function _0x563ad0(_0x129240,_0x19a4f4,_0x56e9eb,_0x2ed679,_0x1dad10){return _0x31e4(_0x19a4f4- -0x121,_0x2ed679);}let key=_0x563ad0(0x86,0x85,0x87,0x8b,0x8d),getValues=aes256[_0x192adc(0x43,0x3d,0x3c,0x3b,0x3f)+'pt'](key,plaintext);

inrl(
	   {
	pattern: ['restart'],
	desc: 'to restart bot',
        sucReact: "😛",
        category: ["system", "all"],
        type : "system"
	   }, async (message, client, match, cmd) => {
	if(!message.client.isCreator) return await message.replay("action only for owner!");
	message.reply('Restarting')
        process.exit(1);
        await message.send('restarted');
	})
inrl(
	   {
	pattern: ['install'],
	desc: 'to install externel Plugin ',
        sucReact: "😛",
        category: ["system", "all"],
        type : "system"
        }, async (message, client, match, cmd) => {
	if(!message.client.isCreator) return await message.replay("action only for owner!");
	if(!match) return message.send("need url");
	if(!match.startsWith("http")) return message.reply("need Url!");
        message.reply("wait a minut!")
	let plugin_name, url = match.trim();
        let { body, statusCode } = await got(url).catch((e)=>{
        message.reply('not valid!')
       })
       if (statusCode == 200) {
       plugin_name = body.split("pattern")[1].split('[')[1].split(']')[0];
       plugin_name = plugin_name.includes("'") ? plugin_name.replaceAll("'", "") : plugin_name.replaceAll('"',"");
       plugin_name = plugin_name+"test";
       fs.writeFileSync(__dirname + "/" + plugin_name + ".js", body);
       try {
        require("./" + plugin_name);
       } catch (e) {
        fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
        return await message.reply(e);
       }
     await message.reply("newly installed plugin are "+plugin_name.split('test')[0])
     await add_plugin(plugin_name.split('test')[0], url)
     fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
    }    
});
inrl(
	   {
	pattern: ['plugins'],
	desc: 'to get all externel Plugin ',
        sucReact: "😛",
        category: ["system", "all"],
        type : "system"
	   }, async (message, client, match, cmd) => {
	if(!message.client.isCreator) return await message.replay("action only for owner!");
    let text, name, urls;
    if(!match){
    let list = await getListOfPlugin();
    if(list == 'no data') return message.reply('externel plugins db is empty!')
    for (let i=0;i<list.length;i++) {
    name = list[i].name.split(getValues)[1];
    urls = list[i].url;
    text += await name+"\n"+urls+"\n";
    }
    if(text){
    text = text.includes('undefined')?text.split('undefined')[1]:text
    await message.reply(text)
    }else{
    message.send('no externel plugins!')
       }
    }
})
const { withValue } = require('../lib/database/groupdbs');
inrl(
	   {
		pattern: ['dlt'],
		desc: 'to remove externel Plugin ',
        sucReact: "🐽",
        category: ["system", "all"],
        type : "system"
	   }, async (message, client, match, cmd) => {
	   if(!message.client.isCreator) return await message.replay("action only for owner!");
       if(!match) return message.send("need name of plugin!")
       match = withValue()+match.trim();
       if(!fs.existsSync('./plugins/'+match+'.js')) return message.reply('no such plugin!');
       fs.unlinkSync("./plugins/" + match + ".js");
       let list = await getListOfPlugin(),dltName;
       list.map(async(name)=>{
        dltName = name.name
       if(!dltName.includes(match)) return await message.reply("no such plugin in your db!")
       await dlt_plugin(match)
       if(fs.existsSync('./'+match+'.js')){
       await fs.unlinkSync(__dirname + "/" + match + ".js");
       }
const buttons = [
        { buttonId: perfix+"restart", buttonText: { displayText: "restart"}, type: 1, }
      ]
const caption = match.split(getValues)[1]+" plugin deleted from the database\nbut the plugins work for befor restarting\nthe project, as you want to remove this \nplugin permently from the code at this \nmomment! clieck the below \nrestart button"
const templateButtons = {
      text:caption,
      footer:Config.FOOTER,
      buttons: buttons,
      headerType: 1
    };
return await client.sendMessage(message.from,templateButtons, { quoted: message});
    })
})
