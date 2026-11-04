// Shared pieces for the paper, mail, money, office and light & video objects: geometry that can
// be turned without arcs (so the engine can clip with plain numbers), books, pages, envelopes,
// banknotes, mailboxes, trays, cameras and charts.
const n = (v) => +(+v).toFixed(2);

const rr = (x, y, w, h, r) => {
  const R = Array.isArray(r) ? r : [r, r, r, r];
  const [a, b, d, e] = R; // top-left, top-right, bottom-right, bottom-left
  return `M${n(x + a)} ${n(y)} L${n(x + w - b)} ${n(y)} Q${n(x + w)} ${n(y)} ${n(x + w)} ${n(y + b)} L${n(x + w)} ${n(y + h - d)} Q${n(x + w)} ${n(y + h)} ${n(x + w - d)} ${n(y + h)} L${n(x + e)} ${n(y + h)} Q${n(x)} ${n(y + h)} ${n(x)} ${n(y + h - e)} L${n(x)} ${n(y + a)} Q${n(x)} ${n(y)} ${n(x + a)} ${n(y)} Z`;
};

// Ellipse as four cubics, so it survives `map` and `turn`. ccw makes a hole in a body.
const K = 0.5523;
const ell = (cx, cy, rx, ry = rx, ccw = false) => {
  const p = (x, y) => `${n(x)} ${n(y)}`;
  const kx = rx * K;
  const ky = ry * K;
  return ccw
    ? `M${p(cx + rx, cy)} C${p(cx + rx, cy - ky)} ${p(cx + kx, cy - ry)} ${p(cx, cy - ry)} C${p(cx - kx, cy - ry)} ${p(cx - rx, cy - ky)} ${p(cx - rx, cy)} C${p(cx - rx, cy + ky)} ${p(cx - kx, cy + ry)} ${p(cx, cy + ry)} C${p(cx + kx, cy + ry)} ${p(cx + rx, cy + ky)} ${p(cx + rx, cy)} Z`
    : `M${p(cx + rx, cy)} C${p(cx + rx, cy + ky)} ${p(cx + kx, cy + ry)} ${p(cx, cy + ry)} C${p(cx - kx, cy + ry)} ${p(cx - rx, cy + ky)} ${p(cx - rx, cy)} C${p(cx - rx, cy - ky)} ${p(cx - kx, cy - ry)} ${p(cx, cy - ry)} C${p(cx + kx, cy - ry)} ${p(cx + rx, cy - ky)} ${p(cx + rx, cy)} Z`;
};

// Map every coordinate pair of an absolute M/L/Q/C/Z path.
const map = (d, fn) => d.replace(/(-?\d*\.?\d+)[ ,]+(-?\d*\.?\d+)/g, (_, x, y) => fn(+x, +y).map(n).join(' '));

// Lay out a shape in its own frame (origin at `at`, x along the object) and set it at `deg`.
const place = (d, at = [0, 0], deg = 0, s = 1) => {
  const a = (deg * Math.PI) / 180;
  return map(d, (x, y) => [at[0] + s * (x * Math.cos(a) - y * Math.sin(a)), at[1] + s * (x * Math.sin(a) + y * Math.cos(a))]);
};
const pt = (x, y, at = [0, 0], deg = 0) => place(`${x} ${y}`, at, deg).split(' ').map(Number);
const turn = (d, deg, cx = 48, cy = 48) => {
  const a = (deg * Math.PI) / 180;
  return map(d, (x, y) => [cx + (x - cx) * Math.cos(a) - (y - cy) * Math.sin(a), cy + (x - cx) * Math.sin(a) + (y - cy) * Math.cos(a)]);
};

const ST = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
const line = (d, color, w = 1.4, op = 1) => `<path d="${d}" stroke="${color}" stroke-opacity="${op}" stroke-width="${w}" ${ST}/>`;

// Bounding box of a path's coordinate pairs (control points included).
function bbox(d) {
  const nums = [...d.matchAll(/(-?\d*\.?\d+)[ ,]+(-?\d*\.?\d+)/g)];
  const xs = nums.map((m) => +m[1]);
  const ys = nums.map((m) => +m[2]);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

// A stroked line drawn as a glossy solid (wire, cord). The gloss stays inside the stroke.
function tube(c, d, { width = 5, palette = 'silver', name = 't', outline = true } = {}) {
  const r = c.ramp(palette);
  const [x0, y0, x1, y1] = bbox(d);
  const pad = width / 2;
  const g = c.id(`${name}-g`);
  const m = c.id(`${name}-m`);
  c.def(`<linearGradient id="${g}" gradientUnits="userSpaceOnUse" x1="${n(x0 - pad)}" y1="${n(y0 - pad)}" x2="${n(x1 + pad)}" y2="${n(y1 + pad)}"><stop offset="0" stop-color="${r[0]}"/><stop offset=".4" stop-color="${r[1]}"/><stop offset="1" stop-color="${r[2]}"/></linearGradient>
    <mask id="${m}" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96"><path d="${d}" stroke="#fff" stroke-width="${width}" ${ST}/></mask>`);
  const hi = n(width * 0.2);
  return `${outline ? `<path d="${d}" stroke="${r[3]}" stroke-opacity=".7" stroke-width="${n(width + 1.4)}" ${ST}/>` : ''}
    <path d="${d}" stroke="url(#${g})" stroke-width="${width}" ${ST}/>
    <g mask="url(#${m})">
      <path d="${d}" stroke="${r[3]}" stroke-opacity=".35" stroke-width="${n(width * 0.5)}" ${ST} transform="translate(${n(width * 0.3)} ${n(width * 0.4)})"/>
      <path d="${d}" stroke="#fff" stroke-opacity=".6" stroke-width="${n(width * 0.28)}" ${ST} transform="translate(${-hi} ${-hi})"/>
    </g>`;
}

// ---------------------------------------------------------------- currency marks (10-unit box)
// Each is a stroke path on a 10-high cap, centred on x 0; set with place().
const SYMBOL = {
  $: 'M3.2 -3.1 C2.5 -4.3 1.4 -4.7 0 -4.7 C-1.8 -4.7 -3 -3.7 -3 -2.3 C-3 -0.6 -1.3 -0.2 0 0.1 C1.6 0.4 3.3 0.9 3.3 2.6 C3.3 4 1.9 4.9 0 4.9 C-1.5 4.9 -2.7 4.3 -3.3 3.2 M0 -6.3 L0 6.5',
  '¥': 'M-3.6 -5 L0 0.4 L3.6 -5 M0 0.4 L0 5.4 M-3 0.9 L3 0.9 M-3 3.3 L3 3.3',
  '€': 'M3.3 -3.4 C2.6 -4.5 1.5 -5 0.3 -5 C-2.3 -5 -3.6 -2.8 -3.6 0 C-3.6 2.8 -2.3 5 0.3 5 C1.5 5 2.6 4.5 3.3 3.4 M-5 -1.2 L1.2 -1.2 M-5 1.4 L0.6 1.4',
  '£': 'M2.9 -3 C2.6 -4.4 1.6 -5 0.4 -5 C-1.4 -5 -2.5 -3.8 -2.5 -2 C-2.5 0 -1.6 1.4 -1.6 2.6 C-1.6 3.7 -2.3 4.6 -3.4 5 L3.4 5 M-4 0.2 L1.4 0.2',
};
const symbol = (ch, at, size = 1, deg = 0) => place(SYMBOL[ch], at, deg, size);

// ---------------------------------------------------------------- books
// A hardback standing face-on with its top and fore-edge showing to the upper right.
const BOOK = {
  body: 'M16 18 Q16 14 19 12 L24 8.4 Q25 8 26.5 8 L76 8 Q78 8 78 10 L78 77 Q78 78 77 78.8 L71.6 83.2 Q70.6 84 69 84 L20 84 Q16 84 16 80 Z',
  front: 'M16 18 Q16 14 20 14 L70 14 L70 84 L20 84 Q16 84 16 80 Z',
  top: 'M18 14 L24.5 8.3 L77.5 8.3 L70 14 Z',
  edge: 'M70 14 L77.6 8.4 L77.6 78.4 L70 84 Z',
};
function book(c, palette, inner = '') {
  const r = c.ramp(palette);
  const cover = c.linear('cover', palette, [0, 0, 1, 1], 0, 2);
  const pages = c.linear('pages', 'cream', [0, 0, 1, 0], 0, 1);
  return `<path d="${BOOK.body}" fill="${r[2]}"/>
    <path d="M21 13 L25.8 9.6 L75.4 9.6 L70.4 13 Z" fill="${c.ramp('cream')[0]}"/>
    <path d="M70 14 L76 9.6 L76 79.6 L70 84 Z" fill="${pages}"/>
    ${line('M72 13.2 L72 82.4 M74 11.8 L74 81', c.ramp('cream')[2], 0.9, 0.8)}
    <path d="${BOOK.front}" fill="${cover}"/>
    <path d="M16 18 Q16 14 20 14 L25 14 L25 84 L20 84 Q16 84 16 80 Z" fill="${r[3]}" opacity=".28"/>
    ${line('M25.6 15 L25.6 83', r[0], 1.2, 0.45)}
    ${inner}`;
}
// Paper label with two ink lines, as on the cover of a notebook.
const label = (c, x, y, w, h, ink) => `<path d="${rr(x, y, w, h, 2)}" fill="${c.linear('label', 'cream', [0, 0, 0, 1], 0, 1)}" stroke="${ink}" stroke-opacity=".35" stroke-width="1"/>
    ${line(`M${x + 5} ${y + h * 0.38} L${x + w - 5} ${y + h * 0.38} M${x + 5} ${y + h * 0.68} L${x + w - 10} ${y + h * 0.68}`, ink, 1.8, 0.55)}`;

// ---------------------------------------------------------------- pages
// Text lines on a sheet: [x0, x1] per row, the last a little shorter.
const textLines = (x0, x1, ys, color, w = 2.2, op = 0.5) => line(ys.map((y, i) => `M${x0} ${y} L${i === ys.length - 1 ? x0 + (x1 - x0) * 0.6 : x1} ${y}`).join(' '), color, w, op);

// ---------------------------------------------------------------- envelope (the love-letter build)
// Drawn level in its own frame (14..82 x 33..80) and turned about (48,57).
function envelope(c, { deg = -7, flap = 'closed', name = 'env', scale = 1, shift = [0, 0] } = {}) {
  const T = (d) => map(turn(d, deg, 48, 57), (x, y) => [48 + (x - 48) * scale + shift[0], 57 + (y - 57) * scale + shift[1]]);
  const body = T('M19 33 L77 33 Q82 33 82 38 L82 75 Q82 80 77 80 L19 80 Q14 80 14 75 L14 38 Q14 33 19 33 Z');
  const paper = c.linear(`${name}-a`, 'cream', [0, 0, 0.4, 1], 0, 1);
  const side = c.linear(`${name}-side`, 'cream', [0, 0, 0, 1], 1, 2);
  const flapFill = c.linear(`${name}-flap`, 'cream', [0, 0, 0, 1], 0, 1);
  const fold = '#8A5A1E';
  const closed = `<path d="${T('M16 35.5 L45.5 60 Q48 62 50.5 60 L80 35.5')}" stroke="${fold}" stroke-opacity=".45" stroke-width="3" fill="none" stroke-linejoin="round"/>
      <path d="${T('M15.5 34.5 L45.5 59 Q48 61 50.5 59 L80.5 34.5 Z')}" fill="${flapFill}"/>`;
  return {
    body,
    T,
    back: `<path d="${body}" fill="${paper}"/>`,
    // The flap opened upwards sits behind the body; draw `open` before `back`.
    open: `<path d="${T('M16 34 L45.5 11.5 Q48 9.8 50.5 11.5 L80 34 Z')}" fill="${side}"/>
      <path d="${T('M16 34 L45.5 11.5 Q48 9.8 50.5 11.5 L80 34')}" stroke="${fold}" stroke-opacity=".5" stroke-width="1.2" fill="none" stroke-linejoin="round"/>`,
    pocket: `<path d="${T('M15 78 L46 54 Q48 52.5 50 54 L81 78 Z')}" fill="${side}" opacity=".85"/>
      <path d="${T('M15 78 L46 54 Q48 52.5 50 54 L81 78')}" stroke="${fold}" stroke-opacity=".35" stroke-width="1.2" fill="none"/>
      ${flap === 'closed' ? closed : `<path d="${T('M15 34.5 L46 57 Q48 58.5 50 57 L81 34.5')}" stroke="${fold}" stroke-opacity=".35" stroke-width="1.2" fill="none"/>`}`,
  };
}

// ---------------------------------------------------------------- banknotes
// Two notes, the top one turned a little; a medallion carries the currency mark.
function banknote(c, palette, ch) {
  const r = c.ramp(palette);
  const D = -8;
  const T = (d) => turn(d, D, 48, 50);
  const body = T(rr(12, 26, 72, 44, 4));
  const under = turn(rr(14, 34, 72, 44, 4), 4, 50, 56);
  const face = c.linear('face', palette, [0, 0, 1, 1], 0, 2);
  const back = c.linear('back', palette, [0, 0, 1, 1], 1, 3);
  const ink = r[3];
  return {
    body,
    draw: `<path d="${under}" fill="${back}"/>
      <path d="${under}" fill="none" stroke="${ink}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${face}"/>
      <path d="${T(rr(17, 31, 62, 34, 2.5))}" fill="none" stroke="${ink}" stroke-opacity=".45" stroke-width="1.4"/>
      <path d="${T(ell(48, 48, 12.5, 12.5))}" fill="${r[0]}" opacity=".55"/>
      <path d="${T(ell(48, 48, 12.5, 12.5))}" fill="none" stroke="${ink}" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="${T(`${ell(25, 39, 2.6)} ${ell(71, 57, 2.6)} ${ell(71, 39, 1.6)} ${ell(25, 57, 1.6)}`)}" fill="${ink}" opacity=".5"/>
      <path d="${T(symbol(ch, [48, 48], 1.65))}" stroke="${ink}" stroke-width="3.3" ${ST}/>`,
  };
}

// ---------------------------------------------------------------- mailbox
// A country mailbox: arched front at the left, the side running back to the right, on a post.
function mailbox(c, { open = false, flagUp = false, letters = false } = {}) {
  const body = 'M16 64 L16 42 C16 34.3 21.8 28 29 28 L68 28 Q79 28 79 39 L79 64 Z';
  const front = 'M16 64 L16 42 C16 34.3 21.8 28 29 28 C36.2 28 42 34.3 42 42 L42 64 Z';
  const b = c.ramp('blue');
  const side = c.linear('side', 'blue', [0, 0, 0, 1], 0, 2);
  const face = c.radial('face', 'blue', 0.3, 0.2);
  const post = c.linear('post', 'brown', [0, 0, 1, 0], 1, 3);
  const flag = c.linear('flag', 'red', [0, 0, 1, 1], 0, 2);
  const flagArt = flagUp
    ? `<path d="M64 52 L64 14" stroke="#5C0004" stroke-width="4.6" stroke-linecap="round"/><path d="M64 52 L64 14" stroke="${flag}" stroke-width="3" stroke-linecap="round"/>
       <path d="M64 13 L78 13 Q80 13 80 15 L80 22 Q80 24 78 24 L64 24 Z" fill="${flag}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.1"/>`
    : `<path d="M64 52 L84 52" stroke="#5C0004" stroke-width="4.6" stroke-linecap="round"/><path d="M64 52 L84 52" stroke="${flag}" stroke-width="3" stroke-linecap="round"/>
       <path d="M74 52 L86 52 Q88 52 88 54 L88 60 Q88 62 86 62 L74 62 Z" fill="${flag}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.1"/>`;
  const mail = letters
    ? `<path d="M19 50 L37 41 L41 49 L23 58 Z" fill="${c.linear('m1', 'cream', [0, 0, 1, 1], 0, 2)}" stroke="#8A5A1E" stroke-opacity=".5" stroke-width="1"/>
       <path d="M18 46 L36 39 L38 45 L20 52 Z" fill="${c.linear('m2', 'white', [0, 0, 1, 1], 0, 2)}" stroke="#6E61A8" stroke-opacity=".5" stroke-width="1"/>
       ${line('M23 47 L33 43', '#6E61A8', 1.2, 0.6)}`
    : '';
  const front_ = open
    ? `<path d="M19.5 63 L19.5 42.5 C19.5 36.5 23.8 31.5 29 31.5 C34.2 31.5 38.5 36.5 38.5 42.5 L38.5 63 Z" fill="#080C3D"/>
       <path d="M19.5 63 L19.5 42.5 C19.5 36.5 23.8 31.5 29 31.5 C34.2 31.5 38.5 36.5 38.5 42.5" fill="none" stroke="#000" stroke-opacity=".5" stroke-width="2.4"/>
       ${mail}
       <path d="M16 64 L42 64 L35 77 Q34 78 32 78 L10 78 Q8 78 8.6 76.6 Z" fill="${face}" stroke="${b[3]}" stroke-opacity=".6" stroke-width="1.2"/>
       ${line('M14 75 L32 75', b[0], 1.2, 0.5)}`
    : `<path d="${front}" fill="${face}"/>
       <path d="M20 63 L20 42.5 C20 36.3 24 31.8 29 31.8 C34 31.8 38 36.3 38 42.5 L38 63" fill="none" stroke="${b[3]}" stroke-opacity=".35" stroke-width="1.2"/>
       <path d="M24.5 47 L33.5 47" stroke="${c.ramp('silver')[2]}" stroke-width="3.2" stroke-linecap="round"/>
       <path d="M24.5 46.4 L33.5 46.4" stroke="#fff" stroke-opacity=".8" stroke-width="1" stroke-linecap="round"/>`;
  return {
    body,
    draw: `<path d="M42.5 63 L54.5 63 L54.5 84 L42.5 84 Z" fill="${post}" stroke="#331805" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${side}"/>
      ${line('M44 28.5 L44 63.5 M60 28.5 L60 63.5', b[3], 1.2, 0.25)}
      ${front_}
      <circle cx="64" cy="52" r="3.2" fill="${c.radial('hub', 'silver')}" stroke="#3A3E52" stroke-opacity=".5"/>
      ${flagArt}`,
  };
}

// ---------------------------------------------------------------- tray (inbox / outbox)
function tray(c, up) {
  const body = 'M12 58 L22 52 L74 52 L84 58 L84 79 Q84 84 79 84 L17 84 Q12 84 12 79 Z';
  const t = c.ramp('sky');
  const arrowFill = c.linear('arrow', 'green', [0, 0, 1, 1], 0, 2);
  // Arrow: shaft and head as one outline; points up for the outbox, down for the inbox.
  const A = up
    ? 'M48 8 L64 25 L55 25 L55 44 Q55 46 53 46 L43 46 Q41 46 41 44 L41 25 L32 25 Z'
    : 'M48 50 L64 33 L55 33 L55 14 Q55 12 53 12 L43 12 Q41 12 41 14 L41 33 L32 33 Z';
  return {
    body,
    draw: `<path d="M24 54 L26 34 L66 32 L70 54 Z" fill="${c.linear('p1', 'white', [0, 0, 0, 1], 0, 2)}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>
      <path d="M22 54 L22 38 L72 38 L72 54 Z" fill="${c.linear('p2', 'white', [0, 0, 0, 1], 0, 1)}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>
      ${line('M28 44 L64 44 M28 49 L56 49', '#8C83AD', 1.6, 0.6)}
      <path d="${A}" fill="#053A1A" opacity=".55" transform="translate(1 1.6)"/>
      <path d="${A}" fill="${arrowFill}" stroke="#053A1A" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="${body}" fill="${c.linear('tray', 'sky', [0, 0, 0.6, 1], 1, 3)}"/>
      <path d="M12 58 L22 52 L74 52 L84 58 Z" fill="${t[2]}"/>
      <path d="M18 58 L78 58 L78 59 L18 59 Z" fill="${t[3]}" opacity=".5"/>
      <path d="M12 58 L84 58 L84 79 Q84 84 79 84 L17 84 Q12 84 12 79 Z" fill="${c.linear('front', 'sky', [0, 0, 0, 1], 0, 2)}"/>
      ${line('M15 62 L81 62', '#fff', 1.2, 0.6)}
      <path d="M38 67 L58 67 Q60 67 60 69 L60 73 Q60 75 58 75 L38 75 Q36 75 36 73 L36 69 Q36 67 38 67 Z" fill="${t[3]}" opacity=".45"/>`,
  };
}

// ---------------------------------------------------------------- camera
function camera(c) {
  const body = 'M20 31 L32 31 L36 24 Q37 22.5 39 22.5 L57 22.5 Q59 22.5 60 24 L64 31 L76 31 Q83 31 83 38 L83 74 Q83 81 76 81 L20 81 Q13 81 13 74 L13 38 Q13 31 20 31 Z';
  const k = c.ramp('black');
  const s = c.ramp('silver');
  return {
    body,
    draw: `<path d="M19 31 L19 27 Q19 25.5 20.5 25.5 L27.5 25.5 Q29 25.5 29 27 L29 31 Z" fill="${c.linear('btn', 'silver', [0, 0, 0, 1], 0, 2)}" stroke="${s[3]}" stroke-opacity=".6" stroke-width="1"/>
      <path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M13.6 40 L82.4 40 L82.4 71 L13.6 71 Z" fill="${c.linear('grip', 'black', [0, 0, 0, 1], 1, 3)}"/>
      ${line('M13.8 40 L82.2 40', k[0], 1.1, 0.6)}
      <rect x="67" y="34" width="10" height="5.5" rx="1.6" fill="${c.linear('win', 'sky', [0, 0, 1, 1], 0, 2)}"/>
      <circle cx="48" cy="54" r="19" fill="${c.radial('ring', 'silver', 0.3, 0.2)}" stroke="${s[3]}" stroke-opacity=".6" stroke-width="1.2"/>
      <circle cx="48" cy="54" r="14.5" fill="${k[3]}"/>
      <circle cx="48" cy="54" r="11.5" fill="${c.radial('glass', 'purple', 0.38, 0.3)}"/>
      <circle cx="48" cy="54" r="11.5" fill="none" stroke="#000" stroke-opacity=".5" stroke-width="1.5"/>
      <circle cx="51" cy="57.5" r="3.6" fill="${c.ramp('blue')[0]}" opacity=".35"/>
      <ellipse cx="43.5" cy="49" rx="4" ry="2.4" fill="#fff" opacity=".85" transform="rotate(-40 43.5 49)"/>`,
  };
}

// ---------------------------------------------------------------- magnifying glass
// side: -1 lens up-left (tilted left), 1 lens up-right (tilted right). Light stays top-left.
function magnifier(c, side) {
  const cx = side < 0 ? 40 : 56;
  const cy = 38;
  const R = 25;
  const deg = side < 0 ? 45 : 135;
  const outer = ell(cx, cy, R, R);
  const handle = place('M26 -5 L33 -5 L33 -6.5 L62 -6.5 Q66 -6.5 66 -2.5 L66 2.5 Q66 6.5 62 6.5 L33 6.5 L33 5 L26 5 Z', [cx, cy], deg);
  return {
    body: outer,
    draw: `<path d="${handle}" fill="${c.linear('h', 'black', [0, 0, 1, 1], 0, 2)}" stroke="#05050A" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${place('M26 -5 L33 -5 L33 5 L26 5 Z', [cx, cy], deg)}" fill="${c.linear('collar', 'gold', [0, 0, 1, 1], 0, 2)}"/>
      ${line(place('M38 -3.5 L60 -3.5', [cx, cy], deg), '#fff', 1.2, 0.35)}
      <path d="${outer}" fill="${c.radial('a', 'gold', 0.3, 0.2)}"/>
      <path d="${ell(cx, cy, R - 5.5, R - 5.5)}" fill="${c.radial('glass', 'sky', 0.35, 0.3)}"/>
      <path d="${ell(cx, cy, R - 5.5, R - 5.5)}" fill="none" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.4"/>
      <path d="${ell(cx + 4, cy + 4, R - 11, R - 11)}" fill="#fff" opacity=".18"/>
      <path d="M${cx - 13} ${cy - 2} C${cx - 13} ${cy - 9} ${cx - 8} ${cy - 13} ${cx - 2} ${cy - 13.5}" stroke="#fff" stroke-opacity=".9" stroke-width="3.2" ${ST}/>`,
  };
}

// ---------------------------------------------------------------- pencil
// Laid out with the point at the origin and the body along +x, then set at `at`, `deg`, `s`.
function pencil(c, at, deg, L = 90, s = 1, palette = 'yellow') {
  const P = (d) => place(d, at, deg, s);
  const r = c.ramp(palette);
  const w = 7.5;
  const body = P(`M0 0 L17 -${w} L${L - 3} -${w} Q${L + 1} -${w} ${L + 1} -${w - 4} L${L + 1} ${w - 4} Q${L + 1} ${w} ${L - 3} ${w} L17 ${w} Z`);
  const fe = L - 16;
  return {
    body,
    draw: `<path d="${body}" fill="${r[2]}"/>
      <path d="${P(`M17 -${w} L${fe} -${w} L${fe} -2.4 L17 -2.4 Z`)}" fill="${r[0]}"/>
      <path d="${P(`M17 -2.4 L${fe} -2.4 L${fe} 2.4 L17 2.4 Z`)}" fill="${r[1]}"/>
      <path d="${P(`M17 2.4 L${fe} 2.4 L${fe} ${w} L17 ${w} Z`)}" fill="${r[2]}"/>
      <path d="${P(`M0 0 L17 -${w} L17 ${w} Z`)}" fill="${c.linear('wood', 'cream', [0, 0, 1, 1], 1, 2)}"/>
      <path d="${P(`M17 -${w} L13 -4.8 L17 -2.4 L13 0 L17 2.4 L13 4.8 L17 ${w} Z`)}" fill="${r[1]}"/>
      <path d="${P('M0 0 L6.2 -2.8 L6.2 2.8 Z')}" fill="#2E2E3A"/>
      <path d="${P(`M${fe} -${w} L${L - 6} -${w} L${L - 6} ${w} L${fe} ${w} Z`)}" fill="${c.linear('fer', 'silver', [0, 0, 1, 1], 0, 2)}"/>
      ${line(P(`M${fe + 3.3} -${w} L${fe + 3.3} ${w} M${fe + 6.6} -${w} L${fe + 6.6} ${w}`), c.ramp('silver')[3], 1, 0.5)}
      <path d="${P(`M${L - 6} -${w} L${L - 3} -${w} Q${L + 1} -${w} ${L + 1} -${w - 4} L${L + 1} ${w - 4} Q${L + 1} ${w} ${L - 3} ${w} L${L - 6} ${w} Z`)}" fill="${c.linear('rub', 'pink', [0, 0, 1, 1], 0, 1)}"/>
      <path d="${body}" fill="none" stroke="${r[3]}" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>`,
  };
}

// ---------------------------------------------------------------- charts on a white board
const CHART = rr(14, 14, 68, 68, 7);
function chartCard(c) {
  const g = c.ramp('white');
  let grid = '';
  for (let i = 1; i < 5; i++) grid += `M${14 + i * 13.6} 20 L${14 + i * 13.6} 76 M20 ${14 + i * 13.6} L76 ${14 + i * 13.6} `;
  return `<path d="${CHART}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
    ${line(grid, g[3], 1, 0.3)}`;
}

// ---------------------------------------------------------------- spiral binding along a top edge
function spiral(c, x0, x1, y, count) {
  const step = (x1 - x0) / (count - 1);
  let holes = '';
  let rings = '';
  for (let i = 0; i < count; i++) {
    const x = n(x0 + i * step);
    holes += `<circle cx="${x}" cy="${y + 4}" r="1.9" fill="#2E2E3A" opacity=".75"/>`;
    rings += `M${x - 1.2} ${y + 4} C${x - 2.4} ${y - 1} ${x + 1} ${y - 5} ${x + 1.6} ${y - 1.5} `;
  }
  return `${holes}<path d="${rings}" stroke="#2E2E3A" stroke-width="3.6" ${ST}/><path d="${rings}" stroke="${c.linear('wire', 'silver', [0, 0, 1, 0], 0, 2)}" stroke-width="2.2" ${ST}/>`;
}

// A stand-in context, for working out a body outside draw().
const FAKE = { linear: () => '', radial: () => '', ramp: () => ['', '', '', ''], def: () => {}, id: (x) => x };

module.exports = { FAKE, n, rr, ell, map, place, pt, turn, line, bbox, tube, ST, SYMBOL, symbol, BOOK, book, label, textLines, envelope, banknote, mailbox, tray, camera, magnifier, pencil, CHART, chartCard, spiral };

// Film reel seen face-on: silver disc with five windows, for cameras and projectors.
module.exports.reel = (c, cx, cy, r, name = 'reel') => {
  const s = c.ramp('silver');
  let holes = '';
  for (let i = 0; i < 5; i++) {
    const t = ((-90 + i * 72) * Math.PI) / 180;
    holes += ell(cx + r * 0.55 * Math.cos(t), cy + r * 0.55 * Math.sin(t), r * 0.23, r * 0.23);
  }
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c.radial(name, 'silver', 0.3, 0.22)}" stroke="${s[3]}" stroke-opacity=".7" stroke-width="1.3"/>
    <path d="${holes}" fill="#141420"/>
    <circle cx="${cx}" cy="${cy}" r="${n(r * 0.14)}" fill="#141420"/>
    <circle cx="${cx}" cy="${cy}" r="${n(r * 0.86)}" fill="none" stroke="${s[3]}" stroke-opacity=".3" stroke-width="1"/>`;
};
