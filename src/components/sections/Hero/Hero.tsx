import Container from "../../layout/Container/Container";
import styles from "./Hero.module.css";
import Button from "../../ui/Button/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Full Stack Developer</span>

          <h1 className={styles.title}>
            Full Stack Developer <br />
            <span>
              Building modern web applications with React, Next.js and Node.js.
            </span>
          </h1>

          <p className={styles.description}>
            ✔ React ✔ Next.js ✔ TypeScript ✔ Node.js
          </p>

          <div className={styles.actions}>
            <Button href="#projects">View Projects</Button>

            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
