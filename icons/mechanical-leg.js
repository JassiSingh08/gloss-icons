// A prosthetic leg: a moulded socket, a round knee joint, a slim pylon and a carbon foot.
const body = 'M33.5 12 Q33.5 9 36.5 9 L61.5 9 Q64.5 9 64 12 L60.5 33 C59.5 37 57.5 39 56 40 C58 43 58 48.5 54.5 51.5 L52.5 52.5 L52.5 68.5 C58.5 71.5 70 73.5 76.5 76.5 C81 78.5 80 84 75 84 L40 84 C35 84 33.5 80 36 76.5 L44 68.5 L44 52.5 L42 51.5 C38.5 48.5 38.5 43 40.5 40 C39 39 37 37 36.5 33 Z';
module.exports = {
  id: 'mechanical-leg',
  name: 'Mechanical Leg',
  emoji: '🦿',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['prosthetic', 'bionic', 'robot', 'leg', 'accessibility'],
  tone: 'silver',
  body,
  shine: [39, 15, -70],
  shineSize: [5, 1.8],
  draw(c) {
    const ink = '#3A3E52';
    const socket = 'M33.5 12 Q33.5 9 36.5 9 L61.5 9 Q64.5 9 64 12 L60.5 33 C59.5 37 56 39.5 48.5 39.5 C41 39.5 37.5 37 36.5 33 Z';
    const foot = 'M44 68.5 L52.5 68.5 C58.5 71.5 70 73.5 76.5 76.5 C81 78.5 80 84 75 84 L40 84 C35 84 33.5 80 36 76.5 Z';
    return `<path d="${body}" fill="${c.linear('a', 'silver', [0, 0, 1, 0], 0, 2)}"/>
      <path d="${socket}" fill="${c.linear('socket', 'black', [0, 0, 1, 0], 0, 2)}"/>
      <path d="M35 17 L63 17" stroke="#8E93AD" stroke-width="2.4" stroke-opacity=".8"/>
      <path d="${foot}" fill="${c.linear('foot', 'black', [0, 0, 0, 1], 0, 2)}"/>
      <path d="M40 78 L77 79" stroke="#8E93AD" stroke-opacity=".6" stroke-width="1.2"/>
      <circle cx="48.25" cy="45.5" r="8.5" fill="${c.radial('knee', 'silver', 0.35, 0.3)}" stroke="${ink}" stroke-opacity=".6" stroke-width="1.1"/>
      <circle cx="48.25" cy="45.5" r="3" fill="${ink}" opacity=".7"/>
      <path d="M45.5 56 L45.5 66" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
