import React from 'react'
import { Score } from './../../../components/Score'
import { Link } from 'react-router-dom'

export const Adventure = (props) => (
  <Link to={`/detail/${props.id}`}>
    <div className="adventure-container">
      <img alt="adventure" src={props.image} />
      <article>
        <h3>{props.title}</h3>
        <p>{props.place}</p>
        <h5>COP {props.price}</h5>
        <Score stars={props.score} users={props.users} size="14px" />
      </article>
    </div>
  </Link>
)
