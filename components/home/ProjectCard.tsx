import { BrowserFrame } from "@/components/ui/BrowserFrame";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export function ProjectCard({ title, description, href, image, imageAlt }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <BrowserFrame src={image} alt={imageAlt} sizes="(max-width: 900px) 100vw, 380px" />
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href} target="_blank" rel="noopener noreferrer">
          Visit {title}
        </a>
      </div>
    </article>
  );
}
