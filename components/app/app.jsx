import React from 'react';
import Sidebar from '../sidebar/sidebar';
import { useGlobalState } from '../../context/global/globalProvider';
import styles from './app.module.scss';

function App({ Component, pageProps }) {
  const { hideSidebar } = useGlobalState();

  return (
    <div className={styles.container}>
      <div className={!hideSidebar ? styles.sidebar : styles.sidebarCollapsed}>
        <Sidebar />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
