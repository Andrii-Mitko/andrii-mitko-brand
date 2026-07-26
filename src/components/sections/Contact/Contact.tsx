import Link from "next/link";
import {
  FaEnvelope,
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

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
          title="Let's Build Something Great"
          description="I'm open to Full Stack JavaScript Developer opportunities and freelance projects. Let's discuss how I can contribute to your team."
        />

        <Card>
          <div className={styles.body}>
            <div className={styles.info}>
              <h3>Get in touch</h3>

              <p>
                Whether you`re looking for a developer, have a project in mind
                or want to collaborate, I`d be happy to hear from you.
              </p>
            </div>

            <div className={styles.links}>
              <Link
                href="mailto:andreymit123@gmail.com"
                className={styles.link}
              >
                <FaEnvelope aria-hidden="true" />
                <span>andreymit123@gmail.com</span>
              </Link>

              <Link
                href="https://t.me/Andrii_And"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaTelegramPlane aria-hidden="true" />
                <span>@Andrii_And</span>
              </Link>

              <Link
                href="https://github.com/Andrii-Mitko"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/andrii-mitko/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaLinkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </Link>
            </div>

            <div className={styles.actions}>
              <Button href="mailto:andreymit123@gmail.com" variant="primary">
                Send Email
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
