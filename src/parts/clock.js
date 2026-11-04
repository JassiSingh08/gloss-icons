// One clock for the 24 clock faces and the other timepieces (watch, alarm, stopwatch, timer,
// mantelpiece): a lacquered bezel around an ivory dial with twelve ticks, no numerals, and two
// bold hands. The faces differ only in the hands.
//
//   const clock = require('../src/parts/clock');
//   module.exports = { ...clock.spec(3, 30), id, name, emoji, group, subgroup, tags };
//   clock.dial(c, { cx, cy, r, h, m })   just the dial, for other cases

const n = (v) => +v.toFixed(2);
const INK = '#1C1430';
const CX = 48;
const CY = 49;
const R = 35;
const body = `M${CX} ${CY - R} A${R} ${R} 0 1 1 ${CX - 0.01} ${CY - R} Z`;

// A point at `deg` clockwise from twelve, `len` from the centre.
const at = (cx, cy, deg, len) => {
  const t = (deg * Math.PI) / 180;
  return [n(cx + len * Math.sin(t)), n(cy - len * Math.cos(t))];
};

// A hand as a tapered blade with round ends, from a short tail through the centre to the tip.
function hand(cx, cy, deg, len, w) {
  const [tx, ty] = at(cx, cy, deg, len);
  const [bx, by] = at(cx, cy, deg + 180, len * 0.18);
  const [lx, ly] = at(bx, by, deg - 90, w / 2);
  const [rx, ry] = at(bx, by, deg + 90, w / 2);
  const [ltx, lty] = at(tx, ty, deg - 90, w * 0.28);
  const [rtx, rty] = at(tx, ty, deg + 90, w * 0.28);
  const [ex, ey] = at(tx, ty, deg, w * 0.28);
  const [bex, bey] = at(bx, by, deg + 180, w / 2);
  return `M${lx} ${ly} L${ltx} ${lty} Q${ex} ${ey} ${rtx} ${rty} L${rx} ${ry} Q${bex} ${bey} ${lx} ${ly} Z`;
}

// Twelve ticks, the quarters longer and heavier; or none.
function ticks(cx, cy, r, ink = INK) {
  let major = '';
  let minor = '';
  for (let k = 0; k < 12; k++) {
    const q = k % 3 === 0;
    const [ax, ay] = at(cx, cy, k * 30, r * 0.86);
    const [bx, by] = at(cx, cy, k * 30, r * (q ? 0.68 : 0.75));
    if (q) major += `M${ax} ${ay} L${bx} ${by} `;
    else minor += `M${ax} ${ay} L${bx} ${by} `;
  }
  return `<path d="${major}" stroke="${ink}" stroke-width="${n(r * 0.1)}" stroke-linecap="round"/>
    <path d="${minor}" stroke="${ink}" stroke-opacity=".7" stroke-width="${n(r * 0.06)}" stroke-linecap="round"/>`;
}

// Hour and minute hands with a soft drop shadow and a brass pin. h may be fractional-free:
// the hour hand moves on by half an hour's worth at m = 30.
function hands(c, cx, cy, r, h, m, { ink = INK, pin = 'gold', name = 'pin' } = {}) {
  const hd = (h % 12) * 30 + m * 0.5;
  const md = m * 6;
  const hp = hand(cx, cy, hd, r * 0.5, r * 0.22);
  const mp = hand(cx, cy, md, r * 0.76, r * 0.145);
  const s = n(r * 0.05);
  return `<g transform="translate(${s} ${n(s * 1.4)})" fill="#000" opacity=".22"><path d="${hp}"/><path d="${mp}"/></g>
    <path d="${hp}" fill="${ink}"/><path d="${mp}" fill="${ink}"/>
    <circle cx="${cx}" cy="${cy}" r="${n(r * 0.11)}" fill="${c.radial(name, pin, 0.35, 0.3)}" stroke="${c.ramp(pin)[3]}" stroke-opacity=".6" stroke-width=".8"/>`;
}

// The dial disc, set into the bezel: a darker rim at the top left where the bezel overhangs.
function face(c, cx, cy, r, { palette = 'ivory', name = 'dial' } = {}) {
  const fill = c.radial(name, palette, 0.38, 0.3);
  c.def(`<linearGradient id="${c.id(`${name}-lip`)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".35"/><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient>`);
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>
    <circle cx="${cx}" cy="${cy}" r="${n(r - 0.9)}" fill="none" stroke="url(#${c.id(`${name}-lip`)})" stroke-width="1.8"/>`;
}

function dial(c, { cx = CX, cy = CY, r = 27, h = 10, m = 10, palette = 'ivory', showTicks = true, showHands = true, ink = INK, pin = 'gold', name = 'dial' } = {}) {
  return face(c, cx, cy, r, { palette, name }) + (showTicks ? ticks(cx, cy, r, ink) : '') + (showHands ? hands(c, cx, cy, r, h, m, { ink, pin, name: `${name}-pin` }) : '');
}

// Spec for a plain clock face showing h:m. The bezel is navy lacquer.
const BEZEL = 'navy';
function spec(h, m) {
  return {
    tone: BEZEL,
    body,
    shine: [30, 29, -45],
    draw(c) {
      return `<path d="${body}" fill="${c.radial('a', BEZEL, 0.3, 0.22)}"/>
        <circle cx="${CX}" cy="${CY}" r="${R - 3.2}" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="1"/>
        ${dial(c, { h, m, r: 28.5 })}`;
    },
  };
}

module.exports = { INK, CX, CY, R, body, at, hand, ticks, hands, face, dial, spec };
