const a = require('../src/parts/animal');

// The feline figure, facing left, tail curled up. Black cat, tiger and leopard share it.
const OUTLINE = [
  [17, 25], [23, 27], [27, 33], [33, 40], [50, 42], [66, 41], [76, 42.5], [81, 48], [80, 56], [73, 61],
  [62, 59.5], [50, 62], [38, 62], [31, 58.5], [27, 51], [23, 46.5], [17, 46], [11.5, 44], [7.5, 39.5], [8, 33.5], [11, 28],
];
const EARS = [[[10, 31], [10, 18, 1], [17, 26]], [[15, 26.5], [21, 17, 1], [23, 27]]];

function feline({ id, name, emoji, tags, coat = 'amber', ink = '#2A1200', eyeFill, legW = 1, overlay = () => '', legOver, tailOver, shine = [13, 32, -40] }) {
  const body = a.spline(OUTLINE);
  const tail = a.tube([[78, 47], [85, 42], [87, 33], [84, 24], [79, 21]], 3.4, 2.4);
  return {
    id, name, emoji, tags,
    group: 'Animals & Nature',
    subgroup: 'animal-mammal',
    tone: coat,
    body,
    shine,
    shineSize: [4.5, 2.1],
    draw(c) {
      const eye = eyeFill
        ? `<path d="M12.3 34.2 Q16.5 29.3 20.8 33.3 Q16.8 38.6 12.3 34.2 Z" fill="${eyeFill(c)}"/><ellipse cx="16.6" cy="34" rx="1.1" ry="2.7" fill="${ink}"/><circle cx="15.2" cy="32.6" r=".7" fill="#fff"/>`
        : a.sideEye(16.5, 34, { r: 2.4, ink, lid: 0.4 });
      return `${a.part(c, 'tail', tail, coat, { cx: 0.3, cy: 0.2 })}${tailOver ? a.clip(c, 'tailc', tail, tailOver(c)) : ''}
        ${a.legs(c, coat, [
          { x: 33, top: 56, w: 4 * legW, wf: 3 * legW, far: true, r: 3 },
          { x: 69, top: 55, w: 6 * legW, wf: 3 * legW, far: true, fx: 70, knee: [72, 3, 2.8 * legW], r: 3 },
          { x: 38.5, top: 57, w: 4.4 * legW, wf: 3.2 * legW, fx: 38, r: 3 },
          { x: 75, top: 54, w: 6.5 * legW, wf: 3.2 * legW, fx: 76, knee: [72, 3.5, 3 * legW], r: 3 },
        ], { over: legOver?.(c) })}
        ${EARS.map((e, i) => a.part(c, 'ear' + i, a.spline(e), coat, { cx: 0.3, cy: 0.3 })).join('')}
        <path d="${body}" fill="${c.radial('a', coat, 0.25, 0.25)}"/>
        ${overlay(c, body)}
        ${eye}
        <path d="M7 37 L9.5 37 L8.3 39 Z" fill="#C2436A" stroke="#C2436A" stroke-linejoin="round"/>
        ${a.line('M8.3 39.5 Q9.5 42 12.5 41.5', ink, 1.2, ' opacity=".7"')}
        ${a.line('M10 39.5 L1 38 M10.5 40.5 L2 42', '#fff', 0.8, ' opacity=".6"')}`;
    },
  };
}

module.exports = {
  ...feline({
    id: 'cat', name: 'Cat', emoji: '🐈', tags: ['cat', 'pet', 'kitty', 'meow', 'purr'],
    overlay: (c, body) => a.clip(c, 'tabby', body, `<path d="${[[50, 41, 48, 52], [57, 41, 56, 53], [64, 40.5, 64, 52], [71, 41, 72, 51], [26, 33, 22, 40]].map(([x1, y1, x2, y2]) => a.taper(x1, y1, x2, y2, 2)).join(' ')}" fill="#B85F00" opacity=".55"/>`),
  }),
  feline,
  OUTLINE,
};
