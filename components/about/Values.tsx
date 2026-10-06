import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { values } from "@/content/about";
import styles from "./Values.module.css";

export function Values() {
  return (
    <Section>
      <SectionHead
        title="How we navigate"
        description="The principles behind every project, big or small."
      />
      <div className={styles.grid}>
        {values.map((value) => (
          <div key={value.title} className={styles.card}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
