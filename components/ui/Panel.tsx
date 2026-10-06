import type { ReactNode } from "react";
import styles from "./Panel.module.css";

type PanelProps = {
  title?: string;
  description?: string;
  /** Smaller padding and a level-3 heading, for sidebars. */
  compact?: boolean;
  children: ReactNode;
};

export function Panel({ title, description, compact, children }: PanelProps) {
  const Heading = compact ? "h3" : "h2";

  return (
    <div className={compact ? `${styles.panel} ${styles.compact}` : styles.panel}>
      {title && <Heading>{title}</Heading>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
