import { getCloudinaryAssetUrl } from "@/lib/cloudinary";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  author: string;
  image: string;
  gallery?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "story-01",
    title:
      "GE Productions Founder Selected for Video Consortium's SSP Africa 2026 Fellowship",
    excerpt:
      "GE Productions founder and lead filmmaker Jesse Otumba selected for the Video Consortium's SSP Africa 2026 fellowship supported by the Skoll Foundation.",
    content: `
**We're excited to share that Jesse Otumba**, founder and lead filmmaker at **GE Productions**, has been selected as one of 15 filmmakers from across Africa for the Video Consortium's Solutions Storytelling Project (SSP) Africa 2026.

Supported by the **Skoll Foundation**, the year-long fellowship brings together documentary filmmakers and some of Africa's most innovative social impact organizations to create compelling, solutions-focused films that inspire positive change.
![Jesse Otumba](/SSP2.jpeg)

### Partnering with Food4Education
As part of the fellowship, **Jesse has been paired with Food4Education**, an award-winning Kenyan organization transforming school feeding through innovative technology and locally sourced meals.

Together, the project will explore how scalable, community-driven solutions are improving access to nutritious meals for school children while strengthening local food systems and creating lasting social impact.

The documentary is currently in development and will follow the people, systems, and stories behind one of Africa's most impactful education and nutrition initiatives.

### About the Solutions Storytelling Project
The Solutions Storytelling Project (**SSP**) is an international fellowship by **Video Consortium** that connects regional filmmakers with social innovators across Africa, Asia, and Latin America to produce documentaries that highlight practical solutions to real-world challenges.

The 2026 African cohort includes filmmakers from Kenya, Ghana, Uganda, Rwanda, South Africa, Zambia, Malawi, Sierra Leone, Côte d'Ivoire, and the Democratic Republic of Congo. Each fellow has been paired with an organization working across sectors including health, education, climate, agriculture, and community development.

### What This Means for GE Productions
At GE Productions, we believe powerful storytelling can inspire action. Being selected for SSP Africa reflects our continued commitment to producing documentaries that combine cinematic filmmaking with meaningful social impact. Over the years, we've collaborated with NGOs, development organizations, conservation groups, and international partners to tell authentic stories that create awareness and drive change.

The fellowship also provides an opportunity to collaborate with an exceptional network of filmmakers, editors, producers, and impact organizations from across the continent while further strengthening our documentary practice.

### Looking Ahead
Production begins this year, with the documentary expected to be completed as part of the SSP Africa 2026 programme.

We're grateful to **Video Consortium**, the **Skoll Foundation**, the programme directors, and **Food4Education** for this opportunity, and we look forward to sharing updates from the journey.

### Need a documentary that creates impact?
GE Productions partners with NGOs, foundations, development agencies, and purpose-driven organizations to create cinematic documentaries that connect audiences with meaningful stories.

## Let's tell your story.`,
    readTime: "7 min read",
    author: "GE Productions",
    image: getCloudinaryAssetUrl("/SSP1.jpeg"),
  },

  {
    id: "story-02",
    title: "Empowering Coastal Communities Through Digital Tourism Platforms",
    excerpt:
      "CORDIO East Africa and GE Productions delivered community-led websites and training to support long-term, locally owned Blue Tourism in Kenya’s South Coast.",
    content: `**Client: CORDIO East Africa**

**Services: Website Design • WordPress Development • Digital Training • Technical Support**

### Building Digital Tools for Community-Led Conservation
GE Productions was contracted by CORDIO East Africa to design and deliver digital platforms and capacity-building training for community organizations participating in the Blue Tourism Initiative (BTI) along Kenya’s South Coast.

Our role extended beyond website development—we helped equip local communities with the knowledge and confidence to manage their own digital presence long after the project concludes.

### The Communities
**Kaya Kinondo Conservation and Development CBO**
A community-led organization dedicated to conserving the Kaya Kinondo Sacred Forest while promoting indigenous knowledge, cultural heritage, and sustainable nature-based tourism. The forest is home to endemic tree species, medicinal plants, birds, butterflies, and sacred cultural sites protected through generations of traditional stewardship.

**Chale Boat Operators Self Help Group**
A community organization promoting responsible marine tourism around Chale Island. Their work focuses on protecting coral reefs and coastal ecosystems while creating sustainable livelihood opportunities through eco-tourism and visitor education.

### Our Contribution
GE Productions designed and launched two tourism websites that enable the communities to showcase their destinations, conservation work, and visitor experiences.

- www.kayakinondotrails.com
- www.chaleadventures.com

Beyond the websites, we facilitated practical digital skills training covering:
- WordPress and Elementor website management
- Website security and phishing awareness
- Domain and hosting management
- Media organization and image optimization
- Content editing and page management
- Blog writing and storytelling
- Long-term website maintenance

The sessions were designed to ensure community ownership, enabling participants to independently update tourism information, publish stories, and manage their websites without relying on external developers.

### Lasting Impact
Digital sustainability is about more than building websites—it is about transferring knowledge. By combining technical development with hands-on training, the project has strengthened the ability of local conservation groups to tell their own stories, attract visitors, and promote biodiversity conservation through sustainable tourism.

As the Diani–Shimoni pilot of the Blue Tourism Initiative concludes, these digital platforms will continue serving as tools for conservation, education, and community-driven tourism in Kenya’s coastal region.

Looking to build digital platforms that create lasting impact?
Whether you’re an NGO, conservation programme, social enterprise, or community organization, GE Productions develops websites and digital experiences designed for long-term sustainability and local ownership.`,
    readTime: "7 min read",
    author: "GE Productions",
    image: getCloudinaryAssetUrl("/kayaki.jpeg"),
    gallery: [
      getCloudinaryAssetUrl("/CORDIO01.jpeg"),
      getCloudinaryAssetUrl("/CORDIO02.jpeg"),
      getCloudinaryAssetUrl("/CORDIO03.jpeg"),
      getCloudinaryAssetUrl("/CORDIO04.jpeg"),
      getCloudinaryAssetUrl("/CORDIO05.jpeg"),
      getCloudinaryAssetUrl("/CORDIO06.jpeg"),
      getCloudinaryAssetUrl("/CORDIO07.jpeg"),
    ],
  },
];