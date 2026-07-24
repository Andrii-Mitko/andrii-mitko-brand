import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "@/components/layout/Container/Container";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.info}>
            <h2 className={styles.name}>Andrii Mitko</h2>

            <p className={styles.description}>
              Full Stack JavaScript Developer
            </p>

            <p className={styles.text}>
              Building modern, fast and scalable web applications with React,
              Next.js, TypeScript and Node.js.
            </p>
          </div>

          <nav className={styles.socials} aria-label="Social links">
            <Link href="https://github.com/Andrii-Mitko" target="_blank">
              <FaGithub />
              <span>GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/andrii-mitko/"
              target="_blank"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </Link>

            <Link href="mailto:andreymit123@gmail.com">
              <FaEnvelope />
              <span>Email</span>
            </Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Andrii Mitko</p>

          <p>Built with Next.js, React & TypeScript</p>
        </div>
      </Container>
    </footer>
  );
}
