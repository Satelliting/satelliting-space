import type { Metadata } from "next";
import { Constellation } from "@/components/about/Constellation";
import { Crew } from "@/components/about/Crew";
import { MissionLog } from "@/components/about/MissionLog";
import { Statement } from "@/components/about/Statement";
import { Values } from "@/components/about/Values";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { aboutHero } from "@/content/about";
import { breadcrumbSchema, buildMetadata, webPageSchema } from "@/lib/seo";

const seo = {
  title: "About Our Remote-First Web Design Studio",
  description:
    "Meet the remote-first crew behind Satelliting LLC: a small web design and development team building fast, accessible websites that orbit your brand goals.",
  path: "/about",
};

export const metadata: Metadata = buildMetadata(seo);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[webPageSchema("AboutPage", seo), breadcrumbSchema([{ name: "About", path: seo.path }])]}
      />
      <PageHero
        {...aboutHero}
        primaryCta={{ label: "Work with us", href: "/contact" }}
        secondaryCta={{ label: "See our work", href: "/projects" }}
        visual={<Constellation />}
      />
      <Statement />
      <Values />
      <Crew />
      <MissionLog />
      <CtaBanner title="Ready to plot your course?" />
    </>
  );
}
