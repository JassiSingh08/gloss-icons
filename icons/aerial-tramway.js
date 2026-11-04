const v = require('../src/parts/vehicle');
const body = 'M18 38 L78 38 Q84 38 84 44 L82 70 Q81.5 76 75 76 L21 76 Q14.5 76 14 70 L12 44 Q12 38 18 38 Z';
module.exports = {
  id: 'aerial-tramway',
  name: 'Aerial Tramway',
  emoji: '🚡',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['cable car', 'ropeway', 'cabin', 'scenic', 'summit'],
  tone: 'red',
  body,
  shine: [18, 43, -35],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'red', [0, 0, 0.5, 1], 0, 2);
    const carriage = c.linear('car', 'grey', [0, 0, 0, 1], 0, 2);
    const hanger = c.linear('hanger', 'silver', [0, 0, 1, 0], 1, 3);
    return `<path d="M4 12 L92 12 M4 17 L92 17" stroke="#2E2E3A" stroke-width="1.8"/>
      <path d="${v.rr(32, 10, 32, 10, 3)}" fill="${carriage}" stroke="#2E2E3A" stroke-opacity=".6" stroke-width="1.2"/>
      ${v.wheel(c, 38, 12, 3.2)}${v.wheel(c, 48, 12, 3.2)}${v.wheel(c, 58, 12, 3.2)}
      <path d="M48 20 L48 30 L30 38 M48 30 L66 38" stroke="#3A3E52" stroke-width="5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M48 20 L48 30 L30 38 M48 30 L66 38" stroke="${hanger}" stroke-width="3.2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M12.6 44 L83.4 44" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.3"/>
      ${v.win(c, 19, 48, 17, 16, 2)}${v.win(c, 39.5, 48, 17, 16, 2)}${v.win(c, 60, 48, 17, 16, 2)}
      <path d="M14 69 L82 69" stroke="#F7F5FF" stroke-opacity=".85" stroke-width="2.2"/>`;
  },
};
