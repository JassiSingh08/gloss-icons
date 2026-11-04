const body = 'M45.5 17.7 Q48 17 50.5 17.7 L79.5 26.8 Q82 27.6 82 30 L82 69 Q82 71 80 71.8 L50.5 83.2 Q48 84.2 45.5 83.2 L16 71.8 Q14 71 14 69 L14 30 Q14 27.6 16.5 26.8 Z';
// A point on the left face (u from the outer edge to the corner, v down the height) or right face.
const lf = (u, v) => [14 + 34 * u, 27.5 + 10.5 * u + v];
const rf = (u, v) => [48 + 34 * u, 38 - 10.5 * u + v];
const quad = (f, u0, u1, v0, v1) => {
  const p = [f(u0, v0), f(u1, v0), f(u1, v1), f(u0, v1)];
  return `M${p.map(([x, y]) => `${+x.toFixed(2)} ${+y.toFixed(2)}`).join(' L')} Z`;
};
module.exports = {
  id: 'kaaba',
  name: 'Kaaba',
  emoji: '🕋',
  group: 'Travel & Places',
  subgroup: 'place-religious',
  tags: ['mecca', 'islam', 'hajj', 'pilgrimage', 'muslim'],
  tone: 'black',
  body,
  shine: [26, 30, 17],
  shineSize: [6, 1.6],
  draw(c) {
    const top = c.linear('top', 'black', [0, 0, 1, 1], 0, 1);
    const left = c.linear('left', 'black', [0, 0, 0, 1], 1, 2);
    const right = c.linear('right', 'black', [0, 0, 1, 1], 2, 3);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 0], 0, 2);
    const door = c.linear('door', 'gold', [0, 0, 1, 1], 0, 2);
    let marks = '';
    for (let u = 0.08; u < 0.95; u += 0.12) marks += `${quad(lf, u, u + 0.06, 11.6, 13.2)} ${quad(rf, u, u + 0.06, 11.6, 13.2)} `;
    return `<path d="M48 17.5 L81.5 27.8 L48 38 L14.5 27.8 Z" fill="${top}"/>
      <path d="M14 27.5 L48 38 L48 84 L14 71 Z" fill="${left}"/>
      <path d="M48 38 L82 27.5 L82 71 L48 84 Z" fill="${right}"/>
      <path d="M14.5 27.8 L48 38 L81.5 27.8" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>
      <path d="${quad(lf, 0, 1, 9, 16)} ${quad(rf, 0, 1, 9, 16)}" fill="${gold}"/>
      <path d="${marks}" fill="#8A5A00" opacity=".55"/>
      <path d="${quad(rf, 0.16, 0.42, 22, 40)}" fill="${door}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>
      <path d="${quad(rf, 0.29, 0.29, 23, 39)}" stroke="#8A5A00" stroke-width="1"/>
      <path d="${quad(lf, 0, 1, 43.5, 46)} ${quad(rf, 0, 1, 43.5, 46)}" fill="#8E93AD" opacity=".7"/>
      <path d="M48 38 L48 84" stroke="#000" stroke-opacity=".35" stroke-width="1"/>`;
  },
};
