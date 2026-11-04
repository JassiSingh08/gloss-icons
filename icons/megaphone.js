// The cone is drawn along a straight axis and turned to point up to the right.
const ROT = (-30 * Math.PI) / 180;
const OX = 17, OY = 68;
const at = (x, y) => [OX + x * Math.cos(ROT) - y * Math.sin(ROT), OY + x * Math.sin(ROT) + y * Math.cos(ROT)];
const P = (d) => d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => at(+x, +y).map((v) => v.toFixed(2)).join(' '));
const body = P('M0 -5.5 L54 -21 Q60.5 0 54 21 L0 5.5 Q-2.5 0 0 -5.5 Z');

module.exports = {
  id: 'megaphone',
  name: 'Megaphone',
  emoji: '📣',
  group: 'Objects',
  subgroup: 'sound',
  tags: ['megaphone', 'cheer', 'announce', 'shout', 'rally'],
  tone: 'red',
  body,
  shine: [...at(22, -9), -40],
  shineSize: [6, 1.8],
  draw(c) {
    const cone = c.linear('a', 'red', [0, 0, 0.6, 1], 0, 2);
    const mouth = c.linear('mouth', 'red', [0, 0, 1, 1], 2, 3);
    const grip = c.linear('grip', 'black', [0, 0, 1, 0], 0, 2);
    const r = c.ramp('red');
    const [mx, my] = at(55, 0);
    const lines = [[-12, 72, -26], [0, 76, 0], [12, 72, 26]].map(([y0, x1, y1]) => P(`M64 ${y0} L${x1} ${y1}`)).join(' ');
    return `<path d="${P('M10 7 L13 19 Q14 22 17 21 L21 20 Q23 19.5 22.5 17 L20 5')}" fill="${grip}" stroke="#05050A" stroke-opacity=".6" stroke-width="1"/>
      <path d="${body}" fill="${cone}"/>
      <path d="${P('M23 -11.5 L33 -14.5 Q36.5 0 33 14.5 L23 11.5 Q25.5 0 23 -11.5 Z')}" fill="#fff" opacity=".92"/>
      <ellipse cx="${mx.toFixed(2)}" cy="${my.toFixed(2)}" rx="5.2" ry="20.2" fill="${mouth}" stroke="${r[3]}" stroke-opacity=".6" stroke-width="1.2" transform="rotate(-30 ${mx.toFixed(2)} ${my.toFixed(2)})"/>
      <ellipse cx="${(mx + 1).toFixed(2)}" cy="${(my + 0.5).toFixed(2)}" rx="3" ry="16" fill="${r[3]}" opacity=".7" transform="rotate(-30 ${mx.toFixed(2)} ${my.toFixed(2)})"/>
      <path d="${lines}" stroke="#FFC21A" stroke-width="3.4" stroke-linecap="round"/>`;
  },
};
