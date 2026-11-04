const HEART = 'M48 80 C22 62 12 47 15 33 C18 20 35 15 48 28 C61 15 78 20 81 33 C84 47 74 62 48 80 Z';
// Scale and turn the heart about its middle (48,49), then move it to (x,y).
function place(s, rot, x, y) {
  const a = (rot * Math.PI) / 180;
  return HEART.replace(/(-?[\d.]+) (-?[\d.]+)/g, (_, px, py) => {
    const dx = (px - 48) * s;
    const dy = (py - 49) * s;
    return `${(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(2)} ${(y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(2)}`;
  });
}
const front = place(0.74, 12, 56, 58);
const back = place(0.6, -16, 35, 38);
module.exports = {
  id: 'two-hearts',
  name: 'Two Hearts',
  tags: ['couple', 'love', 'two', 'together', 'romance'],
  tone: 'pink',
  body: front,
  shine: [41, 46, -25],
  draw(c) {
    c.def(`<clipPath id="${c.id('back')}"><path d="${back}"/></clipPath>`);
    return `<path d="${back}" fill="${c.radial('b', 'red', 0.32, 0.22)}"/>
      <path d="${back}" fill="none" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.2"/>
      <ellipse cx="25" cy="30" rx="5" ry="2.6" fill="#fff" opacity=".8" transform="rotate(-55 25 30)"/>
      <path d="${front}" fill="none" stroke="#3D0003" stroke-opacity=".6" stroke-width="5" clip-path="url(#${c.id('back')})"/>
      <path d="${front}" fill="${c.radial('a', 'pink', 0.32, 0.22)}"/>`;
  },
};
