import React from 'react'
import {
  Link
} from 'react-router-dom'

export const Card = ({ id, title, image, place }) => (
  <Link to={`/detail/${id}`}>
    <div style={{ backgroundImage: `url('${image}')` }} className="card-container">
      <h5>{title}</h5>
      <p>{place}</p>
    </div>
  </Link>
)
