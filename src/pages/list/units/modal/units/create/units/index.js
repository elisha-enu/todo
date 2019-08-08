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
          <Form.Group controlId="formBasicAdd">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={async () => {
          handleAddToDo(insertData)
          onHide()
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
}

Create.defaultProps = {
  getListToDo: () => {},
  handleAddToDo: () => {},
  onHide: () => {},
}

export default Create