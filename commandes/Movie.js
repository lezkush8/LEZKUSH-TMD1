
const fetch = require('node-fetch');

module.exports = {
  name: 'movie',
  aliases: ['film', 'movieinfo'],
  category: 'search',
  desc: 'Tafuta taarifa ya movie kupitia OMDB API',
  use: '.movie [jina la movie]',
  async exec(m, sock, args) {
    if (!args[0]) return m.reply('🎬 Tafadhali andika jina la movie. Mfano:\n.movie Inception');

    const query = args.join(' ');
    const omdbKey = 'bcbea2e0'; // Key yako

    try {
      const res = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${omdbKey}`);
      const data = await res.json();

      if (data.Response === 'False') return m.reply('❌ Movie haikupatikana. Jaribu jina sahihi.');

      const msg = \`🎬 *\${data.Title}* (\${data.Year})
⭐ IMDb: \${data.imdbRating}
🎭 Genre: \${data.Genre}
📜 Plot: \${data.Plot}
📽️ Trailer: https://www.youtube.com/results?search_query=\${encodeURIComponent(data.Title)}+trailer

🤖 Powered by 𝐋𝚵𝚭𝐊𝐔𝐒𝚮-𝚻𝚳𝐃\`;

      await sock.sendMessage(m.chat, {
        image: { url: data.Poster },
        caption: msg
      }, { quoted: m });
    } catch (e) {
      console.error(e);
      m.reply('⚠️ Error kutafuta movie. Jaribu tena baadae.');
    }
  }
};
