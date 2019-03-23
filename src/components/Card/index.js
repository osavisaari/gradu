import React from 'react'
import './styles.scss'

const Card = props => {
  const { text } = props
  return (
    <div className="card">
      <p>{text}</p>
    </div>
  )
}

export default Card
