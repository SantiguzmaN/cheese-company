import React, { useEffect } from 'react';
import Sidebar from "../components/sidebar/sidebar";
import { useGlobalState } from '../context/globalStateProvider';
import '../styles/globals.css';

function Mock({ Component, pageProps }) {
  const { hideSidebar } = useGlobalState();
  useEffect(() => {
    console.log(hideSidebar, 'hide???')
  }, [hideSidebar]);

  return (
    <div className="container">
      <div className={!hideSidebar ? "sidebar" : "sidebarCollapsed"}>
        <Sidebar />
      </div>
      <div className="layout">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default Mock