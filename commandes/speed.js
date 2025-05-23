const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const set = require(__dirname + '/../set');
moment.tz.setDefault('' + set.TZ);
zokou({
  'nomCom': 'ping',
  'categorie': 'General'
}, async (_0x707b9d, _0x307f4b, _0x4f3966) => {
  let {
    ms: _0x18154c
  } = _0x4f3966;
  const {
    time: _0x674b36,
    date: _0x389885
  } = {
    'time': moment().format('HH:mm:ss'),
    'date': moment().format("DD/MM/YYYY")
  };
  const _0x448cd1 = Math.floor(Math.random() * 0x64) + 0x1;
  try {
    await _0x307f4b.sendMessage(_0x707b9d, {
      'audio': {
        'url': "https://files.catbox.moe/11f9pe.mp3"
      },
      'mimetype': "audio/mp4",
      'ptt': true,
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363332512801418@newsletter",
          'newsletterName': "╭𝐋𝚵𝚭𝐊𝐔𝐒𝚮-𝚻𝚳𝐃",
          'serverMessageId': 0x8f
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "𝐋𝚵𝚭𝐊𝐔𝐒𝚮-𝚻𝚳𝐃",
          'body': "⭐ Pong: " + _0x448cd1 + "ms\n📅 *Date:* " + _0x389885 + "\n⏰ *Time:* " + _0x674b36,
          'thumbnailUrl': "https://files.catbox.moe/bsvq5j.jpg",
          'mediaType': 0x1,
          'renderSmallThumbnail': true
        }
      }
    }, {
      'quoted': _0x18154c
    });
  } catch (_0x163c20) {
    console.log("❌ Ping Command Error: " + _0x163c20);
    repondre("❌ Error: " + _0x163c20);
  }
})
