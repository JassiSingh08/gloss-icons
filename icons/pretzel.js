// The holes are cut out of the body (wound the other way), so the outline runs round them too.
const outer = 'M48 30 C54 20 64 16 72 18 C82 20 87 30 86 42 C85 56 76 68 64 75 C58 79 52 81 48 81 C44 81 38 79 32 75 C20 68 11 56 10 42 C9 30 14 20 24 18 C32 16 42 20 48 30 Z';
const holes = [
  'M31 29 C25 28 20 32 20 40 C20 48 28 54 36 56 C40 55 42 50 42 44 C42 36 37 30 31 29 Z',
  'M65 29 C59 30 54 36 54 44 C54 50 56 55 60 56 C68 54 76 48 76 40 C76 32 71 28 65 29 Z',
  'M48 62 C45 64 40 67.5 38.5 70.5 C42 72.5 54 72.5 57.5 70.5 C56 67.5 51 64 48 62 Z',
];
const body = [outer, ...holes].join(' ');
module.exports = {
  id: 'pretzel',
  name: 'Pretzel',
  emoji: '🥨',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['pretzel', 'snack', 'salty', 'bakery', 'twisted'],
  tone: 'brown',
  body,
  shine: [17, 30, -60],
  shineSize: [6, 2.8],
  draw(c) {
    c.def(`<radialGradient id="${c.id('dough')}" cx="0.35" cy="0.25" r="0.95"><stop offset="0" stop-color="#F2AE68"/><stop offset="0.35" stop-color="#BD5E1C"/><stop offset="0.75" stop-color="#6E2A06"/><stop offset="1" stop-color="#2E1003"/></radialGradient>`);
    c.def(`<linearGradient id="${c.id('strand')}" gradientUnits="userSpaceOnUse" x1="40" y1="50" x2="51" y2="54"><stop offset="0" stop-color="#E89450"/><stop offset="0.5" stop-color="#B0521A"/><stop offset="1" stop-color="#5A2206"/></linearGradient>`);
    const salt = (x, y, a) => `<rect x="${x - 1.4}" y="${y - 1.1}" width="2.8" height="2.2" rx=".6" fill="#FFFDF5" transform="rotate(${a} ${x} ${y})"/>`;
    return `<path d="${body}" fill="url(#${c.id('dough')})"/>
      <path d="M52.5 38 C50 46 47 56 44 66" stroke="#2E1003" stroke-opacity=".4" stroke-width="9" stroke-linecap="round" fill="none" transform="translate(2.4 1.4)"/>
      <path d="M55 31 C50 44 46 56 42.5 66 C41.5 69 40.5 72 39.5 75" stroke="url(#${c.id('strand')})" stroke-width="9.5" stroke-linecap="round" fill="none"/>
      <path d="M51.5 32.5 C47 44 43 55 39.5 65" stroke="#FFC98C" stroke-opacity=".6" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      <path d="M17 28 C21 22 28 21 34 23 M60 22 C66 19 74 20 79 26" stroke="#FFC98C" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      ${salt(25, 22, 20)}${salt(14, 46, -10)}${salt(70, 22, -15)}${salt(81, 37, 30)}${salt(22, 64, 15)}${salt(73, 64, -25)}${salt(48, 37, 40)}${salt(56, 48, 10)}${salt(30, 72, -30)}${salt(64, 74, 20)}`;
  },
};
