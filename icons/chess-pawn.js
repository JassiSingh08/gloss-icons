const body = 'M48 11 C55.5 11 61 16.5 61 24 C61 29 58 33 54 35 L60.5 37 Q63.5 38 61.5 41.5 L56.5 43.5 C57.5 53 61.5 61 68.5 66.5 C72 69.5 72 72 70 74 L76 75.5 Q80 76.5 80 80 L80 82 Q80 84 78 84 L18 84 Q16 84 16 82 L16 80 Q16 76.5 20 75.5 L26 74 C24 72 24 69.5 27.5 66.5 C34.5 61 38.5 53 39.5 43.5 L34.5 41.5 Q32.5 38 35.5 37 L42 35 C38 33 35 29 35 24 C35 16.5 40.5 11 48 11 Z';
module.exports = {
  id: 'chess-pawn',
  name: 'Chess Pawn',
  emoji: '♟️',
  group: 'Activities',
  subgroup: 'game',
  tags: ['chess', 'pawn', 'strategy', 'board game', 'expendable'],
  tone: 'black',
  body,
  shine: [41, 19, -45],
  shineSize: [5, 2.4],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'black', 0.35, 0.2)}"/>
    <path d="M35.5 37 L60.5 37 M27 74 L69 74" stroke="#05050A" stroke-opacity=".6" stroke-width="1.4"/>
    <path d="M37 38.6 L59 38.6 M28 75.6 L68 75.6" stroke="#6E6E85" stroke-opacity=".6" stroke-width="1"/>`,
};
