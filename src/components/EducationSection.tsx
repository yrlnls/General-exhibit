import React from 'react';
import { EducationItem } from '@/data/educationData';

const EducationSection: React.FC<{ items: EducationItem[]; image: string }> = ({ items, image }) => {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Image */}
        <div className="order-2 md:order-1">
          <div
            className="w-full aspect-square rounded-lg overflow-hidden bg-red-600"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <img src={image} alt="Education" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Education Content */}
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Education</h2>

          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.id}>
                <p className="text-white/80 text-sm mb-2">
                  {item.institution} {item.period}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {item.qualification}
                </h3>
                {item.description && (
                  <p className="text-white/60 text-sm italic">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-white/10 mt-16" />
    </section>
  );
};

export default EducationSection;
