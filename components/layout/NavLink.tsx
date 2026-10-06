"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./NavLink.module.css";

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      className={styles.link}
      href={href}
      aria-current={pathname === href ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
