const {getVar}=require('../lib/database/variable');

const bgm = require('../media/bgm.json');
module.exports = async(msg, conn, m, store) => {
let data = await getVar();
const {BGMBOT,PREFIX} = data.data[0];
let prefix = PREFIX =='false' ? '': PREFIX;
if(m.client.body.startsWith(prefix)) return;
 let audios=[], mp3, chk=[];
 let add = m.client.body.toLowerCase().trim();
 if(add.includes(' ')){
 add = add.split(' ');
    add.map((p)=>{
    chk.push(p)
    })
    } else {
    chk.push(add)
  }
 if(BGMBOT !="true") return;
 for (let key in bgm) {
 let a = [];a.push(key)
  a.map((a)=>{
  chk.forEach((c)=>{
  if(c==a){
  mp3 = bgm[key];
  audios.push(mp3)
  mp3 = audios[Math.floor(Math.random() * audios.length)];
           }
       })
    })
  }
 if(mp3 === undefined) return;
 return conn.sendMessage(m.from,{ audio: { url: mp3.trim() }, mimetype: "audio/mp4",ptt: true}, { quoted: m } );
}
