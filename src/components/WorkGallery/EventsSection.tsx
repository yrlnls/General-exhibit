import React from 'react';

interface Event {
  id: string;
  title: string;
  videoId: string;
}

const EventsSection: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <section className="py-10 space-y-8 scroll-reveal">
      <h2 className="section-heading mb-12">Events</h2>
      
      <div className="mirror-panel max-w-[520px] mx-auto">
        <div className="mirror-panel-inner grid gap-6 grid-cols-1 place-items-center max-w-[520px] mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg w-full sm:max-w-[520px] border border-white/10 bg-black/40 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="events-video-media">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${event.videoId}`}
                  title={event.title}
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
