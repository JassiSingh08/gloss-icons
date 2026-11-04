const a = require('../src/parts/animal');

// A show clip, facing left: a big mane over the chest, a shaved waist, pompoms on hips, ankles
// and tail. The mane is the silhouette that takes the gloss; the rest is wool around it.
const body = a.wool(33, 50, 14, 13.5, 9, 0.07, 0.3);
module.exports = {
  id: 'poodle',
  name: 'Poodle',
  emoji: '🐩',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['poodle', 'dog', 'fancy', 'groomed', 'pet'],
  tone: 'white',
  body,
  shine: [27, 41, -40],
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#1E1238';
    const fluff = (name, cx, cy, rx, ry, curls = 7) => a.part(c, name, rx < 6 ? a.ellipse(cx, cy, rx, ry) : a.wool(cx, cy, rx, ry, curls + 3, 0.06), 'white', { cx: 0.35, cy: 0.3 });
    const legs = a.legs(c, 'white', [
      { x: 31, top: 58, w: 2.4, wf: 2, far: true },
      { x: 66, top: 54, w: 2.6, wf: 2, far: true },
      { x: 37, top: 59, w: 2.5, wf: 2.1 },
      { x: 72, top: 54, w: 2.7, wf: 2.1 },
    ]);
    return `${a.line('M75 47 Q80 40 81 30', '#BDB2E8', 2.4)}${fluff('tail', 81.5, 26, 5, 5, 6)}
      ${legs}
      ${fluff('pf1', 31, 79.5, 4, 3.6, 6)}${fluff('pf2', 66, 79.5, 4, 3.6, 6)}
      <path d="${a.tube([[42, 51], [54, 50.5], [64, 48.5]], 4.5, 4)}" fill="${c.radial('waist', 'white', 0.35, 0.2)}"${a.edge('white')}/>
      ${fluff('hip', 70, 48, 9, 8.5, 8)}
      ${fluff('pf3', 37, 80.5, 4.2, 3.8, 6)}${fluff('pf4', 72, 80.5, 4.2, 3.8, 6)}
      <path d="${body}" fill="${c.radial('a', 'white', 0.3, 0.25)}"/>
      ${a.part(c, 'head', a.spline([[18, 27], [25, 29], [28, 36], [24, 42], [16, 42], [9.5, 40], [5.5, 36.5], [8, 33], [13, 30]]), 'white', { cx: 0.3, cy: 0.25 })}
      ${fluff('top', 21, 23, 8, 7, 7)}
      <path d="M26 16 L31.5 13 L30.5 19.5 Z M26 16 L20.5 12.5 L21 19 Z" fill="${c.radial('bow', 'pink', 0.35, 0.3)}"/><circle cx="26" cy="16" r="2" fill="${c.radial('bow', 'pink', 0.35, 0.3)}"/>
      ${fluff('ear', 25, 40, 5, 8.5, 6)}
      ${a.sideEye(16, 34.5, { r: 2, ink })}
      <ellipse cx="6.3" cy="35.6" rx="1.8" ry="1.5" fill="${ink}"/>`;
  },
};
