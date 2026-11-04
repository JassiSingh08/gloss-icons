// Eight trapezoid teeth around a ring, with the hub hole cut out (drawn the other way round).
const C = [48, 51];
const TIP = 32.5;
const ROOT = 25;
const HOLE = 9.5;
const pt = (deg, r) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return `${(C[0] + Math.cos(a) * r).toFixed(2)} ${(C[1] + Math.sin(a) * r).toFixed(2)}`;
};
let d = `M${pt(-14, ROOT)}`;
for (let i = 0; i < 8; i++) {
  const a = i * 45;
  d += ` L${pt(a - 9, TIP)} A${TIP} ${TIP} 0 0 1 ${pt(a + 9, TIP)} L${pt(a + 14, ROOT)} A${ROOT} ${ROOT} 0 0 1 ${pt(a + 31, ROOT)}`;
}
d += ` Z M${pt(0, HOLE)} A${HOLE} ${HOLE} 0 1 0 ${pt(180, HOLE)} A${HOLE} ${HOLE} 0 1 0 ${pt(0, HOLE)} Z`;
const body = d;
module.exports = {
  id: 'gear',
  name: 'Settings',
  tags: ['settings', 'gear', 'cog', 'options', 'preferences'],
  tone: 'grey',
  body,
  shine: [30, 31, -45],
  draw(c) {
    const metal = c.radial('a', 'grey', 0.3, 0.22);
    const hub = c.radial('hub', 'grey', 0.7, 0.75);
    const ring = `M48 34 A17 17 0 1 1 47.99 34 Z M48 ${51 - HOLE} A${HOLE} ${HOLE} 0 1 0 48.01 ${51 - HOLE} Z`;
    return `<path d="${body}" fill="${metal}" fill-rule="evenodd"/>
      <path d="${ring}" fill="${hub}" fill-rule="evenodd" opacity=".6"/>
      <circle cx="48" cy="51" r="17" fill="none" stroke="#3A3E52" stroke-opacity=".35" stroke-width="1.6"/>
      <circle cx="48" cy="51" r="18.2" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="48" cy="51" r="${HOLE}" fill="none" stroke="#3A3E52" stroke-opacity=".7" stroke-width="2.4"/>
      <path d="M41.5 46 A9.5 9.5 0 0 1 48 41.5" stroke="#3A3E52" stroke-opacity=".5" stroke-width="2" fill="none"/>`;
  },
};
