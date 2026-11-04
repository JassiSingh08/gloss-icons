const body = 'M48 12 C66 12 78 40 78 59 C78 75 65 84 48 84 C31 84 18 75 18 59 C18 40 30 12 48 12 Z';
module.exports = {
  id: 'egg',
  name: 'Egg',
  emoji: '🥚',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['egg', 'breakfast', 'easter', 'protein', 'farm'],
  tone: 'cream',
  body,
  shine: [32, 34, -62],
  draw(c) {
    c.def(`<radialGradient id="${c.id('shell')}" cx="0.34" cy="0.28" r="0.9"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.4" stop-color="#FFF1DA"/><stop offset="0.8" stop-color="#E9C99A"/><stop offset="1" stop-color="#9A6E3A"/></radialGradient>`);
    return `<path d="${body}" fill="url(#${c.id('shell')})"/>
      <circle cx="58" cy="46" r="1.1" fill="#C9A06A" opacity=".5"/><circle cx="63" cy="58" r=".9" fill="#C9A06A" opacity=".5"/><circle cx="53" cy="68" r="1" fill="#C9A06A" opacity=".45"/>`;
  },
};
