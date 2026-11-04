const CX = 48;
const CY = 51;
const RAD = 31.5;
const body = `M${CX} ${CY - RAD} A${RAD} ${RAD} 0 1 1 ${CX - 0.01} ${CY - RAD} Z`;

// Silver ramp interpolated by how much each tile faces the light (top left, slightly forward).
const SHADES = ['#3A3E52', '#5C6178', '#8E93AD', '#B9BDCF', '#D9DCE8', '#F4F5FA'];
const SPARKLE = ['#FFFFFF', '#C9ECFF', '#FF9BEA', '#FFF3A6', '#9BF5E6'];

function tiles() {
  const L = [-0.5, -0.62, 0.6];
  const len = Math.hypot(...L);
  const light = L.map((v) => v / len);
  const step = Math.PI / 12;
  const proj = (lat, lon) => [CX + RAD * Math.cos(lat) * Math.sin(lon), CY - RAD * Math.sin(lat)];
  const out = [];
  let n = 0;
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      const la0 = -Math.PI / 2 + i * step, la1 = la0 + step;
      const lo0 = -Math.PI / 2 + j * step, lo1 = lo0 + step;
      const corners = [proj(la0, lo0), proj(la0, lo1), proj(la1, lo1), proj(la1, lo0)];
      const mx = corners.reduce((s, p) => s + p[0], 0) / 4;
      const my = corners.reduce((s, p) => s + p[1], 0) / 4;
      const shrink = corners.map(([x, y]) => [mx + (x - mx) * 0.84, my + (y - my) * 0.84]);
      const lat = (la0 + la1) / 2, lon = (lo0 + lo1) / 2;
      const nrm = [Math.cos(lat) * Math.sin(lon), -Math.sin(lat), Math.cos(lat) * Math.cos(lon)];
      const b = Math.max(0, nrm[0] * light[0] + nrm[1] * light[1] + nrm[2] * light[2]);
      const h = Math.abs(Math.sin(i * 12.9898 + j * 78.233) * 43758.5453) % 1;
      let fill = SHADES[Math.min(SHADES.length - 1, Math.floor(b * 5.2 + h * 1.3))];
      if (h > 0.9) fill = SPARKLE[n++ % SPARKLE.length];
      out.push(`<path d="M${shrink.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(' L')} Z" fill="${fill}"/>`);
    }
  }
  return out.join('');
}

module.exports = {
  id: 'disco-ball',
  name: 'Disco Ball',
  tags: ['party', 'dance', 'disco', 'night out', 'club', 'mirror ball'],
  tone: 'silver',
  body,
  shine: [35, 34, -40],
  draw(c) {
    c.def(`<clipPath id="${c.id('ball')}"><path d="${body}"/></clipPath>`);
    const cap = c.linear('cap', 'silver', [0, 0, 1, 0], 0, 2);
    return `<path d="M44.5 15 L44.5 13.5 A3.5 3.5 0 1 1 51.5 13.5 L51.5 15" fill="none" stroke="${c.ramp('silver')[2]}" stroke-width="2.2"/>
      <path d="M42 19.8 L43 15 Q48 13.5 53 15 L54 19.8 Z" fill="${cap}" stroke="${c.ramp('silver')[3]}" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="#2A2D40"/>
      <g clip-path="url(#${c.id('ball')})">${tiles()}</g>
      <path d="M27 28 L28.3 32.7 L33 34 L28.3 35.3 L27 40 L25.7 35.3 L21 34 L25.7 32.7 Z" fill="#fff" opacity=".95"/>`;
  },
};
