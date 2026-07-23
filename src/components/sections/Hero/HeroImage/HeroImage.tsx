import Image from "next/image";

import styles from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.img}
        src="/logos/me.jpg"
        alt="Andrii Mitko"
        width={260}
        height={260}
        priority
      />
    </div>
  );
}
