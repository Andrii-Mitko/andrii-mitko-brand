"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, FileDown } from "lucide-react";
import { resumeOptions } from "@/data/resume";
import styles from "./ResumeDropdown.module.css";

export default function ResumeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        // Повертаємо фокус на кнопку для клавіатурної навігації
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        <FileDown size={18} aria-hidden="true" />
        Resume
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={
            isOpen ? `${styles.chevron} ${styles.chevronOpen}` : styles.chevron
          }
        />
      </button>

      {isOpen && (
        <ul id={menuId} className={styles.menu}>
          {resumeOptions.map((option) => (
            <li key={option.href}>
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuItem}
                onClick={() => setIsOpen(false)}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
