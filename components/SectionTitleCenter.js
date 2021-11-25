import React from 'react'
import styles from '../styles/SectionTitle.module.css'

function SectionTitleCenter({ title }) {
  return (
    <h2 className={styles.titleCenter}>{ title }</h2>
  )
}

export default SectionTitleCenter
