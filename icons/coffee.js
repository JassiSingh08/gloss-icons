const body = 'M18 35 A24 5.5 0 0 1 66 35 L66 75 Q66 84 57 84 L27 84 Q18 84 18 75 Z';
module.exports = {
  id: 'coffee',
  name: 'Coffee',
  emoji: '☕',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['coffee', 'morning', 'cafe', 'date', 'drink', 'cosy'],
  tone: 'teal',
  body,
  shine: [25, 46, -75],
  draw(c) {
    const mug = c.linear('a', 'teal', [0, 0, 1, 0], 0, 2);
    const handle = c.linear('handle', 'teal', [0, 0, 1, 0], 1, 2);
    const brew = c.radial('brew', 'brown', 0.4, 0.3);
    return `<g fill="none" stroke-linecap="round">
        <path d="M63 45 C84 41 86 70 63 70" stroke="#003A33" stroke-opacity=".5" stroke-width="9.6"/>
        <path d="M63 45 C84 41 86 70 63 70" stroke="${handle}" stroke-width="7"/>
      </g>
      <path d="${body}" fill="${mug}"/>
      <ellipse cx="42" cy="35" rx="21" ry="4" fill="${c.radial('rim', 'teal', 0.5, 0.2)}"/>
      <ellipse cx="42" cy="35.6" rx="19" ry="3.2" fill="${brew}"/>
      <path d="M30 35 C35 33.8 45 33.8 52 34.6" stroke="#E8B98A" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round" fill="none"/>
      <g fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="3" stroke-linecap="round">
        <path d="M34 28 C30 23 38 19 34 13"/>
        <path d="M43 27 C39 21 48 17 43 10"/>
        <path d="M52 28 C48 23 56 19 52 14"/>
      </g>`;
  },
};
