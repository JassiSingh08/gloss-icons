module.exports = {
  id: 'dice',
  name: 'Dice',
  emoji: '🎲',
  group: 'Activities',
  subgroup: 'game',
  tags: ['game', 'chance', 'classic', 'random'],
  tone: 'ivory',
  body: 'M48 13 Q51 13 54 14.5 L79 27 Q83 29 83 33 L83 62 Q83 66 79 68 L54 81 Q51 83 48 83 Q45 83 42 81 L17 68 Q13 66 13 62 L13 33 Q13 29 17 27 L42 14.5 Q45 13 48 13 Z',
  shine: [38, 25, -26],
  draw(c) {
    const top = c.linear('top', 'ivory', [0, 0, 1, 1], 0, 1);
    const left = c.linear('left', 'ivory', [0, 0, 0, 1], 1, 2);
    const right = c.linear('right', 'ivory', [0, 0, 1, 1], 2, 3);
    c.def(`<radialGradient id="${c.id('pip')}" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#7A6AD8"/><stop offset="1" stop-color="#160B45"/></radialGradient>`);
    const pip = (x, y, rot) => `<ellipse cx="${x}" cy="${y}" rx="3.4" ry="4.4" fill="url(#${c.id('pip')})" transform="rotate(${rot} ${x} ${y})"/>`;
    return `<path d="M48 14 L81 30 L48 46 L15 30 Z" fill="${top}"/>
      <path d="M15 30 L48 46 L48 82 L15 65 Z" fill="${left}"/>
      <path d="M81 30 L48 46 L48 82 L81 65 Z" fill="${right}"/>
      <path d="M15 30 L48 46 L81 30" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.2"/>
      <path d="M48 46 L48 82" stroke="#000" stroke-opacity=".18" stroke-width="1"/>
      <ellipse cx="48" cy="30" rx="5.6" ry="3" fill="url(#${c.id('pip')})"/>
      ${pip(25, 44, 28)}${pip(37, 66, 28)}${pip(58, 54, -28)}${pip(71, 60, -28)}`;
  },
};
