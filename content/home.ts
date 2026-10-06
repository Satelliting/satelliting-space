import type { ServiceIconName } from "@/components/home/ServiceIcon";

export const services: {
  title: string;
  description: string;
  icon: ServiceIconName;
  accent: "sky" | "green";
}[] = [
  {
    title: "Design and build",
    description:
      "Custom, responsive websites that look sharp on every screen and load quickly.",
    icon: "code",
    accent: "sky",
  },
  {
    title: "Grow your reach",
    description:
      "Search-friendly structure and clear calls to action help the right customers find you.",
    icon: "growth",
    accent: "green",
  },
  {
    title: "Host and maintain",
    description:
      "Reliable hosting, updates, and support after launch, so your site stays fast and secure.",
    icon: "shield",
    accent: "sky",
  },
];

export const steps = [
  {
    title: "Brief",
    description: "We learn your goals, audience, and what success looks like.",
  },
  {
    title: "Design",
    description: "You see the look and layout before we write the final code.",
  },
  {
    title: "Build",
    description: "We develop, test on real devices, and refine with your feedback.",
  },
  {
    title: "Launch",
    description: "We go live, then stay on hand for updates and support.",
  },
];

export const tickerLanes = {
  primary: [
    "Houston, we have a great website",
    "Fast launches, zero drama",
    "Built remote, shipped on time",
    "Pixels with a purpose",
  ],
  outline: [
    "Your brand, in orbit",
    "Responsive on every screen",
    "Small team, big thrust",
    "Ready for liftoff",
  ],
};
