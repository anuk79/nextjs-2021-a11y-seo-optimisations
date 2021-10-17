import Head from 'next/head';
import GameOptionsForm from "../../components/GameOptionsForm";
import styles from "../../styles/Home.module.css";
import Layout from '../../components/layout';

export default function Lowest() {
    return (
      <Layout>
        <Head>
            <title>Fight inaccessibility - Lowest level</title>
            <meta 
            name="description" 
            content="Lowest level of game - questions related to WCAG A level conformance" />
        </Head>
        <section  className={styles.gameSection}>
            <h2>Game on - you are playing the Lowest level</h2>
            <GameOptionsForm
            questions={[
                {
                    label: 'Do you add text alternatives for images?',
                    options: [
                        { value: 0, label: 'What is text alternatives?', id: '1_1' },,
                        { value: 0, label: 'I add some random text so that lighthouse is green.', id: '1_2' },,
                        { value: 10, label: 'Yes, I always add meaningful alternative text for descriptive images, and empty string for decorative images.', id: '1_3' },
                    ]
                },
                {
                    label: 'What tag do you use for creating buttons?',
                    options: [
                        { value: 0, label: 'Divs, divs everywhere', id: '2_1' },,
                        { value: 10, label: 'button tags for button', id: '2_2' },,
                    ]
                },
                {
                    label: 'Do you title all your pages?',
                    options: [
                        { value: 0, label: 'What do you mean?', id: '3_1' },,
                        { value: 1, label: 'Yes, I use one title for all pages', id: '3_2' },,
                        { value: 10, label: 'Yes, I use customised titles, tailored for each page', id: '3_3' },,
                    ]
                }
                
            ]} />
        </section>
      </Layout>
    )
}




{/* <Head>
            <title>Fight inaccessibility - Lowest level</title>
            <meta 
            name="description" 
            content="Lowest level of game - questions related to WCAG A level conformance" />
        </Head> */}