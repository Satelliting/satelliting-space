import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { MarqueeTicker } from "@/components/home/MarqueeTicker";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { Services } from "@/components/home/Services";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { tickerLanes } from "@/content/home";
import { site } from "@/content/site";
import { openGraphImages, twitterImages } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: site.title,
    description: site.description,
    images: openGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: twitterImages,
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <MarqueeTicker
        lanes={[{ items: tickerLanes.primary }, { items: tickerLanes.outline, variant: "outline" }]}
      />
      <Services />
      <Process />
      <Projects />
      <CtaBanner title="Ready to build something extraordinary?" />
    </>
  );
}
