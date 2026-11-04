const a = require('../src/parts/animal');
const { canine } = require('./dog');

module.exports = canine({
  id: 'service-dog',
  name: 'Service Dog',
  emoji: '🐕‍🦺',
  tags: ['service dog', 'assistance', 'vest', 'working dog', 'accessibility'],
  coat: 'brown',
  earPal: 'brown',
  ink: '#140802',
  // A working vest over the back and chest, with a reflective band and a grab loop.
  overlay: (c, body) => a.clip(c, 'vest', body, `<path d="${a.spline([[33, 36], [48, 39.5], [64, 39], [66, 50], [64, 62], [48, 64], [36, 63], [31, 52]])}" fill="${c.radial('vest', 'red', 0.3, 0.2)}"/>
    <path d="M44 38 L48 38 L46 64 L42 64 Z" fill="${c.linear('band', 'gold', [0, 0, 0, 1], 0, 1)}"/>
    <path d="${a.spline([[33, 36], [48, 39.5], [64, 39], [66, 50], [64, 62], [48, 64], [36, 63], [31, 52]])}" fill="none" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.2"/>`),
  gear: () => a.line('M52 40 Q56 33 60 40', '#3D0003', 2.6),
});
