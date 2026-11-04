// The comic vein mark: four thick curved strokes, bellies toward the centre, ends flared out.
const piece = 'M12.5 38 Q29 29.5 38 12.5 Q43.5 12.5 47.5 17.5 Q46 46 17.5 47.5 Q12.5 43.5 12.5 38 Z';
const flip = (fx, fy) => piece.replace(/(-?[\d.]+) (-?[\d.]+)/g, (_, x, y) => `${fx ? 96 - x : +x} ${fy ? 98 - y : +y + 1}`);
const body = [flip(false, false), flip(true, false), flip(false, true), flip(true, true)];
module.exports = {
  id: 'anger-symbol',
  name: 'Anger Symbol',
  emoji: '💢',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['anger', 'mad', 'annoyed', 'vein', 'rage'],
  tone: 'red',
  body,
  shine: [27, 29, -45],
  shineSize: [5, 2],
  draw(c) {
    const fill = c.radial('a', 'red', 0.3, 0.25);
    return body.map((d) => `<path d="${d}" fill="${fill}"/>`).join('');
  },
};
