import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { PageStyled, LoginStyled } from './styled'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cookie from 'cookie-universal'
import Spinners from '../../../components/spinner'


const Login = ({
  handleLogin,
  handleRegister,
  isLoading,
  isError,
  errMessage,
  setAuth,
}) => {
  const cookies = Cookie()
  const cookieRes = cookies.get('token')
  if(cookieRes)
    setAuth(true)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false);

  const dataUser = {name: name, email: email, password: password}

  return (
    <PageStyled>
      <Spinners show={isLoading} onHide={() => {}}/>
      <LoginStyled>
        <h4>Login</h4>
        <hr/>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="johndoe@johndoe.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Row className="justify-content-md-center">
          <Col md={3}>
            <Button  variant="outline-secondary"
              onClick={() => {
                setShow(true)
              }}
            >
              Register
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="outline-primary" onClick={() => handleLogin(dataUser)}>
              Login
            </Button>
          </Col>
        </Row>
        
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="johndoe@johndoe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassowrd">
                <Form.Label>Passowrd</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="outline-primary" onClick={() => handleRegister(dataUser)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </LoginStyled>
    </PageStyled>
  )
}

Login.propTypes = {
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  handleLogin: PropTypes.func,
  handleRegister: PropTypes.func,
  setAuth: PropTypes.func,
}

Login.defaultProps = {
  handleLogin: () => {},
  handleRegister: () => {},
  setUsername: () => {},
  setPassword: () => {},
  setAuth: () => {},
}

export default Login