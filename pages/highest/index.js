import Head from 'next/head';
import GameOptionsForm from "../../components/GameOptionsForm";
import styles from "../../styles/Home.module.css";
import Layout from '../../components/layout';

export default function Highest() {
    return (
      <Layout>
        <Head>
            <title>Fight inaccessibility - Highest level</title>
            <meta 
            name="description" 
            content="Highest level of game - questions related to WCAG AAA level conformance" />
        </Head>
        <section  className={styles.gameSection}>
            <h2>Game on - you are playing the Highest level</h2>
            <GameOptionsForm
            questions={[
                {
                    label: 'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
                    options: [
                        { value: 0, label: 'No, the user needs to fill all details again.', id: '1_1' },,
                        { value: 10, label: 'Yes, we make sure user does not lose filled data.', id: '1_2' },,
                    ]
                },
                {
                    label: 'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
                    options: [
                        { value: 0, label: 'The user can search for it if they want to know about it.', id: '2_1' },,
                        { value: 10, label: 'Yes, we make sure of it.', id: '2_2' },,
                    ]
                }
                
            ]} />
        </section>
      </Layout>
    )
}