const body = 'M41 28 A25 25 0 1 1 40.99 28 Z';
module.exports = {
  id: 'bubbles',
  name: 'Bubbles',
  emoji: '🫧',
  group: 'Objects',
  subgroup: 'household',
  tags: ['bubbles', 'soap', 'foam', 'float', 'clean'],
  tone: 'sky',
  body,
  shine: [30, 37, -40],
  draw(c) {
    c.def(`<radialGradient id="${c.id('b')}" cx=".45" cy=".45" r=".55"><stop offset=".55" stop-color="#C9ECFF" stop-opacity=".08"/><stop offset=".82" stop-color="#5BC2FF" stop-opacity=".35"/><stop offset=".93" stop-color="#FF9BEA" stop-opacity=".55"/><stop offset="1" stop-color="#FFFFFF" stop-opacity=".9"/></radialGradient>`);
    const film = `url(#${c.id('b')})`;
    const bub = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${film}"/><circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#C9ECFF" stroke-opacity=".7" stroke-width="1.1"/><path d="M${x - r * 0.62} ${y - r * 0.15} A${r * 0.65} ${r * 0.65} 0 0 1 ${x - r * 0.15} ${y - r * 0.62}" stroke="#fff" stroke-width="${Math.max(1.2, r * 0.12)}" fill="none" stroke-linecap="round"/>`;
    return `${bub(71, 30, 12)}${bub(70, 63, 8)}${bub(80, 49, 4.5)}${bub(52, 16, 5)}
      <path d="${body}" fill="${film}"/>
      <path d="M28.5 46 A13 13 0 0 1 32 38" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M55 70 A18 18 0 0 1 48 73.5" stroke="#FF9BEA" stroke-opacity=".7" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  },
};
