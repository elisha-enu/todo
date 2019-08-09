import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

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
  const [title, setTitle] = useState(detailToDo.title)
  const [note, setNote] = useState(detailToDo.note)
  const [priority, setPriority] = useState(detailToDo.priority)
  const [isDone, setDone] = useState(detailToDo.isDone)

  const updateData = {
    title: title,
    note: note,
    id: dataId,
    priority: priority,
    isDone: isDone,
  }

  const optPriority = {
    "1" : "Low",
    "2" : "Medium",
    "3" : "High",
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
             <DropdownButton
              title={optPriority[priority]}
              variant='outline-secondary'
              id="dropdown-priority"
              onSelect={(e) => setPriority(e)}
            >
              {
                Object.keys(optPriority).map((opt, index) => (
                  <Dropdown.Item key={index} eventKey={index+1} active={index+1 === priority}>{optPriority[index+1]}</Dropdown.Item>
                ))
              }
            </DropdownButton>
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