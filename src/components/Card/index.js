import React from 'react'
import A from '../../assets/A.svg'
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
