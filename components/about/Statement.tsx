import { Container } from "@/components/ui/Container";
import { statement } from "@/content/about";
import styles from "./Statement.module.css";

export function Statement() {
  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.text}>
          {statement.lead} <span>{statement.rest}</span>
        </p>
      </Container>
    </section>
  );
}
