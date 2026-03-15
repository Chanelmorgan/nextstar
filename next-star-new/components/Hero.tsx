"use client";

import React from "react";
import styles from "./Hero.module.css"; 

interface HeroProps {
  title: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ title, text }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroText}>{text}</p>
      </div>
    </section>
  );
};

export default Hero;