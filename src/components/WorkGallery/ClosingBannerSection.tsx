import React from 'react';

interface ClosingSection {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

const ClosingBannerSection: React.FC<{ data: ClosingSection }> = ({ data }) => {
  return (
    <section className="relative w-full overflow-hidden h-screen rounded-lg mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-lg md:text-xl text-white/80 mt-4">
              {data.subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClosingBannerSection;
