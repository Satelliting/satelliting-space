import styles from "./OrbitGraphic.module.css";

export function OrbitGraphic() {
  return (
    <div className={styles.orbit} aria-hidden="true">
      <div className={styles.ring} />
      <div className={`${styles.ring} ${styles.r2}`} />
      <div className={`${styles.ring} ${styles.r3}`} />
      <div className={styles.planet} />
      <div className={styles.arm}>
        <span className={styles.sat} />
      </div>
      <div className={`${styles.arm} ${styles.a2}`}>
        <span className={styles.sat} />
      </div>
      <div className={`${styles.arm} ${styles.a3}`}>
        <span className={styles.sat} />
      </div>
    </div>
  );
}
