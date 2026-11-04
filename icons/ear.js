const s = require('../src/parts/skin');
// A left ear seen from the side: helix round the top and back, hollow bowl in the middle, lobe
// at the bottom. The flat left edge is where it meets the cheek.
const body = 'M48 10 C66 9 78 22 78 38 C78 50 72 57 66 63 C61 68 61 75 56 80 C51 85 41 85.5 37 79.5 C34 74.5 36 69.5 38.5 65.5 C33.5 58 27.5 52 26 42 C24 26 33 11 48 10 Z';
const bowl = 'M43 35 C52 31.5 60 38 58 47 C56.5 54 50.5 59 45.5 56.5 C41.5 54.5 46 48.5 41.5 44 C39 41 39.5 36.5 43 35 Z';
const detail = (c) => `<path d="${bowl}" fill="#B85F00" opacity=".4"/>
  <path d="M43.5 38 C50 36 55 41 54 47" stroke="#6B3A00" stroke-opacity=".25" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  ${s.crease('M36 31 C38 19 56 16 64.5 25 C71 32 69.5 44 63 50.5 C58 55.5 57 61 53.5 67', 2.4)}
  ${s.crease('M38 53 C41.5 51.5 44.5 53.5 43.5 57.5', 1.6)}`;
module.exports = {
  id: 'ear',
  name: 'Ear',
  emoji: '👂',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['ear', 'listen', 'hear', 'sound', 'gossip'],
  tone: 'amber',
  body,
  shine: [34, 22, -50],
  shineSize: [6, 2.6],
  bowl,
  detail,
  draw(c) {
    return `<path d="${body}" fill="${s.fill(c)}"/>${detail(c)}`;
  },
};
