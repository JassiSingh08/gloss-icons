const L = require('../src/parts/leaf');
// A cracked-open half in front of a whole one, so the white meat tells you what it is.
const body = 'M14 61 C14 55 26 51 42 51 C58 51 70 55 70 61 C70 75 58 84 42 84 C26 84 14 75 14 61 Z';
module.exports = {
  id: 'coconut',
  name: 'Coconut',
  emoji: '🥥',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['coconut', 'tropical', 'pina colada', 'beach', 'palm'],
  tone: 'brown',
  body,
  shine: [21, 68, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.radial('a', 'brown', 0.3, 0.2);
    const whole = c.radial('whole', 'brown', 0.32, 0.25);
    c.def(`<radialGradient id="${c.id('meat')}" cx="0.4" cy="0.3" r="0.8"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.7" stop-color="#F4F0E6"/><stop offset="1" stop-color="#C9BBA4"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('water')}" cx="0.5" cy="0.3" r="0.8"><stop offset="0" stop-color="#E8F4FF"/><stop offset="1" stop-color="#B9C8D8"/></radialGradient>`);
    const b = c.ramp('brown');
    return `<path d="${L.circle(60, 42, 23)}" fill="${whole}" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1.3"/>
      <g fill="#331805" opacity=".85"><ellipse cx="66" cy="31" rx="2.4" ry="3"/><ellipse cx="73" cy="36" rx="2.4" ry="3"/><ellipse cx="65" cy="39" rx="2.4" ry="3"/></g>
      <g stroke="#331805" stroke-opacity=".35" stroke-width="1.2" stroke-linecap="round" fill="none"><path d="M44 30 C47 26 50 24 54 23 M42 44 C43 38 45 35 47 33 M76 50 C78 46 79 43 79 39"/></g>
      ${L.glint(49, 29, 4.5, 2.2, -45)}
      <path d="${body}" fill="${shell}"/>
      <g stroke="#331805" stroke-opacity=".35" stroke-width="1.2" stroke-linecap="round" fill="none"><path d="M22 72 C26 77 30 79 34 80 M50 79 C56 78 60 75 63 72 M40 70 L43 74"/></g>
      <ellipse cx="42" cy="61" rx="27" ry="9.5" fill="#331805"/>
      <ellipse cx="42" cy="61.6" rx="24.5" ry="8.2" fill="url(#${c.id('meat')})"/>
      <ellipse cx="42" cy="62.4" rx="18" ry="5.4" fill="url(#${c.id('water')})"/>`;
  },
};
