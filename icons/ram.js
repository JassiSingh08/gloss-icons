const a = require('../src/parts/animal');

// The sheep figure, facing left: a woolly cloud on thin dark legs, the face out in front.
const body = a.wool(54, 49, 28, 16, 13, 0.07, 0.2);
function ovine({ id, name, emoji, tags, coat, face, ink, horn, ear = true }) {
  return {
    id, name, emoji, tags,
    group: 'Animals & Nature',
    subgroup: 'animal-mammal',
    tone: coat,
    body,
    shine: [37, 39, -30],
    shineSize: [6, 2.6],
    draw(c) {
      const head = a.spline([[22, 31], [28, 33], [30, 41], [27, 50], [20, 55], [13, 55], [9, 51], [10.5, 44], [15, 35]]);
      return `${a.legs(c, face, [
          { x: 37, top: 60, w: 3, wf: 2.4, far: true },
          { x: 67, top: 60, w: 3.4, wf: 2.4, far: true, fx: 68 },
          { x: 43, top: 61, w: 3.2, wf: 2.6, fx: 42.5 },
          { x: 73, top: 60, w: 3.6, wf: 2.6, fx: 74 },
        ], { hoof: '#140A06', ht: 3 })}
        <path d="${body}" fill="${c.radial('a', coat, 0.3, 0.25)}"/>
        ${a.clip(c, 'curls', body, `<path d="${a.wool(54, 49, 20, 10, 9, 0.12)}" fill="none" stroke="${a.palettes[coat][2]}" stroke-opacity=".35" stroke-width="1.4"/>`)}
        ${ear ? a.part(c, 'ear', a.spline([[24, 38], [30, 38.5], [35, 41], [30, 43], [25, 42]]), face) : ''}
        ${a.part(c, 'head', head, face, { cx: 0.3, cy: 0.25 })}
        <path d="${a.spline([[14, 34], [21, 28], [29, 31], [30, 37], [24, 37], [18, 38]])}" fill="${c.radial('tuft', coat, 0.3, 0.3)}"/>
        ${horn ? horn(c) : ''}
        ${a.sideEye(17, 42, { r: 2.1, ink: ink })}
        <ellipse cx="10.5" cy="49" rx="1" ry="1.5" fill="${ink}"/>
        ${a.line('M10.5 53 Q13 54.5 16 53.5', ink, 1.2, ' opacity=".6"')}`;
    },
  };
}

module.exports = {
  ...ovine({
    id: 'ram', name: 'Ram', emoji: '🐏', tags: ['ram', 'sheep', 'horns', 'aries', 'farm'],
    coat: 'cream', face: 'sand', ink: '#2A1A08',
    ear: false,
    // A heavy horn curling back and round under the ear.
    horn: (c) => `<g transform="translate(29 39) scale(1.3) translate(-29 -39)"><path d="${a.tube([[22, 34], [30, 31], [35.5, 36], [35, 44], [29.5, 47], [25.5, 43], [28, 39.5]], 4.2, 1.8)}" fill="${c.radial('horn', 'sand', 0.3, 0.2)}"${a.edge('sand', 0.7)}/>
      ${a.line('M27.5 32 L28.5 35.5 M32 33 L31 36.5 M35 38 L32 39 M35 42.5 L31.6 41.5', '#5C4420', 1, ' opacity=".55"')}</g>`,
  }),
  ovine,
};
