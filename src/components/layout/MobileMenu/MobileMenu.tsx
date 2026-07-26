import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { navigation } from "@/data/navigation";

import styles from "./MobileMenu.module.css";

type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  const menuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const menu = menuRef.current;

    if (!menu) return;

    const focusableElements = menu.querySelectorAll<HTMLElement>(
      "a, button, input, textarea, select",
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <motion.div
      className={styles.overlay}
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.nav
        ref={menuRef}
        id="mobile-menu"
        className={styles.menu}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        onClick={(event) => event.stopPropagation()}
        aria-label="Mobile navigation"
      >
        <ul className={styles.list}>
          {navigation.map((item) => (
            <li key={item.label}>
              <Link href={item.href} onClick={onClose}>
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="https://github.com/Andrii-Mitko"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              GitHub
            </Link>
          </li>

          <li>
            <a
              href="/resume/Andrii-Mitko-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              Resume
            </a>
          </li>
        </ul>
      </motion.nav>
    </motion.div>
  );
}
