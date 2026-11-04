const v = require('../src/parts/vehicle');
const body = v.rr(24, 9, 48, 34, 9);
module.exports = {
  id: 'bus-stop',
  name: 'Bus Stop',
  emoji: '🚏',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['bus', 'stop', 'wait', 'timetable', 'commute'],
  tone: 'gold',
  body,
  shine: [31, 15, -35],
  shineSize: [5, 2.2],
  draw(c) {
    const sign = c.linear('a', 'gold', [0, 0, 0.6, 1], 0, 2);
    const pole = c.linear('pole', 'silver', [0, 0, 1, 0], 0, 3);
    const board = c.linear('board', 'white', [0, 0, 0, 1], 0, 2);
    const ink = '#1A238A';
    return `<path d="M45 42 L51 42 L51 82 L45 82 Z" fill="${pole}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${v.rr(37, 80, 22, 4.5, 2)}" fill="#6E6E80"/>
      <path d="${v.rr(38, 48, 20, 22, 2.5)}" fill="${board}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M42 53 L54 53 M42 57.5 L54 57.5 M42 62 L50 62" stroke="#6E61A8" stroke-width="1.8" stroke-linecap="round"/>
      <path d="${body}" fill="${sign}"/>
      <path d="${v.rr(34, 15, 28, 21, [6, 6, 2, 2])}" fill="${ink}"/>
      <path d="${v.rr(37.5, 18.5, 21, 7, 2)}" fill="#FFF7A8"/>
      <path d="M48 18.5 L48 25.5" stroke="${ink}" stroke-width="1.6"/>
      <circle cx="39.5" cy="30.5" r="2" fill="#FFF7A8"/><circle cx="56.5" cy="30.5" r="2" fill="#FFF7A8"/>
      <rect x="36" y="36" width="5" height="4" rx="1" fill="${ink}"/><rect x="55" y="36" width="5" height="4" rx="1" fill="${ink}"/>`;
  },
};
