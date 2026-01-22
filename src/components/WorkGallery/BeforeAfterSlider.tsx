import React, { useState, useRef } from 'react';

interface BeforeAfterComparison {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

const BeforeAfterSlider: React.FC<{ comparisons: BeforeAfterComparison[] }> = ({ comparisons }) => {
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({});
  const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleMouseDown = (id: string) => (e: React.MouseEvent) => {
    const container = containerRefs.current[id];
    if (!container) return;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = moveEvent.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPositions((prev) => ({ ...prev, [id]: percentage }));
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <section className="py-16 space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Color Grading..</h2>
      </div>

      <div className="space-y-16">
        {comparisons.map((comparison) => {
          const position = sliderPositions[comparison.id] ?? 50;

          return (
            <div key={comparison.id}>
              <div
                ref={(el) => {
                  if (el) containerRefs.current[comparison.id] = el;
                }}
                className="relative w-full overflow-hidden rounded-lg cursor-col-resize bg-black"
                onMouseDown={handleMouseDown(comparison.id)}
                style={{ aspectRatio: '16 / 9' }}
              >
                {/* After Image (Right) */}
                <img
                  src={comparison.afterImage}
                  alt={comparison.afterLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Left) with clipping */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${position}%` }}
                >
                  <img
                    src={comparison.beforeImage}
                    alt={comparison.beforeLabel}
                    className="w-full h-full object-cover"
                    style={{ width: `calc(100% / ${position} * 100)` }}
                  />
                </div>

                {/* Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Center Circle Handle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-black" />
                      <div className="w-1 h-4 bg-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Labels Below Image */}
              <div className="flex justify-between mt-4 px-4">
                <span className="text-white text-sm font-semibold">
                  {comparison.beforeLabel}
                </span>
                <span className="text-white text-sm font-semibold">
                  {comparison.afterLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
