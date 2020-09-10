import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';

import Heading from './components/Heading';
import Lines from './components/Lines';

function App() {
  return (
    <Router>
      <Lines></Lines>
      <Heading></Heading>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
