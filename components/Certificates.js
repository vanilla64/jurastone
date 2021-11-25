import React from 'react'
import SectionTitle from "./SectionTitle"
import styles from '../styles/Certificates.module.css'
import CertificateCard from "./CertificateCard"

import protocol1 from '../public/certificates/protokol-ispytany-845-11-15-1.jpg'
import protocol2 from '../public/certificates/protokol-ispytany-846-11-15-1-721x1024.jpg'
import protocol3 from '../public/certificates/protokol-ispytany-847-11-15-1-721x1024.jpg'
import protocol4 from '../public/certificates/protokol-ispytany-849-11-15-1-721x1024.jpg'
import protocol5 from '../public/certificates/protokol-ispytany-850-11-15-1.jpg'
import certificate from '../public/certificates/sertificate-1.jpg'

function Certificates() {
  return (
    <section id={'certificates'}>
      <div className="container">
        <SectionTitle
          title={'Сертификаты и протоколы испытаний'} />
        <div className={styles.grid}>
          <CertificateCard img={protocol1} />
          <CertificateCard img={protocol2} />
          <CertificateCard img={protocol3} />
          <CertificateCard img={protocol4} />
          <CertificateCard img={protocol5} />
          <CertificateCard img={certificate} />
        </div>
      </div>
    </section>
  )
}

export default Certificates
