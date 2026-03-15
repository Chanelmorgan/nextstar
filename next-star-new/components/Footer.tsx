import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '../lib/constants';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/words-logo.png"
            alt="Next Star Logo"
            width={150}
            height={75}
            style={{ cursor: 'pointer' }} 
          />
        </Link>

        {/* Brand */}
        <p className={styles.brand}>Next Star Dance Competition</p>

        {/* Navigation links */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className={styles.copy}>
          © {new Date().getFullYear()} Next Star. All rights reserved. Designed & Developed by C Morgan.
        </p>
      </div>
    </footer>
  );
}