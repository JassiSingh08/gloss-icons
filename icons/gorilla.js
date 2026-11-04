const a = require('../src/parts/animal');

// Front on, standing on its knuckles: huge shoulders, a small head set low between them.
const body = a.mirror([
  [48, 9.5], [42, 10.5], [36.5, 15.5], [35, 22], [30, 24], [21, 29], [15.5, 38], [13.5, 50], [13, 64], [13.5, 76], [15, 82],
  [21, 84], [26.5, 82.5], [27.5, 74], [29, 66], [33, 70], [34.5, 78], [37, 83.5], [43, 84.5], [47, 79], [48, 72],
]);
const FACE = ['#8A8A9A', '#4E4E5E', '#2A2A36', '#101016'];
module.exports = {
  id: 'gorilla',
  name: 'Gorilla',
  emoji: '🦍',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['gorilla', 'ape', 'silverback', 'strong', 'jungle'],
  tone: 'black',
  body,
  shine: [24, 33, -45],
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#05050A';
    const face = a.mirror([[48, 18.5], [41.5, 19], [37, 22.5], [36.5, 29.5], [38.5, 36], [42, 40.5], [48, 42]]);
    return `<path d="${body}" fill="${c.radial('a', 'black', 0.36, 0.2)}"/>
      ${a.clip(c, 'chest', body, `<path d="${a.mirror([[48, 44], [42, 43], [36, 46], [35, 53], [39, 58], [48, 59]])}" fill="${a.custom(c, 'chest', FACE, 0.4, 0.2)}" opacity=".85"/>
        <path d="M28 33 Q26 52 28 74 M68 33 Q70 52 68 74" stroke="#05050A" stroke-width="1.6" fill="none" opacity=".7"/>`)}
      <path d="${face}" fill="${a.custom(c, 'face', FACE, 0.4, 0.2)}"/>
      ${a.line('M37.5 24.5 Q42.5 21 48 24 Q53.5 21 58.5 24.5', '#05050A', 2.6)}
      ${a.eyes(27.5, 5, { rx: 2.2, ry: 2.2, lid: 0.4, tilt: 0.3, ink: '#3A1A08' })}
      <path d="M44 32 Q48 29.5 52 32 Q52 34.5 48 35 Q44 34.5 44 32 Z" fill="${ink}" opacity=".85"/>
      ${a.line('M43 38 Q48 39.5 53 38', ink, 1.3)}
      ${a.line('M20 80 L20 83 M23.5 80 L23.5 83 M72.5 80 L72.5 83 M76 80 L76 83', '#6E6E85', 0.9, ' opacity=".7"')}`;
  },
};
