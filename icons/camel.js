const a = require('../src/parts/animal');

// The camel figure, facing left: head held out on a neck that dips down and forward, humps on a
// short high body, long legs.
const ONE = [
  [14, 25], [20, 26.5], [24, 32], [26, 41], [30, 45], [36, 42.5], [42, 33], [50, 25], [58, 25.5], [64, 34], [70, 40],
  [78, 43], [82, 50], [80, 57.5], [72, 61.5], [54, 62.5], [40, 61.5], [33, 58], [28, 53.5], [22, 51], [18.5, 45], [16.5, 37.5],
  [13, 34.5], [8, 34.5], [5.5, 31.5], [7, 27.5], [10, 25.5],
];
const TWO = [
  [14, 25], [20, 26.5], [24, 32], [26, 41], [30, 45], [35, 41], [39, 31], [45, 26.5], [50, 31], [54, 37.5], [59, 32], [65, 27.5],
  [71, 32], [76, 41], [82, 50], [80, 57.5], [72, 61.5], [54, 62.5], [40, 61.5], [33, 58], [28, 53.5], [22, 51], [18.5, 45], [16.5, 37.5],
  [13, 34.5], [8, 34.5], [5.5, 31.5], [7, 27.5], [10, 25.5],
];
function camelid({ id, name, emoji, tags, coat, outline, shaggy }) {
  const body = a.spline(outline);
  return {
    id, name, emoji, tags,
    group: 'Animals & Nature',
    subgroup: 'animal-mammal',
    tone: coat,
    body,
    shine: [12, 29, -30],
    shineSize: [4, 1.9],
    draw(c) {
      const ink = '#2A1A08';
      return `${a.line('M81 49 Q85 55 83.5 66', a.palettes[coat][2], 2)}
        ${a.legs(c, coat, [
          { x: 36, top: 56, w: 3.8, wf: 2.8, far: true, knee: [70, 0, 2.8] },
          { x: 69, top: 56, w: 5.2, wf: 2.8, far: true, fx: 70, knee: [70, 2.5, 2.8] },
          { x: 41.5, top: 57, w: 4, wf: 3, fx: 41, knee: [70, -0.5, 3] },
          { x: 75, top: 55, w: 5.6, wf: 3, fx: 76, knee: [70, 3, 3] },
        ])}
        <path d="${body}" fill="${c.radial('a', coat, 0.3, 0.2)}"/>
        ${shaggy ? a.clip(c, 'shag', body, shaggy(c)) : ''}
        ${a.part(c, 'ear', a.spline([[18, 26.5], [21, 22], [23.5, 24], [21.5, 28]]), coat)}
        ${a.sideEye(14, 29.5, { r: 2, ink })}
        ${a.line('M7 29 L9 30 M6.5 33.5 Q9 35 12 34', ink, 1.2, ' opacity=".7"')}`;
    },
  };
}

module.exports = {
  ...camelid({ id: 'camel', name: 'Camel', emoji: '🐪', tags: ['camel', 'desert', 'hump', 'dromedary', 'sahara'], coat: 'sand', outline: ONE }),
  camelid,
  TWO,
};
