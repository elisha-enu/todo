import React, {useState} from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from './login'
import List from './list'
import Cookie from 'cookie-universal'

function PagesRouter() {
  const cookies = Cookie()
  const cookieRes = cookies.get('token')
  const [auth, setAuth] = useState(false)

  if(cookieRes !== undefined) {
    setAuth(true)
  }
  return (
    <Router>
        <Route exact path="/" render={() => (
            cookieRes !== undefined ? 
            (
              <List/>
            ) : (
              <Login setAuth={setAuth}/>
            )
        )} />
    </Router>
  );
}

export default PagesRouter