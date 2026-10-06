import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { steps } from "@/content/home";
import { ProcessStep } from "./ProcessStep";
import styles from "./Process.module.css";

export function Process() {
  return (
    <Section id="process" padding="no-top">
      <SectionHead title="From idea to orbit in four steps" />
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <ProcessStep key={step.title} number={index + 1} {...step} />
        ))}
      </ol>
    </Section>
  );
}
