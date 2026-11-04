const F = require('../src/parts/figure');

// A lunge: whites, a mesh mask, the foil out straight, the back arm curled up for balance.
const MASK = `<path d="M18 52 A30 30 0 0 1 78 52 L78 60 C78 76 66 86 48 86 C30 86 18 76 18 60 Z" fill="#F7F5FF" stroke="#8C83AD" stroke-width="2.4"/>
  <path d="M30 36 C40 30 66 30 74 40 L74 64 C70 76 60 80 50 80 C40 80 32 74 30 64 Z" fill="#2E2E3D" stroke="#14141E" stroke-width="2"/>
  <path d="M36 40 L36 74 M44 34 L44 79 M52 33 L52 80 M60 34 L60 78 M68 37 L68 72 M32 46 L74 46 M31 56 L75 56 M32 66 L74 66" stroke="#8E93AD" stroke-width="1.3" opacity=".7"/>
  <path d="M34 36 Q42 31 52 31" stroke="#fff" stroke-opacity=".5" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
module.exports = {
  id: 'person-fencing',
  name: 'Person Fencing',
  emoji: '🤺',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['fencing', 'sword', 'foil', 'epee', 'duel'],
  tone: 'white',
  ...F.shineOf(36, 22, 12.5),
  ...F.build((c) => ({
    art: F.rod('M58 44 L89 38', 1.8, '#D9DCE8', '#3A3E52') + `<path d="M58 40 L60 48" stroke="#3A3E52" stroke-width="3" stroke-linecap="round"/>`
      + F.person(c, {
        head: [36, 22], r: 12.5, face: MASK,
        torso: [[37, 43], [34, 55]], tw: [10, 8.5], top: 'white', bottom: 'white', shoes: 'black',
        armB: [[33, 40], [24, 36], [21, 26]],
        legB: [[31, 58], [22, 68], [13, 78]], footB: [10, 82],
        legF: [[38, 58], [52, 62], [56, 77]], footF: [63, 79],
        armF: [[41, 40], [48, 43], [54, 44]],
      }),
  })),
};
