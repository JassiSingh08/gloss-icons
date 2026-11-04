const b = require('../src/parts/face-b');

const AT = { y: 37, sc: 0.8 };
const { body } = b.skull({ radial: () => '' }, AT);
const BONES = [[[17, 60], [79, 82]], [[79, 60], [17, 82]]];
module.exports = {
  id: 'skull-and-crossbones',
  name: 'Skull And Crossbones',
  emoji: '☠️',
  group: 'Smileys & Emotion',
  subgroup: 'face-negative',
  tags: ['danger', 'poison', 'pirate', 'skull', 'deadly'],
  tone: 'ivory',
  body,
  shine: [34, 24, -45],
  shineSize: [5.5, 2.6],
  draw(c) {
    const bone = b.glow(c, 'bones', 'ivory', 34, 56, 46);
    const edge = '#6E61A8';
    const knobs = ([[x1, y1], [x2, y2]]) => {
      const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
      const ux = dx / len, uy = dy / len;
      return [[x1, y1, -1], [x2, y2, 1]].flatMap(([x, y, s]) => [1, -1].map((k) => [+(x + s * ux * 1.5 - uy * k * 3.4).toFixed(2), +(y + s * uy * 1.5 + ux * k * 3.4).toFixed(2), 4.4]));
    };
    const draw = (paint, w, extra) => BONES.map((bn) => `<path d="M${bn[0]} L${bn[1]}" stroke="${paint}" stroke-width="${w}" stroke-linecap="round"/>${knobs(bn).map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r + extra}" fill="${paint}"/>`).join('')}`).join('');
    return draw(edge, 8.6, 1.2) + draw(bone, 6.2, 0) + b.skull(c, AT).art;
  },
};
