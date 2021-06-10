import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import NotificationContext from '../store/notification-context';
import useNotification from '../hooks/useNotification';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const contextNotification = useNotification();
  return (
    <NotificationContext.Provider value={contextNotification}>
      <Layout>
        <Head>
          <title>Camera App</title>
          <meta name="description" content="NextJS Camera App" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContext.Provider>
  );
}

export default MyApp;
