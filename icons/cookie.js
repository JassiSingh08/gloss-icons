const body = 'M14 49 C14 34.09 29.22 22 48 22 C66.78 22 82 34.09 82 49 L82 56 C82 70.91 66.78 83 48 83 C29.22 83 14 70.91 14 56 Z';
module.exports = {
  id: 'cookie',
  name: 'Cookie',
  emoji: '🍪',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['cookie', 'biscuit', 'chocolate chip', 'snack', 'baking'],
  tone: 'brown',
  body,
  shine: [25, 37, -38],
  draw(c) {
    const side = c.linear('side', 'brown', [0, 0, 1, 0], 1, 2);
    c.def(`<radialGradient id="${c.id('top')}" cx="0.35" cy="0.25" r="0.95"><stop offset="0" stop-color="#FBD79A"/><stop offset="0.4" stop-color="#E3A35A"/><stop offset="0.8" stop-color="#B8702E"/><stop offset="1" stop-color="#7A4416"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('chip')}" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#7A4A2A"/><stop offset="1" stop-color="#2A1205"/></radialGradient>`);
    const chip = (x, y, s, a) => `<path d="M${x - s} ${y} C${x - s} ${y - s * 0.9} ${x + s * 0.6} ${y - s * 1.1} ${x + s} ${y - s * 0.2} C${x + s * 1.2} ${y + s * 0.7} ${x - s * 0.2} ${y + s * 1.1} ${x - s} ${y} Z" fill="url(#${c.id('chip')})" transform="rotate(${a} ${x} ${y})"/>`;
    return `<path d="${body}" fill="${side}"/>
      <ellipse cx="48" cy="49" rx="34" ry="27" fill="url(#${c.id('top')})"/>
      <g fill="none" stroke="#8A4A14" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round">
        <path d="M30 40 C33 42 34 45 33 48"/><path d="M58 32 C61 34 64 34 66 33"/><path d="M50 60 C53 62 57 62 59 60"/><path d="M24 58 C26 60 29 61 31 61"/>
      </g>
      ${chip(37, 33, 4.4, 10)}${chip(55, 43, 5, -20)}${chip(30, 51, 4.2, 40)}${chip(68, 52, 4.4, 0)}${chip(46, 65, 4.8, 25)}${chip(64, 30, 3.4, -40)}${chip(42, 48, 3.2, 70)}${chip(60, 66, 3.4, 15)}
      <path d="M22 44 C24 37 30 31 38 27.5" fill="none" stroke="#FFF1D2" stroke-opacity=".6" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
