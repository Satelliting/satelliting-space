export type ProjectCategory = "b2c" | "b2b" | "software";

export const categories: { id: ProjectCategory; label: string }[] = [
  { id: "b2c", label: "B2C" },
  { id: "b2b", label: "B2B" },
  { id: "software", label: "Software" },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  /** Defaults to "Visit live site" */
  linkLabel?: string;
  image: string;
  imageAlt: string;
  category: ProjectCategory;
  /** Short descriptor shown next to the category label. */
  tag: string;
  /** Shown on the landing page. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "antiques",
    title: "Big Shanty Antiques",
    description:
      "A Georgia-based antique mall featuring a wide range of vintage treasures, collectibles, and unique finds from local vendors.",
    href: "https://bigshantyantique.com",
    image: "/images/projects/bigShantyAntiques.jpg",
    imageAlt: "Screenshot of the Big Shanty Antiques website, a Georgia antique mall",
    category: "b2c",
    tag: "Retail",
    featured: true,
  },
  {
    id: "lighting",
    title: "DOT Lighting GA",
    description:
      "Your go-to source for high-quality lighting for DOT Transportation roads, bridges, and other infrastructure projects.",
    href: "https://dotlightingga.com",
    image: "/images/projects/dotLightingGA.jpg",
    imageAlt: "Screenshot of the DOT Lighting GA website, a DOT infrastructure lighting supplier",
    category: "b2b",
    tag: "Infrastructure",
    featured: true,
  },
  {
    id: "auction",
    title: "Big Shanty Auction",
    description:
      "Georgia's trusted furniture auction company, specializing in quality pieces at unbeatable prices.",
    href: "https://bigshantyauction.com",
    image: "/images/projects/bigShantyAuction.jpg",
    imageAlt: "Screenshot of the Big Shanty Auction website, a Georgia furniture auction company",
    category: "b2c",
    tag: "Auction",
    featured: true,
  },
  {
    id: "estate-sales",
    title: "Big Shanty Estate Sales",
    description:
      "Professional estate sale services across Georgia, helping families downsize or liquidate with care and expertise.",
    href: "https://bigshantyestatesales.com",
    image: "/images/projects/bigShantyEstateSales.jpg",
    imageAlt: "Screenshot of the Big Shanty Estate Sales website, a Georgia estate sale service",
    category: "b2c",
    tag: "Estate sales",
  },
  {
    id: "biscuits",
    title: "Big-Un's Biscuits",
    description:
      "Serving up fresh, fluffy Southern-style biscuits and hearty breakfast favorites made from scratch daily.",
    href: "https://bigunsbiscuits.com",
    image: "/images/projects/bigUnsBiscuits.jpg",
    imageAlt: "Screenshot of the Big-Un's Biscuits website, a Southern biscuit restaurant",
    category: "b2c",
    tag: "Food",
  },
  {
    id: "midjits",
    title: "MidJits",
    description:
      "A virtual world where players collect, care for, and play with adorable creatures called MidJits in a whimsical online adventure.",
    href: "https://midjits.com",
    image: "/images/projects/midjits.jpg",
    imageAlt: "Screenshot of the MidJits website, a virtual world for collecting creatures",
    category: "software",
    tag: "Gaming",
  },
  {
    id: "youtubewhat",
    title: "YouTubeWhat",
    description:
      "A lightweight JavaScript/TypeScript utility for parsing, validating, and cleaning YouTube URLs.",
    href: "https://github.com/Satelliting/YouTubeWhat",
    linkLabel: "View on GitHub",
    image: "/images/projects/youtubeWhat.png",
    imageAlt: "Screenshot of the YouTubeWhat open-source YouTube URL parsing library",
    category: "software",
    tag: "Open source",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectsHero = {
  tag: "Portfolio",
  title: "The mission archive.",
  lede: "A look at recent launches from our crew. Different industries, different goals, and one standard: sites that look sharp, load fast, and work hard.",
};

export const nextLaunch = {
  title: "Next launch: yours",
  description:
    "There's room in the archive. Tell us about your project and we'll help you get it off the ground.",
};
