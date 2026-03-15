"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import styles from "./gallery.module.css";
import Hero from "@/components/Hero";

export default function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState<string>("All");

  // Get unique events for the filter dropdown
  const events = ["All", ...Array.from(new Set(GALLERY_IMAGES.map(img => img.event)))];

  // Filter images based on selected event
  const filteredImages = selectedEvent === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.event === selectedEvent);

  // Group images by event for sections (optional)
  const imagesByEvent = filteredImages.reduce<Record<string, typeof filteredImages>>((acc, img) => {
    if (!acc[img.event]) acc[img.event] = [];
    acc[img.event].push(img);
    return acc;
  }, {});

  return (
    <main className={styles.galleryPage}>
      <Hero 
        title="Gallery" 
        text="Take a look at some of our favourite moments from Next Star Dance Competition events."
      />

      {/* FILTER */}
      <div className={styles.filter}>
        <label htmlFor="eventFilter">Filter by Event:</label>
        <select
          id="eventFilter"
          value={selectedEvent}
          onChange={e => setSelectedEvent(e.target.value)}
        >
          {events.map((event, idx) => (
            <option key={idx} value={event}>{event}</option>
          ))}
        </select>
      </div>

      {/* GALLERY SECTIONS */}
      {Object.entries(imagesByEvent).map(([event, images]) => (
        <section key={event} className={styles.gridSection}>
          {selectedEvent === "All" && <h2 className={styles.sectionTitle}>{event}</h2>}
          <div className={styles.grid}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageCard}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}