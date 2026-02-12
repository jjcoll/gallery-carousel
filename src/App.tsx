import { useState, useMemo } from 'react';
import { images } from './images';

function App() {
  const [columns, setColumns] = useState(3);
  const [speed, setSpeed] = useState(30); // seconds for one full cycle
  const [padding, setPadding] = useState(8); // pixels for side padding
  const [gap, setGap] = useState(8); // pixels for gap between images
  const [maxWidth, setMaxWidth] = useState(400); // max width per column
  const [showSettings, setShowSettings] = useState(false);

  // Ensure we have enough images for seamless scrolling (minimum 8 per column)
  const extendedImages = useMemo(() => {
    const minImages = 8;
    if (images.length === 0) return [];
    const result = [...images];
    while (result.length < minImages) {
      result.push(...images);
    }
    return result;
  }, []);

  // Split images into columns with offset for visual variety
  const columnImages = useMemo(() => {
    const cols: string[][] = [];
    for (let i = 0; i < columns; i++) {
      // Offset each column for variety
      const offset = Math.floor((extendedImages.length / columns) * i);
      const colImages = [
        ...extendedImages.slice(offset),
        ...extendedImages.slice(0, offset),
      ];
      cols.push(colImages);
    }
    return cols;
  }, [columns, extendedImages]);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Desktop: Hover zone at top */}
      <div
        className="hidden md:block fixed top-0 left-0 right-0 h-16 z-50"
        onMouseEnter={() => setShowSettings(true)}
        onMouseLeave={() => setShowSettings(false)}
      >
        <div
          className={`absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ${
            showSettings ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-center gap-8 p-4">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              Columns:
              <input
                type="range"
                min="1"
                max="6"
                value={columns}
                onChange={(e) => setColumns(Number(e.target.value))}
                className="w-24 accent-gray-800"
              />
              <span className="w-4 text-center">{columns}</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              Speed:
              <input
                type="range"
                min="10"
                max="180"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-24 accent-gray-800"
              />
              <span className="w-8 text-center">{speed}s</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              Padding:
              <input
                type="range"
                min="0"
                max="500"
                value={padding}
                onChange={(e) => setPadding(Number(e.target.value))}
                className="w-24 accent-gray-800"
              />
              <span className="w-10 text-center">{padding}px</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              Gap:
              <input
                type="range"
                min="0"
                max="100"
                value={gap}
                onChange={(e) => setGap(Number(e.target.value))}
                className="w-24 accent-gray-800"
              />
              <span className="w-10 text-center">{gap}px</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              Max Width:
              <input
                type="range"
                min="100"
                max="800"
                value={maxWidth}
                onChange={(e) => setMaxWidth(Number(e.target.value))}
                className="w-24 accent-gray-800"
              />
              <span className="w-12 text-center">{maxWidth}px</span>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile: Settings button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        onClick={() => setShowSettings(!showSettings)}
      >
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {/* Mobile: Settings panel */}
      {showSettings && (
        <div className="md:hidden fixed top-16 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 min-w-48">
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1 text-sm text-gray-700">
              Columns: {columns}
              <input
                type="range"
                min="1"
                max="4"
                value={columns}
                onChange={(e) => setColumns(Number(e.target.value))}
                className="w-full accent-gray-800"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-gray-700">
              Speed: {speed}s
              <input
                type="range"
                min="10"
                max="180"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full accent-gray-800"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-gray-700">
              Padding: {padding}px
              <input
                type="range"
                min="0"
                max="500"
                value={padding}
                onChange={(e) => setPadding(Number(e.target.value))}
                className="w-full accent-gray-800"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-gray-700">
              Gap: {gap}px
              <input
                type="range"
                min="0"
                max="100"
                value={gap}
                onChange={(e) => setGap(Number(e.target.value))}
                className="w-full accent-gray-800"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-gray-700">
              Max Width: {maxWidth}px
              <input
                type="range"
                min="100"
                max="800"
                value={maxWidth}
                onChange={(e) => setMaxWidth(Number(e.target.value))}
                className="w-full accent-gray-800"
              />
            </label>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div
        className="grid justify-center"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, ${maxWidth}px))`,
          padding: `8px ${padding}px`,
          gap: `${gap}px`,
        }}
      >
        {columnImages.map((colImages, colIndex) => (
          <div key={colIndex} className="overflow-hidden">
            <div
              className="flex flex-col"
              style={{
                gap: `${gap}px`,
                animation: `scroll ${speed}s linear infinite`,
                // Alternate direction for visual interest
                animationDirection: colIndex % 2 === 0 ? 'normal' : 'reverse',
              }}
            >
              {/* Render images twice for seamless loop */}
              {[...colImages, ...colImages].map((src, imgIndex) => (
                <img
                  key={`${colIndex}-${imgIndex}`}
                  src={src}
                  alt=""
                  className="w-full object-cover rounded"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
