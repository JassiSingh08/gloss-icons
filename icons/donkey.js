const a = require('../src/parts/animal');
const { equine } = require('./horse');

module.exports = equine({
  id: 'donkey',
  name: 'Donkey',
  emoji: '🫏',
  tags: ['donkey', 'mule', 'stubborn', 'farm', 'ass'],
  coat: 'grey',
  hair: ['#6E6E80', '#3A3A4A', '#22222E', '#101018'],
  ink: '#13131C',
  hoof: '#1A1A24',
  // Long ears, one laid back: a donkey's whole personality.
  ear: [[21, 15], [17, 6], [19, -1, 1], [24, 6], [27, 14]],
  ear2: [[25, 15], [28, 6], [33.5, 1, 1], [32, 9], [29, 16]],
  mane: a.spline([[24, 13], [30, 16.5], [37, 25], [43.5, 35], [44, 38.5], [39, 34], [32, 25], [26.5, 18]]),
  tail: a.spline([[78.5, 45], [83, 50], [84, 62], [83.5, 70], [85.5, 76, 1], [80, 74, 1], [80.5, 62], [79, 54]]),
  overlay: (c, body) => a.clip(c, 'muzzle', body, `<ellipse cx="11" cy="39" rx="7.5" ry="7" fill="#F2F2F7" opacity=".85"/><ellipse cx="55" cy="68" rx="20" ry="5" fill="#F2F2F7" opacity=".5"/>`),
});
