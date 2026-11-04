// A lump of rock heating as it falls toward the lower left, trailing fire.
const body = 'M15 60 C12 49 20 41 30 41 C35 35 46 35 50 43 C58 45 61 54 57 62 C59 72 51 81 40 80 C32 85 20 81 19 72 C12 70 12 64 15 60 Z';
module.exports = {
  id: 'meteor',
  name: 'Meteor',
  emoji: '🪋',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['meteor', 'space', 'asteroid', 'fireball', 'impact'],
  tone: 'brown',
  body,
  shine: [26, 47, -30],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<linearGradient id="${c.id('fire')}" gradientUnits="userSpaceOnUse" x1="38" y1="62" x2="86" y2="10"><stop offset="0" stop-color="#FFF07A"/><stop offset="0.3" stop-color="#FF8C00"/><stop offset="0.7" stop-color="#E02A00" stop-opacity=".85"/><stop offset="1" stop-color="#8A1200" stop-opacity="0"/></linearGradient>`);
    c.def(`<linearGradient id="${c.id('hot')}" gradientUnits="userSpaceOnUse" x1="40" y1="58" x2="76" y2="20"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.4" stop-color="#FFE35C"/><stop offset="1" stop-color="#FFB000" stop-opacity="0"/></linearGradient>`);
    return `<path d="M22 44 C34 28 60 14 86 8 C76 18 72 22 66 28 C76 27 82 29 86 31 C74 38 66 48 60 62 C52 70 34 60 22 44 Z" fill="url(#${c.id('fire')})" stroke="#8A1200" stroke-opacity=".35" stroke-width="1"/>
      <path d="M36 46 C48 34 62 25 78 18 C66 30 58 40 52 56 Z" fill="url(#${c.id('hot')})"/>
      <path d="${body}" fill="${c.radial('a', 'brown', 0.3, 0.25)}"/>
      <path d="M48 44 C57 46 61 54 57 62 C59 72 51 81 40 80 C49 74 53 66 51 59 C53 53 52 48 48 44 Z" fill="#FF8C00" opacity=".75"/>
      <circle cx="29" cy="62" r="4.6" fill="#331805" opacity=".45"/>
      <circle cx="40" cy="51" r="3" fill="#331805" opacity=".4"/>
      <circle cx="26" cy="73" r="2.5" fill="#331805" opacity=".35"/>
      <circle cx="41" cy="69" r="2" fill="#331805" opacity=".35"/>`;
  },
};
