import { Panel } from "@/components/ui/Panel";
import { emailPanel, nextSteps } from "@/content/contact";
import styles from "./ContactSidebar.module.css";

export function ContactSidebar() {
  return (
    <aside className={styles.side}>
      <Panel compact title={emailPanel.title} description={emailPanel.description}>
        <a className={styles.mail} href={`mailto:${emailPanel.address}`}>
          {emailPanel.address}
        </a>
      </Panel>
      <Panel compact title="What happens next">
        <ol className={styles.next}>
          {nextSteps.map((step) => (
            <li key={step.title}>
              <span>
                <strong>{step.title}</strong>
                {step.description}
              </span>
            </li>
          ))}
        </ol>
      </Panel>
    </aside>
  );
}
