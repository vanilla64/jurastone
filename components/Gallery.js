import React, { useState } from 'react'
import Image from "next/image"
import styles from '../styles/Gallery.module.css'
import SectionTitle from "./SectionTitle"

import img from '../public/gallery/storage/raboti.jpg'
import StorageListGrid from "./StorageListGrid";
import ProductionListGrid from "./ProductionListGrid";
import PortfolioListWrap from "./PortfolioListWrap";
import MineListGrid from "./MineListGrid";

function Gallery() {
  const [navActive, setNavActive] = useState({
    mine: true,
    storage: false,
    production: false,
    portfolio: false
  })

  const classes = {
    mine: !navActive.mine ? `${styles.listItem}` : `${styles.listItem} ${styles.listItem_active}`,
    storage: !navActive.storage ? `${styles.listItem}` : `${styles.listItem} ${styles.listItem_active}`,
    production: !navActive.production ? `${styles.listItem}` : `${styles.listItem} ${styles.listItem_active}`,
    portfolio: !navActive.portfolio ? `${styles.listItem}` : `${styles.listItem} ${styles.listItem_active}`,
  }

  const handleListItemClick = evt => {
    const { id } = evt.target

    const newNavActive = {}
    const keys = Object.keys(navActive)

    keys.forEach(k => newNavActive[k] = false)

    newNavActive[id] = true
    setNavActive(newNavActive)
  }

  return (
    <section className={styles.section} id={'gallery'}>
      <div className="container">
        <SectionTitle title={'Галерея'} />
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <li
              onClick={handleListItemClick}
              id={'mine'}
              className={classes.mine}>Наши карьеры</li>
            <li
              onClick={handleListItemClick}
              id={'storage'}
              className={classes.storage}>Наш склад</li>
            <li
              onClick={handleListItemClick}
              id={'production'}
              className={classes.production}>Наше производство</li>
            <li
              onClick={handleListItemClick}
              id={'portfolio'}
              className={classes.portfolio}>Наши работы</li>
          </ul>
          { navActive.mine && <MineListGrid /> }
          { navActive.storage && <StorageListGrid /> }
          { navActive.production && <ProductionListGrid /> }
          { navActive.portfolio && <PortfolioListWrap /> }

        </div>
      </div>
    </section>
  )
}

export default Gallery
