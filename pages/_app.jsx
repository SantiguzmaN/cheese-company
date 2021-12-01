import React from 'react';
import GlobalStateProvider from '../context/global/globalProvider';
import App from '../components/app/app';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <App Component={Component} pageProps={pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp;
