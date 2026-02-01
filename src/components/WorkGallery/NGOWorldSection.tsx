import React from 'react';

interface NGOItem {
  id: string;
  title: string;
  videoId: string;
}

const NGOWorldSection: React.FC<{ items: NGOItem[] }> = ({ items }) => {
  return (
    <section className="py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">NGO world..</h2>
      </div>
      
      <div className="grid gap-4 px-4 md:px-0 max-w-2xl mx-auto">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg w-full">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NGOWorldSection;
