import React, { useEffect, useState } from 'react';
import { listExpenses } from '../../actions/expensesActions';
import Table from '../../components/table/table';
import i18n from '../../i18n';

const Expenses = () => {
  const text = <h3>{i18n.t('loading_info')}</h3>;
  const [view, setView] = useState(text);
  const [info] = useState([]);
  const [atributes] = useState([]);

            // data.forEach(element => {
          //   console.log(element.date.key)
          //   // const element = {
          //   //   date: element.date,
          //   //   etype: element.expense_type,
          //   //   price: element.price,
          //   //   supplier: element.supplier
          //   // }
          // })
          // data.forEach(element => {
          //   console.log('data', element.date.key)
          //   const elementoo = {
          //     date: element.date,
          //     etype: element.expense_type,
          //     price: element.price,
          //     supplier: element.supplier
          //   }
          // })

  const findExpenses = () => {
    console.log('entro al find');
    listExpenses().then(data => {
      if (data[0]) {
        data.forEach(data => {
          console.log(data);
          atributes = (...atributes, data.attributes);
        });
      } else {
        findExpenses();
      }
    });
  };

  useEffect(() => {
    findExpenses();
  }, []);

  useEffect(() => {

    setView(<Table info={info} />);
  }, [info]);

  return (
    <div >
      {view}
    </div>
  );
};

export default Expenses;
