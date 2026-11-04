const body = 'M16 57 C16 51 30 49 44 49 C56 49 63 49.5 70 48.5 C74 48 78 46.5 82 44 C81 50 77 56 72 59 C69 70 62 77 56 79.5 L58 84 L38 84 L40 79.5 C29 77 17 69 16 57 Z';
module.exports = {
  id: 'diya',
  name: 'Diya',
  tags: ['diwali', 'lamp', 'light', 'festival', 'celebration', 'warm'],
  tone: 'brown',
  body,
  shine: [24, 62, -35],
  draw(c) {
    c.def(`<radialGradient id="${c.id('clay')}" cx="0.32" cy="0.3" r="0.95"><stop offset="0" stop-color="#FFB78C"/><stop offset="0.35" stop-color="#DE6428"/><stop offset="0.75" stop-color="#8E2E0C"/><stop offset="1" stop-color="#3D1204"/></radialGradient>`);
    c.def(`<linearGradient id="${c.id('oil')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3D1204"/><stop offset="1" stop-color="#7A3A0A"/></linearGradient>`);
    const flame = c.radial('flame', 'orange', 0.5, 0.8);
    const core = c.radial('core', 'flame', 0.5, 0.75);
    const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="1.7" fill="#FFD24A"/>`;
    return `<circle cx="76" cy="36" r="14" fill="#FF8C00" opacity=".35" filter="url(#${c.id('b5')})"/>
      <path d="${body}" fill="url(#${c.id('clay')})"/>
      <path d="M20 56.5 C20 53 32 52 44 52 C56 52 66 52.5 76 49.5 C72 55 62 59.5 44 59.5 C31 59.5 20 59 20 56.5 Z" fill="url(#${c.id('oil')})"/>
      <path d="M30 55 C38 54 50 54 58 54.5" stroke="#FFC21A" stroke-opacity=".45" stroke-width="1.4" stroke-linecap="round" fill="none"/>
      <path d="M21 64 C30 70 58 71 70 63" stroke="#FFD24A" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      ${dot(29, 70.5)}${dot(38, 73.5)}${dot(48, 74.5)}${dot(58, 73)}
      <path d="M76 48.5 L77 44" stroke="#3D1204" stroke-width="2" stroke-linecap="round"/>
      <path d="M77 18 C82 26 84.5 32 84.5 37.5 C84.5 42 81 45.5 77 45.5 C73 45.5 69.5 42 69.5 37.5 C69.5 32 72 26 77 18 Z" fill="${flame}"/>
      <path d="M77 29 C80 33 81.2 36 81.2 38.8 C81.2 41.6 79.3 43.5 77 43.5 C74.7 43.5 72.8 41.6 72.8 38.8 C72.8 36 74 33 77 29 Z" fill="${core}"/>`;
  },
};
