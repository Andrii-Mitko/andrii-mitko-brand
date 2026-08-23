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
import { useEffect, useRef, useState } from "react";
import ResumeDropdown from "@/components/ui/ResumeDropdown/ResumeDropdown";

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <Container>
          <div className={styles.inner}>
            <Link href="/" className={styles.logo} aria-label="Go to homepage">
              <Image
                src="/logos/logo-full.webp"
                alt="Andrii Mitko Logo"
                width={180}
                height={54}
                priority
              />
            </Link>

            <nav className={styles.navigation} aria-label="Primary navigation">
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
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
              >
                GitHub
              </Link>

              <ResumeDropdown />
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              className={styles.menuButton}
              onClick={toggle}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              onClose={() => {
                close();
                menuButtonRef.current?.focus();
              }}
            />
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
