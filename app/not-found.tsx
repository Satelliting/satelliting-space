import type { Metadata } from "next";
import { OrbitGraphic } from "@/components/home/OrbitGraphic";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageHero
      tag="Error 404"
      title="Lost in space."
      lede="We couldn't find the page you were looking for. It may have moved, or the link may be mistyped."
      primaryCta={{ label: "Back to home", href: "/" }}
      secondaryCta={{ label: "See our work", href: "/projects" }}
      visual={<OrbitGraphic />}
    />
  );
}
