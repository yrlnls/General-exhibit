import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TravelDestination } from '@/data/travelDestinations';

const DestinationsCarousel: React.FC<{ destinations: TravelDestination[] }> = ({ destinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const autoScrollInterval = 5000; // 5 seconds

  const goToSlide = (index: number) => {
    setCurrentIndex((index + destinations.length) % destinations.length);
  };

  const goToPrevious = () => {
    goToSlide(currentIndex - 1);
  };

  const goToNext = () => {
    goToSlide(currentIndex + 1);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Get the 3 visible destinations
  const visibleDestinations = Array.from({ length: itemsPerView }).map((_, i) => 
    destinations[(currentIndex + i) % destinations.length]
  );

  return (
    <section className="relative w-full">
      {/* Main Carousel - 3 Images Row */}
      <div className="relative w-full bg-background">
        <div className="grid grid-cols-3 gap-4 md:gap-6 p-4 md:p-8">
          {visibleDestinations.map((destination, index) => (
            <div key={`${currentIndex}-${index}`} className="relative overflow-hidden rounded-lg h-64 md:h-80 group">
              <img
                src={destination.image}
                alt={`${destination.location}, ${destination.country}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Location Label */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {destination.location}
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  {destination.country}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Bottom Center */}
        <div className="flex items-center justify-center gap-6 pb-8">
          <button
            onClick={goToPrevious}
            className="border-2 border-white hover:bg-white hover:text-black transition-colors p-3 rounded-full text-white"
            aria-label="Previous destination"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-white/60 text-sm font-semibold min-w-[80px] text-center">
            {currentIndex + 1} / {destinations.length}
          </div>

          <button
            onClick={goToNext}
            className="border-2 border-white hover:bg-white hover:text-black transition-colors p-3 rounded-full text-white"
            aria-label="Next destination"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsCarousel;
