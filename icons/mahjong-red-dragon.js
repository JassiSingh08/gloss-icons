const body = 'M27 11 L61 11 Q66 11 67.5 15 L73.5 21 Q74.5 22.5 74.5 25 L74.5 79 Q74.5 84 69.5 84 L35 84 Q32.5 84 31 82.5 L23 75 Q21.5 73.5 21.5 71 L21.5 16 Q21.5 11 27 11 Z';
const face = 'M27 11 L61 11 Q66.5 11 66.5 16.5 L66.5 70.5 Q66.5 76 61 76 L27 76 Q21.5 76 21.5 70.5 L21.5 16.5 Q21.5 11 27 11 Z';
module.exports = {
  id: 'mahjong-red-dragon',
  name: 'Mahjong Red Dragon',
  emoji: '🀄',
  group: 'Activities',
  subgroup: 'game',
  tags: ['mahjong', 'tile', 'red dragon', 'game', 'chinese'],
  tone: 'green',
  body,
  shine: [26, 22, -60],
  shineSize: [6, 2.4],
  draw(c) {
    const red = c.ramp('red')[1];
    const s = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
    const zhong = 'M33 30 L55 30 L55 50 L33 50 Z M44 21 L44 66';
    return `<path d="${body}" fill="${c.linear('back', 'green', [0, 0, 1, 1], 1, 3)}"/>
      <path d="M27 14 L64 14 Q70.5 14 70.5 20 L70.5 75 Q70.5 80 65 80 L28 80 Q23 80 23 75 Z" fill="${c.linear('mid', 'ivory', [0, 0, 1, 1], 1, 3)}"/>
      <path d="${face}" fill="${c.linear('a', 'ivory', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${zhong}" stroke="#3D0003" stroke-opacity=".35" stroke-width="5.4" ${s} transform="translate(.8 1)"/>
      <path d="${zhong}" stroke="${red}" stroke-width="5.4" ${s}/>
      <path d="M33 30 L55 30 M44 21 L44 28" stroke="#FF7A62" stroke-opacity=".7" stroke-width="1.4" ${s} transform="translate(-.8 -1)"/>`;
  },
};
