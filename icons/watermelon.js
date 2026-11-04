const L = require('../src/parts/leaf');
// A half-moon slice: deep green rind, a white band, sweet red flesh and black seeds.
const ROT = { rotate: -12, cx: 48, cy: 52 };
const half = (r) => `M${48 - r} 38 L${48 + r} 38 C${48 + r} ${38 + r * 0.95} ${48 + r * 0.55} ${38 + r * 1.2} 48 ${38 + r * 1.2} C${48 - r * 0.55} ${38 + r * 1.2} ${48 - r} ${38 + r * 0.95} ${48 - r} 38 Z`;
const body = L.xform(half(37), ROT);
module.exports = {
  id: 'watermelon',
  name: 'Watermelon',
  emoji: '🍉',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['watermelon', 'melon', 'summer', 'fruit', 'picnic'],
  tone: 'green',
  body,
  shine: [20, 44, -55],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<radialGradient id="${c.id('rind')}" cx="0.3" cy="0.1" r="1"><stop offset="0" stop-color="#7EE07A"/><stop offset="0.5" stop-color="#1F9A3A"/><stop offset="0.85" stop-color="#0B5A26"/><stop offset="1" stop-color="#033018"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('flesh')}" cx="0.35" cy="0.05" r="1"><stop offset="0" stop-color="#FFB0A0"/><stop offset="0.35" stop-color="#FF4A5A"/><stop offset="0.8" stop-color="#D0102E"/><stop offset="1" stop-color="#8A0018"/></radialGradient>`);
    const seed = (x, y, a) => `<ellipse cx="${x}" cy="${y}" rx="1.7" ry="2.9" transform="rotate(${a} ${x} ${y})"/>`;
    return `<g transform="rotate(-12 48 52)">
      <path d="${half(37)}" fill="url(#${c.id('rind')})"/>
      <path d="${half(32.5)}" fill="#F4FFE8"/>
      <path d="${half(29.5)}" fill="url(#${c.id('flesh')})"/>
      <path d="M18.5 38 L77.5 38 L77.5 40.5 L18.5 40.5 Z" fill="#FFD0C8" opacity=".55"/>
      <g fill="#2A0508">${seed(32, 48, 25)}${seed(46, 47, 0)}${seed(60, 48, -25)}${seed(38, 58, 15)}${seed(54, 58, -15)}${seed(46, 67, 0)}</g>
      <g fill="#fff" opacity=".5"><ellipse cx="31.3" cy="46.9" rx=".6" ry="1"/><ellipse cx="45.4" cy="45.9" rx=".6" ry="1"/><ellipse cx="59.3" cy="46.9" rx=".6" ry="1"/></g>
      </g>`;
  },
};
