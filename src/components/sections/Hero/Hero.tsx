import Container from "../../layout/Container/Container";
import styles from "./Hero.module.css";
import Button from "../../ui/Button/Button";
import HeroImage from "./HeroImage/HeroImage";
import TechStack from "../TechStack/TechStack";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>👋 Hi, I`m Andrii</span>

            <h1 className={styles.title}>Full Stack JavaScript Developer</h1>

            <p className={styles.description}>
              I build modern, scalable web applications with React, Next.js,
              TypeScript and Node.js. Focused on clean architecture, performance
              and great user experience.
            </p>

            <div className={styles.actions}>
              <Button href="#projects">View Projects</Button>

              <Button href="/resume/Andrii-Mitko-CV.pdf" variant="secondary">
                Download CV
              </Button>
            </div>

            <TechStack />
          </div>
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
