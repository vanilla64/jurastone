import React from 'react'
import styles from '../styles/Cards.module.css'

function Cards({ children }) {
  return (
    <div className={styles.cards}>
      { children }
    </div>
  )
}

export default Cards
