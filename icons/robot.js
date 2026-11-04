const body = 'M31 30 L65 30 Q78 30 78 43 L78 69 Q78 82 65 82 L31 82 Q18 82 18 69 L18 43 Q18 30 31 30 Z';
module.exports = {
  id: 'robot',
  name: 'Robot',
  tags: ['robot', 'bot', 'ai', 'computer', 'machine'],
  tone: 'silver',
  body,
  shine: [28, 38, -30],
  draw(c) {
    const metal = c.radial('a', 'silver', 0.3, 0.2);
    const ear = c.linear('ear', 'teal', [0, 0, 0, 1], 0, 2);
    const bulb = c.radial('bulb', 'magenta', 0.35, 0.3);
    const screen = c.linear('screen', 'navy', [0, 0, 0, 1], 2, 3);
    c.def(`<radialGradient id="${c.id('eye')}" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stop-color="#E9FFFB"/><stop offset="0.45" stop-color="#3FF0D2"/><stop offset="1" stop-color="#0A9C88"/></radialGradient>`);
    const eye = `url(#${c.id('eye')})`;
    return `<path d="M46.2 30 L47 18 L49 18 L49.8 30 Z" fill="#8E93AD"/>
      <circle cx="48" cy="15" r="5.5" fill="${bulb}"/>
      <ellipse cx="46.3" cy="13" rx="2" ry="1.3" fill="#fff" opacity=".8" transform="rotate(-30 46.3 13)"/>
      <rect x="11" y="47" width="9" height="18" rx="3.5" fill="${ear}"/>
      <rect x="76" y="47" width="9" height="18" rx="3.5" fill="${ear}"/>
      <path d="${body}" fill="${metal}"/>
      <rect x="25" y="39" width="46" height="25" rx="9" fill="${screen}"/>
      <rect x="25" y="39" width="46" height="25" rx="9" fill="none" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.4"/>
      <path d="M31 48 Q31 46.6 32.5 46.7 L40.6 47.6 Q42 47.8 42 49.4 Q42 56 36.5 56 Q31 56 31 47.5 Z" fill="${eye}"/>
      <path d="M65 48 Q65 46.6 63.5 46.7 L55.4 47.6 Q54 47.8 54 49.4 Q54 56 59.5 56 Q65 56 65 47.5 Z" fill="${eye}"/>
      <path d="M38 71 Q48 74.5 59 69.5" stroke="#3A3E52" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="24" cy="75" r="1.8" fill="#8E93AD"/><circle cx="72" cy="75" r="1.8" fill="#8E93AD"/>`;
  },
};
