import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from './login'
import List from './list'

function PagesRouter() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/list" component={List} />
    </Router>
  );
}

export default PagesRouter