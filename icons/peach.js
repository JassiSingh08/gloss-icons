// Slightly taller than wide with a soft point at the bottom, and a crease that runs right through,
// so it reads as a peach rather than an apple.
const body = 'M47 26 C55 17 80 20 80 47 C80 67 66 80 51 84 C49.5 84.5 48.5 84.5 47 84 C30 80 16 67 16 47 C16 21 39 18 47 26 Z';
module.exports = {
  id: 'peach',
  name: 'Peach',
  tags: ['fruit', 'cheeky', 'flirty', 'summer', 'sweet'],
  tone: 'orange',
  body,
  shine: [27, 36, -45],
  draw(c) {
    c.def(`<radialGradient id="${c.id('skin')}" cx="0.3" cy="0.28" r="0.95"><stop offset="0" stop-color="#FFF3C9"/><stop offset="0.3" stop-color="#FFB278"/><stop offset="0.66" stop-color="#FF6A6A"/><stop offset="1" stop-color="#A3163E"/></radialGradient>`);
    const leaf = c.radial('leaf', 'green', 0.3, 0.2);
    return `<path d="M47.5 27 C47 22 46.5 19 45 16.5" stroke="#6E3A14" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="${body}" fill="url(#${c.id('skin')})"/>
      <path d="M48 28 C39 40 39 64 49 83" stroke="#B0283E" stroke-opacity=".6" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      <path d="M51 30 C44 43 44 62 52 77" stroke="#FFE2BC" stroke-opacity=".4" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M47 22 C52 13 64 9 78 9.5 C72 18 60 24 47 22 Z" fill="${leaf}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="M49 21 C57 16 66 12.5 75 10.5" stroke="#A6F07A" stroke-opacity=".7" stroke-width="1" fill="none"/>`;
  },
};
