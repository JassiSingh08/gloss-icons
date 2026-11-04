const v = require('../src/parts/vehicle');
const POSE = { angle: 16, scale: 0.8, at: [46, 38] };
module.exports = {
  id: 'airplane-arrival',
  name: 'Airplane Arrival',
  emoji: '🛬',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['landing', 'arrivals', 'flight', 'home', 'airport'],
  tone: 'white',
  body: v.airliner.body(POSE),
  shine: v.airliner.shine(POSE),
  draw(c) {
    return `${v.runway(10, 86, 77)}
      <path d="M62 62 L80 72" stroke="#8C83AD" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="3 4" opacity=".8"/>
      ${v.airliner(c, POSE)}`;
  },
};
