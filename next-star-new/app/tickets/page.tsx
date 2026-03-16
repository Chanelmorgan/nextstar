"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import styles from "./tickets.module.css";
import { VENUES } from "@/lib/constants";

export default function TicketsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("");
  const router = useRouter();
  const venues = VENUES;

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedVenue("");
  }

  function handleVenueSelect() {
    if (selectedVenue) {
      const venue = venues.find((v) => v.name === selectedVenue);
      if (venue) {
          alert(`${venue.name} link is not available yet. Please contact Info@nextstardancecompetition.co.uk for more information. `);
      // router.push(venue.link); <-- disabled until real links exist
      }
    }
  }

  return (
    <main className={styles.ticketsPage}>
      <Hero
        title="Spectator Tickets"
        text="Families, friends, and supporters are welcome to attend our events and cheer on the dancers as they compete on stage."
      />

      {/* TICKET INFO */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ticket Information</h2>
        <p>
          Spectator tickets are available for each Next Star Dance Competition
          event. Tickets grant entry to the theatre for the full day of the
          competition.
        </p>
        <ul className={styles.list}>
          <li>⭐️ Tickets are required for all spectators</li>
          <li>⭐️ Children performing do not require spectator tickets</li>
          <li>⭐️ Limited seating is available at each venue</li>
          <li>⭐️ Tickets are valid for the selected event date only</li>
        </ul>
      </section>

      {/* HOW TO BUY */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>How to Buy Tickets</h2>
        <p>
          Tickets can be purchased online in advance. We strongly recommend
          booking early to avoid disappointment.
        </p>
        <ol className={styles.listOrdered}>
          <li>Select your event date</li>
          <li>Choose the number of spectator tickets required</li>
          <li>Complete checkout to secure your seats</li>
        </ol>

        <button onClick={openModal} className={styles.cta}>
          Buy Spectator Tickets
        </button>
      </section>

      {/* EVENT DAY INFO */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Event Day Information</h2>
        <ul className={styles.list}>
          <li>⭐️ Tickets may be checked at the door</li>
          <li>⭐️ Photography and filming policies will be outlined on the day</li>
          <li>⭐️ Theatre etiquette must be followed at all times</li>
        </ul>
        <p>
          For full event rules and theatre guidelines, please visit our{" "}
          <Link href="/rules" className={styles.link}>
            Rules page
          </Link>
          .
        </p>
      </section>

      {/* Venue Selection Modal */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="venue-modal-title"
          >
            <h3 id="venue-modal-title">Select Venue</h3>
            <select
              value={selectedVenue}
              onChange={(e) => setSelectedVenue(e.target.value)}
              className={styles.select}
            >
              <option value="" disabled>
                -- Choose a venue --
              </option>
              {venues.map((venue) => (
                <option key={venue.name} value={venue.name}>
                  {venue.name}
                </option>
              ))}
            </select>
            <div className={styles.modalButtons}>
              <button
                onClick={handleVenueSelect}
                disabled={!selectedVenue}
                className={styles.cta}
              >
                Go
              </button>
              <button onClick={closeModal} className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}