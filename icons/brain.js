const body =
  'M25 67 C15 65 11 55 16 47 C12 39 17 29 27 28 C29 19 40 15 47 20 C53 14 64 15 68 22 C76 20 84 28 82 37 C86.5 43 85 55 79 59 C80 67 73 73 65 71 C62 74 59 74.5 57 73.5 C57 77 58 80 60.5 83 C58 84.6 52.5 84.6 50.5 83 C51 80 51 76.5 49.5 73 C45 74.5 40 74 37 71.5 C32 73.5 26 71.5 25 67 Z';

module.exports = {
  id: 'brain',
  name: 'Brain',
  emoji: '🧠',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['mind', 'think', 'smart', 'puzzle', 'mind benders', 'brainy'],
  tone: 'pink',
  body,
  shine: [26, 36, -50],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.25" r="0.95"><stop offset="0" stop-color="#FFD3E0"/><stop offset="0.35" stop-color="#FF8DB0"/><stop offset="0.75" stop-color="#E0457A"/><stop offset="1" stop-color="#7A1640"/></radialGradient>`);
    const groove = '#9E0035';
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <g fill="none" stroke="${groove}" stroke-opacity=".6" stroke-width="2.6" stroke-linecap="round">
        <path d="M28 57 C35 52 43 55 49 50 C54 46 61 47 66 51"/>
        <path d="M23 42 C27 39 32 41 33 46"/>
        <path d="M33 30 C35 35 41 36 42 41"/>
        <path d="M47 21 C46 27 51 30 55 29"/>
        <path d="M66 24 C63 30 67 35 72 35"/>
        <path d="M56 37 C60 41 66 39 70 43 C73 46 77 46 79 44"/>
        <path d="M37 64 C40 61 45 62 47 59"/>
        <path d="M64 70 C68 66 74 66 77 61"/>
        <path d="M57 63 C61 63 63 60 63 57"/>
      </g>`;
  },
};
