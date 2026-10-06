import styles from "./MarqueeTicker.module.css";

type MarqueeTickerProps = {
  lanes: { items: readonly string[]; variant?: "solid" | "outline" }[];
};

export function MarqueeTicker({ lanes }: MarqueeTickerProps) {
  return (
    <div className={styles.ticker} aria-hidden="true">
      {lanes.map(({ items, variant = "solid" }) => (
        <div
          key={items[0]}
          className={variant === "outline" ? `${styles.lane} ${styles.outline}` : styles.lane}
        >
          {/* Duplicated so the -50% slide loops seamlessly */}
          {[...items, ...items].map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
