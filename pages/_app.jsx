import React, { useEffect } from 'react';
import ExpensesProvider from '../context/expensesProvider';
import Sidebar from "../components/sidebar/sidebar";
import GlobalStateProvider, { useGlobalState } from '../context/globalStateProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { hideSidebar } = useGlobalState();
  useEffect(() => {
    console.log(hideSidebar, 'hide???')
  }, [hideSidebar]);

  return (
    <GlobalStateProvider>
      <ExpensesProvider>
        <div className="container">
          <div className={!hideSidebar ? "sidebar" : "sidebarCollapsed"}>
            <Sidebar />
          </div>
          <div className="layout">
            <Component {...pageProps} />
          </div>
        </div>
      </ExpensesProvider>
    </GlobalStateProvider>
  );
}

export default MyApp
