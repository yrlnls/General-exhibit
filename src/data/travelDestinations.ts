
export interface TravelDestination {
  id: number;
  country: string;
  location: string;
  image: string;
  slug: string;
  photos: string[];
  videos: { title: string; videoUrl: string }[];
  imagePosition?: string;
  imageFit?: 'cover' | 'contain';
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
    image: '/KEN8.webp?w=1200&h=600&fit=crop',
    slug: 'kenya',
    photos: [
      '/KEN1.webp', '/KEN6.webp', '/KEN17.webp', '/KEN23.webp', '/KEN24.webp',
      '/KEN12.webp', '/KEN13.webp', '/KEN14.webp', '/KEN15.webp', '/KEN16.webp',
      '/KEN18.webp', '/KEN19.webp', '/KEN20.webp', '/KEN21.webp', '/KEN7.webp',
      '/KEN22.webp', '/KEN25.webp', '/KEN26.webp', '/KEN11.webp', '/KEN8.webp',
      '/KEN2.webp', '/KEN3.webp', '/KEN4.webp', '/KEN5.webp', '/KEN9.webp',
      '/KEN10.webp',
    ],
    videos: [ 
      { title: 'Ambosseli', videoUrl: 'https://player.vimeo.com/video/1087859974' },
],
  },
  {
    id: 5,
    location: 'ZANZIBAR',
    country: 'TANZANIA',
    image: '/ZA1.webp?w=1200&h=600&fit=crop',
    slug: 'zanzibar',
    photos: [
      '/ZA5.webp', '/ZA6.webp', '/ZA7.webp', '/ZA8.webp',
      '/ZA18.webp', '/ZA14.webp', '/ZA2.webp', '/ZA9.webp', '/ZA10.webp',
      '/ZA11.webp', '/ZA12.webp', '/ZA16.webp', '/ZA17.webp', '/ZA19.webp',
      '/ZA20.webp', '/ZA4.webp', '/ZA23.webp', '/ZA24.webp', '/ZA25.webp',
      '/ZA3.webp', '/ZA13.webp', '/ZA15.webp', '/ZA21.webp', '/ZA22.webp',
    ],
    videos: [],
  },
  {
    id: 1,
    country: 'MADAGASCAR',
    location: 'Antananarivo',
    image: '/MAD2.webp?w=1200&h=600&fit=crop',
    slug: 'madagascar',
    imagePosition: '50% 70%',
    imageFit: 'cover',
    photos: [
      '/MAD1.webp', '/MAD3.webp', '/MAD5.webp', '/MAD12.webp', '/MAD13.webp',
      '/MAD20.webp', '/MAD21.webp', '/MAD22.webp', '/MAD23.webp', '/MAD24.webp',
      '/MAD25.webp', '/MAD26.webp', '/MAD37.webp', '/MAD43.webp',
      '/MAD7.webp', '/MAD8.webp', '/MAD9.webp', '/MAD10.webp', '/MAD11.webp',
      '/MAD4.webp', '/MAD36.webp', '/MAD33.webp', '/MAD34.webp', '/MAD35.webp',
      '/MAD2.webp', '/MAD6.webp', '/MAD27.webp', '/MAD28.webp', '/MAD29.webp',
      '/MAD30.webp', '/MAD31.webp', '/MAD32.webp', '/MAD14.webp', '/MAD15.webp',
      '/MAD16.webp', '/MAD17.webp', '/MAD19.webp', '/MAD38.webp', '/MAD39.webp',
      '/MAD40.webp', '/MAD41.webp', '/MAD42.webp','/MAD18.webp',
    ],
    videos: [],
  },
  {
    id: 2,
    location: 'Victoria',
    country: 'SEYCHELLES',
    image: '/SEYCHELLES.webp?w=1200&h=600&fit=crop',
    slug: 'seychelles',
    photos: [
      '/SEY1.webp', '/SEY2.webp', '/SEY3.webp', '/SEY4.webp', '/SEY5.webp',
      '/SEY6.webp', '/SEY7.webp', '/SEY8.webp', , '/SEY10.webp',
      '/SEY11.webp', '/SEY12.webp', '/SEY13.webp', '/SEY14.webp', '/SEY15.webp','/SEY9.webp',
    ],
    videos: [
      { title: 'Seychelles', videoUrl: 'https://www.youtube.com/embed/5b1Nic6BNVc' },
    ],
  },
  {
    id: 3,
    location: 'Johannesburg',
    country: 'SOUTH AFRICA',
    image: '/SOUTHAFRICA.webp?w=1200&h=600&fit=crop',
    slug: 'south-africa',
    photos: [
       '/SA2.webp', '/SA3.webp', '/SA4.webp', '/SA5.webp',
      '/SA6.webp', '/SA7.webp', '/SA8.webp', '/SA9.webp', '/SA10.webp', '/SA12.webp',
    ],
    videos: [
      { title: 'Johannesburg Travel Guide', videoUrl: 'https://www.youtube.com/embed/nPzrmQ2WeZ8' },
    ],
  },
  {
    id: 4,
    location: 'Addis Ababa',
    country: 'ETHIOPIA',
    image: '/ETH3.webp?w=1200&h=600&fit=crop',
    slug: 'ethiopia',
    photos: [
      '/ETH1.webp', '/ETH2.webp', '/ETH3.webp',
    ],
    videos: [],
  },
  {
    id: 6,
    location: 'Juba',
    country: 'SOUTH SUDAN',
    image: '/JUBA.webp?w=1200&h=600&fit=crop',
    slug: 'south-sudan',
    photos: [
      '/SS1.webp', '/SS2.webp', '/SS3.webp', '/SS4.webp', '/SS5.webp',
      '/SS6.webp', '/SS7.webp', '/SS8.webp', '/SS9.webp', '/SS10.webp',
      '/SS11.webp', '/SS12.webp', '/SS13.webp', '/SS14.webp', '/SS15.webp',
      '/SS16.webp', '/SS17.webp', '/SS18.webp', 
    ],
    videos: [],
  },
  {
    id: 7,
    location: 'Kampala',
    country: 'UGANDA',
    image: '/UGANDA.webp?w=1200&h=600&fit=crop',
    slug: 'uganda',
    photos: [
      '/UGANDA.webp','/UG.webp',
    ],
    videos: [],
  },
];
