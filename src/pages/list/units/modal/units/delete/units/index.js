import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Delete = ({
  handleDeleteToDo,
  dataId,
  handleShowHideModal,
  modalType,
}) => {
  return (
    <>
      <Modal.Body>
        You can't undo this action
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={() => handleShowHideModal(false, modalType, null)}>
          Close
        </Button>
        <Button variant="outline-danger" onClick={() => {
          handleDeleteToDo(dataId)
        }}
        >
          Delete anyway
        </Button>
      </Modal.Footer>
    </>
  )
}

Delete.propTypes = {
  handleDeteleToDo: PropTypes.func,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  dataId: PropTypes.number,
  handleShowHideModal: PropTypes.func,
}

Delete.defaultProps = {
  handleDeleteToDo: () => {},
  onHide: () => {},
  dataId: null,
  handleShowHideModal: () => {},
}

export default Delete