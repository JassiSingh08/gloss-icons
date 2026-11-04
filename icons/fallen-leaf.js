const L = require('../src/parts/leaf');
// Two dry leaves with wavy oak-like edges, one orange in front of one already brown.
const front = L.shapedLeaf([24, 80], [78, 30], { w: 0.27, bend: 0.12, teeth: 4, depth: 0.32, edge: 'wave' });
module.exports = {
  id: 'fallen-leaf',
  name: 'Fallen Leaf',
  emoji: '🍂',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['autumn', 'fall', 'leaves', 'dry', 'season'],
  tone: 'orange',
  body: front,
  shine: [44, 48, -45],
  shineSize: [5.5, 2.2],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#FFE08A"/><stop offset="0.35" stop-color="#F28A1E"/><stop offset="0.75" stop-color="#B0400A"/><stop offset="1" stop-color="#4A1A02"/></radialGradient>`);
    const brown = c.radial('back', 'brown', 0.3, 0.25);
    const back = L.shapedLeaf([18, 46], [66, 12], { w: 0.26, bend: -0.15, teeth: 4, depth: 0.3, edge: 'wave' });
    return `<path d="M18 46 L13 50" stroke="#331805" stroke-width="2.4" stroke-linecap="round"/>
      <path d="${back}" fill="${brown}" stroke="#331805" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M20 44 Q44 33 63 15" stroke="#331805" stroke-opacity=".45" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path d="M24 80 L18 86" stroke="#6B2A06" stroke-width="2.6" stroke-linecap="round"/>
      <path d="${front}" fill="url(#${c.id('a')})"/>
      <path d="M26 78 Q48 61 75 33 M38 67 L34 56 M38 67 L48 70 M50 56 L46 45 M50 56 L60 59 M61 45 L58 36 M61 45 L70 47" stroke="#8A2A00" stroke-opacity=".5" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
