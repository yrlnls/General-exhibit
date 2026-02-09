export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "story-01",
    title: "Between Light and Silence in Nairobi",
    excerpt:
      "A visual diary of early morning walks, the city waking up, and the stories hidden in quiet corners.",
    date: "February 2, 2026",
    readTime: "6 min read",
    category: "Field Notes",
    author: "General Exhibit",
    image: "/KEN8.jpg",
  },
  {
    id: "story-02",
    title: "Zanzibar: Textures of the Coast",
    excerpt:
      "Salt air, worn wood, and sunlit alleys. A short reflection on craft, movement, and coastal rhythm.",
    date: "January 22, 2026",
    readTime: "5 min read",
    category: "Travel",
    author: "General Exhibit",
    image: "/ZA1.jpg",
  },
  {
    id: "story-03",
    title: "Madagascar Frames: A Study in Green",
    excerpt:
      "Exploring color, patience, and perspective through the rice fields and their slow, steady geometry.",
    date: "January 10, 2026",
    readTime: "7 min read",
    category: "Photo Essay",
    author: "General Exhibit",
    image: "/MAD2.jpg",
  },
];
