import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Card from "@/components/ui/Card/Card";
import type { Project } from "@/types/project";

import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
        {project.featured && <span className={styles.featured}>Featured</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.tags}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`${styles.tag} ${styles[tech.replace(/\W/g, "")]}`}
            >
              {tech}
            </span>
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
    </Card>
  );
}
