"use client";
import Container from "../../layout/Container/Container";
import styles from "./Hero.module.css";
import Button from "../../ui/Button/Button";
import HeroImage from "./HeroImage/HeroImage";
import { motion } from "framer-motion";
import ResumeDropdown from "@/components/ui/ResumeDropdown/ResumeDropdown";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <motion.div className={styles.wrapper}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <span className={styles.eyebrow}>👋 Hi, I`m Andrii</span>

            <h1 className={styles.title}>Full Stack JavaScript Developer</h1>

            <p className={styles.description}>
              I build modern, scalable web applications with React, Next.js,
              TypeScript and Node.js. Focused on clean architecture, performance
              and great user experience.
            </p>

            <div className={styles.actions}>
              <Button href="#projects" variant="secondary">
                View Projects
              </Button>

              <ResumeDropdown />
            </div>
          </motion.div>
          <HeroImage />
        </motion.div>
      </Container>
    </section>
  );
}
