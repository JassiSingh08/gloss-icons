const L = require('../src/parts/leaf');
// A dull red bloom hanging its head on a bent stem, one petal already on the ground.
const cup = 'M33 30 C31 21 37 15 43 17.5 C45.5 12.5 50.5 12.5 53 17.5 C59 15 65 21 63 30 C63 42 57 50 48 50 C39 50 33 42 33 30 Z';
const PLACE = { rotate: 162, cx: 48, cy: 50, scale: 1.25, dx: 34 - 48, dy: 31 - 50 };
const body = L.xform(cup, PLACE);
module.exports = {
  id: 'wilted-flower',
  name: 'Wilted Flower',
  emoji: '🥀',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['wilted', 'dead', 'sad', 'heartbreak', 'rose'],
  tone: 'red',
  body,
  shine: [25, 44, -75],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.4" cy="0.25" r="0.95"><stop offset="0" stop-color="#C8707A"/><stop offset="0.35" stop-color="#94223A"/><stop offset="0.75" stop-color="#520A1E"/><stop offset="1" stop-color="#240010"/></radialGradient>`);
    const k = L.kit(c, 'olive');
    const crease = L.xform('M38 30 C42 36 54 36 58 30 M48 34 L48 48', PLACE);
    return `${k.stem('M62 84.5 C64 70 67 50 64 33 C61 20 46 15 38 23 C36 25 34.5 28 34 31', 3.6)}
      ${k.leaf([65.5, 54], [86, 68], 0.3, 0.3)}
      ${k.paint(L.xform('M48 50 C44 50 40 48 38 45 C42 47 45 47 48 46 C51 47 54 47 58 45 C56 48 52 50 48 50 Z', PLACE))}
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="${crease}" stroke="#2A0010" stroke-opacity=".45" stroke-width="1.4" stroke-linecap="round" fill="none"/>
      <path d="M68 84.5 C70 79 77 77 84 79.5 C81 84 74 86 68 84.5 Z" fill="url(#${c.id('a')})" stroke="#2A0010" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
