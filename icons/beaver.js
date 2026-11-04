const a = require('../src/parts/animal');

const body = a.spline([
  [28, 36], [40, 33], [54, 36.5], [66, 44], [72, 56], [70, 68], [61, 76.5], [45, 79], [32, 77], [24, 71], [20, 63],
  [14, 59.5], [9, 55.5], [8.5, 49.5], [13, 43.5], [20, 38.5],
]);
module.exports = {
  id: 'beaver',
  name: 'Beaver',
  emoji: '🦫',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['beaver', 'dam', 'teeth', 'river', 'canada'],
  tone: 'brown',
  body,
  shine: [24, 43, -25],
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#1A0A02';
    const paddle = a.spline([[62, 76], [74, 69], [86, 68], [89, 74], [84, 81], [70, 83]]);
    c.def(`<pattern id="${c.id('scales')}" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(30)"><path d="M0 0 L4 4 M4 0 L0 4" stroke="#6E6E85" stroke-width=".6"/></pattern>`);
    return `<path d="${paddle}" fill="${c.radial('tail', 'black', 0.4, 0.2)}"${a.edge('black')}/>
      <path d="${paddle}" fill="url(#${c.id('scales')})" opacity=".7"/>
      <path d="${body}" fill="${c.radial('a', 'brown', 0.25, 0.25)}"/>
      ${a.clip(c, 'belly', body, `<ellipse cx="14" cy="55" rx="7" ry="5" fill="#E8B98A" opacity=".55"/>`)}
      <path d="${a.spline([[34, 76], [46, 76], [52, 81], [50, 84], [36, 84], [32, 81]])}" fill="${c.radial('foot', 'black', 0.35, 0.3)}"${a.edge('black')}/>
      <path d="${a.spline([[19, 64], [25, 62], [28, 67], [24, 71], [18, 70]])}" fill="${c.radial('paw', 'brown', 0.35, 0.3)}"${a.edge('brown')}/>
      <path d="M11 56 L15.5 56 L15.5 61.5 Q13.25 62.5 11 61.5 Z" fill="${c.linear('teeth', 'orange', [0, 0, 1, 0], 1, 2)}" stroke="#6B0F00" stroke-opacity=".5" stroke-width=".8"/>
      ${a.line('M13.25 56 L13.25 61.8', '#6B0F00', 0.7, ' opacity=".5"')}
      ${a.part(c, 'ear', a.ellipse(31, 38.5, 3.4, 3), 'brown')}
      ${a.sideEye(20.5, 44.5, { r: 2.2, ink })}
      <ellipse cx="9.6" cy="49.4" rx="2" ry="1.6" fill="${ink}"/>`;
  },
};
