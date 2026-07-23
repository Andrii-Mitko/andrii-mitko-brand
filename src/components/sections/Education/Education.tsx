import Container from "@/components/layout/Container/Container";

import { education } from "./data";

import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <Container>
        <h2 className={styles.title}>Education</h2>

        <div className={styles.grid}>
          {education.map((item) => (
            <article key={item.school} className={styles.card}>
              <span className={styles.period}>{item.period}</span>

              <h3>{item.school}</h3>

              <h4>{item.degree}</h4>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
