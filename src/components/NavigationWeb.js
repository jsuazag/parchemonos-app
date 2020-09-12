import React from 'react'
import { Link } from 'react-router-dom'
import { MENU_OPTIONS } from './../data/MenuOptions'

const ItemMenu = (props) => (
  <Link to={props.path}>
    <li>
      <ion-icon name={props.icon}></ion-icon>
      <span>{ props.title }</span>
      <ion-icon name="arrow-forward-circle"></ion-icon>
    </li>
  </Link>
)

export const NavigationWeb = () => (
  <nav className="navigation-web">
    <div>
      <img src="/static/logo2.png" alt="logo" />
    </div>
    <ul>
      {
        MENU_OPTIONS.map( (el, key) => <ItemMenu key={key} {...el} /> )
      }
    </ul>
  </nav>
)
