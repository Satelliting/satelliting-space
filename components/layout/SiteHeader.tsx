import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NavLink } from "./NavLink";
import { site } from "@/content/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/">
          <Image src="/logo.png" alt="" width={34} height={34} priority />
          <span>{site.name}</span>
        </Link>
        <nav aria-label="Main">
          <ul className={styles.list}>
            {site.nav.map((item) => (
              <li key={item.href} className={item.hideOnMobile ? styles.hideSm : undefined}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
            <li>
              <Button size="sm" href={site.cta.href}>
                {site.cta.label}
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
