import React from "react";
import cardPhoto from "../images/katie-zaferes.png"

export default function Card() { 
  return (
    <div className="card">
      <img src={cardPhoto} 
          alt="main-card-image" 
          className="card--image" 
      />
      <p className="card--badge"> 
        SOLD OUT
      </p>
      <div className="card--stats">
        <img src="./images/star.png" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p className="card--title">Life Lessons with Katie Zaferes</p>
      <p className="card--price">
        <span className="bold">From $136</span> / person
      </p>
    </div>
  )
}