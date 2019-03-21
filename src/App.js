import React, { Component } from 'react'
import './App.css'
import './animate.css'
import ArrowSquare from './components/ArrowSquare'
import CardsContainer from './components/CardsContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <CardsContainer />
        <ArrowSquare />
      </div>
    )
  }
}
export default App
