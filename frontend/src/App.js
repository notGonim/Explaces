import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import { NewPlaces } from './places/components/NewPlaces';
import { UserPlaces } from './places/pages/UserPlaces';
import { Navigations } from './shared/components/navigations/Navigations';
import { User } from './users/pages/User';




function App() {
  return (

    <Router>
      <Navigations />
      <Main>
        <Switch >
          <Route path="/" exact component={User} />
          <Route path="/:userId/places" component={UserPlaces} exact />
          <Route path="/places/new" component={NewPlaces} exact />
          <Redirect to="/" />
        </Switch>

      </Main>
    </Router>


  )
}

export default App;





const Main = styled.div`
  margin-top: 5rem;
`