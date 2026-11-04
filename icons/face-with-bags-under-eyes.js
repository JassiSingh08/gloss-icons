const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

// Heavy lids and dark half-moons under each eye: running on empty.
module.exports = {
  ...f.spec(),
  id: 'face-with-bags-under-eyes',
  name: 'Face With Bags Under Eyes',
  emoji: '🫩',
  group: 'Smileys & Emotion',
  subgroup: 'face-sleepy',
  tags: ['exhausted', 'tired', 'burnout', 'no sleep', 'drained'],
  draw(c) {
    const bag = (x) => `<path d="M${x - 6.5} 50.5 Q${x} 58.5 ${x + 6.5} 50.5 Q${x} 55 ${x - 6.5} 50.5 Z" fill="#8A5A1E" opacity=".55"/>`;
    return f.head(c) + bag(37) + bag(59) + a.eyes.half({ y: 44.5 }) + f.mouth.flat({ y: 67, w: 8, tilt: 2.5 });
  },
};
