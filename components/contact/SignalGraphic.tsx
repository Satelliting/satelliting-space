import styles from "./SignalGraphic.module.css";

export function SignalGraphic() {
  return (
    <div className={styles.signal} aria-hidden="true">
      <span className={styles.ping} />
      <span className={styles.ping} />
      <span className={styles.ping} />
      <div className={styles.core} />
      <div className={styles.arm}>
        <span className={styles.sat} />
      </div>
    </div>
  );
}
