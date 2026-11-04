const av = require('../src/parts/av');
const zig = (x, d) => `M${x} 32 ${[38, 44, 50, 56, 62].map((y, i) => `L${i % 2 ? x : x - d} ${y}`).join(' ')}`;

module.exports = av.button({
  id: 'vibration-mode',
  name: 'Vibration Mode',
  emoji: '📳',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['vibrate', 'silent', 'phone', 'mobile', 'buzz'],
}, () => (k) => av.hole(av.phone(), k) + av.line(`${zig(31, 5)} ${zig(65, -5)}`, k, 3.4));
