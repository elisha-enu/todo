import React, {useState} from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from './login'
import List from './list'

function PagesRouter() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
        <Route exact path="/" render={() => (
            auth ? 
            (
              <List setAuth={setAuth}/>
            ) : (
              <Login setAuth={setAuth}/>
            )
        )} />
    </Router>
  );
}

export default PagesRouter