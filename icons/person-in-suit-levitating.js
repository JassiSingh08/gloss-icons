const f = require('../src/parts/face');
const F = require('../src/parts/figure');

// Black suit and hat, feet together, hovering over the floor.
const HAT = `<path d="M8 30 C8 24 88 24 88 30 C88 35 8 35 8 30 Z" fill="#141420" stroke="#05050A" stroke-width="2.4"/>
  <path d="M24 28 L27 6 Q48 1 69 6 L72 28 Q48 32 24 28 Z" fill="#2E2E3D" stroke="#05050A" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M25.5 20 Q48 24 70.5 20 L71.5 27.5 Q48 31 24.5 27.5 Z" fill="#6E6E85"/>
  <path d="M33 10 Q38 7 46 7" stroke="#fff" stroke-opacity=".35" stroke-width="3" fill="none" stroke-linecap="round"/>`;
module.exports = {
  id: 'person-in-suit-levitating',
  name: 'Person In Suit Levitating',
  emoji: '🕴️',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['levitate', 'hover', 'suit', 'business', 'float'],
  tone: 'black',
  ...F.shineOf(48, 20, 12.5),
  ...F.build((c) => ({
    art: F.person(c, {
      head: [48, 20], r: 12.5, face: f.brows.flat({ y: 41, sw: 4.4 }) + f.eyes.lidded({ y: 50 }) + f.mouth.flat({ y: 67, w: 8, sw: 4.6 }),
      hat: HAT,
      torso: [[48, 43], [48, 56]], tw: [11, 9.5], top: 'black', bottom: 'black', shoes: 'black',
      armB: [[38.5, 40], [35, 50], [35, 59]], armF: [[57.5, 40], [61, 50], [61, 59]],
      legB: [[44, 60], [44, 70], [44, 74]], footB: [40, 75],
      legF: [[52, 60], [52, 70], [52, 74]], footF: [56, 75],
      under: `<path d="M41 34 L48 47 L55 34 Z" fill="#F7F5FF"/><path d="M46.5 36 L49.5 36 L50.5 46 L48 49 L45.5 46 Z" fill="#141420"/>
        <path d="M40 33 L48 49 M56 33 L48 49" stroke="#6E6E85" stroke-width="1.6" fill="none"/>`,
    }),
    extra: `<path d="M34 80 L44 80 M52 80 L62 80 M40 83.5 L56 83.5" stroke="#B8B8C7" stroke-opacity=".7" stroke-width="2" stroke-linecap="round"/>`,
  })),
};
