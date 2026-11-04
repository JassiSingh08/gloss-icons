const body = 'M48 21 A28 28 0 1 1 47.99 21 Z';
// The ring is an annulus seen edge-on, tilted. Its back half is drawn behind the planet and its
// front half, clipped to the lower half of the tilt frame, in front.
const TILT = -18;
const ring = 'M8 49 A40 12.5 0 1 0 88 49 A40 12.5 0 1 0 8 49 Z M17 49 A31 7.2 0 1 1 79 49 A31 7.2 0 1 1 17 49 Z';
module.exports = {
  id: 'ringed-planet',
  name: 'Ringed Planet',
  emoji: '🪐',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['planet', 'saturn', 'space', 'ring', 'astronomy'],
  tone: 'purple',
  body,
  shine: [34, 32, -40],
  shineSize: [6, 2.6],
  draw(c) {
    const ringFill = c.linear('ring', 'gold', [0, 0, 1, 0.4], 0, 2);
    c.def(`<clipPath id="${c.id('front')}"><rect x="0" y="49" width="96" height="40"/></clipPath>`);
    c.def(`<clipPath id="${c.id('ball')}"><path d="${body}"/></clipPath>`);
    const r = (clip) => `<g transform="rotate(${TILT} 48 49)"${clip ? ` clip-path="url(#${c.id('front')})"` : ''}><path d="${ring}" fill-rule="evenodd" fill="${ringFill}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.1"/><ellipse cx="48" cy="49" rx="35.5" ry="9.8" fill="none" stroke="#C98500" stroke-opacity=".6" stroke-width="1.2"/></g>`;
    return `${r(false)}
      <path d="${body}" fill="${c.radial('a', 'purple', 0.32, 0.22)}"/>
      <g clip-path="url(#${c.id('ball')})" transform="rotate(${TILT} 48 49)" fill="none" stroke="#FF9BEA" stroke-opacity=".35" stroke-width="3">
        <path d="M14 36 Q48 43 82 36"/><path d="M14 62 Q48 69 82 62"/>
        <path d="M16 43 Q48 50 80 43" stroke="#1A0040" stroke-opacity=".25"/>
      </g>
      ${r(true)}`;
  },
};
