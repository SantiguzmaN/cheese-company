import React, { useEffect, useState } from 'react';
import { listExpenses } from '../../actions/expensesActions';
import Table from '../../components/table/table';
import i18n from '../../i18n';

const Expenses = () => {
  const text = <h3>{i18n.t('loading_info')}</h3>;
  const [view, setView] = useState(text);
  const [attributes, setAttributes] = useState([]);
  const [columns, setColumns] = useState([]);

  const findExpenses = () => {
    listExpenses().then(data => {
      const att = data.map(data => data.attributes);
      setAttributes(att);
    });
  };

  useEffect(() => {
    if (attributes[0]) {
      const temp = [];
      for (var key in attributes[0]) {
        temp.push({
          name: i18n.t(`${key}`),
          selector: row => {
            row.key = key;
            return row.key;
          },
          sortable: true
        })
      }
      setColumns(temp);
    }
  }, [attributes]);

  useEffect(() => {
    console.log('attr: ', attributes);
    if (columns[0]) setView(<Table columns={columns} attributes={attributes} />);
  }, [columns]);

  useEffect(() => {
    findExpenses();
  }, []);

  return (
    <div >
      {view}
    </div>
  );
};

export default Expenses;
