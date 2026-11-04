// The bottle is drawn upright around the middle of its base and tipped as it pops; place() gives
// the outline the same turn.
const ANGLE = 25;
const AT = [34, 78];
const place = (d) => {
  const a = (ANGLE * Math.PI) / 180;
  return d.replace(/(-?[\d.]+)[ ,]+(-?[\d.]+)/g, (_, x, y) => `${(AT[0] + x * Math.cos(a) - y * Math.sin(a)).toFixed(2)} ${(AT[1] + x * Math.sin(a) + y * Math.cos(a)).toFixed(2)}`);
};
const bottle = 'M-11 0 Q-14 0 -14 -3 L-14 -34 C-14 -42 -5 -45 -4.5 -52 L-4.5 -65 L4.5 -65 L4.5 -52 C5 -45 14 -42 14 -34 L14 -3 Q14 0 11 0 Z';
module.exports = {
  id: 'champagne',
  name: 'Champagne',
  tags: ['celebrate', 'party', 'pop', 'bubbly', 'new year', 'congrats'],
  tone: 'green',
  body: place(bottle),
  shine: (() => { const [x, y] = place('-9 -36').split(' ').map(Number); return [x, y, ANGLE - 70]; })(),
  draw(c) {
    c.def(`<linearGradient id="${c.id('glass')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0B4A2A"/><stop offset="0.3" stop-color="#3FC27C"/><stop offset="0.6" stop-color="#127A42"/><stop offset="1" stop-color="#03200F"/></linearGradient>`);
    const foil = c.linear('foil', 'gold', [0, 0, 1, 0], 0, 2);
    const label = c.linear('label', 'cream', [0, 0, 1, 0], 0, 2);
    const cork = c.radial('cork', 'brown', 0.35, 0.25);
    const foam = '#FFFBEA';
    const drop = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${foam}"/>`;
    return `<path d="M58.5 21.5 C56 15 61 9.5 67 10.5 C70 7.5 76 8 77.5 11.5 C81.5 11 84.5 15 82.5 18.5 C84 22.5 79.5 26 75.5 24 C72 28 63.5 27.5 58.5 21.5 Z" fill="${foam}"/>
      <path d="M61 19 C62 15 66 13 70 14 C69 17 72 19 75 19 C72 22 65 23 61 19 Z" fill="#FFE07A" opacity=".8"/>
      ${drop(68, 31, 1.7)}${drop(76, 30.5, 1.3)}${drop(55, 12, 1.4)}${drop(60, 7.5, 1.1)}
      <g transform="translate(79 12) rotate(40)">
        <path d="M-3.4 3.4 L3.4 3.4 L3.9 -0.8 Q4.2 -5 0 -5 Q-4.2 -5 -3.9 -0.8 Z" fill="${cork}" stroke="#331805" stroke-opacity=".5" stroke-width="1.1"/>
      </g>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="${bottle}" fill="url(#${c.id('glass')})"/>
        <path d="M-5.5 -66 L5.5 -66 L4.5 -52 C5 -49 7.5 -46.5 10 -45 L-10 -45 C-7.5 -46.5 -5 -49 -4.5 -52 Z" fill="${foil}"/>
        <path d="M-6 -67.5 L6 -67.5 L6 -63.5 L-6 -63.5 Z" fill="${foil}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>
        <path d="M-14 -31 L14 -31 L14 -13 L-14 -13 Z" fill="${label}"/>
        <path d="M-14 -29 L14 -29 M-14 -15 L14 -15" stroke="#C98500" stroke-width="1.3"/>
        <ellipse cx="0" cy="-22" rx="5" ry="3.4" fill="none" stroke="#C98500" stroke-width="1.4"/>
      </g>`;
  },
};
