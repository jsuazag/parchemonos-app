import React, { useState, useEffect } from 'react'

export const SpikeFunctionComponent = (props) => {

  const [number1, setNumber1] = useState(3)
  const [number2, setNumber2] = useState(6)
  const [number3] = useState(2)
  const [sum, setSum] = useState(0)

  useEffect(() => {
    console.log('update1')
    console.log('Inicio el componente')
    setSum(Number(number1) + Number(number2))
  }, [number1, number2])

  useEffect(() => {
    console.log('update2')
  }, [number3])

  return (
    <div>
      <p>Hola function componente</p>
      <label>Numero 1: </label>
      <input
        value={number1}
        onChange={ e => setNumber1(e.target.value) }
        type="text" />
      <br />
      <label>Numero 2: </label>
      <input
        value={number2}
        onChange={ e => setNumber2(e.target.value) }
        type="text" />
      <br />
      <p>La suma de {number1} + {number2} es: </p>
      { sum }
    </div>
  )
}
