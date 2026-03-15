"use client";

import Link from "next/link";
import styles from "./coming-soon.module.css";
import Hero from "@/components/Hero";

export default function ComingSoonPage() {
  return (
    <main className={styles.comingSoonPage}>
      <Hero
        title="Coming Soon - Merch Page"
        text="Next Star Dance Competition merch page is sadly under construction. We're preparing something exciting! Stay tuned and be the first to know."
      />

      <section className={styles.messageSection}>
        <div className={styles.imageSide}>
          <img src="/images/coming-soon.png" alt="Coming Soon" />
        </div>

        <div className={styles.textSide}>
          <p className={styles.comingSoonText}>
            This page is under construction. For updates, newsletters, and event announcements, click the button below to join our mailing list.
          </p>
          <Link href="/mailing-list" className={styles.ctaButton}>
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}