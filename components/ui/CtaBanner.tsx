import { Button } from "./Button";
import { Section } from "./Section";
import styles from "./CtaBanner.module.css";

type CtaBannerProps = {
  title: string;
  description?: string;
  cta?: { label: string; href: string };
};

export function CtaBanner({
  title,
  description = "Tell us about your vision and we'll put together a launch plan for your goals.",
  cta = { label: "Connect with us", href: "/contact" },
}: CtaBannerProps) {
  return (
    <Section padding="none">
      <div className={styles.box}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button variant="light" href={cta.href}>
          {cta.label}
        </Button>
      </div>
    </Section>
  );
}
