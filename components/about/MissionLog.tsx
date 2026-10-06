import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { missionLog } from "@/content/about";
import styles from "./MissionLog.module.css";

export function MissionLog() {
  return (
    <Section padding="no-top">
      <SectionHead title="Mission log" description="How Satelliting got off the ground." />
      <ol className={styles.log}>
        {missionLog.map((entry) => (
          <li key={entry.title} className={styles.entry}>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
