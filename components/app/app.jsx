import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Spinner from '../spinner/spinner';
import { useGlobalState } from '../../context/global/globalProvider';
import styles from './app.module.scss';

function App({ Component, pageProps }) {
  const { hideSidebar } = useGlobalState();

  return (
    <div className={styles.container}>
      <Spinner />
      <div className={!hideSidebar ? styles.sidebar : styles.sidebarCollapsed}>
        <Sidebar />
      </div>
      <div className={!hideSidebar ? styles.board : styles.boardCollapsed}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;
