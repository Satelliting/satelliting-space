import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { services } from "@/content/home";
import { ServiceCard } from "./ServiceCard";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Section id="services">
      <SectionHead
        title="Everything your site needs to take off"
        description="One small team handles the whole mission, so nothing gets lost between design and launch."
      />
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
}
