import React from 'react';
import GlobalStateProvider from '../context/global/globalProvider';
import LoadingProvider from '../context/loading/loadingProvider';
import App from '../components/app/app';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <GlobalStateProvider>
        <App Component={Component} pageProps={pageProps} />
      </GlobalStateProvider>
    </LoadingProvider>
  );
}

export default MyApp;
