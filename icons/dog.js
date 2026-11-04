const a = require('../src/parts/animal');

// The canine figure, facing left, tail up. Guide dog and service dog wear their gear over it.
const OUTLINE = [
  [19, 24], [25, 26], [29, 32], [35, 39.5], [50, 41.5], [66, 40.5], [77, 42], [81.5, 49], [80, 57], [72, 61.5],
  [62, 59.5], [50, 62], [38, 62.5], [30, 58], [26, 50], [22, 44.5], [15, 43], [9, 42], [5.5, 38], [7, 33.5], [13, 30.5], [15, 25.5],
];
const EAR = [[19, 24.5], [25, 25], [28.5, 31], [28, 40], [24.5, 42], [21.5, 36], [20, 29]];

function canine({ id, name, emoji, tags, coat = 'sand', earPal = 'brown', ink = '#1F0E04', ear = EAR, tail, gear = () => '', back = () => '', overlay = () => '' }) {
  const body = a.spline(OUTLINE);
  return {
    id, name, emoji, tags,
    group: 'Animals & Nature',
    subgroup: 'animal-mammal',
    tone: coat,
    body,
    shine: [13, 33, -40],
    shineSize: [4.5, 2.1],
    draw(c) {
      const t = tail ?? a.tube([[78, 46], [83, 40], [85.5, 32], [84.5, 25]], 3.4, 1.6);
      return `${back(c)}${a.part(c, 'tail', t, coat, { cx: 0.3, cy: 0.2 })}
        ${a.legs(c, coat, [
          { x: 33, top: 56, w: 4.4, wf: 3.4, far: true, r: 3 },
          { x: 69, top: 55, w: 6, wf: 3.4, far: true, fx: 70, knee: [72, 3, 3], r: 3 },
          { x: 39, top: 57, w: 4.8, wf: 3.6, fx: 38, r: 3 },
          { x: 75, top: 54, w: 6.5, wf: 3.6, fx: 76, knee: [72, 3.5, 3.2], r: 3 },
        ])}
        <path d="${body}" fill="${c.radial('a', coat, 0.25, 0.25)}"/>
        ${a.clip(c, 'muzzle', body, `<ellipse cx="9" cy="39" rx="7" ry="5" fill="#FFF4D6" opacity=".7"/>`)}
        ${overlay(c, body)}
        ${a.part(c, 'ear', a.spline(ear), earPal, { cx: 0.3, cy: 0.2 })}
        ${a.sideEye(15.5, 32, { r: 2.2, ink })}
        ${a.nose(6.8, 35, 2.6, ink)}
        ${a.line('M7.5 41 Q11 42.5 15 41', ink, 1.3, ' opacity=".6"')}
        ${gear(c)}`;
    },
  };
}

module.exports = {
  ...canine({ id: 'dog', name: 'Dog', emoji: '🐕', tags: ['dog', 'pet', 'walk', 'loyal', 'woof'] }),
  canine,
  OUTLINE,
};
