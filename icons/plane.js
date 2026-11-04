// Drawn level around the origin, then turned nose-up and scaled into the frame; place() gives
// the outline the same turn so it hugs the drawing.
const ANGLE = -14;
const SCALE = 0.86;
const AT = [48, 50];
const place = (d) => {
  const a = (ANGLE * Math.PI) / 180;
  return d.replace(/(-?[\d.]+)[ ,]+(-?[\d.]+)/g, (_, x, y) => {
    const X = x * SCALE, Y = y * SCALE;
    return `${(AT[0] + X * Math.cos(a) - Y * Math.sin(a)).toFixed(2)} ${(AT[1] + X * Math.sin(a) + Y * Math.cos(a)).toFixed(2)}`;
  });
};
const hull = 'M-38 -27 Q-38 -30 -35 -30 L-31 -30 L-18 -9 L24 -9 C33 -9 40 -4 40 0 C40 5 33 8 26 8 L-12 8 C-20 8 -28 3 -35 -3 Z';
const wing = 'M-4 5 L9 5 L-12 30 Q-15 33 -18 31 L-16 27 Z';
module.exports = {
  id: 'plane',
  name: 'Aeroplane',
  tags: ['travel', 'flight', 'holiday', 'trip', 'abroad', 'long distance'],
  tone: 'white',
  body: place(hull),
  shine: (() => { const [x, y] = place('-4 -6').split(' ').map(Number); return [x, y, ANGLE - 4]; })(),
  draw(c) {
    const skin = c.linear('a', 'white', [0, 0, 0, 1], 0, 2);
    const fin = c.linear('fin', 'blue', [0, 0, 1, 1], 0, 2);
    const metal = c.linear('metal', 'silver', [0, 0, 0, 1], 1, 2);
    const metalFar = c.linear('far', 'silver', [0, 0, 0, 1], 2, 3);
    const pod = c.radial('pod', 'silver', 0.4, 0.2);
    c.def(`<clipPath id="${c.id('hull')}"><path d="${hull}"/></clipPath>`);
    const ink = '#0A1240';
    const windows = Array.from({ length: 8 }, (_, i) => `<rect x="${-14 + i * 4.8}" y="-4.6" width="2.6" height="3.4" rx="1.2" fill="${ink}"/>`).join('');
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${SCALE})">
        <path d="M-2 -8 L8 -8 L-8 -22 Q-10 -23.5 -11.5 -21.5 Z" fill="${metalFar}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.4"/>
        <path d="${hull}" fill="${skin}"/>
        <g clip-path="url(#${c.id('hull')})">
          <path d="M-40 -30 L-31 -30 L-18 -9 L-24 -9 L-24 8 L-40 8 Z" fill="${fin}"/>
          <rect x="-30" y="1.2" width="72" height="2.8" fill="${fin}"/>
        </g>
        ${windows}
        <path d="M29 -5 L34.5 -5 C36.5 -4 38 -2.5 38.6 -1 L29.5 -1 Z" fill="${ink}"/>
        <path d="M-27 -2 L-18 -1 L-31 8 Q-34 9.5 -34.5 7 Z" fill="${fin}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.2"/>
        <path d="${wing}" fill="${metal}" stroke="#3A3E52" stroke-opacity=".55" stroke-width="1.4"/>
        <rect x="-8" y="13" width="14" height="7" rx="3.5" fill="${pod}" stroke="#3A3E52" stroke-opacity=".55" stroke-width="1.2"/>
        <ellipse cx="5.4" cy="16.5" rx="1.3" ry="2.6" fill="${ink}"/>
      </g>`;
  },
};
