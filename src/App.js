import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home'
import DetailsPage from './components/detailsPage';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detailsPage">
          <DetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;