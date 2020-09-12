import React, { useEffect } from 'react'
import { Page } from '../Page'
import { Header } from './../../components/Header'
import { CardDetail } from './components/CardDetail'
import { useParams } from 'react-router-dom'
import { EXPERIENCES_DATA } from './../../data/ExperiencesData'

export const Detail = () => {

  const { id } = useParams()

  // constructor / component did mount
  useEffect(() => {
    const experience = EXPERIENCES_DATA.find(el => el.id === Number(id))
    console.log('experience', experience)
  }, [])

  // retorna el jsx
  return (
    <Page>
      {id}
      <Header title="Parapente en san felix" />
      <CardDetail />
    </Page>
  )
}
