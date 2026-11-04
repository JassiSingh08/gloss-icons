const g = require('../src/parts/garment');

const body = 'M36.5 12 L40 12 Q42 23 48 25 Q54 23 56 12 L59.5 12 Q60.5 23 62 29 Q63.5 36 60.5 43 Q72 58 81.5 77 Q83.5 82 79 83 Q48 87.5 17 83 Q12.5 82 14.5 77 Q24 58 35.5 43 Q32.5 36 34 29 Q35.5 23 36.5 12 Z';

module.exports = {
  id: 'dress',
  name: 'Dress',
  emoji: '👗',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['dress', 'fashion', 'party', 'gown', 'date night'],
  tone: 'teal',
  body,
  shine: [37, 31, -80],
  shineSize: [5, 1.8],
  draw(c) {
    const cloth = c.radial('a', 'teal', 0.3, 0.2);
    const belt = c.linear('belt', 'gold', [0, 0, 0, 1], 0, 2);
    const t = c.ramp('teal');
    return `<path d="${body}" fill="${cloth}"/>
      <path d="M34.5 39 Q48 43 61.5 39 L60.5 44 Q48 48 35.5 44 Z" fill="${belt}"/>
      ${g.fold('M42 46 Q36 64 28 83 M48 47 Q47 66 46 85 M54 46 Q60 64 68 83', t[3], 0.45, 1.8)}
      ${g.fold('M38 47 Q30 64 22 82 M58 47 Q64 62 74 82', t[0], 0.35, 1.2)}
      ${g.fold('M48 25 Q46 32 48 39', t[3], 0.35, 1.3)}`;
  },
};
