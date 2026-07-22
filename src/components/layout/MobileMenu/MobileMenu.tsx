import { motion } from "framer-motion";
import Link from "next/link";

import { navigation } from "@/data/navigation";

import styles from "./MobileMenu.module.css";

type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.nav
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
            <Link href="/resume.pdf" onClick={onClose}>
              Resume
            </Link>
          </li>
        </ul>
      </motion.nav>
    </motion.div>
  );
}
