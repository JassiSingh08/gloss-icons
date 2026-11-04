const f = require('../src/parts/face');
const F = require('../src/parts/figure');

// Walking slowly, dark glasses, the white cane sweeping out ahead with its red tip on the ground.
const shades = `<path d="M24 47 Q48 43 72 47" stroke="${f.INK}" stroke-width="3" fill="none"/>
  <ellipse cx="36" cy="50" rx="10" ry="8" fill="#1A1A2A" stroke="${f.INK}" stroke-width="2.4"/>
  <ellipse cx="60" cy="50" rx="10" ry="8" fill="#1A1A2A" stroke="${f.INK}" stroke-width="2.4"/>
  <ellipse cx="33" cy="47" rx="4" ry="2" fill="#fff" opacity=".45" transform="rotate(-20 33 47)"/>
  <ellipse cx="57" cy="47" rx="4" ry="2" fill="#fff" opacity=".45" transform="rotate(-20 57 47)"/>`;
module.exports = {
  id: 'person-with-white-cane',
  name: 'Person With White Cane',
  emoji: '🧑‍🦯',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['blind', 'white cane', 'visually impaired', 'accessibility', 'walking'],
  tone: 'blue',
  ...F.shineOf(42, 20, 13),
  ...F.build((c) => ({
    art: F.person(c, {
      head: [42, 20], r: 13, hair: 'crop', color: 'dark',
      face: `<g transform="translate(4 0)">${shades}${f.mouth.smile({ y: 67, sw: 4.6, w: 10 })}</g>`,
      torso: [[41, 43], [39.5, 56]], tw: [10, 8.5], top: 'blue', bottom: 'slate',
      armB: [[38, 41], [33, 50], [30, 56]],
      legB: [[39, 59], [35, 69], [31, 79]], footB: [36, 81],
      legF: [[41, 59], [47, 68], [50, 79]], footF: [56, 80],
      armF: [[44, 41], [51, 47], [56, 49]], handF: false,
      over: F.rod('M58 50 L80 82', 3) + '<path d="M76.2 76.5 L80 82" stroke="#E3120B" stroke-width="3" stroke-linecap="round"/>' + F.hand(c, 56, 49, { dir: 20 }),
    }),
  })),
};
