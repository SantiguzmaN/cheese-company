import React from 'react';
import ExpensesProvider from '../context/expensesProvider';
import GlobalStateProvider, { useGlobalState } from '../context/globalStateProvider';
import App from '../components/app/app';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const { hideSidebar } = useGlobalState();

  return (
    <GlobalStateProvider>
      <ExpensesProvider>
        <App Component={Component} pageProps={pageProps} />
      </ExpensesProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
