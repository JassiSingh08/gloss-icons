const ball = require('../src/parts/ball');
const glyph = require('../src/parts/glyph');

const body = 'M22 58 L74 58 Q80 58 82 64 L85 78 Q86 84 80 84 L16 84 Q10 84 11 78 L14 64 Q16 58 22 58 Z';
const knob = ball.make(48, 24, 12);

module.exports = {
  id: 'joystick',
  name: 'Joystick',
  emoji: '🕹️',
  group: 'Activities',
  subgroup: 'game',
  tags: ['joystick', 'arcade', 'retro', 'gaming', 'controller'],
  tone: 'black',
  body,
  shine: [22, 63, -12],
  shineSize: [6, 1.8],
  draw(c) {
    return `<path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M14 64 Q16 58 22 58 L74 58 Q80 58 82 64 L83 68 L13 68 Z" fill="${c.linear('top', 'black', [0, 0, 0, 1], 0, 1)}"/>
      <ellipse cx="48" cy="63" rx="12" ry="3.4" fill="#05050A"/>
      ${glyph.tube(c, 'M48 62 L48 32', { width: 5, palette: 'silver', name: 'stick' })}
      <ellipse cx="70" cy="63" rx="5.5" ry="2.6" fill="#8A0006"/>
      <ellipse cx="70" cy="61.8" rx="5.5" ry="2.6" fill="${c.radial('btn', 'red', 0.3, 0.25)}"/>
      <path d="${knob.body}" fill="${knob.fill(c, 'knob', 'red')}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.2"/>
      <ellipse cx="43.5" cy="18.5" rx="4" ry="2.2" fill="#fff" opacity=".85" transform="rotate(-40 43.5 18.5)"/>`;
  },
};
