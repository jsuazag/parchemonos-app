import React, { useState, createContext } from 'react'

const initialState = {
  name: '',
  email: '',
  identification: '',
  phone: '',
  isAuthenticated: false
}

export const UserContext = createContext(initialState)

export const UserContextStore = (props) => {

  const [user, setUser] = useState(initialState)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { props.children }
    </UserContext.Provider>
  )
}
