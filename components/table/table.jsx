import React from 'react';
import i18n from '../../i18n';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const Table = ({ columns, attributes }) => {
  const paginationOptions = [10, 20, 30, 40, 50, 100];
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

  return (
    <DataTable
      columns={columns}
      data={attributes}
      pagination
      paginationPerPage="10"
      paginationRowsPerPageOptions={paginationOptions}
      customStyles={customStyles}
    />
  );
};

Table.propTypes = {
  attributes: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default Table;
