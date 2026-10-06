import { site } from "./site";

export const contactHero = {
  tag: "Contact",
  title: "Open a channel.",
  lede: "Tell us what you're building and where you want it to go. We'll read every message and reply with next steps, not a sales pitch.",
};

export const formIntro = {
  title: "Send a transmission",
  description: "The more you tell us, the better our first reply will be.",
};

export const needs = [
  "New website",
  "Redesign",
  "E-commerce",
  "SEO",
  "Hosting and support",
  "Other",
];

export const timelines = ["Flexible", "Within 1 month", "1 to 3 months", "3 to 6 months"];

export const emailPanel = {
  title: "Prefer email?",
  description: "Skip the form and write to us directly.",
  address: site.email,
};

export const nextSteps = [
  { title: "We read it", description: "The team reviews your message together." },
  {
    title: "We reply",
    description: "You get a response with questions and a suggested approach.",
  },
  {
    title: "We plot the course",
    description: "A short call, then a clear plan, timeline, and quote.",
  },
];

export const faq = [
  {
    question: "How soon will I hear back?",
    answer:
      "We aim to reply within one business day. If it's urgent, say so in your message.",
  },
  {
    question: "Do you work with clients outside Georgia?",
    answer:
      "Yes. We're remote-first, so we work with teams anywhere through email, video calls, and shared project boards.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "It depends on scope. After we hear about your goals, we'll send a clear quote with no surprise fees.",
  },
  {
    question: "Can you take over an existing site?",
    answer:
      "Absolutely. We can redesign, speed up, host, or simply maintain a site you already have.",
  },
];
