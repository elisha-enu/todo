import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const Preview = ({
  handleDetailToDo,
  handleUpdateToDo,
  detailToDo,
  show,
  onHide,
  dataId,
}) => {

  const [title, setTitle] = useState(detailToDo.title)
  const [note, setNote] = useState(detailToDo.note)
  console.log('title useState', title)
  console.log('note useState', note)
  console.log('detailToDo', detailToDo)

  useEffect(() => {
    handleDetailToDo(dataId)
  }, [])


  const updateData = {
    title: title,
    note: note,
    id: dataId,
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Form>
        <Form.Group controlId="formBasicAdd">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter title"
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Label>Note</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter note"
            value={note || ''}
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
          handleUpdateToDo(updateData)
          onHide()
        }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

Preview.propTypes = {
  handleDetailToDo: PropTypes.func,
  handleUpdateToDo: PropTypes.func,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  dataId: PropTypes.number,
}

Preview.defaultProps = {
  handleDetailToDo: () => {},
  handleUpdateToDo: () => {},
  onHide: () => {},
  dataId: null,
}

export default Preview