// One teardrop: an icy head at the lower left and a broad tail that splits into two tongues
// toward the upper right.
const body = 'M22 50 C34 36 56 22 84 12 C74 24 68 30 64 35 C72 33 78 33 84 34 C70 42 58 56 50 66 A19 19 0 1 1 22 50 Z';
module.exports = {
  id: 'comet',
  name: 'Comet',
  emoji: '☄️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['comet', 'space', 'astronomy', 'tail', 'sky'],
  tone: 'blue',
  body,
  shine: [21, 58, -50],
  shineSize: [5, 2.3],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" gradientUnits="userSpaceOnUse" cx="32" cy="64" r="64"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.25" stop-color="#C9ECFF"/><stop offset="0.5" stop-color="#5BC2FF"/><stop offset="0.8" stop-color="#0C8CF0"/><stop offset="1" stop-color="#0049A8"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('core')}" cx="0.4" cy="0.35" r="0.7"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.6" stop-color="#E4F6FF"/><stop offset="1" stop-color="#8CD8FF"/></radialGradient>`);
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="M34 52 C46 42 60 32 76 22 C64 34 56 44 48 56 Z" fill="#fff" opacity=".4"/>
      <path d="M44 60 C56 50 66 42 76 37 C66 46 58 54 52 62 Z" fill="#fff" opacity=".3"/>
      <circle cx="33" cy="64" r="12.5" fill="url(#${c.id('core')})"/>`;
  },
};
