import React from 'react'
import styles from "../styles/Facts.module.css"

function GridFact({ title, children }) {
  return (
    <li className={styles.listItem}>
      <div className={styles.thumbsUpIcon}/>

      <div className={styles.textContainer}>
        <h4 className={styles.gridHeading}>{ title }</h4>
        { children }
      </div>
    </li>
  )
}

export default GridFact
