const body = 'M27 44 L69 44 Q77 44 77 52 L77 75 Q77 83 69 83 L27 83 Q19 83 19 75 L19 52 Q19 44 27 44 Z';
module.exports = {
  id: 'lock',
  name: 'Lock',
  tags: ['lock', 'private', 'secret', 'secure', 'locked'],
  tone: 'gold',
  body,
  shine: [27, 50, -28],
  draw(c) {
    c.def(`<linearGradient id="${c.id('steel')}" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="66" y2="0"><stop offset="0" stop-color="#8E93AD"/><stop offset="0.22" stop-color="#FFFFFF"/><stop offset="0.5" stop-color="#C9CCDA"/><stop offset="0.8" stop-color="#6E7390"/><stop offset="1" stop-color="#3A3E52"/></linearGradient>`);
    const steel = `url(#${c.id('steel')})`;
    const ink = '#3D1F00';
    const shackle = 'M34 46 L34 33 C34 24 40 17.5 48 17.5 C56 17.5 62 24 62 33 L62 46';
    return `<path d="${shackle}" stroke="#3A3E52" stroke-width="10.4" fill="none"/>
      <path d="${shackle}" stroke="${steel}" stroke-width="8" fill="none"/>
      <path d="M33.2 34 C33.5 26 38 20.5 44 19.2" stroke="#fff" stroke-opacity=".8" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="${body}" fill="${c.radial('a', 'gold', 0.3, 0.2)}"/>
      <path d="M19 50 L77 50" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>
      <path d="M48 55 A5.5 5.5 0 0 1 51.2 65 L53 73 Q53.3 75 51.3 75 L44.7 75 Q42.7 75 43 73 L44.8 65 A5.5 5.5 0 0 1 48 55 Z" fill="${ink}"/>
      <path d="M45 58.5 A3.5 3.5 0 0 1 49.5 57.2" stroke="#fff" stroke-opacity=".3" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
  },
};
