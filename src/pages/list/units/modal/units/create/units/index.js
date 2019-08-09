import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const Create = ({
  handleAddToDo,
  show,
  onHide,
  handleShowHideModal,
  modalType,
}) => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const insertData = {
    title: title,
    note: note,
  }
  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formNote">
            <Form.Label>Note</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={() => handleShowHideModal(false, modalType, null)}>
          Close
        </Button>
        <Button variant="outline-primary" onClick={() => {
          handleAddToDo(insertData)
        }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  )
}

Create.propTypes = {
  getListToDo: PropTypes.func,
  handleAddToDo: PropTypes.func,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  handleShowHideModal: PropTypes.func,
}

Create.defaultProps = {
  getListToDo: () => {},
  handleAddToDo: () => {},
  onHide: () => {},
  handleShowHideModal: () => {},
}

export default Create