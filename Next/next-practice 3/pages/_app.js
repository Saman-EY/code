import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="descrition" content="This is Home page" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
