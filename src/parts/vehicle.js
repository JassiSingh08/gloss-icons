// Shared bits for the transport icons, so every vehicle has the same wheels, glass and lamps as
// icons/car.js. Gradients are defined once per icon however many wheels or windows use them.
//
//   const v = require('../src/parts/vehicle');
//   v.wheel(c, 29, 74.5)          side-view tyre with a silver hub (car.js proportions)
//   v.tyreFront(c, 18, 70, 10, 14) a tyre seen head-on, for the oncoming vehicles
//   v.glass(c)                    url() of the window glass gradient
//   v.rr(x, y, w, h, r)           rounded-rect path; r may be [tl, tr, br, bl]
//   v.place(d, deg, [x, y], s)    turn, scale and move a path (no arc commands)

const f = (n) => +n.toFixed(2);

function once(c, key, make) {
  c.__vehicle ??= {};
  if (!(key in c.__vehicle)) c.__vehicle[key] = make();
  return c.__vehicle[key];
}

function glass(c, kind = 'day') {
  return once(c, `glass-${kind}`, () => {
    const id = c.id(`glass-${kind}`);
    const [a, b] = kind === 'dark' ? ['#9FC4E8', '#1E3D66'] : ['#E4F6FF', '#4FA8E8'];
    c.def(`<linearGradient id="${id}" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`);
    return `url(#${id})`;
  });
}

const tyreFill = (c) => once(c, 'tyre', () => c.radial('v-tyre', 'black', 0.35, 0.3));
const hubFill = (c, palette = 'silver') => once(c, `hub-${palette}`, () => c.radial(`v-hub-${palette}`, palette, 0.3, 0.25));

function wheel(c, x, y, r = 9.5, { hub = 'silver', hubR = r * 0.46 } = {}) {
  return `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${tyreFill(c)}" stroke="#05050A" stroke-opacity=".5" stroke-width="1.2"/>
    <circle cx="${f(x)}" cy="${f(y)}" r="${f(hubR)}" fill="${hubFill(c, hub)}"/><circle cx="${f(x)}" cy="${f(y)}" r="${f(Math.max(1, hubR * 0.32))}" fill="${c.ramp(hub)[3]}"/>`;
}

// Train and tram wheels: smaller, set in a dark bogie frame.
function bogie(c, x, y, { r = 5, gap = 13, color = '#1E1E2A' } = {}) {
  return `<rect x="${f(x - gap / 2 - r - 2)}" y="${f(y - r - 2.5)}" width="${f(gap + 2 * r + 4)}" height="${f(r + 1.5)}" rx="2" fill="${color}"/>
    ${wheel(c, x - gap / 2, y, r)}${wheel(c, x + gap / 2, y, r)}`;
}

// A rail on sleepers for the trains to stand on, along the ground line.
function rail(x1, x2, y = 84) {
  let ties = '';
  for (let x = x1 + 3; x < x2 - 2; x += 8) ties += `<rect x="${f(x)}" y="${f(y - 0.5)}" width="4.5" height="3.2" rx=".8" fill="#4A3020"/>`;
  return `${ties}<rect x="${f(x1)}" y="${f(y - 1.6)}" width="${f(x2 - x1)}" height="2.2" rx="1" fill="#8E93AD" stroke="#2E2E3A" stroke-opacity=".6" stroke-width=".8"/>`;
}

// Sea for the boats: crests touch y, troughs dip 3 below, flat bottom on the ground line. Give the
// hull a straight keel at y so the body outline never crosses the water.
function water(c, y = 72, x1 = 7, x2 = 89) {
  const fill = once(c, 'water', () => c.linear('v-water', 'blue', [0, 0, 0, 1], 0, 2));
  let top = `M${x1} ${y + 1.5}`;
  for (let x = x1; x < x2 - 1; x += 10) {
    const e = Math.min(x + 10, x2);
    top += ` Q${f(x + (e - x) / 4)} ${y - 0.5} ${f(x + (e - x) / 2)} ${y + 1.5} Q${f(x + (3 * (e - x)) / 4)} ${y + 3.5} ${f(e)} ${y + 1.5}`;
  }
  return `<path d="${top} L${x2} 80.5 Q${x2} 84 ${x2 - 3.5} 84 L${x1 + 3.5} 84 Q${x1} 84 ${x1} 80.5 Z" fill="${fill}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.2"/>
    <path d="${top}" fill="none" stroke="#C9ECFF" stroke-width="1.6" stroke-linecap="round"/>`;
}

function tyreFront(c, x, y, w, h) {
  return `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${f(Math.min(w, h) * 0.35)}" fill="${tyreFill(c)}" stroke="#05050A" stroke-opacity=".5" stroke-width="1.2"/>`;
}

function rr(x, y, w, h, r) {
  const [a, b, d, e] = Array.isArray(r) ? r : [r, r, r, r];
  const X = x + w, Y = y + h;
  return `M${f(x + a)} ${f(y)} L${f(X - b)} ${f(y)} Q${f(X)} ${f(y)} ${f(X)} ${f(y + b)} L${f(X)} ${f(Y - d)} Q${f(X)} ${f(Y)} ${f(X - d)} ${f(Y)} L${f(x + e)} ${f(Y)} Q${f(x)} ${f(Y)} ${f(x)} ${f(Y - e)} L${f(x)} ${f(y + a)} Q${f(x)} ${f(y)} ${f(x + a)} ${f(y)} Z`;
}

function win(c, x, y, w, h, r = 2, kind) {
  return `<path d="${rr(x, y, w, h, r)}" fill="${glass(c, kind)}"/>`;
}

function place(d, deg = 0, [tx, ty] = [0, 0], s = 1) {
  const a = (deg * Math.PI) / 180;
  return d.replace(/(-?[\d.]+)[ ,]+(-?[\d.]+)/g, (_, x, y) => {
    const X = x * s, Y = y * s;
    return `${f(tx + X * Math.cos(a) - Y * Math.sin(a))} ${f(ty + X * Math.sin(a) + Y * Math.cos(a))}`;
  });
}
const point = (x, y, deg, at, s) => place(`${x} ${y}`, deg, at, s).split(' ').map(Number);

// Lamps: a lit lens with a white hot spot.
function lamp(x, y, rx, ry = rx, color = '#FFF7A8') {
  return `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}" fill="${color}"/><ellipse cx="${f(x - rx * 0.25)}" cy="${f(y - ry * 0.3)}" rx="${f(rx * 0.4)}" ry="${f(ry * 0.35)}" fill="#fff" opacity=".85"/>`;
}

// The sedan silhouette of icons/car.js, so the police car and taxi are the same model.
const SEDAN = 'M18 73 C14 73 12 70 12 66 L12 57 C12 51 15 48 20 47 L28 46 C32 37 38 31 47 31 L56 31 C63 31 67 35 71 42 L73.5 46.5 C80 47.5 84 51 84 57 L84 66 C84 70 82 73 78 73 Z';
function sedanDetails(c, palette) {
  const r = c.ramp(palette);
  return `<path d="M32 46 C35 40 39 36 45.5 36 L46.5 36 L46.5 46 Z" fill="${glass(c)}"/>
    <path d="M51 36 L55 36 C60.5 36 63.5 40 66.5 46 L51 46 Z" fill="${glass(c)}"/>
    <path d="M48.8 47 L48.8 66" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1.3"/>
    <rect x="53" y="51" width="6" height="2" rx="1" fill="${r[3]}" opacity=".45"/>
    <path d="M12.3 58 L15.5 58 Q17 58 17 59.5 L17 62 Q17 63.5 15.5 63.5 L12.3 63.5 Z" fill="#FFB000"/>
    <path d="M83.7 55 L79 55 Q77 55 77 57 L77 59 Q77 61 79 61 L83.7 61 Z" fill="#FFF7A8"/>
    <path d="M13 67 L83 67" stroke="${r[3]}" stroke-opacity=".35" stroke-width="1.3"/>`;
}

// A car seen head-on: one silhouette for the three oncoming cars.
const FRONT_CAR = 'M22 78 C16.5 78 14 75.5 14 71 L14 58 C14 53 16.5 50.5 21 49.5 L24.5 48.5 L29.5 34 C30.8 30.2 33.4 28 38 28 L58 28 C62.6 28 65.2 30.2 66.5 34 L71.5 48.5 L75 49.5 C79.5 50.5 82 53 82 58 L82 71 C82 75.5 79.5 78 74 78 Z';
function frontCar(c, palette, { grille = '#1A1A26', plate = '#F7F5FF' } = {}) {
  const r = c.ramp(palette);
  const paint = c.radial('a', palette, 0.3, 0.2);
  return {
    under: `${tyreFront(c, 17, 70, 12, 14)}${tyreFront(c, 67, 70, 12, 14)}
      <path d="M14 47 L9 45.5 Q7 45 7 47 L7 51 Q7 53 9 53 L15 53 Z" fill="${r[2]}" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M82 47 L87 45.5 Q89 45 89 47 L89 51 Q89 53 87 53 L81 53 Z" fill="${r[2]}" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1.2"/>`,
    body: `<path d="${FRONT_CAR}" fill="${paint}"/>
      <path d="M32.4 35.5 C33.2 33 34.4 32 36.8 32 L59.2 32 C61.6 32 62.8 33 63.6 35.5 L67.4 47 L28.6 47 Z" fill="${glass(c)}"/>
      <path d="M21 50 L75 50" stroke="${r[3]}" stroke-opacity=".3" stroke-width="1.3"/>
      ${lamp(25, 57.5, 6.2, 4.2)}${lamp(71, 57.5, 6.2, 4.2)}
      <path d="${rr(35, 55, 26, 9, 3)}" fill="${grille}"/>
      <path d="M38 58 L58 58 M38 61 L58 61" stroke="#8E93AD" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M16 67 L80 67" stroke="${r[3]}" stroke-opacity=".35" stroke-width="1.3"/>
      <rect x="40" y="69" width="16" height="5" rx="1.2" fill="${plate}" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1"/>`,
  };
}

// The airliner of icons/plane.js, drawn level around the origin and then turned, scaled and
// moved, for the departure and arrival icons. Returns the outline, a shine and the art.
const HULL = 'M-38 -27 Q-38 -30 -35 -30 L-31 -30 L-18 -9 L24 -9 C33 -9 40 -4 40 0 C40 5 33 8 26 8 L-12 8 C-20 8 -28 3 -35 -3 Z';
const WING = 'M-4 5 L9 5 L-12 30 Q-15 33 -18 31 L-16 27 Z';
function airliner(c, { angle = 0, scale = 0.86, at = [48, 50] } = {}) {
  const skin = c.linear('a', 'white', [0, 0, 0, 1], 0, 2);
  const fin = c.linear('fin', 'blue', [0, 0, 1, 1], 0, 2);
  const metal = c.linear('metal', 'silver', [0, 0, 0, 1], 1, 2);
  const metalFar = c.linear('far', 'silver', [0, 0, 0, 1], 2, 3);
  const pod = c.radial('pod', 'silver', 0.4, 0.2);
  c.def(`<clipPath id="${c.id('hull')}"><path d="${HULL}"/></clipPath>`);
  const ink = '#0A1240';
  const windows = Array.from({ length: 8 }, (_, i) => `<rect x="${-14 + i * 4.8}" y="-4.6" width="2.6" height="3.4" rx="1.2" fill="${ink}"/>`).join('');
  return `<g transform="translate(${at[0]} ${at[1]}) rotate(${angle}) scale(${scale})">
      <path d="M-2 -8 L8 -8 L-8 -22 Q-10 -23.5 -11.5 -21.5 Z" fill="${metalFar}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.4"/>
      <path d="${HULL}" fill="${skin}"/>
      <g clip-path="url(#${c.id('hull')})">
        <path d="M-40 -30 L-31 -30 L-18 -9 L-24 -9 L-24 8 L-40 8 Z" fill="${fin}"/>
        <rect x="-30" y="1.2" width="72" height="2.8" fill="${fin}"/>
      </g>
      ${windows}
      <path d="M29 -5 L34.5 -5 C36.5 -4 38 -2.5 38.6 -1 L29.5 -1 Z" fill="${ink}"/>
      <path d="M-27 -2 L-18 -1 L-31 8 Q-34 9.5 -34.5 7 Z" fill="${fin}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${WING}" fill="${metal}" stroke="#3A3E52" stroke-opacity=".55" stroke-width="1.4"/>
      <rect x="-8" y="13" width="14" height="7" rx="3.5" fill="${pod}" stroke="#3A3E52" stroke-opacity=".55" stroke-width="1.2"/>
      <ellipse cx="5.4" cy="16.5" rx="1.3" ry="2.6" fill="${ink}"/>
    </g>`;
}
airliner.body = ({ angle = 0, scale = 0.86, at = [48, 50] } = {}) => place(HULL, angle, at, scale);
airliner.shine = ({ angle = 0, scale = 0.86, at = [48, 50] } = {}) => [...point(-4, -6, angle, at, scale), angle - 4];

// A runway strip on the ground line, centre dashes in perspective-free white.
function runway(x1 = 10, x2 = 86, y = 77) {
  const dashes = [];
  for (let x = x1 + 6; x < x2 - 8; x += 12) dashes.push(`M${x} ${y + 3.5} L${x + 6} ${y + 3.5}`);
  return `<path d="${rr(x1, y, x2 - x1, 7, 2.5)}" fill="#3A3E52" stroke="#141420" stroke-opacity=".6" stroke-width="1.2"/>
    <path d="${dashes.join(' ')}" stroke="#F7F5FF" stroke-width="1.8" stroke-linecap="round"/>`;
}

module.exports = { airliner, runway, f, once, glass, wheel, bogie, rail, water, tyreFront, rr, win, place, point, lamp, SEDAN, sedanDetails, FRONT_CAR, frontCar };
