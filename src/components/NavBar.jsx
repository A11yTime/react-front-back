import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-brand">E-Commerce Store</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/products" className="navbar-link">Products</Link>
        <Link to="/about" className="navbar-link">About</Link> {/* You can add more links here */}
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </div>
  </nav>
  )
}

export default NavBar