import React, { useEffect, useState } from 'react'
import { Page } from '../Page'
import { Header } from './../../components/Header'
import { CardDetail } from './components/CardDetail'
import { useParams } from 'react-router-dom'
import { EXPERIENCES_DATA } from './../../data/ExperiencesData'

export const Detail = () => {

  const { id } = useParams()
  const [adventure, setAdventure] = useState(null)

  // constructor / component did mount
  useEffect(() => {
    const experience = EXPERIENCES_DATA.find(el => el.id === Number(id))
    if (experience) setAdventure(experience)
  }, [])

  // retorna el jsx
  return (
    <Page>
      {
        adventure !== null
        ? <>
            <Header title={adventure.title} />
            <CardDetail {...adventure} />
          </>
        : <p>Experiencia no encontrada</p>
      }

    </Page>
  )
}
