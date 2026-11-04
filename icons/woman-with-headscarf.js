const f = require('../src/parts/face');
const p = require('../src/parts/person');

// A hijab: one piece of cloth from the crown over the shoulders, the face framed in an oval.
const body = 'M48 9 C67 9 77 23 76 41 C75.5 49 73 55 70 58 C78 61 84 69 84 79 Q84 84 79 84 L17 84 Q12 84 12 79 C12 69 18 61 26 58 C23 55 20.5 49 20 41 C19 23 29 9 48 9 Z';
const P = p.pose({ cy: 41, r: 20 });
module.exports = {
  id: 'woman-with-headscarf',
  name: 'Woman With Headscarf',
  emoji: '🧕',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['hijab', 'headscarf', 'modest', 'muslim', 'scarf'],
  tone: 'teal',
  body,
  shine: [30, 25, -50],
  shineSize: [5, 2.3],
  draw(c) {
    const cloth = c.radial('scarf', 'teal', 0.32, 0.18);
    const t = c.ramp('teal');
    const face = 'M48 22.5 C59 22.5 65 31 65 42 C65 53 58 60.5 48 60.5 C38 60.5 31 53 31 42 C31 31 37 22.5 48 22.5 Z';
    c.def(`<clipPath id="${c.id('oval')}"><path d="${face}"/></clipPath>`);
    return `<path d="${body}" fill="${cloth}"/>
      <g clip-path="url(#${c.id('oval')})">${p.head(c, P)}${P.at(f.brows.flat({ y: 40 }) + f.eyes.oval({ y: 49 }) + f.mouth.smile({ y: 68, w: 9 }))}</g>
      <path d="${face}" fill="none" stroke="${t[3]}" stroke-opacity=".55" stroke-width="1.6"/>
      <path d="M31 46 C30 54 33 60 40 64 C46 67 56 67 64 62" stroke="${t[2]}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M26 59 C34 66 46 70 62 66 M22 70 Q36 76 50 76" stroke="${t[3]}" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M70 58 C72 66 70 74 66 84" stroke="${t[3]}" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  },
};
