import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <Link to='/' className="navbar-brand">useContext</Link>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to='/' className="nav-link" aria-current="page" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to='/about' className="nav-link" >About</NavLink>
          </li>
          <li className="nav-item">
           <NavLink exact to='/login' className="nav-link">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
