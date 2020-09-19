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
import SpikeClassComponent from '../spikes/SpikeClassComponent'
import { SpikeFunctionComponent } from '../spikes/SpikeFunctionComponent'

export const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/booking/:id" component={Booking} />
      <Route path="/class" component={SpikeClassComponent} />
      <Route path="/function" component={SpikeFunctionComponent} />
    </Switch>
  </Router>
)
