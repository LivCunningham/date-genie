import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Filter from './pages/Filter.js'

class Login extends Component {
  render() {
    return (
      <>
        <h1>LOGIN HERE YO</h1>
        <Link to={`./pages/Filter`}>
          <button className="adventure">CHOOSE YOUR ADVENTURE YO</button>
        </Link>
      </>
    )
  }
}

export default Login
