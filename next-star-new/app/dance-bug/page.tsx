import Link from "next/link";
import styles from "./dance-bug.module.css";

export default function DanceBugPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <h1>Dance Bug Link Coming Soon</h1>

        <p>
          The Dance Bug link is not available from the website yet.
        </p>

        <a
  href="mailto:Info@nextstardancecompetition.co.uk?subject=Dance%20Bug%20Link%20Request"
  style={{
    color: "purple",
    fontWeight: "700",
    textDecoration: "underline",
    fontSize: "1.2rem"
  }}
>
  Info@nextstardancecompetition.co.uk
</a>
        <div className={styles.buttons}>
          <Link href="/entry" className={styles.primaryButton}>
            Back to Entry
          </Link>

          <Link href="/" className={styles.secondaryButton}>
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}