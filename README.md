# Gloss Icons

Original glossy 3D-style icons with a lacquer finish and a little depth inside: one light from the top left, a crisp edge, a window reflection, a soft coloured glow at the bottom and a contact shadow. Drawn from scratch as code, not traced from any emoji or icon set.

![All icons](docs/sheet.png)

## Use them

Every icon comes as an optimised SVG and as WebP at 32, 64, 128 and 256 px.

```
dist/
  svg/<id>.svg
  webp/32/<id>.webp   webp/64/…   webp/128/…   webp/256/…
  manifest.json        ids, names, tags and file paths
```

**Mobile apps:** ship the WebP that matches your largest display size (128 px covers ~42 pt at 3x) and draw it with your platform's image view. A bitmap is far cheaper to show in a long list than drawing gradients and blurs at runtime; most icons are 1–4 KB at 128 px.

**Web:** use the SVG for anything that scales, or the WebP in an `<img>` for lists.

## Add or change an icon

Each icon is one small file in `icons/` that only describes shape and colour:

```js
module.exports = {
  id: 'heart',
  name: 'Heart',
  tags: ['love', 'romance'],
  tone: 'pink',            // palette of the main body: sets the edge and inner glow colour
  body: 'M48 80 C22 62 …', // silhouette, used for the outline and to keep reflections inside
  shine: [29, 31, -40],    // where light catches the upper-left curve: x, y, rotation
  draw: (c) => `<path d="…" fill="${c.radial('a', 'pink')}"/>`,
};
```

Light, gloss, outline, glow and shadow all live in `src/engine.js`, so every icon matches and a style change is one edit. Colour ramps are in `src/palettes.js`.

```sh
npm install
npm run build                                   # everything into dist/ and docs/sheet.png
node scripts/build.js --only heart,dice --out /tmp/sheet.png   # quick preview while drawing
```

## Licence

MIT. Use them in anything, commercial included.
