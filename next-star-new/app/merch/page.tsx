"use client";

import Image from "next/image";
import { MERCH_ITEMS } from "@/lib/constants";
import styles from "./merch.module.css";
import Hero from "@/components/Hero";

export default function MerchPage() {
  return (
    <main className={styles.merchPage}>
      <Hero 
        title="Merchandise"
        text="Represent Next Star Dance Competition with our official merchandise."
      />

      {/* MERCH GRID */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {MERCH_ITEMS.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price}</p>

                <button className={styles.button}>
                  Enquire to Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}