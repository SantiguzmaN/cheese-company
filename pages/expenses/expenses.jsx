import React, { useEffect, useState } from 'react';
import { listExpenses } from '../../actions/expensesActions';
import Table from '../../components/table/table';
import i18n from '../../i18n';

const Expenses = () => {
  const text = <h3>{i18n.t('loading_info')}</h3>;
  const [view, setView] = useState(text);
  const [info] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [columns, setColumns] = useState([]);


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
    console.log('se ejecutoel find');
    listExpenses().then(data => {
      console.log('llego como respuesta: ', data);
      const att = data.map(data => data.attributes);
      setAttributes(att);
    });
  };


  useEffect(() => {
    console.log('att');
    if (attributes[0]) {
      console.log('atributos: ', attributes);
      const temp = [];
      attributes.forEach((attribute) => {
        for (var key in attribute) {
          temp.push({
            name: `${i18n.t(key)}`,
            selector: row => row.date,
            sortable: true
          })
        }
      })
      setColumns(temp);
    }
  }, [attributes]);

  useEffect(() => {
    if (columns[0]) console.log('columnas', columns);
  }, [columns]);

  useEffect(() => {
    console.log('va a llamar al find');
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
