"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../../lib/constants";
import styles from "./faq.module.css";
import Hero from "../../components/Hero";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className={styles.faqPage}>
      <Hero
        title="Frequently Asked Questions"
        text="Find answers to common questions about Next Star Dance Competition."
      />

      <section className={styles.faqSection}>
        {FAQ_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.accordionButton}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
            <div className={styles.accordionContent}>
              {/* Render JSX directly, no <p> or dangerouslySetInnerHTML */}
              {item.answer}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}