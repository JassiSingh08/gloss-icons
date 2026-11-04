const a = require('../src/parts/animal');

// The bovine figure, facing left, head held low and forward. Ox, water buffalo and bison are
// variations: their own coat, horns and (for the bison) outline.
const OUTLINE = [
  [22, 29], [30, 31.5], [40, 36], [52, 38], [66, 38], [77, 39.5], [82, 46], [82.5, 56], [78.5, 64], [68, 67.5],
  [52, 69], [38, 67.5], [31, 63], [27, 56], [22, 52], [16.5, 52.5], [12, 50], [10, 44], [12.5, 37], [17, 31],
];

function bovine({ id, name, emoji, tags, coat, ink = '#1F0C02', hoof = '#241208', outline = OUTLINE, horn, hornPal = 'cream', ear = [[22, 34], [29, 30.5], [35, 31], [31, 36], [24, 37]], earPal, under = () => '', overlay = () => '', muzzle, tailPal, shine = [17, 36, -50], legsAt }) {
  const body = a.spline(outline);
  return {
    id, name, emoji, tags,
    group: 'Animals & Nature',
    subgroup: 'animal-mammal',
    tone: coat,
    body,
    shine,
    shineSize: [5, 2.3],
    draw(c) {
      const tp = tailPal ?? coat;
      const tail = `${a.line('M81 46 Q86 54 84.5 70', a.palettes[tp][2], 2.2)}<path d="${a.spline([[84.5, 67], [86.5, 71], [86, 77, 1], [83, 76], [82.5, 71]])}" fill="${c.radial('tuft', tp, 0.3, 0.2)}"/>`;
      const L = legsAt ?? [
        { x: 33.5, top: 62, w: 5, wf: 3.6, far: true },
        { x: 67, top: 60, w: 6.5, wf: 3.6, far: true, fx: 68, knee: [74, 2, 3.8] },
        { x: 39.5, top: 63, w: 5.4, wf: 3.8, fx: 39 },
        { x: 74, top: 60, w: 7, wf: 3.8, fx: 75, knee: [74, 2.5, 4] },
      ];
      return `${tail}${a.legs(c, coat, L, { hoof, ht: 4.2 })}
        ${under(c)}
        ${horn ? `<g transform="translate(5 -1.5)">${a.part(c, 'horn2', horn, hornPal, { cx: 0.6, cy: 0.5 })}</g>${a.part(c, 'horn', horn, hornPal, { cx: 0.3, cy: 0.2 })}` : ''}
        ${a.part(c, 'ear', a.spline(ear), earPal ?? coat, { cx: 0.3, cy: 0.3 })}
        <path d="${body}" fill="${c.radial('a', coat, 0.3, 0.25)}"/>
        ${overlay(c, body)}
        ${muzzle ? a.clip(c, 'mz', body, `<ellipse cx="11.5" cy="47" rx="7" ry="7.5" fill="${muzzle(c)}"/>`) : ''}
        ${a.sideEye(20.5, 38.5, { r: 2.2, ink })}
        <ellipse cx="11.5" cy="45" rx="1.4" ry="1.9" fill="${ink}" transform="rotate(-20 11.5 45)"/>
        ${a.line('M11 50.5 Q14 51.5 17 50.5', ink, 1.3, ' opacity=".6"')}`;
    },
  };
}

module.exports = {
  ...bovine({
    id: 'cow',
    name: 'Cow',
    emoji: '🐄',
    tags: ['cow', 'moo', 'farm', 'dairy', 'milk'],
    coat: 'white',
    ink: '#14102A',
    hoof: '#2A2438',
    horn: a.spline([[20, 31], [19.5, 25], [22, 20, 1], [23.5, 25], [24.5, 31]]),
    earPal: 'white',
    tailPal: 'black',
    under: (c) => `<path d="${a.spline([[58, 66], [70, 66], [70, 71], [67, 73.5], [61, 73.5], [58, 71]])}" fill="${a.custom(c, 'udder')}"${a.edge('pink', 0.4)}/>`,
    muzzle: (c) => a.custom(c, 'muzzle', a.ROSE, 0.4, 0.25),
    overlay: (c, body) => a.clip(c, 'spots', body, `<path d="${a.spline([[48, 37], [62, 36], [67, 44], [62, 54], [52, 55], [45, 47]])} ${a.spline([[72, 38], [84, 42], [84, 56], [76, 54], [71, 47]])} ${a.spline([[20, 28], [28, 30], [27, 37], [22, 40], [18, 35]])} ${a.spline([[33, 56], [40, 53], [44, 60], [40, 70], [32, 66]])}" fill="${c.radial('spot', 'black', 0.3, 0.2)}"/>`),
  }),
  bovine,
  OUTLINE,
};
