import type { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  /** "no-top" suits a section that follows another padded section; "none" removes all padding. */
  padding?: "default" | "no-top" | "none";
  children: ReactNode;
};

export function Section({ id, padding = "default", children }: SectionProps) {
  return (
    <section id={id} className={styles[padding]}>
      <Container>{children}</Container>
    </section>
  );
}
