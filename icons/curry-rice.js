// A white plate: a dome of rice on the left, brown curry with carrot and potato on the right.
const d = require('../src/parts/dish');
// The rice dome rises out of the plate's back edge, so the body is drawn as one outline by hand.
const body = 'M11 64 C11 60 13 56.5 17 54.7 C17 40 26 34 36 34 C46 34 55 40 55 47.3 C70 48.5 85 55 85 64 C85 76 68 84 48 84 C28 84 11 76 11 64 Z';
module.exports = {
  id: 'curry-rice',
  name: 'Curry Rice',
  emoji: '🍛',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['curry', 'rice', 'dinner', 'spicy', 'japanese curry'],
  tone: 'sky',
  body,
  shine: [24, 44, -50],
  shineSize: [5, 2.4],
  draw(c) {
    c.def(`<radialGradient id="${c.id('dish')}" cx="0.4" cy="0.2" r="0.95"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.45" stop-color="#E4F4FF"/><stop offset="0.8" stop-color="#9CD0F2"/><stop offset="1" stop-color="#2F7FC0"/></radialGradient>`);
    const dish = `url(#${c.id('dish')})`;
    c.def(`<radialGradient id="${c.id('rice')}" cx="0.36" cy="0.25" r="0.9"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.5" stop-color="#F7F5FF"/><stop offset="1" stop-color="#C9C2E2"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('curry')}" cx="0.4" cy="0.3" r="0.8"><stop offset="0" stop-color="#D9862E"/><stop offset="0.5" stop-color="#9A4A10"/><stop offset="1" stop-color="#5A2404"/></radialGradient>`);
    const carrot = c.radial('carrot', 'orange', 0.35, 0.3);
    const potato = c.radial('potato', 'cream', 0.35, 0.3);
    return `<path d="${body}" fill="${dish}"/>
      <path d="${d.ellipse(48, 64, 37, 17)}" fill="${dish}" stroke="#1F7FD1" stroke-opacity=".5" stroke-width="1"/>
      <path d="${d.ellipse(48, 64.5, 29, 12)}" fill="#F2FAFF"/>
      <path d="M17 62 C17 40 26 34 36 34 C46 34 55 40 55 62 C55 70 46 74 36 74 C26 74 17 70 17 62 Z" fill="url(#${c.id('rice')})"/>
      ${d.grains([[30, 42, 20], [40, 40, -30], [26, 52, 60], [36, 50, 0], [46, 48, 40], [50, 58, -20], [24, 62, 10], [34, 62, 30]], '#C9C2E2', 2.6, 1.5)}
      <path d="M44 56 C50 52 64 50 74 54 C82 58 82 68 76 72 C68 77 52 77 44 72 C40 69 38 62 44 56 Z" fill="url(#${c.id('curry')})"/>
      <path d="M48 57 C54 54 64 53 70 55" stroke="#F2B060" stroke-opacity=".7" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <rect x="54" y="60" width="7" height="5.4" rx="1.6" fill="${carrot}" transform="rotate(-15 57 62)" stroke="#6B0F00" stroke-opacity=".4" stroke-width=".8"/>
      <rect x="66" y="62" width="7" height="6" rx="2" fill="${potato}" transform="rotate(10 69 65)" stroke="#8A5A1E" stroke-opacity=".5" stroke-width=".8"/>
      <rect x="57" y="68" width="5.6" height="4.4" rx="1.4" fill="${carrot}" transform="rotate(20 60 70)" stroke="#6B0F00" stroke-opacity=".4" stroke-width=".8"/>
      <circle cx="71" cy="57.5" r="1.6" fill="#2FB85A"/><circle cx="50" cy="66" r="1.4" fill="#2FB85A"/>`;
  },
};
