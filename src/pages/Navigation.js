import React from 'react'
import { Home } from './Home'
import { Detail } from './Detail'
import { Login } from './Login'
import { Booking } from './Booking'
import { Register } from './Register'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/booking" component={Booking} />
    </Switch>
  </Router>
)
