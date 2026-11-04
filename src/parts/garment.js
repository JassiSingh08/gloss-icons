// Shared bits for the clothing and sound icons.
//
//   const g = require('../src/parts/garment');
//   g.tube(c, d, { width: 4, palette: 'gold' })   a stroked path as a glossy solid (frames, straps, cords)
//   g.fold(d, color, opacity, width)              one soft fold or crease line
//   g.stitch(d, color, opacity)                   a dashed seam
//   g.rr(x, y, w, h, r)                           a rounded rectangle path
//   g.SPEAKER, g.speaker(c), g.waves(n, color)    the one speaker body every speaker icon shares
//
// Fabric in this set is lacquer, not cloth: a satin or vinyl sheen and a few strong folds, never
// a weave texture.

const n = (v) => Math.round(v * 100) / 100;
const CAP = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';

function tube(c, d, { width = 4, palette = 'black', name = 't', box = [12, 9, 84, 84], outline = true } = {}) {
  const r = c.ramp(palette);
  const [x0, y0, x1, y1] = box;
  const g = c.id(`${name}-g`);
  const m = c.id(`${name}-m`);
  c.def(`<linearGradient id="${g}" gradientUnits="userSpaceOnUse" x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}"><stop offset="0" stop-color="${r[0]}"/><stop offset=".45" stop-color="${r[1]}"/><stop offset="1" stop-color="${r[2]}"/></linearGradient>
    <mask id="${m}" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96"><path d="${d}" stroke="#fff" stroke-width="${width}" ${CAP}/></mask>`);
  const hi = n(width * 0.22);
  return `${outline ? `<path d="${d}" stroke="${r[3]}" stroke-opacity=".7" stroke-width="${n(width + 1.3)}" ${CAP}/>` : ''}
    <path d="${d}" stroke="url(#${g})" stroke-width="${width}" ${CAP}/>
    <g mask="url(#${m})">
      <path d="${d}" stroke="${r[3]}" stroke-opacity=".35" stroke-width="${n(width * 0.5)}" ${CAP} transform="translate(${n(width * 0.3)} ${n(width * 0.4)})"/>
      <path d="${d}" stroke="#fff" stroke-opacity=".55" stroke-width="${n(width * 0.26)}" ${CAP} transform="translate(${-hi} ${-hi})"/>
    </g>`;
}

const fold = (d, color, opacity = 0.4, width = 1.6) =>
  `<path d="${d}" stroke="${color}" stroke-opacity="${opacity}" stroke-width="${width}" ${CAP}/>`;

const stitch = (d, color, opacity = 0.5, width = 1) =>
  `<path d="${d}" stroke="${color}" stroke-opacity="${opacity}" stroke-width="${width}" stroke-dasharray="2 1.8" fill="none"/>`;

const rr = (x, y, w, h, r) =>
  `M${x + r} ${y} L${x + w - r} ${y} Q${x + w} ${y} ${x + w} ${y + r} L${x + w} ${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} L${x + r} ${y + h} Q${x} ${y + h} ${x} ${y + h - r} L${x} ${y + r} Q${x} ${y} ${x + r} ${y} Z`;

// Speaker series: the same body in all four, only the sound waves differ. Sits left of centre so
// three waves fit on the right.
const SPEAKER =
  'M11 37 Q11 33 15 33 L26 33 L45 15.5 Q51 11 51 18.5 L51 77.5 Q51 85 45 80.5 L26 63 L15 63 Q11 63 11 59 Z';

function speaker(c) {
  const shell = c.radial('a', 'slate', 0.3, 0.2);
  const box = c.linear('box', 'slate', [0, 0, 1, 1], 1, 3);
  const s = c.ramp('slate');
  return `<path d="${SPEAKER}" fill="${shell}"/>
    <path d="M11 37 Q11 33 15 33 L26 33 L26 63 L15 63 Q11 63 11 59 Z" fill="${box}"/>
    <path d="M26 33 L26 63" stroke="${s[3]}" stroke-opacity=".5" stroke-width="1.3"/>
    <path d="M27.5 34.5 L45 18.5" stroke="#fff" stroke-opacity=".55" stroke-width="1.3" stroke-linecap="round"/>
    <ellipse cx="44" cy="48" rx="3.4" ry="15" fill="${s[3]}" opacity=".3"/>`;
}

// Sound waves as glossy arcs centred on the speaker's mouth.
function waves(c, count, palette = 'sky') {
  const arcs = [
    'M59 40 Q63.5 48 59 56',
    'M66.5 32 Q74.5 48 66.5 64',
    'M74 23 Q85.5 48 74 73',
  ].slice(0, count);
  return arcs.map((d, i) => tube(c, d, { width: 5, palette, name: `w${i}`, box: [56, 22, 86, 74] })).join('');
}

module.exports = { tube, fold, stitch, rr, SPEAKER, speaker, waves, CAP };
