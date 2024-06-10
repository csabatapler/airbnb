import React from 'react'
import grid from '../images/photo-grid.png'

export default function Hero() {
  
  return (
    <nav>
      <img src={grid} className="img--hero" alt="photo-grid" />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
    </nav>
  )

}