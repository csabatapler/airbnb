import React from "react";
import PropTypes from 'prop-types'

export default function Card(props) { 
  Card.propTypes = {
    key: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }

  return (

    <div className="card">
      <img src={`../public/images/${props.img}`}
          alt="main-card-image" 
          className="card--image" 
      />
      <p className="card--badge"> 
        SOLD OUT
      </p>
      <div className="card--stats">
        <img src="./images/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  )
}
