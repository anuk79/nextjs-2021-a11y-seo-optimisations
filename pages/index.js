import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/layout';

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

      <Layout>
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
      </Layout>
    </div>
  )
}
