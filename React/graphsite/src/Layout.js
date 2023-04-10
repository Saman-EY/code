import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
});

const Layout = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh'
        }}
      >
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </section>
    </CacheProvider>
  );
};

export default Layout;
