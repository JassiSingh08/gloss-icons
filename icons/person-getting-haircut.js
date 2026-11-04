const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Sat under a striped barber's cape while a hand snips at the hair with scissors.
const P = p.pose({ cx: 44, cy: 42, r: 22, sw: 33, sy: 66, hair: 'short' });
module.exports = {
  id: 'person-getting-haircut',
  name: 'Person Getting Haircut',
  emoji: '💇',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['haircut', 'barber', 'salon', 'hairdresser', 'trim'],
  tone: 'white',
  ...p.spec(P, 'white'),
  ...F.build((c) => {
    const stripes = '<path d="M26 66 L22 84 M36 62 L34 84 M52 62 L54 84 M62 66 L66 84" stroke="#3D4FD6" stroke-opacity=".55" stroke-width="3"/>';
    const steel = c.linear('steel', 'silver', [0, 0, 1, 1], 0, 2);
    const scissors = `<path d="M66 18 L82 30 M66 30 L82 18" stroke="#3A3E52" stroke-width="4.2" stroke-linecap="round"/><path d="M66 18 L82 30 M66 30 L82 18" stroke="${steel}" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="84" cy="16" r="4" fill="none" stroke="#E3120B" stroke-width="2.6"/><circle cx="84" cy="32" r="4" fill="none" stroke="#E3120B" stroke-width="2.6"/>`;
    return {
      art: F.bust(c, P, { garment: 'white', neck: 'crew', hair: 'short', color: 'auburn', under: stripes,
        face: f.brows.raised({ y: 37, sw: 3.6 }) + f.eyes.oval({ y: 50, rx: 3.6, ry: 5 }) + f.mouth.o({ y: 69, rx: 3.6, ry: 4.4 }) })
        + scissors + F.limb(c, [[95, 46], [92, 34], [89, 25]], 8.4, 'purple', 7.4) + F.hand(c, 88, 26, { dir: -110, thumb: 1 })
        + '<path d="M60 26 L62 30 M56 30 L59 32" stroke="#6E2208" stroke-width="2" stroke-linecap="round"/>',
    };
  }),
};
