import React from 'react'
import { Score } from '../../../components/Score'

export const CardDetail = (props) => (
  <article className="card-detail">
    <img src={props.image} />
    <div>
      <p>{props.title}</p>
      <h2>COP <small>{props.price}</small></h2>
      <Score stars={props.score} users={props.users} size="16px" />
    </div>
  </article>
)
