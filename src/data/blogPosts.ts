export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  /** Full story content shown when the card is opened */
  content: string;
  // date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  gallery?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "story-01",
    title: "Empowering Coastal Communities Through Digital Tourism Platforms",
    excerpt:
      "CORDIO East Africa and General Exhibit delivered community-led websites and training to support long-term, locally owned Blue Tourism in Kenya’s South Coast.",
    content:
      "Client: CORDIO East Africa\n\nServices: Website Design • WordPress Development • Digital Training • Technical Support\n\nBuilding Digital Tools for Community-Led Conservation\nGeneral Exhibit was contracted by CORDIO East Africa to design and deliver digital platforms and capacity-building training for community organizations participating in the Blue Tourism Initiative (BTI) along Kenya’s South Coast.\n\nOur role extended beyond website development—we helped equip local communities with the knowledge and confidence to manage their own digital presence long after the project concludes.\n\nThe Communities\nKaya Kinondo Conservation and Development CBO\nA community-led organization dedicated to conserving the Kaya Kinondo Sacred Forest while promoting indigenous knowledge, cultural heritage, and sustainable nature-based tourism. The forest is home to endemic tree species, medicinal plants, birds, butterflies, and sacred cultural sites protected through generations of traditional stewardship.\n\nChale Boat Operators Self Help Group\nA community organization promoting responsible marine tourism around Chale Island. Their work focuses on protecting coral reefs and coastal ecosystems while creating sustainable livelihood opportunities through eco-tourism and visitor education.\n\nOur Contribution\nGeneral Exhibit designed and launched two tourism websites that enable the communities to showcase their destinations, conservation work, and visitor experiences.\n\n• www.kayakinondotrails.com\n• www.chaleadventures.com\n\nBeyond the websites, we facilitated practical digital skills training covering:\n• WordPress and Elementor website management\n• Website security and phishing awareness\n• Domain and hosting management\n• Media organization and image optimization\n• Content editing and page management\n• Blog writing and storytelling\n• Long-term website maintenance\n\nThe sessions were designed to ensure community ownership, enabling participants to independently update tourism information, publish stories, and manage their websites without relying on external developers.\n\nLasting Impact\nDigital sustainability is about more than building websites—it is about transferring knowledge. By combining technical development with hands-on training, the project has strengthened the ability of local conservation groups to tell their own stories, attract visitors, and promote biodiversity conservation through sustainable tourism.\n\nAs the Diani–Shimoni pilot of the Blue Tourism Initiative concludes, these digital platforms will continue serving as tools for conservation, education, and community-driven tourism in Kenya’s coastal region.\n\nLooking to build digital platforms that create lasting impact?\nWhether you’re an NGO, conservation programme, social enterprise, or community organization, General Exhibit develops websites and digital experiences designed for long-term sustainability and local ownership.",
    // date: "February 2, 2026",
    readTime: "7 min read",
    category: "Case Study",
    author: "General Exhibit",
    image: "/CORDIO.jpeg",
    gallery: [
      "/CORDIO01.jpeg",
      "/CORDIO02.jpeg",
      "/CORDIO03.jpeg",
      "/CORDIO04.jpeg",
      "/CORDIO05.jpeg",
      "/CORDIO06.jpeg",
      "/CORDIO07.jpeg",
    ],
  },
  {
    id: "story-02",
    title: "Zanzibar: Textures of the Coast",
    excerpt:
      "Salt air, worn wood, and sunlit alleys. A short reflection on craft, movement, and coastal rhythm.",
    content:
      "Zanzibar teaches you to look at the surface. Not the obvious view from the water, but the everyday craftsmanship of doors, planks, and painted corners—each one shaped by sun and sea. Salt air settles into materials and makes time visible.\n\nWalking through narrow alleys, I kept encountering textures that felt like they belonged to a hands-on world: rope fibers rough as wire, wood grain glowing under bright shade, and fabric that held the memory of wind. The coastline wasn’t just a destination; it was an instrument, tuning the pace of everyone nearby.\n\nAt markets, motion was constant and gentle. People negotiated with looks, listened with patience, and responded to small details. Even the shadows seemed to move in rhythm—stretching, shortening, repeating like a familiar song.\n\nThese notes are an attempt to translate that rhythm into words: craft as choreography, movement as language, and the coast as a reminder that beauty is built daily.",
    // date: "January 22, 2026",
    readTime: "5 min read",
    category: "Travel",
    author: "General Exhibit",
    image: "/ZA1.jpg",
    gallery: [
      "/ZA2.jpg",
      "/ZA3.jpg",
      "/ZA4.jpg",
      "/ZA5.jpg",
      "/ZA6.jpg",
    ],
  },
  {
    id: "story-03",
    title: "Madagascar Frames: A Study in Green",
    excerpt:
      "Exploring color, patience, and perspective through the rice fields and their slow, steady geometry.",
    content:
      "Green in Madagascar is never one thing. It changes with distance—softening into haze far away, brightening in the foreground, then turning darker under the canopy of trees. The landscape invites a patient form of seeing.\n\nIn the rice fields, geometry appeared slowly: terraces guiding the eye, water lines tracing curvature, and narrow paths connecting plots like deliberate punctuation. I kept framing scenes not to capture everything, but to choose what mattered—tone, spacing, and the quiet balance between earth and water.\n\nWhat stood out most was the tempo. Work happened in measured breaths. Fields weren’t rushed; they were tended with a steadiness that made time feel generous. The camera learned to wait.\n\nBy the end of the day, my perspective had shifted. The story wasn’t only about color—it was about the way patience turns observation into understanding.",
    // date: "January 10, 2026",
    readTime: "7 min read",
    category: "Photo Essay",
    author: "General Exhibit",
    image: "/MAD2.jpg",
    gallery: [
      "/MAD3.jpg",
      "/MAD4.jpg",
      "/MAD5.jpg",
      "/MAD6.jpg",
      "/MAD7.jpg",
    ],
  },

  // {
  //   id: "story-04",
  //   title: "The Sound of the Sea: A Coastal Reflection",
  //   excerpt:
  //     "Listening to the rhythm of waves and the stories they carry, a meditation on the relationship between land and water.",
  //   content:
  //     "The sea has a voice that is both constant and ever-changing. Each wave carries a story, shaped by wind, tide, and time. Standing on the shore, I found myself attuned to its rhythm, noticing how it mirrored the ebb and flow of life itself.\n\nIn the quiet moments between waves, I reflected on the communities that live by the coast. Their lives are intertwined with the sea, their traditions shaped by its moods. The sound of the sea is a reminder of resilience, adaptation, and the beauty of living in harmony with nature.\n\nAs I listened, I realized that the sea teaches us patience and presence. It invites us to slow down, to observe, and to appreciate the simple yet profound connection we share with the natural world.",
  //   // date: "December 15, 2025",
  //   readTime: "6 min read",
  //   category: "Essay",
  //   author: "General Exhibit",
  //   image: "/SA1.jpg",
  //   gallery: [
  //     "/SA2.jpg",
  //     "/SA3.jpg",
  //     "/SA4.jpg",
  //     "/SA5.jpg",
  //     "/SA6.jpg",
  //   ],
  // },

  // {
  //   id: "story-05",
  //   title: "Coastal Colors: A Visual Journey",
  //   excerpt:
  //     "A photographic exploration of the vibrant hues and textures found along the coastline, capturing the essence of coastal life.",
  //   content:
  //     "The coast is a canvas painted with colors that shift with the light and the seasons. From the deep blues of the ocean to the warm tones of sandy beaches, each scene tells a story of place and time.\n\nThrough my lens, I sought to capture the interplay of color and texture that defines coastal landscapes. The weathered wood of piers, the intricate patterns of shells, and the ever-changing sky all contribute to a rich visual tapestry.\n\nThis journey was not just about photography; it was about immersing myself in the environment, observing the subtle details that often go unnoticed, and sharing those moments through images that evoke emotion and connection.",
  //   // date: "November 30, 2025",
  //   readTime: "8 min read",
  //   category: "Photography",
  //   author: "General Exhibit",
  //   image: "/SA1.jpg",
  //   gallery: [
  //     "/SA2.jpg",
  //     "/SA3.jpg",
  //     "/SA4.jpg",
  //     "/SA5.jpg",
  //     "/SA6.jpg",
  //   ],
  // },

];

