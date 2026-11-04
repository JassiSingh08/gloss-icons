// A crescent whose inner edge is carved into a profile: brow, sunken eye, nose, lips, chin.
// Drawn looking right (first quarter); `mirror` flips every x for the last quarter, looking left.
function profile(mirror) {
  const X = (x) => (mirror ? 96 - x : x);
  const p = (x, y) => `${X(x)} ${y}`;
  const sw = mirror ? 1 : 0;
  const body = `M${p(58, 12)} A36.6 36.6 0 1 ${sw} ${p(58, 84)} C${p(48, 82)} ${p(42, 76)} ${p(43, 71)} Q${p(47, 68.5)} ${p(46, 66)} Q${p(41, 64.5)} ${p(40.5, 62.5)} Q${p(44, 60)} ${p(43, 57.5)} Q${p(41, 56)} ${p(42, 54.5)} Q${p(48, 53)} ${p(52, 51)} Q${p(49, 46)} ${p(41.5, 44.5)} Q${p(37.5, 42)} ${p(39, 36.5)} C${p(40, 28)} ${p(46, 19)} ${p(58, 12)} Z`;
  const ink = '#5E3A00';
  return {
    body,
    shine: [X(24), 34, mirror ? 55 : -55],
    draw(c) {
      const glow = c.radial('a', 'yellow', mirror ? 0.6 : 0.25, 0.3);
      const crater = c.ramp('gold')[2];
      return `<path d="${body}" fill="${glow}"/>
        <path d="M${p(29, 41)} Q${p(33.5, 44.5)} ${p(38, 41.5)}" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M${p(30, 37)} Q${p(34, 34.5)} ${p(38, 36)}" stroke="${ink}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/>
        <path d="M${p(40.5, 62.5)} L${p(36, 62)}" stroke="${ink}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <circle cx="${X(22)}" cy="58" r="3.6" fill="${crater}" opacity=".35"/>
        <circle cx="${X(31)}" cy="73" r="2.6" fill="${crater}" opacity=".3"/>
        <circle cx="${X(22)}" cy="45" r="1.8" fill="${crater}" opacity=".3"/>`;
    },
  };
}

const P = profile(true);
module.exports = {
  id: 'last-quarter-moon-face',
  name: 'Last Quarter Moon Face',
  emoji: '🌜',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'face', 'crescent', 'sleepy', 'night'],
  tone: 'gold',
  body: P.body,
  shine: P.shine,
  shineSize: [5, 2.4],
  draw: P.draw,
  profile,
};
