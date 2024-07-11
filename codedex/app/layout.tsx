"use client";

import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode } from 'react';

import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
      </Head>
      <body>
        <div>
          <header className={styles.header}>
            <nav className={styles.navbar}>
              <Link href="/" className={styles.logo}>
                MyWebsite
              </Link>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Menu</button>
                <div className={styles.dropdownContent}>
                  <Link href="/calendar">
                    Calendar
                  </Link>
                  <Link href="/menu">
                    Menu
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main>
            {children}
          </main>
          <footer className={styles.footer}>
            <p>© 2024 MyWebsite. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;