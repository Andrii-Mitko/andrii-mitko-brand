"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.85, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <div className={styles.glow} />

        <Image
          className={styles.img}
          src="/logos/me.webp"
          alt="Andrii Mitko - Full Stack JavaScript Developer"
          width={380}
          height={380}
          priority
          fetchPriority="high"
          sizes="(max-width:768px) 280px,
         (max-width:1279px) 320px,
         380px"
        />

        <div className={styles.badge}>
          <span />
          Available for work
        </div>
      </motion.div>
    </div>
  );
}
