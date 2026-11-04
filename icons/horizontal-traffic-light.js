const v = require('../src/parts/vehicle');
const body = v.rr(8, 30, 80, 34, 11);
const lamp = (c, x, y, palette) => `<circle cx="${x}" cy="${y}" r="11.5" fill="#141420"/>
  <circle cx="${x}" cy="${y}" r="9.5" fill="${c.radial(`l-${palette}`, palette, 0.38, 0.32)}"/>
  <ellipse cx="${x - 3}" cy="${y - 4}" rx="3.6" ry="2" fill="#fff" opacity=".75" transform="rotate(-30 ${x - 3} ${y - 4})"/>`;
module.exports = {
  id: 'horizontal-traffic-light',
  name: 'Horizontal Traffic Light',
  emoji: '🚥',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['traffic', 'signal', 'junction', 'road', 'lights'],
  tone: 'gold',
  body,
  shine: [16, 36, -45],
  shineSize: [4.5, 2],
  draw(c) {
    const housing = c.linear('a', 'gold', [0, 0, 0.3, 1], 0, 2);
    const arm = c.linear('arm', 'grey', [0, 0, 1, 0], 1, 3);
    const visor = (x) => `<path d="M${x - 12} 37 Q${x} 29 ${x + 12} 37 L${x + 12} 33 Q${x} 25 ${x - 12} 33 Z" fill="#2E2E3D"/>`;
    return `<rect x="44" y="12" width="8" height="19" fill="${arm}" stroke="#2E2E3A" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${housing}"/>
      ${lamp(c, 25, 47, 'red')}${lamp(c, 48, 47, 'gold')}${lamp(c, 71, 47, 'green')}
      ${visor(25)}${visor(48)}${visor(71)}`;
  },
};
