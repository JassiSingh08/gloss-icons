const body = 'M48 16 A32 32 0 1 1 47.99 16 Z';
module.exports = {
  id: 'globe',
  name: 'Globe',
  tags: ['world', 'travel', 'earth', 'international'],
  tone: 'blue',
  body,
  shine: [34, 29, -35],
  draw(c) {
    const sea = c.radial('sea', 'blue', 0.32, 0.25);
    const land = c.radial('land', 'green', 0.3, 0.2);
    c.def(`<clipPath id="${c.id('ball')}"><path d="${body}"/></clipPath>`);
    return `<path d="${body}" fill="${sea}"/>
      <g clip-path="url(#${c.id('ball')})" fill="${land}">
        <path d="M22 28 C30 20 43 22 45 30 C47 38 40 42 34 46 C28 50 30 58 24 61 C17 55 14 37 22 28 Z"/>
        <path d="M57 45 C65 41 75 45 77 53 C79 63 71 73 63 75 C59 67 61 61 55 57 C51 53 51 47 57 45 Z"/>
        <path d="M58 21 C64 19 70 23 68 27 C64 29 60 27 58 21 Z"/>
      </g>`;
  },
};
