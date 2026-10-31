"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { resumeOptions } from "@/data/resume";

import styles from "./MobileMenu.module.css";

type Props = {
  onClose: () => void;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileMenu({ onClose }: Props) {
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const menu = menuRef.current;

    if (!menu) return;

    const focusableElements =
      menu.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstElement.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
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
        transition={{ duration: 0.3, ease: "easeOut" }}
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
            <a
              href="https://github.com/Andrii-Mitko"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              GitHub
            </a>
          </li>
        </ul>

        <p className={styles.groupTitle}>Resume</p>

        <ul className={styles.list}>
          {resumeOptions.map((option) => (
            <li key={option.href}>
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
}
