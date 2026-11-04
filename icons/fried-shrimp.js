// Ebi fry: a crumbed golden body with a lumpy edge and the red tail fanned out at one end.
const d = require('../src/parts/dish');
const ANGLE = -36;
const AT = [44, 54];
const pts = [];
for (let i = 0; i < 72; i++) {
  const t = (i / 72) * Math.PI * 2;
  const bump = 1 + 0.045 * Math.sin(t * 15);
  const rx = Math.cos(t) > 0 ? 30 : 34;
  pts.push([(Math.cos(t) * rx - 4) * bump, (Math.sin(t) * 13 * (Math.cos(t) > 0 ? 1 - 0.35 * Math.cos(t) : 1)) * bump]);
}
const crumb = d.poly(pts);
module.exports = {
  id: 'fried-shrimp',
  name: 'Fried Shrimp',
  emoji: '🍤',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['shrimp', 'tempura', 'ebi fry', 'japanese', 'fried'],
  tone: 'gold',
  body: d.place(crumb, ANGLE, AT),
  shine: [...d.placePt(-20, -7, ANGLE, AT), ANGLE - 10],
  draw(c) {
    c.def(`<radialGradient id="${c.id('crust')}" cx="0.3" cy="0.22" r="0.95"><stop offset="0" stop-color="#FFF0A0"/><stop offset="0.35" stop-color="#F5B02A"/><stop offset="0.75" stop-color="#B86A00"/><stop offset="1" stop-color="#4E2A00"/></radialGradient>`);
    const tail = c.linear('tail', 'ember', [0, 0, 1, 1], 0, 2);
    const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="1.3" fill="#FFF3A6" opacity=".7"/>`;
    const dark = (x, y) => `<circle cx="${x}" cy="${y}" r="1.2" fill="#9A5200" opacity=".55"/>`;
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="M21 -3 C27 -11 37 -16 43 -13 C41 -8 39 -3 38 0 C39 3 41 8 43 13 C37 16 27 11 21 3 Z" fill="${tail}" ${d.edge('#3D0700', 1.2, 0.6)}/>
        <path d="M24 -2 L39 -10 M25 0 L38 0 M24 2 L39 10" stroke="#8A1200" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>
      </g>
      <path d="${d.place(crumb, ANGLE, AT)}" fill="url(#${c.id('crust')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        ${dot(-26, -4)}${dot(-16, -8)}${dot(-6, -6)}${dot(4, -8)}${dot(12, -3)}${dot(-20, 4)}${dot(-8, 3)}${dot(2, 5)}${dot(-30, 2)}
        ${dark(-22, 0)}${dark(-12, -2)}${dark(-2, 1)}${dark(8, 2)}${dark(-14, 8)}${dark(4, -4)}${dark(-28, -6)}
      </g>`;
  },
};
