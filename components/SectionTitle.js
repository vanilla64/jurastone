import React from 'react'
import styles from '../styles/SectionTitle.module.css'

function SectionTitle({ title }) {
  return (
    <h2 className={styles.title}>{ title }</h2>
  )
}

export default SectionTitle
