// Builds data/emoji.json, the list of emoji the set covers, from Unicode's emoji-test.txt.
// Run: node scripts/emoji-data.js [path/to/emoji-test.txt]   (downloads the latest one otherwise)
//
// Kept: every fully-qualified emoji. Dropped: skin-tone and hair variants, the man/woman
// versions of a person emoji, the right-facing copies of walkers and runners, and the
// country and subdivision flags. Ids are the kebab-case CLDR short name, except where an
// icon drawn before this list existed already covers the emoji (ALIASES) or already took
// the name for something else (RENAMES). Those ids are what apps sync by, so never change them.
const fs = require('fs');
const path = require('path');

const ALIASES = {
  '🔞': 'badge-18', '🌼': 'blossom', '🚗': 'car', '🍾': 'champagne', '🥂': 'cheers',
  '🌶️': 'chili', '🎬': 'clapper', '☕': 'coffee', '🛋️': 'couch', '😈': 'devil', '🎲': 'dice',
  '🪩': 'disco-ball', '🪔': 'diya', '😵‍💫': 'dizzy', '🔥': 'flame', '🎮': 'gamepad',
  '🎁': 'gift', '🌍': 'globe', '🎧': 'headphones', '💘': 'heart-arrow', '❤️': 'heart',
  '😂': 'laugh', '⚡': 'lightning', '👄': 'lips', '🔒': 'lock', '🌙': 'moon', '🏝️': 'palm',
  '🐾': 'paw', '🫣': 'peek', '👤': 'person', '📱': 'phone', '✈️': 'plane', '📡': 'satellite',
  '🤢': 'sick', '🧸': 'teddy', '🎄': 'xmas-tree',
};
// Emoji whose CLDR name is an id an older icon already uses with another meaning.
const RENAMES = { '💫': 'dizzy-star', '🧑': 'adult', '🛰️': 'space-satellite' };

const slug = (name) =>
  name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[’'“”".!]/g, '').replace(/&/g, 'and').replace(/#/g, 'hash').replace(/\*/g, 'asterisk')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function parse(txt) {
  let group, subgroup;
  const list = [];
  for (const line of txt.split('\n')) {
    let m;
    if ((m = line.match(/^# group: (.*)/))) { group = m[1]; continue; }
    if ((m = line.match(/^# subgroup: (.*)/))) { subgroup = m[1]; continue; }
    m = line.match(/^([0-9A-F ]+?)\s*; fully-qualified\s*# (\S+) E(\S+) (.*)$/);
    if (!m) continue;
    const cps = m[1].split(' ').map((h) => parseInt(h, 16));
    const [, , emoji, version, name] = m;
    const zwj = cps.includes(0x200d);
    if (cps.some((c) => c >= 0x1f3fb && c <= 0x1f3ff)) continue; // skin tones
    if (cps.some((c) => c >= 0x1f9b0 && c <= 0x1f9b3)) continue; // hair styles
    if (/facing right/.test(name)) continue;
    if (subgroup === 'country-flag' || subgroup === 'subdivision-flag') continue;
    if (group === 'People & Body' && zwj && cps.some((c) => [0x2640, 0x2642, 0x1f468, 0x1f469].includes(c))) continue;
    const id = ALIASES[emoji] ?? RENAMES[emoji] ?? slug(name);
    list.push({ id, emoji, name, group, subgroup, version });
  }
  return list;
}

async function main() {
  const src = process.argv[2];
  const txt = src
    ? fs.readFileSync(src, 'utf8')
    : await (await fetch('https://unicode.org/Public/emoji/latest/emoji-test.txt')).text();
  const version = txt.match(/^# Version: (\S+)/m)[1];
  const list = parse(txt);
  const seen = new Set();
  for (const e of list) {
    if (seen.has(e.id)) throw new Error(`duplicate id ${e.id}`);
    seen.add(e.id);
  }
  const out = path.join(__dirname, '../data/emoji.json');
  fs.writeFileSync(out, `{"unicode":"${version}","emoji":[\n${list.map((e) => JSON.stringify(e)).join(',\n')}\n]}\n`);
  console.log(`${out}: Emoji ${version}, ${list.length} emoji`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
