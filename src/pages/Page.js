import React, { Fragment } from 'react'
import { Topbar } from '../components/Topbar'
import { Navigation } from '../components/Navigation'
import { NavigationWeb } from '../components/NavigationWeb'

export const Page = (props) => (
  <Fragment>
    <NavigationWeb />
    <section className="main-page">
      <Topbar />
      <Navigation />
      <div className="page">
        { props.children }
      </div>
    </section>
  </Fragment>
)
