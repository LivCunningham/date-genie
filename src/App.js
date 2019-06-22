import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login.js'
import Filter from './pages/Filter.js'
import DrinkEatFun from './pages/DrinkEatFun.js'
import ThisOne from './pages/ThisOne.js'
import About from './pages/About.js'
import BeenThere from './pages/BeenThere.js'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Filter" component={Filter} />
            <Route path="/DrinkEatFun" component={DrinkEatFun} />
            <Route path="/ThisOne" component={ThisOne} />
            <Route path="/About" component={About} />
            <Route path="/BeenThere" component={BeenThere} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
