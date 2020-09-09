import React from 'react'
import { Card } from './Card'

const adventures = [
  {
    id: 1,
    image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg',
    title: 'Senderimo por Envigado',
    place: 'Envigado'
  },
  {
    id: 2,
    image: 'https://www.justcheckin.com.mx/wp-content/uploads/2018/10/escalada-actividad-aventura-turismo-aventuras-empresas-exploramas-1.jpg',
    title: 'Escala las montañas del oriente',
    place: 'San Carlos'
  },
  {
    id: 3,
    image: 'https://noticiasleticia.co/wp-content/uploads/2020/07/img_79e2f081fb4234c8bbd92fe2e3de33ca.jpg',
    title: 'Mirador de palmas',
    place: 'Medellín'
  },
  {
    id: 4,
    image: 'https://elpais.com/elpais/imagenes/2019/03/01/viajero_astuto/1551460921_336112_1551693736_noticia_grande.jpg',
    title: 'Kayak en corrientes rapidas',
    place: 'San Rafael'
  },
  {
    id: 5,
    image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg',
    title: 'Senderimo por Envigado',
    place: 'Envigado'
  },
  {
    id: 6,
    image: 'https://www.justcheckin.com.mx/wp-content/uploads/2018/10/escalada-actividad-aventura-turismo-aventuras-empresas-exploramas-1.jpg',
    title: 'Escala las montañas del oriente',
    place: 'San Carlos'
  },
  {
    id: 7,
    image: 'https://noticiasleticia.co/wp-content/uploads/2020/07/img_79e2f081fb4234c8bbd92fe2e3de33ca.jpg',
    title: 'Mirador de palmas',
    place: 'Medellín'
  },
  {
    id: 8,
    image: 'https://elpais.com/elpais/imagenes/2019/03/01/viajero_astuto/1551460921_336112_1551693736_noticia_grande.jpg',
    title: 'Kayak en corrientes rapidas',
    place: 'San Rafael'
  }
]

export const Ranking = () => (
  <section className="ranking-container">
    {
      adventures.map(item => <Card {...item} />)
    }
  </section>
)
