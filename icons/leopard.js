const a = require('../src/parts/animal');
const { feline } = require('./cat');

// Rosettes: two arcs of ink round a deeper centre; few and bold so they read small.
const SPOTS = [[47, 47], [57, 45.5], [67, 46.5], [76, 52], [52, 55], [62, 54.5], [41, 53], [34, 45], [72, 58]];
const rosette = ([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#C98500"/><path d="M${x - 3.2} ${y + 1} A3.4 3.4 0 0 1 ${x + 1} ${y - 3.3} M${x + 3.2} ${y - 0.8} A3.4 3.4 0 0 1 ${x - 1} ${y + 3.3}" stroke="#2A1000" stroke-width="2" fill="none" stroke-linecap="round"/>`;
module.exports = feline({
  id: 'leopard',
  name: 'Leopard',
  emoji: '🐆',
  tags: ['leopard', 'big cat', 'spots', 'cheetah', 'fast'],
  coat: 'gold',
  ink: '#2A1000',
  overlay: (c, body) => a.clip(c, 'sp', body, `<ellipse cx="45" cy="64" rx="22" ry="5" fill="#FFF9EC" opacity=".7"/>${SPOTS.map(rosette).join('')}
    <circle cx="20" cy="29" r="1.2" fill="#2A1000"/><circle cx="23" cy="33" r="1.2" fill="#2A1000"/><circle cx="19" cy="40" r="1.1" fill="#2A1000"/>`),
  tailOver: () => `<circle cx="84" cy="40" r="1.6" fill="#2A1000"/><circle cx="86.5" cy="31" r="1.6" fill="#2A1000"/><path d="M76 18 L88 18 L88 26 L76 26 Z" fill="#2A1000"/>`,
  legOver: (c) => {
    c.def(`<pattern id="${c.id('legsp')}" patternUnits="userSpaceOnUse" width="6" height="7"><circle cx="2" cy="3" r="1.3" fill="#2A1000"/></pattern>`);
    return `url(#${c.id('legsp')})`;
  },
});
