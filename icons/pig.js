const a = require('../src/parts/animal');

// The pig figure, facing left: a barrel on short legs. The boar shares it.
const OUTLINE = [
  [20, 30], [30, 31], [44, 32], [60, 32.5], [73, 35], [81, 43], [82, 54], [77, 62], [65, 66], [45, 67],
  [30, 65], [22, 60], [17, 55], [11.5, 53], [8, 49.5], [7.5, 43.5], [10.5, 38], [15, 33],
];
function porcine({ id, name, emoji, tags, coat, fill, legPal, stops, hoof, ink, snout, ear, extra = () => '', back = () => '', overlay = () => '' }) {
  const body = a.spline(OUTLINE);
  return {
    id, name, emoji, tags,
    group: 'Animals & Nature',
    subgroup: 'animal-mammal',
    tone: coat,
    body,
    shine: [33, 36, -12],
    shineSize: [6, 2.6],
    draw(c) {
      return `${back(c)}
        ${a.legs(c, legPal, [
          { x: 32, top: 60, w: 4.8, wf: 3.8, far: true },
          { x: 66, top: 60, w: 5.5, wf: 3.8, far: true, fx: 67 },
          { x: 38, top: 61, w: 5.2, wf: 4, fx: 37.5 },
          { x: 72, top: 60, w: 6, wf: 4, fx: 73 },
        ], { hoof, ht: 3.6, paint: stops && a.legPaint(c, stops) })}
        <path d="${body}" fill="${fill(c)}"/>
        ${overlay(c, body)}
        <ellipse cx="7.8" cy="46.5" rx="3" ry="5.6" fill="${snout(c)}"${a.edge(coat, 0.45)}/>
        <ellipse cx="7.3" cy="44.5" rx=".9" ry="1.5" fill="${ink}"/><ellipse cx="7.3" cy="49" rx=".9" ry="1.5" fill="${ink}"/>
        ${a.part(c, 'ear', a.spline(ear), coat, { fill: fill(c) })}
        ${a.sideEye(20, 39.5, { r: 2.1, ink })}
        ${a.line('M11.5 54 Q15 56 19 54', ink, 1.3, ' opacity=".55"')}
        ${extra(c)}`;
    },
  };
}

module.exports = {
  ...porcine({
    id: 'pig', name: 'Pig', emoji: '🐖', tags: ['pig', 'oink', 'farm', 'hog', 'bacon'],
    coat: 'pink',
    fill: (c) => a.custom(c, 'a', a.ROSE, 0.3, 0.25),
    legPal: 'pink',
    stops: a.ROSE,
    hoof: '#A84462',
    ink: '#3D0A1C',
    snout: (c) => a.custom(c, 'snout', ['#FFD0DA', '#F28CA3', '#C2506C', '#5E1A2E'], 0.4, 0.2),
    ear: [[19, 33], [22, 25], [29, 22, 1], [29, 29], [25, 35]],
    back: () => a.line('M80 44 Q87 42 86 37 Q85 33 82 35.5 Q80 38 84 40', '#C2506C', 2),
  }),
  porcine,
  OUTLINE,
};
