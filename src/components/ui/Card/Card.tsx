import type { ReactNode } from "react";

import styles from "./Card.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.body}>{children}</div>
    </article>
  );
}
