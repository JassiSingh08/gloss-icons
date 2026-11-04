const body =
  'M48 40.5 C56 33 70 30.5 78 36 C85 41 85.5 56 78.5 63 C72.5 69 60.5 70 52.5 66 C50.5 65 49.5 64 48 64 C46.5 64 45.5 65 43.5 66 C35.5 70 23.5 69 17.5 63 C10.5 56 11 41 18 36 C26 30.5 40 33 48 40.5 Z';

module.exports = {
  id: 'eye-mask',
  name: 'Sleep Mask',
  tags: ['sleep', 'blindfold', 'rest', 'night', 'dream', 'after dark'],
  tone: 'purple',
  body,
  shine: [22, 41, -30],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.22" r="0.95"><stop offset="0" stop-color="#F6EEFF"/><stop offset="0.35" stop-color="#C9A6FF"/><stop offset="0.75" stop-color="#8455D6"/><stop offset="1" stop-color="#3A1C78"/></radialGradient>`);
    const strap = c.linear('strap', 'purple', [0, 0, 0, 1], 0, 2);
    const ink = '#2A0A5E';
    const eye = (x, flip) => {
      const s = flip ? -1 : 1;
      return `<path d="M${x - 9 * s} 49 Q${x} 57 ${x + 9 * s} 49" />
        <path d="M${x - 5.5 * s} 53.3 L${x - 7.2 * s} 56.6 M${x} 54.9 L${x} 58.6 M${x + 5.5 * s} 53.3 L${x + 7.2 * s} 56.6"/>`;
    };
    return `<path d="M16.5 60 C16 74 30 83.5 48 83.5 C66 83.5 80 74 79.5 60 L76.5 61.5 C76 71.5 63 80.3 48 80.3 C33 80.3 20 71.5 19.5 61.5 Z" fill="${strap}" stroke="#1A0040" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="M18 37.5 C27 33 39 35 48 42.5 C57 35 69 33 78 37.5" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" stroke-dasharray="2 2"/>
      <g fill="none" stroke="${ink}" stroke-opacity=".85" stroke-width="2.4" stroke-linecap="round">${eye(31, false)}${eye(65, true)}</g>`;
  },
};
