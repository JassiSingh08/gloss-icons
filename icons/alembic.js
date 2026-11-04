const body = 'M41.8 38.3 C44 24 62 21 85 45.5 L83 49.5 C66 34 56 37 57.05 49 A22 22 0 1 1 41.8 38.3 Z';
const bulb = 'M38 38 A22 22 0 1 1 37.99 38 Z';
module.exports = {
  id: 'alembic',
  name: 'Alembic',
  emoji: '⚗️',
  group: 'Objects',
  subgroup: 'science',
  tags: ['alembic', 'chemistry', 'potion', 'distil', 'experiment'],
  tone: 'sky',
  body,
  shine: [25, 52, -45],
  draw(c) {
    const glass = c.radial('a', 'sky', 0.3, 0.25);
    const brew = c.radial('l', 'purple', 0.4, 0.2);
    c.def(`<clipPath id="${c.id('b')}"><path d="${bulb}"/></clipPath>`);
    return `<path d="${body}" fill="${glass}" opacity=".45"/>
      <g clip-path="url(#${c.id('b')})">
        <path d="M10 62 Q24 58 38 62 Q52 66 66 62 L66 90 L10 90 Z" fill="${brew}"/>
        <ellipse cx="38" cy="62" rx="22" ry="3" fill="#E9B8FF" opacity=".55"/>
      </g>
      <circle cx="31" cy="72" r="2.4" fill="#fff" opacity=".7"/><circle cx="44" cy="68" r="1.6" fill="#fff" opacity=".7"/><circle cx="38" cy="76" r="1.3" fill="#fff" opacity=".6"/>
      <path d="M46 30 C54 26 66 28 78 40" stroke="#fff" stroke-opacity=".6" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="${body}" fill="none" stroke="#C9ECFF" stroke-opacity=".6" stroke-width="1"/>`;
  },
};
