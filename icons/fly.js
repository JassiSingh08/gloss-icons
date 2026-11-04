const k = require('../src/parts/critter');
// A house fly from above: big red compound eyes, bristly grey body, two smoky wings swept back.
const body = 'M48 36 C56 36 60 41 60 48 C62 56 60 66 54 74 C52 78 50 80 48 80 C46 80 44 78 42 74 C36 66 34 56 36 48 C36 41 40 36 48 36 Z';
module.exports = {
  id: 'fly',
  name: 'Fly',
  emoji: '🪰',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['fly', 'housefly', 'buzz', 'insect', 'pest'],
  tone: 'slate',
  body,
  shine: [41, 42, -50],
  shineSize: [5, 2.2],
  draw(c) {
    const ink = '#0E1626';
    const wing = c.radial('wing', 'sky', 0.3, 0.2);
    const eye = c.radial('eye', 'red', 0.35, 0.3);
    const legs = 'M38 46 L26 40 L18 46 M37 54 L24 58 L16 68 M39 62 L30 72 L28 84 M58 46 L70 40 L78 46 M59 54 L72 58 L80 68 M57 62 L66 72 L68 84';
    return `${k.legs(legs, '#4D5F7A', 3)}
      ${k.part(c, 'M44 46 C34 52 22 64 18 76 C16 82 22 84 28 80 C38 72 44 60 46 50 Z', wing, 'sky', ' opacity=".7"')}
      ${k.part(c, 'M52 46 C62 52 74 64 78 76 C80 82 74 84 68 80 C58 72 52 60 50 50 Z', wing, 'sky', ' opacity=".7"')}
      <path d="${body}" fill="${c.radial('a', 'slate', 0.35, 0.25)}"/>
      ${k.line('M42 58 C46 60 50 60 54 58 M43 65 C46 67 50 67 53 65 M45 72 C47 73 49 73 51 72', ink, 1.4, 0.5)}
      <path d="${k.ellipse(48, 32, 8, 6)}" fill="${c.radial('head', 'slate', 0.4, 0.3)}"/>
      ${k.part(c, k.ellipse(39.5, 29, 6.4, 7.4, 20), eye, 'red')}${k.part(c, k.ellipse(56.5, 29, 6.4, 7.4, -20), eye, 'red')}
      ${k.glint(37.5, 25.5, 2.4, 1.3, -40, 0.85)}${k.glint(54.5, 25.5, 2.4, 1.3, -40, 0.85)}`;
  },
};
