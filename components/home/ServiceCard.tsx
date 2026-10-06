import { ServiceIcon, type ServiceIconName } from "./ServiceIcon";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ServiceIconName;
  accent: "sky" | "green";
};

export function ServiceCard({ title, description, icon, accent }: ServiceCardProps) {
  return (
    <div className={`${styles.card} ${styles[accent]}`}>
      <ServiceIcon name={icon} className={styles.icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
