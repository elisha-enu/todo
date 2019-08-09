import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'
import { ModalWrapper } from './styled';

const Spinners = ({
  show,
  onHide,
}) => {
  return (
    <>
    <ModalWrapper />
    <Modal show={show} onHide={onHide}
      aria-labelledby="modal-title-vcenter"
      centered
      size="sm"
      dialogClassName="modal-spinner-custom"
    >
        <Spinner animation="border" variant="warning" role="status" size="lg">
          <span className="sr-only">Loading...</span>
        </Spinner>
    </Modal>
    </>
  )
}

Spinners.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
}

Spinners.defaultProps = {
  onHide: () => {},
}

export default Spinners