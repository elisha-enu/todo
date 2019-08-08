import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import Form from 'react-bootstrap/Form'
import Create from './create';
import Preview from './preview';
import Delete from './delete';
import Modal from 'react-bootstrap/Modal'

const Modals = ({
  isModalShow,
  onHide,
  modalType,
  dataId,
}) => {
  const headerTitle = () => {
    if(modalType === 'create') {
      return 'Create New To Do'
    } else if(modalType === 'preview') {
      return 'Edit To Do'
    } else  {
      return 'Delete To Do'
    }
  }
  const bodyModal = () => {
    if(modalType === 'create') {
      return (
        <Create />
      )
    } else if(modalType === 'preview') {
      return (
        <Preview dataId={dataId}/>
      )
    } else  {
      return (
        <Delete dataId={dataId}/>
      )
    }
  }
  return (
    <Modal show={isModalShow} onHide={onHide} dataId={dataId}>
      <Modal.Header closeButton>
        <Modal.Title>{headerTitle}</Modal.Title>
      </Modal.Header>
      {bodyModal}
    </Modal>
  )
}

Modals.propTypes = {
  onHide: PropTypes.func,
  dataId: PropTypes.number,
}

Modals.defaultProps = {
  onHide: () => {},
  dataId: null,
}

export default Modals