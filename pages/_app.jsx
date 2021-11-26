import React from 'react';
import ExpensesProvider from '../context/expensesProvider';
import GlobalStateProvider from '../context/globalStateProvider';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <ExpensesProvider>
        <Component {...pageProps} />
      </ExpensesProvider>
    </GlobalStateProvider>
  );
}

export default MyApp
