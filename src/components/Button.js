import React from 'react'

export const Button = (
    {
      type = 'button',
      label = 'texto',
      variant = 'primary',
      onPress = () => {},
      disabled = false
    }
  ) => (
  <button disabled={disabled} onClick={ onPress } className={`btn ${variant}`} type={type}>{label}</button>
)
