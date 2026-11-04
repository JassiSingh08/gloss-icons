// One eye, open and level: almond white, a blue iris under a shadowed upper lid.
const body = 'M10 50 C22 31 35 25 48 25 C61 25 74 31 86 50 C74 69 61 75 48 75 C35 75 22 69 10 50 Z';
module.exports = {
  id: 'eye',
  name: 'Eye',
  emoji: '👁️',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['eye', 'see', 'look', 'vision', 'watch'],
  tone: 'white',
  body,
  shine: [26, 39, -30],
  shineSize: [5.5, 2.2],
  draw(c) {
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const ink = '#12002E';
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.5, 0.3)}"/>
      <g clip-path="url(#${c.id('in')})">
        <circle cx="48" cy="50" r="17" fill="${c.radial('iris', 'blue', 0.35, 0.3)}"/>
        <circle cx="48" cy="50" r="17" fill="none" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.6"/>
        <circle cx="48" cy="50" r="7.5" fill="${ink}"/>
        <path d="M6 44 C20 30 34 26 48 26 C62 26 76 30 90 44 L90 20 L6 20 Z" fill="#6E61A8" opacity=".3"/>
      </g>
      <circle cx="42.5" cy="44" r="3.4" fill="#fff"/>
      <path d="M10 50 C22 31 35 25 48 25 C61 25 74 31 86 50" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  },
};
