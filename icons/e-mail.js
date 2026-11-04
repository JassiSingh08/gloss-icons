const p = require('../src/parts/paper');
const OPT = { deg: 0, shift: [-3, 4] };
const fake = { linear: () => '', ramp: () => [] };
module.exports = {
  id: 'e-mail',
  name: 'E-mail',
  emoji: '📧',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['email', 'mail', 'inbox', 'message', 'online'],
  tone: 'cream',
  body: p.envelope(fake, OPT).body,
  shine: [18, 43, -30],
  draw(c) {
    const e = p.envelope(c, OPT);
    const at = 'M73.4 30 C73.4 27.6 71.6 26 69.4 26 C67 26 65.6 28 65.6 30.2 C65.6 32.5 67.2 34 69.2 34 C71.6 34 73.4 32.4 73.4 30 L73.4 31.6 C73.4 33.6 74.6 34.6 76 34.6 C78 34.6 79.4 32.6 79.4 29.6 C79.4 24 75 20.2 69.6 20.2 C64 20.2 59.6 24.4 59.6 30.2 C59.6 35.8 64 40 69.6 40 C71.6 40 73.4 39.4 74.8 38.4';
    return `${e.back}${e.pocket}
      <circle cx="70" cy="30" r="15.5" fill="${c.radial('badge', 'blue', 0.3, 0.22)}" stroke="#001E4D" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${at}" stroke="#001E4D" stroke-opacity=".45" stroke-width="3" fill="none" stroke-linecap="round" transform="translate(.6 1)"/>
      <path d="${at}" stroke="#fff" stroke-width="2.8" fill="none" stroke-linecap="round"/>
      <ellipse cx="63" cy="21.5" rx="3.4" ry="1.6" fill="#fff" opacity=".7" transform="rotate(-40 63 21.5)"/>`;
  },
};
