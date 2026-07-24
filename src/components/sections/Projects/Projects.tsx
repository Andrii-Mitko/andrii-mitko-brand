import Container from "@/components/layout/Container/Container";

import { projects } from "./data";
import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./Projects.module.css";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>My Work</p>

          <SectionTitle
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A selection of applications I have built using modern web technologies."
          />
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
