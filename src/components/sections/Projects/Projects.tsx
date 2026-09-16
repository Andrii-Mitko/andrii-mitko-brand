"use client";

import { useState } from "react";

import Container from "@/components/layout/Container/Container";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";

import { projects } from "./data";
import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./Projects.module.css";

const INITIAL_VISIBLE_PROJECTS = 3;
const PROJECTS_PER_LOAD = 3;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
  const [newProjectsStartIndex, setNewProjectsStartIndex] = useState(
    INITIAL_VISIBLE_PROJECTS,
  );

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  const handleShowMore = () => {
    setNewProjectsStartIndex(visibleCount);

    setVisibleCount((currentCount) =>
      Math.min(currentCount + PROJECTS_PER_LOAD, projects.length),
    );
  };

  return (
    <section className={styles.section} id="projects">
      <Container>
        <header className={styles.header}>
          <SectionTitle
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A selection of applications I have built using modern web technologies."
          />
        </header>

        <div className={styles.grid}>
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={
                index >= newProjectsStartIndex ? styles.cardReveal : undefined
              }
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.showMore}
              onClick={handleShowMore}
            >
              Показати більше
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
