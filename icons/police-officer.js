const p = require('../src/parts/person');
const f = require('../src/parts/face');

const P = p.pose({ cy: 45, r: 21, sy: 65, crown: 'M19 44 L22 38 L22 30 C16 28 12 25 12 20 C12 11 28 6 48 6 C68 6 84 11 84 20 C84 25 80 28 74 30 L74 38 L77 44' });
module.exports = {
  id: 'police-officer',
  name: 'Police Officer',
  emoji: '👮',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['police', 'officer', 'cop', 'law', 'badge'],
  tone: 'navy',
  body: P.body,
  shine: [...P.pt(30, 12), -15],
  shineSize: [5, 1.8],
  draw(c) {
    const navy = c.radial('cap', 'navy', 0.35, 0.2);
    const nv = c.ramp('navy');
    const silver = c.linear('badge', 'silver', [0, 0, 1, 1], 0, 2);
    const cap = P.at(`<path d="M22 28 L74 28 L74 40 Q48 44 22 40 Z" fill="${c.linear('band', 'black', [0, 0, 0, 1], 0, 2)}"/>
      <path d="M22 33 Q48 37 74 33" stroke="#D9DCE8" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
      <path d="M12 20 C12 11 28 6 48 6 C68 6 84 11 84 20 C84 25 80 28 74 30 Q48 34 22 30 C16 28 12 25 12 20 Z" fill="${navy}" stroke="${nv[3]}" stroke-width="1.8"/>
      <path d="M22 38 Q48 34 74 38 Q72 48 48 48 Q24 48 22 38 Z" fill="${c.linear('peak', 'black', [0, 0, 0, 1], 0, 3)}" stroke="#05050A" stroke-width="1.4"/>
      <path d="M30 41 Q40 39 50 40" stroke="#fff" stroke-opacity=".45" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M48 17 L54 20 L54 27 Q48 32 42 27 L42 20 Z" fill="${silver}" stroke="#3A3E52" stroke-width="1.2"/>`);
    const badge = `<path d="M66 66 L71 68 L71 73 Q66 77 61 73 L61 68 Z" fill="${silver}" stroke="#3A3E52" stroke-width="1"/>
      <path d="M26 69 L36 69" stroke="#080C3D" stroke-opacity=".5" stroke-width="1.4"/>`;
    return p.bust(c, P, { garment: 'navy', neck: 'shirt', shirt: 'sky', tie: 'black', hair: 'short', color: 'black', under: badge, face: f.brows.flat({ y: 41, sw: 3.6 }) + f.eyes.oval({ y: 50 }) + f.mouth.smile({ y: 68, w: 9, lift: 2 }), over: cap });
  },
};
