import Container from "@/components/layout/Container/Container";

import { projects } from "./data";
import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>My Work</p>

          <h2 className={styles.title}>Projects</h2>

          <p className={styles.description}>
            A selection of projects I have built using modern web technologies.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
