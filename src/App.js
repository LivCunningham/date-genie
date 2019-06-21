import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login.js'
import Filter from './pages/Filter.js'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Filter" component={Filter} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
