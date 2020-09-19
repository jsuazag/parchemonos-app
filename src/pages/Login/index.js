import React, { useState, useEffect } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'
import { validateEmail } from './../../utils/validateEmail'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidForm, setIsValidForm] = useState(false)

  useEffect(() => {
    setIsValidForm(validateEmail(email) && password !== '')
  }, [email, password])

  const loginFormHandler = (e) => {
    e.preventDefault()
    const form = {
      email,
      password
    }
    console.log('form login', form)
    setEmail('')
    setPassword('')
  }

  return (
    <Page>
      <h3>Inciar sesión</h3>
      <form onSubmit={loginFormHandler} className="form">
        <div>
          <label>Correo electrónico</label>
          <input value={email} type="text"
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input value={password} type="password"
            onChange={ e => setPassword(e.target.value) }
          />
        </div>
        <Button disabled={!isValidForm} label="Ingresar" type="submit" />
      </form>
    </Page>
  )
}
