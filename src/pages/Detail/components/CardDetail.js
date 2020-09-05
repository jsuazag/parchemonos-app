import React from 'react'
import { Score } from '../../../components/Score'

export const CardDetail = () => (
  <article className="card-detail">
    <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg" />
    <div>
      <p>Descripción de ir a la experiencia ....</p>
      <h2>COP <small>30,000</small></h2>
      <Score stars={2} users="99" size="16px" />
    </div>
  </article>
)
