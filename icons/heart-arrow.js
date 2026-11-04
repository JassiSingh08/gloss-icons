const HEART = 'M48 80 C22 62 12 47 15 33 C18 20 35 15 48 28 C61 15 78 20 81 33 C84 47 74 62 48 80 Z';
function place(s, x, y) {
  return HEART.replace(/(-?[\d.]+) (-?[\d.]+)/g, (_, px, py) => `${(x + (px - 48) * s).toFixed(2)} ${(y + (py - 49) * s).toFixed(2)}`);
}
const body = place(0.84, 49, 53);
// The arrow runs from the tail at T to the tip at H; it is drawn whole behind the heart.
const T = [13, 79];
const H = [84.5, 19.5];
const len = Math.hypot(H[0] - T[0], H[1] - T[1]);
const d = [(H[0] - T[0]) / len, (H[1] - T[1]) / len];
const n = [-d[1], d[0]];
const at = (t, s = 0) => `${(T[0] + d[0] * t + n[0] * s).toFixed(2)} ${(T[1] + d[1] * t + n[1] * s).toFixed(2)}`;
module.exports = {
  id: 'heart-arrow',
  name: 'Heart and Arrow',
  emoji: '💘',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['in sync', 'cupid', 'love', 'match', 'crush'],
  tone: 'red',
  body,
  shine: [31, 37, -40],
  draw(c) {
    const shaft = c.linear('shaft', 'gold', [0, 0, 1, 1], 0, 2);
    const tip = c.linear('tip', 'silver', [0, 0, 1, 1], 0, 2);
    const feather = c.linear('feather', 'pink', [0, 0, 1, 1], 0, 1);
    const edge = '#5E3A00';
    const vane = (t, side) => `<path d="M${at(t)} L${at(t - 5, side * 6.5)} L${at(t - 13, side * 6.5)} L${at(t - 9)} Z" fill="${feather}" stroke="#4A0016" stroke-opacity=".5" stroke-width=".9" stroke-linejoin="round"/>`;
    return `<path d="M${at(1)} L${at(len - 8)}" stroke="${edge}" stroke-width="5" stroke-linecap="round"/>
      <path d="M${at(1)} L${at(len - 8)}" stroke="${shaft}" stroke-width="3.2" stroke-linecap="round"/>
      ${vane(14, 1)}${vane(14, -1)}${vane(21, 1)}${vane(21, -1)}
      <path d="M${at(len)} L${at(len - 15, 7)} L${at(len - 11)} L${at(len - 15, -7)} Z" fill="${tip}" stroke="#3A3E52" stroke-opacity=".7" stroke-width="1" stroke-linejoin="round"/>
      <path d="${body}" fill="${c.radial('a', 'red', 0.32, 0.22)}"/>`;
  },
};
