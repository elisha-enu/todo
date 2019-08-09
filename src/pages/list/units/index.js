import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'
import Modals from './modal'
import Cookie from 'cookie-universal'
import Spinners from '../../../components/spinner'
import {ActionBox} from './styled'

const List = ({
  listToDo,
  getListToDo,
  setAuth,
  isLoading,
  handleShowHideModal,
  handleDetailToDo,
}) => {
  const cookies = Cookie()
  const cookieRes = cookies.get('token')
  if(cookieRes === undefined)
    setAuth(false)

  const [tempSearch, setTempSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [radio, setRadio] = useState('all')

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

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">To Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link onClick={() => {
              cookies.remove('token')
              setAuth(false)
            }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>      
        <Spinners show={isLoading} onHide={() => {}}/>
        <Modals /> 
        <ActionBox>
          <Row>
            <Col md={2} style={{display: 'flex', alignItems: 'center'}}>
              <Button variant="outline-primary" as="input" type="button" value="Add new task" onClick={() => handleShowHideModal(true, 'create', null)} />
            </Col>
            <Col md={{ span: 3, offset: 4 }} style={{display: 'flex', alignItems: 'center'}}>
              <Form>
                <Form.Group controlId="formBasicChecbox" style={{margin: '0'}}>
                  <Form.Check
                    type="radio"
                    label="done"
                    name="formFilter"
                    id="radio-done"
                    onChange={() => setRadio('done')}
                    checked={radio === 'done'}
                    inline
                  />
                  <Form.Check
                    type="radio"
                    label="undone"
                    name="formFilter"
                    id="radio-undone"
                    onChange={() => setRadio('undone')}
                    checked={radio === 'undone'}
                    inline
                  />
                  <Form.Check
                    type="radio"
                    label="all"
                    name="formFilter"
                    id="radio-all"
                    onChange={() => setRadio('all')}
                    checked={radio === 'all'}
                    inline
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col md={3} style={{display: 'flex', alignItems: 'center'}}>
              <Form>
                <Form.Group controlId="formBasicSearch" style={{margin: '0'}}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Search here"
                      value={tempSearch}
                      onChange={(e) => 
                        setTempSearch(e.target.value)
                      }
                      aria-label="search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" onClick={() => setSearchText(tempSearch)}>Search</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </ActionBox>  

        <Table responsive="md">
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
              listToDo && listToDo.length > 0 && listToDo.map((list,index) => (
                <tr key={index} onClick={() => console.log(list.id)}>
                  <td>{index+1}</td>
                  <td>{list.title}</td>
                  <td>{list.note}</td>
                  <td>
                    {list.priority === 1 && 'Low'}
                    {list.priority === 2 && 'Medium'}
                    {list.priority === 3 && 'High'}
                  </td>
                  <td>{list.isDone ? 'Done' : 'Not done'}</td>
                  <td>
                    <Row className="justify-content-md-left">
                      <Col md="auto">
                        <Button variant="outline-warning" as="input" type="button" value="Edit" onClick={() => handleDetailToDo(list.id)} />
                      </Col>
                      <Col md="auto">
                        <Button variant="outline-danger" as="input" type="button" value="Delete" onClick={() => handleShowHideModal(true, 'delete', list.id)} />
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))
            }
            {
              listToDo && listToDo.length === 0 && (
                <tr>
                  <td colSpan="6">No rows</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

List.propTypes = {
    getListToDo: PropTypes.func,
    handleAddToDo: PropTypes.func,
    handleShowHideModal: PropTypes.func,
    handleDetailToDo: PropTypes.func,
}

List.defaultProps = {
    getListToDo: () => {},
    handleAddToDo: () => {},
    handleShowHideModal: () => {},
    handleDetailToDo: () => {},
}

export default List