import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";
import { ContactSidebar } from "./ContactSidebar";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <Section id="form" padding="no-top">
      <div className={styles.grid}>
        <ContactForm />
        <ContactSidebar />
      </div>
    </Section>
  );
}
