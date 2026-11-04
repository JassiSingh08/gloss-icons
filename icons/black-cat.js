const { feline } = require('./cat');

module.exports = feline({
  id: 'black-cat',
  name: 'Black Cat',
  emoji: '🐈‍⬛',
  tags: ['black cat', 'halloween', 'spooky', 'luck', 'witch'],
  coat: 'black',
  ink: '#05050A',
  // Gold eyes with a slit: the only colour on a black cat, and what makes it read.
  eyeFill: (c) => c.radial('eye', 'gold', 0.4, 0.3),
});
