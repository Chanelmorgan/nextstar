"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import styles from "./entry.module.css";

export default function EntryPage() {
  return (
    <main className={styles.entryPage}>
      <Hero
        title="Entry Information"
        text="Everything you need to know about entering Next Star Dance Competition, including fees, deadlines, and registration instructions."
      />

      {/* ENTRY FEES & TIMINGS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Entry Fees & Timings</h2>
        <ul className={styles.list}>
          <li>⭐️ Solos – 2.5 mins max – £20</li>
          <li>⭐️ Duets/Trios – 3 mins max – £15 per dancer</li>
          <li>⭐️ Groups – 4 mins max – £11 per dancer</li>
        </ul>
      </section>

      {/* DEPOSITS & DEADLINES */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>Deposits and Entry Deadlines</h2>
        <p>
          Full payment is due 8 weeks before the competition date. All music must
          be uploaded via Dance Bug 8 weeks before the competition date.
        </p>
        <p>
          The full competition schedule will be emailed to studios 2 weeks before
          the competition.
        </p>
      </section>

      {/* HOW TO ENTER */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How to Enter</h2>
        <p>
          To register, simply click the button below to access Dance Bug. Make sure to check
          the About page for all categories and age ranges before entering.
        </p>
        <p>
          Please read the{" "}
          <Link href="/rules" className={styles.link}>
            Rules & Terms and Conditions
          </Link>{" "}
          before submitting your entry.
        </p>
        <Link href="/dance-bug" className={styles.cta}>
          Go to Dance Bug
        </Link>
      </section>
    </main>
  );
}