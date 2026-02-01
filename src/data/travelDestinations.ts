export interface TravelDestination {
  id: number;
  country: string;
  location: string;
  image: string;
}

export interface TravelVideo {
  id: string;
  title: string;
  videoUrl: string;
  destination: string;
}



export const travelDestinations: TravelDestination[] = [
  {
    id: 1,
    country: 'MADAGASCAR',
    location: 'Antananarivo',
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
    location: 'ZANZIBAR',
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

