// Two wavy rashers side by side (they never overlap, so the outline stays clean), streaked with fat.
const d = require('../src/parts/dish');
const ANGLE = -30;
const AT = [48, 49];
const S = 1.02;
const wave = (y, a, dir = 1) => {
  let s = '';
  for (let k = 0; k < 4; k++) {
    const x0 = -40 + 20 * k;
    const b = (k % 2 ? -a : a) * 1.33;
    s += ` C${x0 + 7} ${y + b} ${x0 + 13} ${y + b} ${x0 + 20} ${y}`;
  }
  return s;
};
const waveBack = (y, a) => {
  let s = '';
  for (let k = 3; k >= 0; k--) {
    const x0 = -40 + 20 * k;
    const b = (k % 2 ? -a : a) * 1.33;
    s += ` C${x0 + 13} ${y + b} ${x0 + 7} ${y + b} ${x0} ${y}`;
  }
  return s;
};
const strip = (y) => `M-40 ${y}${wave(y, 3.4)} L40 ${y + 14}${waveBack(y + 14, 3.4)} Z`;
const line = (y) => `M-40 ${y}${wave(y, 3.4)}`;
const A = -16;
const B = 1.5;
module.exports = {
  id: 'bacon',
  name: 'Bacon',
  emoji: '🥓',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['bacon', 'breakfast', 'crispy', 'pork', 'brunch'],
  tone: 'ember',
  body: [d.place(strip(A), ANGLE, AT, S), d.place(strip(B), ANGLE, AT, S)],
  shine: [...d.placePt(-27, -14, ANGLE, AT, S), ANGLE - 10],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<radialGradient id="${c.id('meat')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#FF9A7A"/><stop offset="0.35" stop-color="#D4381E"/><stop offset="0.75" stop-color="#7E1404"/><stop offset="1" stop-color="#3D0700"/></radialGradient>`);
    const streaks = (y) => `<path d="${line(y + 4)}" stroke="#FFE2C8" stroke-width="2.8"/>
      <path d="${line(y + 9.5)}" stroke="#FFD0B0" stroke-opacity=".85" stroke-width="1.6"/>`;
    return `<path d="${d.place(strip(A), ANGLE, AT, S)} ${d.place(strip(B), ANGLE, AT, S)}" fill="url(#${c.id('meat')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})" fill="none" stroke-linecap="round">${streaks(A)}${streaks(B)}</g>`;
  },
};
