const body = 'M10 48 A38 17 0 0 1 86 48 L86 55 A38 17 0 0 1 10 55 Z';
module.exports = {
  id: 'flying-disc',
  name: 'Flying Disc',
  emoji: '🥏',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['frisbee', 'disc', 'throw', 'park', 'ultimate'],
  tone: 'blue',
  body,
  shine: [27, 40, -14],
  draw(c) {
    const rim = c.linear('rim', 'blue', [0, 0, 1, 0], 1, 3);
    const top = c.radial('a', 'blue', 0.35, 0.2);
    return `<path d="${body}" fill="${rim}"/>
      <ellipse cx="48" cy="48" rx="38" ry="17" fill="${top}"/>
      <ellipse cx="48" cy="49" rx="29.5" ry="12.2" fill="none" stroke="#001E4D" stroke-opacity=".35" stroke-width="1.6"/>
      <ellipse cx="48" cy="48" rx="29.5" ry="12.2" fill="none" stroke="#8CD8FF" stroke-opacity=".6" stroke-width="1"/>
      <ellipse cx="48" cy="49.5" rx="16" ry="6.4" fill="none" stroke="#001E4D" stroke-opacity=".25" stroke-width="1.3"/>`;
  },
};
