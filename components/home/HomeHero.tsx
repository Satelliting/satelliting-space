import { PageHero } from "@/components/ui/PageHero";
import { OrbitGraphic } from "./OrbitGraphic";
import { MiniPlanet } from "./MiniPlanet";

export function HomeHero() {
  return (
    <PageHero
      tag="Remote-first web studio"
      title={
        <>
          Launch
          <MiniPlanet /> stellar web experiences.
        </>
      }
      lede="We design and build fast, modern websites that orbit your brand goals. From concept to deployment, we partner with you to create digital products that delight and perform."
      primaryCta={{ label: "Launch a project", href: "/contact" }}
      secondaryCta={{ label: "View our work", href: "/projects" }}
      visual={<OrbitGraphic />}
    />
  );
}
