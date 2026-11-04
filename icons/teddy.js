// Head (r 22 at 48,42) and shoulders as one silhouette; the ears sit behind it.
const body = 'M20 83 Q15 83 15 78 C15 70 22 63.5 35.35 60 A22 22 0 1 1 60.65 60 C74 63.5 81 70 81 78 Q81 83 76 83 Z';
module.exports = {
  id: 'teddy',
  name: 'Teddy Bear',
  emoji: '🧸',
  group: 'Activities',
  subgroup: 'game',
  tags: ['teddy', 'bear', 'cuddle', 'soft', 'toy'],
  tone: 'brown',
  body,
  shine: [36, 28, -35],
  draw(c) {
    const fur = c.radial('a', 'brown', 0.36, 0.2);
    const earFur = c.radial('ear', 'brown', 0.3, 0.25);
    const snout = c.radial('snout', 'cream', 0.4, 0.25);
    const bow = c.radial('bow', 'red', 0.35, 0.25);
    const ink = '#241003';
    return `<circle cx="28.5" cy="24.5" r="9.5" fill="${earFur}"/>
      <circle cx="67.5" cy="24.5" r="9.5" fill="${earFur}"/>
      <circle cx="29.5" cy="25.5" r="5" fill="#E0B472" opacity=".85"/>
      <circle cx="66.5" cy="25.5" r="5" fill="#E0B472" opacity=".85"/>
      <path d="${body}" fill="${fur}"/>
      <path d="M27 83 C27 76 28 71 30 68" stroke="#331805" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M69 83 C69 76 68 71 66 68" stroke="#331805" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <ellipse cx="48" cy="52" rx="12" ry="9" fill="${snout}"/>
      <path d="M43.5 46.5 Q48 44.5 52.5 46.5 Q52 50.5 48 51.5 Q44 50.5 43.5 46.5 Z" fill="${ink}"/>
      <ellipse cx="46.3" cy="46.6" rx="1.5" ry=".8" fill="#fff" opacity=".6"/>
      <path d="M48 51.5 L48 54.5 Q44.5 57.5 41.5 55" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M48 54.5 Q52 57 55.5 53" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M34.5 38.5 Q38.5 36 42.5 38.5 Q42 42.5 38.5 42.5 Q35 42.5 34.5 38.5 Z" fill="${ink}"/>
      <path d="M61.5 38.5 Q57.5 36 53.5 38.5 Q54 42.5 57.5 42.5 Q61 42.5 61.5 38.5 Z" fill="${ink}"/>
      <path d="M33 34 L42 35.5" stroke="#331805" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>
      <path d="M63 34 L54 35.5" stroke="#331805" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>
      <path d="M48 68 L37 62.5 Q35 68 37 73.5 Z" fill="${bow}"/>
      <path d="M48 68 L59 62.5 Q61 68 59 73.5 Z" fill="${bow}"/>
      <circle cx="48" cy="68" r="3.4" fill="${bow}"/>`;
  },
};
