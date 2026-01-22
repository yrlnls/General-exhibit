import React from 'react';

interface Documentary {
  id: string;
  title: string;
  videoId: string;
}

const DocumentariesSection: React.FC<{ documentaries: Documentary[] }> = ({ documentaries }) => {
  return (
    <section className="py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Documentaries..</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documentaries.map((doc) => (
          <div key={doc.id} className="group relative overflow-hidden rounded-lg">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${doc.videoId}`}
              title={doc.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentariesSection;
