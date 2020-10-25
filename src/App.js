import React, { Component } from 'react'
import { Route, Router } from "react-router";
import { createBrowserHistory } from 'history';

import UsersListingPage from './pages/UsersListingPage'
import UserDetailsPage from './pages/UserDetailsPage'

var history = createBrowserHistory();

class App extends Component {
  render() {   
    return(
      <Router history={history}>
        <Route path="/">
          <UsersListingPage />
        </Route>
        <Route path="/details">
          <UserDetailsPage />
        </Route>
        {/* <Route path="/">
          <UserDetailsPage />
        </Route> */}
      </Router>
    )
  }
}

export default App
