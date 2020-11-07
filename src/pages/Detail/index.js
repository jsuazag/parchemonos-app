import React, { useEffect, useState, useContext } from 'react'
import { Page } from '../Page'
import { Header } from './../../components/Header'
import { CardDetail } from './components/CardDetail'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from '../../components/Button'
import { UserContext } from './../../contexts/UserContext'
import { requestHttp } from './../../services/HttpServer'

export const Detail = () => {

  const { id } = useParams()
  const history = useHistory()
  const [adventure, setAdventure] = useState(null)
  const { user } = useContext(UserContext)

  // constructor / component did mount
  useEffect(() => {
    loadExperienceDetail()
  }, [id])

  const loadExperienceDetail = async () => {
    try {
      const response = await requestHttp('get', `experiences/detail/${id}`)
      setAdventure(response.experience)
    } catch (error) {
      console.error('Error', error)
    }
  }

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
