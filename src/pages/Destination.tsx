
import { useParams, Link } from 'react-router-dom';
import { travelDestinations } from '@/data/travelDestinations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TravelGallery from '@/components/TravelGallery';
import { ArrowLeft, MapPin } from 'lucide-react';

const Destination = () => {
  const { slug } = useParams();
  const destination = travelDestinations.find((dest) => dest.slug === slug);
  const backgroundImage = "url('/Places%20background%20.jpg')";

  if (!destination) {
    return (
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage }}
      >
        <div className="absolute inset-0 cinema-overlay" />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Destination Not Found</h1>
              <Link to="/travel" className="text-primary hover:underline">
                Back to Travel
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  const galleryImages = destination.photos.map((photo, index) => ({
    id: `photo-${index}`,
    src: photo,
    alt: `${destination.country}`,
  }));

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 cinema-overlay" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        {/* Hero Section for Destination */}
        <div className="relative h-64 md:h-80 flex-shrink-0">
          <img
            src={destination.image}
            alt={destination.country}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 cinema-overlay" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <Link
              to="/travel"
              className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {destination.country}
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin size={18} />
              <span className="text-lg">{destination.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Videos Section - Centered */}
          {destination.videos && destination.videos.length > 0 && (
            <div className="py-12">
              <div className="container mx-auto px-6 max-w-4xl">
                <div className="mirror-panel">
                  <div className="mirror-panel-inner space-y-6">
                    {destination.videos.map((video, index) => (
                      <div key={index} className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                        <div className="aspect-video">
                          <iframe
                            src={video.videoUrl}
                            title={video.title}
                            className="w-full h-full"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Photos Section */}
          {galleryImages.length > 0 && (
            <div className="py-12">
              <div className="container mx-auto px-6">
                <div className="mirror-panel">
                  <div className="mirror-panel-inner">
                    <TravelGallery images={galleryImages} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* No Content Message */}
          {galleryImages.length === 0 && (!destination.videos || destination.videos.length === 0) && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">No photos or videos available for this destination.</p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Destination;
