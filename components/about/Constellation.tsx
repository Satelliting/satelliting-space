import { constellation } from "@/content/about";
import styles from "./Constellation.module.css";

export function Constellation() {
  const { stars, links, label } = constellation;

  return (
    <svg className={styles.svg} viewBox="0 0 460 400" role="img" aria-label={label}>
      {links.map(([from, to], index) => (
        <path
          key={`${from}-${to}`}
          className={styles.link}
          pathLength={1}
          d={`M${stars[from].x} ${stars[from].y} L${stars[to].x} ${stars[to].y}`}
          style={{ animationDelay: `${index * 0.5}s` }}
        />
      ))}
      {stars.map((star, index) => (
        <g key={star.label}>
          <circle
            className={styles.glow}
            cx={star.x}
            cy={star.y}
            r={20}
            style={{ animationDelay: `${-((index * 0.7) % 3)}s` }}
          />
          <circle className={styles.star} cx={star.x} cy={star.y} r={star.r} />
          <text x={star.labelX} y={star.labelY}>
            {star.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
