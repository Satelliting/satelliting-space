import type { ReactNode } from "react";
import styles from "./WindowStack.module.css";

function Win({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={`${styles.win} ${className}`}>
      <div className={styles.bar}>
        <i />
        <i />
        <i />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

function Line({ width, tall }: { width: string; tall?: boolean }) {
  return <div className={tall ? `${styles.ln} ${styles.tall}` : styles.ln} style={{ width }} />;
}

/** Decorative stack of wireframe browser windows for the projects hero. */
export function WindowStack() {
  return (
    <div className={styles.stack} aria-hidden="true">
      <Win className={styles.w2}>
        <div className={styles.tiles}>
          <b />
          <b />
          <b />
        </div>
        <Line width="80%" />
        <Line width="55%" />
      </Win>
      <Win className={styles.w1}>
        <div className={styles.blk} />
        <Line width="70%" />
        <Line width="90%" />
        <Line width="45%" />
      </Win>
      <Win className={styles.w3}>
        <Line width="60%" tall />
        <Line width="92%" />
        <Line width="75%" />
        <div className={styles.cta} />
      </Win>
    </div>
  );
}
