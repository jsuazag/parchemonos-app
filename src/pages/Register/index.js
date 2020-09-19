import React, { useState, useEffect } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'

export const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [document, setDocument] = useState('')
  const [password, setPassword] = useState('')
  const [isValidForm, setIsValidForm] = useState(false)

  useEffect(() => {
    setIsValidForm(name !== '' && email !== '' && document !== '' && password !== '')
  }, [name, email, document, password])

  const registerFormHandler = (e) => {
    e.preventDefault()
    const form = {
      name,
      email,
      phone,
      document,
      password
    }
    console.log('form registro', form)
  }

  return (
    <Page>
      <h3>Formulario de registro</h3>
      <form onSubmit={registerFormHandler} className="form">
        <div>
          <label>Nombre completo</label>
          <input value={name} type="text"
            onChange={ e => setName(e.target.value) }
          />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input value={email} type="text"
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input value={phone} type="text"
            onChange={ e => setPhone(e.target.value) }
          />
        </div>
        <div>
          <label>Cedula</label>
          <input value={document} type="text"
            onChange={ e => setDocument(e.target.value) }
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input value={password} type="password"
            onChange={ e => setPassword(e.target.value) }
          />
        </div>

        <Button disabled={!isValidForm} label="Registarme" type="submit" />
      </form>
    </Page>
  )
}
