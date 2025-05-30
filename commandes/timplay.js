require("dotenv").config();
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
const BaseUrl = process.env.GITHUB_GIT;
const giftedapikey = process.env.BOT_OWNER;
function validateConfig() {
  if (!BaseUrl || !giftedapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();
zokou({
  'nomCom': "video1",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x462670, _0x1da3fd, _0x210808) => {
  const {
    ms: _0x1eda65,
    repondre: _0x79385e,
    arg: _0xdcd657
  } = _0x210808;
  if (!_0xdcd657[0]) {
    return _0x79385e("Please insert a song/video name.");
  }
  try {
    const _0x2f5e0e = await yts(_0xdcd657.join(" "));
    const _0xe64ccd = _0x2f5e0e.videos;
    if (_0xe64ccd.length === 0) {
      return _0x79385e("No videos found.");
    }
    const _0x3270a5 = _0xe64ccd[0].url;
    const _0x5049ee = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x3270a5) + "&apikey=" + giftedapikey);
    const _0x3cd318 = await _0x5049ee.json();
    if (_0x3cd318.status === 200 && _0x3cd318.success) {
      const _0x4b23ea = _0x3cd318.result.download_url;
      await _0x1da3fd.sendMessage(_0x462670, {
        'image': {
          'url': _0xe64ccd[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWLODER* 』\n┇ *Bot name : LEZKUSH TMD* \n┇ *Owner: Lezkush Tech* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x1eda65
      });
      await _0x1da3fd.sendMessage(_0x462670, {
        'video': {
          'url': _0x4b23ea
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x1eda65
      });
      _0x79385e("Downloaded Successfully ✅");
    } else {
      _0x79385e("Failed to download the video.");
    }
  } catch (_0x5ac173) {
    console.error("Error:", _0x5ac173);
    _0x79385e("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "play1",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x185642, _0x445306, _0x593a09) => {
  const {
    ms: _0x4eab12,
    repondre: _0x1e50ff,
    arg: _0x49beaf
  } = _0x593a09;
  if (!_0x49beaf[0]) {
    return _0x1e50ff("Please insert a song name.");
  }
  try {
    const _0x13f902 = await yts(_0x49beaf.join(" "));
    const _0x551fb6 = _0x13f902.videos;
    if (_0x551fb6.length === 0) {
      return _0x1e50ff("No audio found.");
    }
    const _0x1901ce = _0x551fb6[0].url;
    const _0x30ab77 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x1901ce) + "&apikey=" + giftedapikey);
    const _0x5af29f = await _0x30ab77.json();
    if (_0x5af29f.status === 200 && _0x5af29f.success) {
      const _0x1cd574 = _0x5af29f.result.download_url;
      await _0x445306.sendMessage(_0x185642, {
        'image': {
          'url': _0x551fb6[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWLODER* 』\n┇ *Bot name : LEZKUSH* \n┇ *Owner: lezkush Tech* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x4eab12
      });
      await _0x445306.sendMessage(_0x185642, {
        'audio': {
          'url': _0x1cd574
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x4eab12
      });
      _0x1e50ff("Downloaded Successfully ✅");
    } else {
      _0x1e50ff("Failed to download audio. Try again later.");
    }
  } catch (_0x5253c0) {
    console.error("Error:", _0x5253c0);
    _0x1e50ff("An error occurred while processing your request.");
  }
});

 
zokou({
  'nomCom': "song3",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x2d498b, _0xbb879f, _0x2f67cb) => {
  const {
    ms: _0x53f9e3,
    repondre: _0x206f35,
    arg: _0x563e23
  } = _0x2f67cb;
  if (!_0x563e23[0]) {
    return _0x206f35("Please insert a song name.");
  }
  try {
    const _0x51567f = await yts(_0x563e23.join(" "));
    const _0x1a4293 = _0x51567f.videos;
    if (_0x1a4293.length === 0) {
      return _0x206f35("No audio found.");
    }
    const _0x1aaff8 = _0x1a4293[0].url;
    const _0x4ea245 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x1aaff8) + "&apikey=" + giftedapikey);
    const _0x29c464 = await _0x4ea245.json();
    if (_0x29c464.status === 200 && _0x29c464.success) {
      const _0x6235db = _0x29c464.result.download_url;
      await _0xbb879f.sendMessage(_0x2d498b, {
        'image': {
          'url': _0x1a4293[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWLODER* 』\n┇ *Bot name : ANYWAY MD* \n┇ *Owner: Anyway Tech* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x53f9e3
      });
      await _0xbb879f.sendMessage(_0x2d498b, {
        'audio': {
          'url': _0x6235db
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x53f9e3
      });
      _0x206f35("Downloaded Successfully ✅");
    } else {
      _0x206f35("Failed to download audio. Try again later.");
    }
  } catch (_0x3b9f3c) {
    console.error("Error:", _0x3b9f3c);
    _0x206f35("An error occurred while processing your request.");
  }
})
