const k = require('../src/parts/critter');
// A peacock front on with his train fanned out behind; the body is the silhouette that gets the gloss.
const body = 'M48 21 C53 21 56 25 55 30 C54 36 52 42 54 50 C60 54 62 62 60 70 C58 78 54 82 48 82 C42 82 38 78 36 70 C34 62 36 54 42 50 C44 42 42 36 41 30 C40 25 43 21 48 21 Z';
const CX = 48, CY = 62;
module.exports = {
  id: 'peacock',
  name: 'Peacock',
  emoji: '🦚',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['peacock', 'proud', 'feathers', 'bird', 'show off'],
  tone: 'blue',
  body,
  shine: [44, 26, -40],
  shineSize: [3.5, 1.8],
  draw(c) {
    const fan = c.radial('fan', 'green', 0.5, 0.7);
    const gold = c.radial('gold', 'gold', 0.4, 0.3);
    const blue = c.radial('blue', 'teal', 0.4, 0.3);
    const spot = (r, a) => {
      const t = (a * Math.PI) / 180;
      const x = k.n(CX + r * Math.cos(t)), y = k.n(CY + r * Math.sin(t));
      return `<path d="${k.ellipse(x, y, 4.2, 5.4, a + 90)}" fill="${gold}"/><path d="${k.ellipse(x, y, 2.8, 3.8, a + 90)}" fill="${blue}"/><circle cx="${x}" cy="${y}" r="1.7" fill="#080C3D"/>`;
    };
    let edge = `M${CX - 38} ${CY}`;
    for (let i = 1; i <= 9; i++) {
      const a = Math.PI + (i * Math.PI) / 9, m = Math.PI + ((i - 0.5) * Math.PI) / 9;
      edge += ` Q${k.n(CX + 42 * Math.cos(m))} ${k.n(CY + 42 * Math.sin(m))} ${k.n(CX + 38 * Math.cos(a))} ${k.n(CY + 38 * Math.sin(a))}`;
    }
    const spots = [195, 215, 235, 255, 285, 305, 325, 345].map((a) => spot(32, a)).join('') + [205, 235, 305, 335].map((a) => spot(19, a)).join('');
    return `${k.part(c, `${edge} L${CX + 20} ${CY + 14} L${CX - 20} ${CY + 14} Z`, fan, 'green')}
      ${spots}
      ${k.legs('M47 21 L45 13 M48 21 L48 12 M49 21 L51 13', '#0049A8', 1.4)}
      <circle cx="45" cy="12.5" r="2" fill="${blue}"/><circle cx="48" cy="11.5" r="2" fill="${blue}"/><circle cx="51" cy="12.5" r="2" fill="${blue}"/>
      <path d="${body}" fill="${c.radial('a', 'blue', 0.35, 0.25)}"/>
      ${k.part(c, 'M46.3 30 L49.7 30 L48 34.5 Z', c.radial('beak', 'cream', 0.3, 0.2), 'cream')}
      <path d="M44 27 L46.5 28 M52 27 L49.5 28" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>
      ${k.eye(45, 28, 1.5, '#001E4D')}${k.eye(51, 28, 1.5, '#001E4D')}`;
  },
};
