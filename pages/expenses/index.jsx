import React, { useEffect, useState } from 'react';
import { listExpenses } from '../../actions/expensesActions';
import { useGlobalState } from '../../context/global/globalProvider';
import Table from '../../components/table/table';
import i18n from '../../i18n';
import styles from './expenses.module.scss';

const Expenses = () => {
  const { hideSidebar } = useGlobalState();
  const text = <h3>{i18n.t('loading_info')}</h3>;
  const [view, setView] = useState(text);
  const [expenses, setExpenses] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (expenses[0]) {
      const columnsObj = Object.keys(expenses[0]).map(key => {
        return {
          name: i18n.t(`${key}`),
          selector: row => row[key],
          sortable: true,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        };
      });
      setColumns(columnsObj);
    }
  }, [expenses]);

  useEffect(() => {
    if (columns[0])
      setView(
        <div className={hideSidebar ? styles.table : styles.tableCollapsed}>
          <Table columns={columns} data={expenses} />
        </div>
      );
  }, [columns, hideSidebar]);

  useEffect(() => {
    listExpenses().then(data => {
      setExpenses(data.map(data => data.attributes));
    });
  }, []);

  return view;
};

export default Expenses;
