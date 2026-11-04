const g = require('../src/parts/glass');
const body = 'M37 12 Q37 10 40 10 L56 10 Q59 10 59 12 Q59 15 55.5 16 L55 28 C66 32 72 40 72 50 C72 62 62 72 55 76 L56 79 Q58 80 58 82 Q58 84 55 84 L41 84 Q38 84 38 82 Q38 80 40 79 L41 76 C34 72 24 62 24 50 C24 40 30 32 41 28 L40.5 16 Q37 15 37 12 Z';
module.exports = {
  id: 'amphora',
  name: 'Amphora',
  emoji: '🏺',
  group: 'Food & Drink',
  subgroup: 'dishware',
  tags: ['amphora', 'vase', 'ancient', 'greek', 'pottery'],
  tone: 'ember',
  body,
  shine: [31, 41, -50],
  shineSize: [5.5, 2.4],
  draw(c) {
    // Terracotta: no palette has it, so a ramp of the same shape.
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.3" r="0.95"><stop offset="0" stop-color="#F7B48A"/><stop offset="0.35" stop-color="#D9662E"/><stop offset="0.75" stop-color="#933612"/><stop offset="1" stop-color="#3D1406"/></radialGradient>`);
    c.def(`<clipPath id="${c.id('v')}"><path d="${body}"/></clipPath>`);
    const ink = '#2A0E04';
    const handle = 'M41 19 C29 18 25 28 30 37';
    return `<g fill="none" stroke-linecap="round">
        <path d="${handle}" stroke="${ink}" stroke-opacity=".55" stroke-width="5.6"/><path d="${handle}" stroke="#C25526" stroke-width="3.4"/>
        <g transform="translate(96 0) scale(-1 1)"><path d="${handle}" stroke="${ink}" stroke-opacity=".55" stroke-width="5.6"/><path d="${handle}" stroke="#C25526" stroke-width="3.4"/></g>
      </g>
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <g clip-path="url(#${c.id('v')})">
        <path d="M20 41 C34 46 62 46 76 41 L76 51 C62 56 34 56 20 51 Z" fill="${ink}" opacity=".85"/>
        <path d="M26 49 L30 44.5 L34 49.5 L38 45.3 L42 50 L46 45.6 L50 50 L54 45.6 L58 50 L62 45.3 L66 49.5 L70 44.5" fill="none" stroke="#F2A57A" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M20 66 C34 71 62 71 76 66 L76 69.5 C62 74.5 34 74.5 20 69.5 Z" fill="${ink}" opacity=".85"/>
        <path d="M39 16 L57 16 L57 19 L39 19 Z" fill="${ink}" opacity=".7"/>
      </g>
      <path d="M38.5 11 L57.5 11" stroke="#F7B48A" stroke-width="1.2"/>`;
  },
};
