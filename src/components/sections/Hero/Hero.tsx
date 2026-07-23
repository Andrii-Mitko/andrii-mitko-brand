import Container from "../../layout/Container/Container";
import styles from "./Hero.module.css";
import Button from "../../ui/Button/Button";
import HeroImage from "./HeroImage/HeroImage";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>👋 Hi, I`m</span>

            <h1 className={styles.title}>Andrii Mitko</h1>

            <h2 className={styles.subtitle}>Full Stack Developer</h2>

            <p className={styles.description}>
              I build fast, accessible and scalable web applications using
              React, Next.js, TypeScript and Node.js.
            </p>

            <div className={styles.actions}>
              <Button href="#projects">View Projects</Button>

              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
