import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { 
    // Button,
    // Input,
} from '../../../components'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Modals from './modal'
import Cookie from 'cookie-universal'
import Spinners from '../../../components/spinner'

const List = ({
  listToDo,
  getListToDo,
  setAuth,
  isLoading,
  isShowModal,
  handleShowHideModal,
  modalTipe,
}) => {
  const cookies = Cookie()
  const cookieRes = cookies.get('token')
  if(cookieRes === undefined)
    setAuth(false)

  const [searchText, setSearchText] = useState('')
  const [radio, setRadio] = useState('all')
  const [show, setShow] = useState(false)
  const [modalType, setModalType] = useState('')
  const [dataId, setDataId] = useState(null)

  const dataTable = [
    'No',
    'Title',
    'Notes',
    'Priority',
    'Status',
    'Action',
  ]

  useEffect(() => {
    getListToDo(searchText, radio)
  }, [searchText, radio])
  console.log(isShowModal, 'isShowModal')

  return (
    <div>
      <Spinners show={isLoading} onHide={() => {}}/>
      <div>
        {/* <Modals show={isShowModal} onHide={() => setShow(false)} modalType={modalTipe} dataId={dataId}/>  */}
        <Modals show={show} onHide={() => setShow(false)} modalType={modalType} dataId={dataId}/> 
        <Form>
          <Form.Group controlId="formBasicSearch">
            <Form.Label>Search to do:</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter search query"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check
              type="radio"
              label="done"
              name="formFilter"
              id="radio-done"
              onChange={() => setRadio('done')}
              checked={radio === 'done'}
            />
            <Form.Check
              type="radio"
              label="undone"
              name="formFilter"
              id="radio-undone"
              onChange={() => setRadio('undone')}
              checked={radio === 'undone'}
            />
            <Form.Check
              type="radio"
              label="all"
              name="formFilter"
              id="radio-all"
              onChange={() => setRadio('all')}
              checked={radio === 'all'}
            />
          </Form.Group>
          {/* <Button as="input" type="button" value="Add new task" onClick={() => handleShowHideModal(true, 'create')} /> */}
          <Button as="input" type="button" value="Add new task" onClick={() => {
            setShow(true)
            setModalType('create')
          }} />
        </Form>
      </div>   

      <Table responsive>
        <thead>
          <tr>
            {
              dataTable.map((header, idx) => {
                return (
                  <th key={idx}>{header}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            listToDo.map((list,index) => (
              <tr key={index} onClick={() => console.log(list.id)}>
                <td>{index+1}</td>
                <td>{list.title}</td>
                <td>{list.note}</td>
                <td>{list.priority}</td>
                <td>{list.isDone ? 'done' : 'not done'}</td>
                <td>
                  <Button as="input" type="button" value="Preview" onClick={() => {
                    setShow(true)
                    setModalType('preview')
                    setDataId(list.id)
                  }}/>
                  <Button as="input" type="button" value="Delete" onClick={() => {
                    setShow(true)
                    setModalType('delete')
                    setDataId(list.id)
                  }}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

List.propTypes = {
    getListToDo: PropTypes.func,
    handleAddToDo: PropTypes.func,
    handleShowHideModal: PropTypes.func,
}

List.defaultProps = {
    getListToDo: () => {},
    handleAddToDo: () => {},
    handleShowHideModal: () => {},
}

export default List