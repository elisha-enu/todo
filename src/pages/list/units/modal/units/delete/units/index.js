import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Delete = ({
  handleDeleteToDo,
  show,
  onHide,
  dataId,
}) => {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure want to delete?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You can't undo this action
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {
          handleDeleteToDo(dataId)
          onHide()
        }}
        >
          Delete anyway
        </Button>
        {/* <Button variant="primary" onClick={async () => {
          handleAddToDo(insertData)
          onHide()
        }}
        >
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  )
}

Delete.propTypes = {
  // getListToDo: PropTypes.func,
  // handleAddToDo: PropTypes.func,
  handleDeteleToDo: PropTypes.func,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  dataId: PropTypes.number,
}

Delete.defaultProps = {
  // getListToDo: () => {},
  // handleAddToDo: () => {},
  handleDeleteToDo: () => {},
  onHide: () => {},
  dataId: null,
}

export default Delete