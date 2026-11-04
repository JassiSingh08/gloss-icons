const L = require('../src/parts/leaf');
// The woven nest alone, a stray feather and loose straws in the dark hollow.
module.exports = {
  id: 'empty-nest',
  name: 'Empty Nest',
  emoji: '🪹',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['nest', 'empty', 'bird', 'home', 'leaving home'],
  tone: 'brown',
  body: L.NEST,
  shine: [20, 60, -50],
  shineSize: [5, 2.2],
  draw(c) {
    const inside = `<g stroke="#8A5226" stroke-opacity=".8" stroke-width="1.3" stroke-linecap="round" fill="none"><path d="M26 54 C34 50 42 49 50 50"/><path d="M48 55 C56 52 64 51 70 53"/><path d="M34 57 C40 55 46 55 52 57"/></g>
      <path d="M56 50 C62 44 70 42 76 43 C72 47 64 50 56 50 Z" fill="#F7F5FF" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>
      <path d="M56 50 C63 46.5 69 44.5 75 43.5" stroke="#8C83AD" stroke-opacity=".7" stroke-width=".9" fill="none"/>`;
    return L.nest(c, inside);
  },
};
