import React, { useContext } from 'react'
import { Score } from '../../../components/Score'
import { MessageContext } from './../../../contexts/MessageContext'

export const CardDetail = (props) => {

  const messageValue = useContext(MessageContext)

  return (
    <article className="card-detail">
      <img src={props.image} />
      <div>
        { messageValue }
        <p>{props.title}</p>
        <h2>COP <small>{props.price}</small></h2>
        <Score stars={props.score} users={props.users} size="16px" />
      </div>
    </article>
  )
}
