import styles from "./SectionTitle.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className={styles.wrapper}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

      <h2 className={styles.title}>{title}</h2>

      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
