import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/signup">Create Account</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/logout">Logout</NavLink></li>
    </ul>
  )
}

export default Navbar
