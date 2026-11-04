// Rails and rungs as one silhouette: the gaps between rungs are holes, run the other way round.
const rungs = [19, 33, 47, 61, 75];
const holes = rungs.slice(0, -1).map((y) => `M34 ${y + 5} L34 ${y + 14} L62 ${y + 14} L62 ${y + 5} Z`).join(' ');
const body = `M25 12 Q25 9 28 9 L31 9 Q34 9 34 12 L34 19 L62 19 L62 12 Q62 9 65 9 L68 9 Q71 9 71 12 L71 82 Q71 84 69 84 L64 84 Q62 84 62 82 L62 80 L34 80 L34 82 Q34 84 32 84 L27 84 Q25 84 25 82 Z ${holes}`;
module.exports = {
  id: 'ladder',
  name: 'Ladder',
  emoji: '🪜',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['ladder', 'climb', 'up', 'steps', 'career'],
  tone: 'brown',
  body,
  shine: [29.5, 22, -88],
  shineSize: [5, 1.4],
  draw(c) {
    const wood = c.linear('a', 'brown', [0, 0, 1, 1], 0, 2);
    const rail = c.linear('r', 'brown', [0, 0, 1, 0], 0, 2);
    return `<path d="${body}" fill="${wood}"/>
      <path d="M25 12 Q25 9 28 9 L31 9 Q34 9 34 12 L34 82 Q34 84 32 84 L27 84 Q25 84 25 82 Z M62 12 Q62 9 65 9 L68 9 Q71 9 71 12 L71 82 Q71 84 69 84 L64 84 Q62 84 62 82 Z" fill="${rail}"/>
      ${rungs.map((y) => `<path d="M34 ${y + 4.4} L62 ${y + 4.4}" stroke="#331805" stroke-opacity=".4" stroke-width="1.2"/><path d="M34 ${y + 0.8} L62 ${y + 0.8}" stroke="#FFE2C4" stroke-opacity=".5" stroke-width="1"/>`).join('')}
      <path d="M27.6 13 L27.6 80 M64.6 13 L64.6 80" stroke="#FFE2C4" stroke-opacity=".45" stroke-width="1.3" stroke-linecap="round"/>`;
  },
};
