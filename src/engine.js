// The "lacquer with depth" style: a solid glossy body, crisp dark outline, one light from the top
// left, a reflection streak, a soft coloured glow inside the bottom, and a contact shadow.
// Icons only describe shape and colour; everything about light and material lives here, so the
// whole set stays consistent and a style change is one edit.
const palettes = require('./palettes');

const STYLE = {
  streak: 0.5, // diagonal window reflection across the body
  rim: 0.18, // faint white light on the bottom-right edge
  outline: 0.5, // thin edge in the body's shadow colour
  inner: 0.4, // coloured glow inside the bottom
  caustic: 0.1, // white light gathered at the very bottom
  shine: 0.85, // highlight on the object's own upper-left curve
};

function ramp(name) {
  const r = palettes[name];
  if (!r) throw new Error(`Unknown palette "${name}"`);
  return r;
}

function createContext(prefix) {
  const defs = [];
  const id = (name) => `${prefix}-${name}`;
  return {
    id,
    ramp,
    defs,
    // Rounded objects: light top-left, falling to the shadow side.
    radial(name, palette, cx = 0.32, cy = 0.25) {
      const [a, b, c, d] = ramp(palette);
      defs.push(
        `<radialGradient id="${id(name)}" cx="${cx}" cy="${cy}" r="0.95"><stop offset="0" stop-color="${a}"/><stop offset="0.35" stop-color="${b}"/><stop offset="0.75" stop-color="${c}"/><stop offset="1" stop-color="${d}"/></radialGradient>`,
      );
      return `url(#${id(name)})`;
    },
    // Flat faces (boxes, cards, screens): a straight fall from light to deep.
    linear(name, palette, [x1, y1, x2, y2] = [0, 0, 0, 1], from = 0, to = 2) {
      const r = ramp(palette);
      defs.push(
        `<linearGradient id="${id(name)}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${r[from]}"/><stop offset="1" stop-color="${r[to]}"/></linearGradient>`,
      );
      return `url(#${id(name)})`;
    },
    // Raw defs when a shape needs something special (a clip path for a pattern, say).
    def(markup) {
      defs.push(markup);
    },
  };
}

/**
 * spec: {
 *   id, name, tags,
 *   tone: palette name of the main body (sets outline and inner glow colour),
 *   body: silhouette path(s) of the main body, used for the outline and to keep reflections inside,
 *   shine: [x, y, rotation] where light catches the upper-left curve, or null for none,
 *   draw(ctx): returns the art markup
 * }
 */
function render(spec) {
  const ctx = createContext(spec.id);
  const art = spec.draw(ctx);
  const tone = ramp(spec.tone);
  const body = Array.isArray(spec.body) ? spec.body.join(' ') : spec.body;
  const k = (n) => ctx.id(n);
  const shine = spec.shine
    ? `<ellipse cx="${spec.shine[0]}" cy="${spec.shine[1]}" rx="${spec.shineSize?.[0] ?? 7}" ry="${spec.shineSize?.[1] ?? 3.4}" fill="#fff" opacity="${STYLE.shine}" transform="rotate(${spec.shine[2]} ${spec.shine[0]} ${spec.shine[1]})"/>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
<defs>${ctx.defs.join('')}
<clipPath id="${k('clip')}"><path d="${body}"/></clipPath>
<linearGradient id="${k('streak')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0.18" stop-color="#fff" stop-opacity="0"/><stop offset="0.3" stop-color="#fff" stop-opacity="${STYLE.streak}"/><stop offset="0.42" stop-color="#fff" stop-opacity="0"/></linearGradient>
<filter id="${k('b2')}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2"/></filter>
<filter id="${k('b5')}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>
</defs>
<ellipse cx="50" cy="88" rx="30" ry="5" fill="#000" opacity=".35" filter="url(#${k('b5')})"/>
<ellipse cx="49" cy="87" rx="18" ry="2.6" fill="#000" opacity=".6" filter="url(#${k('b2')})"/>
${art}
<g clip-path="url(#${k('clip')})">
<ellipse cx="52" cy="80" rx="24" ry="12" fill="${tone[1]}" opacity="${STYLE.inner}" filter="url(#${k('b5')})"/>
<ellipse cx="52" cy="82" rx="12" ry="5" fill="#fff" opacity="${STYLE.caustic}" filter="url(#${k('b2')})"/>
<rect x="0" y="0" width="96" height="96" fill="url(#${k('streak')})"/>
<ellipse cx="72" cy="76" rx="16" ry="9" fill="#fff" opacity="${STYLE.rim}" filter="url(#${k('b2')})" transform="rotate(-35 72 76)"/>
${shine}
</g>
<path d="${body}" fill="none" stroke="${tone[3]}" stroke-opacity="${STYLE.outline}" stroke-width="1.3"/>
</svg>`;
}

module.exports = { render, STYLE };
