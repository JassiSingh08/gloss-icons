const s = require('../src/parts/sign');
const body = 'M42.6 17.8 Q48 9.4 53.4 17.8 L82.6 70.4 Q87.4 80 77 80 L19 80 Q8.6 80 13.4 70.4 Z';
const inner = 'M45.6 27 Q48 23 50.4 27 L73.6 69.4 Q75.4 73.4 71 73.4 L25 73.4 Q20.6 73.4 22.4 69.4 Z';
module.exports = {
  id: 'warning',
  name: 'Warning',
  emoji: '⚠️',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['warning', 'caution', 'alert', 'danger', 'attention'],
  tone: 'yellow',
  body: body,
  shine: [37, 34, -60],
  shineSize: [5.5, 2.4],
  draw(c) {
    const ink = '#2E1A00';
    const mark = (k) => `<path d="M44.6 41 Q44.6 37.6 48 37.6 Q51.4 37.6 51.4 41 L50 58.6 Q49.8 60.6 48 60.6 Q46.2 60.6 46 58.6 Z" fill="${k}"/><circle cx="48" cy="66.6" r="3.5" fill="${k}"/>`;
    return `<path d="${body}" fill="${c.radial('a', 'yellow', 0.35, 0.3)}"/>
      <path d="${inner}" fill="${c.radial('in', 'yellow', 0.5, 0.45)}"/>
      <path d="${inner}" fill="none" stroke="#6B4A00" stroke-opacity=".45" stroke-width="1.5"/>
      ${s.inkEmboss(mark, ink)}`;
  },
};
