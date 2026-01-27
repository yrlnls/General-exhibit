export interface Event {
  id: string;
  title: string;
  videoId: string;
}

export interface NGOItem {
  id: string;
  title: string;
  videoId: string;
}

export interface Documentary {
  id: string;
  title: string;
  videoId: string;
}

export interface Artwork {
  id: string;
  title: string;
  videoId: string;
  platform?: 'youtube' | 'vimeo';
}

export interface BeforeAfterComparison {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface ClosingSection {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

export const events: Event[] = [
  {
    id: 'wings-2023',
    title: 'Wings Forum 2023 Highlights',
    videoId: 'qigyUW4zulY', 
  },
];

export const ngoItems: NGOItem[] = [
  {
    id: 'seychelles-tsunami',
    title: 'How are the Seychelles preparing for tsunami risk? UNDRR',
    videoId: '3VBPDhl8sWk', 
  },
];

export const documentaries: Documentary[] = [
  {
    id: 'batian-peak',
    title: 'Batian Peak Documentary',
    videoId: 'bxKghJNOlG8', 
  },
  {
    id: 'alliance-highschool',
    title: 'Alliance Highschool Documentary',
    videoId: 'Nbg_Xqvo0zY', 
  },
  {
    id: 'alx-ventures',
    title: 'ALX Ventures Documentary',
    videoId: '6kgnUOZDMFc', 
  },
  {
    id: 'lg-hvac',
    title: 'LG HVAC Documentary',
    videoId: 'tPZZrHLWBJI',
  }
];

export const artworks: Artwork[] = [
  {
    id: 'art-1',
    title: 'Art 1',
    videoId: '1072341014',
    platform: 'vimeo',
  },
  {
    id: 'wise-two-jesse',
    title: 'Wise Two x Jesse',
    videoId: 'm49qOy-_Iko',
  },
];

export const colorGradingComparisons: BeforeAfterComparison[] = [
 
  {
    id: 'grading',
    title: 'Video Color Grade',
    beforeImage: '/edit1.jpg?w=1200&h=675&fit=crop',
    afterImage: '/edit2.jpg?w=1200&h=675&fit=crop',
    beforeLabel: 'Color Grade',
    afterLabel: 'Log Profile',
  },
];

export const closingBannerData: ClosingSection = {
  backgroundImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=900&fit=crop',
  title: 'The Journey began here and still continues here..',
};
