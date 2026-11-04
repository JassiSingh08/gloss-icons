// The bloom is the body; stem, leaves and sepals are details around it.
const body = 'M26 31 C24 22 29 15 37 15.5 C40 10.5 47 9.5 51.5 12.5 C57 9.5 65 12 67 18.5 C72 21 73 29 70 34 C69 44 61 51 48 52 C35 51 27 44 26 31 Z';
module.exports = {
  id: 'rose',
  name: 'Rose',
  emoji: '🌹',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['rose', 'flower', 'romance', 'valentine', 'date'],
  tone: 'red',
  body,
  shine: [33, 24, -50],
  shineSize: [5.5, 2.6],
  draw(c) {
    const petal = c.radial('a', 'red', 0.35, 0.2);
    const inner = c.radial('in', 'red', 0.55, 0.6);
    const leaf = c.radial('leaf', 'green', 0.3, 0.25);
    const stem = c.linear('stem', 'green', [0, 0, 1, 0], 1, 2);
    const vein = '#053A1A';
    const crease = '#3D0003';
    return `<path d="M48 49 C47 58 45 68 47 84" stroke="#053A1A" stroke-width="5.4" fill="none" stroke-linecap="round"/>
      <path d="M48 49 C47 58 45 68 47 84" stroke="${stem}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M46.5 67 C41 57 30 53 19 57 C23 67 34 73 46.5 67 Z" fill="${leaf}"/>
      <path d="M46.5 67 C38 61.5 29 58.5 21 58" stroke="${vein}" stroke-opacity=".55" stroke-width="1.2" fill="none"/>
      <path d="M47 75 C51 65 62 60.5 75 63 C71 73 59 79 47 75 Z" fill="${leaf}"/>
      <path d="M47 75 C55 68.5 64 64.5 73 63.4" stroke="${vein}" stroke-opacity=".55" stroke-width="1.2" fill="none"/>
      <path d="${body}" fill="${petal}"/>
      <path d="M32.5 25 C35 18.5 43 16 49 17 C56 16 62.5 19 64.5 25 C60 30 54 31.5 48 31.5 C42 31.5 36.5 30 32.5 25 Z" fill="${inner}"/>
      <path d="M32.5 25 C35 18.5 43 16 49 17 C56 16 62.5 19 64.5 25 C60 30 54 31.5 48 31.5 C42 31.5 36.5 30 32.5 25 Z" fill="${crease}" opacity=".35"/>
      <path d="M40 26 C41 20.5 50 19 54.5 22.5 C57.5 25 55.5 28.5 51.5 28.5 C48.5 28.5 47.5 25.5 50.5 24.5" stroke="#FF7A62" stroke-opacity=".9" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M35 27 C39 31 44 33 48.5 33 C53.5 33 58.5 31 62 27.5 C61.5 35.5 56 41 48.5 41 C41 41 36 35.5 35 27 Z" fill="${petal}"/>
      <path d="M35 27 C39 31 44 33 48.5 33 C53.5 33 58.5 31 62 27.5" stroke="#FF7A62" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M26.5 30 C31 26.5 39 28 44 33 C48 37.5 49.5 45 48 52 C36 51 28 44 26.5 30 Z" fill="${petal}"/>
      <path d="M70 32 C66 27.5 58 28 52.5 32 C47.5 36 46.5 44 48 52 C61 51 68.5 44 70 32 Z" fill="${petal}"/>
      <path d="M26.5 30 C31 26.5 39 28 44 33 C48 37.5 49.5 45 48 52" stroke="${crease}" stroke-opacity=".45" stroke-width="1.3" fill="none"/>
      <path d="M70 32 C66 27.5 58 28 52.5 32 C47.5 36 46.5 44 48 52" stroke="${crease}" stroke-opacity=".45" stroke-width="1.3" fill="none"/>
      <path d="M27 30.5 C31 27.5 38 28.5 43 32.5" stroke="#FF9A85" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M69.5 32.5 C66 28.5 59 28.8 54 32" stroke="#FF9A85" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M48 52 C43 52 39 54 36 57 C41 57 44 56 48 54 C52 56 55 57 60 57 C57 54 53 52 48 52 Z" fill="${leaf}"/>`;
  },
};
