const p = require('../src/parts/paper');
const body = p.rr(10, 24, 76, 52, 5);
module.exports = {
  id: 'videocassette',
  name: 'Videocassette',
  emoji: '📼',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['vhs', 'tape', 'retro', 'video', 'rewind'],
  tone: 'black',
  body,
  shine: [17, 30, -30],
  shineSize: [5.5, 2.2],
  draw(c) {
    const k = c.ramp('black');
    const spool = (x) => {
      let teeth = '';
      for (let i = 0; i < 6; i++) {
        const t = (i * 60 * Math.PI) / 180;
        teeth += `M${p.n(x + 2.6 * Math.cos(t))} ${p.n(56 + 2.6 * Math.sin(t))} L${p.n(x + 4.6 * Math.cos(t))} ${p.n(56 + 4.6 * Math.sin(t))} `;
      }
      return `<circle cx="${x}" cy="56" r="6.4" fill="#F7F5FF"/>${p.line(teeth, '#141420', 1.6)}`;
    };
    return `<path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${p.rr(18, 29, 60, 14, 2)}" fill="${c.linear('label', 'white', [0, 0, 0, 1], 0, 2)}"/>
      <path d="M18 34 L78 34 L78 37 L18 37 Z" fill="#E3120B" opacity=".85"/>
      ${p.line('M23 40 L46 40', '#8C83AD', 1.4, 0.8)}
      <path d="${p.rr(26, 48, 44, 16, 3)}" fill="#05050A"/>
      <circle cx="37" cy="56" r="10" fill="#4A2A12"/>
      <circle cx="59" cy="56" r="7" fill="#4A2A12"/>
      ${spool(37)}${spool(59)}
      <path d="M27 49 L69 49" stroke="#fff" stroke-opacity=".25" stroke-width="1.4"/>
      <path d="M22 76 L28 70 L68 70 L74 76" fill="${k[3]}" opacity=".7"/>`;
  },
};
