import React from 'react'
import logo from '../public/images/airbnb-logo.png'

export default function Navbar() {
  
  return (
    <nav className='navBar'>
      <img src={logo} className="nav--logo" alt="airbnb logo" />
    </nav>
  )

}