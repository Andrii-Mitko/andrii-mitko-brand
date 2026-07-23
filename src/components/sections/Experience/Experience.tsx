import Container from "@/components/layout/Container/Container";
import type { Experience } from "@/types/experience";
import { experience } from "./data";

import styles from "./Experience.module.css";
import Card from "@/components/ui/Card/Card";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <Container>
        <h2 className={styles.title}>Experience</h2>

        <div className={styles.timeline}>
          {experience.map((item) => (
            <Card key={item.title}>
              <span className={styles.period}>{item.period}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
