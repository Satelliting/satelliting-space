export const aboutHero = {
  tag: "About Satelliting",
  title: "A small crew with a big mission.",
  lede: "We're a remote-first web studio that designs and builds fast, modern websites for businesses that want to be found, trusted, and remembered.",
};

export const constellation = {
  label:
    "A constellation connecting our values: clarity, craft, speed, care, and trust",
  stars: [
    { label: "Clarity", x: 60, y: 300, r: 6, labelX: 22, labelY: 340 },
    { label: "Craft", x: 150, y: 150, r: 6, labelX: 120, labelY: 122 },
    { label: "Speed", x: 290, y: 230, r: 8, labelX: 262, labelY: 266 },
    { label: "Care", x: 380, y: 90, r: 6, labelX: 352, labelY: 64 },
    { label: "Trust", x: 400, y: 320, r: 5, labelX: 372, labelY: 358 },
  ],
  // Pairs of indexes into `stars`
  links: [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
  ],
} as const;

export const statement = {
  lead: "Great websites aren't about flashy effects.",
  rest: "They're about making it easy for the right people to find you, understand you, and get in touch.",
};

export const values = [
  {
    title: "Clarity",
    description:
      "Plain language, clear layouts, and no jargon. You'll always know what's happening and why.",
  },
  {
    title: "Craft",
    description:
      "Clean, accessible code and thoughtful design details that hold up on every device.",
  },
  {
    title: "Speed",
    description:
      "Fast-loading sites and quick turnarounds, because momentum matters at launch.",
  },
  {
    title: "Care",
    description:
      "We treat your business like our own and stay close after the site goes live.",
  },
];

export const crew: {
  name: string;
  role: string;
  bio: string[];
  skills: string[];
  accent: "green" | "sky";
}[] = [
  {
    name: "Jordan",
    role: "Founder and lead",
    bio: [
      "Jordan started Satelliting to give small and mid-sized businesses the polished, high-performing website that usually comes with an agency budget. He leads the studio and builds every site, from first line of code to launch day.",
      "Expect direct, hands-on attention from the person doing the work.",
    ],
    skills: ["Full-stack development", "Web design", "Hosting", "SEO"],
    accent: "green",
  },
  {
    name: "Tim",
    role: "Product design and management",
    bio: [
      "Tim shapes how a project looks, feels, and flows. He turns your goals into clear plans, wireframes, and priorities, then keeps every project on schedule and on target.",
      "He's the reason projects feel organized, and why launches land on time.",
    ],
    skills: [
      "Product design",
      "Project management",
      "UX planning",
      "Client communication",
    ],
    accent: "sky",
  },
];

export const missionLog = [
  {
    title: "Liftoff",
    description:
      "Satelliting LLC launched with a simple idea: build websites that are as good for the business as they are to look at.",
  },
  {
    title: "First orbit",
    description:
      "We delivered our first client sites across Georgia, from antique malls to auction houses to infrastructure suppliers.",
  },
  {
    title: "Expanding the fleet",
    description:
      "We grew our services to cover design, development, hosting, and long-term maintenance.",
  },
  {
    title: "Next destination",
    description:
      "Your project. Tell us where you want to go and we'll plot the course.",
  },
];
