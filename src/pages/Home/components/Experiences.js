import React from 'react'
import { Adventure } from './Adventure'
import { EXPERIENCES_DATA } from './../../../data/ExperiencesData'

export const Experiences = () => (
  <section>
    {
      EXPERIENCES_DATA.map(el => <Adventure key={el.id} {...el} /> )
    }
  </section>
)
