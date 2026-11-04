const a = require('../src/parts/animal');

// Front on, sitting, long arms down to the ground; a broad face framed by cheek pads.
const body = a.mirror([
  [48, 13], [42, 13.5], [37.5, 17], [36, 23], [30, 27], [22, 32], [17, 42], [15, 54], [14.5, 66], [15, 78], [17, 83],
  [23, 84.5], [28, 82], [28.5, 72], [30, 64], [35, 68], [36, 76], [38, 83], [44, 84.5], [47.5, 78], [48, 70],
]);
const FUR = ['#F7A86A', '#C9601E', '#7E2E08', '#3A1002'];
const SKIN = ['#C8A890', '#8A6450', '#5A3C2C', '#2A1810'];
module.exports = {
  id: 'orangutan',
  name: 'Orangutan',
  emoji: '🦧',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['orangutan', 'ape', 'borneo', 'rainforest', 'wise'],
  tone: 'ember',
  body,
  shine: [26, 34, -45],
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#1A0A04';
    const strands = [[20, 40, 18, 56], [24, 46, 21, 64], [76, 40, 78, 56], [72, 46, 75, 64], [42, 50, 40, 64], [54, 50, 56, 64], [48, 54, 48, 68]];
    return `<path d="${body}" fill="${a.custom(c, 'a', FUR, 0.36, 0.2)}"/>
      ${a.clip(c, 'hair', body, `<path d="${strands.map(([x1, y1, x2, y2]) => a.taper(x1, y1, x2, y2, 1.5, 1)).join(' ')}" fill="#5A1E04" opacity=".4"/>
        <path d="M28 34 Q26 52 28 74 M68 34 Q70 52 68 74" stroke="#3A1002" stroke-width="1.4" fill="none" opacity=".55"/>`)}
      <ellipse cx="48" cy="30" rx="13" ry="10" fill="${a.custom(c, 'pads', SKIN, 0.35, 0.2)}"${a.edge('brown', 0.5)}/>
      <path d="${a.mirror([[48, 22], [44, 22], [41, 25], [41, 32], [43, 37], [48, 39]])}" fill="${a.custom(c, 'face', ['#E0C8B0', '#A88068', '#6E4C3A', '#2A1810'], 0.4, 0.2)}"/>
      ${a.eyes(27, 3.6, { rx: 1.7, ry: 1.8, lid: 0.4, tilt: 0.3, ink })}
      <circle cx="46.8" cy="31.5" r=".8" fill="${ink}"/><circle cx="49.2" cy="31.5" r=".8" fill="${ink}"/>
      ${a.line('M43 35.5 Q48 37.5 53 35.5', ink, 1.3)}`;
  },
};
