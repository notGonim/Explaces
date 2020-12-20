import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { NewPlaces } from './places/components/NewPlaces';
import { User } from './users/pages/User';




function App() {
  return (

    <Router>
      <Switch >
        <Route path="/" exact component={User} />
        <Route path="/places/new" component={NewPlaces} exact />
        <Redirect to="/" />
      </Switch>
    </Router>


  )
}

export default App;
