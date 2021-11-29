import React, { useEffect } from 'react';
import Sidebar from "../sidebar/sidebar";
import { useGlobalState } from '../../context/globalStateProvider';
import styles from './app.module.scss';

function App({ Component, pageProps }) {
  const { hideSidebar } = useGlobalState();
  useEffect(() => {
    console.log(hideSidebar, 'hide???')
  }, [hideSidebar]);

  return (
    <div className={styles.container}>
      <div className={!hideSidebar ? styles.sidebar : styles.sidebarCollapsed}>
        <Sidebar />
      </div>
      <div className={styles.layout}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;
