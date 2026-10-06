import styles from "./SectionHead.module.css";

type SectionHeadProps = {
  title: string;
  description?: string;
};

export function SectionHead({ title, description }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
