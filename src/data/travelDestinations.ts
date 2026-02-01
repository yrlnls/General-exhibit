
export interface TravelDestination {
  id: number;
  country: string;
  location: string;
  image: string;
  slug: string;
  photos: string[];
  videos: { title: string; videoUrl: string }[];
}

export interface TravelVideo {
  id: string;
  title: string;
  videoUrl: string;
  destination: string;
}

export const travelDestinations: TravelDestination[] = [
  {
    id: 0,
    country: 'KENYA',
    location: 'Nairobi',
    image: '/KEN8.jpg?w=1200&h=600&fit=crop',
    slug: 'kenya',
    photos: [
      '/KEN1.jpg', '/KEN2.jpg', '/KEN3.jpg', '/KEN4.jpg', '/KEN5.jpg',
      '/KEN6.jpg', '/KEN7.jpg', '/KEN8.jpg', '/KEN9.jpg', '/KEN10.jpg',
      '/KEN11.jpg', '/KEN12.jpg', '/KEN13.jpg', '/KEN14.jpg', '/KEN15.jpg',
      '/KEN16.jpg', '/KEN17.jpg', '/KEN18.jpg', '/KEN19.jpg', '/KEN20.jpg',
      '/KEN21.jpg', '/KEN22.jpg', '/KEN23.jpg', '/KEN24.jpg', '/KEN25.jpg',
      '/KEN26.jpeg',
    ],
    videos: [ 
      { title: 'Ambosseli', videoUrl: 'https://player.vimeo.com/video/1087859974' },
],
  },
  {
    id: 5,
    location: 'ZANZIBAR',
    country: 'TANZANIA',
    image: '/ZA1.jpg?w=1200&h=600&fit=crop',
    slug: 'zanzibar',
    photos: [
      '/ZA1.jpg', '/ZA2.jpg', '/ZA3.jpg', '/ZA4.jpg', '/ZA5.jpg',
      '/ZA6.jpg', '/ZA7.jpg', '/ZA8.jpg', '/ZA9.jpg', '/ZA10.jpg',
      '/ZA11.jpg', '/ZA12.jpg', '/ZA13.jpg', '/ZA14.jpg', '/ZA15.jpg',
      '/ZA16.jpg', '/ZA17.jpg', '/ZA18.jpg', '/ZA20.jpg',
      '/ZA21.jpg', '/ZA22.jpg', '/ZA23.jpg', '/ZA24.jpg', '/ZA25.jpg',
    ],
    videos: [],
  },
  {
    id: 1,
    country: 'MADAGASCAR',
    location: 'Antananarivo',
    image: '/MAD2.jpg?w=1200&h=600&fit=crop',
    slug: 'madagascar',
    photos: [
      '/MAD1.jpg', '/MAD2.jpg', '/MAD3.jpg', '/MAD4.jpg', '/MAD5.jpg',
      '/MAD6.jpg', '/MAD7.jpg', '/MAD8.jpg', '/MAD9.jpg', '/MAD10.jpg',
      '/MAD11.jpg', '/MAD12.JPG', '/MAD13.jpg', '/MAD14.jpg', '/MAD15.jpg',
      '/MAD16.jpg', '/MAD17.jpg', '/MAD18.jpg', '/MAD19.jpg', '/MAD20.jpg',
      '/MAD21.jpg', '/MAD22.jpg', '/MAD23.jpg', '/MAD24.jpg', '/MAD25.jpg',
      '/MAD26.jpg', '/MAD27.jpg', '/MAD28.jpg', '/MAD29.jpg', '/MAD30.jpg',
      '/MAD31.jpg', '/MAD32.jpg', '/MAD33.jpg', '/MAD34.jpg', '/MAD35.jpg',
      '/MAD36.jpg', '/MAD37.jpg', '/MAD38.jpg', '/MAD39.jpg', '/MAD40.jpg',
      '/MAD41.jpg', '/MAD42.jpg', '/MAD43.jpg',
    ],
    videos: [],
  },
  {
    id: 2,
    location: 'Victoria',
    country: 'SEYCHELLES',
    image: '/SEYCHELLES.jpg?w=1200&h=600&fit=crop',
    slug: 'seychelles',
    photos: [
      '/SEY1.jpg', '/SEY2.jpg', '/SEY3.jpg', '/SEY4.jpg', '/SEY5.jpg',
      '/SEY6.jpg', '/SEY7.jpg', '/SEY8.jpg', '/SEY9.jpg', '/SEY10.jpg',
      '/SEY11.jpg', '/SEY12.jpg', '/SEY13.jpg', '/SEY14.jpg', '/SEY15.jpg',
    ],
    videos: [
      { title: 'Seychelles', videoUrl: 'https://www.youtube.com/embed/5b1Nic6BNVc' },
    ],
  },
  {
    id: 3,
    location: 'Johannesburg',
    country: 'SOUTH AFRICA',
    image: '/SOUTHAFRICA.jpg?w=1200&h=600&fit=crop',
    slug: 'south-africa',
    photos: [
       '/SA2.JPG', '/SA3.jpg', '/SA4.jpg', '/SA5.jpg',
      '/SA6.jpg', '/SA7.jpg', '/SA8.jpg', '/SA9.jpg', '/SA10.jpg', '/SA12.jpg',
    ],
    videos: [
      { title: 'Johannesburg Travel Guide', videoUrl: 'https://www.youtube.com/embed/nPzrmQ2WeZ8' },
    ],
  },
  {
    id: 4,
    location: 'Addis Ababa',
    country: 'ETHIOPIA',
    image: '/ETH1.jpg?w=1200&h=600&fit=crop',
    slug: 'ethiopia',
    photos: [
      '/ETH1.jpg', '/ETH2.jpg', '/ETH3.jpg',
    ],
    videos: [],
  },
  {
    id: 6,
    location: 'Juba',
    country: 'SOUTH SUDAN',
    image: '/SS6.JPG?w=1200&h=600&fit=crop',
    slug: 'south-sudan',
    photos: [
      '/SS1.JPG', '/SS2.JPG', '/SS3.JPG', '/SS4.JPG', '/SS5.JPG',
      '/SS6.JPG', '/SS7.JPG', '/SS8.JPG', '/SS9.JPG'
    ],
    videos: [],
  },
  {
    id: 7,
    location: 'Kampala',
    country: 'UGANDA',
    image: '/UGANDA.jpg?w=1200&h=600&fit=crop',
    slug: 'uganda',
    photos: [
      '/UGANDA.jpg',
    ],
    videos: [],
  },
];

