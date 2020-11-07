import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => (
  <nav className="navigation">
    <ul>
      <Link to={'/'}>
        <li className="active">
          <ion-icon name="home"></ion-icon>
        </li>
      </Link>
      <Link to={'/'}>
        <li>
          <ion-icon name="navigate"></ion-icon>
        </li>
      </Link>
      <Link to={'/'}>
        <li>
          <ion-icon name="chatbubble-ellipses"></ion-icon>
        </li>
      </Link>
      <Link to={'/login'}>
        <li>
          <ion-icon name="person"></ion-icon>
        </li>
      </Link>
    </ul>
  </nav>
)
