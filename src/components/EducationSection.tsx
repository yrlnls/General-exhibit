import React from 'react';
import { EducationItem } from '@/data/educationData';

const EducationSection: React.FC<{
  items: EducationItem[];
  image: string;
}> = ({ items, image }) => {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">

        <div className="w-full max-w-sm mx-auto md:mx-0">
          <div className="aspect-[4/3] w-full overflow-hidden bg-red-600 rounded-lg">
            <img
              src={image}
              alt="Graduation"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="w-full">
          <h2 className="
            text-3xl 
            md:text-4xl 
            font-extrabold 
            tracking-tight 
            text-white 
            mb-6
          ">
            Education
          </h2>

          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="
                  text-white/80 
                  text-base 
                  md:text-lg 
                  font-normal 
                  leading-relaxed
                "
              >
                <span className="mr-2">-</span>
                {item.institution}
                <span className="mx-1">
                  ({item.period});
                </span>
                <em className="text-white italic ml-1">
                  {item.qualification}
                </em>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-b border-white/20 mt-10 md:mt-14" />
    </section>
  );
};

export default EducationSection;
