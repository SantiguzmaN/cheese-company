import React /**useState, useEffect, useCallback  , useCallback */ from 'react';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import moment from 'moment';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const Table = props => {
  const { SearchBar } = Search;
  const { ExportCSVButton } = CSVExport;
  const { name, columns, data } = props;
  const fecha = Date.now();
  const fechaHoy = moment(fecha).format('YYYY-MM-DD');

  const formatData = data.map(elemento => {
    return {
      ...elemento,
      date: moment(elemento.date).format('YYYY-MM-DD')
    };
  });

  console.log(formatData);

  const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="btn-group" role="group">
      {options.map(option => {
        const isSelect = currSizePerPage === `${option.page}`;
        return (
          <button
            key={option.text}
            type="button"
            onClick={() => onSizePerPageChange(option.page)}
            className={`btn ${isSelect ? 'btn-dark' : 'btn-secondary'}`}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );

  const paginationOptions = {
    sizePerPageRenderer,
    class: 'btn-dark',
    hidePageListOnlyOnePage: true,
    showTotal: true,
    hideSizePerPage: data.length <= 5,
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: '50', value: 50 },
      {
        text: 'All',
        value: data.length
      }
    ]
  };

  return (
    <ToolkitProvider
      keyField="id"
      data={formatData}
      columns={columns}
      search
      exportCSV={{
        fileName: `${name} de ${fechaHoy}.csv`,
        separator: '|',
        ignoreHeader: true,
        noAutoBOM: true
      }}
    >
      {props => (
        <>
          <h4 className="pl-2">{name}</h4>
          <SearchBar {...props.searchProps} />
          <ExportCSVButton {...props.csvProps}>Export CSV!!</ExportCSVButton>
          <BootstrapTable pagination={paginationFactory(paginationOptions)} {...props.baseProps} />
        </>
      )}
    </ToolkitProvider>
  );
};

export default Table;
