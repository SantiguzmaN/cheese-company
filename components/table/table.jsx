import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const Table = ({ columns, data }) => {
  const paginationOptions = [10, 20, 30, 40, 50, 100];
  const customStyles = {
    headRow: {
      style: {
        border: 'none'
      }
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: 'rgb(230, 244, 244)',
        borderBottomColor: '#FFFFFF',
        borderRadius: '25px',
        outline: '1px solid #FFFFFF'
      },
      style: {
        minHeight: '72px', // override the row height
        textAlign: 'center'
      }
    },
    headCells: {
      style: {
        color: '#202124',
        fontSize: '14px',
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

  const conditionalRowStyles = [
    {
      when: row => row.id % 2 == 0,
      style: { backgroundColor: '#9AC1E5' }
    },
    {
      when: row => row.id % 2 != 0,
      style: { backgroundColor: '#C0CFDD' }
    }
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationPerPage="10"
      paginationRowsPerPageOptions={paginationOptions}
      customStyles={customStyles}
      highlightOnHover
      conditionalRowStyles={conditionalRowStyles}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default Table;
