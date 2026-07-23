import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import type { Project } from "@/types/project";

import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.tags}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className={styles.links}>
          {project.github && (
            <Link href={project.github} target="_blank" className={styles.link}>
              <FaGithub size={18} />
              GitHub
            </Link>
          )}

          {project.live && (
            <Link href={project.live} target="_blank" className={styles.link}>
              <ExternalLink size={18} />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
