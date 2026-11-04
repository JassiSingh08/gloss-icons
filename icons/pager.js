const d = require('../src/parts/device');

const body = d.rr(12, 24, 72, 57, 9);

module.exports = {
  id: 'pager',
  name: 'Pager',
  emoji: '📟',
  group: 'Objects',
  subgroup: 'phone',
  tags: ['pager', 'beeper', 'message', 'retro', 'on call'],
  tone: 'navy',
  body,
  shine: [17, 34, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.linear('a', 'navy', [0, 0, 1, 1], 0, 2);
    const lcd = d.glass(c, 'lcd', ['#1F6B58', '#062019']);
    const btn = c.radial('btn', 'silver', 0.35, 0.3);
    const led = c.radial('led', 'red', 0.35, 0.3);
    return `<path d="M30 24 L30 18 Q30 15 33 15 L63 15 Q66 15 66 18 L66 24" fill="none" stroke="#080C3D" stroke-width="3.4"/>
      <path d="${body}" fill="${shell}"/>
      <path d="${d.rr(19, 31, 58, 28, 4)}" fill="${lcd}" stroke="#080C3D" stroke-opacity=".6" stroke-width="1"/>
      <path d="M25 40 L37 40 M42 40 L55 40 M60 40 L67 40 M25 49.5 L46 49.5 M51 49.5 L60 49.5" stroke="#9BF5E6" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M21 33 L75 33" stroke="#fff" stroke-opacity=".15" stroke-width="2"/>
      <circle cx="30" cy="70" r="4.6" fill="${btn}"/>
      <circle cx="44" cy="70" r="4.6" fill="${btn}"/>
      <rect x="54" y="66.5" width="16" height="7" rx="3.5" fill="${btn}"/>
      <circle cx="76" cy="69" r="2" fill="${led}"/>`;
  },
};
