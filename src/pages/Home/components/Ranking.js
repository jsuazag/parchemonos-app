import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../services/HttpServer'
import { Card } from './Card'

export const Ranking = () => {

  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    loadExperiences()
  }, []) // se va a ejecutar 1 sola vez

  const loadExperiences = async () => {
    try {
      const response = await requestHttp('get', 'experiences/ranking')
      setExperiences(response.ranking)
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <section className="ranking-container">
      {
        experiences.map((item, index) => <Card key={index} {...item} />)
      }
    </section>
  )
}
