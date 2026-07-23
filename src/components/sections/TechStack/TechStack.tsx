import Container from "@/components/layout/Container/Container";
import styles from "./TechStack.module.css";

import { technologies } from "@/data/technologies";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      key: "frontend",
    },
    {
      title: "Backend",
      key: "backend",
    },
    {
      title: "Database",
      key: "database",
    },
    {
      title: "Tools",
      key: "tools",
    },
  ] as const;
  return (
    <section className={styles.section} id="tech-stack">
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Technologies</p>

          <h2 className={styles.title}>Tech Stack</h2>

          <p className={styles.description}>
            Technologies and tools I use to build modern web applications.
          </p>
        </header>

        {categories.map((category) => (
          <div key={category.key} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>

            <div className={styles.grid}>
              {technologies
                .filter((technology) => technology.category === category.key)
                .map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <article key={technology.id} className={styles.card}>
                      <Icon className={styles.icon} />

                      <span className={styles.name}>{technology.name}</span>
                    </article>
                  );
                })}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
