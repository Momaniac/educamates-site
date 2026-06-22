import type { ReactNode } from "react";

interface SectionWrapperProps {
  readonly children: ReactNode;
  /** Extra classes on the <section> (e.g. background, vertical padding). */
  readonly className?: string;
  /** Extra classes on the inner centered container. */
  readonly containerClassName?: string;
  readonly id?: string;
}

/**
 * SectionWrapper — consistent page section with a centered, padded container.
 * Keeps horizontal rhythm identical across every section.
 */
export function SectionWrapper({
  children,
  className = "",
  containerClassName = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={className}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>{children}</div>
    </section>
  );
}
