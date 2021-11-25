import React from 'react'
import styles from "../styles/Gallery.module.css"

function GalleryListGrid({ children }) {
  return (
    <ul className={styles.gridContainer}>
      { children }
    </ul>
  )
}

export default GalleryListGrid
