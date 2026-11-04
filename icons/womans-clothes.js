const g = require('../src/parts/garment');

const body = 'M31 25 Q48 33 65 25 L75 29 Q78 30 79.5 33 L86 45 L75.5 51 L71 45.5 L71 80 Q71 83 68 83 L28 83 Q25 83 25 80 L25 45.5 L20.5 51 L10 45 L16.5 33 Q18 30 21 29 Z';

module.exports = {
  id: 'womans-clothes',
  name: 'Woman’s Clothes',
  emoji: '👚',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['blouse', 'top', 'clothes', 'fashion', 'shopping'],
  tone: 'pink',
  body,
  shine: [21, 37, -55],
  shineSize: [5, 2],
  draw(c) {
    const cloth = c.radial('a', 'pink', 0.3, 0.2);
    const bow = c.radial('bow', 'gold', 0.35, 0.3);
    const p = c.ramp('pink');
    return g.tube(c, 'M48 27 L48 21 Q48 15 53 15 Q57.5 15 57.5 19.5', { width: 2.4, palette: 'silver', name: 'hook', box: [44, 12, 60, 28] })
      + g.tube(c, 'M24 30.5 L48 22.5 L72 30.5', { width: 2.6, palette: 'silver', name: 'bar', box: [24, 20, 72, 32] })
      + `<path d="${body}" fill="${cloth}"/>
      <path d="M31 25 Q48 33 65 25 Q60 34 48 35 Q36 34 31 25 Z" fill="${p[3]}" opacity=".55"/>
      ${g.stitch('M32.5 28 Q48 36.5 63.5 28', '#fff', 0.5)}
      <path d="M25 45.5 L25 37 M71 45.5 L71 37" stroke="${p[3]}" stroke-opacity=".5" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M25.3 64 Q48 69 70.7 64" fill="none" stroke="${p[3]}" stroke-opacity=".4" stroke-width="1.4"/>
      ${g.fold('M38 69 L36 82 M48 70 L48 82.5 M58 69 L60 82', p[3], 0.35, 1.3)}
      <path d="M48 36 C43 31 37 33 39 38 C41 42 46 39 48 37 Z M48 36 C53 31 59 33 57 38 C55 42 50 39 48 37 Z" fill="${bow}" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".9"/>
      <path d="M46.5 38 L44 45 M49.5 38 L52 45" stroke="#C98500" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="48" cy="36.8" r="2" fill="${bow}" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".9"/>`;
  },
};
