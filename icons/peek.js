const body = 'M48 22 A30 30 0 1 1 47.99 22 Z';
// Backs of two hands over the eyes, fingers up. Fingers are fat round-capped strokes, each drawn
// edge-then-fill so it overlaps the last with a crease; the palm covers their roots. On the right
// hand the two inner fingers part just enough for one eye to look through.
const HANDS = [
  {
    palm: 'M18.5 49 C17.5 58 21 65 30 65.5 C38 66 43.5 61 44.5 54 L45 47 Z',
    fingers: [[22, 50, 19.5, 35], [27.5, 49, 26.5, 30], [33.5, 49, 34, 29.5], [39.5, 50, 42, 33.5]],
  },
  {
    palm: 'M77.5 49 C78.5 58 75 65 66 65.5 C58 66 52.5 61 51.5 54 L51 47 Z',
    fingers: [[74, 50, 76.5, 35], [68.5, 49, 69.5, 30], [63, 49, 65, 29.5], [55.5, 50, 49.5, 33.5]],
  },
];
module.exports = {
  id: 'peek',
  name: 'No Peeking',
  tags: ['peek', 'no peeking', 'hide', 'shy', 'cover eyes'],
  tone: 'yellow',
  body,
  shine: [37, 27, -25],
  shineSize: [5, 2.2],
  draw(c) {
    const ink = '#3D1A00';
    c.def(`<radialGradient id="${c.id('hand')}" gradientUnits="userSpaceOnUse" cx="34" cy="30" r="46"><stop offset="0" stop-color="#FFE9A0"/><stop offset="0.4" stop-color="#FFB627"/><stop offset="1" stop-color="#B85F00"/></radialGradient>`);
    const hand = `url(#${c.id('hand')})`;
    const edge = '#6B3A00';
    const finger = ([x1, y1, x2, y2]) =>
      `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${edge}" stroke-width="7.8" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="${hand}" stroke-width="6" stroke-linecap="round"/>`;
    const handArt = ({ palm, fingers }) =>
      `${fingers.map(finger).join('')}<path d="${palm}" fill="${hand}"/><path d="${palm.replace(/ L[^Z]*Z$/, '')}" fill="none" stroke="${edge}" stroke-width="1.1"/>`;
    return `<path d="${body}" fill="${c.radial('a', 'yellow', 0.32, 0.25)}"/>
      <path d="M38 73 Q48 77.5 59 70.5" stroke="${ink}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M57.5 71.5 L61 70" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="57.4" cy="39.5" rx="3.2" ry="3.8" fill="#fff"/>
      <circle cx="57" cy="40.2" r="2.4" fill="${ink}"/>
      ${HANDS.map(handArt).join('')}
      <path d="M24 57 Q30 60 38 57" stroke="${edge}" stroke-opacity=".35" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M72 57 Q66 60 58 57" stroke="${edge}" stroke-opacity=".35" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
  },
};
