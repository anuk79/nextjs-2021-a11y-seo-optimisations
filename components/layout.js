import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Layout ({ children }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <header>
        <h1 className={styles.title}>
          <Link href="/">
            <a>
                Welcome to the game, together we fight inaccessibility
            </a>
          </Link>
        </h1>
      </header>
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Vercel
          </a>
        </div>
        <div>
          This game website is created by <a href="https://anuradhakumari.com/">Anuradha Kumari</a> to show demo for accessibility and SEO optimisations for a Next JS application.
        </div>
      </footer>
    </div>
  )
}

export default Layout;
