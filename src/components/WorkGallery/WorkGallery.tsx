import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WorkItem } from '@/data/workItems';

// Responsive items-per-view to match reference layout
const useItemsPerView = () => {
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setItemsPerView(3); // desktop
      else if (w >= 768) setItemsPerView(2); // tablet
      else setItemsPerView(1); // mobile
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return itemsPerView;
};

const WorkGallery: React.FC<{ items: WorkItem[] }> = ({ items }) => {
  const itemsPerView = useItemsPerView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = useMemo(
    () => Math.ceil(items.length / itemsPerView),
    [items.length, itemsPerView]
  );

  const normalizeIndex = (index: number) =>
    ((index % totalSlides) + totalSlides) % totalSlides;

  const goToNext = () => setCurrentIndex(i => normalizeIndex(i + 1));
  const goToPrevious = () => setCurrentIndex(i => normalizeIndex(i - 1));

  // Clamp index when layout changes
  useEffect(() => {
    setCurrentIndex(i => normalizeIndex(i));
  }, [itemsPerView]);

  const startIndex = currentIndex * itemsPerView;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerView);

  return (
    <section className="relative w-full py-12">
      <div
        className="grid gap-8 px-4 md:px-8"
        style={{ gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))` }}
      >
        {visibleItems.map(item => (
          <article
            key={item.id}
            className="relative group overflow-hidden rounded-xl"
          >
            {/* Image */}
            <div
              className="relative h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-1 text-white/80 text-sm md:text-base max-w-sm">
                    {item.description}
                  </p>
                )}

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center justify-center border border-white/60 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                  Explore
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation */}
      {totalSlides > 1 && (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8">
          <button
            onClick={goToPrevious}
            aria-label="Previous"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            aria-label="Next"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;