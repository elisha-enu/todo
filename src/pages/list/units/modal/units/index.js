import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import Form from 'react-bootstrap/Form'
import Create from './create';
import Preview from './preview';
import Delete from './delete';

const Modals = ({
  show,
  onHide,
  modalType,
  dataId,
}) => {
  return (
    <>
      {
        modalType === 'create' && (
          <Create show={show} onHide={onHide} />
        )
      }
      {
        modalType === 'preview' && (
          <Preview show={show} onHide={onHide} dataId={dataId}/>
        )
      }
      {
        modalType === 'delete' && (
          <Delete show={show} onHide={onHide} dataId={dataId}/>
        )
      }
    </>
  )
}

Modals.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  dataId: PropTypes.number,
}

Modals.defaultProps = {
  onHide: () => {},
  dataId: null,
}

export default Modals