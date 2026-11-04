const f = require('../src/parts/face');
const p = require('../src/parts/person');

// The helmet is the head of the silhouette; the face sits inside behind the visor glass.
const H = p.pose({ cy: 38, r: 28, sw: 35, sy: 64, neck: 0.72 });
const P = p.pose({ cy: 40, r: 19 });
module.exports = {
  id: 'astronaut',
  name: 'Astronaut',
  emoji: '🧑‍🚀',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['astronaut', 'space', 'rocket', 'cosmonaut', 'nasa'],
  tone: 'white',
  body: H.body,
  shine: [30, 22, -45],
  shineSize: [6, 2.6],
  draw(c) {
    const suit = c.radial('suit', 'white', 0.3, 0.15);
    const w = c.ramp('white');
    const shell = c.radial('shell', 'white', 0.3, 0.2);
    const glass = c.radial('glass', 'navy', 0.4, 0.3);
    return `<path d="${H.torso}" fill="${suit}"/>
      <path d="M20 70 L30 66 L30 84 M76 70 L66 66 L66 84" stroke="${w[3]}" stroke-opacity=".35" stroke-width="1.6" fill="none"/>
      <rect x="62" y="70" width="11" height="7" rx="1" fill="#0C8CF0"/><path d="M62 72.4 L73 72.4 M62 74.8 L73 74.8" stroke="#E3120B" stroke-width="1.1"/>
      <path d="M26 64 Q48 72 70 64 L70 59 Q48 67 26 59 Z" fill="${c.linear('ring', 'silver', [0, 0, 0, 1], 1, 3)}"/>
      <circle cx="48" cy="38" r="28" fill="${shell}"/>
      <circle cx="48" cy="40" r="22" fill="${glass}" stroke="${w[3]}" stroke-width="1.6"/>
      ${p.head(c, P)}${P.at(p.face.calm())}
      <circle cx="48" cy="40" r="22" fill="#5BC2FF" opacity=".18"/>
      <path d="M33 30 C36 24 42 21 48 20.5" stroke="#fff" stroke-opacity=".75" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <circle cx="73" cy="44" r="3" fill="#E3120B"/><circle cx="23" cy="44" r="3" fill="#0C8CF0"/>`;
  },
};
