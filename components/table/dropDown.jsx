import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DropDown = props => {
  const { item, initialValue, options, onChange } = props;
  const [dropDownValue, setDropdownValue] = useState(initialValue.text);

  const changeValue = (newValue, newValueIdentifier) => {
    onChange(item, initialValue.identifier, newValueIdentifier);
    setDropdownValue(newValue);
  };

  const buildOptions = () => {
    return Object.keys(options).map(key => {
      return (
        <Dropdown.Item
          data-id={options[key].identifier}
          key={key}
          eventKey={key}
          onClick={e => {
            changeValue(e.target.textContent, e.target.dataset.id);
          }}
        >
          {options[key].text}
        </Dropdown.Item>
      );
    });
  };

  return (
    <DropdownButton title={dropDownValue} variant="secondary">
      {buildOptions()}
    </DropdownButton>
  );
};

DropDown.propTypes = {
  item: PropTypes.object.isRequired,
  initialValue: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropDown;
