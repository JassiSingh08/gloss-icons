const k = require('../src/parts/critter');
// Standing penguin, front on: black lacquer coat, white face and belly, flippers held out a touch.
const body = 'M48 12 C62 12 70 24 70 40 C70 52 74 61 74 70 C74 80 62 84 48 84 C34 84 22 80 22 70 C22 61 26 52 26 40 C26 24 34 12 48 12 Z';
module.exports = {
  id: 'penguin',
  name: 'Penguin',
  emoji: '🐧',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['penguin', 'antarctic', 'cold', 'bird', 'tuxedo'],
  tone: 'black',
  body,
  shine: [36, 22, -40],
  draw(c) {
    const flip = c.radial('flip', 'black', 0.3, 0.2);
    const feet = c.radial('feet', 'orange', 0.4, 0.3);
    const ink = '#05050A';
    return `${k.part(c, 'M27 44 C20 50 15 58 13 68 C13 70 15 70 16 69 C21 63 25 58 28 56 Z', flip, 'black')}
      ${k.part(c, 'M69 44 C76 50 81 58 83 68 C83 70 81 70 80 69 C75 63 71 58 68 56 Z', flip, 'black')}
      <path d="${body}" fill="${c.radial('a', 'black', 0.35, 0.2)}"/>
      <path d="M48 31 C44 24 34 25 34 35 C34 46 30 55 30 66 C30 76 38 81 48 81 C58 81 66 76 66 66 C66 55 62 46 62 35 C62 25 52 24 48 31 Z" fill="${c.radial('belly', 'white', 0.4, 0.2)}"/>
      ${k.eye(41.5, 36, 2.9, ink)}${k.eye(54.5, 36, 2.9, ink)}
      ${k.part(c, 'M43 41 Q48 38.5 53 41 L48 48.5 Z', c.radial('beak', 'orange', 0.4, 0.2), 'orange')}
      ${k.part(c, 'M31 85 C31 81 35 79 41 79 C46 79 47 82 46 85 Z', feet, 'orange')}
      ${k.part(c, 'M65 85 C65 81 61 79 55 79 C50 79 49 82 50 85 Z', feet, 'orange')}`;
  },
};
