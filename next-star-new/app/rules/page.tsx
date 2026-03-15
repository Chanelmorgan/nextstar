"use client";

import Link from "next/link";
import { RULES } from "@/lib/constants";
import styles from "./rules.module.css";
import Hero from "@/components/Hero";

export default function RulesPage() {
  return (
    <main className={styles.rulesPage}>
      <Hero title={RULES.title} text="Please read and adhere to all rules and regulations before entering." />

      {/* RULES */}
      <section className={styles.section}>
        <p className={styles.notice}>{RULES.intro}</p>

        <ul className={styles.rulesList}>
          {RULES.items.map((rule, index) => ( 
            <li key={index}>⭐️ {rule}</li>
          ))}
        </ul>

        <p className={styles.closing}>{RULES.closing}</p>

        <div className={styles.terms}>
          {/* <Link
            href={RULES.termsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.termsLink}
          >
            View Full Terms & Conditions
          </Link> */}
        </div>
      </section>
    </main>
  );
}