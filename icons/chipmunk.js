const a = require('../src/parts/animal');

// Sitting up on its haunches, facing left, an acorn in its paws and the tail up behind.
const body = a.spline([
  [33, 21], [41, 21.5], [47, 27], [51, 37], [57, 49], [62, 61], [63, 73], [58, 81.5], [44, 84], [33, 82.5],
  [28, 75], [28.5, 63], [30.5, 53], [28.5, 46.5], [22, 44.5], [16.5, 41], [16.5, 34.5], [21.5, 27.5], [27.5, 22.5],
]);
module.exports = {
  id: 'chipmunk',
  name: 'Chipmunk',
  emoji: '🐿️',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['chipmunk', 'squirrel', 'acorn', 'nuts', 'forest'],
  tone: 'amber',
  body,
  shine: [24, 29, -45],
  shineSize: [4.5, 2.1],
  draw(c) {
    const ink = '#2A1200';
    const tail = a.tube([[58, 78], [70, 72], [79, 58], [80, 42], [75, 28], [67, 21]], 7, 6);
    const stripes = `${a.taper(36, 22, 60, 66, 1.8, -5)} ${a.taper(44, 25, 63, 60, 1.6, -3)}`;
    return `<path d="${tail}" fill="${c.radial('tail', 'amber', 0.4, 0.3)}"${a.edge('amber')}/>
      ${a.clip(c, 'tailc', tail, `<path d="${a.tube([[58, 78], [70, 72], [79, 58], [80, 42], [75, 28], [67, 21]], 2.4, 1.6)}" fill="#5E2E00" opacity=".55"/>`)}
      <path d="${body}" fill="${c.radial('a', 'amber', 0.3, 0.2)}"/>
      ${a.clip(c, 'st', body, `<path d="${a.tube([[40, 24], [50, 38], [57, 52], [61, 66]], 2.6, 2)}" fill="#3A1A00" opacity=".8"/>
        <path d="${a.tube([[44, 24], [53, 37], [60, 50], [63.5, 62]], 1.2, 1)}" fill="#FFF4D6"/>
        <ellipse cx="38" cy="70" rx="9" ry="12" fill="#FFF4D6" opacity=".75"/>
        <path d="M17 37 Q26 34 34 36 Q26 38 18 40 Z" fill="#3A1A00" opacity=".7"/><path d="M18 41 Q27 39 33 40" stroke="#FFF4D6" stroke-width="1.6" fill="none"/>`)}
      ${a.part(c, 'ear', a.spline([[33, 23], [35, 16], [39, 15.5], [39.5, 22]]), 'amber')}
      <path d="${a.spline([[22, 52], [27, 49], [31, 53], [29, 59], [24, 59]])}" fill="${c.radial('nut', 'brown', 0.35, 0.3)}"${a.edge('brown')}/>
      <path d="M21.5 52.5 Q26.5 47 31.5 53 Q27 51 21.5 52.5 Z" fill="#5C4420"/>
      <path d="${a.spline([[30, 51], [33, 47], [37, 50], [33, 56]])}" fill="${c.radial('paw', 'amber', 0.3, 0.3)}"${a.edge('amber')}/>
      ${a.sideEye(23.5, 33, { r: 2.2, ink })}
      <ellipse cx="17" cy="37.5" rx="1.4" ry="1.2" fill="${ink}"/>
      <path d="${a.spline([[40, 80], [52, 79], [58, 83], [56, 85], [42, 85]])}" fill="${c.linear('foot', 'amber', [0, 0, 0, 1], 1, 2)}"${a.edge('amber')}/>`;
  },
};
