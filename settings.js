const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=fdMn2QBI#TGsC3ypBFJ8rGRmozQ6sqcWbuR7iuC_o3D9NidSZb0s' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94741838636' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? '‌👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4obUywjLg92Heg2P83jtCkR1hJ5lzxuPzvw&s' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
PAIR: 'https://vajiraqrveb-1d064bcd8502.herokuapp.com/code?number=',       
ALIVE:  process.env.ALIVE  || 'https://wa.me/94741838636?text=@_Hi_SITHU_BHH_🤭🫶'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
