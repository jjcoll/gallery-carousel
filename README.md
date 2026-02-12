# Gallery Carousel

An infinite vertical carousel gallery built with React, TypeScript, and Tailwind CSS.

## Features

- **Infinite vertical scroll** - Seamless looping animation
- **Adjustable settings:**
  - Number of columns (1-6)
  - Scroll speed (10-180 seconds per cycle)
  - Side padding (0-500px)
  - Gap between images (0-100px)
  - Max column width (100-800px)
- **Responsive design** - Desktop hover menu, mobile settings button
- **Alternating scroll directions** - Columns scroll in opposite directions for visual interest

## Settings

- **Desktop:** Hover at the top of the page to reveal settings
- **Mobile:** Tap the gear icon in the top-right corner

## Customizing Images

Edit `src/images.ts` to use your own images:

```ts
// Option 1: Use URLs
export const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
];

// Option 2: Import local assets
import img1 from './assets/photo1.jpg';
import img2 from './assets/photo2.jpg';
export const images = [img1, img2];

// Option 3: Glob import all images from a folder
export const images = Object.values(
  import.meta.glob('./assets/*.{jpg,png,webp}', { eager: true, as: 'url' })
);
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
