import Link from "next/link";
import type { ReactNode } from "react";

import Card from "@/components/ui/Card/Card";

import styles from "./ContactCard.module.css";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
};

export default function ContactCard({ icon, title, value, href }: Props) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      className={styles.link}
    >
      <Card className={styles.card}>
        <div className={styles.body}>
          <div className={styles.icon}>{icon}</div>

          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{value}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
