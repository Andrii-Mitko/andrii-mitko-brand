import Container from "@/components/layout/Container/Container";
import Card from "@/components/ui/Card/Card";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { education } from "./data";

import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Learning"
          title="Education"
          description="My education and continuous learning journey in software development."
        />

        <div className={styles.grid}>
          {education.map((item) => (
            <Card key={item.school}>
              <span className={styles.period}>{item.period}</span>

              <h3 className={styles.cardTitle}>{item.school}</h3>

              <h4 className={styles.degree}>{item.degree}</h4>

              <p className={styles.description}>{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
