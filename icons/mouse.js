const a = require('../src/parts/animal');

// The rodent figure, crouched and facing left. The rat is a longer, browner one.
function rodent({ id, name, emoji, tags, coat, fill, stops, outline, ear, tail, ink, shine }) {
  const body = a.spline(outline);
  return {
    id, name, emoji, tags,
    group: 'Animals & Nature',
    subgroup: 'animal-mammal',
    tone: coat,
    body,
    shine,
    shineSize: [6, 2.6],
    draw(c) {
      const paint = fill ? fill(c) : c.radial('a', coat, 0.3, 0.25);
      const feet = [[27, 81.5], [48, 82], [62, 82]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="4.4" ry="2.2" fill="${a.custom(c, 'feet', a.ROSE, 0.4, 0.2)}"${a.edge('pink', 0.4, 1)}/>`).join('');
      return `<path d="${a.tube(tail, 1.8, 0.7)}" fill="${a.custom(c, 'tail', a.ROSE, 0.3, 0.2)}"${a.edge('pink', 0.4, 1)}/>
        ${feet}
        <path d="${body}" fill="${paint}"/>
        ${a.clip(c, 'belly', body, `<ellipse cx="44" cy="82" rx="26" ry="7" fill="#fff" opacity=".35"/>`)}
        ${a.part(c, 'ear', a.ellipse(...ear), coat, { fill: paint })}<ellipse cx="${ear[0] + 0.8}" cy="${ear[1] + 0.5}" rx="${ear[2] * 0.62}" ry="${ear[3] * 0.62}" fill="${a.custom(c, 'earin', a.ROSE, 0.45, 0.35)}"/>
        ${a.sideEye(18.5, 57.5, { r: 2.2, ink })}
        <ellipse cx="7.2" cy="61.6" rx="2" ry="1.7" fill="${a.custom(c, 'nose')}"/>
        ${a.whiskers(9, 62, 1, { len: 11, color: ink, o: 0.45, w: 0.8 }).replace(/M(\\d)/, 'M$1')}`;
    },
  };
}

module.exports = {
  ...rodent({
    id: 'mouse', name: 'Mouse', emoji: '🐁', tags: ['mouse', 'rodent', 'squeak', 'tiny', 'cheese'],
    coat: 'grey', ink: '#15151F',
    outline: [[32, 42], [44, 37], [58, 38], [70, 45], [77, 56], [77, 67], [70, 76], [56, 80], [40, 80], [30, 77], [24, 72], [16, 68], [9, 65], [6.5, 62], [9.5, 57.5], [16.5, 53], [24, 47]],
    ear: [32, 43, 8.5, 8.5],
    tail: [[75, 72], [82, 74], [87, 69], [87.5, 61], [84, 56], [80, 57]],
    shine: [52, 44, -10],
  }),
  rodent,
};
