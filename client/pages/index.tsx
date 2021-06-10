import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomeScreen from '../components/home/HomeScreen';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Camera App</title>
        <meta name="description" content="Amazing Camera App take screenshot and get a pdf document" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </div>
  );
}
