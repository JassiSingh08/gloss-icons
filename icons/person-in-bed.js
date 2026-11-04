const F = require('../src/parts/figure');

// Tucked in under a quilt, head on the pillow, asleep; a wooden headboard behind.
module.exports = {
  id: 'person-in-bed',
  name: 'Person In Bed',
  emoji: '🛌',
  group: 'People & Body',
  subgroup: 'person-resting',
  tags: ['bed', 'sleep', 'night', 'tired', 'rest'],
  tone: 'blue',
  shine: [20, 34, -60], shineSize: [5, 2.2],
  ...F.build((c) => {
    const wood = c.linear('wood', 'brown', [0, 0, 1, 1], 0, 2);
    const quilt = F.cloth(c, 'blue');
    const pillow = c.radial('pillow', 'white', 0.3, 0.2);
    const H = F.head(c, { at: [32, 46], r: 12.5, hair: 'curly', color: 'brown', face: F.face.closed() });
    return {
      art: `<path d="M12 84 L12 34 Q12 28 18 28 Q24 28 24 34 L24 84 Z" fill="${wood}" stroke="#331805" stroke-width="1.3"/>
        <rect x="80" y="60" width="7" height="24" rx="3" fill="${wood}" stroke="#331805" stroke-width="1.3"/>
        <rect x="18" y="64" width="68" height="10" rx="3" fill="${c.linear('mat', 'white', [0, 0, 0, 1], 1, 2)}" stroke="#8C83AD" stroke-width="1.1"/>
        <path d="M18 56 C18 48 30 46 40 48 C46 49 48 52 48 56 C48 62 40 63 30 63 C22 63 18 62 18 56 Z" fill="${pillow}" stroke="#8C83AD" stroke-width="1.1"/>`
        + H.back + H.front
        + `<path d="M38 58 C44 50 56 48 66 52 C74 55 82 56 86 58 L86 70 Q60 74 36 70 Z" fill="${quilt}" stroke="#001E4D" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="M40 60 C50 56 58 56 64 58" stroke="#fff" stroke-opacity=".5" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <path d="M60 62 L84 62" stroke="#001E4D" stroke-opacity=".25" stroke-width="1.4"/>`,
      extra: `<path d="M50 20 L58 20 L50 29 L58 29 M62 10 L68 10 L62 17 L68 17" stroke="#9AA8FF" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    };
  }),
};
