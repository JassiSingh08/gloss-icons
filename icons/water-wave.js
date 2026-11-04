// A breaking wave: the swell rises on the right, curls over to the left and tucks into a tube.
const body = 'M12 84 L84 84 L84 68 C84 40 74 14 55 14 C38 14 26 25 25 39 C24 49 31 55 39 54 C46 53 49 47 46 41 C53 43 57 50 56 59 C55 68 46 73 36 71 C26 70 18 72 12 77 Z';
module.exports = {
  id: 'water-wave',
  name: 'Water Wave',
  emoji: '🌊',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['wave', 'ocean', 'sea', 'surf', 'water', 'beach'],
  tone: 'blue',
  body,
  shine: [36, 21, -30],
  shineSize: [6, 2.4],
  draw(c) {
    c.def(`<clipPath id="${c.id('clip')}"><path d="${body}"/></clipPath>`);
    c.def(`<linearGradient id="${c.id('sea')}" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#5BC2FF"/><stop offset="0.45" stop-color="#0C8CF0"/><stop offset="1" stop-color="#002E73"/></linearGradient>`);
    return `<path d="${body}" fill="url(#${c.id('sea')})"/>
      <g clip-path="url(#${c.id('clip')})">
        <path d="M46 41 C53 43 57 50 56 59 C55 68 46 73 36 71 C44 66 48 60 47 52 C47 47 47 44 46 41 Z" fill="#001E4D" opacity=".45"/>
        <path d="M84 68 C84 40 74 14 55 14 C38 14 26 25 25 39 C24 49 31 55 39 54 C46 53 49 47 46 41 C44 37 38 37 36 41 C34 37 34 31 40 26 C46 22 56 21 64 26 C58 25 54 29 58 31 C64 28 72 32 74 38 C72 36 68 38 70 41 C76 42 82 52 84 62 Z" fill="#fff" opacity=".92"/>
        <path d="M12 77 C26 70 40 76 52 70 C62 66 72 66 84 70" stroke="#C9ECFF" stroke-opacity=".5" stroke-width="2" fill="none"/>
        <path d="M12 82 C28 77 44 82 60 77 C70 74 78 75 84 78" stroke="#C9ECFF" stroke-opacity=".35" stroke-width="1.6" fill="none"/>
      </g>`;
  },
};
