// Renders every icon in icons/*.js and writes:
//   dist/svg/<id>.svg            optimised SVG (svgo)
//   dist/webp/<size>/<id>.webp   32, 64, 128 and 256 px, for apps that should not draw SVG at runtime
//   dist/manifest.json           ids, names, emoji, groups, tags and file paths, in Unicode order
//   docs/sheet.png               contact sheet of a few favourites (HIGHLIGHTS)
//   docs/sheets/<group>.png      contact sheet of every icon in each Unicode group
// Run: npm run build   (or npm run sheet to only redraw the contact sheets while drawing icons)
const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');
const { optimize } = require('svgo');

const { render } = require('../src/engine');
const { emoji } = require('../data/emoji.json');

const root = path.join(__dirname, '..');
const SIZES = [32, 64, 128, 256];
const HIGHLIGHTS = [
  'heart', 'grinning-face', 'smirking-face', 'star-struck', 'laugh', 'devil', 'waving-hand', 'thumbs-up',
  'fox', 'tiger-face', 'panda', 'octopus', 'monarch-butterfly', 'sunflower', 'red-apple', 'avocado',
  'pizza', 'hamburger', 'birthday-cake', 'tropical-drink', 'globe', 'rocket', 'ferris-wheel', 'rainbow',
  'soccer-ball', 'dice', 'crystal-ball', 'disco-ball', 'gem-stone', 'guitar', 'camera', 'sparkling-heart',
];
const sheetOnly = process.argv.includes('--sheet-only');
const arg = (name) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : undefined; };
// --only a,b,c renders just those icons into one sheet at --out. Lets several people draw at once
// without one half-finished file breaking everyone's preview.
const only = arg('--only')?.split(',');
const out = arg('--out');
// --px 64 draws the sheet's icons at that size, to check an icon still reads small.
const px = Number(arg('--px') ?? 100);

const order = new Map(emoji.map((e, i) => [e.id, i]));
const known = new Map(emoji.map((e) => [e.id, e]));
const specs = fs
  .readdirSync(path.join(root, 'icons'))
  .filter((f) => f.endsWith('.js') && (!only || only.includes(f.slice(0, -3))))
  .map((f) => {
    const spec = require(path.join(root, 'icons', f));
    if (`${spec.id}.js` !== f) throw new Error(`${f}: id "${spec.id}" must match the file name`);
    const e = known.get(spec.id);
    if (e && (spec.emoji !== e.emoji || spec.group !== e.group || spec.subgroup !== e.subgroup)) {
      throw new Error(`${f}: emoji, group and subgroup must match data/emoji.json (${e.emoji} ${e.group} / ${e.subgroup})`);
    }
    return spec;
  })
  .sort((a, b) => (order.get(a.id) ?? Infinity) - (order.get(b.id) ?? Infinity) || a.id.localeCompare(b.id));

// Two different elements with one id (an icon gradient named like the engine's own 'clip' or
// 'b2', say) break an icon silently, so they fail the build. Identical repeats are harmless.
function checkIds(spec, svg) {
  const seen = new Map();
  for (const [, tag, id] of svg.matchAll(/<(\w+)[^>]*?\sid="([^"]+)"/g)) {
    if (seen.has(id) && seen.get(id) !== tag) throw new Error(`${spec.id}: id "${id}" is used by both a <${seen.get(id)}> and a <${tag}>; rename one`);
    seen.set(id, tag);
  }
  return svg;
}

const rendered = specs.map((spec) => ({ spec, svg: checkIds(spec, render(spec)) }));

function contactSheet(list, file, size = px) {
  const cols = size < 80 ? 12 : 8;
  const cell = size + 32;
  const rows = Math.ceil(list.length / cols);
  const width = cols * cell + 24;
  const height = rows * (cell + 22) + 24;
  const tiles = list
    .map(({ spec, svg }, i) => {
      const x = 12 + (i % cols) * cell;
      const y = 12 + Math.floor(i / cols) * (cell + 22);
      const inner = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
      return `<rect x="${x + 4}" y="${y + 4}" width="${cell - 8}" height="${cell - 8}" rx="18" fill="#1A1526" stroke="#33294A"/>
        <svg x="${x + 16}" y="${y + 12}" width="${size}" height="${size}" viewBox="0 0 96 96">${inner}</svg>
        <text x="${x + cell / 2}" y="${y + cell + 12}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${size < 80 ? 9 : 12}" fill="#A79FB8">${spec.id.length > 22 ? `${spec.id.slice(0, 21)}…` : spec.id}</text>`;
    })
    .join('');
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#0E0B16"/>${tiles}</svg>`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, new Resvg(sheet, { font: { loadSystemFonts: true } }).render().asPng());
  console.log(`${file}: ${list.length} icons`);
}

function sheets() {
  if (only) return contactSheet(rendered, out ?? path.join(root, 'docs/sheet.png'));
  const pick = HIGHLIGHTS.map((id) => rendered.find((r) => r.spec.id === id)).filter(Boolean);
  contactSheet(pick, path.join(root, 'docs/sheet.png'));
  fs.rmSync(path.join(root, 'docs/sheets'), { recursive: true, force: true });
  const groups = [...new Set(rendered.map((r) => r.spec.group ?? 'Extras'))];
  for (const g of groups) {
    const slug = g.toLowerCase().replace(/[^a-z]+/g, '-');
    contactSheet(rendered.filter((r) => (r.spec.group ?? 'Extras') === g), path.join(root, `docs/sheets/${slug}.png`), 64);
  }
}

async function main() {
  sheets();
  if (sheetOnly || only) return;

  fs.rmSync(path.join(root, 'dist'), { recursive: true, force: true });
  fs.mkdirSync(path.join(root, 'dist/svg'), { recursive: true });
  for (const size of SIZES) fs.mkdirSync(path.join(root, `dist/webp/${size}`), { recursive: true });

  const manifest = [];
  let bytes = { svg: 0, webp: Object.fromEntries(SIZES.map((s) => [s, 0])) };

  for (const { spec, svg } of rendered) {
    const min = optimize(svg, {
      multipass: true,
      plugins: ['preset-default'],
    }).data;
    fs.writeFileSync(path.join(root, `dist/svg/${spec.id}.svg`), min);
    bytes.svg += min.length;
    const sizes = { svg: min.length, webp: {} };

    for (const size of SIZES) {
      const png = new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
      const webp = await sharp(png).webp({ quality: 90, alphaQuality: 95, effort: 6 }).toBuffer();
      fs.writeFileSync(path.join(root, `dist/webp/${size}/${spec.id}.webp`), webp);
      bytes.webp[size] += webp.length;
      sizes.webp[size] = webp.length;
    }

    manifest.push({
      id: spec.id,
      name: spec.name,
      emoji: spec.emoji,
      group: spec.group,
      subgroup: spec.subgroup,
      tags: spec.tags,
      svg: `svg/${spec.id}.svg`,
      webp: Object.fromEntries(SIZES.map((s) => [s, `webp/${s}/${spec.id}.webp`])),
      bytes: sizes,
    });
  }

  fs.writeFileSync(path.join(root, 'dist/manifest.json'), JSON.stringify({ version: require('../package.json').version, icons: manifest }, null, 2));

  // The showcase page in docs/ is served as-is (GitHub Pages from /docs), so it gets its own copy.
  fs.rmSync(path.join(root, 'docs/dist'), { recursive: true, force: true });
  fs.cpSync(path.join(root, 'dist'), path.join(root, 'docs/dist'), { recursive: true });

  const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
  const n = rendered.length;
  console.log(`dist: ${n} icons`);
  const missing = emoji.filter((e) => !rendered.some((r) => r.spec.id === e.id));
  console.log(`  emoji    ${emoji.length - missing.length} of ${emoji.length} drawn${missing.length ? `; missing ${missing.slice(0, 20).map((e) => e.id).join(', ')}${missing.length > 20 ? ', …' : ''}` : ''}`);
  console.log(`  svg      total ${kb(bytes.svg)}, avg ${kb(bytes.svg / n)}`);
  for (const s of SIZES) console.log(`  webp ${String(s).padStart(3)}  total ${kb(bytes.webp[s])}, avg ${kb(bytes.webp[s] / n)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
