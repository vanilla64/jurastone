import React from 'react'
import styles from '../styles/GridTitle.module.css'

function GridTitle({ title }) {
  return (
    <h3 className={styles.title}>{ title }</h3>
  )
}

export default GridTitle
