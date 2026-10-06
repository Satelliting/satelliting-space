import type { ReactNode } from "react";

const icons = {
  code: (
    <>
      <rect x="5" y="8" width="38" height="28" rx="4" />
      <path d="M16 42h16M24 36v6M13 20l5 5-5 5M22 30h8" />
    </>
  ),
  growth: (
    <>
      <path d="M8 38l10-12 8 7 14-19" />
      <path d="M32 14h8v8" />
    </>
  ),
  shield: (
    <>
      <path d="M24 5l16 6v12c0 10-7 17-16 20C15 40 8 33 8 23V11z" />
      <path d="M17 24l5 5 9-10" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type ServiceIconName = keyof typeof icons;

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {icons[name]}
    </svg>
  );
}
