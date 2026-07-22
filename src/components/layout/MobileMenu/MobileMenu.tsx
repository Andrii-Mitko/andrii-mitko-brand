import Link from "next/link";
import styles from "./MobileMenu.module.css";
import { navigation } from "@/data/navigation";



type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {navigation.map((item) => (
          <li key={item.label}>
            <Link href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          </li>
        ))}

        <li>
          <Link href="https://github.com/Andrii-Mitko" target="_blank">
            GitHub
          </Link>
        </li>

        <li>
          <Link href="/resume.pdf">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
