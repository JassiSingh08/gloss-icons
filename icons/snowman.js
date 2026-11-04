const sky = require('../src/parts/sky');
const star = require('../src/parts/star');

// Head and body as one figure-eight outline, traced round both circles between their crossings.
const H = [48, 35, 14];
const B = [48, 64, 20];
function figure() {
  const [x0, y0, r0] = H;
  const [, y1, r1] = B;
  const d = y1 - y0;
  const a = (r0 * r0 - r1 * r1 + d * d) / (2 * d);
  const h = Math.sqrt(r0 * r0 - a * a);
  const y = sky.n(y0 + a);
  const l = sky.n(x0 - h), r = sky.n(x0 + h);
  return `M${l} ${y} A${r0} ${r0} 0 1 1 ${r} ${y} A${r1} ${r1} 0 1 1 ${l} ${y} Z`;
}
const body = figure();

// snow: falling flakes and a drift at the feet.
function snowman(snow) {
  return {
    tone: 'silver',
    body,
    shine: [40, 27, -40],
    shineSize: [5, 2.2],
    draw(c) {
      const ink = '#1C1430';
      const hat = c.linear('hat', 'black', [0, 0, 1, 0], 0, 2);
      const scarf = c.linear('scarf', 'red', [0, 0, 1, 1], 0, 2);
      const twig = '#6E3A14';
      const arms = `<path d="M30 60 L14 48 M19 52 L14 54 M66 60 L82 48 M77 52 L81 46" stroke="${twig}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`;
      const drift = snow ? `<path d="M10 86 C16 76 30 74 40 78 C52 73 70 73 86 86 Z" fill="${c.radial('drift', 'white', 0.4, 0.2)}" stroke="#7C89B0" stroke-opacity=".6" stroke-width="1"/>` : '';
      const flakes = snow ? star.sparkle(18, 22, 3.6) + star.sparkle(80, 30, 3) + `<g fill="#fff" opacity=".9"><circle cx="24" cy="38" r="1.8"/><circle cx="74" cy="16" r="1.6"/><circle cx="84" cy="62" r="1.6"/><circle cx="13" cy="64" r="1.4"/></g>` : '';
      return `${flakes}${arms}${drift}
        <path d="${body}" fill="${sky.grad(c, 'a', sky.CLOUDS.fair.stops, 0.36, 0.2)}"/>
        <path d="M30 45 Q48 52 66 45 L66 50 Q48 57 30 50 Z" fill="${scarf}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
        <path d="M57 49 L62 64 L56 65 L52 51 Z" fill="${scarf}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
        <path d="M31 24 Q48 28 65 24 L65 21 Q48 25 31 21 Z" fill="${hat}" stroke="#05050A" stroke-opacity=".6" stroke-width="1"/>
        <path d="M38 23 L39 9 Q48 7 57 9 L58 23 Q48 25.5 38 23 Z" fill="${hat}" stroke="#05050A" stroke-opacity=".6" stroke-width="1"/>
        <path d="M38.6 19 Q48 21.4 57.4 19 L57.6 22.5 Q48 25 38.4 22.5 Z" fill="${c.linear('band', 'red', [0, 0, 1, 0], 1, 2)}"/>
        <circle cx="42.5" cy="33" r="2.2" fill="${ink}"/><circle cx="53.5" cy="33" r="2.2" fill="${ink}"/>
        <path d="M48 37 L60 39.5 L48 41 Z" fill="${c.linear('nose', 'orange', [0, 0, 1, 1], 1, 2)}"/>
        <path d="M43 43 Q48 45 53 43" stroke="${ink}" stroke-width="1.6" stroke-dasharray="0.1 3" stroke-linecap="round" fill="none"/>
        <circle cx="48" cy="61" r="2.2" fill="${ink}"/><circle cx="48" cy="70" r="2.2" fill="${ink}"/>`;
    },
  };
}

module.exports = {
  ...snowman(true),
  id: 'snowman',
  name: 'Snowman',
  emoji: '☃️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['snowman', 'winter', 'snow', 'christmas', 'cold'],
  snowman,
};
