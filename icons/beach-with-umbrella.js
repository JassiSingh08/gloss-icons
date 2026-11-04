const g = require('../src/parts/glass');
const canopy = 'M17 40 C19 24 33 15 50 16 C65 17 76 26 78 40 C74 37.5 69 37.5 65 40 C61 37.5 55 37.5 51.5 40 C48 37.5 41.5 37.5 37.5 40 C33.5 37.5 27 37 17 40 Z';
const sand = 'M16 79 C21 70 33 66.5 48 66.5 C63 66.5 75 70 80 79 C70 82 26 82 16 79 Z';
module.exports = {
  id: 'beach-with-umbrella',
  name: 'Beach With Umbrella',
  emoji: '🏖️',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['beach', 'umbrella', 'holiday', 'summer', 'sand'],
  tone: 'gold',
  body: [canopy, sand],
  shine: [27, 28, -40],
  shineSize: [5, 1.8],
  draw(c) {
    const red = c.radial('a', 'red', 0.35, 0.2);
    const sandFill = c.radial('sand', 'gold', 0.4, 0.15);
    const sea = c.linear('sea', 'sky', [0, 0, 0, 1], 1, 2);
    const ball = c.radial('ball', 'white', 0.35, 0.3);
    c.def(`<clipPath id="${c.id('can')}"><path d="${canopy}"/></clipPath>`);
    return `<path d="${g.ellipse(48, 79.5, 36, 5)}" fill="${sea}" stroke="${c.ramp('sky')[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M16 79.5 Q22 77.5 28 79.5 M68 79.5 Q74 77.5 80 79.5" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M48 17 L53 73" stroke="#331805" stroke-opacity=".5" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M48 17 L53 73" stroke="#E8B98A" stroke-width="2.2" stroke-linecap="round"/>
      <path d="${sand}" fill="${sandFill}"/>
      <path d="${canopy}" fill="${red}"/>
      <g clip-path="url(#${c.id('can')})" fill="#FFFFFF" opacity=".95">
        <path d="M50 14 C44 20 40 30 37.5 42 L51.5 42 C51 30 50.5 20 50 14 Z"/>
        <path d="M50 14 C64 18 66 30 65 42 L80 42 C78 30 66 18 50 14 Z" opacity="0"/>
        <path d="M50 14 C36 16 26 26 17 42 L10 42 L10 10 Z" opacity="0"/>
        <path d="M50 14 C60 20 63 30 65 42 L78 42 C76 30 66 18 50 14 Z"/>
      </g>
      <circle cx="31" cy="72" r="5" fill="${ball}" ${g.edge('#6E61A8', 1, 0.5)}/>
      <path d="M26.5 70 C29 72 33 72.5 35.6 70.5" fill="none" stroke="#0C8CF0" stroke-width="2"/>
      <path d="M28 68 C29.5 66.6 31.5 66.4 33 67" fill="none" stroke="#E3120B" stroke-width="1.6"/>`;
  },
};
