const body =
  'M18 73 C14 73 12 70 12 66 L12 57 C12 51 15 48 20 47 L28 46 C32 37 38 31 47 31 L56 31 C63 31 67 35 71 42 L73.5 46.5 C80 47.5 84 51 84 57 L84 66 C84 70 82 73 78 73 Z';

module.exports = {
  id: 'car',
  name: 'Car',
  emoji: '🚗',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['car', 'road trip', 'drive', 'travel', 'journey'],
  tone: 'red',
  body,
  shine: [22, 51.5, -12],
  shineSize: [6, 2.4],
  draw(c) {
    const paint = c.radial('a', 'red', 0.3, 0.2);
    c.def(`<linearGradient id="${c.id('glass')}" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#E4F6FF"/><stop offset="1" stop-color="#4FA8E8"/></linearGradient>`);
    const tyre = c.radial('tyre', 'black', 0.35, 0.3);
    const hub = c.radial('hub', 'silver', 0.3, 0.25);
    const r = c.ramp('red');
    const wheel = (x) => `<circle cx="${x}" cy="74.5" r="9.5" fill="${tyre}" stroke="#05050A" stroke-opacity=".5" stroke-width="1.2"/>
      <circle cx="${x}" cy="74.5" r="4.4" fill="${hub}"/><circle cx="${x}" cy="74.5" r="1.4" fill="${c.ramp('silver')[3]}"/>`;
    return `<path d="${body}" fill="${paint}"/>
      <path d="M32 46 C35 40 39 36 45.5 36 L46.5 36 L46.5 46 Z" fill="url(#${c.id('glass')})"/>
      <path d="M51 36 L55 36 C60.5 36 63.5 40 66.5 46 L51 46 Z" fill="url(#${c.id('glass')})"/>
      <path d="M48.8 47 L48.8 66" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1.3"/>
      <rect x="53" y="51" width="6" height="2" rx="1" fill="${r[3]}" opacity=".45"/>
      <path d="M12.3 58 L15.5 58 Q17 58 17 59.5 L17 62 Q17 63.5 15.5 63.5 L12.3 63.5 Z" fill="#FFB000"/>
      <path d="M83.7 55 L79 55 Q77 55 77 57 L77 59 Q77 61 79 61 L83.7 61 Z" fill="#FFF7A8"/>
      <path d="M13 67 L83 67" stroke="${r[3]}" stroke-opacity=".35" stroke-width="1.3"/>
      ${wheel(29)}${wheel(67)}`;
  },
};
