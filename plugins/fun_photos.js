//created by @inrl
const { inrl, dogphoto, lovephoto, cartoonphoto } = require('../lib');
const fs = require('fs');
const {getVar}=require('../lib/database/variable');

inrl({ pattern: ['sdog'], desc: "thus send random fun dog imgs, maybe bad",sucReact: "💗",  category: ["anime"],type: 'sticker'}, async (message, client) => {
    let data = await getVar();
    let {STICKER_DATA}=data.data[0];
    let ttimg = await dogphoto();
return await client.sendImageAsSticker(message.from, ttimg, message, { packname: STICKER_DATA.split(',')[0], author: STICKER_DATA.split(',')[1], categories: '🥵' })
})
inrl({ pattern: ['slove'], desc: "thus send random love photos,imgs, maybe bad",sucReact: "💗",  category: ["anime"],type: 'sticker'}, async (message, client) => {
    let data = await getVar();
    let {STICKER_DATA}=data.data[0];
    let ttimg = await lovephoto();
return await client.sendImageAsSticker(message.from, ttimg, message, { packname: STICKER_DATA.split(',')[0], author: STICKER_DATA.split(',')[1], categories: '🥵' })
})
inrl({ pattern: ['scartoon'], desc: "thus send random cartoon imgs, maybe bad",sucReact: "💗",  category: ["anime"],type: 'sticker'}, async (message, client) => {
    let data = await getVar();
    let {STICKER_DATA}=data.data[0];
    let ttimg = await cartoonphoto();
return await client.sendImageAsSticker(message.from, ttimg, message, { packname: STICKER_DATA.split(',')[0], author: STICKER_DATA.split(',')[1], categories: '🥵' })
})
