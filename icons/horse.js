const a = require('../src/parts/animal');

// The equine figure, facing left: torso, neck and head in one outline; legs, tail, mane and ears
// outside it. Donkey and zebra are the same animal with different ears, coat and hair.
const OUTLINE = [
  [24, 13], [30, 17], [36, 26], [43, 37], [56, 40.5], [70, 39.5], [79, 43], [82.5, 51], [80, 60], [71, 65],
  [53, 66], [38, 64], [32, 58], [30, 49], [28, 41], [24, 35], [18.5, 39], [13, 44], [8.5, 42.5], [7.5, 37], [11, 28], [17, 18],
];
const HAIR = ['#7A4520', '#4A220A', '#2A1205', '#140802'];

function equine({ id, name, emoji, tags, coat = 'brown', hair = HAIR, ink = '#1F0C02', hoof = '#241208', ear = [[22, 14], [23, 4, 1], [28.5, 13]], ear2, mane, tail, overlay = () => '', legOver, shine = [15, 25, -55] }) {
  const body = a.spline(OUTLINE);
  return {
    id, name, emoji, tags,
    group: 'Animals & Nature',
    subgroup: 'animal-mammal',
    tone: coat,
    body,
    shine,
    shineSize: [5, 2.3],
    draw(c) {
      const h = a.custom(c, 'hair', hair, 0.3, 0.2);
      const t = tail ?? a.spline([[78, 44], [85, 48], [87.5, 60], [86, 72], [82.5, 79, 1], [81.5, 68], [80, 56]]);
      const m = mane ?? a.spline([[22, 11.5], [29.5, 15], [36.5, 23.5], [44, 34.5], [46.5, 40], [40, 36], [33, 28], [27, 20]]);
      return `<path d="${t}" fill="${h}"${a.edge(coat)}/>
        ${a.legs(c, coat, [
          { x: 34, top: 57, w: 4.8, wf: 2.9, far: true, knee: [72, 0.5, 3.2] },
          { x: 68, top: 56, w: 6.5, wf: 2.9, far: true, fx: 69, knee: [71, 3.5, 3.2] },
          { x: 40, top: 58, w: 5, wf: 3, fx: 39, knee: [72, -0.5, 3.4] },
          { x: 74, top: 55, w: 7.5, wf: 3, fx: 75, knee: [71, 4, 3.4] },
        ], { hoof, ht: 4, over: legOver?.(c) })}
        ${ear2 ? a.part(c, 'ear2', a.spline(ear2), coat, { cx: 0.3, cy: 0.2 }) : ''}
        ${a.part(c, 'ear', a.spline(ear), coat, { cx: 0.3, cy: 0.2 })}
        <path d="${body}" fill="${c.radial('a', coat, 0.3, 0.25)}"/>
        ${overlay(c, body)}
        <path d="${m}" fill="${h}"/>
        ${a.sideEye(20, 25.5, { r: 2.3, ink })}
        <ellipse cx="11" cy="37.5" rx="1.3" ry="1.9" fill="${ink}" transform="rotate(-25 11 37.5)"/>
        ${a.line('M9.5 42 Q12.5 43.5 15.5 42.5', ink, 1.3, ' opacity=".6"')}`;
    },
  };
}

module.exports = {
  ...equine({ id: 'horse', name: 'Horse', emoji: '🐎', tags: ['horse', 'racing', 'gallop', 'stallion', 'ride'] }),
  equine,
  OUTLINE,
};
