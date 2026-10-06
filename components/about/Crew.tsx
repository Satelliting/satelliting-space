import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { crew } from "@/content/about";
import { MemberCard } from "./MemberCard";
import styles from "./Crew.module.css";

export function Crew() {
  return (
    <Section padding="no-top">
      <SectionHead
        title="Meet the crew"
        description="Two people, one mission: websites that work as hard as you do."
      />
      <div className={styles.grid}>
        {crew.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </Section>
  );
}
