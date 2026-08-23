"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, FileDown } from "lucide-react";
import styles from "./ResumeDropdown.module.css";
import Link from "next/link";

const resumeOptions = [
  { label: "ATS (EN)", href: "/resume/resume_ats.pdf" },
  { label: "Standard (EN)", href: "/resume/resume_standart_en.pdf" },
  { label: "Стандарт (UA)", href: "/resume/resume_standart_ua.pdf" },
];

export default function ResumeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <FileDown size={18} />
        Resume
        <ChevronDown
          size={16}
          className={
            isOpen ? `${styles.chevron} ${styles.chevronOpen}` : styles.chevron
          }
        />
      </button>

      {isOpen && (
        <ul className={styles.menu} role="menu">
          {resumeOptions.map((option) => (
            <li key={option.href} role="none">
              <Link
                role="menuitem"
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuItem}
                onClick={() => setIsOpen(false)}
              >
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
