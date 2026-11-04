// Renders every icon in icons/*.js and writes:
//   dist/svg/<id>.svg            optimised SVG (svgo)
//   dist/webp/<size>/<id>.webp   32, 64, 128 and 256 px, for apps that should not draw SVG at runtime
//   dist/manifest.json           ids, names, tags and file paths
//   docs/sheet.png               contact sheet of the whole set on a dark background
// Run: npm run build   (or npm run sheet to only redraw the contact sheet while drawing icons)
const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');
const { optimize } = require('svgo');

const { render } = require('../src/engine');

const root = path.join(__dirname, '..');
const SIZES = [32, 64, 128, 256];
const sheetOnly = process.argv.includes('--sheet-only');
const arg = (name) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : undefined; };
// --only a,b,c renders just those icons; --out puts the contact sheet elsewhere. Lets several
// people draw at once without one half-finished file breaking everyone's preview.
const only = arg('--only')?.split(',');
const sheetPath = arg('--out') ?? path.join(root, 'docs/sheet.png');

const specs = fs
  .readdirSync(path.join(root, 'icons'))
  .filter((f) => f.endsWith('.js') && (!only || only.includes(f.slice(0, -3))))
  .sort()
  .map((f) => {
    const spec = require(path.join(root, 'icons', f));
    if (`${spec.id}.js` !== f) throw new Error(`${f}: id "${spec.id}" must match the file name`);
    return spec;
  });

const rendered = specs.map((spec) => ({ spec, svg: render(spec) }));

function contactSheet() {
  const cols = 8;
  const cell = 132;
  const rows = Math.ceil(rendered.length / cols);
  const width = cols * cell + 24;
  const height = rows * (cell + 22) + 24;
  const tiles = rendered
    .map(({ spec, svg }, i) => {
      const x = 12 + (i % cols) * cell;
      const y = 12 + Math.floor(i / cols) * (cell + 22);
      const inner = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
      return `<rect x="${x + 4}" y="${y + 4}" width="${cell - 8}" height="${cell - 8}" rx="18" fill="#1A1526" stroke="#33294A"/>
        <svg x="${x + 16}" y="${y + 12}" width="${cell - 32}" height="${cell - 32}" viewBox="0 0 96 96">${inner}</svg>
        <text x="${x + cell / 2}" y="${y + cell + 12}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="13" fill="#A79FB8">${spec.id}</text>`;
    })
    .join('');
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#0E0B16"/>${tiles}</svg>`;
  fs.mkdirSync(path.dirname(sheetPath), { recursive: true });
  fs.writeFileSync(sheetPath, new Resvg(sheet, { font: { loadSystemFonts: true } }).render().asPng());
}

async function main() {
  contactSheet();
  console.log(`${sheetPath}: ${rendered.length} icons`);
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
  console.log(`  svg      total ${kb(bytes.svg)}, avg ${kb(bytes.svg / n)}`);
  for (const s of SIZES) console.log(`  webp ${String(s).padStart(3)}  total ${kb(bytes.webp[s])}, avg ${kb(bytes.webp[s] / n)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
