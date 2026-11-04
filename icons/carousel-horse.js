const body = 'M30 21 C36 26 38 34 41 40 C49 38 60 38 68 40 C74 41 77 45 77 50 C77 56 74 59 71 60 L76.5 72 Q77.5 75.5 74 75.5 L71.5 75.5 Q70 75 69.5 73 L64 62.5 C58 62.5 50 62.5 44 61.5 L38 66 L40 72 Q40.5 74.5 38 74.5 L35 74.5 Q33 74 33 72 L31.5 66 Q31 63 33.5 60.5 C30 56 28.5 50 28.5 45 C24.5 41 20 39 16.5 38 Q12 37 12 33.5 Q12 30 15 28 L22 21.5 L24.5 13.5 L28 19.5 Z';
module.exports = {
  id: 'carousel-horse',
  name: 'Carousel Horse',
  emoji: '🎠',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['carousel', 'merry go round', 'fair', 'ride', 'childhood'],
  tone: 'ivory',
  body,
  shine: [50, 42, -5],
  shineSize: [7, 2.4],
  draw(c) {
    const horse = c.radial('a', 'white', 0.3, 0.2);
    const pole = c.linear('pole', 'gold', [0, 0, 1, 0], 0, 2);
    const mane = c.radial('mane', 'pink', 0.3, 0.2);
    const saddle = c.linear('saddle', 'red', [0, 0, 1, 1], 0, 2);
    const blanket = c.linear('blanket', 'blue', [0, 0, 1, 1], 0, 2);
    const ink = '#2A1F55';
    const edge = 'stroke="#4A0016" stroke-opacity=".5" stroke-width="1.1"';
    let twist = '';
    for (let y = 10; y < 84; y += 6) twist += `M52 ${y} L57 ${y + 3} `;
    return `<path d="M52 8 L57 8 L57 84 L52 84 Z" fill="${pole}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1"/>
      <path d="${twist}" stroke="#C98500" stroke-width="1.3"/>
      <circle cx="54.5" cy="8" r="3" fill="${c.radial('knob', 'gold', 0.35, 0.3)}"/>
      <path d="M76 46 C84 48 87 56 85 66 C82 60 79 58 75 58 Z" fill="${mane}" ${edge}/>
      <path d="${body}" fill="${horse}"/>
      <path d="M26 17 C33 20 37 27 40 33 C41 36 42 38 42 40 L38.5 41 C36 35 34 30 30 25.5 C28 23.5 26 22 24.5 21.5 Z" fill="${mane}" ${edge}/>
      <path d="M43 39 L65 39 L64 54 Q54 57 44 54 Z" fill="${blanket}" stroke="#001E4D" stroke-opacity=".55" stroke-width="1"/>
      <path d="M44 51 Q54 54 64 51" fill="none" stroke="#FFD82E" stroke-width="1.6"/>
      <path d="M45 39 Q48 35 52 37 Q58 35 64 37 L63.5 41 L45.5 41 Z" fill="${saddle}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1"/>
      <path d="M15 28.5 L23 32 L28 26" fill="none" stroke="#C98500" stroke-width="1.6" stroke-linejoin="round"/>
      <ellipse cx="21" cy="26" rx="1.6" ry="2" fill="${ink}"/>
      <circle cx="14.5" cy="32" r=".9" fill="${ink}"/>
      <path d="M71.5 75.5 L76 75.5 M35 74.5 L40 74.5" stroke="#C98500" stroke-width="2.2" stroke-linecap="round"/>`;
  },
};
