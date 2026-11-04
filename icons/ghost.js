const f = require('../src/parts/face');

const body = 'M48 11 C67 11 78 25 78 44 L78 73 Q78 81 72 78.5 Q67 76.5 64 80 Q59 85 54 80 Q48 75 42 80 Q37 85 32 80 Q29 76.5 24 78.5 Q18 81 18 73 L18 44 C18 25 29 11 48 11 Z';
module.exports = {
  id: 'ghost',
  name: 'Ghost',
  emoji: '👻',
  group: 'Smileys & Emotion',
  subgroup: 'face-costume',
  tags: ['ghost', 'boo', 'spooky', 'halloween', 'playful'],
  tone: 'white',
  body,
  shine: [30, 25, -45],
  draw(c) {
    const ink = '#1E1638';
    const sheet = c.radial('a', 'white', 0.32, 0.2);
    const tongue = c.radial('tongue', 'pink', 0.4, 0.2);
    return `<path d="M20 50 Q11 46 9 37 Q14 37 21 42 Z M76 52 Q86 51 89 43 Q84 41 76 45 Z" fill="${c.ramp('white')[2]}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="${body}" fill="${sheet}"/>
      <ellipse cx="38" cy="40" rx="4.2" ry="6.2" fill="${ink}"/>${f.glint(36.6, 37.6, 1.2)}
      <path d="M53 41 Q58.5 35 64 41" stroke="${ink}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M37 55 Q48 60 60 53 Q59 66 48 66.5 Q38.5 66 37 55 Z" fill="${ink}"/>
      <path d="M46 61 L56 59.5 L57.5 67 Q57.5 73 52 73.5 Q47 74 46.5 68 Z" fill="${tongue}" stroke="#7A0026" stroke-opacity=".45" stroke-width="1"/>
      <path d="M51.5 61 L52.5 68" stroke="#9E0030" stroke-opacity=".45" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
