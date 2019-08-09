import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
import Create from './create';
import Preview from './preview';
import Delete from './delete';
import Modal from 'react-bootstrap/Modal'

const Modals = ({
  isModalShow,
  modalType,
  dataId,
  handleShowHideModal,
  isLoading,
}) => {
  console.log('MODAL IS LOADING =>', isLoading)
  const headerTitle = () => {
    if(modalType === 'create') {
      return 'Create New To Do'
    } else if(modalType === 'preview') {
      return 'Edit To Do'
    } else  {
      return 'Delete To Do'
    }
  }
  const renderBody = () => {
    if(modalType === 'create') {
      return (
        <Create />
      )
    } else if(modalType === 'preview') {
      return (
        <>
          <Preview />
        </>
      )
    } else  {
      return (
        <Delete />
      )
    }
  }
  return (
    <Modal show={isModalShow} onHide={() => handleShowHideModal(false, modalType, null)}>
      <Modal.Header closeButton>
        <Modal.Title>{headerTitle()}</Modal.Title>
      </Modal.Header>
      {renderBody()}
    </Modal>
  )
}

Modals.propTypes = {
  onHide: PropTypes.func,
  handleShowHideModal: PropTypes.func,
}

Modals.defaultProps = {
  onHide: () => {},
  handleShowHideModal: () => {},
}

export default Modals