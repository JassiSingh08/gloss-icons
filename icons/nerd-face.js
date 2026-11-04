const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'nerd-face',
  name: 'Nerd Face',
  emoji: '🤓',
  group: 'Smileys & Emotion',
  subgroup: 'face-glasses',
  tags: ['nerd', 'geek', 'glasses', 'smart', 'clever'],
  draw(c) {
    const frame = '#2A1206';
    const mouth = 'M33 60 Q48 64 63 60 Q61 74 48 75 Q35 74 33 60 Z';
    c.def(`<clipPath id="${c.id('mouth')}"><path d="${mouth}"/></clipPath>`);
    const ring = (x) => `<circle cx="${x}" cy="45" r="9.5" fill="#fff" fill-opacity=".22" stroke="${frame}" stroke-width="4"/>`;
    return f.head(c)
      + `<path d="M27 43 L18.8 40.5 M69 43 L77.2 40.5" stroke="${frame}" stroke-width="3" stroke-linecap="round"/>`
      + f.eyes.oval({ rx: 4, ry: 5.4, dx: 11.5 })
      + ring(36.5) + ring(59.5)
      + `<path d="M45.5 43.5 Q48 41.5 50.5 43.5" stroke="${frame}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="${mouth}" fill="${f.MOUTH}"/>
      <g clip-path="url(#${c.id('mouth')})"><ellipse cx="49" cy="76" rx="10" ry="6" fill="${f.TONGUE}"/></g>
      <path d="M42.5 61.5 L42.5 67 Q42.5 68.5 44 68.5 L46.5 68.5 Q47.6 68.5 47.6 67 L47.6 62.4 Z M48.4 62.4 L48.4 67 Q48.4 68.5 49.5 68.5 L52 68.5 Q53.5 68.5 53.5 67 L53.5 61.5 Z" fill="${f.TEETH}"/>`;
  },
};
