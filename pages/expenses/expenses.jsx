import React, { useEffect, useState } from 'react';
import { listExpenses } from '../../actions/expensesActions';
import Table from '../../components/dataTable/dataTable';
import i18n from '../../i18n';
import styles from './expenses.module.css';
import Sidebar from "../../components/sidebar/sidebar";
import { useGlobalState, useGlobalDispatch } from '../../context/globalStateProvider';

const Expenses = () => {
  const text = <h3>{i18n.t('loading_info')}</h3>;
  const globalDispatch = useGlobalDispatch();
  const { hideSidebar } = useGlobalState();
  const [view, setView] = useState(text);
  const [info] = useState([]);

  useEffect(() => {
    listExpenses().then(data => {
      if (data) {
        data.forEach(data => {
          console.log('data: ', data);
          info.push(data.attributes);
        });
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setView(<Table info={info} />);
    }, 2000);
  }, [info]);

  useEffect(() => {
    console.log('oeee:', hideSidebar)
  }, [hideSidebar]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.layout}>
        {view}
      </div>
    </div>
  );
};

export default Expenses;
