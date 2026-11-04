const v = require('../src/parts/vehicle');
const body = 'M18 16 Q17 9 25 9 L36 9 Q42.5 9 43 15.5 L45.5 47 L67 47 Q76 47 76 56 L76 61 Q76 67 69 67 L30 67 Q22.5 67 22 60 Z';
module.exports = {
  id: 'seat',
  name: 'Seat',
  emoji: '💺',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['seat', 'flight', 'window seat', 'booking', 'travel'],
  tone: 'blue',
  body,
  shine: [23, 32, -85],
  shineSize: [6, 1.8],
  draw(c) {
    const paint = c.linear('a', 'blue', [0, 0, 1, 1], 0, 2);
    const cloth = c.linear('cloth', 'white', [0, 0, 0, 1], 0, 2);
    const metal = c.linear('metal', 'silver', [0, 0, 1, 0], 1, 3);
    const arm = c.linear('arm', 'grey', [0, 0, 0, 1], 0, 2);
    return `<path d="M34 67 L30 83 M64 67 L68 83 M30 82 L68 82" stroke="#3A3E52" stroke-width="4.6" stroke-linecap="round"/>
      <path d="M34 67 L30 83 M64 67 L68 83 M30 82 L68 82" stroke="${metal}" stroke-width="3" stroke-linecap="round"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M18.5 17 Q18 11.5 25 11.5 L36 11.5 Q41 11.5 41.3 16 L42 25 L19.6 25 Z" fill="${cloth}"/>
      <path d="M45 54 L75 54" stroke="#001E4D" stroke-opacity=".3" stroke-width="1.3"/>
      <path d="${v.rr(41, 41, 33, 7, 3.5)}" fill="${arm}" stroke="#2E2E3A" stroke-opacity=".55" stroke-width="1.1"/>
      <path d="M66 48 L66 56" stroke="#6E6E80" stroke-width="3.4"/>
      <path d="${v.rr(52, 58.5, 11, 4.5, 1.5)}" fill="#D9DCE8" stroke="#3A3E52" stroke-opacity=".6" stroke-width=".8"/>`;
  },
};
