import React from 'react'
import Image from "next/image";
import styles from '../styles/CertificateCard.module.css'

function CertificateCard({ img }) {
  return (
    <div className={styles.card}>
      <Image width={173} height={231} src={img} />
    </div>
  )
}

export default CertificateCard
