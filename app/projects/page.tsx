import type { Metadata } from "next";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";
import { WindowStack } from "@/components/projects/WindowStack";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { projects, projectsHero } from "@/content/projects";
import { absoluteUrl, breadcrumbSchema, buildMetadata, webPageSchema } from "@/lib/seo";

const seo = {
  title: "Website Design Portfolio & Recent Projects",
  description:
    "Browse recent websites designed and built by Satelliting LLC for retail, auction, food, infrastructure, and software clients.",
  path: "/projects",
};

export const metadata: Metadata = buildMetadata(seo);

const projectList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(`/projects#${project.id}`),
    name: project.title,
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("CollectionPage", seo),
          breadcrumbSchema([{ name: "Projects", path: seo.path }]),
          projectList,
        ]}
      />
      <PageHero
        {...projectsHero}
        compact
        primaryCta={{ label: "Launch a project", href: "/contact" }}
        secondaryCta={{ label: "Meet the crew", href: "/about" }}
        visual={<WindowStack />}
      />
      <Section padding="no-top">
        <ProjectBrowser />
      </Section>
    </>
  );
}
