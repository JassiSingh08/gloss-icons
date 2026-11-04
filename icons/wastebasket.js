const p = require('../src/parts/paper');
const body = 'M14 25 C14 17 82 17 82 25 L74 80 C73 86 23 86 22 80 Z';
module.exports = {
  id: 'wastebasket',
  name: 'Wastebasket',
  emoji: '🗑️',
  group: 'Objects',
  subgroup: 'office',
  tags: ['trash', 'bin', 'delete', 'garbage', 'rubbish'],
  tone: 'slate',
  body,
  shine: [22, 32, -75],
  shineSize: [6, 2],
  draw(c) {
    const s = c.ramp('slate');
    c.def(`<linearGradient id="${c.id('cyl')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${s[1]}"/><stop offset=".25" stop-color="${s[0]}"/><stop offset=".6" stop-color="${s[1]}"/><stop offset="1" stop-color="${s[3]}"/></linearGradient>`);
    let slots = '';
    for (let i = 0; i < 7; i++) {
      const t = (i + 0.5) / 7;
      const xt = 22 + t * 52;
      const xb = 28 + t * 40;
      slots += `M${p.n(xt)} 36 L${p.n(xb)} 74 `;
    }
    return `<path d="${body}" fill="url(#${c.id('cyl')})"/>
      ${p.line(slots, s[3], 3.4, 0.55)}
      <path d="M14 25 C14 31 82 31 82 25 C82 19 14 19 14 25 Z" fill="${s[3]}"/>
      <path d="M18 26 C18 30.5 78 30.5 78 26 C78 23.4 72 22.6 48 22.6 C24 22.6 18 23.4 18 26 Z" fill="#0B1220"/>
      <path d="M14 25 C14 31 82 31 82 25" fill="none" stroke="${s[0]}" stroke-width="1.6" stroke-opacity=".8"/>
      <path d="M24 80 C30 83.5 66 83.5 72 80" stroke="${s[3]}" stroke-opacity=".5" stroke-width="1.4" fill="none"/>`;
  },
};
