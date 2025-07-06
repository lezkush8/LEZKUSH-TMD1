const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
          *𝐋𝚵𝚭𝐊𝐔𝐒𝚮-𝚻𝚳𝐃 BOT INFO* 
❒───────────────────❒

*GITHUB LINK*
> https://github.com/Lezkushtech/LEZKUSH_TMD

*CONTACT OWNER LEZKUSH*
> ★ https://wa.me/96878856800
*second owner Timnasax*
> ★ hhtps://wa.me/255784766591
*WHATSAPP CHANNEL*
>https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31
⁠
╭───────────────────❒
 │❒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
 │❒⁠⁠⁠⁠ *DEV1* : *𝚻𝚰𝚳𝚴𝚫𝐒𝚫-𝚻𝚳𝐃*
 │❒⁠⁠⁠⁠ *DEV2* : *𝐋𝚵𝚭𝐊𝐔𝐒𝚮-𝚻𝚳𝐃*
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
         *ᵖᵒʷᵉʳ ᵇʸ ˡᵉᶻᵏᵘˢʰ*

❒───────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *ᵗⁱᵐⁿᵃˢᵃ ᵗᵉᶜʰ*, déveloper  ᵗⁱᵐⁿᵃˢᵃ ᵗᵉᶜʰ" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *ᵗⁱᵐⁿᵃˢᵃ ᵗᵉᶜʰ*, déveloper ᵗⁱᵐⁿᵃˢᵃ ᵗᵉᶜʰ" }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
