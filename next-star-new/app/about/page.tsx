"use client";
import Image from "next/image";
import styles from "./about.module.css";
import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <Hero
        title="About Us"
        text="Next Star is a national dance competition celebrating creativity, performance, and talent across all dance styles and ages."
      />

      {/* OWNER SECTION */}
      {/* <section className={styles.section}>
        <h2>Meet the Owner</h2>
        <div className={styles.owner}>
          <Image
            src="/images/bianca.jpg" 
            alt="Photo of Owner Bianca Matthews"
            width={200}
            height={200}
            className={styles.ownerImage}
          />
          <div className={styles.ownerInfo}>
            <h3>Bianca Matthews</h3>
            <p>
              Founder and Director of Next Star Dance Competition. Bianca has
              been mentoring dancers nationwide, inspiring
              young talent to reach their full potential on stage.
            </p>
          </div>
        </div>
      </section> */}

      {/* AGE DIVISIONS */}
        <section className={`${styles.sectionAlt} ${styles.ageSection}`}>
            <h2>Age Divisions</h2>
            <p>Next Star welcomes dancers of all ages! Here are our divisions:</p>
            <ul className={styles.ageList}>
                <li>⭐️ Tiny Star: Age 4 and Under</li>
                <li>⭐️ Mini Star: Age 5 to 8</li>
                <li>⭐️ Junior Star: Age 9-11</li>
                <li>⭐️ Inter Star: Age 12-15</li>
                <li>⭐️ Senior Star: Age 15 and Over</li>
            </ul>
            <p>Entry is determined by the age of the dancer on the day of the competition.</p>
      </section>

      {/* AWARDS */}
      <section className={styles.section}>
        <h2>Awards</h2>
        <p>
          Dancers are recognized for their talent, creativity, and performance.<br/>
          Awards include:
        </p>
        <ul className={styles.list}>
          <li>⭐️ 1st to 3rd place in each style and age section</li>
          <li>⭐️ Top 3 highest scoring solos, duet/trio and groups in each age group</li>
          <li>⭐️ Solo Title Winners</li>
          <li>⭐️ Special Judges Awards</li>
          <li>⭐️ Choreography Awards</li>
          <li>⭐️ Highest Scoring Studio Of the Day</li>
          <li>⭐️ Medals for all groups</li>
          <li>⭐️ Trophies for Highest score award winners</li>
        </ul>
      </section>

      {/* CATEGORIES */}
      <section className={styles.sectionAlt}>
        <h2>Dance Categories</h2>
        <p>We welcome dancers from all styles, including:</p>
        <ul className={styles.list}>
          <li>⭐️ Solos</li>
          <li>⭐️ Duets/Trios</li>
          <li>⭐️ Small Groups(less than 9 dancers)</li>
          <li>⭐️ Large Groups(9 or more dancers)</li>
        </ul>
      </section>
    </main>
  );
}