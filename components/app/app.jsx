import React from 'react';
import Sidebar from '../sidebar/sidebar';
import { useGlobalState } from '../../context/global/globalProvider';
import PropTypes from 'prop-types';
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

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
};

export default App;
