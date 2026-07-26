import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Section.module.css";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section className={`${styles.section} ${className}`} {...props}>
      {children}
    </section>
  );
}
