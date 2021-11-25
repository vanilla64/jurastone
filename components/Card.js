import React, { useState } from 'react'
import Image from "next/image";
import styles from '../styles/Card.module.css'

function Card({ img, imgHover, title, price }) {
  const [cardHover, setCardHover] = useState(false)

  const handleMouseEnter = () => setCardHover(prev => !prev)
  const handleMouseLeave = () => setCardHover(prev => !prev)

  return (
    <div className={styles.card}>
      <Image
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width={300} height={200}
        src={cardHover ? imgHover : img}
      />
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.price}>{ price }</p>
      <button className={styles.button}>Получить скидку</button>
    </div>
  )
}

export default Card
