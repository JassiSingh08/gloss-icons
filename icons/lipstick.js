const body = 'M31.2 84 Q28.8 84 28.8 82 L28.8 57 Q28.8 55 31.2 55 L32.4 55 L32.4 44 L36 44 L36 26.5 C36 21 50.4 13.5 56.4 13 C58.8 12.8 60 14 60 16 L60 44 L63.6 44 L63.6 55 L64.8 55 Q67.2 55 67.2 57 L67.2 82 Q67.2 84 64.8 84 Z';
module.exports = {
  id: 'lipstick',
  name: 'Lipstick',
  emoji: '💄',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['makeup', 'kiss', 'glam', 'date night', 'beauty'],
  tone: 'gold',
  body,
  shine: [40, 31, -80],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<linearGradient id="${c.id('metal')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C98500"/><stop offset="0.28" stop-color="#FFF3A6"/><stop offset="0.6" stop-color="#FFC21A"/><stop offset="1" stop-color="#7A4C00"/></linearGradient>`);
    c.def(`<linearGradient id="${c.id('bullet')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#B0002E"/><stop offset="0.3" stop-color="#FF4F7A"/><stop offset="0.65" stop-color="#E0124A"/><stop offset="1" stop-color="#5E0018"/></linearGradient>`);
    const metal = `url(#${c.id('metal')})`;
    return `<path d="${body}" fill="${metal}"/>
      <path d="M36 44 L36 26.5 C36 21 50.4 13.5 56.4 13 C58.8 12.8 60 14 60 16 L60 44 Z" fill="url(#${c.id('bullet')})"/>
      <path d="M36 26.5 C36 21 50.4 13.5 56.4 13 C58.8 12.8 60 14 60 16 C56.4 20 44.4 25.5 36 26.5 Z" fill="#FF8FA9" opacity=".75"/>
      <path d="M32.4 44 L63.6 44 L63.6 55 L32.4 55 Z" fill="${metal}"/>
      <path d="M32.4 44.6 L63.6 44.6" stroke="#5E3A00" stroke-opacity=".45" stroke-width="1.2"/>
      <path d="M28.8 58 L67.2 58 M28.8 80 L67.2 80" stroke="#7A4C00" stroke-opacity=".5" stroke-width="1.2"/>`;
  },
};
