import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span>
          &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </span>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {" | "}
          <a href="/sitemap.xml">Sitemap</a>
        </span>
      </Container>
    </footer>
  );
}
