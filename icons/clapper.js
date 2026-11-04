// The open arm is the board's own rectangle turned about the hinge; its corners are worked out
// here so the outline and the drawing cannot drift apart.
const HINGE = [16, 39];
const ANGLE = -16;
const arm = (() => {
  const a = (ANGLE * Math.PI) / 180;
  const p = ([x, y]) => `${(HINGE[0] + x * Math.cos(a) - y * Math.sin(a)).toFixed(2)} ${(HINGE[1] + x * Math.sin(a) + y * Math.cos(a)).toFixed(2)}`;
  return `M${p([-1, -9])} L${p([64, -9])} L${p([64, 0])} L${p([-1, 0])} Z`;
})();
const board = 'M19 42 L77 42 Q80 42 80 45 L80 80 Q80 84 76 84 L20 84 Q16 84 16 80 L16 45 Q16 42 19 42 Z';
module.exports = {
  id: 'clapper',
  name: 'Clapperboard',
  tags: ['film', 'movie', 'cinema', 'action', 'scene', 'date night'],
  tone: 'black',
  body: [arm, board],
  shine: [24, 56, -30],
  draw(c) {
    const slate = c.linear('a', 'black', [0, 0, 0, 1], 0, 2);
    const armFill = c.linear('arm', 'black', [0, 0, 0, 1], 0, 1);
    const stripe = c.linear('stripe', 'white', [0, 0, 0, 1], 0, 2);
    c.def(`<clipPath id="${c.id('band')}"><rect x="16" y="42" width="64" height="10"/></clipPath>`);
    c.def(`<clipPath id="${c.id('armclip')}"><rect x="-1" y="-9" width="65" height="9"/></clipPath>`);
    const bars = (y0, y1, dir) => [0, 1, 2, 3, 4, 5]
      .map((i) => {
        const x = -6 + i * 13;
        return dir > 0
          ? `<path d="M${x} ${y1} L${x + 6.5} ${y1} L${x + 12.5} ${y0} L${x + 6} ${y0} Z"/>`
          : `<path d="M${x} ${y0} L${x + 6.5} ${y0} L${x + 12.5} ${y1} L${x + 6} ${y1} Z"/>`;
      })
      .join('');
    return `<path d="${board}" fill="${slate}"/>
      <g clip-path="url(#${c.id('band')})" fill="${stripe}"><g transform="translate(16 0)">${bars(42, 52, 1)}</g></g>
      <path d="M16 52 L80 52" stroke="#05050A" stroke-opacity=".5" stroke-width="1.2"/>
      <g stroke="#D8D2EE" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round">
        <path d="M22 64 L74 64 M22 74 L74 74 M48 64 L48 80"/>
      </g>
      <g transform="translate(${HINGE[0]} ${HINGE[1]}) rotate(${ANGLE})">
        <rect x="-1" y="-9" width="65" height="9" fill="${armFill}"/>
        <g clip-path="url(#${c.id('armclip')})" fill="${stripe}">${bars(-9, 0, -1)}</g>
      </g>
      <circle cx="19.5" cy="41" r="3.2" fill="${c.radial('pin', 'silver')}" stroke="#05050A" stroke-opacity=".5"/>`;
  },
};
