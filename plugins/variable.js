const { inrl } = require('../lib');
const {getVar,UpdateVariable} = require('../lib/database/variable')

inrl(
	{
       pattern: ['setvar'],
       desc: 'to change variables of bot',
       sucReact: "✨",
       category: ["all,system"],
       type : "database"
    },
	   async (message, client,match) => {
      let arrayy = ["PASSWORD","REACT","WARNCOUND","ALIVE_DATA","U_STATUS","READ_CHAT","BOT_INFO","BGMBOT","WORKTYPE","PM_BLOCK","PERFIX","WELCOME_SET","EXIT_MSG","CALL_BLOCK","STATUS_VIEW","MENSION_TEXT","LANG","OWNER","PROFILE_STATUS","BLOCK_CHAT","AUTO_CHAT_PM","AUTO_CHAT_GRP","BOT_PRESENCE","AUDIO_DATA","STICKER_DATA","INSTAGRAM","GIT","CAPTION","SUDO"];
      if(!match.includes(':')) return message.reply('need id & value,example: setvar react:true')
      match = match.split(':')[0].toUpperCase().trim();
      arrayy.map(async(m)=>{
         if(m==match){
            console.log(match,m)
           // await UpdateVariable(m, match.split(':')[1])
            console.log(m)
         }
      })
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
      let {PASSWORD,REACT,WARNCOUND,ALIVE_DATA,U_STATUS,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PERFIX,WELCOME_SET,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,MENSION_TEXT,LANG,OWNER,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,INSTAGRAM,GIT,CAPTION,SUDO} = await getVar();
let content = `PASSWORD :  ${PASSWORD}
   REACT  :  ${REACT}
   WARNCOUND :  ${WARNCOUND}
   ALIVE_DATA :  ${ALIVE_DATA}
   U_STATUS :  ${U_STATUS}
   READ_CHAT :  ${READ_CHAT}
   BOT_INFO :  ${BOT_INFO}
   BGMBOT :  ${BGMBOT}
   WORKTYPE :  ${WORKTYPE}
   PM_BLOCK :  ${PM_BLOCK} 
   PERFIX :  ${PERFIX}
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
return message.reply(content)
})