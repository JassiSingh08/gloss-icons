const body = 'M48 22 A30 30 0 1 1 47.99 22 Z';
module.exports = {
  id: 'devil',
  name: 'Devil',
  emoji: '😈',
  group: 'Smileys & Emotion',
  subgroup: 'face-negative',
  tags: ['mischief', 'naughty', 'after dark', 'smirk'],
  tone: 'purple',
  body,
  shine: [36, 36, -35],
  draw(c) {
    const horn = c.radial('horn', 'ember', 0.3, 0.2);
    const ink = '#12002E';
    return `<path d="M27 32 C19 24 18 14 23 9 C25.5 18 32 23 39 25 Z" fill="${horn}"/>
      <path d="M69 32 C77 24 78 14 73 9 C70.5 18 64 23 57 25 Z" fill="${horn}"/>
      <path d="${body}" fill="${c.radial('a', 'purple', 0.32, 0.25)}"/>
      <path d="M32 45 L44 48.5" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>
      <path d="M64 45 L52 48.5" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>
      <path d="M38 62 Q49 68.5 62 57.5" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M60.5 56.5 L64 55" stroke="${ink}" stroke-width="3.2" stroke-linecap="round"/>`;
  },
};
