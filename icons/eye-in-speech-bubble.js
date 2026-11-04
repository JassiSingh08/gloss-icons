const body = 'M50 17 C69 17 84 28.5 84 43.5 C84 58.5 69 70 50 70 C44.5 70 39.5 69 35 67.5 L16.5 79.5 C13.5 81.5 12.5 80 14 77.5 L23.5 61.5 C18.5 56.5 16 50.5 16 43.5 C16 28.5 31 17 50 17 Z';
const eye = 'M28 44 C35 33 43 30 50 30 C57 30 65 33 72 44 C65 55 57 58 50 58 C43 58 35 55 28 44 Z';
module.exports = {
  id: 'eye-in-speech-bubble',
  name: 'Eye In Speech Bubble',
  emoji: '👁️‍🗨️',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['witness', 'see', 'eye', 'watching', 'speech'],
  tone: 'white',
  body,
  shine: [29, 26, -38],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<clipPath id="${c.id('eye')}"><path d="${eye}"/></clipPath>`);
    const ink = '#1A0F3D';
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.3, 0.2)}"/>
      <path d="${eye}" fill="#fff"/>
      <g clip-path="url(#${c.id('eye')})">
        <path d="M24 38 C36 30 64 30 76 38 L76 30 L24 30 Z" fill="#8C83AD" opacity=".35"/>
        <circle cx="50" cy="44" r="10.5" fill="${c.radial('iris', 'blue', 0.35, 0.3)}"/>
        <circle cx="50" cy="44" r="4.6" fill="${ink}"/>
        <circle cx="46.5" cy="40.5" r="2.4" fill="#fff"/>
      </g>
      <path d="${eye}" fill="none" stroke="${ink}" stroke-width="2.8" stroke-linejoin="round"/>`;
  },
};
