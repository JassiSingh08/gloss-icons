const p = require('../src/parts/person');

// A wrapped turban: layered folds rising from the brow and crossing at a point over the forehead.
const TOP = 'M14 52 C9 26 24 2 48 1 C72 2 87 26 82 52';
const P = p.pose({ cy: 44, r: 21, sy: 65, crown: TOP });
module.exports = {
  id: 'person-wearing-turban',
  name: 'Person Wearing Turban',
  emoji: '👳',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['turban', 'pagri', 'dastar', 'sikh', 'headwear'],
  tone: 'teal',
  body: P.body,
  shine: [...P.pt(28, 14), -50],
  shineSize: [5, 2.2],
  draw(c) {
    const cloth = c.radial('turban', 'orange', 0.3, 0.2);
    const o = c.ramp('orange');
    const turban = P.at(`<path d="${TOP} C74 46 62 40 54 40 L48 33 L42 40 C34 40 22 46 14 52 Z" fill="${cloth}" stroke="${o[3]}" stroke-opacity=".7" stroke-width="1.8" stroke-linejoin="round"/>
      <g stroke="${o[2]}" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 44 Q30 32 48 26 Q66 32 80 44"/><path d="M20 30 Q34 20 48 15 Q62 20 76 30"/><path d="M48 31 L48 5"/>
      </g>`);
    return p.bust(c, P, { garment: 'teal', neck: 'shirt', hair: 'none', face: p.face.calm(), over: turban });
  },
};
