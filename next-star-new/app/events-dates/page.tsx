"use client";

import Link from "next/link";
import { EVENT_DATES } from "@/lib/constants";
import styles from "./events-dates.module.css";
import Hero from "@/components/Hero";

export default function EventDatesPage() {
  return (
    <main className={styles.eventsPage}>
      {/* HERO */}
      <Hero
        title="Event Dates"
        text="Below are our currently confirmed event dates for the upcoming season."
      />

      {/* CONFIRMED EVENTS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Confirmed Dates & Locations</h2>

        <div className={styles.grid}>
          {EVENT_DATES.map((event, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{event.location}</h3>
              <p className={styles.cardDate}>{event.date}</p>
              <p className={styles.cardVenue}>{event.venue}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MORE EVENTS */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>More Events Coming Soon</h2>
        <p>
          We are always looking to add more event dates and locations. If there
          is enough demand in an area, we would love to bring Next Star Dance
          Competition to you.
        </p>
        <p>
          Please join our mailing list to stay up to date with newly announced
          dates, venues, and important competition information.
        </p>

        <Link href="/mailing-list" className={styles.cta}>
          Join Our Mailing List
        </Link>
      </section>

      {/* PROPOSE EVENT */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Propose an Event Near You</h2>
        <p>
          If you are interested in proposing a Next Star Dance
          Competition event in your area, please get in touch with us.
        </p>
        <p>
          Email us at{" "}
          <a href="mailto:Info@nextstardancecompetition.co.uk" className={styles.link}>
            Info@nextstardancecompetition.co.uk
          </a>{" "}
          or use our{" "}
          <Link  href="/#contact" className={styles.link}>
            contact form
          </Link>
          .
        </p>
      </section>
    </main>
  );
}