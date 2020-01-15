import React, { PureComponent } from 'react'

import { Switch, Route, Router, Redirect } from 'react-router'
import { createBrowserHistory } from 'history'

import NavBar from './components/NavBar'

import './App.css'

//pages
import CreatePage from './Create'
import HomePage from './Home'
import JobViewPage from './JobView'
import EditPage from './Edit'
import Notifications from './components/Modal/Notifications'

const history = createBrowserHistory()

export default class JobsApp extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <NavBar />

        <Switch>
          <Route path="/create" component={CreatePage} />
          <Route path="/jobs/:id/edit" component={EditPage} />
          <Route path="/jobs/:id" component={JobViewPage} />

          <Route path="/jobs" component={HomePage} />

          <Route path="/" exact render={() => <Redirect to="/jobs" />} />
        </Switch>

        <Notifications />
      </Router>
    )
  }
}
