export interface TravelDestination {
  id: number;
  location: string;
  country: string;
  image: string;
}

export interface TravelVideo {
  id: string;
  title: string;
  videoUrl: string;
  destination: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export const travelDestinations: TravelDestination[] = [
  {
    id: 1,
    location: 'Antananarivo',
    country: 'MADAGASCAR',
    image: '/MADAGASCAR.jpg?w=1200&h=600&fit=crop',
  },
  {
    id: 2,
    location: 'Victoria',
    country: 'SEYCHELLES',
    image:'/SEYCHELLES.jpg?w=1200&h=600&fit=crop',
  },
  {
    id: 3,
    location: 'Johannesburg',
    country: 'SOUTH AFRICA',
    image:'/SOUTHAFRICA.jpg?w=1200&h=600&fit=crop'
  },
  {
    id: 4,
    location: 'Addis Ababa',
    country: 'ETHIOPIA',
    image:'/ETHIOPIA.jpg?w=1200&h=600&fit=crop'
  },
  {
    id: 5,
    location: 'Zanzibar',
    country: 'TANZANIA',
    image:'/ZANZIBAR.jpg?w=1200&h=600&fit=crop'
  },
  {
    id: 6,
    location: 'Juba',
    country: 'SOUTH SUDAN',
    image:'JUBA.jpg?w=1200&h=600&fit=crop'
  },
  {
    id: 7,
    location: 'Kampala',
    country: 'UGANDA',
    image:'/UGANDA.jpg?w=1200&h=600&fit=crop'
  },
];

export const travelVideos: TravelVideo[] = [
  {
    id: 'video-1',
    title: 'Johannesburg Travel Guide',
    videoUrl: 'https://www.youtube.com/embed/nPzrmQ2WeZ8',
    destination: 'Johannesburg',
  },
  {
    id: 'video-2',
    title: 'Seychelles',
    videoUrl: 'https://www.youtube.com/embed/5b1Nic6BNVc',
    destination: 'Seychelles',
  },
  {
    id: 'video-3',
    title: 'Ambosseli',
    videoUrl: 'https://player.vimeo.com/video/1087859974',
    destination: 'Ambosseli',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'img-1',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 1',
  },
  {
    id: 'img-2',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 2',
  },
  {
    id: 'img-3',
    src: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 3',
  },
  {
    id: 'img-4',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 4',
  },
  {
    id: 'img-5',
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 5',
  },
  {
    id: 'img-6',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 6',
  },
  {
    id: 'img-7',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 7',
  },
  {
    id: 'img-8',
    src: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 8',
  },
  {
    id: 'img-9',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 9',
  },
  {
    id: 'img-10',
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 10',
  },
  {
    id: 'img-11',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 11',
  },
  {
    id: 'img-12',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 12',
  },
  {
    id: 'img-13',
    src: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 13',
  },
  {
    id: 'img-14',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 14',
  },
  {
    id: 'img-15',
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 15',
  },
  {
    id: 'img-16',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 16',
  },
  {
    id: 'img-17',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 17',
  },
  {
    id: 'img-18',
    src: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 18',
  },
  {
    id: 'img-19',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 19',
  },
  {
    id: 'img-20',
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=400&fit=crop',
    alt: 'Travel Gallery 20',
  },
];
