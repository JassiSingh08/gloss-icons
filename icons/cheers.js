// Each glass is drawn upright around its foot and tipped toward the other; place() applies the
// same turn to the outline so the two always match.
const place = (d, deg, tx, ty) => {
  const a = (deg * Math.PI) / 180;
  return d.replace(/(-?[\d.]+)[ ,]+(-?[\d.]+)/g, (_, x, y) => `${(tx + x * Math.cos(a) - y * Math.sin(a)).toFixed(2)} ${(ty + x * Math.sin(a) + y * Math.cos(a)).toFixed(2)}`);
};
const glass = 'M-12 -70 L12 -70 C13 -56 11 -44 1.8 -39.5 L1.8 -6 C6 -5 10.5 -4 10.5 -2 C10.5 0 6 0.5 0 0.5 C-6 0.5 -10.5 0 -10.5 -2 C-10.5 -4 -6 -5 -1.8 -6 L-1.8 -39.5 C-11 -44 -13 -56 -12 -70 Z';
const wine = 'M-12.4 -57 C-6 -55.5 6 -55.5 12.4 -57 C12 -48 9 -42.5 1.8 -39.8 L-1.8 -39.8 C-9 -42.5 -12 -48 -12.4 -57 Z';
const L = [29, 84, 8];
const R = [67, 84, -8];
module.exports = {
  id: 'cheers',
  name: 'Cheers',
  emoji: '🥂',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['drinks', 'toast', 'celebrate', 'date', 'wine', 'anniversary'],
  tone: 'sky',
  body: [place(glass, L[2], L[0], L[1]), place(glass, R[2], R[0], R[1])],
  shine: [36, 25, -75],
  draw(c) {
    const glassFill = c.linear('a', 'sky', [0, 0, 1, 1], 0, 2);
    const red = c.radial('wine', 'red', 0.35, 0.2);
    const one = ([x, y, deg]) => `<g transform="translate(${x} ${y}) rotate(${deg})">
        <path d="${glass}" fill="${glassFill}" fill-opacity=".42"/>
        <path d="M-1.8 -39.5 L1.8 -39.5 L1.8 -6 L-1.8 -6 Z M-10.5 -2 C-10.5 -4 -6 -5 0 -5 C6 -5 10.5 -4 10.5 -2 C10.5 0 6 0.5 0 0.5 C-6 0.5 -10.5 0 -10.5 -2 Z" fill="#E6F6FF" fill-opacity=".7"/>
        <path d="${wine}" fill="${red}"/>
        <path d="M-12.4 -57 C-6 -55.5 6 -55.5 12.4 -57" stroke="#FF7A62" stroke-width="1.2" fill="none"/>
        <path d="M-12 -70 L12 -70" stroke="#fff" stroke-opacity=".8" stroke-width="1.4"/>
        <path d="M-8.5 -66 C-9 -58 -8 -50 -4.5 -45" stroke="#fff" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      </g>`;
    const spark = (x, y, s) => `<path d="M${x} ${y - s} Q${x + s * 0.18} ${y - s * 0.18} ${x + s} ${y} Q${x + s * 0.18} ${y + s * 0.18} ${x} ${y + s} Q${x - s * 0.18} ${y + s * 0.18} ${x - s} ${y} Q${x - s * 0.18} ${y - s * 0.18} ${x} ${y - s} Z" fill="#FFF3A6"/>`;
    return `${one(L)}${one(R)}${spark(48, 9, 4.2)}${spark(40, 11, 2.2)}${spark(56, 11, 2.2)}`;
  },
};
