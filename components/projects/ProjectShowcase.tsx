import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import styles from "./ProjectShowcase.module.css";

type ProjectShowcaseProps = {
  id: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  image: string;
  imageAlt: string;
  tags: string[];
  /** Mirrors the layout (screenshot on the right) on desktop. */
  flip?: boolean;
};

export function ProjectShowcase({
  id,
  title,
  description,
  href,
  linkLabel = "Visit live site",
  image,
  imageAlt,
  tags,
  flip,
}: ProjectShowcaseProps) {
  return (
    <article id={id} className={flip ? `${styles.proj} ${styles.flip}` : styles.proj}>
      <div className={styles.shot}>
        <div className={styles.frame}>
          <BrowserFrame src={image} alt={imageAlt} sizes="(max-width: 900px) 100vw, 600px" />
        </div>
      </div>
      <div>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button href={href} target="_blank" rel="noopener noreferrer">
          {linkLabel}
        </Button>
      </div>
    </article>
  );
}
