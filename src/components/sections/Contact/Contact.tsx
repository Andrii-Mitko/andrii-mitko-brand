import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "@/components/layout/Container/Container";
import Card from "@/components/ui/Card/Card";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Button from "@/components/ui/Button/Button";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let's work together"
          description="I'm currently open to Full Stack, Frontend and Backend opportunities."
        />

        <Card>
          <div className={styles.body}>
            <div className={styles.info}>
              <h3>Get in touch</h3>

              <p>
                If you have a project, job opportunity or just want to say
                hello, feel free to contact me.
              </p>
            </div>

            <div className={styles.links}>
              <Link
                href="mailto:andreymit123@gmail.com"
                className={styles.link}
              >
                <FaEnvelope />
                <span>andreymit123@gmail.com</span>
              </Link>

              <Link
                href="https://github.com/Andrii-Mitko"
                target="_blank"
                className={styles.link}
              >
                <FaGithub />
                <span>GitHub</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/andrii-mitko/"
                target="_blank"
                className={styles.link}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </Link>
            </div>

            <div className={styles.actions}>
              <Button href="mailto:andreymit123@gmail.com" variant="primary">
                Let`s Talk
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
