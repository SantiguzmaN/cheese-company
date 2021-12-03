import React, { useState, useEffect, useCallback /** , useCallback */ } from 'react';
import Link from 'next/link';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import DropDown from './dropDown';
import Modal from './modal';

// TODO: Inject the actions column component from the parent and avoid the dependency
import OrganizationActionsButtons from '../organizations/organizationActionsButtons';
import UserActionsButtons from '../users/userActionsButtons';

const Table = props => {
  const { SearchBar } = Search;
  const { name, createActionURL, modalProps, dropDownFields, dropDownOnChange, list } = props;
  const [modal, setModal] = useState(<React.Fragment />);
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItem] = useState(null);

  const openModal = i => {
    setItem(i);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const buildModalBody = useCallback(
    item => {
      return Object.keys(modalProps.labelsMapping).map(key => {
        let valueToShow = item[key];

        const isBooleanField = typeof valueToShow === 'boolean';
        if (isBooleanField) {
          valueToShow = valueToShow ? 'Yes' : 'No';
        }

        return (
          <div key={key} hidden={isBooleanField || item[key] ? false : true}>
            <strong>{`${modalProps.labelsMapping[key]}:`} </strong> {valueToShow}
          </div>
        );
      });
    },
    [modalProps]
  );

  const buildModalFooterActions = useCallback(
    item => {
      return Object.keys(modalProps.footerActions).map(key => {
        const currentAction = modalProps.footerActions[key];
        const expresionRegular = eval(`/${currentAction.keysToReplace.join('|')}/g`);
        let replaceMapping = {};
        currentAction.keysToReplace.map(field => {
          replaceMapping[field] = item[field];
        });
        const to = currentAction.to.replace(expresionRegular, m => replaceMapping[m]);

        return (
          <Link key={key} className={currentAction.cssClasses} to={to}>
            {currentAction.icon}
          </Link>
        );
      });
    },
    [modalProps]
  );

  const buildCarets = order => {
    if (!order)
      return (
        <span>
          <FaCaretUp />
          <FaCaretDown />
        </span>
      );
    else if (order === 'asc')
      return (
        <span>
          <FaCaretUp />
        </span>
      );
    else if (order === 'desc')
      return (
        <span>
          <FaCaretDown />
        </span>
      );
    return <></>;
  };

  const defaultColumnProps = {
    align: 'left'
  };

  const defaultColumnSortingProps = {
    ...defaultColumnProps,
    sort: true,
    sortCaret: order => {
      return buildCarets(order);
    }
  };

  const columns = props.columns.map(col => {
    if (col.dataField === 'actions') {
      return { ...col, ...defaultColumnProps };
    }
    return { ...col, ...defaultColumnSortingProps };
  });

  const buildActions = obj => {
    switch (name) {
      case 'Organization':
        return <OrganizationActionsButtons organization={obj} />;
      case 'User':
        return <UserActionsButtons currentUser={props.currentUser} user={obj} />;
      default:
        return <React.Fragment />;
    }
  };

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

  useEffect(() => {
    if (itemSelected !== null) {
      const item = list[itemSelected];
      setModal(
        <Modal
          title={`${item[modalProps.itemIdentifierField]} information`}
          show={showModal}
          modalClosed={closeModal}
          footerActions={buildModalFooterActions(item)}
        >
          {buildModalBody(item)}
        </Modal>
      );
    }
  }, [buildModalBody, buildModalFooterActions, list, showModal, itemSelected, modalProps.itemIdentifierField]);

  const buildData = list => {
    const paginationOptions = {
      sizePerPageRenderer,
      hidePageListOnlyOnePage: true,
      showTotal: true,
      hideSizePerPage: list.length <= 5,
      sizePerPageList: [
        { text: '5', value: 5 },
        { text: '10', value: 10 },
        { text: '50', value: 50 },
        {
          text: 'All',
          value: list.length
        }
      ]
    };
    const data = list.map((obj, i) => {
      const row = {
        ...obj,
        [modalProps.itemIdentifierField]: (
          <a href="#" onClick={() => openModal(i)}>
            {obj[modalProps.itemIdentifierField]}
          </a>
        )
      };

      if (dropDownFields) {
        let initialValue = '';

        Object.keys(dropDownFields).map(key => {
          initialValue = dropDownFields[key][obj[key]];
          row[key] = (
            <DropDown
              item={obj}
              dropDownField={key}
              initialValue={initialValue}
              options={dropDownFields[key]}
              onChange={dropDownOnChange}
            />
          );
        });
      }
      row.actions = buildActions(obj);
      return row;
    });

    return (
      <>
        <ToolkitProvider search keyField={props.keyField} data={data} columns={columns}>
          {props => (
            <>
              <SearchBar {...props.searchProps} />
              <Link className="btn btn-success ml-xl-1 ml-0" to={createActionURL}>
                Add New {name}
              </Link>
              <BootstrapTable hover pagination={paginationFactory(paginationOptions)} {...props.baseProps} />
            </>
          )}
        </ToolkitProvider>
        {modal}
      </>
    );
  };

  return buildData(props.list);
};

export default Table;
