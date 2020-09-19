import React, { Component } from 'react'

class SpikeClassComponent extends Component {

  constructor(props) {
    super()
    this.state = {
      number1: 3,
      number2: 6,
      sum: 0
    }
  }

  componentDidMount () {
    console.log('Inicio el componente')
    this.setState({ sum: this.state.number1 + this.state.number2 })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update1....')
    if (prevState.number1 !== this.state.number1) {
      this.setState({ sum: Number(this.state.number1) + Number(this.state.number2) })
    }
    if (prevState.number2 !== this.state.number2) {
      this.setState({ sum: Number(this.state.number1) + Number(this.state.number2) })
    }
  }

  render() {
    return (
      <div>
        <p>hola class componente</p>
        <label>Numero 1: </label>
        <input
          value={this.state.number1}
          onChange={ e => this.setState({ number1: e.target.value }) }
          type="text" />
        <br />
        <label>Numero 2: </label>
        <input
          value={this.state.number2}
          onChange={ e => this.setState({ number2: e.target.value }) }
          type="text" />
        <br />
        <p>La suma de {this.state.number1} + {this.state.number2}: </p>
        { this.state.sum }
      </div>
    )
  }

}

export default SpikeClassComponent
