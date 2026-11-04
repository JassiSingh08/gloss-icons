const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Grey-green skin, mismatched eyes, a stitched scar, a torn shirt; arms reaching out stiffly.
const INK = '#1E2A0A';
const HAIR = 'M18 52 C14 30 28 15 46 15 C58 15 70 20 76 32 L72 30 L74 38 L68 34 L66 40 L60 33 C52 36 40 36 32 34 L30 40 L26 35 C22 40 20 46 18 52 Z';
const P = p.pose({ cx: 40, cy: 37, r: 22, crown: 'M18 52 C14 30 28 15 46 15 C58 15 70 20 76 32' });
module.exports = {
  id: 'zombie',
  name: 'Zombie',
  emoji: '🧟',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['zombie', 'undead', 'walking dead', 'halloween', 'brains'],
  tone: 'slate',
  ...p.spec(P, 'slate'),
  ...F.build((c) => {
    const green = { paint: F.cloth(c, 'olive'), edge: '#273005' };
    const shirt = 'slate';
    const { fill, edge } = p.hairPaint(c, 'dark', 'zh');
    const rag = '<path d="M10 84 L14 78 L18 84 L24 77 L30 84 L36 78 L42 84 L48 79 L54 84 L60 77 L66 84 L72 78 L76 84" fill="#1E2A3D" opacity=".55"/>';
    const tear = '<path d="M28 70 L32 66 L33 73 L37 69" stroke="#1E2A3D" stroke-opacity=".6" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    const arm = (pts, y) => F.limb(c, pts, 9.6, shirt, 8.6) + F.limb(c, [pts.at(-1), [pts.at(-1)[0] + 6, y]], 7.4, 'bare', 6.8).replace(/fill="[^"]*"/, `fill="${green.paint}"`) + F.hand(c, pts.at(-1)[0] + 7, y + 1, { dir: 20, thumb: -1, ...green });
    return {
      art: arm([[54, 63], [69, 56], [71, 55]], 55)
        + F.bust(c, P, { garment: shirt, neck: 'none', skin: 'olive', under: rag + tear })
        + P.at(`<path d="${HAIR}" fill="${fill}" stroke="${edge}" stroke-opacity=".6" stroke-width="1.8" stroke-linejoin="round"/>
          ${f.brows.worried({ y: 42, ink: INK, sw: 3.6, slant: 3 })}
          <circle cx="37" cy="51" r="3.4" fill="${INK}"/><circle cx="59" cy="50" r="5.4" fill="#F2F2F7" stroke="${INK}" stroke-width="1.6"/><circle cx="60" cy="51" r="1.8" fill="${INK}"/>
          <path d="M36 70 Q42 66 48 70 Q54 74 60 68" stroke="${INK}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
          <path d="M24 60 L34 62 M26 57 L27 63 M30 58 L31 64" stroke="${INK}" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/>`)
        + arm([[50, 72], [68, 68], [70, 68]], 68),
    };
  }),
};
