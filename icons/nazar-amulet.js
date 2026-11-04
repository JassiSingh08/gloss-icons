const body = 'M48 14 A34 34 0 1 1 47.99 14 Z';
module.exports = {
  id: 'nazar-amulet',
  name: 'Nazar Amulet',
  emoji: '🧿',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['nazar', 'evil eye', 'protection', 'luck', 'charm'],
  tone: 'navy',
  body,
  shine: [32, 28, -40],
  draw(c) {
    const cobalt = c.radial('a', 'navy', 0.3, 0.25);
    const white = c.radial('w', 'white', 0.3, 0.25);
    const sky = c.radial('s', 'sky', 0.3, 0.25);
    const pupil = c.radial('p', 'black', 0.3, 0.25);
    return `<path d="${body}" fill="${cobalt}"/>
      <circle cx="49" cy="49" r="22" fill="${white}" stroke="#080C3D" stroke-opacity=".35" stroke-width="1.2"/>
      <circle cx="50" cy="50" r="14.5" fill="${sky}" stroke="#0A3A6B" stroke-opacity=".5" stroke-width="1.2"/>
      <circle cx="50.5" cy="50.5" r="7.5" fill="${pupil}"/>
      <circle cx="47.5" cy="47.5" r="2" fill="#fff" opacity=".8"/>`;
  },
};
