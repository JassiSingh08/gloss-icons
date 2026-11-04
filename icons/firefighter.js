const p = require('../src/parts/person');

const P = p.pose({ cy: 46, r: 21, sy: 66, crown: 'M19 44 L18 40 C8 41 0 40 0 36 C0 31 10 30 19 31 C18 11 31 0 48 0 C65 0 78 11 77 31 C86 30 96 31 96 36 C96 40 88 41 78 40 L77 44' });
module.exports = {
  id: 'firefighter',
  name: 'Firefighter',
  emoji: '🧑‍🚒',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['firefighter', 'fireman', 'rescue', 'fire', 'helmet'],
  tone: 'black',
  body: P.body,
  shine: [...P.pt(28, 14), -45],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.radial('helmet', 'red', 0.3, 0.2);
    const r = c.ramp('red');
    const gold = c.linear('shield', 'gold', [0, 0, 1, 1], 0, 2);
    const hat = P.at(`<path d="M0 36 C0 31 10 30 20 31 L76 31 C86 30 96 31 96 36 C96 41 86 42 76 40 Q48 36 20 40 C10 42 0 41 0 36 Z" fill="${c.linear('brim', 'red', [0, 0, 0, 1], 1, 2)}" stroke="${r[3]}" stroke-opacity=".7" stroke-width="1.8"/>
      <path d="M19 33 C18 11 31 0 48 0 C65 0 78 11 77 33 Q48 29 19 33 Z" fill="${shell}" stroke="${r[3]}" stroke-opacity=".7" stroke-width="1.8"/>
      <path d="M48 0 C46 10 46 20 47 30" stroke="${r[2]}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M38 12 L58 12 L58 26 Q48 33 38 26 Z" fill="${gold}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1.4"/>
      <path d="M48 15 C46 18 44 20 45 23 C46 25.5 50 25.5 51 23 C52 20 49 18 48 15 Z" fill="${r[1]}"/>`);
    const coat = `<path d="M18 72 L78 72 M17.6 78 L78.4 78" stroke="#D9F06A" stroke-width="3.6"/><path d="M18 75 L78 75" stroke="#D9DCE8" stroke-width="2"/>
      <path d="M48 62 L48 84" stroke="#05050A" stroke-opacity=".6" stroke-width="1.6"/>`;
    return p.bust(c, P, { garment: 'black', neck: 'crew', hair: 'crop', color: 'brown', under: coat, face: p.face.calm(), over: hat });
  },
};
