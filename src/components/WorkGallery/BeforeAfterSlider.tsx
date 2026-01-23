import React, { useState, useRef } from 'react';

interface Comparison {
  id: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

const BeforeAfterSlider: React.FC<{ comparisons: Comparison[] }> = ({ comparisons }) => {
  const [positions, setPositions] = useState<Record<string, number>>({});
  const active = useRef<string | null>(null);
  const containers = useRef<Record<string, HTMLDivElement | null>>({});

  const setPosition = (id: string, clientX: number) => {
    const el = containers.current[id];
    if (!el) return;

    const { left, width } = el.getBoundingClientRect();
    const pct = ((clientX - left) / width) * 100;
    setPositions(p => ({ ...p, [id]: Math.min(100, Math.max(0, pct)) }));
  };

  return (
    <section className="space-y-20">
      {comparisons.map(c => {
        const pos = positions[c.id] ?? 50;

        return (
          <div key={c.id}>
            <div
              ref={el => (containers.current[c.id] = el)}
              className="relative w-full overflow-hidden select-none touch-none"
              style={{ aspectRatio: '16 / 9' }}
              onPointerMove={e => active.current && setPosition(active.current, e.clientX)}
              onPointerUp={() => (active.current = null)}
              onPointerLeave={() => (active.current = null)}
            >
              {/* AFTER image (base layer) */}
              <img
                src={c.afterImage}
                alt={c.afterLabel}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* BEFORE image (masked, same dimensions) */}
              <img
                src={c.beforeImage}
                alt={c.beforeLabel}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  clipPath: `inset(0 ${100 - pos}% 0 0)`,
                }}
              />

              {/* Divider */}
              <div
                className="absolute top-0 bottom-0"
                style={{ left: `${pos}%` }}
              >
                <div className="absolute inset-y-0 w-[2px] bg-white/80" />

                {/* Handle */}
                <div
                  onPointerDown={e => {
                    active.current = c.id;
                    e.currentTarget.setPointerCapture(e.pointerId);
                    setPosition(c.id, e.clientX);
                  }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
                             w-10 h-10 bg-white rounded-full shadow
                             flex items-center justify-center cursor-ew-resize"
                >
                  <span className="text-black font-bold text-lg">{'<'}</span>
                  <span className="text-black font-bold text-lg">{'>'}</span>
                </div>
              </div>

              {/* Labels */}
              <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                {c.beforeLabel}
              </span>
              <span className="absolute bottom-4 right-4 text-white text-sm font-semibold">
                {c.afterLabel}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BeforeAfterSlider;
