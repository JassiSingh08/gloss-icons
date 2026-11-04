// Three balls on a skewer, pink, white and green, just touching so the outline stays clean.
const ANGLE = -55;
const AT = [46, 48];
const R = 13;
const STEP = 26.6;
const dir = [Math.cos((ANGLE * Math.PI) / 180), Math.sin((ANGLE * Math.PI) / 180)];
const at = (k) => [AT[0] + dir[0] * STEP * k, AT[1] + dir[1] * STEP * k];
const circle = ([x, y]) => `M${(x - R).toFixed(2)} ${y.toFixed(2)} A${R} ${R} 0 1 1 ${(x + R).toFixed(2)} ${y.toFixed(2)} A${R} ${R} 0 1 1 ${(x - R).toFixed(2)} ${y.toFixed(2)} Z`;
const balls = [at(1), at(0), at(-1)];
module.exports = {
  id: 'dango',
  name: 'Dango',
  emoji: '🍡',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['dango', 'mochi', 'japanese', 'sweet', 'hanami'],
  tone: 'green',
  body: balls.map(circle),
  shine: [balls[0][0] - 6, balls[0][1] - 5, -45],
  shineSize: [4.6, 2.2],
  draw(c) {
    const grad = (name, s) => {
      c.def(`<radialGradient id="${c.id(name)}" cx="0.33" cy="0.27" r="0.95"><stop offset="0" stop-color="${s[0]}"/><stop offset="0.35" stop-color="${s[1]}"/><stop offset="0.75" stop-color="${s[2]}"/><stop offset="1" stop-color="${s[3]}"/></radialGradient>`);
      return `url(#${c.id(name)})`;
    };
    const fills = [grad('pink', ['#FFE4EE', '#FF9EBE', '#D9507A', '#6B1030']), grad('white', ['#FFFFFF', '#FBF5EC', '#D8CFC0', '#7A7060']), grad('green', ['#EAF7C0', '#97CC48', '#4E8A1E', '#1E3D08'])];
    const [x0, y0] = at(1.75);
    const [x1, y1] = at(-1.72);
    return `<path d="M${x0.toFixed(2)} ${y0.toFixed(2)} L${x1.toFixed(2)} ${y1.toFixed(2)}" stroke="#5C4420" stroke-opacity=".6" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M${x0.toFixed(2)} ${y0.toFixed(2)} L${x1.toFixed(2)} ${y1.toFixed(2)}" stroke="#E9C98F" stroke-width="2.6" stroke-linecap="round"/>
      ${balls.map((b, i) => `<path d="${circle(b)}" fill="${fills[i]}"/>`).join('')}
      ${balls.slice(1).map(([x, y]) => `<ellipse cx="${x - 5}" cy="${y - 5}" rx="4" ry="2" fill="#fff" opacity=".6" transform="rotate(-45 ${x - 5} ${y - 5})"/>`).join('')}`;
  },
};
