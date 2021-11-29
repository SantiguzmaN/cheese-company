import React from 'react';
import i18n from '../../i18n';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const Table = ({ info }) => {
  // console.log('llego esta info', info);
  const paginationOptions = [10, 20, 30, 40, 50, 100];
  const dataTable = info.map(element => {
    return {
      date: element.date,
      etype: element.expense_type,
      price: element.price,
      supplier: element.supplier
    };
  });

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px' // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px'
      }
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px'
      }
    }
  };

  const columns = [
    {
      name: `${i18n.t('date')}`,
      selector: row => row.date,
      sortable: true
    },
    {
      name: `${i18n.t('e_type')}`,
      selector: row => row.etype,
      sortable: true
    },
    {
      name: `${i18n.t('price')}`,
      selector: row => row.price,
      sortable: true
    },
    {
      name: `${i18n.t('supplier')}`,
      selector: row => row.supplier,
      sortable: true
    }
  ];

  return (
    <div className="views-container">
      {dataTable ? (
        <DataTable
          columns={columns}
          data={dataTable}
          pagination
          paginationPerPage="10"
          paginationRowsPerPageOptions={paginationOptions}
          customStyles={customStyles}
        />
      ) : (
        <h1>tabla</h1>
      )}
    </div>
  );
};

Table.propTypes = {
  info: PropTypes.array.isRequired
};

export default Table;