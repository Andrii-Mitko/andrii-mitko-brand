"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "../Container/Container";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useMobileMenu } from "./useMobileMenu";
import { navigation } from "@/data/navigation";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logos/logo-full.png"
              alt="Andrii Mitko Logo"
              width={180}
              height={48}
              priority
            />
          </Link>

          <nav className={styles.navigation}>
            <ul className={styles.nav}>
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.actions}>
            <Link
              href="https://github.com/Andrii-Mitko"
              target="_blank"
              className={styles.github}
            >
              GitHub
            </Link>

            <Link href="/resume.pdf" className={styles.resume}>
              Resume
            </Link>
          </div>
          <button
            type="button"
            className={styles.menuButton}
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>
      <AnimatePresence>
        {isOpen && <MobileMenu onClose={close} />}
      </AnimatePresence>
    </header>
  );
}
