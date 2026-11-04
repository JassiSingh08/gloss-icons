// Shared sky parts: puffy clouds, rain drops, small snowflakes and bolts, the sun's rays, moon
// phases and the umbrella canopy, so the weather icons are one family with sun, moon, lightning
// and snowflake.

const n = (v) => +v.toFixed(2);
const DROP = 'M0 -10 C2.5 -5.5 5.5 -2.5 5.5 1 A5.5 5.5 0 0 1 -5.5 1 C-5.5 -2.5 -2.5 -5.5 0 -10 Z';

// Cloud colour ramps, lit from the top left like the palettes: a cool white for fair weather,
// slate for rain, a bruised dark for thunder.
const CLOUDS = {
  fair: { stops: ['#FFFFFF', '#F1F5FF', '#C5D0EA', '#7C89B0'], tone: 'silver' },
  rain: { stops: ['#E9EFF8', '#B4C2D8', '#7487A6', '#34435E'], tone: 'slate' },
  storm: { stops: ['#B9C1D6', '#78839F', '#46506E', '#1C2236'], tone: 'slate' },
};

function grad(c, name, [a, b, d, e], cx = 0.32, cy = 0.25, r = 0.95) {
  c.def(`<radialGradient id="${c.id(name)}" cx="${cx}" cy="${cy}" r="${r}"><stop offset="0" stop-color="${a}"/><stop offset="0.35" stop-color="${b}"/><stop offset="0.75" stop-color="${d}"/><stop offset="1" stop-color="${e}"/></radialGradient>`);
  return `url(#${c.id(name)})`;
}

// Outline of a row of overlapping circles on a flat base. circles run left to right as
// [x, y, r]; the first and last should reach the same bottom. Traced clockwise from the bottom
// of the first circle along each circle to its upper crossing with the next.
function cloudPath(circles) {
  const cross = ([x0, y0, r0], [x1, y1, r1]) => {
    const d = Math.hypot(x1 - x0, y1 - y0);
    const a = (r0 * r0 - r1 * r1 + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, r0 * r0 - a * a));
    const mx = x0 + (a * (x1 - x0)) / d, my = y0 + (a * (y1 - y0)) / d;
    const p = [mx + (h * (y1 - y0)) / d, my - (h * (x1 - x0)) / d];
    const q = [mx - (h * (y1 - y0)) / d, my + (h * (x1 - x0)) / d];
    return p[1] < q[1] ? p : q;
  };
  const first = circles[0];
  const last = circles[circles.length - 1];
  let cur = [first[0], first[1] + first[2]];
  let d = `M${n(cur[0])} ${n(cur[1])} `;
  circles.forEach((ci, i) => {
    const out = i < circles.length - 1 ? cross(ci, circles[i + 1]) : [last[0], last[1] + last[2]];
    const a0 = Math.atan2(cur[1] - ci[1], cur[0] - ci[0]);
    const a1 = Math.atan2(out[1] - ci[1], out[0] - ci[0]);
    const span = (a1 - a0 + 4 * Math.PI) % (2 * Math.PI);
    d += `A${ci[2]} ${ci[2]} 0 ${span > Math.PI ? 1 : 0} 1 ${n(out[0])} ${n(out[1])} `;
    cur = out;
  });
  return `${d}Z`;
}

// A cloud shape scaled and moved: circles are given in a unit layout around (0, 0).
function layout(circles, x, y, s) {
  return circles.map(([cx, cy, r]) => [n(x + cx * s), n(y + cy * s), n(r * s)]);
}

// The standard cloud: a big crown, a smaller left puff, a right puff, on a flat base.
// About 64 wide and 38 tall at s = 1, centred on x, base at y + 19.
const PUFFS = [
  [-22, 7, 12],
  [-10, -4, 14],
  [7, -7, 17],
  [24, 8, 11],
];
const cloud = (x, y, s = 1) => layout(PUFFS, x, y, s);
// Where light catches a puff's upper-left curve, as a spec's shine.
const shineOn = ([x, y, r], rot = -38) => [n(x - r * 0.42), n(y - r * 0.56), rot];

// Paint a cloud: a base fill, then each puff back to front with its own light so the bumps
// read as separate volumes, a crease under each, and a shaded belly.
function paintCloud(c, circles, { kind = 'fair', name = 'cloud', edge = false } = {}) {
  const k = CLOUDS[kind];
  const d = cloudPath(circles);
  const clip = c.id(`${name}-clip`);
  c.def(`<clipPath id="${clip}"><path d="${d}"/></clipPath>`);
  c.def(`<radialGradient id="${c.id(`${name}-puff`)}" cx="0.38" cy="0.32" r="0.7"><stop offset="0" stop-color="${k.stops[0]}"/><stop offset="0.5" stop-color="${k.stops[1]}" stop-opacity=".85"/><stop offset="1" stop-color="${k.stops[1]}" stop-opacity="0"/></radialGradient>`);
  c.def(`<linearGradient id="${c.id(`${name}-belly`)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0.45" stop-color="${k.stops[3]}" stop-opacity="0"/><stop offset="1" stop-color="${k.stops[3]}" stop-opacity=".55"/></linearGradient>`);
  const ys = circles.map((ci) => ci[1] - ci[2]);
  const bottom = circles[0][1] + circles[0][2];
  const top = Math.min(...ys);
  // Higher puffs sit behind, lower ones come forward. Where a puff's edge crosses one behind
  // it, a crease is drawn along just that stretch of its edge.
  const order = circles.map((ci, i) => i).sort((a, b) => circles[a][1] - circles[b][1]);
  const crease = (idx, k2) => {
    const [x, y, r] = circles[order[k2]];
    const behind = order.slice(0, k2).map((j) => circles[j]);
    let d2 = '';
    let run = false;
    for (let a = 0; a <= 360; a += 6) {
      const t = (a * Math.PI) / 180;
      const px = x + r * Math.cos(t), py = y + r * Math.sin(t);
      const inside = behind.some(([bx, by, br]) => Math.hypot(px - bx, py - by) < br - 0.6);
      if (inside) { d2 += `${run ? 'L' : 'M'}${n(px)} ${n(py)} `; run = true; } else run = false;
    }
    return d2;
  };
  const puffs = order
    .map((i, k2) => {
      const [x, y, r] = circles[i];
      const seam = crease(i, k2);
      return `${seam ? `<path d="${seam}" fill="none" stroke="${k.stops[3]}" stroke-opacity=".3" stroke-width="1.6" stroke-linecap="round"/>` : ''}<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${c.id(`${name}-puff`)})"/>`;
    })
    .join('');
  const deep = k.stops[3];
  return `<path d="${d}" fill="${grad(c, name, k.stops, 0.32, 0.2)}"${edge ? ` stroke="${deep}" stroke-opacity=".6" stroke-width="1.2"` : ''}/>
    <g clip-path="url(#${clip})">${puffs}<rect x="0" y="${n(top)}" width="96" height="${n(bottom - top + 1)}" fill="url(#${c.id(`${name}-belly`)})"/></g>`;
}

// A falling rain drop, round end at (x, y), tip up and leaning by rot degrees.
function drop(c, x, y, { scale = 1, rot = 15, palette = 'blue', name = 'drop' } = {}) {
  const id = c.id(name);
  if (!c.defs.some((d) => d.includes(`id="${id}"`))) c.radial(name, palette, 0.35, 0.3);
  return `<path d="${DROP}" fill="url(#${id})" stroke="${c.ramp(palette)[3]}" stroke-opacity=".5" stroke-width="${n(1 / scale)}" transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})"/>
    <ellipse cx="${n(-1.9)}" cy="${n(0)}" rx="1.3" ry="2.3" fill="#fff" opacity=".85" transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})"/>`;
}

// The snowflake icon, shrunk: centred on (x, y), about 72 * s across.
function flake(c, x, y, s = 0.25, { name = 'flake' } = {}) {
  const sf = require('../../icons/snowflake');
  const id = c.id(name);
  if (!c.defs.some((d) => d.includes(`id="${id}"`))) c.radial(name, 'sky', 0.35, 0.25);
  return `<path d="${sf.body}" fill="url(#${id})" stroke="#0A3A6B" stroke-opacity=".55" stroke-width="${n(1.2 / s)}" transform="translate(${x} ${y}) scale(${s}) translate(-48 -46.5)"/>`;
}

// The lightning icon, scaled: its box is 23–76 by 9–85; (x, y) is where its top-left goes.
function bolt(c, x, y, s = 0.5, { name = 'bolt' } = {}) {
  const lb = require('../../icons/lightning');
  return `<path d="${lb.body}" fill="${c.radial(name, 'yellow', 0.35, 0.2)}" stroke="#6B4A00" stroke-opacity=".6" stroke-width="${n(1.2 / s)}" stroke-linejoin="round" transform="translate(${x} ${y}) scale(${s}) translate(-23 -9)"/>`;
}

// The sun's twelve rays, as in sun.js, around a disc of radius r at (cx, cy).
function rays(cx, cy, r = 21.5, s = 1) {
  const f = (v) => v.toFixed(2);
  let d = '';
  for (let k = 0; k < 12; k++) {
    const t = (k * Math.PI) / 6;
    const len = (k % 2 ? 31 : 35.5) * s * (r / 21.5);
    const half = k % 2 ? 0.2 : 0.24;
    const pt = (rr, dt) => `${f(cx + rr * Math.sin(t + dt))} ${f(cy - rr * Math.cos(t + dt))}`;
    d += `M${pt(r + 0.5, -half)} L${pt(len, -0.035)} Q${pt(len + 2.2 * s, 0)} ${pt(len, 0.035)} L${pt(r + 0.5, half)} Z `;
  }
  return d;
}

// The whole sun as a secondary part (behind a cloud): rays plus an edged disc.
function sun(c, cx, cy, r = 21.5, { name = 'sun' } = {}) {
  const disc = `M${cx} ${n(cy - r)} A${r} ${r} 0 1 1 ${n(cx - 0.01)} ${n(cy - r)} Z`;
  return `<path d="${rays(cx, cy, r)}" fill="${c.radial(`${name}-ray`, 'orange', 0.5, 0.5)}" stroke="${c.ramp('orange')[3]}" stroke-opacity=".45" stroke-width="1.1" stroke-linejoin="round"/>
    <path d="${disc}" fill="${c.radial(name, 'gold', 0.35, 0.25)}" stroke="${c.ramp('gold')[3]}" stroke-opacity=".5" stroke-width="1.2"/>
    <ellipse cx="${n(cx - r * 0.45)}" cy="${n(cy - r * 0.5)}" rx="${n(r * 0.3)}" ry="${n(r * 0.15)}" fill="#fff" opacity=".75" transform="rotate(-40 ${n(cx - r * 0.45)} ${n(cy - r * 0.5)})"/>`;
}

// Moon: the lit side uses moon.js's yellow, the dark side a cool slate.
const MOON = { cx: 48, cy: 49, r: 34 };
const DARK = ['#8391B4', '#4A5880', '#27314F', '#111833'];
const moonDisc = (() => {
  const { cx, cy, r } = MOON;
  return `M${cx} ${cy - r} A${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r} Z`;
})();
// Faces keep their craters to the rim, clear of the features.
const RIM_CRATERS = [[23, 60, 3.4], [74, 62, 4], [62, 22, 2.6], [30, 25, 2]];
const CRATERS = [[36, 37, 6], [59, 31, 3.6], [62, 62, 7], [38, 66, 4], [27, 52, 3], [52, 50, 3.2], [70, 45, 2.6]];

// The lit part for a phase. side: 1 lit on the right (waxing), -1 on the left (waning).
// k: terminator bulge, from -1 (bulging into the lit side: thin crescent) through 0 (half)
// to 1 (bulging into the dark side: gibbous).
function litPath(side, k) {
  const { cx, cy, r } = MOON;
  const top = `${cx} ${cy - r}`;
  const bot = `${cx} ${cy + r}`;
  const first = `M${top} A${r} ${r} 0 0 ${side > 0 ? 1 : 0} ${bot}`;
  if (k === 0) return `${first} L${top} Z`;
  // Back from the bottom to the top: bulging toward the lit side for a crescent.
  const towardLit = k < 0;
  const goesRight = towardLit ? side > 0 : side < 0;
  return `${first} A${n(Math.abs(k) * r)} ${r} 0 0 ${goesRight ? 0 : 1} ${top} Z`;
}

function moonPhase(c, side, k, { full = false, dark = false, spots = CRATERS } = {}) {
  const craters = (fill, op) => spots.map(([x, y, cr]) => `<circle cx="${x}" cy="${y}" r="${cr}" fill="${fill}" opacity="${op}"/>`).join('');
  const darkFill = grad(c, 'dark', DARK, 0.32, 0.25);
  if (dark) return `<path d="${moonDisc}" fill="${darkFill}"/>${craters('#0B1026', 0.3)}`;
  const litFill = c.radial('a', 'yellow', 0.3, 0.25);
  const crater = c.ramp('gold')[2];
  if (full) return `<path d="${moonDisc}" fill="${litFill}"/>${craters(crater, 0.3)}`;
  const lit = litPath(side, k);
  c.def(`<clipPath id="${c.id('lit')}"><path d="${lit}"/></clipPath>`);
  return `<path d="${moonDisc}" fill="${darkFill}"/>${craters('#0B1026', 0.3)}
    <path d="${lit}" fill="${litFill}"/>
    <g clip-path="url(#${c.id('lit')})">${craters(crater, 0.3)}</g>`;
}

// Umbrella canopy: a dome with a scalloped hem and alternating gores. Returns the silhouette
// and the painted markup. (cx, top) is the crown; w is the half width; hem the hem's y.
function canopy(c, { cx = 48, top = 14, w = 36, hem = 46, gores = 4, palette = 'purple', alt = null } = {}) {
  const span = (2 * w) / gores;
  const sag = 5;
  let hemPath = '';
  for (let i = gores - 1; i >= 0; i--) {
    const x0 = cx - w + span * (i + 1), x1 = cx - w + span * i;
    hemPath += ` Q${n((x0 + x1) / 2)} ${n(hem - sag)} ${n(x1)} ${n(hem)}`;
  }
  const d = `M${n(cx - w)} ${hem} C${n(cx - w)} ${n(top + 6)} ${n(cx - w * 0.45)} ${top} ${cx} ${top} C${n(cx + w * 0.45)} ${top} ${n(cx + w)} ${n(top + 6)} ${n(cx + w)} ${hem}${hemPath} Z`;
  const fill = c.radial('a', palette, 0.32, 0.18);
  let goresMarkup = '';
  for (let i = 1; i < gores; i++) {
    const x = cx - w + span * i;
    // Each rib curves from the crown to a scallop point.
    goresMarkup += `M${cx} ${top} Q${n(cx + (x - cx) * 0.62)} ${n(top + 2)} ${n(x)} ${hem} `;
  }
  // Alternate gores in a second colour: fill every other panel between ribs.
  let panels = '';
  if (alt) {
    const altFill = c.radial('alt', alt, 0.32, 0.18);
    for (let i = 0; i < gores; i += 2) {
      const x0 = cx - w + span * i, x1 = cx - w + span * (i + 1);
      const rib = (x) => (Math.abs(x - (cx - w)) < 0.01 || Math.abs(x - (cx + w)) < 0.01 ? null : x);
      const a = rib(x0) === null ? `M${n(x0)} ${hem} C${n(cx - w)} ${n(top + 6)} ${n(cx - w * 0.45)} ${top} ${cx} ${top}` : `M${n(x0)} ${hem} Q${n(cx + (x0 - cx) * 0.62)} ${n(top + 2)} ${cx} ${top}`;
      const b = rib(x1) === null ? ` C${n(cx + w * 0.45)} ${top} ${n(cx + w)} ${n(top + 6)} ${n(x1)} ${hem}` : ` Q${n(cx + (x1 - cx) * 0.62)} ${n(top + 2)} ${n(x1)} ${hem}`;
      panels += `${a}${b} Q${n((x0 + x1) / 2)} ${n(hem - sag)} ${n(x0)} ${hem} Z `;
    }
    panels = `<path d="${panels}" fill="${altFill}"/>`;
  }
  const deep = c.ramp(palette)[3];
  const markup = `<path d="${d}" fill="${fill}"/>${panels}
    <path d="${goresMarkup}" fill="none" stroke="${deep}" stroke-opacity=".45" stroke-width="1.3"/>`;
  return { d, markup };
}

// Rotate every coordinate pair of a path made only of absolute M, L, C, Q and Z commands, so a
// tilted shape can still be a spec's body (the body cannot carry a transform).
function turn(d, deg, cx, cy) {
  const t = (deg * Math.PI) / 180;
  const cos = Math.cos(t), sin = Math.sin(t);
  return d.replace(/(-?[\d.]+)[ ,](-?[\d.]+)/g, (m, x, y) => {
    const dx = +x - cx, dy = +y - cy;
    return `${n(cx + dx * cos - dy * sin)} ${n(cy + dx * sin + dy * cos)}`;
  });
}

module.exports = { n, turn, DROP, CLOUDS, grad, cloudPath, layout, PUFFS, cloud, shineOn, paintCloud, drop, flake, bolt, rays, sun, MOON, DARK, moonDisc, CRATERS, RIM_CRATERS, litPath, moonPhase, canopy };
