const a = require('../src/parts/animal');
const { canine } = require('./dog');

module.exports = canine({
  id: 'guide-dog',
  name: 'Guide Dog',
  emoji: '🦮',
  tags: ['guide dog', 'blind', 'accessibility', 'harness', 'assistance'],
  coat: 'amber',
  earPal: 'amber',
  // Chest strap, back strap and the rigid handle a handler holds, rising back over the dog.
  overlay: (c, body) => a.clip(c, 'strap', body, `<path d="M31 37 Q36 50 33 63 L39.5 63 Q42 50 37.5 37 Z M36 41 L62 41 L62 46 L36 47 Z" fill="${c.linear('strap', 'brown', [0, 0, 0, 1], 2, 3)}"/>`),
  gear: () => `${a.line('M41 42 L52 18 L64 18 L60 42', '#331805', 4.2)}${a.line('M41 42 L52 18 L64 18 L60 42', '#B06A32', 2.2)}${a.line('M52.5 19.5 L62 19.5', '#E8B98A', 1, ' opacity=".8"')}
    <circle cx="41" cy="42" r="2" fill="#C98500"/><circle cx="60" cy="42" r="2" fill="#C98500"/>`,
});
