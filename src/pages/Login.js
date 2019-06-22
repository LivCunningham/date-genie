import React, { Component } from 'react'
import logo from '../images/Capture2.JPG'

class Login extends Component {
  render() {
    return (
      <>
        <img className="logo" src={logo} alt="Capture2" />
        <div className="login">
          <input className="user-name" placeholder="Email Address" />
          <input className="password" placeholder="Pasword" />
          <button className="login-button">Dream Date Wishes</button>
          <p className="recover-login">Don't have access to your account? </p>
        </div>
      </>
    )
  }
}

export default Login
