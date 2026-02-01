import React from 'react';
import { EducationItem } from '@/data/educationData';

const EducationSection: React.FC<{
  items: EducationItem[];
  image: string;
}> = ({ items, image }) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        <div className="w-full">
          <div className="aspect-square w-full overflow-hidden bg-red-600">
            <img
              src={image}
              alt="Graduation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full">
          <h2 className="
            text-4xl 
            md:text-5xl 
            font-extrabold 
            tracking-tight 
            text-white 
            mb-8
          ">
            Education
          </h2>

          <ul className="space-y-5">
            {items.map((item) => (
              <li
                key={item.id}
                className="
                  text-white/80 
                  text-sm 
                  md:text-base 
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

      <div className="border-b border-white/20 mt-16 md:mt-24" />
    </section>
  );
};

export default EducationSection;
