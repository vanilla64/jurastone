import React from 'react'
import styles from '../styles/Advantage.module.css'

function AdvantageTextBlock({ children }) {
  return (
    <div className={styles.textContainer}>
      <div className={styles.iconThumbsUp} />
      <div className={styles.paragraphs}>
        { children }
      </div>
    </div>
  )
}

export default AdvantageTextBlock
