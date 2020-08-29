import React from 'react'

export const Card = ({ title, image, place }) => (
    <div style={{ backgroundImage: `url('${image}')` }} className="card-container">
        <h5>{ title }</h5>
        <p>{ place }</p>
    </div>
)