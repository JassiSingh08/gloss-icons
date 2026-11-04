// A round hole seen from above at an angle: a crisp ground edge, the far inner wall catching a
// little light as a crescent, and the depth falling away to black below it.
const body = 'M48 43 C68 43 84 51 84 62 C84 73 68 81 48 81 C28 81 12 73 12 62 C12 51 28 43 48 43 Z';
const floor = 'M48 51 C66 51 80.5 57.5 80.5 65.5 C80.5 74 66 79.5 48 79.5 C30 79.5 15.5 74 15.5 65.5 C15.5 57.5 30 51 48 51 Z';
module.exports = {
  id: 'hole',
  name: 'Hole',
  emoji: '🕳️',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['hole', 'void', 'pit', 'disappear', 'empty'],
  tone: 'black',
  body,
  shine: [27, 49.5, -14],
  shineSize: [4.5, 1.3],
  draw(c) {
    c.def(`<linearGradient id="${c.id('wall')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A5A72"/><stop offset=".5" stop-color="#2A2A3A"/><stop offset="1" stop-color="#141420"/></linearGradient>`);
    c.def(`<radialGradient id="${c.id('deep')}" cx=".5" cy=".35" r=".7"><stop offset="0" stop-color="#000"/><stop offset=".8" stop-color="#05050A"/><stop offset="1" stop-color="#141420"/></radialGradient>`);
    return `<path d="${body}" fill="url(#${c.id('wall')})"/>
      <path d="${floor}" fill="url(#${c.id('deep')})"/>
      <path d="M16 66 C20 75 33 80 48 80 C63 80 76 75 80 66" stroke="#8E8EA8" stroke-opacity=".5" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
