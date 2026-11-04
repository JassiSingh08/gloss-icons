// Prints the spec header for emoji ids, ready to paste into a new icon file:
//   node scripts/emoji-fields.js grinning-face winking-face
// --subgroup face-smiling lists every id in a subgroup that has no icon yet.
const fs = require('fs');
const path = require('path');
const { emoji } = require('../data/emoji.json');

const byId = Object.fromEntries(emoji.map((e) => [e.id, e]));
const args = process.argv.slice(2);
const q = (s) => `'${s.replace(/'/g, "\\'")}'`;
const title = (s) => s.replace(/(^|[\s-])([a-z])/g, (m, a, b) => a + b.toUpperCase());

if (args[0] === '--subgroup') {
  const have = new Set(fs.readdirSync(path.join(__dirname, '../icons')).map((f) => f.slice(0, -3)));
  const want = args[1].split(',');
  for (const e of emoji) if (want.includes(e.subgroup) && !have.has(e.id)) console.log(`${e.id}\t${e.emoji}\t${e.name}`);
} else {
  for (const id of args) {
    const e = byId[id];
    if (!e) { console.error(`no emoji with id ${id}`); process.exitCode = 1; continue; }
    console.log(`  id: ${q(e.id)},\n  name: ${q(title(e.name))},\n  emoji: ${q(e.emoji)},\n  group: ${q(e.group)},\n  subgroup: ${q(e.subgroup)},\n`);
  }
}
