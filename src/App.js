import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './app/pages/Home'
import Works from './app/pages/Works'
import Contacts from './app/pages/Contacts'

import Nav from './app/components/Nav'
import Lines from './app/components/Lines'

function App() {
  return (
    <Router>
      <Lines></Lines>
      <Nav></Nav>
      <Switch>
        <Route path="/cantieri">
          <Works></Works>
        </Route>
        <Route path="/contatti">
          <Contacts></Contacts>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
