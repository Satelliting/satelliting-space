import styles from "./ProcessStep.module.css";

type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <li className={styles.step}>
      <b className={styles.number}>{number}</b>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
