const ball = require('../src/parts/ball');

// One strip: up from the left tail, through the crossing, round the loop, back through the crossing
// and down to the right tail. The first stretch passes behind, so it is drawn on its own.
const strip = ball.curve([[27, 84], [36, 70], [44, 58], [50, 49], [57, 38], [64, 26], [60, 14], [56, 6], [40, 6], [36, 14], [32, 26], [39, 38], [46, 49], [52, 58], [60, 70], [69, 84]], 18);
const tail = strip.slice(0, 32);
const loop = strip.slice(28);
const body = ball.band(loop, 10);

module.exports = {
  id: 'reminder-ribbon',
  name: 'Reminder Ribbon',
  emoji: '🎗️',
  group: 'Activities',
  subgroup: 'event',
  tags: ['awareness', 'support', 'remember', 'cause', 'ribbon'],
  tone: 'gold',
  body,
  shine: [37, 20, -70],
  shineSize: [5, 1.8],
  draw(c) {
    const back = ball.band(tail, 10);
    const deep = c.ramp('gold')[3];
    return `<path d="${back}" fill="${c.linear('back', 'gold', [0, 0, 1, 1], 1, 3)}" stroke="${deep}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${c.linear('a', 'gold', [0, 0, 1, 1], 0, 2)}"/>`;
  },
};
