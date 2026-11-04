const p = require('../src/parts/person');

const BERET = 'M17 36 C10 30 14 14 34 10 C50 7 72 8 82 18 C88 24 84 32 78 36';
const P = p.pose({ cx: 50, cy: 42, r: 22, crown: `M18 44 ${BERET.replace('M17 36', 'L17 36')} L78 44` });
module.exports = {
  id: 'artist',
  name: 'Artist',
  emoji: '🧑‍🎨',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['artist', 'painter', 'paint', 'palette', 'creative'],
  tone: 'navy',
  body: P.body,
  shine: [...P.pt(30, 16), -20],
  shineSize: [5, 2],
  draw(c) {
    const felt = c.radial('beret', 'red', 0.3, 0.2);
    const beret = P.at(`<path d="${BERET} C70 31 30 31 17 36 Z" fill="${felt}" stroke="#3D0003" stroke-opacity=".6" stroke-width="1.8" stroke-linejoin="round"/><path d="M50 8 L52 2" stroke="#8A0006" stroke-width="3.4" stroke-linecap="round"/>`);
    const wood = c.radial('wood', 'sand', 0.35, 0.25);
    const blob = (x, y, pal) => `<circle cx="${x}" cy="${y}" r="2.8" fill="${c.radial(`p-${pal}`, pal, 0.35, 0.3)}"/>`;
    const palette = `<g transform="rotate(-18 28 72)"><path d="M14 72 C14 62 26 58 36 60 C46 62 46 70 40 72 C36 73 37 77 40 79 C42 83 36 86 28 85 C19 84 14 79 14 72 Z" fill="${wood}" stroke="#5C4420" stroke-opacity=".7" stroke-width="1.2"/>
      ${blob(20, 70, 'red')}${blob(26, 64.5, 'gold')}${blob(34, 64, 'blue')}${blob(22, 78, 'green')}${blob(30, 80, 'magenta')}</g>`;
    const brush = `<path d="M70 80 L80 52" stroke="#6E3A14" stroke-width="2.6" stroke-linecap="round"/><path d="M79.3 54 L80.6 50.4" stroke="#C9CCD6" stroke-width="3.2"/><path d="M80.6 50.4 L82.4 45" stroke="#0C8CF0" stroke-width="3.2" stroke-linecap="round"/>`;
    const stripes = `<path d="M17 72 L83 72 M16.5 79 L83.5 79" stroke="#fff" stroke-opacity=".5" stroke-width="2.6"/>`;
    return p.bust(c, P, { garment: 'navy', neck: 'crew', hair: 'crop', color: 'brown', under: stripes, face: p.face.calm(), over: beret })
      + p.sleeve(c, P, [[80, 63], [83, 78], [70.5, 81.5]], 10) + palette + brush + p.hand(c, 73, 74, { rot: 20, pose: 'fist' });
  },
};
