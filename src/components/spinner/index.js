import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

const Spinners = ({
  show,
  onHide,
}) => {
  return (
    <Modal show={show} onHide={onHide}
      aria-labelledby="contained-modal-title"
      centered
    >
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
    </Modal>
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