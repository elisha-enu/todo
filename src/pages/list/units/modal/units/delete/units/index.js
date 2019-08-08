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
    <>
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
      </Modal.Footer>
    </>
  )
}

Delete.propTypes = {
  handleDeteleToDo: PropTypes.func,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  dataId: PropTypes.number,
}

Delete.defaultProps = {
  handleDeleteToDo: () => {},
  onHide: () => {},
  dataId: null,
}

export default Delete