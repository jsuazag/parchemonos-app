import React from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'

export const Booking = () => {
  return (
    <Page>
      <h3>Formulario de reserva</h3>
      <form className="form">
        <div>
          <label>Fecha de la reserva</label>
          <input type="date" />
        </div>
        <div>
          <label>Comentarios adicionales</label>
          <textarea></textarea>
        </div>
        <Button disabled={true} label="Enviar reserva" type="submit" />
      </form>
    </Page>
  )
}
