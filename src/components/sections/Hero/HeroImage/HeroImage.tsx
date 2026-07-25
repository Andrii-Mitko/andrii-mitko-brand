import Image from "next/image";

import styles from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.glow} />

        <Image
          className={styles.img}
          src="/logos/me.jpg"
          alt="Andrii Mitko - Full Stack JavaScript Developer"
          width={380}
          height={380}
          priority
        />

        <div className={styles.badge}>
          <span />
          Available for work
        </div>
      </div>
    </div>
  );
}
