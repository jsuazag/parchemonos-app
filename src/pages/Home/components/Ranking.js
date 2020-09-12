import React from 'react'
import { Card } from './Card'
import { EXPERIENCES_DATA } from './../../../data/ExperiencesData'

export const Ranking = () => (
  <section className="ranking-container">
    {
      EXPERIENCES_DATA.map((item, index) => <Card key={index} {...item} />)
    }
  </section>
)
