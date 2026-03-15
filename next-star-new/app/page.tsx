"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import Countdown from "@/components/Countdown"; 
import confetti from "canvas-confetti";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function HomePage() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [hasHovered, setHasHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleConfetti = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
    }
  };

  const handleFormConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 }, // center
    });
  };

  const handleMouseEnter = () => {
    if (!hasHovered) {
      handleConfetti();
      setHasHovered(true);
      setTimeout(() => setHasHovered(false), 1000);
    }
  };

  // Mobile confetti trigger
  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // trigger a small burst on page load
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { x: 0.5, y: 0.3 },
      });
      // Also trigger confetti at the button position on mobile on page load
      handleConfetti();
    }
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      form.reset();
      setSubmitSuccess(true);
      setHasHovered(false); // allow confetti to fire
      handleFormConfetti();
    } catch (err) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.home}>
      <div className={styles.heroExtras}>
        <Image
          src="/images/words-logo.png"
          alt="Next Star Dance Competition"
          width={500}
          height={300}
          className={styles.heroLogo}
        /> 
        <h1>The Ultimate Dance Competition</h1>
        <a
          href="/entry"
          className={styles.ctaButton}
          ref={buttonRef}
          onClick={handleConfetti}
          onMouseEnter={handleMouseEnter}
        >
          Enter Now
        </a>
      </div>

      {/* ABOUT */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <h2 className={styles.subtleHeading}>About Next Star</h2>

        <p className={styles.spacedText}>
          Welcome to Next Star Dance Competition! A brand new dance competition focused
          on giving dancers the best performance experience.
        
          Competitors will be judged by the best industry professionals, ensuring a
          fair and enjoyable day for everyone. Next Star welcomes dancers of all
          levels, offering novice and open categories in all styles of dance.

          Our competition offers a fun and safe environment for performers to showcase
          their talent. We offer numerous awards, from category
          top 3s to title and special judges awards.
        
          All Next Star events are held at theatres across the UK, with spectator tickets
          available to purchase prior to the event.
        </p>
      </section>

      {/* COUNTDOWN */}
      <section className={`${styles.sectionAlt} ${styles.bgDark}`}>
        <h2 className={styles.subtleHeading}>First Competition Countdown</h2>
        <Countdown /> 
      </section> 

      

      {/* FEATURES */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <h2 className={styles.subtleHeading}>Competition Highlights</h2>
        <div className={styles.features}>
          <div>
            <h3>🏆 Elite Judging</h3>
            <p>Industry professionals & choreographers</p>
          </div>
          <div>
            <h3>🎤 Grand Finals</h3>
            <p>Compete for a place in the ultimate finals</p>
          </div>
          <div>
            <h3>⭐ Star Awards</h3>
            <p>Special awards for performances that wow the judges</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={`${styles.sectionAlt} ${styles.bgDark}`}>
        <h2 className={styles.subtleHeading}>Get in Touch</h2>
        <div className={styles.contactContainer}>
          <form
            id="contact"
            className={`${styles.contactBox} ${styles.contactForm}`}
            onSubmit={handleContactSubmit}
          >
            <input type="text" name="name" placeholder="Name" required className={styles.inputField} />
            <input type="email" name="email" placeholder="Email" required className={styles.inputField} />
            <textarea name="message" placeholder="Message" rows={5} required className={styles.inputField} />
            {submitSuccess && (
              <p className={styles.successMessage}>
                Thank you! Your message has been sent.
              </p>
            )}
            {submitError && (
              <p className={styles.errorMessage}>
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

         <div className={`${styles.contactBox}`}>
          <h2 className={styles.subtleHeading}>Contact Us</h2>
          <div className={styles.contactContentInner}>
            <p className={styles.contactInfo}>
              SMS/Phone: <a href="tel:+447909318613">+44 7909 318 613</a>
            </p>
            <p className={styles.contactInfo}>
              Email: <a href="mailto:Info@nextstardancecompetition.co.uk">Info@nextstardancecompetition.co.uk</a>
            </p>
            <div className={styles.contactIcons}>
              <a
                href="https://www.instagram.com/nextstardancecompetition?igsh=MTI1OWpqY2JpYnNndQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/1CtF5VbkFN/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}