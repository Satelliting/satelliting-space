import { Button } from "@/components/ui/Button";
import { nextLaunch } from "@/content/projects";
import styles from "./NextLaunch.module.css";

export function NextLaunch() {
  return (
    <div className={styles.box}>
      <div>
        <h2>
          <span className={styles.dot} />
          {nextLaunch.title}
        </h2>
        <p>{nextLaunch.description}</p>
      </div>
      <Button href="/contact">Start a project</Button>
    </div>
  );
}
