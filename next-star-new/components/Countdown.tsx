"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

const FINALE_DATE = new Date("2026-09-13T09:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  const [prevTime, setPrevTime] = useState(timeLeft);
  const [flip, setFlip] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = FINALE_DATE.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft((prev) => {
        const newTime = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        };

        const newFlip = {} as typeof flip;
        (Object.keys(newTime) as Array<keyof typeof newTime>).forEach((key) => {
          newFlip[key] = newTime[key] !== prev[key];
        });
        setFlip(newFlip);
        setPrevTime(prev);

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown}>
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className={styles.timeBox}>
          <div className={styles.flipCard}>
            {/* Front = previous value */}
            <div className={styles.flipCardFront}>{prevTime[label as keyof typeof prevTime]}</div>
            {/* Back = current value */}
            <div className={styles.flipCardBack}>{value}</div>
            {/* Overlay flip animation */}
            {flip[label as keyof typeof flip] && (
              <div className={`${styles.flipOverlay}`}></div>
            )}
          </div>
          <small className={styles.timeLabel}>{label}</small>
        </div>
      ))}
    </div>
  );
}