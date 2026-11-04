const g = require('../src/parts/garment');

const body = 'M34 15 Q48 23 62 15 L76.5 20.5 Q79 21.5 80.5 24 L87 36 L74.5 43.5 L70 37.5 L70 80 Q70 83 67 83 L29 83 Q26 83 26 80 L26 37.5 L21.5 43.5 L9 36 L15.5 24 Q17 21.5 19.5 20.5 Z';

module.exports = {
  id: 't-shirt',
  name: 'T-Shirt',
  emoji: '👕',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['shirt', 'tee', 'casual', 'clothes', 'summer'],
  tone: 'blue',
  body,
  shine: [20, 28, -55],
  shineSize: [5, 2],
  draw(c) {
    const cloth = c.radial('a', 'blue', 0.3, 0.2);
    const b = c.ramp('blue');
    return `<path d="${body}" fill="${cloth}"/>
      <path d="M34 15 Q48 23 62 15 L59 14.2 Q48 19.5 37 14.2 Z" fill="${b[3]}" opacity=".7"/>
      <path d="M34 15 Q48 23 62 15" fill="none" stroke="${b[0]}" stroke-opacity=".6" stroke-width="1.4"/>
      ${g.stitch('M35.5 18.5 Q48 26 60.5 18.5', '#fff', 0.45)}
      ${g.fold('M26 37.5 L26.5 29 M70 37.5 L69.5 29', b[3], 0.5, 1.4)}
      ${g.stitch('M11.5 34 L22.5 40.5 M84.5 34 L73.5 40.5 M27 79 L69 79', '#fff', 0.35)}
      ${g.fold('M36 50 Q44 58 40 72 M58 46 Q54 56 60 64', b[3], 0.3, 1.6)}`;
  },
};
