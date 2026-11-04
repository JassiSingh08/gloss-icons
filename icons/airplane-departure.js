const v = require('../src/parts/vehicle');
const POSE = { angle: -30, scale: 0.78, at: [52, 42] };
module.exports = {
  id: 'airplane-departure',
  name: 'Airplane Departure',
  emoji: '🛫',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['take off', 'departures', 'flight', 'leaving', 'airport'],
  tone: 'white',
  body: v.airliner.body(POSE),
  shine: v.airliner.shine(POSE),
  draw(c) {
    return `${v.runway(10, 86, 77)}
      <path d="M14 70 L30 61" stroke="#8C83AD" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="3 4" opacity=".8"/>
      ${v.airliner(c, POSE)}`;
  },
};
