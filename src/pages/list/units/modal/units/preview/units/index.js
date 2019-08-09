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
  onHide,
  dataId,
  handleShowHideModal,
  modalType,
  isLoading,
}) => {
  useEffect(() => {
    handleDetailToDo(dataId)
    console.log('useEffect detailToDo', detailToDo)
  }, [])

  const [title, setTitle] = useState(detailToDo.title)
  const [note, setNote] = useState(detailToDo.note)
  const [priority, setPriority] = useState(detailToDo.priority)
  const [isDone, setDone] = useState(false)

  console.log('isLoading', isLoading)
  console.log('title dari useState', title)
  console.log('note dari useState', note)
  console.log('detailtodo title', detailToDo.title)
  console.log('isDOne', isDone)

  const updateData = {
    title: title,
    note: note,
    id: dataId,
    priority: priority,
    isDone: isDone,
  }

  const checkLoading = () => {
    if(isLoading) {
      // setTitle(detailToDo.title)
    } else {
      return (
        <>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter title"
                  value={title || ''}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formNote">
                <Form.Label>Note</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter note"
                  value={note || ''}
                  onChange={(e) => setNote(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPriority">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="enter priority"
                  value={priority || ''}
                  onChange={(e) => setPriority(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formIsDone">
                <Form.Label>Is Done?</Form.Label>
                <Form.Check
                  label="Done"
                  type="checkbox"
                  id="checkboxDone"
                  checked={isDone}
                  onChange={() => setDone(!isDone)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => handleShowHideModal(false, modalType, null)}>
              Closes
            </Button>
            <Button variant="outline-primary" onClick={() => {
              handleUpdateToDo(updateData)
            }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </>
      )
    }
  }

  return (
    <>
      {checkLoading()}
    </>
  )
}

Preview.propTypes = {
  handleDetailToDo: PropTypes.func,
  handleUpdateToDo: PropTypes.func,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  dataId: PropTypes.number,
  handleShowHideModal: PropTypes.func,
}

Preview.defaultProps = {
  handleDetailToDo: () => {},
  handleUpdateToDo: () => {},
  dataId: null,
  handleShowHideModal: () => {},
}

export default Preview