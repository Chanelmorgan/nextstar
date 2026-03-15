"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./mailing-list.module.css";
import Hero from "@/components/Hero";
import Link from "next/link"; 
import confetti from "canvas-confetti";

export default function MailingListPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const hasTriggeredMobileConfetti = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          address,
          phone,
          company,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Trigger confetti when subscription succeeds
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
        });

        setStatus("success");
        setMessage(data.message || "Success! Please check your email.");
        setEmail("");
        setFirstName("");
        setLastName("");
        setAddress("");
        setPhone("");
        setCompany("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  // Mobile confetti trigger on page load
  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile && !hasTriggeredMobileConfetti.current) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { x: 0.5, y: 0.3 },
      });
      hasTriggeredMobileConfetti.current = true;
    }
  }, []);

  return (
    <main className={styles.page}>
      <Hero
        title="Join Our Mailing List"
        text="Sign up to receive the latest Next Star Dance Competition updates, event dates, and special offers."
      />

      <section className={styles.formSection}>
        <h2 className={styles.formHeading}>Subscribe Now</h2>
        <p className={styles.helpText}>Enter your email below to stay up to date with all things Next Star!</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required />
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" />
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />

          <button type="submit" className={styles.cta}>
            Subscribe
          </button>
        </form>

        <p className={styles.helpText}>
          Any issues or queries email us at{" "}
          <a href="mailto:Info@nextstardancecompetition.co.uk" className={styles.link}>
            Info@nextstardancecompetition.co.uk
          </a>{" "}
          or use our{" "}
          <Link href="/#contact" className={styles.link}>
            contact form
          </Link>
          .
        </p>

        {status === "success" && message && <p className={styles.success}>{message}</p>}
        {status === "error" && message && <p className={styles.error}>{message}</p>}
      </section>
    </main>
  );
}