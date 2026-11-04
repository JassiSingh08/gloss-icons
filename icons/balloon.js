const body = 'M48 9 C66 9 78 22 78 39 C78 56 64 68 52 71 L54 75 L42 75 L44 71 C32 68 18 56 18 39 C18 22 30 9 48 9 Z';
module.exports = {
  id: 'balloon',
  name: 'Balloon',
  emoji: '🎈',
  group: 'Activities',
  subgroup: 'event',
  tags: ['balloon', 'party', 'birthday', 'celebrate', 'float'],
  tone: 'red',
  body,
  shine: [31, 24, -40],
  shineSize: [8, 4],
  draw(c) {
    return `<path d="M48 75 C44 79 52 81 48 85" fill="none" stroke="#B8B8C7" stroke-width="1.5" stroke-linecap="round"/>
      <path d="${body}" fill="${c.radial('a', 'red', 0.35, 0.25)}"/>
      <path d="M42 75 L54 75 L52.5 71 L43.5 71 Z" fill="#8A0006"/>
      <path d="M26 46 C28 56 36 63 44 66" fill="none" stroke="#FF7A62" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
