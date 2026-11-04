const L = require('../src/parts/leaf');
// A round pale-green melon wrapped in its cream netting.
const body = 'M48 21 C67 21 82 36 82 54 C82 72 67 84 48 84 C29 84 14 72 14 54 C14 36 29 21 48 21 Z';
module.exports = {
  id: 'melon',
  name: 'Melon',
  emoji: '🍈',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['melon', 'honeydew', 'cantaloupe', 'fruit', 'summer'],
  tone: 'lime',
  body,
  shine: [27, 37, -45],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#F6FFD8"/><stop offset="0.35" stop-color="#C6E27E"/><stop offset="0.75" stop-color="#7CA63A"/><stop offset="1" stop-color="#32500E"/></radialGradient>`);
    c.def(`<clipPath id="${c.id('m')}"><path d="${body}"/></clipPath>`);
    const k = L.kit(c);
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <g clip-path="url(#${c.id('m')})" fill="none" stroke-linecap="round">
        <path d="M30 24 C24 42 26 66 36 84 M48 21 C42 42 42 64 48 84 M66 24 C70 42 70 66 62 84 M80 38 C82 52 80 66 74 76 M17 40 C14 54 16 66 22 74" stroke="#5E7E1E" stroke-opacity=".3" stroke-width="3"/>
        <path d="M14 38 C34 30 62 30 82 38 M12 52 C34 45 62 45 84 52 M14 66 C34 60 62 60 82 66 M20 78 C36 73 60 73 76 78" stroke="#FFF8DC" stroke-opacity=".55" stroke-width="1.4"/>
        <path d="M30 24 C24 42 26 66 36 84 M48 21 C42 42 42 64 48 84 M66 24 C70 42 70 66 62 84" stroke="#FFF8DC" stroke-opacity=".55" stroke-width="1.4"/>
      </g>
      ${k.stem('M48 22 C48 17 50 13 53.5 11', 3)}`;
  },
};
