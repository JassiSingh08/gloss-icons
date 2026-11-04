const HEART = 'M48 80 C22 62 12 47 15 33 C18 20 35 15 48 28 C61 15 78 20 81 33 C84 47 74 62 48 80 Z';
// Everything is drawn level and then turned a few degrees about (48,57), so the paths stay
// plain numbers the engine can clip with.
const ROT = (-7 * Math.PI) / 180;
const turn = (p) => p.replace(/(-?[\d.]+) (-?[\d.]+)/g, (_, x, y) => {
  const dx = x - 48;
  const dy = y - 57;
  return `${(48 + dx * Math.cos(ROT) - dy * Math.sin(ROT)).toFixed(2)} ${(57 + dx * Math.sin(ROT) + dy * Math.cos(ROT)).toFixed(2)}`;
});
const body = turn('M19 33 L77 33 Q82 33 82 38 L82 75 Q82 80 77 80 L19 80 Q14 80 14 75 L14 38 Q14 33 19 33 Z');
const seal = turn(HEART.replace(/(-?[\d.]+) (-?[\d.]+)/g, (_, x, y) => `${(48 + (x - 48) * 0.3).toFixed(2)} ${(60 + (y - 49) * 0.3).toFixed(2)}`));
module.exports = {
  id: 'love-letter',
  name: 'Love Letter',
  emoji: '💌',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['love letter', 'message', 'invite', 'romance', 'envelope'],
  tone: 'cream',
  body,
  shine: [22, 40, -35],
  draw(c) {
    const paper = c.linear('a', 'cream', [0, 0, 0.4, 1], 0, 1);
    const side = c.linear('side', 'cream', [0, 0, 0, 1], 1, 2);
    const flap = c.linear('flap', 'cream', [0, 0, 0, 1], 0, 1);
    const wax = c.radial('wax', 'red', 0.35, 0.25);
    const fold = '#8A5A1E';
    return `<path d="${body}" fill="${paper}"/>
      <path d="${turn('M15 78 L46 54 Q48 52.5 50 54 L81 78 Z')}" fill="${side}" opacity=".85"/>
      <path d="${turn('M15 78 L46 54 Q48 52.5 50 54 L81 78')}" stroke="${fold}" stroke-opacity=".35" stroke-width="1.2" fill="none"/>
      <path d="${turn('M16 35.5 L45.5 60 Q48 62 50.5 60 L80 35.5')}" stroke="${fold}" stroke-opacity=".45" stroke-width="3" fill="none" stroke-linejoin="round"/>
      <path d="${turn('M15.5 34.5 L45.5 59 Q48 61 50.5 59 L80.5 34.5 Z')}" fill="${flap}"/>
      <path d="${seal}" fill="${wax}"/>
      <path d="${seal}" fill="none" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <ellipse cx="43.8" cy="55.3" rx="2.4" ry="1.2" fill="#fff" opacity=".8" transform="rotate(-50 43.8 55.3)"/>`;
  },
};
