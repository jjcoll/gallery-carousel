// Image configuration - easy to swap out images in the future
// Just replace this array with your own image URLs or import from assets

// Using placeholder images for now
const PLACEHOLDER_IMAGES = [
  'https://picsum.photos/seed/1/400/600',
  'https://picsum.photos/seed/2/400/500',
  'https://picsum.photos/seed/3/400/700',
  'https://picsum.photos/seed/4/400/550',
  'https://picsum.photos/seed/5/400/650',
  'https://picsum.photos/seed/6/400/600',
  'https://picsum.photos/seed/7/400/500',
  'https://picsum.photos/seed/8/400/700',
];

// Export the images array - to use your own images:
// 1. Import images from assets: import img1 from './assets/img1.jpg'
// 2. Or use a glob import: const images = Object.values(import.meta.glob('./assets/*.{jpg,png,webp}', { eager: true, as: 'url' }))
export const images: string[] = PLACEHOLDER_IMAGES;
