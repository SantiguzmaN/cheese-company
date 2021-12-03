import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import FilterTable from './FilterTable';

const Table = ({ columns, data }) => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const paginationOptions = [10, 20, 30, 40, 50, 100];

  const customStyles = {
    headRow: {
      style: {
        border: 'none'
      }
    },
    headCells: {
      style: {
        color: '#202124',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    rows: {
      highlightOnHoverStyle: {
        borderBottomColor: '#FFFFFF',
        borderRadius: '25px',
        outline: '1px solid #FFFFFF'
      },
      style: {
        minHeight: '60px' // override the row height
      }
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        textAlign: 'center'
      }
    }
  };

  const conditionalRowStyles = [
    {
      when: row => row.id % 2 == 0,
      style: { backgroundColor: '#999999' }
    },
    {
      when: row => row.id % 2 != 0,
      style: { backgroundColor: '#CCCCCC' }
    }
  ];

  const filteredItems = data.filter(
    item => JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return <FilterTable onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      paginationPerPage="10"
      paginationRowsPerPageOptions={paginationOptions}
      customStyles={customStyles}
      highlightOnHover
      conditionalRowStyles={conditionalRowStyles}
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default Table;
