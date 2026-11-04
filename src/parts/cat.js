// Animal heads for the cat and monkey faces: one cat head shared by the nine cats, one monkey
// head shared by the three monkeys. Ink and expressions come from face.js, so they sit with the
// smileys; only the head, nose and mouth placement differ.
const f = require('./face');
const b = require('./face-b');
const s = require('./skin');

const n = (v) => +v.toFixed(2);

// ---- Cat: a ginger tabby, ears part of the silhouette.
const CAT = 'M20 31 L21.5 11 Q22.5 7 26 9.5 L39.5 21.5 Q48 19.5 56.5 21.5 L70 9.5 Q73.5 7 74.5 11 L76 31 C80.5 38 82 46 81 55 C79 72.5 66 82 48 82 C30 82 17 72.5 15 55 C14 46 15.5 38 20 31 Z';
const CAT_EYE = 50;
const CAT_DX = 12;
const NOSE_Y = 59;

const catSpec = () => ({ tone: 'amber', body: CAT, shine: [24.5, 41, -60], shineSize: [5.5, 2.4] });

function catHead(c) {
  const fur = c.radial('a', 'amber', 0.32, 0.28);
  const ear = c.linear('ear', 'pink', [0, 0, 0, 1], 0, 1);
  const stripe = 'stroke="#B85F00" stroke-opacity=".75" stroke-width="2.6" fill="none" stroke-linecap="round"';
  return `<path d="${CAT}" fill="${fur}"/>
    <path d="M24.5 27 L25.5 15 L35 23.5 Z M71.5 27 L70.5 15 L61 23.5 Z" fill="${ear}" opacity=".85" stroke-linejoin="round"/>
    <path d="M48 23 L48 31 M42 23.5 L43.5 29.5 M54 23.5 L52.5 29.5" ${stripe}/>
    <path d="M16 46 L21 47 M15.5 51 L20.5 51 M80 46 L75 47 M80.5 51 L75.5 51" ${stripe}/>`;
}

// Whiskers sit outside the cheek; nose is a small rounded triangle.
function whiskers({ y = 63, ink = f.INK } = {}) {
  return `<path d="M27 ${y - 2} L11 ${y - 5} M27.5 ${y + 1.5} L12 ${y + 3} M69 ${y - 2} L85 ${y - 5} M68.5 ${y + 1.5} L84 ${y + 3}" stroke="${ink}" stroke-opacity=".55" stroke-width="1.4" stroke-linecap="round"/>`;
}
function nose(c, { y = NOSE_Y } = {}) {
  return `<path d="M44.5 ${y - 1.8} Q48 ${y - 3.2} 51.5 ${y - 1.8} Q50.5 ${y + 1.8} 48 ${y + 2} Q45.5 ${y + 1.8} 44.5 ${y - 1.8} Z" fill="${c.radial('nose', 'pink', 0.4, 0.2)}" stroke="#4A0016" stroke-opacity=".5" stroke-width="1"/>`;
}
// The little split under a cat's nose, as a closed smile: ‿‿
function catMouth({ y = NOSE_Y + 2, w = 7, ink = f.INK, sw = 2.8 } = {}) {
  return f.stroke(`M48 ${y} L48 ${y + 2.5} Q${48 - w / 2} ${y + 6} ${48 - w} ${y + 2.5} M48 ${y + 2.5} Q${48 + w / 2} ${y + 6} ${48 + w} ${y + 1.5}`, sw, ink);
}
// A soft paw pressed to the face, toes up: pad and toes merged into one outline, creases between
// the toes. (x, y) is the middle of the pad.
function paw(c, { x, y, rot = 0 }) {
  const fur = b.glow(c, `paw${x}`, 'amber', x - 6, y - 12, 24);
  const o = { x, y, rot };
  const parts = [s.ellipse(0, 0, 9.5, 9), ...[-6.2, -2.1, 2.1, 6.2].map((dx) => s.ellipse(dx, -8 + Math.abs(dx) * 0.25, 3.4, 4.4))]
    .map((pts) => b.place(pts, o));
  const crease = (dx) => b.place([[dx, -9.5], [dx, -4.5]], o).map((q) => q.join(' ')).join(' L');
  return `<path d="${s.union(parts)}" fill="${fur}" stroke="#6B3A00" stroke-opacity=".7" stroke-width="1.2" stroke-linejoin="round"/>`
    + [-4.1, 0, 4.1].map((dx) => s.crease(`M${crease(dx)}`)).join('');
}

// ---- Monkey: brown fur, a pale heart-shaped face, round ears.
const MONKEY = 'M48 21 A30 30 0 1 1 47.99 21 Z';
const MASK = 'M48 39 C44 30.5 29 30 27.5 42 C26.5 50 30 54 31 58 C29 68.5 36 78.5 48 78.5 C60 78.5 67 68.5 65 58 C66 54 69.5 50 68.5 42 C67 30 52 30.5 48 39 Z';
const MONKEY_EYE = 47;
const MONKEY_DX = 9.5;
const monkeySpec = () => ({ tone: 'brown', body: MONKEY, shine: [32, 30, -45], shineSize: [5.5, 2.4] });

function monkeyHead(c, { ears = true } = {}) {
  const fur = c.radial('a', 'brown', 0.32, 0.25);
  const ear = b.glow(c, 'earfur', 'brown', 30, 40, 70);
  const face = c.radial('mask', 'skin', 0.35, 0.25);
  const earArt = ears
    ? `<circle cx="17" cy="53" r="9.5" fill="${ear}" stroke="#331805" stroke-opacity=".5" stroke-width="1.1"/><circle cx="79" cy="53" r="9.5" fill="${ear}" stroke="#331805" stroke-opacity=".5" stroke-width="1.1"/>
    <circle cx="17.5" cy="53" r="5.5" fill="${c.ramp('skin')[2]}"/><circle cx="78.5" cy="53" r="5.5" fill="${c.ramp('skin')[2]}"/>`
    : '';
  return `${earArt}<path d="${MONKEY}" fill="${fur}"/>
    <path d="M43 22.5 Q46 17 48 21.5 Q51 16.5 53 22.5" stroke="#6E3A14" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="${MASK}" fill="${face}"/>`;
}
function monkeyNose({ y = 60, ink = '#331805' } = {}) {
  return `<ellipse cx="45.5" cy="${y}" rx="1.4" ry="1.9" fill="${ink}"/><ellipse cx="50.5" cy="${y}" rx="1.4" ry="1.9" fill="${ink}"/>`;
}
// A monkey's hand: skin palm and fingers on a fur forearm that comes in from `from`.
function monkeyHand(c, { from, ...opts }) {
  const sc = opts.sc ?? 1;
  const wrist = b.place([[0, 11]], opts)[0];
  const fur = b.glow(c, 'armfur', 'brown', 30, 40, 70);
  const arm = from ? s.limb(c, [from, wrist], 10 * sc, { paint: fur, edge: '#331805' }) : '';
  // Muzzle tan, lighter than the fur, so the hands stand clear of the head.
  const skin = b.glow(c, `palm${n(opts.x)}`, 'skin', opts.x - 8 * sc, opts.y - 16 * sc, 40 * sc);
  return arm + b.hand(c, { ...opts, paint: skin, edge: '#331805', edgeOpacity: 1, edgeWidth: 1.6 });
}

module.exports = {
  CAT, CAT_EYE, CAT_DX, NOSE_Y, catSpec, catHead, whiskers, nose, catMouth, paw,
  MONKEY, MASK, MONKEY_EYE, MONKEY_DX, monkeySpec, monkeyHead, monkeyNose, monkeyHand,
};
