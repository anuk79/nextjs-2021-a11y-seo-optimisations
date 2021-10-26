import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fight inaccessibility - Home</title>
        <meta name="description" content="Game to learn accessibility - you have multiple stages where you can fight with in accessible solutions and find the accessible one" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="Fight inaccessibility game - Play now" />
        <meta name="og:description" content="Game to learn accessibility - you have multiple stages where you can fight with in accessible solutions and find the accessible one" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="https://fight-inaccessibility.vercel.app/brandImage.png" />
        <meta name="og:url" content="https://fight-inaccessibility.vercel.app/" />
      </Head>

      <header>
        <h1 className={styles.title}>
          Welcome to the game, together we fight inaccessibility
        </h1>
      </header>

      <main className={styles.main}>
        <section>
          <h2>
            Start the game? Choose level:
          </h2>
          <ul>
            <li>
              <Link href="/lowest">
                <a>Lowest (A level)</a>
              </Link>
            </li>
            <li>
              <Link href="/medium">
                <a>Medium (AA level)</a>
              </Link>
            </li>
            <li>
              <Link href="/highest">
                <a>Highest (AAA level)</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
