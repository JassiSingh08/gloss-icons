const s = require('../src/parts/skin');
// A leg side on, mid-kick: the thigh runs out from a rounded hip to a kneecap at the right, the
// long shin drops from there with the calf swelling at the back, then a slim ankle, a heel and a foot.
const body = 'M20 12 C28 8 38 9 44 13 C54 18 64 20 72 22 C79 24 81 32 77 37 C73 48 70 60 69 71 C74 73 81 75 85 77.5 C89 80 88 85 83 85 L55 85 C49 85 47 80 50 76 C53 73 55 70 55 66 C48.5 58 49.5 46 58 40 C46 38 30 37 20 34 C12 31 12 16 20 12 Z';
module.exports = {
  id: 'leg',
  name: 'Leg',
  emoji: '🦵',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['leg', 'kick', 'knee', 'limb', 'step'],
  tone: 'amber',
  body,
  shine: [26, 17, -15],
  shineSize: [6, 2.6],
  draw(c) {
    return `<path d="${body}" fill="${s.fill(c)}"/>
      ${s.crease('M72.5 25 C76.5 28 76.5 33 73.5 36.5', 1.7)}
      ${s.crease('M58 40.5 C61 42 63 44.5 64 47.5', 1.4)}
      <ellipse cx="63" cy="74" rx="2.2" ry="1.6" fill="#B85F00" opacity=".35"/>
      ${s.crease('M76 78 C78.5 79 80 80.5 80.5 82.5', 1.2)}`;
  },
};
