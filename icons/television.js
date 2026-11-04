const p = require('../src/parts/paper');
const body = p.rr(12, 28, 72, 52, 10);
module.exports = {
  id: 'television',
  name: 'Television',
  emoji: '📺',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['tv', 'watch', 'retro', 'show', 'screen'],
  tone: 'teal',
  body,
  shine: [19, 36, -40],
  draw(c) {
    const t = c.ramp('teal');
    c.def(`<radialGradient id="${c.id('scr')}" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stop-color="#7A8CFF"/><stop offset=".55" stop-color="#2B2A8F"/><stop offset="1" stop-color="#0B0630"/></radialGradient>`);
    return `${p.line('M48 28 L34 10 M48 28 L64 8', '#2E2E3A', 2.4)}
      <circle cx="34" cy="10" r="2.6" fill="${c.radial('k1', 'silver')}"/><circle cx="64" cy="8" r="2.6" fill="${c.radial('k2', 'silver')}"/>
      <path d="M42 28 Q42 22 48 22 Q54 22 54 28 Z" fill="${c.linear('dome', 'black', [0, 0, 0, 1], 0, 2)}"/>
      <path d="M24 78 L20 85 M72 78 L76 85" stroke="#2E2E3A" stroke-width="3.6" stroke-linecap="round"/>
      <path d="${body}" fill="${c.linear('a', 'teal', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${p.rr(18, 34, 46, 40, 8)}" fill="${t[3]}" opacity=".7"/>
      <path d="${p.rr(20, 36, 42, 36, 7)}" fill="url(#${c.id('scr')})"/>
      <path d="M24 46 C26 41 31 39 36 39" stroke="#fff" stroke-opacity=".55" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <circle cx="73.5" cy="42" r="4.2" fill="${c.radial('d1', 'gold', 0.3, 0.25)}" stroke="#5E3A00" stroke-opacity=".6"/>
      <circle cx="73.5" cy="54" r="4.2" fill="${c.radial('d2', 'gold', 0.3, 0.25)}" stroke="#5E3A00" stroke-opacity=".6"/>
      ${p.line('M69.5 63 L77.5 63 M69.5 66.5 L77.5 66.5 M69.5 70 L77.5 70', t[3], 1.4, 0.6)}`;
  },
};
