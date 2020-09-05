import React, { Fragment } from 'react'
import { Topbar } from '../components/Topbar'
import { Navigation } from '../components/Navigation'

export const Page = (props) => (
  <Fragment>
    <Topbar />
    <Navigation />
    <div className="page">
      { props.children }
    </div>
  </Fragment>
)
