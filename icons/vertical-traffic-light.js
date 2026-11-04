const v = require('../src/parts/vehicle');
const body = v.rr(30, 8, 36, 72, 11);
const lamp = (c, x, y, palette) => `<circle cx="${x}" cy="${y}" r="11.5" fill="#141420"/>
  <circle cx="${x}" cy="${y}" r="9.5" fill="${c.radial(`l-${palette}`, palette, 0.38, 0.32)}"/>
  <ellipse cx="${x - 3}" cy="${y - 4}" rx="3.6" ry="2" fill="#fff" opacity=".75" transform="rotate(-30 ${x - 3} ${y - 4})"/>`;
module.exports = {
  id: 'vertical-traffic-light',
  name: 'Vertical Traffic Light',
  emoji: '🚦',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['traffic', 'signal', 'stop', 'go', 'crossing'],
  tone: 'gold',
  body,
  shine: [36, 14, -45],
  shineSize: [4.5, 2],
  draw(c) {
    const housing = c.linear('a', 'gold', [0, 0, 1, 0.4], 0, 2);
    const pole = c.linear('pole', 'grey', [0, 0, 1, 0], 1, 3);
    const visor = (y) => `<path d="M${36} ${y - 6} Q48 ${y - 16} 60 ${y - 6} L62 ${y - 9} Q48 ${y - 20} 34 ${y - 9} Z" fill="#2E2E3D"/>`;
    return `<rect x="44" y="78" width="8" height="7" fill="${pole}" stroke="#2E2E3A" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${housing}"/>
      ${lamp(c, 48, 22, 'red')}${lamp(c, 48, 44, 'gold')}${lamp(c, 48, 66, 'green')}
      ${visor(22)}${visor(44)}${visor(66)}`;
  },
};
