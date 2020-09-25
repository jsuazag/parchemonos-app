import React, { useEffect, useState, useContext } from 'react'
import { Page } from '../Page'
import { Header } from './../../components/Header'
import { CardDetail } from './components/CardDetail'
import { useParams, useHistory } from 'react-router-dom'
import { EXPERIENCES_DATA } from './../../data/ExperiencesData'
import { Button } from '../../components/Button'
import { UserContext } from './../../contexts/UserContext'

export const Detail = () => {

  const { id } = useParams()
  const history = useHistory()
  const [adventure, setAdventure] = useState(null)
  const { user } = useContext(UserContext)

  // constructor / component did mount
  useEffect(() => {
    const experience = EXPERIENCES_DATA.find(el => el.id === Number(id))
    if (experience) setAdventure(experience)
  }, [])

  const goToBookingHandler = () => {
    if (user.isAuthenticated) {
      history.push(`/booking/${id}`)
    } else {
      history.push(`/login`)
    }
  }

  // retorna el jsx
  return (
    <Page>
      {
        adventure !== null
        ? <>
            <Header title={adventure.title} />
            <CardDetail {...adventure} />
            <Button onPress={goToBookingHandler} label="¡Reserva tu pache!" />
            { user.name }
          </>
        : <p>Experiencia no encontrada</p>
      }

    </Page>
  )
}
