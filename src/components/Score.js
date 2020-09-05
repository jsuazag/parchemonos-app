import React from 'react'

const StarFill = ({ size }) => (
  <ion-icon style={{ fontSize: size }} name="star"></ion-icon>
)

const StarEmpty = ({ size }) => (
  <ion-icon style={{ fontSize: size }} name="star-outline"></ion-icon>
)

export const Score = ({ stars = 0, users = 0, size = '14px' }) => (
  <section className="score">
    <div>
      {
        [1,2,3,4,5].map(el => el <= stars ? <StarFill size={ size } /> : <StarEmpty size={ size } /> )
      }
    </div>
    <p style={{ fontSize: size }} >{ users }</p>
  </section>
)
