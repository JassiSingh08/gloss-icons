const v = require('../src/parts/vehicle');
const DEG = -7;
const AT = [48, 50];
const S = 1.12;
const P = (d) => v.place(d, DEG, AT, S);
const hull = 'M-36 0 L-33 -14 Q-32 -16 -30 -16 L-27 -16 L-20 -5 L2 -6 Q10 -12.5 20 -10.5 Q30 -7 33.5 0 Q35 8 28 10 L-18 12 Q-30 12 -36 0 Z';
module.exports = {
  id: 'small-airplane',
  name: 'Small Airplane',
  emoji: '🛩️',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['propeller', 'light aircraft', 'pilot', 'flying lesson', 'prop plane'],
  tone: 'gold',
  body: P(hull),
  shine: (() => { const [x, y] = v.point(-12, -2, DEG, AT, S); return [x, y, DEG]; })(),
  shineSize: [6, 1.6],
  draw(c) {
    const paint = c.linear('a', 'gold', [0, 0, 0, 1], 0, 2);
    const wing = c.linear('wing', 'red', [0, 0, 1, 1], 0, 1);
        const spin = c.radial('spin', 'red', 0.35, 0.3);
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${DEG}) scale(${S})">
        <path d="M-10 11 L-9 18 M14 10 L15 17" stroke="#3A3E52" stroke-width="1.8"/>
        ${v.wheel(c, -9, 19.5, 3.6)}${v.wheel(c, 15, 18.5, 3.6)}
        <path d="${hull}" fill="${paint}"/>
        <path d="M-35.5 2 L34.5 2.5" stroke="#E3120B" stroke-width="3"/>
        <path d="M-32 -13 L-26.5 -13 L-21.5 -5.5 L-30 -5 Z" fill="#E3120B"/>
        <path d="M5 -6.5 Q11 -10.5 19 -9 Q25 -7 28 -2 L7 -2 Z" fill="${v.glass(c)}"/>
        <path d="M16 -9.5 L16 -2" stroke="#C98500" stroke-width="1.6"/>
        <path d="M-6 3 L10 2.5 L-6 24 Q-8.5 27 -12 25 Z" fill="${wing}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.2"/>
        <path d="M-30 1 L-22 1.5 L-34 10 Q-36 11 -36.5 9 Z" fill="${wing}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
        <ellipse cx="37" cy="1.5" rx="2.6" ry="16" fill="#E6F6FF" opacity=".35"/>
        <path d="M37 -13.5 L37 16.5" stroke="#2E2E3D" stroke-width="2" stroke-linecap="round" opacity=".7"/>
        <path d="M33.5 -3.5 Q39.5 -2.5 39.5 1.5 Q39.5 5.5 33.5 6.5 Z" fill="${spin}"/>
      </g>`;
  },
};
