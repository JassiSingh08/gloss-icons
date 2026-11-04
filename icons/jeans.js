const g = require('../src/parts/garment');

const body = 'M24 12 L72 12 L76.5 80 Q76.7 83 73.5 83 L55.5 83 Q52.5 83 52.3 80 L49 41 L47 41 L43.7 80 Q43.5 83 40.5 83 L22.5 83 Q19.3 83 19.5 80 Z';

module.exports = {
  id: 'jeans',
  name: 'Jeans',
  emoji: '👖',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['jeans', 'denim', 'pants', 'trousers', 'casual'],
  tone: 'navy',
  body,
  shine: [27, 24, -82],
  shineSize: [6, 2],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.15" r="0.95"><stop offset="0" stop-color="#A9D2F5"/><stop offset="0.35" stop-color="#3D7DC9"/><stop offset="0.75" stop-color="#1D3F80"/><stop offset="1" stop-color="#0A1A3D"/></radialGradient>`);
    const band = c.linear('band', 'navy', [0, 0, 0, 1], 1, 2);
    const button = c.radial('btn', 'gold', 0.35, 0.3);
    const ink = '#0A1A3D';
    const thread = '#FFB627';
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="M24 12 L72 12 L72.5 19 L23.5 19 Z" fill="${band}"/>
      <path d="M23.5 19 L72.5 19" stroke="${ink}" stroke-opacity=".5" stroke-width="1.2"/>
      ${g.stitch('M24.2 14 L71.8 14 M23.8 17.2 L72.2 17.2', thread, 0.8)}
      ${g.stitch('M48 19 L48 32 Q48 36 44.5 37 M24 23 Q33 24 36 19 M72 23 Q63 24 60 19', thread, 0.8)}
      ${g.fold('M48 19 L48 38', ink, 0.5, 1.3)}
      <path d="M30 11 L30 20.5 M40 11 L40 20.5 M56 11 L56 20.5 M66 11 L66 20.5" stroke="${ink}" stroke-opacity=".55" stroke-width="1.6"/>
      <circle cx="48" cy="15.5" r="2.4" fill="${button}" stroke="#5E3A00" stroke-opacity=".6" stroke-width=".8"/>
      ${g.fold('M30 50 Q34 52 38 50 M58 50 Q62 52 66 50 M27 66 L34 68 M62 68 L70 66', '#fff', 0.3, 1.3)}
      ${g.fold('M37 78 L41 78 M56 78 L60 78', ink, 0.4, 1.3)}
      <path d="M20 77 L44.2 77 M52 77 L76.3 77" stroke="#A9D2F5" stroke-opacity=".5" stroke-width="1.2"/>`;
  },
};
