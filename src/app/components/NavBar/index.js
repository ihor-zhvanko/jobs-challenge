import React, { PureComponent } from 'react'

import { NavLink } from 'react-router-dom'

import './NavBar.css'

export default class NavBar extends PureComponent {
  render() {
    return (
      <nav className="nav-bar">
        <h1 className="nav-title">JOBS</h1>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/jobs">All Jobs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create">New Job!</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
