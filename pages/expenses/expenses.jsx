import React, { useEffect, useState } from 'react';
import { listExpenses } from '../../actions/expensesActions';
import Table from '../../components/dataTable/dataTable';
import i18n from '../../i18n';

const Expenses = () => {
  const text = <h3>{i18n.t('loading_info')}</h3>;
  const [view, setView] = useState(text);
  const [info] = useState([]);

  useEffect(() => {
    listExpenses().then(data => {
      if (data) {
        data.forEach(data => {
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


  return (
    <div >
      {view}
    </div>
  );
};

export default Expenses;
