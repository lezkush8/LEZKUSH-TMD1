const {
  zokou
} = require(__dirname + "/../framework/zokou");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "menu",
  'categorie': 'Menu'
}, async (_0xcecdf2, _0x675836, _0x3a0a85) => {
  let {
    ms: _0x82fe80,
    repondre: _0x5a9f98,
    prefixe: _0x5e8575,
    nomAuteurMessage: _0x39d094,
    mybotpic: _0x342705
  } = _0x3a0a85;
  let {
    cm: _0x44be76
  } = require(__dirname + "/../framework/zokou");
  let _0x32e970 = {};
  let _0x4d0c3a = "public";
  if (s.MODE.toLowerCase() !== "yes") {
    _0x4d0c3a = "private";
  }
  _0x44be76.map(_0x2aa243 => {
    if (!_0x32e970[_0x2aa243.categorie]) {
      _0x32e970[_0x2aa243.categorie] = [];
    }
    _0x32e970[_0x2aa243.categorie].push(_0x2aa243.nomCom);
  });
  moment.tz.setDefault("Etc/GMT");
  const _0x513b7c = moment().format("HH:mm:ss");
  const _0x245f1e = moment().format("DD/MM/YYYY");
  let _0x3bd6e2 = "\n *Hello 𝐿𝛯𝛧𝛫𝑈𝑆𝛨 𝑇𝛭𝐷👋* : " + s.OWNER_NAME + "\n \n╭┈┈┈✧𝐿𝛯𝛧𝛫𝑈𝑆𝛨 𝑇𝛭𝐷✧┈┈┈┈⊷𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭\n┣◆ ╭┈┈┈┈┈┈┈┈┈┈┈⊷\n┣◆◎ 𝙾𝚠𝚗𝚎𝚛 : " + s.OWNER_NAME + "\n┣◆◎ 𝙿𝚛𝚎𝚏𝚒𝚡 : *[ " + s.PREFIXE + " ]*\n┣◆◎ 𝙼𝚘𝚍𝚎 : " + _0x4d0c3a + "\n┣◆◎ 𝚝𝚒𝚖𝚎 : " + _0x513b7c + "\n┣◆◎ 𝙳𝚊𝚝𝚎 : " + _0x245f1e + "\n┣◆◎ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┣◆◎ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 :𝐿𝛯𝛧𝛫𝑈𝑆𝛨 𝑇𝛭𝐷 \n┣◆◎ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : " + _0x44be76.length + "\n┣◆◎ 𝙼𝚎𝚖𝚘𝚛𝚢 : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n┣◆ ╰┈┈┈┈┈┈┈┈┈┈┈⊷\n╰┈┈┈✧𝐿𝛯𝛧𝛫𝑈𝑆𝛨 𝑇𝛭𝐷✧┈┈┈┈⊷ \n";
  let _0x2e5b67 = "sir⚔️";
  for (const _0x1e9281 in _0x32e970) {
    _0x2e5b67 += "\n⊷ " + _0x1e9281 + " ⊷••\n╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊷ 𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭\n┣◆╭┈┈┈┈┈┈┈┈┈┈┈⊷ ";
    for (const _0x24ad27 of _0x32e970[_0x1e9281]) {
      _0x2e5b67 += " \n┣◆ " + _0x24ad27;
    }
    _0x2e5b67 += "\n┣◆╰┈┈┈┈┈┈┈┈┈┈┈⊷\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊷";
  }
  _0x2e5b67 += "\n> ©𝐿𝛯𝛧𝛫𝑈𝑆𝛨 𝑇𝛭𝐷\n";
  try {
    const _0x27497c = _0x39d094 || message.from;
    await _0x675836.sendMessage(_0xcecdf2, {
      'text': _0x3bd6e2 + _0x2e5b67,
      'contextInfo': {
        'mentionedJid': [_0x27497c],
        'externalAdReply': {
          'title': "©𝐿𝛯𝛧𝛫𝑈𝑆𝛨 𝑇𝛭𝐷",
          'body': "𝚊𝚕𝚠𝚊𝚢𝚜•••𝚘𝚗𝚕𝚒𝚗𝚎!",
          'thumbnailUrl': "https://files.catbox.moe/bsvq5j.jpg",
          'sourceUrl': 'https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31',
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    });
  } catch (_0x125749) {
    console.error("Menu error: ", _0x125749);
    _0x5a9f98("🥵🥵 Menu error: " + _0x125749);
  }
});
