import Head from 'next/head';
import GameOptionsForm from "../../components/GameOptionsForm";
import styles from "../../styles/Home.module.css";
import Layout from '../../components/layout';

export default function Medium() {
    return (
      <Layout>
        <Head>
            <title>Fight inaccessibility - Medium level</title>
            <meta 
            name="description" 
            content="Medium level of game - questions related to WCAG AA level conformance" />
        </Head>
        <section  className={styles.gameSection}>
            <h2>Game on - you are playing the Medium level</h2>
            <GameOptionsForm
            questions={[
                {
                    label: 'Focus visible',
                    options: [
                        { value: 0, label: 'What is it?', id: '1_1' },,
                        { value: 0, label: 'Focus outlines make websites ugly, I use outline: none.', id: '1_2' },,
                        { value: 10, label: 'I always make sure that that focus on current interactive element is visible using outlines or custom styling.', id: '1_3' },
                    ]
                },
                {
                    label: 'Language of parts',
                    options: [
                        { value: 0, label: 'I have added language code to HTML tag, it should be enough?', id: '2_1' },,
                        { value: 10, label: 'I make sure to add language codes to sections which are in a different language than the website primary language.', id: '2_2' },,
                    ]
                },
                {
                    label: 'Audio Description (Prerecorded)',
                    options: [
                        { value: 0, label: 'I do not have time for it.', id: '3_1' },,
                        { value: 10, label: 'Yes, I add audio description for all the pre-recorded audio contents.', id: '3_2' },,
                    ]
                }
                
            ]} />
        </section>
      </Layout>
    )
}