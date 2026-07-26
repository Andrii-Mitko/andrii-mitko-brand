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
      </motion.div>
    </div>
  );
}
