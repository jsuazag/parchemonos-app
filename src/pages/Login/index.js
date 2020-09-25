import React, { useState, useEffect, useContext } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'
import { validateEmail } from './../../utils/validateEmail'
import { UserContext } from './../../contexts/UserContext'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidForm, setIsValidForm] = useState(false)
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    setIsValidForm(validateEmail(email) && password !== '')
  }, [email, password])

  const loginFormHandler = (e) => {
    e.preventDefault()
    /*const form = {
      email,
      password
    }
    console.log('form login', form)
    setEmail('')
    setPassword('')*/
    validateUser()
  }

  const validateUser = () => {
    const emailUser = email
    const passUser = password
    /* TODO: cambiar la variable del usuario (isAuthenticated)
    * a: true, Si y solo siii:
    * email = "pepito@gmail.com" y contraseña = "123456"
    * y lo redirija al home de la app
    */
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
        { user.name }
      </form>
    </Page>
  )
}
