import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Filter extends Component {
  render() {
    return (
      <>
        <header className="the-top">
          <nav className="navbar">
            <Link className="START" to={`./pages/Filter.js`}>
              START
            </Link>
            <Link className="VISITED" to={`./pages/BeenThere.js`}>
              VISITED
            </Link>
            <Link className="ABOUT" to={`./pages/About.js`}>
              ABOUT
            </Link>
          </nav>
        </header>
      </>
    )
  }
}

export default Filter
