
import { getCloudinaryAssetUrl } from "@/lib/cloudinary";

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
    image: getCloudinaryAssetUrl('/KEN8.webp', { width: 1200, height: 600, crop: 'fill' }),
    slug: 'kenya',
    photos: [
      getCloudinaryAssetUrl('/KEN1.webp'), getCloudinaryAssetUrl('/KEN6.webp'), getCloudinaryAssetUrl('/KEN17.webp'), getCloudinaryAssetUrl('/KEN23.webp'), getCloudinaryAssetUrl('/KEN24.webp'),
      getCloudinaryAssetUrl('/KEN12.webp'), getCloudinaryAssetUrl('/KEN13.webp'), getCloudinaryAssetUrl('/KEN14.webp'), getCloudinaryAssetUrl('/KEN15.webp'), getCloudinaryAssetUrl('/KEN16.webp'),
      getCloudinaryAssetUrl('/KEN18.webp'), getCloudinaryAssetUrl('/KEN19.webp'), getCloudinaryAssetUrl('/KEN20.webp'), getCloudinaryAssetUrl('/KEN21.webp'), getCloudinaryAssetUrl('/KEN7.webp'),
      getCloudinaryAssetUrl('/KEN22.webp'), getCloudinaryAssetUrl('/KEN25.webp'), getCloudinaryAssetUrl('/KEN26.webp'), getCloudinaryAssetUrl('/KEN11.webp'), getCloudinaryAssetUrl('/KEN8.webp'),
      getCloudinaryAssetUrl('/KEN2.webp'), getCloudinaryAssetUrl('/KEN3.webp'), getCloudinaryAssetUrl('/KEN4.webp'), getCloudinaryAssetUrl('/KEN5.webp'), getCloudinaryAssetUrl('/KEN9.webp'),
      getCloudinaryAssetUrl('/KEN10.webp'),
    ],
    videos: [ 
      { title: 'Ambosseli', videoUrl: 'https://player.vimeo.com/video/1087859974' },
],
  },
  {
    id: 5,
    location: 'ZANZIBAR',
    country: 'TANZANIA',
    image: getCloudinaryAssetUrl('/ZA1.webp', { width: 1200, height: 600, crop: 'fill' }),
    slug: 'zanzibar',
    photos: [
      getCloudinaryAssetUrl('/ZA5.webp'), getCloudinaryAssetUrl('/ZA6.webp'), getCloudinaryAssetUrl('/ZA7.webp'), getCloudinaryAssetUrl('/ZA8.webp'),
      getCloudinaryAssetUrl('/ZA18.webp'), getCloudinaryAssetUrl('/ZA14.webp'), getCloudinaryAssetUrl('/ZA2.webp'), getCloudinaryAssetUrl('/ZA9.webp'), getCloudinaryAssetUrl('/ZA10.webp'),
      getCloudinaryAssetUrl('/ZA11.webp'), getCloudinaryAssetUrl('/ZA12.webp'), getCloudinaryAssetUrl('/ZA16.webp'), getCloudinaryAssetUrl('/ZA17.webp'), getCloudinaryAssetUrl('/ZA19.webp'),
      getCloudinaryAssetUrl('/ZA20.webp'), getCloudinaryAssetUrl('/ZA4.webp'), getCloudinaryAssetUrl('/ZA23.webp'), getCloudinaryAssetUrl('/ZA24.webp'), getCloudinaryAssetUrl('/ZA25.webp'),
      getCloudinaryAssetUrl('/ZA3.webp'), getCloudinaryAssetUrl('/ZA13.webp'), getCloudinaryAssetUrl('/ZA15.webp'), getCloudinaryAssetUrl('/ZA21.webp'), getCloudinaryAssetUrl('/ZA22.webp'),
    ],
    videos: [],
  },
  {
    id: 1,
    country: 'MADAGASCAR',
    location: 'Antananarivo',
    image: getCloudinaryAssetUrl('/MAD2.webp', { width: 1200, height: 600, crop: 'fill' }),
    slug: 'madagascar',
    imagePosition: '50% 70%',
    imageFit: 'cover',
    photos: [
      getCloudinaryAssetUrl('/MAD1.webp'), getCloudinaryAssetUrl('/MAD3.webp'), getCloudinaryAssetUrl('/MAD5.webp'), getCloudinaryAssetUrl('/MAD12.webp'), getCloudinaryAssetUrl('/MAD13.webp'),
      getCloudinaryAssetUrl('/MAD20.webp'), getCloudinaryAssetUrl('/MAD21.webp'), getCloudinaryAssetUrl('/MAD22.webp'), getCloudinaryAssetUrl('/MAD23.webp'), getCloudinaryAssetUrl('/MAD24.webp'),
      getCloudinaryAssetUrl('/MAD25.webp'), getCloudinaryAssetUrl('/MAD26.webp'), getCloudinaryAssetUrl('/MAD37.webp'), getCloudinaryAssetUrl('/MAD43.webp'),
      getCloudinaryAssetUrl('/MAD7.webp'), getCloudinaryAssetUrl('/MAD8.webp'), getCloudinaryAssetUrl('/MAD9.webp'), getCloudinaryAssetUrl('/MAD10.webp'), getCloudinaryAssetUrl('/MAD11.webp'),
      getCloudinaryAssetUrl('/MAD4.webp'), getCloudinaryAssetUrl('/MAD36.webp'), getCloudinaryAssetUrl('/MAD33.webp'), getCloudinaryAssetUrl('/MAD34.webp'), getCloudinaryAssetUrl('/MAD35.webp'),
      getCloudinaryAssetUrl('/MAD2.webp'), getCloudinaryAssetUrl('/MAD6.webp'), getCloudinaryAssetUrl('/MAD27.webp'), getCloudinaryAssetUrl('/MAD28.webp'), getCloudinaryAssetUrl('/MAD29.webp'),
      getCloudinaryAssetUrl('/MAD30.webp'), getCloudinaryAssetUrl('/MAD31.webp'), getCloudinaryAssetUrl('/MAD32.webp'), getCloudinaryAssetUrl('/MAD14.webp'), getCloudinaryAssetUrl('/MAD15.webp'),
      getCloudinaryAssetUrl('/MAD16.webp'), getCloudinaryAssetUrl('/MAD17.webp'), getCloudinaryAssetUrl('/MAD19.webp'), getCloudinaryAssetUrl('/MAD38.webp'), getCloudinaryAssetUrl('/MAD39.webp'),
      getCloudinaryAssetUrl('/MAD40.webp'), getCloudinaryAssetUrl('/MAD41.webp'), getCloudinaryAssetUrl('/MAD42.webp'), getCloudinaryAssetUrl('/MAD18.webp'),
    ],
    videos: [],
  },
  {
    id: 2,
    location: 'Victoria',
    country: 'SEYCHELLES',
    image: getCloudinaryAssetUrl('/SEYCHELLES.webp', { width: 1200, height: 600, crop: 'fill' }),
    slug: 'seychelles',
    photos: [
      getCloudinaryAssetUrl('/SEY1.webp'), getCloudinaryAssetUrl('/SEY2.webp'), getCloudinaryAssetUrl('/SEY3.webp'), getCloudinaryAssetUrl('/SEY4.webp'), getCloudinaryAssetUrl('/SEY5.webp'),
      getCloudinaryAssetUrl('/SEY6.webp'), getCloudinaryAssetUrl('/SEY7.webp'), getCloudinaryAssetUrl('/SEY8.webp'), getCloudinaryAssetUrl('/SEY10.webp'),
      getCloudinaryAssetUrl('/SEY11.webp'), getCloudinaryAssetUrl('/SEY12.webp'), getCloudinaryAssetUrl('/SEY13.webp'), getCloudinaryAssetUrl('/SEY14.webp'), getCloudinaryAssetUrl('/SEY15.webp'), getCloudinaryAssetUrl('/SEY9.webp'),
    ],
    videos: [
      { title: 'Seychelles', videoUrl: 'https://www.youtube.com/embed/5b1Nic6BNVc' },
    ],
  },
  {
    id: 3,
    location: 'Johannesburg',
    country: 'SOUTH AFRICA',
    image: getCloudinaryAssetUrl('/SOUTHAFRICA.webp', { width: 1200, height: 600, crop: 'fill' }),
    slug: 'south-africa',
    photos: [
       getCloudinaryAssetUrl('/SA2.webp'), getCloudinaryAssetUrl('/SA3.webp'), getCloudinaryAssetUrl('/SA4.webp'), getCloudinaryAssetUrl('/SA5.webp'),
      getCloudinaryAssetUrl('/SA6.webp'), getCloudinaryAssetUrl('/SA7.webp'), getCloudinaryAssetUrl('/SA8.webp'), getCloudinaryAssetUrl('/SA9.webp'), getCloudinaryAssetUrl('/SA10.webp'), getCloudinaryAssetUrl('/SA12.webp'),
    ],
    videos: [
      { title: 'Johannesburg Travel Guide', videoUrl: 'https://www.youtube.com/embed/nPzrmQ2WeZ8' },
    ],
  },
  {
    id: 4,
    location: 'Addis Ababa',
    country: 'ETHIOPIA',
    image: getCloudinaryAssetUrl('/ETH3.webp', { width: 1200, height: 600, crop: 'fill' }),
    slug: 'ethiopia',
    photos: [
      getCloudinaryAssetUrl('/ETH1.webp'), getCloudinaryAssetUrl('/ETH2.webp'), getCloudinaryAssetUrl('/ETH3.webp'),
    ],
    videos: [],
  },
  {
    id: 6,
    location: 'Juba',
    country: 'SOUTH SUDAN',
    image: getCloudinaryAssetUrl('/JUBA.webp', { width: 1200, height: 600, crop: 'fill' }),
    slug: 'south-sudan',
    photos: [
      getCloudinaryAssetUrl('/SS1.webp'), getCloudinaryAssetUrl('/SS2.webp'), getCloudinaryAssetUrl('/SS3.webp'), getCloudinaryAssetUrl('/SS4.webp'), getCloudinaryAssetUrl('/SS5.webp'),
      getCloudinaryAssetUrl('/SS6.webp'), getCloudinaryAssetUrl('/SS7.webp'), getCloudinaryAssetUrl('/SS8.webp'), getCloudinaryAssetUrl('/SS9.webp'), getCloudinaryAssetUrl('/SS10.webp'),
      getCloudinaryAssetUrl('/SS11.webp'), getCloudinaryAssetUrl('/SS12.webp'), getCloudinaryAssetUrl('/SS13.webp'), getCloudinaryAssetUrl('/SS14.webp'), getCloudinaryAssetUrl('/SS15.webp'),
      getCloudinaryAssetUrl('/SS16.webp'), getCloudinaryAssetUrl('/SS17.webp'), getCloudinaryAssetUrl('/SS18.webp'), 
    ],
    videos: [],
  },
  {
    id: 7,
    location: 'Kampala',
    country: 'UGANDA',
    image: getCloudinaryAssetUrl('/UGANDA.webp', { width: 1200, height: 600, crop: 'fill' }),
    slug: 'uganda',
    photos: [
      getCloudinaryAssetUrl('/UGANDA.webp'), getCloudinaryAssetUrl('/UG.webp'),
    ],
    videos: [],
  },
];
