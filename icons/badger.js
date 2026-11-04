const a = require('../src/parts/animal');

const body = a.spline([
  [24, 46], [36, 42], [52, 41], [68, 44], [78, 51.5], [80.5, 61], [75, 69.5], [58, 73], [40, 73], [28, 71],
  [20, 68], [12, 66], [6, 63], [5.5, 59], [10.5, 54], [17, 49],
]);
module.exports = {
  id: 'badger',
  name: 'Badger',
  emoji: '🦡',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['badger', 'burrow', 'stripes', 'woodland', 'honey badger'],
  tone: 'grey',
  body,
  shine: [36, 45, -10],
  shineSize: [6, 2.5],
  draw(c) {
    const ink = '#0E0E16';
    const blk = c.radial('blk', 'black', 0.3, 0.2);
    const white = c.radial('w', 'white', 0.35, 0.2);
    return `${a.legs(c, 'black', [
        { x: 30, top: 66, w: 4.4, wf: 3.8, far: true, r: 2.8 },
        { x: 68, top: 66, w: 5, wf: 3.8, far: true, fx: 69, r: 2.8 },
        { x: 36, top: 67, w: 4.6, wf: 4, fx: 35, r: 2.8 },
        { x: 74, top: 66, w: 5.2, wf: 4, fx: 75, r: 2.8 },
      ])}
      <path d="M79 54 Q86 56 85 62 Q81 61 78 59 Z" fill="${c.radial('tail', 'grey', 0.3, 0.3)}"${a.edge('grey')}/>
      <path d="${body}" fill="${c.radial('a', 'grey', 0.3, 0.2)}"/>
      ${a.clip(c, 'face', body, `<path d="${a.spline([[4, 66], [14, 70], [24, 72], [34, 74], [34, 60], [26, 52], [16, 51], [8, 55]])}" fill="${white}"/>
        <path d="${a.tube([[6, 59], [14, 54.5], [24, 52], [34, 51], [42, 51]], 2.2, 3.8)}" fill="${blk}"/>
        <path d="${a.tube([[5, 61.5], [12, 58.5], [22, 49], [30, 44], [40, 42]], 0.9, 2.4)}" fill="${white}"/>
        <path d="${a.tube([[8, 52], [16, 48], [26, 44], [34, 42]], 2, 3)}" fill="${blk}"/>`)}
      ${a.part(c, 'ear', a.ellipse(29, 50.5, 3, 2.6), 'white')}
      <circle cx="19" cy="54.8" r="1.6" fill="${ink}" stroke="#8A8AA0" stroke-width=".7"/>
      <ellipse cx="5.8" cy="60" rx="1.7" ry="1.6" fill="${ink}"/>`;
  },
};
