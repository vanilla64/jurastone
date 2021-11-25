import React from 'react'
import styles from '../styles/ListGrid.module.css'

function ListGrid({ children }) {
  return (
    <ul className={styles.list}>
      { children }
    </ul>
  )
}

export default ListGrid
