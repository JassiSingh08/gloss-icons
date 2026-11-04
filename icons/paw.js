const ellipse = (cx, cy, rx, ry, rot) => {
  const t = (rot * Math.PI) / 180;
  const dx = rx * Math.cos(t), dy = rx * Math.sin(t);
  const f = (v) => v.toFixed(2);
  return `M${f(cx + dx)} ${f(cy + dy)} A${rx} ${ry} ${rot} 1 1 ${f(cx - dx)} ${f(cy - dy)} A${rx} ${ry} ${rot} 1 1 ${f(cx + dx)} ${f(cy + dy)} Z`;
};

const pad = 'M48 46 C56 46 62 51.5 67.5 58 C73 64.5 73 73.5 67 78.5 C62 82.5 55.5 80.5 48 80.5 C40.5 80.5 34 82.5 29 78.5 C23 73.5 23 64.5 28.5 58 C34 51.5 40 46 48 46 Z';
const toes = [
  [22.5, 42, 7, 9.2, 20],
  [36.5, 26.5, 7.6, 10, 8],
  [59.5, 26.5, 7.6, 10, -8],
  [73.5, 42, 7, 9.2, -20],
];
const body = [pad, ...toes.map((t) => ellipse(...t))];

module.exports = {
  id: 'paw',
  name: 'Paw Print',
  emoji: '🐾',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['animals', 'pet', 'dog', 'cat', 'paw'],
  tone: 'orange',
  body,
  shine: [37, 56, -40],
  shineSize: [6, 2.8],
  draw(c) {
    // One gradient per pad, so the toes are lit like the main pad instead of sharing its box.
    const fill = c.radial('a', 'orange', 0.35, 0.2);
    const bean = c.radial('bean', 'orange', 0.35, 0.25);
    const beans = toes
      .map(([x, y, rx, ry, rot], i) => {
        const hx = x - rx * 0.32, hy = y - ry * 0.45;
        return `<path d="${body[i + 1]}" fill="${bean}"/><ellipse cx="${hx.toFixed(2)}" cy="${hy.toFixed(2)}" rx="2.8" ry="1.5" fill="#fff" opacity=".8" transform="rotate(${rot - 55} ${hx.toFixed(2)} ${hy.toFixed(2)})"/>`;
      })
      .join('');
    return `<path d="${pad}" fill="${fill}"/>${beans}`;
  },
};
