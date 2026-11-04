const m = require('../src/parts/metal');
const L = { open: true };
const lock = require('./lock');
module.exports = {
  id: 'unlocked',
  name: 'Unlocked',
  emoji: '🔓',
  group: 'Objects',
  subgroup: 'lock',
  tags: ['unlocked', 'open', 'unlock', 'access', 'public'],
  tone: 'gold',
  body: lock.body,
  shine: lock.shine,
  draw: (c) => m.padlock(c, L).art,
};
