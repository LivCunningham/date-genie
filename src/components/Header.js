import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <header className="the-top">
          <nav classname="navbar">
            <Link className="START" to={`./pages/Filter`}>
              START
            </Link>
            <Link className="VISITED" to={`./pages/BeenThere`}>
              VISITED
            </Link>
            <Link className="ABOUT" to={`./pages/About`}>
              ABOUT
            </Link>
          </nav>
        </header>
      </>
    )
  }
}

export default Header
