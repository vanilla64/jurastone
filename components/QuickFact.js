import React from 'react'
import style from '../styles/Facts.module.css'

function QuickFact({ number, heading, text }) {
  return (
    <div className={style.fact}>
      <span className={style.number}>{ number }</span>
      <span className={style.heading}>{ heading }</span>
      <p className={style.text}>{ text }</p>
    </div>
  )
}

export default QuickFact
