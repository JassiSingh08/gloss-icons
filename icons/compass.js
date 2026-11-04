const g = require('../src/parts/glass');
const body = 'M48 18 A32 32 0 1 1 47.99 18 Z';
module.exports = {
  id: 'compass',
  name: 'Compass',
  emoji: '🧭',
  group: 'Travel & Places',
  subgroup: 'place-map',
  tags: ['compass', 'navigation', 'direction', 'explore', 'north'],
  tone: 'gold',
  body,
  shine: [32, 28, -40],
  draw(c) {
    const case_ = c.radial('a', 'gold', 0.32, 0.25);
    const face = c.radial('face', 'white', 0.5, 0.65);
    const red = c.linear('red', 'red', [0, 0, 1, 1], 0, 2);
    const steel = c.linear('steel', 'silver', [0, 0, 1, 1], 0, 2);
    const ticks = [];
    for (let i = 0; i < 16; i++) {
      const t = (i * Math.PI) / 8;
      const r0 = i % 4 ? 22 : 19.5;
      ticks.push(`M${g.n(48 + r0 * Math.sin(t))} ${g.n(50 - r0 * Math.cos(t))} L${g.n(48 + 24 * Math.sin(t))} ${g.n(50 - 24 * Math.cos(t))}`);
    }
    return `<path d="M43 18.5 L43 15 Q43 11 48 11 Q53 11 53 15 L53 18.5" fill="none" stroke="#5E3A00" stroke-opacity=".55" stroke-width="5"/>
      <path d="M43 18.5 L43 15 Q43 11 48 11 Q53 11 53 15 L53 18.5" fill="none" stroke="#FFC21A" stroke-width="3"/>
      <path d="${body}" fill="${case_}"/>
      <circle cx="48" cy="50" r="26" fill="${face}" stroke="#C98500" stroke-width="1.4"/>
      <path d="${ticks.join(' ')}" stroke="#6E61A8" stroke-width="1.6" stroke-linecap="round"/>
      <g transform="rotate(30 48 50)">
        <path d="M48 29 L54 50 L42 50 Z" fill="${red}"/>
        <path d="M48 71 L54 50 L42 50 Z" fill="${steel}"/>
        <path d="M48 29 L48 71" stroke="#000" stroke-opacity=".15" stroke-width="1"/>
      </g>
      <circle cx="48" cy="50" r="3" fill="${case_}" ${g.edge('#5E3A00', 1, 0.6)}/>`;
  },
};
