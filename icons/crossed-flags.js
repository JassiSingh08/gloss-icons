const av = require('../src/parts/av');
const m = require('../src/parts/metal');
// Two Japanese flags on poles crossed below the cloths, flying away from each other.
const S = 0.68;
const C = { ...av.CLOTH, w: 44, h: 32, amp: 2.2, droop: 2 };
const R = m.frame({ at: [58, 12], deg: 28, s: S });
const L = m.frame({ at: [38, 12], deg: -28, s: S, flip: true });
const clothR = av.band(R, 0, 1, 0, 1, 12, C);
const clothL = av.band(L, 0, 1, 0, 1, 12, C);
const sh = L.p([33, 10]);
function sun(c, F, name) {
  const [x, y] = F.p(av.at(0.5, 0.5, C));
  return `<circle cx="${av.n(x)}" cy="${av.n(y)}" r="${av.n(9.5 * S)}" fill="${c.radial(name, 'red', 0.35, 0.3)}"/>`;
}

module.exports = {
  ...{
  id: 'crossed-flags',
  name: 'Crossed Flags',
  emoji: '🎌',
  group: 'Flags',
  subgroup: 'flag',
  tags: ['crossed flags', 'japan', 'celebration', 'flags', 'holiday'],
},
  tone: 'white',
  body: `${clothL} ${clothR}`,
  shine: [av.n(sh[0]), av.n(sh[1]), 20],
  shineSize: [5, 2.2],
  draw: (c) => {
    const cloth = c.linear('cloth', 'white', [0, 0, 1, 1], 0, 2);
    return `${av.pole(c, L, 'pl', 116)}${av.pole(c, R, 'pr', 116)}
      <path d="${clothL}" fill="${cloth}"/><path d="${clothR}" fill="${cloth}"/>
      ${sun(c, L, 'sl')}${sun(c, R, 'sr')}
      ${av.folds(c, L, clothL, 'fl', C)}${av.folds(c, R, clothR, 'fr', C)}`;
  },
};
