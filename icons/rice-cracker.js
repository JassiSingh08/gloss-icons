// A soy-glazed senbei: a flat disc with a clear edge and a band of nori wrapped across the middle,
// flatter and lighter on top than the moon cake.
const d = require('../src/parts/dish');
const T = 9;
const top = Array.from({ length: 40 }, (_, i) => [48 + 35 * Math.cos((i * Math.PI) / 20), 47 + 21 * Math.sin((i * Math.PI) / 20)]);
const body = d.hull([...top, ...top.map(([x, y]) => [x, y + T])]);
module.exports = {
  id: 'rice-cracker',
  name: 'Rice Cracker',
  emoji: '🍘',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['senbei', 'rice cracker', 'snack', 'japanese', 'crunchy'],
  tone: 'brown',
  body,
  shine: [25, 38, -38],
  draw(c) {
    c.def(`<radialGradient id="${c.id('glaze')}" cx="0.32" cy="0.25" r="0.9"><stop offset="0" stop-color="#FFD9A0"/><stop offset="0.4" stop-color="#D98A3A"/><stop offset="0.8" stop-color="#8E4410"/><stop offset="1" stop-color="#4A1C04"/></radialGradient>`);
    c.def(`<clipPath id="${c.id('cut')}"><path d="${body}"/></clipPath>`);
    const side = c.linear('side', 'brown', [0, 0, 1, 0], 1, 3);
    const nori = c.linear('nori', 'black', [0, 0, 1, 0], 1, 3);
    const pit = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.65}" fill="#6E2C06" opacity=".5"/>`;
    return `<path d="${body}" fill="${side}"/>
      <path d="${d.ellipse(48, 47, 35, 21)}" fill="url(#${c.id('glaze')})"/>
      <path d="${d.ellipse(48, 47, 30, 17)}" fill="none" stroke="#FFE2B0" stroke-opacity=".35" stroke-width="1.4"/>
      ${pit(26, 44, 1.8)}${pit(32, 36, 1.5)}${pit(30, 54, 1.6)}${pit(66, 40, 1.5)}${pit(70, 52, 1.8)}${pit(62, 58, 1.3)}${pit(24, 50, 1.2)}
      <g clip-path="url(#${c.id('cut')})">
        <path d="M38 10 L58 10 L58 90 L38 90 Z" fill="${nori}"/>
        <path d="M42 22 L42 80 M48 20 L48 82 M54 22 L54 80" stroke="#3A5A44" stroke-opacity=".5" stroke-width="1"/>
        <path d="M38 47 C38 58 38 64 38 66 M58 47 L58 66" stroke="#000" stroke-opacity=".3" stroke-width="1"/>
      </g>`;
  },
};
