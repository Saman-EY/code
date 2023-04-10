import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Loading from '../components/templates/Loading';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  let [isLoading, setIsLoading] = useState(false);
  let router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <Layout>
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </Layout>
  );
}

export default MyApp;
