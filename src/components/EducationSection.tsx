import React from 'react';
import { EducationItem } from '@/data/educationData';

const EducationSection: React.FC<{
  items: EducationItem[];
  image: string;
}> = ({ items, image }) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">

        <div className="w-full max-w-md mx-auto md:mx-0">
          <div className="aspect-[4/3] w-full overflow-hidden bg-red-600 rounded-lg">
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

          <ul className="space-y-6">
            {items.map((item) => (
              <li
                key={item.id}
                className="
                  text-white/80 
                  text-lg 
                  md:text-xl 
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
