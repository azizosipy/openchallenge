import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>About Us</h3>
          <p>We are dedicated to raising awareness about the importance of ocean conservation and the fascinating similarities between the human body and the ocean.</p>
        </div>
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/quiz">Quizzes</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <ul className={styles.socials}>
            <li><Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
            <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
            <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2024 Save Our Oceans. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
