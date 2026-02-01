import React from 'react';

interface Documentary {
  id: string;
  title: string;
  videoId: string;
}

const DocumentariesSection: React.FC<{ documentaries: Documentary[] }> = ({ documentaries }) => {
  return (
    <section className="py-8 space-y-4">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Documentaries..</h2>
      </div>
      
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 px-4 md:px-8 max-w-6xl mx-auto">
        {documentaries.map((doc) => (
          <div key={doc.id} className="group relative overflow-hidden rounded-lg w-full">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${doc.videoId}`}
                title={doc.title}
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

export default DocumentariesSection;
