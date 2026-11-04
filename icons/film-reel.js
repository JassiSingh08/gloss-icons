const CX = 44;
const CY = 46;
const RAD = 31;
const f = (v) => v.toFixed(2);
const circle = (cx, cy, r, ccw) =>
  ccw
    ? `M${f(cx + r)} ${f(cy)} A${r} ${r} 0 1 0 ${f(cx - r)} ${f(cy)} A${r} ${r} 0 1 0 ${f(cx + r)} ${f(cy)} Z`
    : `M${f(cx + r)} ${f(cy)} A${r} ${r} 0 1 1 ${f(cx - r)} ${f(cy)} A${r} ${r} 0 1 1 ${f(cx + r)} ${f(cy)} Z`;

const holes = [-90, -18, 54, 126, 198].map((deg) => {
  const t = (deg * Math.PI) / 180;
  return circle(CX + 17.5 * Math.cos(t), CY + 17.5 * Math.sin(t), 7.6, true);
});
const body = [circle(CX, CY, RAD, false), ...holes, circle(CX, CY, 3.2, true)];

module.exports = {
  id: 'film-reel',
  name: 'Film Reel',
  group: 'Extras',
  tags: ['movie', 'film', 'cinema', 'movie night', 'video'],
  tone: 'silver',
  body,
  shine: [25.5, 27.5, -45],
  shineSize: [6, 2.4],
  draw(c) {
    const metal = c.radial('a', 'silver', 0.32, 0.25);
    const film = c.linear('film', 'black', [0, 0, 0, 1], 0, 2);
    let sprockets = '';
    for (let x = 50; x < 82; x += 6) sprockets += `<rect x="${x}" y="75.2" width="3.2" height="2.2" rx=".6"/><rect x="${x}" y="80.2" width="3.2" height="2.2" rx=".6"/>`;
    return `<path d="M40 73.5 L82 73.5 Q84 73.5 84 75.5 L84 82 Q84 84 82 84 L40 84 Z" fill="${film}" stroke="#05050A" stroke-opacity=".5" stroke-width="1"/>
      <g fill="#E9E4FF" opacity=".85">${sprockets}</g>
      <path d="${body.join(' ')}" fill="${metal}"/>
      <path d="${circle(CX, CY, 26.5, false)}" fill="none" stroke="${c.ramp('silver')[3]}" stroke-opacity=".3" stroke-width="1.2"/>
      <path d="${circle(CX, CY, 6.5, false)}" fill="none" stroke="${c.ramp('silver')[3]}" stroke-opacity=".45" stroke-width="1.4"/>`;
  },
};
