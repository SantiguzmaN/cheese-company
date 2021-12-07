import React /**useState, useEffect, useCallback  , useCallback */ from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const Table = props => {
  const { SearchBar } = Search;
  const { name, createActionURL, modalProps, dropDownFields, dropDownOnChange, columns, data } = props;
  const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="btn-group" role="group">
      {options.map(option => {
        const isSelect = currSizePerPage === `${option.page}`;
        return (
          <button
            key={option.text}
            type="button"
            onClick={() => onSizePerPageChange(option.page)}
            className={`btn ${isSelect ? 'btn-primary' : 'page-link'}`}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );

  const paginationOptions = {
    sizePerPageRenderer,
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
    <ToolkitProvider keyField={props.keyField} data={data} columns={columns} search>
      {props => (
        <>
          <SearchBar {...props.searchProps} />
          <BootstrapTable pagination={paginationFactory(paginationOptions)} {...props.baseProps} />
        </>
      )}
    </ToolkitProvider>
  );
};

export default Table;
