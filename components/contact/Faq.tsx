import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { faq } from "@/content/contact";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <Section id="faq" padding="no-top">
      <SectionHead title="Before you launch" description="Quick answers to common questions." />
      <div className={styles.faq}>
        {faq.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
