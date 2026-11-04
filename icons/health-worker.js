const p = require('../src/parts/person');

const P = p.pose({ hair: 'crop' });
module.exports = {
  id: 'health-worker',
  name: 'Health Worker',
  emoji: '🧑‍⚕️',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['doctor', 'nurse', 'health', 'medical', 'stethoscope'],
  ...p.spec(P, 'white'),
  draw(c) {
    const steel = c.radial('steel', 'silver', 0.35, 0.3);
    const tube = '#3A3E52';
    const scope = `<path d="M33 56 C29 66 33 75 44 76 C49 76.5 53 74 54 70 M63 56 C66 63 63 69 56 70" stroke="${tube}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M33 56 C29 66 33 75 44 76 C49 76.5 53 74 54 70 M63 56 C66 63 63 69 56 70" stroke="#6E7390" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="55" cy="72" r="5" fill="${steel}" stroke="${tube}" stroke-width="1.4"/><circle cx="55" cy="72" r="2" fill="#8E93AD"/>`;
    const badge = `<rect x="66" y="68" width="9" height="9" rx="2" fill="#fff" stroke="#8C83AD" stroke-width="1"/><path d="M70.5 69.8 L70.5 75.2 M67.8 72.5 L73.2 72.5" stroke="#E3120B" stroke-width="2.2" stroke-linecap="round"/>`;
    return p.bust(c, P, { garment: 'white', neck: 'jacket', shirt: 'teal', hair: 'crop', color: 'dark', face: p.face.calm(), under: badge + scope });
  },
};
