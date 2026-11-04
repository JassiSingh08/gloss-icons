const g = require('../src/parts/glass');
const body = 'M12 81 L35 36 Q37 32 41 32 L55 32 Q59 32 61 36 L84 81 Q84.5 84 81.5 84 L14.5 84 Q11.5 84 12 81 Z';
module.exports = {
  id: 'volcano',
  name: 'Volcano',
  emoji: '🌋',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['volcano', 'eruption', 'lava', 'mountain', 'hot'],
  tone: 'brown',
  body,
  shine: [33, 46, -62],
  shineSize: [5, 1.8],
  draw(c) {
    const rock = c.radial('a', 'brown', 0.35, 0.15);
    const lava = c.linear('lava', 'orange', [0, 0, 0, 1], 0, 2);
    const fire = c.radial('fire', 'flame', 0.5, 0.8);
    const smoke = c.radial('smoke', 'grey', 0.35, 0.3);
    const b = c.ramp('brown');
    return `<path d="M27 22 C21 22 19 15 24 12 C24 6 32 4 35 8 C38 4 45 5 46 10 L40 22 Z" fill="${smoke}" ${g.edge('#2E2E3A', 1.1, 0.5)}/>
      <path d="M38 33 C36 24 40 18 44 12 C45 18 47 19 48 14 C50 19 52 18 53 12 C57 18 60 24 58 33 Z" fill="${fire}" ${g.edge('#6B0F00', 1, 0.5)}/>
      <circle cx="62" cy="14" r="2.6" fill="#FF8C00"/><circle cx="68" cy="22" r="1.8" fill="#FFC21A"/><circle cx="33" cy="26" r="1.8" fill="#FF8C00"/>
      <path d="${body}" fill="${rock}"/>
      <path d="M55 32 Q59 32 61 36 L84 81 Q84.5 84 81.5 84 L68 84 C66 64 60 46 55 32 Z" fill="${b[2]}" opacity=".55"/>
      <path d="${g.ellipse(48, 33.5, 11.5, 2.6)}" fill="#6B0F00"/>
      <path d="M38 34 C42 36 54 36 58 34 L59 38 C58 44 55 46 55 52 C55 58 58 62 57 68 C56 72 52 72 52 67 C52 61 49 56 47 52 C45 56 44 60 43 64 C42 68 38 68 38 63 C38 56 41 50 41 44 C41 40 38 38 38 34 Z" fill="${lava}"/>
      <path d="M45 37 C47 42 47 46 47 50" fill="none" stroke="#FFF07A" stroke-opacity=".9" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
