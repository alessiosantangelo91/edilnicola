import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cantieri from './pages/Cantieri';

import Heading from './components/Heading';
import Lines from './components/Lines';

function App() {
  return (
    <Router>
      <Lines></Lines>
      <Heading></Heading>
      <Switch>
        <Route path="/cantieri">
          <Cantieri></Cantieri>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
