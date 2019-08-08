import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { PageStyled } from './styled'
import { 
  // Button,
  Input,
} from '../../../components'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Cookie from 'cookie-universal'
import { Link, Redirect } from "react-router-dom";

const Login = ({
  handleLogin,
  handleRegister,
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false);

  const dataUser = {name: name, email: email, password: password}

  const cookies = Cookie()
  const cookieRes = cookies.get('token')

  const redirectToList = () => {
    // if(cookieRes !== undefined)
    //   console.log('ada')
    //   return (
    //     <Redirect to='/list' />
    //   )
  }
  
  return (
    <PageStyled>
      Login
      {redirectToList()}
      <Input
        placeholder="Username"
        onChange={(e) => {setEmail(e.target.value)}}
        value={email}
        type="text"
      />

      <Input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      <Button  variant="secondary"
        onClick={() => {
            setShow(true)
        }}
      >
        Register
      </Button>
      <Button variant="primary" onClick={() => handleLogin(dataUser)}>
        Login
      </Button>
      
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />

          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />

          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={async () => {
            await handleRegister(dataUser) ?
            setShow(false) : console.log('err')
          }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </PageStyled>
  )
}

Login.propTypes = {
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  handleLogin: PropTypes.func,
  handleRegister: PropTypes.func,
}

Login.defaultProps = {
  handleLogin: () => {},
  handleRegister: () => {},
  setUsername: () => {},
  setPassword: () => {},
}

export default Login