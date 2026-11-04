const p = require('../src/parts/person');

// Same head as the busts; the bump sits low on the right so the whole figure is centred.
const P = p.belly(p.pose({ cx: 36, cy: 34, r: 23, hair: 'long' }), { r: 17, chest: 22, back: 22, dx: 31, shoulder: 3 });
module.exports = {
  id: 'pregnant-woman',
  name: 'Pregnant Woman',
  emoji: '🤰',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['pregnant', 'expecting', 'mother', 'baby bump', 'maternity'],
  ...p.spec(P, 'magenta'),
  draw(c) {
    const [x, y, r] = P.bump;
    const bump = `<circle cx="${x}" cy="${y}" r="${r}" fill="${c.radial('bump', 'magenta', 0.3, 0.25)}" stroke="${c.ramp('magenta')[3]}" stroke-opacity=".35" stroke-width="1.2"/>
      <ellipse cx="${x - 6}" cy="${y - 8}" rx="5" ry="2.4" fill="#fff" opacity=".5" transform="rotate(-40 ${x - 6} ${y - 8})"/>`;
    return p.bust(c, P, { garment: 'magenta', neck: 'v', hair: 'long', color: 'brown', under: bump, face: p.face.calm() })
      + p.sleeve(c, P, [[19, 57], [21, 67], [27, 73], [44, 71]], 9) + p.hand(c, x - 12, y + 2, { rot: 95, pose: 'flat', s: 0.95 });
  },
};
