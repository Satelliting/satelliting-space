import type { ReactNode } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Tag } from "./Tag";
import styles from "./PageHero.module.css";

type Cta = { label: string; href: string };

type PageHeroProps = {
  tag: string;
  title: ReactNode;
  lede: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** Decorative graphic shown beside the copy (stacked above it on mobile). */
  visual: ReactNode;
  /** Tighter vertical padding, for pages where content follows immediately. */
  compact?: boolean;
};

export function PageHero({
  tag,
  title,
  lede,
  primaryCta,
  secondaryCta,
  visual,
  compact,
}: PageHeroProps) {
  return (
    <section className={compact ? `${styles.hero} ${styles.compact}` : styles.hero}>
      <Container className={styles.inner}>
        <div>
          <Tag>{tag}</Tag>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lede}>{lede}</p>
          {(primaryCta || secondaryCta) && (
            <div className={styles.actions}>
              {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button variant="ghost" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className={styles.visual}>{visual}</div>
      </Container>
    </section>
  );
}
