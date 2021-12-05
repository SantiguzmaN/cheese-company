import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const GenericModal = props => (
  <Modal show={props.show} onHide={props.modalClosed} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.children}</Modal.Body>
    <Modal.Footer>{props.footerActions}</Modal.Footer>
  </Modal>
);

GenericModal.defaultProps = {
  footerActions: <React.Fragment />
};

GenericModal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  footerActions: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default GenericModal;
