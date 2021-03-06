import React, { useEffect, useState } from 'react';
import { listExpenses } from '../../actions/expensesActions';
import Table from '../../components/table/table';
import i18n from '../../i18n';
import { useLoadingDispatch } from '../../context/loading/loadingProvider';
import { showLoading, closeLoading } from '../../context/global/globalDispatch';

const Expenses = () => {
  const loadingDispatch = useLoadingDispatch();
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
          sortable: true
        };
      });
      setColumns(columnsObj);
    }
  }, [expenses]);

  useEffect(() => {
    if (columns[0]) {
      closeLoading(loadingDispatch);
      setView(
        <div>
          <Table columns={columns} data={expenses} />
        </div>
      );
    }
  }, [columns]);

  useEffect(() => {
    showLoading(loadingDispatch);
    listExpenses().then(data => {
      setExpenses(data.map(data => data.attributes));
    });
  }, []);

  return view;
};

export default Expenses;
