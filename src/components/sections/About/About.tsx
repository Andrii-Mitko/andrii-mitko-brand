import Container from "@/components/layout/Container/Container";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>About Me</p>

            <h2 className={styles.title}>Full Stack JavaScript Developer</h2>

            <p className={styles.description}>
              I build modern, scalable and user-friendly web applications using
              React, Next.js, TypeScript, Node.js and MongoDB. I enjoy turning
              ideas into reliable digital products with clean code, responsive
              design and a great user experience.
            </p>

            <ul className={styles.skills}>
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Node.js & Express</li>
              <li>MongoDB & Mongoose</li>
              <li>REST API Development</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>

          <div className={styles.highlights}>
            <div className={styles.card}>
              <h3>Full Stack Development</h3>
              <p>
                Building modern web applications with React, Next.js, Node.js
                and MongoDB.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Backend Development</h3>
              <p>
                Creating REST APIs, authentication systems and database
                solutions.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Clean UI & UX</h3>
              <p>
                Developing responsive interfaces with attention to performance
                and usability.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
