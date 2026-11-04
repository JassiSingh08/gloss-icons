const a = require('../src/parts/animal');

const body = a.spline([
  [18, 45], [24, 44], [32, 46], [44, 46.5], [58, 48], [67, 53], [71, 61], [67, 68.5], [56, 72], [40, 72.5], [28, 70.5],
  [22, 66], [16, 64], [10, 63.5], [6, 61], [7.5, 56.5], [12.5, 50],
]);
module.exports = {
  id: 'skunk',
  name: 'Skunk',
  emoji: '🦨',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['skunk', 'smell', 'stink', 'stripe', 'pee-yew'],
  tone: 'black',
  body,
  shine: [20, 49, -25],
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#05050A';
    const tailPts = [[64, 54], [74, 46], [80, 34], [78, 21], [69, 14], [60, 17]];
    const tail = a.tube(tailPts, 8.5, 6);
    const white = c.radial('w', 'white', 0.35, 0.2);
    return `${a.legs(c, 'black', [
        { x: 30, top: 66, w: 3.6, wf: 3, far: true, r: 2.6 },
        { x: 60, top: 66, w: 4.4, wf: 3, far: true, fx: 61, r: 2.6 },
        { x: 35, top: 67, w: 3.8, wf: 3.2, fx: 34.5, r: 2.6 },
        { x: 65, top: 66, w: 4.6, wf: 3.2, fx: 66, r: 2.6 },
      ])}
      <path d="${tail}" fill="${c.radial('tail', 'black', 0.35, 0.25)}"${a.edge('black')}/>
      ${a.clip(c, 'ts', tail, `<path d="${a.tube(tailPts, 3, 2.4)}" fill="${white}"/>`)}
      <path d="${body}" fill="${c.radial('a', 'black', 0.3, 0.2)}"/>
      ${a.clip(c, 'bs', body, `<path d="${a.tube([[14, 49], [24, 44.5], [40, 45.5], [56, 47], [66, 52]], 1.5, 3.4)}" fill="${white}"/>`)}
      ${a.part(c, 'ear', a.ellipse(24, 45.5, 3, 2.8), 'black')}
      <circle cx="17" cy="53.5" r="2.4" fill="#FFF3A6"/><circle cx="16.4" cy="53.5" r="1.4" fill="${ink}"/><circle cx="16" cy="52.8" r=".5" fill="#fff"/>
      <ellipse cx="6.8" cy="58.8" rx="1.6" ry="1.4" fill="#6E6E85"/>`;
  },
};
