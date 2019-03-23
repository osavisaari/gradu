import React, { useEffect, useState } from 'react'
import Card from '../Card'
import useTimeout from 'use-timeout'

const F_KEY = 70

const CardsContainer = () => {
  const [delay, setDelay] = useState(10000) // 10 sek
  const [cards, setCards] = useState([
    { title: 'A', animation: undefined },
    { title: 'B', animation: undefined },
    { title: 'C', animation: undefined },
    { title: 'D', animation: undefined },
    { title: 'E', animation: undefined }
  ])

  useEffect(() => {
    window.addEventListener('keydown', keyboardHandler)
    return () => {
      window.removeEventListener('keydown', keyboardHandler)
    }
  })

  useTimeout(() => {
    setDelay(Math.random() * 5000 + 5000) // 5 - 10 sek
    animate()
  }, delay)

  const animate = () => {}

  const keyboardHandler = e => {
    console.log(e)
  }

  return (
    <div className="card-container">
      <div className="cards">
        {cards.map(card => (
          <Card key={card.title} text={card.title} />
        ))}
      </div>
    </div>
  )
}

export default CardsContainer
